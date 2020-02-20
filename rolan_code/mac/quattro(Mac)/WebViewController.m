
//
//  WebViewController.m
//
//  Copyright (c) 2018 Roland Corporation. All rights reserved.
//

#import "WebViewController.h"
#import "JavaScriptInterface.h"

#ifdef VMIDI_IN
NSString *const midiDestinationName = @"Quattro (IN)";
SInt32 midiSourceUniqueID = 'QaTR';
#endif

@interface AppWebView ()
@property (assign) JavaScriptInterface *intf;
@end

@interface WebViewController () {
    NSMutableArray *_controllers;
}
@property (assign) JavaScriptInterface *intf;
@end

@implementation AppWebView

- (NSDragOperation)draggingEntered:(id <NSDraggingInfo>)sender
{
    return NSDragOperationGeneric;
}

- (NSDragOperation)draggingUpdated:(id <NSDraggingInfo>)sender
{
    return NSDragOperationGeneric;
}

- (BOOL)prepareForDragOperation:(id <NSDraggingInfo>)sender
{
    return YES;
}

- (BOOL)performDragOperation:(id <NSDraggingInfo>)sender
{
    NSPasteboard *pboard = [sender draggingPasteboard];
    
    if ([[pboard types] containsObject:NSPasteboardTypeFileURL]) {
        NSURL *url = [NSURL URLFromPasteboard:pboard];
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"open", [url path]];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:@{@"native":_intf.native}];
    }
    
    return YES;
}

#if 0 /* keyboard shortcut */
- (BOOL)performKeyEquivalent:(NSEvent *)event
{
    if(([event modifierFlags] & NSDeviceIndependentModifierFlagsMask) == NSCommandKeyMask) {
        unsigned int id;
        if ([[event charactersIgnoringModifiers] isEqualToString:@"n"]) { id = 1; }
        else if ([[event charactersIgnoringModifiers] isEqualToString:@"r"]) { id = 2; }
        else { return [super performKeyEquivalent:event]; }
        
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%u", @"app", @"command", @"command", id];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:@{@"native":_intf.native}];
        return YES;
    }
    return [super performKeyEquivalent:event];
}
#endif

@end


@implementation WebViewController

- (void)awakeFromNib
{
    [super awakeFromNib];

    _controllers = [[NSMutableArray alloc] init];
    _intf = [[JavaScriptInterface alloc] initWithController:self];

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(closeWindow:) name:CLOSE_WINDOW object:nil];
}

- (id)initForPlugin
{
    self = [super init];
    
    if (self && [NSThread isMainThread]) {
        _controllers = [[NSMutableArray alloc] init];
        _intf = [[JavaScriptInterface alloc] initWithController:self];
        NSBundle *bundle = [NSBundle bundleForClass:[self class]];
        NSString *path = [bundle pathForResource:@"html/plugin" ofType:@"html"];
        [self createWebViewWithFrame:CGRectZero setMainFrameURL:path];

        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(closeWindow:) name:CLOSE_WINDOW object:nil];
    }
    
    return self;
}

