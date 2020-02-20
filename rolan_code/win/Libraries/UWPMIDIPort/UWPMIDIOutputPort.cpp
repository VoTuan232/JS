/*
 * @(#)UWPMIDIOutputPort.cpp
 *
 * Copyright 2017 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#include "../MIDIClient/MIDIClient.h"

void UWPMIDIOutputPort::getDevices(std::vector<MIDI_ENDPOINT_INFO>& devs)
{
	uwpmidi_getdevices(mp_watcher, devs);
}

void UWPMIDIOutputPort::connectEndpoint(const MIDI_ENDPOINT_INFO* ep)
{
	if (ep != NULL) {

		int id, numDevs = gWinRTWatcherPortCount(mp_watcher);
		for (id = 0; id < numDevs; id++) {
			if (ep->uid == gWinRTWatcherPortUid(mp_watcher, id)) {
				break;
			}
		}

		if (id < numDevs) {
			mutex_lock obj(mtx_endpoints);
			std::map<CString, WinRTMidiOutPortPtr>::iterator iter = m_endpoints.find(ep->uid);
			if (iter != m_endpoints.end()) {
				gWinRTMidiOutPortFree(iter->second);
				m_endpoints.erase(iter);
			}
			WinRTMidiOutPortPtr out = nullptr;
			WinRTMidiErrorType err = gWinRTMidiOutPortOpen(mp_midi, id, &out);
			if (err == WINRT_NO_ERROR) {
				m_endpoints.insert(std::make_pair(ep->uid, out));
				return;
			}
		}
	}

	if (mp_client->mp_delegate)
		mp_client->mp_delegate->midiOutputPortConnectFailed(ep);
}

void UWPMIDIOutputPort::connectAllEndpoints()
{
	std::vector<MIDI_ENDPOINT_INFO> devs;
	getDevices(devs);

	std::vector<MIDI_ENDPOINT_INFO>::iterator iter;
	for (iter = devs.begin(); iter != devs.end(); iter++) {
		MIDI_ENDPOINT_INFO out = *iter;
		connectEndpoint(&out);
	}
}

void UWPMIDIOutputPort::disconnectEndpoint(const MIDI_ENDPOINT_INFO* ep)
{
	if (ep == NULL) return;

	mutex_lock obj(mtx_endpoints);

	std::map<CString, WinRTMidiOutPortPtr>::iterator iter = m_endpoints.find(ep->uid);
	if (iter != m_endpoints.end()) {
		gWinRTMidiOutPortFree(iter->second);
		m_endpoints.erase(iter);
	}
}

void UWPMIDIOutputPort::disconnectAllEndpoints()
{
	mutex_lock obj(mtx_endpoints);

	std::map<CString, WinRTMidiOutPortPtr>::iterator iter = m_endpoints.begin();
	while (iter != m_endpoints.end()) {
		gWinRTMidiOutPortFree(iter->second);
		iter = m_endpoints.erase(iter);
	}
}

void UWPMIDIOutputPort::send(const BYTE* data, int datalen, bool sysex)
{
	mutex_lock obj(mtx_endpoints);

	std::map<CString, WinRTMidiOutPortPtr>::iterator iter = m_endpoints.begin();
	for ( ; iter != m_endpoints.end(); iter++) {
		gWinRTMidiOutPortSend(iter->second, data, datalen);
	}
}

#endif /* USE_UWP_MIDI */
