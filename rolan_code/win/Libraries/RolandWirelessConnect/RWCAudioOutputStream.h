//
// @(#)RWCAudioOutputStream.h
//
// Copyright 2013 Roland Corporation. All rights reserved.
//

#ifndef __RWC_AUDIO_OUTPUT_STREAM_H__
#define __RWC_AUDIO_OUTPUT_STREAM_H__

#include "RWCNetServer.h"
#include "../Audio/AudioOutputStream.h"

class RWCConnection;

class RWCAudioOutputStream : public AudioOutputStream, RWCNetServer
{
  public:
	RWCAudioOutputStream(RWCConnection* conn);
	virtual ~RWCAudioOutputStream();

	void delegate(AudioOutputStreamDelegate* obj);
	AudioOutputStreamDelegate* delegate() const;

	void start();
	void pause();
	void stop();

	void volume(float gain);
	float volume() const;

	int status() const;
	int numberOfChannels() const;
	float peakPowerForChannel(int channelNumber) const;

	float currentTime() const;

	bool format(WAVEFORMATEX* wf);

  private:
	RWCConnection* mp_connection;
	AudioOutputStreamDelegate* mp_delegate;

	/* RWCNetServer */
	void streamOpenCompleted();
	void streamEndEncountered() { }
	bool streamRunLoop(Socket* socket);

	enum { OUTPUT_BUF_SIZE = 8192 };

	int _length;
	int _offset;
	BYTE _buffer[OUTPUT_BUF_SIZE];

	friend class RWCConnection;
};

/* Inline function declarations */

inline RWCAudioOutputStream::~RWCAudioOutputStream()
	{ stopServer(); }

inline void RWCAudioOutputStream::delegate(AudioOutputStreamDelegate* obj)
	{ mp_delegate = obj; }
inline AudioOutputStreamDelegate* RWCAudioOutputStream::delegate() const
	{ return mp_delegate; }

#endif /* __RWC_AUDIO_OUTPUT_STREAM_H__ */
