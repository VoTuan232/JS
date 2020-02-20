//
//  WebViewController.h
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>
#import "WebViewWindowController.h"
#import "../Libraries/Prefix.h"

#ifdef USE_WKWEBVIEW
@interface WebViewController : NSObject <WKUIDelegate, WKNavigationDelegate>
- (void)postJavaScriptFunction:(NSString *)script;
#else
@interface WebViewController : NSObject <WebUIDelegate, WebPolicyDelegate, WebFrameLoadDelegate>
#endif

@property (assign) AppWebView *webView;

- (void)awakeFromNib;
- (id)initForPlugin;
- (void)createWebViewWithFrame:(CGRect)frame setMainFrameURL:(NSString *)URL;

- (void)nativeControl:(NSString *)request;
- (void)waitForReady;
- (NSString *)callJavaScriptFunction:(NSString *)script;

- (void)closeAllWindows;

@property (assign) IBOutlet NSToolbarItem *backButton;
@property (assign) IBOutlet NSToolbarItem *forwardButton;

- (IBAction)goBack:(id)sender;
- (IBAction)goForward:(id)sender;

@end