#ifdef USE_WKWEBVIEW
- (void)createWebViewWithFrame:(CGRect)frame setMainFrameURL:(NSString *)filePath
{
    NSString *source = [NSString stringWithFormat:@"window.$$xhrport = %u", _intf.portNo];
    WKUserScript *userScript = [[WKUserScript alloc] initWithSource:source
                                                      injectionTime:WKUserScriptInjectionTimeAtDocumentStart
                                                   forMainFrameOnly:NO];
    WKUserContentController *userContentController = [[WKUserContentController alloc] init];
    [userContentController addUserScript:userScript];
    [userContentController addScriptMessageHandler:_intf.native name:@"quattro1"];
	[userContentController addScriptMessageHandler:_intf.native name:@"quattro2"];
    WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
    configuration.userContentController = userContentController;
    @try {
        [configuration.preferences setValue:@TRUE forKey:@"allowFileAccessFromFileURLs"];
    } @catch (NSException *exception) {}
    @try {
        [configuration setValue:@TRUE forKey:@"allowUniversalAccessFromFileURLs"];
    } @catch (NSException *exception) {}
#ifdef ENABLE_WEBKIT_DEVELOPER
    [configuration.preferences setValue:[NSNumber numberWithBool:TRUE] forKey:@"developerExtrasEnabled"];
#endif
    configuration.applicationNameForUserAgent = @"roland.quattro(Mac)";
    _webView = [[AppWebView alloc] initWithFrame:frame configuration:configuration];
    _webView.intf = _intf;
    
#ifdef WEBVIEW_NO_BOUNCE
#warning correspond to css file as "body { height: 100%; overflow: hidden; }".
#endif

    [self.webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    [self.webView setAllowsBackForwardNavigationGestures:YES];
    [self.webView setUIDelegate:self];
    [self.webView setNavigationDelegate:self];
    
    [self.webView addObserver:self forKeyPath:@"title" options:NSKeyValueObservingOptionNew context:nil];
	[self.webView addObserver:self forKeyPath:@"canGoBack" options:NSKeyValueObservingOptionNew context:nil];
	[self.webView addObserver:self forKeyPath:@"canGoForward" options:NSKeyValueObservingOptionNew context:nil];

    NSURL *url = [NSURL fileURLWithPath:filePath];
    if ([[url scheme] isEqualToString:@"file"]) {
        //NSString *path = [[NSURL URLWithString:@"./" relativeToURL:url] absoluteString];
        NSString *path = @"file:///";
        [self.webView loadFileURL:url allowingReadAccessToURL:[NSURL URLWithString:path]];
    } else {
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
        [self.webView loadRequest:request];
    }
}
#else
- (void)createWebViewWithFrame:(CGRect)frame setMainFrameURL:(NSString *)URL
{
    _webView = [[AppWebView alloc] initWithFrame:frame];
    _webView.intf = _intf;
    
    [self.webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    
    [self.webView setUIDelegate:self];
    [self.webView setPolicyDelegate:self];
    [self.webView setFrameLoadDelegate:self];
    
    [self.webView setApplicationNameForUserAgent:@"roland.quattro(Mac)"];
    [self.webView setGroupName:@"Quattro"];
    [self.webView setMainFrameURL:URL];
}
#endif

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    
    for (NSWindowController *controller in _controllers) {
        [controller close];
    }
    [_controllers removeAllObjects];
    [_controllers release];
    
#ifdef USE_WKWEBVIEW
    [self.webView removeObserver:self forKeyPath:@"title"];
    [self.webView removeObserver:self forKeyPath:@"canGoBack"];
    [self.webView removeObserver:self forKeyPath:@"canGoForward"];
    [self.webView setUIDelegate:nil];
    [self.webView setNavigationDelegate:nil];
	[self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"quattro1"];
	[self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"quattro2"];
#else
    [self.webView setUIDelegate:nil];
    [self.webView setPolicyDelegate:nil];
    [self.webView setFrameLoadDelegate:nil];
    [_webView close];
#endif

    [_webView release];
#ifdef USE_WKWEBVIEW
	[_intf stopXHRServer];
#endif
    [_intf release];
    
    [super dealloc];
}

- (void)closeWindow:(NSNotification *)notification
{
    NSWindowController *controller = notification.object;
    [_controllers removeObject:controller];
}

- (void)closeAllWindows
{
    for (NSWindowController *controller in _controllers) {
        [controller close];
    }
    [_controllers removeAllObjects];
}

- (void)waitForReady
{
    [self.intf waitForReady];
}

- (void)nativeControl:(NSString *)request
{
    /* process for request */
}

#ifdef USE_WKWEBVIEW
- (NSString *)callJavaScriptFunction:(NSString *)script;
{
    __block NSString *string = nil;
    
    [self.webView evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil && result != nil) {
            string = [[NSString alloc] initWithFormat:@"%@", result];
        } else {
            string = @"";
        }
    }];
    
