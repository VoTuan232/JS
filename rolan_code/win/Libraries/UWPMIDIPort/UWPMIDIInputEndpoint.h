/*
 * @(#)UWPMIDIInputEndpoint.h
 *
 * Copyright 2018 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#ifndef __UWP_MIDI_INPUT_ENDPOINT_H__
#define __UWP_MIDI_INPUT_ENDPOINT_H__

#include "UWPMIDIPort.h"

class UWPMIDIInputPort;

class UWPMIDIInputEndpoint
{
  public:
	UWPMIDIInputEndpoint(UWPMIDIInputPort* inputPort);
	~UWPMIDIInputEndpoint();

	bool open(WinRTMidiPtr midi, UINT id);
	void close();
	void parse(const BYTE* msg, int bytes, DWORD msec);

  private:
	UWPMIDIInputPort* mp_inputPort;
	WinRTMidiInPortPtr m_in;

	enum { kSysexBufSize = 512 };
	BYTE running;
	int sysex_len;
	BYTE sysex_buf[kSysexBufSize];
};

inline UWPMIDIInputEndpoint::UWPMIDIInputEndpoint(UWPMIDIInputPort* inputPort)
	: mp_inputPort(inputPort), m_in(nullptr)
	{ running= 0; sysex_len = 0; }

inline UWPMIDIInputEndpoint::~UWPMIDIInputEndpoint()
	{ close(); }

#endif /* __UWP_MIDI_INPUT_ENDPOINT_H__ */

#endif /* USE_UWP_MIDI */
