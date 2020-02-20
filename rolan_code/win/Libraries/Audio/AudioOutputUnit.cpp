//
// @(#)AudioOutputUnit.cpp
//
// Copyright 2013 Roland Corporation. All rights reserved.
//

#include "AudioOutputUnit.h"
#include <math.h>

#define kSampleRate				(44100.0)
#define kNumOfChannels			(2)
#define kBytesPer24bitFrame		(3 * kNumOfChannels)
#define kBufferSize				(1024 * kBytesPer24bitFrame)

AudioOutputUnit::AudioOutputUnit()
{
	mp_delegate = 0;

	m_started = m_playing = false;
	m_currentFrame = 0;
	m_gain = 1.0;

	mp_peak = new int [kNumOfChannels];
	for (int ch = 0; ch < kNumOfChannels; ch++)
		mp_peak[ch] = 0;

	m_wout = NULL;
	for (int i = 0; i < WOUT_BUF_NUM; i++) {
		mp_wavbuf[i] = new BYTE [kBufferSize];
	}

	memset(&m_wfe, 0, sizeof(m_wfe));

	m_thread = NULL;
	m_tid = 0;
}

AudioOutputUnit::~AudioOutputUnit()
{
	stop();

	delete [] mp_peak;

	for (int i = 0; i < WOUT_BUF_NUM; i++) {
		delete [] mp_wavbuf[i];
	}
}

bool AudioOutputUnit::format(WAVEFORMATEX* wf)
{
	if (wf->wFormatTag != WAVE_FORMAT_PCM)
		return false;

	if (wf->nSamplesPerSec != (DWORD)kSampleRate)
		return false;

	if (wf->nChannels > kNumOfChannels)
		return false;

	switch (wf->wBitsPerSample) {
		case  8:
		case 16:
		case 24:
			break;
		default:
			return false;
	}

	memset(&m_wfe, 0, sizeof(m_wfe));
	m_wfe.wFormatTag = wf->wFormatTag;
	m_wfe.nSamplesPerSec =  wf->nSamplesPerSec;
	m_wfe.nChannels =  wf->nChannels;
	m_wfe.wBitsPerSample = wf->wBitsPerSample;
	m_wfe.nBlockAlign = wf->nBlockAlign;
	m_wfe.nAvgBytesPerSec = wf->nAvgBytesPerSec;

	return true;
}

void AudioOutputUnit::readBuffer(BYTE* buf, int len)
{
	int frames = 0;

	if (mp_delegate) {
		frames = mp_delegate->outputStream(buf, len)
			/ (m_wfe.nChannels * (m_wfe.wBitsPerSample / 8));
	}

	int peakL = 0;
	int peakR = 0;

	switch (m_wfe.wBitsPerSample) {

		case 24:
		{
			BYTE* p = (BYTE*)buf;
			for (int i = 0; i < frames; i++) {
				INT32 dataL = (INT32)((*p << 8) | (*(p + 1) << 16) | (*(p + 2) << 24));
				dataL = (INT32)((float)(dataL) * m_gain);
				*p++ = (BYTE)(dataL >>  8);
				*p++ = (BYTE)(dataL >> 16);
				*p++ = (BYTE)(dataL >> 24);
				dataL >>= 16;
				if (peakL < dataL)
					peakL = dataL;
				if (m_wfe.nChannels == 2) {
					INT32 dataR = (INT32)((*p << 8) | (*(p + 1) << 16) | (*(p + 2) << 24));
					dataR = (int)((float)(dataR) * m_gain);
					*p++ = (BYTE)(dataR >>  8);
					*p++ = (BYTE)(dataR >> 16);
					*p++ = (BYTE)(dataR >> 24);
					dataR >>= 16;
					if (peakR < dataR)
						peakR = dataR;
				}
			}
		}
			break;

		case 16:
		{
			INT16* p = (INT16*)buf;
			for (int i = 0; i < frames; i++) {
				INT16* dataL = p++;
				*dataL = (INT16)((float)(*dataL) * m_gain);
				if (peakL < *dataL)
					peakL = *dataL;
				if (m_wfe.nChannels == 2) {
					INT16* dataR = p++;
					*dataR = (INT16)((float)(*dataR) * m_gain);
					if (peakR < *dataR)
						peakR = *dataR;
				}
			}
		}
			break;

		case 8:
		{
			BYTE* p = (BYTE*)buf;
			for (int i = 0; i < frames; i++) {
				BYTE* dataL = p++;
				*dataL = (BYTE)((float)(*dataL) * m_gain);
				INT16 l = *dataL; l -= 0x80; l <<= 8;
				if (peakL < l)
					peakL = l;
				if (m_wfe.nChannels == 2) {
					BYTE* dataR = p++;
					*dataR = (BYTE)((float)(*dataR) * m_gain);
					INT16 r = *dataR; r -= 0x80; r <<= 8;
					if (peakR < r)
						peakR = r;
				}
			}
		}
			break;
	}

	if (mp_peak[0] < peakL)
		mp_peak[0] = peakL;
	if (mp_peak[1] < peakR)
		mp_peak[1] = peakR;

	m_currentFrame += frames;
}

