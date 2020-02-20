//
// @(#)AudioInputUnit.cpp
//
// Copyright 2013 Roland Corporation. All rights reserved.
//

#include "AudioInputUnit.h"
#include <math.h>

#define kSampleRate			(44100.0)
#define kNumOfChannels		(2)
#define kBytesPerFrame		(sizeof(INT16) * kNumOfChannels)
#define kBufferSize			(1024 * kBytesPerFrame)

AudioInputUnit::AudioInputUnit()
{
	mp_delegate = 0;

	m_started = m_recording = false;
	m_currentFrame = 0;
	m_gain = 1.0;

	mp_peak = new int [kNumOfChannels];
	for (int ch = 0; ch < kNumOfChannels; ch++)
		mp_peak[ch] = 0;

	m_win = NULL;
	for (int i = 0; i < WIN_BUF_NUM; i++) {
		mp_wavbuf[i] = new BYTE [kBufferSize];
	}

	memset(&m_wfe, 0, sizeof(m_wfe));
	m_wfe.wFormatTag      = WAVE_FORMAT_PCM;
	m_wfe.nSamplesPerSec  = (DWORD)kSampleRate;
	m_wfe.nChannels       = kNumOfChannels;
	m_wfe.wBitsPerSample  = (kBytesPerFrame / kNumOfChannels) * 8;
	m_wfe.nBlockAlign     = m_wfe.nChannels * m_wfe.wBitsPerSample / 8;
	m_wfe.nAvgBytesPerSec = m_wfe.nSamplesPerSec * m_wfe.nBlockAlign;

	m_thread = NULL;
	m_tid = 0;
}

AudioInputUnit::~AudioInputUnit()
{
	stop(true);

	delete [] mp_peak;

	for (int i = 0; i < WIN_BUF_NUM; i++) {
		delete [] mp_wavbuf[i];
	}
}

void AudioInputUnit::writeBuffer(BYTE* buf, int len)
{
	int frames = len / kBytesPerFrame;

	INT16 peakL = 0;
	INT16 peakR = 0;

	INT16* p = (INT16*)buf;
	for (int i = 0; i < frames; i++) {
		INT16* dataL = p++;
		INT16* dataR = p++;
		*dataL = (INT16)((float)(*dataL) * m_gain);
		*dataR = (INT16)((float)(*dataR) * m_gain);
		if (peakL < *dataL)
			peakL = *dataL;
		if (peakR < *dataR)
			peakR = *dataR;
	}

	if (mp_peak[0] < peakL)
		mp_peak[0] = peakL;
	if (mp_peak[1] < peakR)
		mp_peak[1] = peakR;

	m_currentFrame += frames;

	if (mp_delegate) {
		delegate()->inputStream(buf, len);
	}
}

static DWORD WINAPI _thread(LPVOID param)
{
	AudioInputUnit* _this = (AudioInputUnit*)param;

	_this->run();

	return 0;
}

void AudioInputUnit::run()
{
	MSG msg;
	while (GetMessage(&msg, NULL, 0, 0)) {
		switch (msg.message) {
		case MM_WIM_CLOSE:
			break;
		case MM_WIM_DATA:
			if (msg.lParam != 0) {
				WAVEHDR* pwh = (WAVEHDR*)msg.lParam;
				if (pwh->dwFlags & WHDR_PREPARED) {
					::waveInUnprepareHeader(m_win, pwh, sizeof(WAVEHDR));
					writeBuffer((BYTE*)pwh->lpData, pwh->dwBufferLength);
					::waveInPrepareHeader(m_win, pwh, sizeof(WAVEHDR));
					::waveInAddBuffer(m_win, pwh, sizeof(WAVEHDR));
				}
			}
			break;
		}
	}

	::waveInStop(m_win);
	do ::waveInReset(m_win);
	while (::waveInClose(m_win) == WAVERR_STILLPLAYING);
	::waveInClose(m_win);

	m_win = NULL;

	m_currentFrame = 0;
	for (int ch = 0; ch < kNumOfChannels; ch++)
		mp_peak[ch] = 0;
}

void AudioInputUnit::start()
{
	if (m_started && !m_recording) {
		::waveInStart(m_win);
		m_recording = true;
		return;
	}

	if (!m_started) {

		if (m_thread) {
			::WaitForSingleObject(m_thread, INFINITE);
			::CloseHandle(m_thread);
		}

		m_thread = ::CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)_thread, (void*)this, 0, &m_tid);
		if (!m_thread) return;
		SetThreadPriority(m_thread, THREAD_PRIORITY_TIME_CRITICAL);

		MMRESULT result = ::waveInOpen(&m_win, WAVE_MAPPER, format(), (DWORD_PTR)m_tid, NULL, CALLBACK_THREAD);
		if (result != MMSYSERR_NOERROR) {
			::PostThreadMessage(m_tid, WM_QUIT, 0, 0);
			m_win = NULL;
			return;
		}

		m_started = true;
		m_recording = true;

		::waveInReset(m_win);

		memset(m_whdr, 0, sizeof(m_whdr));
		for (int i = 0; i < WIN_BUF_NUM; i++) {
			m_whdr[i].lpData = (LPSTR)mp_wavbuf[i];
			m_whdr[i].dwBufferLength = kBufferSize;
			::waveInPrepareHeader(m_win, &m_whdr[i], sizeof(WAVEHDR));
			::waveInAddBuffer(m_win, &m_whdr[i], sizeof(WAVEHDR));
		}

		::waveInStart(m_win);
	}
}

void AudioInputUnit::pause()
{
	if (m_started && m_recording) {
		::waveInStop(m_win);
		m_recording = false;
	}
}

void AudioInputUnit::stop(bool shouldStopImmediate)
{
	if (m_started) {
		::PostThreadMessage(m_tid, WM_QUIT, 0, 0);
		if (::GetCurrentThreadId() != m_tid) {
			::WaitForSingleObject(m_thread, INFINITE);
			::CloseHandle(m_thread);
			m_thread = NULL;
		}
	}

	m_started = false;
	m_recording = false;

	if (!shouldStopImmediate && mp_delegate) {
		mp_delegate->inputStreamDidClosed();
	}
}

int AudioInputUnit::status() const
{
	if (m_recording)
		return kAudioInputStatusStart;
	else if (m_started)
		return kAudioInputStatusPause;
	return kAudioInputStatusStop;
}

float AudioInputUnit::currentTime() const
{
	return (float)(m_currentFrame / kSampleRate);
}

int AudioInputUnit::numberOfChannels() const
{
	return kNumOfChannels;
}

float AudioInputUnit::peakPowerForChannel(int channelNumber) const
{
	float peakPower = -120.0;

	if (0 <= channelNumber && channelNumber < kNumOfChannels) {
		if (mp_peak[channelNumber]) { 
			peakPower = (float)(20 * log10(mp_peak[channelNumber] / 32767.0));
			if (peakPower < -120.0)
				peakPower = -120.0;
		}
		mp_peak[channelNumber] = 0;
	}

	return peakPower;
}
