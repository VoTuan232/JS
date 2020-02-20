//
// @(#)SoundEngine.h
//
// Copyright 2019 Roland Corporation. All rights reserved.
//

#ifndef __SOUND_ENGINE_H__
#define __SOUND_ENGINE_H__

#include <windows.h>
#include <mmreg.h>
#include "../Common/Thread.h"

#define USE_WAVE_FORMAT_IEEE_FLOAT

class SoundEngine
{
  public:
	static const DWORD kSampleRate = 44100;
	static const WORD  kNumOfChannels = 2;
#ifdef USE_WAVE_FORMAT_IEEE_FLOAT
	static const WORD  kBitsPerSample = (sizeof(float) * 8);
	static const WORD  kBytesPerFrame = (sizeof(float) * kNumOfChannels);
#else
	static const WORD  kBitsPerSample = (sizeof(short) * 8);
	static const WORD  kBytesPerFrame = (sizeof(short) * kNumOfChannels);
#endif

	SoundEngine(int framesPerBurst, int bufNum);
	virtual ~SoundEngine();

	int bufferNum() const { return m_bufNum; };
	void bufferNum(int num);

	void start();
	void stop();

	void run();

  protected:
	virtual bool render(void* outputs, int bytes);

  private:
	HANDLE m_thread;
	DWORD m_tid;
	bool m_started;

	enum { WOUT_MAX_BUF_NUM = 16 };

	WAVEFORMATEX m_wfe;
	HWAVEOUT m_wout;
	WAVEHDR m_whdr[WOUT_MAX_BUF_NUM];
	void* mp_outputs[WOUT_MAX_BUF_NUM];

	int m_bufSize;
	int m_bufNum0;
	int m_bufNum;
};

#endif /* __SOUND_ENGINE_H__ */