static DWORD WINAPI _thread(LPVOID param)
{
	AudioOutputUnit* _this = (AudioOutputUnit*)param;

	_this->run();

	return 0;
}

void AudioOutputUnit::run()
{
	MSG msg;
	while (GetMessage(&msg, NULL, 0, 0)) {
		switch (msg.message) {
		case MM_WOM_CLOSE:
			break;
		case MM_WOM_DONE:
			if (msg.lParam) {
				WAVEHDR* pwh = (WAVEHDR*)msg.lParam;
				if (pwh->dwFlags & WHDR_PREPARED) {
					::waveOutUnprepareHeader(m_wout, pwh, sizeof(WAVEHDR));
					readBuffer((BYTE *)pwh->lpData, pwh->dwBufferLength);
					::waveOutPrepareHeader(m_wout, pwh, sizeof(WAVEHDR));
					::waveOutWrite(m_wout, pwh, sizeof(WAVEHDR));
				}
			}
			break;
		}
	}

	::waveOutReset(m_wout);

	for (int i = 0; i < WOUT_BUF_NUM; i++) {
		if (m_whdr[i].dwFlags & WHDR_PREPARED) {
			::waveOutUnprepareHeader(m_wout, &m_whdr[i], sizeof(WAVEHDR));
		}
	}

	do ::waveOutReset(m_wout);
	while (::waveOutClose(m_wout) == WAVERR_STILLPLAYING);

	m_wout = NULL;

	m_currentFrame = 0;
	for (int ch = 0; ch < kNumOfChannels; ch++)
		mp_peak[ch] = 0;
}

void AudioOutputUnit::start()
{
	if (m_started && !m_playing) {
		::waveOutRestart(m_wout);
		m_playing = true;
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

		MMRESULT result = ::waveOutOpen(&m_wout, WAVE_MAPPER, &m_wfe, (DWORD_PTR)m_tid, NULL, CALLBACK_THREAD);
		if (result != MMSYSERR_NOERROR) {
			::PostThreadMessage(m_tid, WM_QUIT, 0, 0);
			m_wout = NULL;
			return;
		}

		m_started = true;
		m_playing = true;

		memset(m_whdr, 0, sizeof(m_whdr));
		for (int i = 0; i < WOUT_BUF_NUM; i++) {
			memset(mp_wavbuf[i], 0, kBufferSize);
			m_whdr[i].lpData = (LPSTR)mp_wavbuf[i];
			m_whdr[i].dwBufferLength = kBufferSize;
		}

		for (int i = 0; i < WOUT_BUF_NUM; i++) {
			readBuffer(mp_wavbuf[i], kBufferSize);
			::waveOutPrepareHeader(m_wout, &m_whdr[i], sizeof(WAVEHDR));
			::waveOutWrite(m_wout, &m_whdr[i], sizeof(WAVEHDR));
		}
	}
}

void AudioOutputUnit::pause()
{
	if (m_started && m_playing) {
		::waveOutPause(m_wout);
		m_playing = false;
	}
}

void AudioOutputUnit::stop()
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
	m_playing = false;
}

int AudioOutputUnit::status() const
{
	if (m_playing)
		return kAudioOutputStatusStart;
	else if (m_started)
		return kAudioOutputStatusPause;
	return kAudioOutputStatusStop;
}

float AudioOutputUnit::currentTime() const
{
	return m_wfe.nSamplesPerSec ? (float)(m_currentFrame / m_wfe.nSamplesPerSec) : 0;
}

int AudioOutputUnit::numberOfChannels() const
{
	return m_wfe.nChannels;
}

float AudioOutputUnit::peakPowerForChannel(int channelNumber) const
{
	float peakPower = -120.0;

	if (0 <= channelNumber && channelNumber < kNumOfChannels) {
		if (m_playing && mp_peak[channelNumber]) {
			peakPower = (float)(20 * log10(mp_peak[channelNumber] / 32767.0));
			if (peakPower < -120.0)
				peakPower = -120.0;
		}
		mp_peak[channelNumber] = 0;
	}

	return peakPower;
}
