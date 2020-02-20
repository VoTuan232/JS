//
//  WebViewWindowController.m
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import "WebViewWindowController.h"

NSString *const CLOSE_WINDOW = @"quattro.closeWindow";

@implementation WebViewWindowController

- (void)dealloc
{
#ifdef USE_WKWEBVIEW
    [self.webView setUIDelegate:nil];
    [self.webView setNavigationDelegate:nil];
#else
    [self.webView setUIDelegate:nil];
    [self.webView setPolicyDelegate:nil];
    [self.webView setFrameLoadDelegate:nil];
    [_webView close];
#endif
    [_webView release];
    [super dealloc];
}

- (void)windowDidLoad
{
    [super windowDidLoad];
    
    self.window.delegate = self;
}

- (void)windowWillClose:(NSNotification *)notification
{
#ifdef USE_WKWEBVIEW
    [self.webView removeObserver:self forKeyPath:@"title"];
    [self.webView removeObserver:self forKeyPath:@"canGoBack"];
    [self.webView removeObserver:self forKeyPath:@"canGoForward"];
#endif
    [self autorelease];

    [[NSNotificationCenter defaultCenter] postNotificationName:CLOSE_WINDOW object:self userInfo:nil];
}

- (IBAction)goBack:(id)sender
{
    [self.webView goBack:sender];
}

- (IBAction)goForward:(id)sender
{
    [self.webView goForward:sender];
}

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

#ifndef USE_WKWEBVIEW
#ifndef SUPPORT_POPUP_WINDOW
- (void)webView:(WebView *)sender decidePolicyForNavigationAction:(NSDictionary *)actionInformation request:(NSURLRequest *)request frame:(WebFrame *)frame decisionListener:(id<WebPolicyDecisionListener>)listener
{
    [[NSWorkspace sharedWorkspace] openURL:[actionInformation objectForKey:WebActionOriginalURLKey]];
    [listener ignore];
    [self close];
}
#endif
#endif

@end
