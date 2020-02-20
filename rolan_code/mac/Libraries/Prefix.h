//
//  Prefix.h
//
//  Copyright 2016 Roland Corporation. All rights reserved.
//

#ifdef PREFIX

// to rename object name and global variables name */
#define _objname(prefix, name) __objname(prefix, name)
#define __objname(prefix, name) prefix ## name

/* Libraries/JavaScriptInterface */
#define JavaScriptInterface         _objname(PREFIX, JavaScriptInterface)
#define NativeCall                  _objname(PREFIX, NativeCall)
#define OpenPanel                   _objname(PREFIX, OpenPanel)
#define SavePanel                   _objname(PREFIX, SavePanel)
#define _MIDIClientDelegate         _objname(PREFIX, _MIDIClientDelegate)
#define _AudioPlayerDelegate        _objname(PREFIX, _AudioPlayerDelegate)
#define _AudioRecorderDelegate      _objname(PREFIX, _AudioRecorderDelegate)
#define _RWCDiscoveryDelegate       _objname(PREFIX, _RWCDiscoveryDelegate)
#define _RWCConnectionDelegate      _objname(PREFIX, _RWCConnectionDelegate)
#define _HTTPConnectionDelegate     _objname(PREFIX, _HTTPConnectionDelegate)

/* Libraries/MIDIClient */
#define MIDIClient                  _objname(PREFIX, MIDIClient)
#define MIDIClientDelegate          _objname(PREFIX, MIDIClientDelegate)
#define MIDIInputPort               _objname(PREFIX, MIDIInputPort)
#define MIDIInputDelegate           _objname(PREFIX, MIDIInputDelegate)
#define MIDIOutputPort              _objname(PREFIX, MIDIOutputPort)
#define MIDIOutputEndpoint          _objname(PREFIX, MIDIOutputEndpoint)
#define MIDIParser                  _objname(PREFIX, MIDIParser)

/* Libraries/Audio */
#define AudioInput                  _objname(PREFIX, AudioInput)
#define AudioInputStream            _objname(PREFIX, AudioInputStream)
#define AudioInputStreamDelegate    _objname(PREFIX, AudioInputStreamDelegate)
#define AudioOutput                 _objname(PREFIX, AudioOutput)
#define AudioOutputStream           _objname(PREFIX, AudioOutputStream)
#define AudioOutputStreamDelegate   _objname(PREFIX, AudioOutputStreamDelegate)
#define AudioPlayer                 _objname(PREFIX, AudioPlayer)
#define AudioPlayerDelegate         _objname(PREFIX, AudioPlayerDelegate)
#define AudioRecorder               _objname(PREFIX, AudioRecorder)
#define AudioRecorderDelegate       _objname(PREFIX, AudioRecorderDelegate)

/* Libraries/Network */
#define HTTPConnection              _objname(PREFIX, HTTPConnection)
#define HTTPConnectionDelegate      _objname(PREFIX, HTTPConnectionDelegate)
#define HTTPTask                    _objname(PREFIX, HTTPTask)

#define TCPIPClient                 _objname(PREFIX, TCPIPClient)
#define TCPIPClientDelegate         _objname(PREFIX, TCPIPClientDelegate)

#define NetServiceDiscovery         _objname(PREFIX, NetServiceDiscovery)
#define NetServiceDiscoveryDelegate _objname(PREFIX, NetServiceDiscoveryDelegate)


/* Libraries/RolandWirelessConnect */
#define RWCDiscovery                _objname(PREFIX, RWCDiscovery)
#define RWCDiscoveryDelegate        _objname(PREFIX, RWCDiscoveryDelegate)

#define RWCConnection               _objname(PREFIX, RWCConnection)
#define RWCConnectionDelegate       _objname(PREFIX, RWCConnectionDelegate)
#define RWCMIDIService              _objname(PREFIX, RWCMIDIService)
#define RWCMIDIInputDelegate        _objname(PREFIX, RWCMIDIInputDelegate)
#define RWCAudioInputStream         _objname(PREFIX, RWCAudioInputStream)
#define RWCAudioOutputStream        _objname(PREFIX, RWCAudioOutputStream)
#define RWCNetClient                _objname(PREFIX, RWCNetClient)
#define RWCNetClientDelegate        _objname(PREFIX, RWCNetClientDelegate)
#define RWCNetServer                _objname(PREFIX, RWCNetServer)
#define RWCNetServerDelegate        _objname(PREFIX, RWCNetServerDelegate)
#define RWCKeepAliveThread          _objname(PREFIX, RWCKeepAliveThread)

/* othres */
#define AppWebView                  _objname(PREFIX, AppWebView)
#define WebViewController           _objname(PREFIX, WebViewController)
#define WebViewWindowController     _objname(PREFIX, WebViewWindowController)

#endif
