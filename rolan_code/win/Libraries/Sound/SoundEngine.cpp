//
// @(#)SoundEngine.cpp
//
// Copyright 2019 Roland Corporation. All rights reserved.
//

#include "SoundEngine.h"

SoundEngine::SoundEngine(int framesPerBurst, int bufNum)
{
	m_started = false;

	memset(&m_wfe, 0, sizeof(m_wfe));
#ifdef USE_WAVE_FORMAT_IEEE_FLOAT
	m_wfe.wFormatTag      = WAVE_FORMAT_IEEE_FLOAT;
#else
	m_wfe.wFormatTag      = WAVE_FORMAT_PCM;
#endif
	m_wfe.nSamplesPerSec  = kSampleRate;
	m_wfe.nChannels       = kNumOfChannels;
	m_wfe.wBitsPerSample  = kBitsPerSample;
	m_wfe.nBlockAlign     = kBytesPerFrame;
	m_wfe.nAvgBytesPerSec = (m_wfe.nSamplesPerSec * m_wfe.nBlockAlign);

	m_bufNum0 = min(max(1, bufNum), WOUT_MAX_BUF_NUM);
	m_bufNum = 0;
	m_bufSize = (kBytesPerFrame * framesPerBurst);

	m_wout = NULL;
	for (int i = 0; i < WOUT_MAX_BUF_NUM; i++) {
		mp_outputs[i] = new BYTE [m_bufSize];
	}

	m_thread = NULL;
	m_tid = 0;

	start();
}

SoundEngine::~SoundEngine()
{
	stop();

	for (int i = 0; i < WOUT_MAX_BUF_NUM; i++) {
		delete [] mp_outputs[i];
	}
}

static DWORD WINAPI _thread(LPVOID param)
{
	SoundEngine* _this = (SoundEngine*)param;

	_this->run();

	return 0;
}

void SoundEngine::run()
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
					if (!render(pwh->lpData, pwh->dwBufferLength)) {
						memset(pwh->lpData, 0, pwh->dwBufferLength);
					}
					::waveOutPrepareHeader(m_wout, pwh, sizeof(WAVEHDR));
					::waveOutWrite(m_wout, pwh, sizeof(WAVEHDR));
				}
			}
			break;
		}
	}

	::waveOutReset(m_wout);

	int bufNum = m_bufNum ? m_bufNum : m_bufNum0;
	for (int i = 0; i < bufNum; i++) {
		if (m_whdr[i].dwFlags & WHDR_PREPARED) {
			::waveOutUnprepareHeader(m_wout, &m_whdr[i], sizeof(WAVEHDR));
		}
	}

	do ::waveOutReset(m_wout);
	while (::waveOutClose(m_wout) == WAVERR_STILLPLAYING);

	m_wout = NULL;
}

void SoundEngine::start()
{
	if (m_started) return;

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

	int bufNum = m_bufNum ? m_bufNum : m_bufNum0;

	memset(m_whdr, 0, sizeof(m_whdr));
	for (int i = 0; i < bufNum; i++) {
		memset(mp_outputs[i], 0, m_bufSize);
		m_whdr[i].lpData = (LPSTR)mp_outputs[i];
		m_whdr[i].dwBufferLength = m_bufSize;
	}

	for (int i = 0; i < bufNum; i++) {
		render(mp_outputs[i], m_bufSize);
		::waveOutPrepareHeader(m_wout, &m_whdr[i], sizeof(WAVEHDR));
		::waveOutWrite(m_wout, &m_whdr[i], sizeof(WAVEHDR));
	}
}

void SoundEngine::stop()
{
	if (m_started) {
		::PostThreadMessage(m_tid, WM_QUIT, 0, 0);
		if (::GetCurrentThreadId() != m_tid) {
			::WaitForSingleObject(m_thread, INFINITE);
			::CloseHandle(m_thread);
			m_thread = NULL;
		}
		m_started = false;
	}
}

void SoundEngine::bufferNum(int num)
{
	stop();
	m_bufNum = min(max(0, num), WOUT_MAX_BUF_NUM);
	start();
}

bool SoundEngine::render(void* outputs, int bytes)
{
	return false;
}
