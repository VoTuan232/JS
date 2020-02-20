/*
 * @(#)UWPMIDIInputPort.cpp
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#include "../MIDIClient/MIDIClient.h"

void UWPMIDIInputPort::getDevices(std::vector<MIDI_ENDPOINT_INFO>& devs)
{
	uwpmidi_getdevices(mp_watcher, devs);
}

void UWPMIDIInputPort::connectEndpoint(const MIDI_ENDPOINT_INFO* ep)
{
	UWPMIDIInputEndpoint* in = 0;

	if (ep != NULL) {

		UINT id, numDevs = gWinRTWatcherPortCount(mp_watcher);
		for (id = 0; id < numDevs; id++) {
			if (ep->uid == gWinRTWatcherPortUid(mp_watcher, id)) {
				break;
			}
		}

		if (id < numDevs) {
			std::map<CString, UWPMIDIInputEndpoint*>::iterator iter = m_endpoints.find(ep->uid);
			if (iter != m_endpoints.end()) {
				in = iter->second;
				if (in->open(mp_midi, id)) {
					return;
				}
				m_endpoints.erase(iter);
			} else {
				in = new UWPMIDIInputEndpoint(this);
				if (in->open(mp_midi, id)) {
					m_endpoints.insert(std::make_pair(ep->uid, in));
					return;
				}
			}
		}
	}

	delete in;

	if (mp_client->mp_delegate)
		mp_client->mp_delegate->midiInputPortConnectFailed(ep);
}

void UWPMIDIInputPort::connectAllEndpoints()
{
	std::vector<MIDI_ENDPOINT_INFO> devs;
	getDevices(devs);

	std::vector<MIDI_ENDPOINT_INFO>::iterator iter;
	for (iter = devs.begin(); iter != devs.end(); iter++) {
		MIDI_ENDPOINT_INFO in = *iter;
		connectEndpoint(&in);
	}
}

void UWPMIDIInputPort::disconnectEndpoint(const MIDI_ENDPOINT_INFO* ep)
{
	if (ep == NULL) return;

	std::map<CString, UWPMIDIInputEndpoint*>::iterator iter = m_endpoints.find(ep->uid);
	if (iter != m_endpoints.end()) {
		UWPMIDIInputEndpoint* in = iter->second;
		delete in;
		m_endpoints.erase(iter);
	}
}

void UWPMIDIInputPort::disconnectAllEndpoints()
{
	std::map<CString, UWPMIDIInputEndpoint*>::iterator iter = m_endpoints.begin();
	while (iter != m_endpoints.end()) {
		UWPMIDIInputEndpoint* in = iter->second;
		delete in;
		iter = m_endpoints.erase(iter);
	}
}

#endif /* USE_UWP_MIDI */
