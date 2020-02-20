//
//  AudioRecorder.h
//
//  Copyright 2012 Roland Corporation. All rights reserved.
//

#ifndef __AUDIO_RECORDER_H__
#define __AUDIO_RECORDER_H__

#include <windows.h>
#include <mmsystem.h>
#include <tchar.h>
#include "AudioInputStream.h"

enum RecordingFormat {
    kRecordingFormatAAC_256K, /* Not Supported */
    kRecordingFormatAAC_192K, /* Not Supported */
    kRecordingFormatAAC_128K, /* Not Supported */
    kRecordingFormatAAC_64K,  /* Not Supported */
    kRecordingFormatWAV
};

class AudioRecorderDelegate
{
  public:
	virtual ~AudioRecorderDelegate() { }

	/* @optional */
	virtual void audioRecorderDidFinishRecording(LPCTSTR file) { }
	virtual void audioRecorderErrorDidOccur(LPCTSTR file) { }
};

class AudioRecorder : public AudioInputStreamDelegate
{
  public:
	AudioRecorder();
	virtual ~AudioRecorder();

	void delegate(AudioRecorderDelegate* obj);
	AudioRecorderDelegate* delegate();

	void input(AudioInputStream* input);
	AudioInputStream* input() const;

	virtual bool create(LPCTSTR file, enum RecordingFormat format);

	virtual void record();
	virtual void pause();
	virtual void stop(bool shouldStopImmediate);

	void volume(float gain);
	float volume();

	LPCTSTR file() const;
	int status();
	int numberOfChannels();
	float peakPowerForChannel(int channelNumber);
	float currentTime();

	/* AudioInputtStreamDelegate */
	virtual void inputStream(const BYTE* buffer, int length);
	virtual void inputStreamDidClosed();

  private:
	void close();
	void closeFile();

  protected:
	AudioRecorderDelegate* mp_delegate;
	AudioInputStream* mp_input;

	LPTSTR mp_file;
	HMMIO m_hmmio;
	MMCKINFO m_mmckRif;
	MMCKINFO m_mmckDat;
};

inline void AudioRecorder::delegate(AudioRecorderDelegate* obj)
	{ mp_delegate = obj; }
inline AudioRecorderDelegate* AudioRecorder::delegate()
	{ return mp_delegate; }

inline AudioInputStream* AudioRecorder::input() const
	{ return mp_input; }

inline LPCTSTR AudioRecorder::file() const
	{ return mp_file; }

#endif /* __AUDIO_RECORDER_H__ */
