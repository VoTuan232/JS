//
//  JavaScriptInterface+xhr.m
//
//  Copyright (c) 2018 Roland Corporation. All rights reserved.
//

#ifdef USE_WKWEBVIEW

#import "JavaScriptInterface.h"
#import <sys/socket.h>
#import <netinet/in.h>
#if TARGET_OS_IPHONE
#import <CFNetwork/CFNetwork.h>
#endif

//#define SUPPORT_OLD_JS_BRIDGE

@implementation JavaScriptInterface (xhr)

- (BOOL)startXHRServer
{
    unsigned int _portNo = self.portNo;

    if (_portNo) {
        struct sockaddr_in address;
        memset(&address, 0, sizeof(address));
        address.sin_len = sizeof(address);
        address.sin_family = AF_INET;
        address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
        address.sin_port = htons(_portNo);
        int fd = socket(AF_INET, SOCK_STREAM, 0);
        if (connect(fd, (struct sockaddr*)&address, sizeof(address)) == 0) {
            close(fd);
            return NO; /* already started */
        }
        [self stopXHRServer]; /* restrat server */
    }
    
    _thread = [[NSThread alloc] initWithTarget:self selector:@selector(_threadproc:) object:nil];
	_condition = [[NSCondition alloc] init];

	if (_thread) {
		[_condition lock];
		[_thread start];
		[_condition wait];
		[_condition unlock];
	}

	return (_portNo && (_portNo != self.portNo));
}

- (void)stopXHRServer
{
	if (_thread) {
		[_condition lock];
		[self performSelector:@selector(_terminate) onThread:_thread withObject:nil waitUntilDone:NO];
		[_condition wait];
		[_condition unlock];
	}

	[_thread release];
	[_condition release];
}

static void RunLoopCallback(void *info) { /* nothing to do */ }

- (void)_threadproc:(id)object
{
	@autoreleasepool {
		CFRunLoopSourceContext context = {0};
		context.perform = RunLoopCallback;
		CFRunLoopSourceRef source = CFRunLoopSourceCreate(NULL, 0, &context);
		CFRunLoopAddSource(CFRunLoopGetCurrent(), source, kCFRunLoopCommonModes);

		[self startServer];
		
		[_condition lock];
		[_condition signal];
		[_condition unlock];
		
		CFRunLoopRun();

		[self stopServer];
		
		CFRunLoopRemoveSource(CFRunLoopGetCurrent(), source, kCFRunLoopCommonModes);
		CFRelease(source);
		
		[_condition lock];
		[_condition signal];
		[_condition unlock];
	}
}

- (void)_terminate
{
	CFRunLoopStop(CFRunLoopGetCurrent());
}

- (void)startServer
{
    _socket = CFSocketCreate(kCFAllocatorDefault, PF_INET, SOCK_STREAM, IPPROTO_TCP, 0, NULL, NULL);
    if (!_socket) {
        return;
    }

    int reuse = true;
    int fd = CFSocketGetNative(_socket);
    if (setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, (void *)&reuse, sizeof(int)) != 0) {
        return;
    }

    struct sockaddr_in address;
    memset(&address, 0, sizeof(address));
    address.sin_len = sizeof(address);
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    address.sin_port = htons(self.portNo);
    CFDataRef addressData = CFDataCreate(NULL, (const UInt8 *)&address, sizeof(address));
    [(id)addressData autorelease];

    if (CFSocketSetAddress(_socket, addressData) != kCFSocketSuccess) {
        address.sin_port = 0;
        CFDataRef addressData2 = CFDataCreate(NULL, (const UInt8 *)&address, sizeof(address));
        [(id)addressData2 autorelease];
        if (CFSocketSetAddress(_socket, addressData2) != kCFSocketSuccess) {
            return;
        }
    }

    _listeningSocket = [[NSFileHandle alloc] initWithFileDescriptor:fd closeOnDealloc:YES];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(connectionAcceptedNotification:)
                                                 name:NSFileHandleConnectionAcceptedNotification
                                               object:nil];

    [_listeningSocket acceptConnectionInBackgroundAndNotify];

    socklen_t addrlen = sizeof(address);
    int err = getsockname(fd, (struct sockaddr *) &address, &addrlen);
    if (err == 0) {
        self.portNo = ntohs(address.sin_port);
    }
}

- (void)stopServer
{
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:NSFileHandleConnectionAcceptedNotification
                                                  object:nil];
    [_listeningSocket closeFile];
    [_listeningSocket release];
    _listeningSocket = nil;

    if (_socket) {
        CFSocketInvalidate(_socket);
        CFRelease(_socket);
        _socket = nil;
    }
}

