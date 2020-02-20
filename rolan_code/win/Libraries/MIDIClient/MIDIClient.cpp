/*
 * @(#)MIDIClient.cpp
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#include "MIDIClient.h"

TCHAR* const MIDIDeviceNameKey    = TEXT("MIDIDeviceNameKey");
TCHAR* const MIDIEntityNameKey    = TEXT("MIDIEntityNameKey");
TCHAR* const MIDIEndpointUIDKey   = TEXT("MIDIEndpointUIDKey");
TCHAR* const MIDIEndpointIndexKey = TEXT("MIDIEndpointIndexKey");

void MIDIClient::checkDevices()
{
	UINT numDevs;

	numDevs = ::midiInGetNumDevs();
	if (m_numInDevs != numDevs) {
		m_numInDevs = numDevs;
		m_changed = true;
	}
	numDevs = ::midiOutGetNumDevs();
	if (m_numOutDevs != numDevs) {
		m_numOutDevs = numDevs;
		m_changed = true;
	}
	if (m_changed && mp_delegate) {
		mp_delegate->midiObjectAddedRemoved();
		m_changed = false;
	}
}