#ifndef TIMEOUT_READY
#define TIMEOUT_READY 30000 /* msec */
#endif
    
    NSDate *t0 = [NSDate date];
    while (!string && ([t0 timeIntervalSinceNow] > -(TIMEOUT_READY / 1000.0))) {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }
    
    return [string autorelease];
}
- (void)postJavaScriptFunction:(NSString *)script;
{
    [self.webView evaluateJavaScript:script completionHandler:nil];
}
#else
- (NSString *)callJavaScriptFunction:(NSString *)script;
{
    return [self.webView stringByEvaluatingJavaScriptFromString:script];
}
#endif

- (IBAction)goBack:(id)sender
{
    [self.webView goBack:sender];
}

- (IBAction)goForward:(id)sender
{
    [self.webView goForward:sender];
}

#ifdef USE_NATIVE_OBJPTR
- (void)webView:(WebView *)sender didClearWindowObject:(WebScriptObject *)windowObject forFrame:(WebFrame *)frame
{
    if (frame == [sender mainFrame]) {
        NSUInteger objptr = (NSUInteger)_intf.native;
        [windowObject setValue:[NSNumber numberWithUnsignedInteger:objptr] forKey:@"$$native"];
    }
}
#endif

#ifdef USE_WKWEBVIEW
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(nonnull WKNavigationResponse *)navigationResponse decisionHandler:(nonnull void (^)(WKNavigationResponsePolicy))decisionHandler
{
    if (navigationResponse.canShowMIMEType) {
        decisionHandler(WKNavigationResponsePolicyAllow);
    } else {
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"download", [[navigationResponse.response URL] absoluteString]];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:@{@"native":_intf.native}];
        decisionHandler(WKNavigationResponsePolicyCancel);
    }
}
#else
- (void)webView:(WebView *)sender decidePolicyForMIMEType:(NSString *)type request:(NSURLRequest *)request frame:(WebFrame *)frame decisionListener:(id<WebPolicyDecisionListener>)listener
{
    if ([[sender class] canShowMIMEType:type]) {
        [listener use];
    } else {
        NSURL *url = [request URL];
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"download", [url absoluteString]];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:@{@"native":_intf.native}];
        [listener ignore];
    }
}
#endif

