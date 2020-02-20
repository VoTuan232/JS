/*
 * @(#)UWPMIDIPort.h
 *
 * Copyright 2017 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#ifndef __UWP_MIDI_PORT_H__
#define __UWP_MIDI_PORT_H__

#include "../../../contributed/winrtmidi-master/WinRTMidi/WinRTMidi.h"
#include "../../../contributed/winrtmidi-master/WinRTMidi/WindowsVersionHelper.h"

using namespace WinRT;

extern WinRTMidiInitializeFunc     gWinRTMidiInitialize;
extern WinRTMidiFreeFunc           gWinRTMidiFree;
extern WinRTMidiGetPortWatcherFunc gWinRTMidiGetPortWatcher;
extern WinRTWatcherPortCountFunc   gWinRTWatcherPortCount;
extern WinRTWatcherPortNameFunc    gWinRTWatcherPortName;
extern WinRTWatcherPortUidFunc     gWinRTWatcherPortUid;
extern WinRTMidiInPortOpenFunc     gWinRTMidiInPortOpen;
extern WinRTMidiInPortFreeFunc     gWinRTMidiInPortFree;
extern WinRTMidiOutPortOpenFunc    gWinRTMidiOutPortOpen;
extern WinRTMidiOutPortFreeFunc    gWinRTMidiOutPortFree;
extern WinRTMidiOutPortSendFunc    gWinRTMidiOutPortSend;

extern bool uwpmidi_initialize();
extern void uwpmidi_cleanup();

void uwpmidi_getdevices(
	const WinRTMidiPortWatcherPtr watcher,
	std::vector<MIDI_ENDPOINT_INFO>& devs);

extern void uwpmidi_notify(
	const WinRTMidiPortWatcherPtr watcher,
	WinRTMidiPortUpdateType update,
	void* instance);

extern void uwpmidi_input(
	const WinRTMidiInPortPtr port,
	double timeStamp,
	const unsigned char* message,
	unsigned int bytes,
	void* instance);

#endif /* __UWP_MIDI_PORT_H__ */

#endif /* USE_UWP_MIDI */
