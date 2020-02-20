//
//  WebViewWindowController.h
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>
#import "../Libraries/Prefix.h"

#ifdef USE_WKWEBVIEW
@interface AppWebView : WKWebView
@end
#else
@interface AppWebView : WebView
@end
#endif

#ifdef USE_WKWEBVIEW
@interface WebViewWindowController : NSWindowController <NSWindowDelegate, WKUIDelegate, WKNavigationDelegate>
#else
@interface WebViewWindowController : NSWindowController <NSWindowDelegate, WebPolicyDelegate, WebFrameLoadDelegate>
#endif

@property (assign) AppWebView *webView;

@property (assign) IBOutlet NSToolbarItem *backButton;
@property (assign) IBOutlet NSToolbarItem *forwardButton;

- (IBAction)goBack:(id)sender;
- (IBAction)goForward:(id)sender;

@end

extern NSString *const CLOSE_WINDOW;
