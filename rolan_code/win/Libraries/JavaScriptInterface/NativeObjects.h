/*
 * @(#)NativeObjects.h
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __NATIVE_OBJECTS_H__
#define __NATIVE_OBJECTS_H__

#include "../MIDIClient/MIDIClient.h"
#include "../Audio/AudioPlayer.h"
#include "../Audio/AudioRecorder.h"
#include "../Audio/AudioOutputUnit.h"
#include "../Audio/AudioInputUnit.h"
#include "../RolandWirelessConnect/RWCDiscovery.h"
#include "../RolandWirelessConnect/RWCConnection.h"
#include "../Network/HTTPConnection.h"
#include "../Network/TCPIPClient.h"
#ifdef USE_TGIF
#include "../Sound/TGIF.h"
#endif

#include "JavaScriptInterface.h"

class _MIDIClientDelegate : public MIDIClientDelegate, public MIDIInputDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_MIDIClientDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void midiInputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint);
	void midiOutputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint);
	void midiObjectAddedRemoved();
	void midiErrorDidOccur(MMRESULT error);
	void midiInputMessage(const BYTE* msg, int bytes, DWORD msec);
};

class _MIDIXClientDelegate : public MIDIClientDelegate, public MIDIInputDelegate
{
  private:
	JavaScriptInterface* mp_intf;
	MIDIClient* mp_client;
	int m_cid;
	bool m_thru;
  public:
	_MIDIXClientDelegate(JavaScriptInterface* intf, MIDIClient* client, int cid)
		: mp_intf(intf), mp_client(client), m_cid(cid), m_thru(false) {}

	void thru(bool enable) { m_thru = enable; }

	void midiInputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint);
	void midiOutputPortConnectFailed(const MIDI_ENDPOINT_INFO* endpoint);
	void midiObjectAddedRemoved();
	void midiErrorDidOccur(MMRESULT error);
	void midiInputMessage(const BYTE* msg, int bytes, DWORD msec);
};

class _AudioPlayerDelegate : public AudioPlayerDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_AudioPlayerDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void audioPlayerDidEndSong(LPCTSTR file);
	void audioPlayerDidFinishPlaying(LPCTSTR file);
	void audioPlayerErrorDidOccur(LPCTSTR file);
};

class _AudioRecorderDelegate : public AudioRecorderDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_AudioRecorderDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void audioRecorderDidFinishRecording(LPCTSTR file);
	void audioRecorderErrorDidOccur(LPCTSTR file);
};

class _RWCDiscoveryDelegate : public RWCDiscoveryDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_RWCDiscoveryDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void discoveryDeviceDidFound(const RWC_DEV_INFO* device);
};

class _RWCConnectionDelegate : public RWCConnectionDelegate, public RWCMIDIServiceDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_RWCConnectionDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void connectionFailed(const RWC_DEV_INFO* device);
	void connectionDidEstablished(const RWC_DEV_INFO* device);
	void connectionDidClosed(const RWC_DEV_INFO* device);
	void connectionErrorDidOccur(const RWC_DEV_INFO* device);
	void midiInputMessage(const BYTE* msg, int bytes, DWORD msec, int cable);
};

class _HTTPConnectionDelegate : public HTTPConnectionDelegate
{
  private:
	JavaScriptInterface* mp_intf;
  public:
	_HTTPConnectionDelegate(JavaScriptInterface* intf) : mp_intf(intf) {}

	void connectionDidFinishLoading(DWORD id, LPCTSTR file);
	void connectionDidLoadData(DWORD id, DWORD contentLength, DWORD loaded);
	void connectionErrorDidOccur(DWORD id, LPCTSTR url);
};

class NativeObjects
{
  public:
	JavaScriptInterface* mp_intf;
	CStringW m_clipboard;

	MIDIClient*			midi;
	AudioPlayer*		player;
	AudioRecorder*		recorder;
	AudioOutputUnit*	output;
	AudioInputUnit*		input;
	RWCDiscovery*		discovery;
	RWCConnection*		rwc;
	HTTPConnection*		http;

	_MIDIClientDelegate*		_midi;
	_AudioPlayerDelegate*		_player;
	_AudioRecorderDelegate*		_recorder;
	_RWCDiscoveryDelegate*		_discovery;
	_RWCConnectionDelegate*		_rwc;
	_HTTPConnectionDelegate*	_http;

	std::vector<MIDIClient*> clients;
	std::vector<TCPIPClient*> connections;

	Mutex mtx_connections;

	NativeObjects(JavaScriptInterface* intf);
	virtual ~NativeObjects();
};

#endif /* __NATIVE_OBJECTS_H__ */