- (void)connectionAcceptedNotification:(NSNotification *)notification
{
    if (notification.object != _listeningSocket) return;

	@autoreleasepool {
		NSDictionary *userInfo = [notification userInfo];
		fileHandle = [userInfo objectForKey:NSFileHandleNotificationFileHandleItem];
		if (fileHandle) {
			_messageRef = CFHTTPMessageCreateEmpty(kCFAllocatorDefault, TRUE);
			[[NSNotificationCenter defaultCenter] addObserver:self
													 selector:@selector(dataAvailableNotification:)
														 name:NSFileHandleDataAvailableNotification
													   object:nil];
			[fileHandle waitForDataInBackgroundAndNotify];
		}
		[_listeningSocket acceptConnectionInBackgroundAndNotify];
	}
}

- (void)dataAvailableNotification:(NSNotification *)notification
{
    if (notification.object != fileHandle) return;

	@autoreleasepool {
		NSData *data = [fileHandle availableData];
		if ([data length] == 0) {
			[self removeObserver:NO];
			return;
		}
		if (!CFHTTPMessageAppendBytes(_messageRef, [data bytes], [data length])) {
			[self removeObserver:YES];
			return;
		}
		if (CFHTTPMessageIsHeaderComplete(_messageRef)) {
			[self startLoading:_messageRef];
			return;
		}
		[fileHandle waitForDataInBackgroundAndNotify];
	}
}

- (void)removeObserver:(BOOL)close
{
    if (close) {
        [fileHandle closeFile];
        fileHandle = nil;
    }
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:NSFileHandleDataAvailableNotification
                                                  object:nil];
    if (_messageRef) {
        CFRelease(_messageRef);
        _messageRef = nil;
    }
}

- (void)startLoading:(CFHTTPMessageRef)message
{
    NSURL *requestURL = [(NSURL *)CFHTTPMessageCopyRequestURL(message) autorelease];

    NSMutableURLRequest *_request = [[[NSMutableURLRequest alloc] initWithURL:requestURL] autorelease];
    [_request setValue:[requestURL lastPathComponent] forHTTPHeaderField:@"method"];

    NSArray *args = [[requestURL query] componentsSeparatedByString:@","];
#ifdef SUPPORT_OLD_JS_BRIDGE
    if (!args) {
        NSString *url = [requestURL absoluteString];
        NSRange range1 = [url rangeOfString:@"$"];
        NSRange range2 = [url rangeOfString:@";"];
        if ((range1.location != NSNotFound) && (range2.location != NSNotFound)) {
            NSRange range = NSMakeRange(range1.location, range2.location - range1.location);
            [_request setValue:[url substringWithRange:range] forHTTPHeaderField:@"method"];
            args = [[url substringFromIndex:range2.location + 1] componentsSeparatedByString:@","];
        }
    }
#endif
    NSString *arg1 = (args.count > 0) ? [args objectAtIndex:0] : nil;
    NSString *arg2 = (args.count > 1) ? [args objectAtIndex:1] : nil;
    if (arg1) [_request setValue:arg1 forHTTPHeaderField:@"arg1"];
    if (arg2) [_request setValue:arg2 forHTTPHeaderField:@"arg2"];

    [self sendResponse:[self.native dispatch:_request]];
}

- (void)sendResponse:(NSString *)body
{
    NSData *data = [body dataUsingEncoding:NSUTF8StringEncoding];

    CFHTTPMessageRef response = CFHTTPMessageCreateResponse(kCFAllocatorDefault, 200, NULL, kCFHTTPVersion1_1);
    CFHTTPMessageSetHeaderFieldValue(response, (CFStringRef)@"Content-Type", (CFStringRef)@"text/plain");
    CFHTTPMessageSetHeaderFieldValue(response, (CFStringRef)@"Access-Control-Allow-Origin", (CFStringRef)@"*");
    CFHTTPMessageSetHeaderFieldValue(response, (CFStringRef)@"Connection", (CFStringRef)@"close");
    CFHTTPMessageSetHeaderFieldValue(response, (CFStringRef)@"Content-Length",
                                     (CFStringRef)[NSString stringWithFormat:@"%ld", (long)[data length]]);
    CFDataRef headerData = CFHTTPMessageCopySerializedMessage(response);

    @try
    {
        [fileHandle writeData:(NSData *)headerData];
        [fileHandle writeData:data];
    }
    @catch (NSException *exception)
    {
    }
    @finally
    {
        CFRelease(headerData);
        CFRelease(response);
        [self removeObserver:YES];
    }
}

@end

#endif /* USE_WKWEBVIEW */
