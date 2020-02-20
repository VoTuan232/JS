/*
 * @(#)NativeObjects.cpp
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#include "NativeObjects.h"

NativeObjects::NativeObjects(JavaScriptInterface* intf) : mp_intf(intf)
{
#ifdef USE_TGIF
	TGIF::init();
#endif

	midi        = new MIDIClient();
	player      = new AudioPlayer();
	recorder    = new AudioRecorder();
	discovery   = new RWCDiscovery();
	rwc         = new RWCConnection();
	http        = new HTTPConnection();

	_midi       = new _MIDIClientDelegate(intf);
	_player     = new _AudioPlayerDelegate(intf);
	_recorder   = new _AudioRecorderDelegate(intf);
	_discovery  = new _RWCDiscoveryDelegate(intf);
	_rwc        = new _RWCConnectionDelegate(intf);
	_http       = new _HTTPConnectionDelegate(intf);

	midi->delegate(_midi);
	midi->inputPort()->delegate(_midi);
	player->delegate(_player);
	recorder->delegate(_recorder);
	discovery->delegate(_discovery);
	rwc->delegate(_rwc);
	rwc->midiService()->delegate(_rwc);
	rwc->outputStream()->delegate(player);
	rwc->inputStream()->delegate(recorder);
	http->delegate(_http);

	output = new AudioOutputUnit();
	input  = new AudioInputUnit();
	player->output(output);
	recorder->input(input);
}

NativeObjects::~NativeObjects()
{
	for (std::vector<MIDIClient*>::iterator iter = clients.begin(); iter != clients.end(); iter++) {
		MIDIClient* client = *iter;
		MIDIClientDelegate* delegate = client->delegate();
		client->inputPort()->delegate(0);
		client->delegate(0);
		delete client;
		delete delegate;
	}
	clients.clear();

	for (std::vector<TCPIPClient*>::iterator iter = connections.begin(); iter != connections.end(); iter++) {
		TCPIPClient* conn = *iter;
		if (conn) {
			TCPIPClientDelegate* delegate = conn->delegate();
			conn->delegate(0);
			conn->close();
			delete delegate;
		}
	}
	connections.clear();

	delete http;
	delete rwc;
	delete discovery;
	delete recorder;
	delete player;
	delete midi;

	delete input;
	delete output;

	delete _midi;
	delete _player;
	delete _recorder;
	delete _discovery;
	delete _rwc;
	delete _http;

#ifdef USE_TGIF
	TGIF::exit();
#endif
}
