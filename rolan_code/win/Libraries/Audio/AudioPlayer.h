//
// @(#)AudioPlayer.h
//
// Copyright 2013 Roland Corporation. All rights reserved.
//

#ifndef __AUDIO_PLAYER_H__
#define __AUDIO_PLAYER_H__

#include <windows.h>
#include <mmsystem.h>
#include <tchar.h>
#include "AudioOutputStream.h"

class AudioPlayerDelegate
{
  public:
	virtual ~AudioPlayerDelegate() { }

	/* @optional */
	virtual void audioPlayerDidEndSong(LPCTSTR file) { }
	virtual void audioPlayerDidFinishPlaying(LPCTSTR file) { }
	virtual void audioPlayerErrorDidOccur(LPCTSTR file) { }
};

class AudioPlayer : public AudioOutputStreamDelegate
{
  public:
	AudioPlayer();
	virtual ~AudioPlayer();

	void delegate(AudioPlayerDelegate* obj);
	AudioPlayerDelegate* delegate() const;

	void output(AudioOutputStream* output);
	AudioOutputStream* output() const;

	virtual bool open(LPCTSTR file);
	virtual void close();

	virtual void play();
	virtual void pause();
	virtual void stop();

	virtual void locate(float time);

	void volume(float gain);
	float volume() const;

	LPCTSTR file() const;
	int status() const;
	int numberOfChannels() const;
	float peakPowerForChannel(int channelNumber) const;
	virtual float currentTime() const;
	float totalTime() const;

	/* AudioOutputStreamDelegate */
	virtual int outputStream(BYTE* buffer, int length);

  private:
	void closeFile();

  protected:
	AudioPlayerDelegate* mp_delegate;
	AudioOutputStream* mp_output;

	LPTSTR mp_file;
	HMMIO m_hmmio;
	BYTE* mp_mmck;
	LONG m_offset0;
	float m_totalTime;
	float m_locateTime;
};

inline void AudioPlayer::delegate(AudioPlayerDelegate* obj)
	{ mp_delegate = obj; }
inline AudioPlayerDelegate* AudioPlayer::delegate() const
	{ return mp_delegate; }

inline AudioOutputStream* AudioPlayer::output() const
	{ return mp_output; }

inline LPCTSTR AudioPlayer::file() const
	{ return mp_file; }

#endif /* __AUDIO_PLAYER_H__ */
