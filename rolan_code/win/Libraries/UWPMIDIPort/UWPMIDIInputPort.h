/*
 * @(#)UWPMIDIInputPort.h
 *
 * Copyright 2017 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#ifndef __UWP_MIDI_INPUT_PORT_H__
#define __UWP_MIDI_INPUT_PORT_H__

#include "../MIDIClient/MIDIInputPort.h"
#include "UWPMIDIPort.h"
#include "UWPMIDIInputEndpoint.h"

class UWPMIDIInputPort : public MIDIInputPort
{
  public:
	UWPMIDIInputPort(MIDIClient *client, WinRTMidiPtr midi);
	virtual ~UWPMIDIInputPort() {}

	virtual void connectEndpoint(const MIDI_ENDPOINT_INFO* ep);
	virtual void disconnectEndpoint(const MIDI_ENDPOINT_INFO* ep);
	virtual void connectAllEndpoints();
	virtual void disconnectAllEndpoints();

	void input(const BYTE* msg, int bytes, DWORD msec);

  private:
	WinRTMidiPtr mp_midi;
	WinRTMidiPortWatcherPtr mp_watcher;
	std::map<CString, UWPMIDIInputEndpoint*> m_endpoints;

	virtual void getDevices(std::vector<MIDI_ENDPOINT_INFO>& devs);
};

inline UWPMIDIInputPort::UWPMIDIInputPort(MIDIClient* client, WinRTMidiPtr midi)
	: MIDIInputPort(client)
{
	mp_midi = midi;
	mp_watcher = gWinRTMidiGetPortWatcher(midi, In);
}

inline void UWPMIDIInputPort::input(const BYTE* msg, int bytes, DWORD msec)
{
	if (mp_delegate)
		mp_delegate->midiInputMessage(msg, bytes, msec);
}

#endif /* __UWP_MIDI_INPUT_PORT_H__ */

#endif /* USE_UWP_MIDI */
