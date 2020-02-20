/*
 * @(#)MIDIClient.h
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __MIDI_CLIENT_H__
#define __MIDI_CLIENT_H__

#include <windows.h>
#include <mmsystem.h>
#include <mmddk.h>
#include <atlstr.h>
#include "../Common/Timer.h"

extern TCHAR* const MIDIDeviceNameKey;
extern TCHAR* const MIDIEntityNameKey;
extern TCHAR* const MIDIEndpointUIDKey;
extern TCHAR* const MIDIEndpointIndexKey;

#ifndef MIDIDEV_CHECK_INTERVAL
#define MIDIDEV_CHECK_INTERVAL	1000 /* msec */
#endif

typedef struct MIDI_ENDPOINT_INFO
{
	CString	name;
	CString	entity;
	CString	uid;
	CString	index;

} MIDI_ENDPOINT_INFO;

#include "MIDIInputPort.h"
#include "MIDIOutputPort.h"

#ifdef USE_UWP_MIDI
#include "../UWPMIDIPort/UWPMIDIInputPort.h"
#include "../UWPMIDIPort/UWPMIDIOutputPort.h"
#endif

#ifdef USE_TGIF
#include "../Sound/TGIF.h"
#endif

class MIDIClientDelegate
{
  public:
	virtual ~MIDIClientDelegate() { }

	/* @optional */
	virtual void midiInputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint) { }
	virtual void midiOutputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint) { }
	virtual void midiObjectAddedRemoved() { }
	virtual void midiErrorDidOccur(MMRESULT error) { }
};

class MIDIClient : public Timer::Proc
{
  public:
	MIDIClient();
	virtual ~MIDIClient();

	void delegate(MIDIClientDelegate* obj);
	MIDIClientDelegate* delegate() const;

	MIDIInputPort* inputPort() { return mp_inputPort; }
	MIDIOutputPort* outputPort() { return mp_outputPort; }

	/* Timer::Proc */
	void timerproc();

#ifdef USE_UWP_MIDI
	void portAddedRemoved() {
		if (mp_delegate) mp_delegate->midiObjectAddedRemoved();
	}
#endif

  private:
	MIDIClientDelegate* mp_delegate;

	MIDIInputPort* mp_inputPort;
	MIDIOutputPort* mp_outputPort;

	Timer* mp_timer;

	UINT m_numInDevs;
	UINT m_numOutDevs;
	bool m_changed;

	void checkDevices();

	friend class MIDIInputPort;
	friend class MIDIOutputPort;

#ifdef USE_UWP_MIDI
	WinRTMidiPtr mp_midi;
	friend class UWPMIDIInputPort;
	friend class UWPMIDIOutputPort;
#endif
};

/* Inline function declarations */

inline MIDIClient::MIDIClient()
{
	mp_delegate = 0;
	m_numInDevs = m_numOutDevs = 0;
	m_changed = false;

#ifdef USE_UWP_MIDI
	mp_midi = nullptr;
	if (windows10orGreater() && uwpmidi_initialize()) {
		WinRTMidiErrorType err = gWinRTMidiInitialize(uwpmidi_notify, &mp_midi, this);
		if (err == WINRT_NO_ERROR) {
			mp_inputPort = new UWPMIDIInputPort(this, mp_midi);
			mp_outputPort = new UWPMIDIOutputPort(this, mp_midi);
			return;
		} else {
			uwpmidi_cleanup();
		}
	}
#endif

	mp_inputPort = new MIDIInputPort(this);
	mp_outputPort = new MIDIOutputPort(this);

	mp_timer = new Timer(this);
	mp_timer->start(MIDIDEV_CHECK_INTERVAL);
}

inline MIDIClient::~MIDIClient()
{
	delete mp_timer;
	delete mp_inputPort;
	delete mp_outputPort;

#ifdef USE_UWP_MIDI
	if (mp_midi != nullptr) { gWinRTMidiFree(mp_midi); }
	uwpmidi_cleanup();
#endif
}

inline void MIDIClient::delegate(MIDIClientDelegate* obj)
	{ mp_delegate = obj; }
inline MIDIClientDelegate* MIDIClient::delegate() const
	{ return mp_delegate; }

inline void MIDIClient::timerproc()
	{ checkDevices(); }

#endif /* __MIDI_CLIENT_H__ */
