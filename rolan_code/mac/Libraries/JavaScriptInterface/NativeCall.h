//
//  NativeCall.h
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#import <Foundation/Foundation.h>
#ifdef USE_WKWEBVIEW
#import <WebKit/WebKit.h>
#endif

#import "../Prefix.h"
#import "../MIDIClient/MIDIClient.h"
#import "../Audio/AudioPlayer.h"
#import "../Audio/AudioRecorder.h"
#import "../Audio/AudioOutput.h"
#import "../Audio/AudioInput.h"
#import "../RolandWirelessConnect/RWCDiscovery.h"
#import "../RolandWirelessConnect/RWCConnection.h"
#import "../Network/HTTPConnection.h"
#import "../Network/NetServiceDiscovery.h"
#import "../Network/TCPIPClient.h"

@class NativeCall;

@interface _MIDIClientDelegate : NSObject <MIDIClientDelegate, MIDIInputDelegate>
@property (assign) NativeCall *native;
@end
@interface _AudioPlayerDelegate : NSObject <AudioPlayerDelegate>
@property (assign) NativeCall *native;
@end
@interface _AudioRecorderDelegate : NSObject <AudioRecorderDelegate>
@property (assign) NativeCall *native;
@end
@interface _RWCDiscoveryDelegate : NSObject <RWCDiscoveryDelegate>
@property (assign) NativeCall *native;
@end
@interface _RWCConnectionDelegate : NSObject <RWCConnectionDelegate, RWCMIDIInputDelegate>
@property (assign) NativeCall *native;
@end
@interface _HTTPConnectionDelegate : NSObject <HTTPConnectionDelegate>
@property (assign) NativeCall* native;
@end

#ifdef USE_WKWEBVIEW
@interface NativeCall : NSObject <WKScriptMessageHandler> {
#else
@interface NativeCall : NSObject {
#endif

    MIDIClient*		midi;
	AudioPlayer*	player;
	AudioRecorder*	recorder;
	AudioOutput*	output;
	AudioInput*		input;
	RWCDiscovery*	discovery;
	RWCConnection*	rwc;
	HTTPConnection*	http;

	_MIDIClientDelegate*     _midi;
	_AudioPlayerDelegate*    _player;
	_AudioRecorderDelegate*  _recorder;
	_RWCDiscoveryDelegate*   _discovery;
	_RWCConnectionDelegate*  _rwc;
	_HTTPConnectionDelegate* _http;

	NSMutableArray *clients;

    NetServiceDiscovery *netservice;
    NSMutableDictionary *connections;

    NSMutableArray *_queue;
    BOOL _triggered;
}

@property (assign) BOOL ready;
@property (assign) BOOL event;
@property (retain) NSString *clipboard;

- (NSString *)dispatch:(NSURLRequest *)request;
- (void)postEvent:(NSString *)event;
- (void)processEvent;

@end

#define undefined   { return _retv( ); } /* return value is void ( == undefined ) */
#define return_b(x) { return _retb(x); } /* return value is a boolean value */
#define return_d(x) { return _retd(x); } /* return value is a integer string */
#define return_u(x) { return _retu(x); } /* return value is a unsigned integer string */
#define return_f(x) { return _retf(x); } /* return value is a floating point string */
#define return_s(x) { return _rets(x); } /* return value is a string */
#define return_e(x) { return _rete(x); } /* return value is a exception with string */

extern NativeCall* __global_native_call;

extern NSString *const POST_EVENT;
extern NSString *const EVAL_JAVASCRIPT;
extern NSString *const NATIVE_CONTROL;

extern NSString *const DEVICE_TOKEN_KEY;

extern NSString *_retv(void);
extern NSString *_retb(BOOL b);
extern NSString *_retd(NSInteger d);
extern NSString *_retu(NSUInteger u);
extern NSString *_retf(float f);
extern NSString *_rets(NSString *s);
extern NSString *_rete(NSString *s);

extern NSString *JSONStringWithObject(id obj);
extern NSDictionary *dictionaryWithJSONString(NSString *json);
extern NSString *hexStringWithBytes(const u_int8_t *bytes, int length);
extern NSData *dataWithHexString(NSString *hexStirng);

@interface OpenPanel : NSObject
@property (retain) NSURL* URL;
@property (retain) NSArray* filter;
- (void)close;
@end

@interface SavePanel : NSObject
@property (retain) NSURL* URL;
@property (retain) NSString* filename;
@property (retain) NSString* extension;
- (void)close;
@end

@protocol SpeechRecognizationResult
- (void)result:(NSString *)param1 :(NSString *)param2;
@end
    
