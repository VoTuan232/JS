//
//  JavaScriptInterface.m
//
//  Copyright 2013 Roland Corporation. All rights reserved.
//

#if TARGET_OS_IPHONE
#else
#import <WebKit/WebKit.h>
#endif

#import "JavaScriptInterface.h"

NSString *const POST_EVENT      = @"quattro.postEvent";
NSString *const EVAL_JAVASCRIPT = @"quattro.evalJavaScript";
NSString *const NATIVE_CONTROL  = @"quattro.nativeControl";

@interface JavaScriptInterface () {
    NativeCall *_native;
}
@end

@implementation JavaScriptInterface

@synthesize native = _native;

- (id)initWithController:(id)controller
{
    if (self = [super init]) {
        _controller = controller;

        NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
        [center addObserver:self selector:@selector(postEvent:) name:POST_EVENT object:nil];
		[center addObserver:self selector:@selector(evalJavaScript:) name:EVAL_JAVASCRIPT object:nil];
		[center addObserver:self selector:@selector(nativeControl:) name:NATIVE_CONTROL object:nil];
#if TARGET_OS_IPHONE
        [center addObserver:self selector:@selector(coreMIDIBLE:) name:@"coreMIDIBLE" object:nil];
        [center addObserver:self selector:@selector(documentInteraction:) name:@"documentInteraction" object:nil];
        [center addObserver:self selector:@selector(openFilename:) name:@"openFilename" object:nil];
        [center addObserver:self selector:@selector(saveFilename:) name:@"saveFilename" object:nil];
        [center addObserver:self selector:@selector(importFile:) name:@"importFile" object:nil];
        [center addObserver:self selector:@selector(exportFile:) name:@"exportFile" object:nil];
        [center addObserver:self selector:@selector(startListening:) name:@"startListening" object:nil];
        [center addObserver:self selector:@selector(stopListening:) name:@"stopListening" object:nil];
        [center addObserver:self selector:@selector(readBarcode:) name:@"readBarcode" object:nil];
#endif

        _native = [[NativeCall alloc] init];
#ifdef USE_WKWEBVIEW
        [self startXHRServer];
#else
        [NSURLProtocol registerClass:[NativeProtocol class]];
#endif
    }
    return self;
}

- (void)dealloc
{
    _native.event = NO;
    
#ifdef USE_WKWEBVIEW
    //[self stopXHRServer];
#else
	[NSURLProtocol unregisterClass:[NativeProtocol class]];
#endif
    [_native release];

    NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
    [center removeObserver:self];

	[super dealloc];
}

- (void)waitForReady
{
#ifndef TIMEOUT_READY
#define TIMEOUT_READY 30000 /* msec */
#endif

    NSDate *t0 = [NSDate date];
    while (!self.native.ready && ([t0 timeIntervalSinceNow] > -(TIMEOUT_READY / 1000.0))) {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }
}

- (void)postEvent:(NSNotification *)notification
{
    NSDictionary *userInfo = notification.userInfo;
    NativeCall *target = [userInfo objectForKey:@"native"];
    if (target == nil || target == self.native) {
        NSString *event = notification.object;
        [self.native postEvent:event];
    }
}

-(void)evalJavaScript:(NSNotification *)notification
{
	NSDictionary *userInfo = notification.userInfo;
	NativeCall *sender = [userInfo objectForKey:@"native"];
	if (sender == nil || sender == self.native) {
#if !TARGET_OS_IPHONE && defined(USE_WKWEBVIEW)
        SEL selector = NSSelectorFromString(@"postJavaScriptFunction:");
#else
        SEL selector = NSSelectorFromString(@"callJavaScriptFunction:");
#endif
		[_controller performSelector:selector withObject:notification.object];
	}
}

- (void)nativeControl:(NSNotification *)notification
{
    NSDictionary *userInfo = notification.userInfo;
    NativeCall *sender = [userInfo objectForKey:@"native"];
    if (sender == nil || sender == self.native) {
        SEL selector = NSSelectorFromString(@"nativeControl:");
        if ([_controller respondsToSelector:selector]) {
            [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
        }
    }
}

#if TARGET_OS_IPHONE
- (void)coreMIDIBLE:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"coreMIDIBLE");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:nil waitUntilDone:NO];
    }
}
- (void)documentInteraction:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"documentInteraction:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
    }
}

- (void)openFilename:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"openFilename:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelector:selector withObject:notification.object];
    }
}

- (void)saveFilename:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"saveFilename:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelector:selector withObject:notification.object];
    }
}

- (void)importFile:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"importFile:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
    }
}

- (void)exportFile:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"exportFile:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
    }
}

- (void)startListening:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"startListening:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
    }
}

- (void)stopListening:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"stopListening");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:nil waitUntilDone:NO];
    }
}

- (void)readBarcode:(NSNotification *)notification
{
    SEL selector = NSSelectorFromString(@"readBarcode:");
    if ([_controller respondsToSelector:selector]) {
        [_controller performSelectorOnMainThread:selector withObject:notification.object waitUntilDone:NO];
    }
}
#endif

@end
