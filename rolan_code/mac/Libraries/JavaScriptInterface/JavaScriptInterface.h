//
//  JavaScriptInterface.h
//
//  Copyright 2013 Roland Corporation. All rights reserved.
//

#import "NativeProtocol.h"

@interface JavaScriptInterface : NSObject
#ifdef USE_WKWEBVIEW
{
	NSThread *_thread;
	NSCondition *_condition;
	CFSocketRef _socket;
    NSFileHandle *_listeningSocket;
    NSFileHandle *fileHandle;
    CFHTTPMessageRef _messageRef;
}
@property (assign) unsigned int portNo;
#endif

@property (assign) id controller;
@property (assign, readonly) NativeCall *native;

- (id)initWithController:(id)controller;
- (void)waitForReady;

@end

#ifdef USE_WKWEBVIEW
@interface JavaScriptInterface (xhr)
- (BOOL)startXHRServer;
- (void)stopXHRServer;
@end
#endif
