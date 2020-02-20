/*
 * @(#)UWPMIDIOutputPort.h
 *
 * Copyright 2017 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#ifndef __UWP_MIDI_OUTPUT_PORT_H__
#define __UWP_MIDI_OUTPUT_PORT_H__

#include "../MIDIClient/MIDIOutputPort.h"
#include "UWPMIDIPort.h"

class UWPMIDIOutputPort : public MIDIOutputPort
{
  public:
	UWPMIDIOutputPort(MIDIClient *client, WinRTMidiPtr midi);
	virtual ~UWPMIDIOutputPort() {}

	virtual void connectEndpoint(const MIDI_ENDPOINT_INFO* ep);
	virtual void disconnectEndpoint(const MIDI_ENDPOINT_INFO* ep);
	virtual void connectAllEndpoints();
	virtual void disconnectAllEndpoints();

  private:
	WinRTMidiPtr mp_midi;
	WinRTMidiPortWatcherPtr mp_watcher;
	std::map<CString, WinRTMidiOutPortPtr> m_endpoints;

	virtual void getDevices(std::vector<MIDI_ENDPOINT_INFO>& devs);
	virtual void send(const BYTE* data, int datalen, bool sysex);
};

inline UWPMIDIOutputPort::UWPMIDIOutputPort(MIDIClient* client, WinRTMidiPtr midi)
	: MIDIOutputPort(client)
{
	mp_midi = midi;
	mp_watcher = gWinRTMidiGetPortWatcher(midi, Out);
}

#endif /* __UWP_MIDI_OUTPUT_PORT_H__ */

#endif /* USE_UWP_MIDI */
