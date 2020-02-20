//
//  WebViewController.h
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

#ifdef USE_WKWEBVIEW
@interface WebViewController : UIViewController <WKUIDelegate, WKNavigationDelegate, UIDocumentInteractionControllerDelegate, UIDocumentPickerDelegate, UIPopoverPresentationControllerDelegate>
#else
@interface WebViewController : UIViewController <UIWebViewDelegate, UIDocumentInteractionControllerDelegate, UIDocumentPickerDelegate, UIPopoverPresentationControllerDelegate>
#endif

- (id)initWithFrame:(CGRect)frame setMainFrameURL:(NSURL *)URL;
- (void)applicationDidEnterBackground;
- (void)applicationWillEnterForeground;

- (void)nativeControl:(NSString *)request;
- (void)callJavaScriptFunction:(NSString *)script;

@end