#ifdef USE_WKWEBVIEW
- (WKWebView *)webView:(WKWebView *)webView createWebViewWithConfiguration:(WKWebViewConfiguration *)configuration forNavigationAction:(WKNavigationAction *)navigationAction windowFeatures:(WKWindowFeatures *)windowFeatures
{
#ifdef SUPPORT_POPUP_WINDOW
    WebViewWindowController *windowController = [[WebViewWindowController alloc] initWithWindowNibName:@"WebViewWindowController"];
    NSWindow *window = [windowController window];
    
    windowController.webView = [[AppWebView alloc] initWithFrame:[window.contentView bounds] configuration:configuration];
    windowController.webView.intf = self.intf;
    
    [windowController.webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    [windowController.webView setAllowsBackForwardNavigationGestures:YES];
    [windowController.webView setUIDelegate:self];
    [windowController.webView setNavigationDelegate:self];
    [windowController.webView addObserver:windowController forKeyPath:@"title" options:NSKeyValueObservingOptionNew context:nil];
    [windowController.webView addObserver:windowController forKeyPath:@"canGoBack" options:NSKeyValueObservingOptionNew context:nil];
    [windowController.webView addObserver:windowController forKeyPath:@"canGoForward" options:NSKeyValueObservingOptionNew context:nil];
    
    [windowController.webView loadRequest:navigationAction.request];
    
    [window.contentView addSubview:windowController.webView];
    [windowController showWindow:nil];
    
    [_controllers addObject:windowController];
    
    return windowController.webView;
#else
	[[NSWorkspace sharedWorkspace] openURL:navigationAction.request.URL];
	return nil;
#endif
}
#else
- (WebView *)webView:(WebView *)sender createWebViewWithRequest:(NSURLRequest *)request
{
    WebViewWindowController *windowController = [[WebViewWindowController alloc] initWithWindowNibName:@"WebViewWindowController"];
    
    NSWindow *window = [windowController window];
    windowController.webView = [[AppWebView alloc] initWithFrame:[window.contentView bounds]];
    
    [windowController.webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    
    [windowController.webView setUIDelegate:self];
#ifdef SUPPORT_POPUP_WINDOW
    [windowController.webView setPolicyDelegate:self];
#else
    [windowController.webView setPolicyDelegate:windowController];
#endif
    [windowController.webView setFrameLoadDelegate:windowController];
    
    [windowController.webView setGroupName:@"Quattro"];
    [windowController.webView setApplicationNameForUserAgent:@"roland.quattro(Mac)"];
    
    [window.contentView addSubview:windowController.webView];
    [windowController showWindow:nil];

    [_controllers addObject:windowController];
    
    return windowController.webView;
}
#endif

#ifdef USE_WKWEBVIEW
- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *)context
{
    if ([keyPath isEqualToString:@"title"]) {
        [[self.webView window] setTitle:self.webView.title];
    } else if ([keyPath isEqualToString:@"canGoBack"]) {
        [self.backButton setEnabled:self.webView.canGoBack];
    } else if ([keyPath isEqualToString:@"canGoForward"]) {
        [self.forwardButton setEnabled:self.webView.canGoForward];
    }
}
#else
- (void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame
{
    if (frame == [sender mainFrame]) {
        [self.backButton setEnabled:[sender canGoBack]];
        [self.forwardButton setEnabled:[sender canGoForward]];
    }
}
- (void)webView:(WebView *)sender didReceiveTitle:(NSString *)title forFrame:(WebFrame *)frame
{
    if (frame == [sender mainFrame]) {
        [[sender window] setTitle:title];
    }
}
#endif

#ifdef USE_WKWEBVIEW
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(nonnull NSString *)message initiatedByFrame:(nonnull WKFrameInfo *)frame completionHandler:(nonnull void (^)(void))completionHandler
#else
- (void)webView:(WebView *)sender runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WebFrame *)frame
#endif
{
    NSAlert *alert = [[NSAlert alloc] init];
    [alert addButtonWithTitle:@"OK"];
    [alert setMessageText:message];
    [alert runModal];
    [alert release];
#ifdef USE_WKWEBVIEW
	completionHandler();
#endif
}

#ifdef USE_WKWEBVIEW
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL))completionHandler
#else
- (BOOL)webView:(WebView *)sender runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WebFrame *)frame
#endif
{
    BOOL ok = YES;
    
    NSAlert *alert = [[NSAlert alloc] init];
    [alert addButtonWithTitle:@"Cancel"];
    [alert addButtonWithTitle:@"OK"];
    [alert setMessageText:message];
    if ([alert runModal] == NSAlertFirstButtonReturn) {
        ok = NO;
    }
    [alert release];

#ifdef USE_WKWEBVIEW
	completionHandler(ok);
#else
    return ok;
#endif
}

#ifndef USE_WKWEBVIEW
- (NSUInteger)webView:(WebView *)sender dragDestinationActionMaskForDraggingInfo:(id<NSDraggingInfo>)draggingInfo
{
    if (sender == self.webView) {
        return WebDragDestinationActionLoad;
    }
    return WebDragDestinationActionNone;
}
#endif

#ifndef ENABLE_WEBKIT_DEVELOPER
- (NSArray *)webView:(WebView *)sender contextMenuItemsForElement:(NSDictionary *)element defaultMenuItems:(NSArray *)defaultMenuItems
{
    return nil;
}
#endif

@end
