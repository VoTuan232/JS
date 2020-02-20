/*
 * @(#)UWPMIDIPort.cpp
 *
 * Copyright 2017 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#include "../MIDIClient/MIDIClient.h"

static HMODULE dllHandle = NULL;
static LONG loadCount = 0;

WinRTMidiInitializeFunc     gWinRTMidiInitialize = nullptr;
WinRTMidiFreeFunc           gWinRTMidiFree = nullptr;
WinRTMidiGetPortWatcherFunc gWinRTMidiGetPortWatcher = nullptr;
WinRTWatcherPortCountFunc   gWinRTWatcherPortCount = nullptr;
WinRTWatcherPortNameFunc    gWinRTWatcherPortName = nullptr;
WinRTWatcherPortUidFunc     gWinRTWatcherPortUid = nullptr;
WinRTMidiInPortOpenFunc     gWinRTMidiInPortOpen = nullptr;
WinRTMidiInPortFreeFunc     gWinRTMidiInPortFree = nullptr;
WinRTMidiOutPortOpenFunc    gWinRTMidiOutPortOpen = nullptr;
WinRTMidiOutPortFreeFunc    gWinRTMidiOutPortFree = nullptr;
WinRTMidiOutPortSendFunc    gWinRTMidiOutPortSend = nullptr;

void uwpmidi_notify(
	const WinRTMidiPortWatcherPtr watcher,
	WinRTMidiPortUpdateType update,
	void* instance)
{
	MIDIClient* _this = (MIDIClient*)instance;

	switch (update) {
		case PortAdded:
		case PortRemoved:
			if (_this) _this->portAddedRemoved();
			break;
	}
}

void uwpmidi_input(
	const WinRTMidiInPortPtr port,
	double timeStamp,
	const unsigned char* message,
	unsigned int bytes,
	void* instance)
{
	UWPMIDIInputEndpoint* _this = (UWPMIDIInputEndpoint*)instance;
	if (_this) _this->parse(message, bytes, DWORD(timeStamp * 1000));
}

bool uwpmidi_initialize()
{
	if (dllHandle == NULL) {
		dllHandle = ::LoadLibrary(L"WinRTMidi.dll");
		if (dllHandle == NULL) return false;

		gWinRTMidiInitialize = reinterpret_cast<WinRTMidiInitializeFunc>(::GetProcAddress(dllHandle, "winrt_initialize_midi"));
		gWinRTMidiFree = reinterpret_cast<WinRTMidiFreeFunc>(::GetProcAddress(dllHandle, "winrt_free_midi"));
		gWinRTMidiGetPortWatcher = reinterpret_cast<WinRTMidiGetPortWatcherFunc>(::GetProcAddress(dllHandle, "winrt_get_portwatcher"));
		gWinRTWatcherPortCount = reinterpret_cast<WinRTWatcherPortCountFunc>(::GetProcAddress(dllHandle, "winrt_watcher_get_port_count"));
		gWinRTWatcherPortName = reinterpret_cast<WinRTWatcherPortNameFunc>(::GetProcAddress(dllHandle, "winrt_watcher_get_port_name"));
		gWinRTWatcherPortUid = reinterpret_cast<WinRTWatcherPortUidFunc>(::GetProcAddress(dllHandle, "winrt_watcher_get_port_uid"));
		gWinRTMidiInPortOpen = reinterpret_cast<WinRTMidiInPortOpenFunc>(::GetProcAddress(dllHandle, "winrt_open_midi_in_port"));
		gWinRTMidiInPortFree = reinterpret_cast<WinRTMidiInPortFreeFunc>(::GetProcAddress(dllHandle, "winrt_free_midi_in_port"));
		gWinRTMidiOutPortOpen = reinterpret_cast<WinRTMidiOutPortOpenFunc>(::GetProcAddress(dllHandle, "winrt_open_midi_out_port"));
		gWinRTMidiOutPortFree = reinterpret_cast<WinRTMidiOutPortFreeFunc>(::GetProcAddress(dllHandle, "winrt_free_midi_out_port"));
		gWinRTMidiOutPortSend = reinterpret_cast<WinRTMidiOutPortSendFunc>(::GetProcAddress(dllHandle, "winrt_midi_out_port_send"));
	}

	::InterlockedIncrement(&loadCount);

	return true;
}

void uwpmidi_cleanup()
{
	if (dllHandle && loadCount > 0) {
		::InterlockedDecrement(&loadCount);
		if (loadCount <= 0) {
			::FreeLibrary(dllHandle);
			dllHandle = NULL;
		}
	}
}

void uwpmidi_getdevices(
	const WinRTMidiPortWatcherPtr watcher,
	std::vector<MIDI_ENDPOINT_INFO>& devs)
{
	devs.clear();

	UINT id, numDevs = gWinRTWatcherPortCount(watcher);
	for (id = 0; id < numDevs; id++) {
		MIDI_ENDPOINT_INFO ep;
		ep.name = gWinRTWatcherPortName(watcher, id);
		ep.entity = ep.name;
		ep.uid = gWinRTWatcherPortUid(watcher, id);
		ep.index = ep.name;
		int pos = ep.uid.ReverseFind(TEXT('.'));
		if (pos != -1) {
			if (ep.uid.Find(TEXT(".BLE")) != -1)  {
				ep.index = ep.uid.Left(pos - 1) + TEXT("X");
			} else {
				ep.index = ep.uid.Left(pos);
			}
		}
		devs.push_back(ep);
	}
}

#endif /* USE_UWP_MIDI */
