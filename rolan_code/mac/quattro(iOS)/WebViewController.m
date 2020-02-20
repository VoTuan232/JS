//
//  WebViewController.m
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <AVFoundation/AVFoundation.h>
#import "WebViewController.h"
#import "JavaScriptInterface.h"
#import "OpenPanelController.h"
#import "SavePanelController.h"
#import "SpeechRecognization.h"
#import "BarcodeViewController.h"

#include "TargetConditionals.h"
#if TARGET_IPHONE_SIMULATOR
@compatibility_alias CABTMIDICentralViewController UIViewController;
#elif TARGET_OS_IPHONE
#import <CoreAudioKit/CoreAudioKit.h>
#endif

#ifdef USE_VENDER_BLEMIDI
#import "ScanBLEMIDIController.h"
#endif

#ifdef VMIDI_IN
NSString *const midiDestinationName = @"Quattro (IN)";
SInt32 midiSourceUniqueID = 'QaTR';
#endif

@interface WebViewController () {
    UIActivityIndicatorView *_indicator;
}
#ifdef USE_WKWEBVIEW
@property (assign) WKWebView *webView;
#else
@property (assign) UIWebView *webView;
#endif
@property (assign) JavaScriptInterface *intf;
@property (assign) SpeechRecognization *recognizer;
@property (assign) UILongPressGestureRecognizer *longpress1;
@property (assign) UILongPressGestureRecognizer *longpress2;
@end

@implementation WebViewController

- (id)initWithFrame:(CGRect)frame setMainFrameURL:(NSURL *)URL
{
	if (self = [super init]) {
        [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayAndRecord withOptions:AVAudioSessionCategoryOptionAllowBluetooth  error:nil];

        _recognizer = [[SpeechRecognization alloc] init];
        
        _intf = [[JavaScriptInterface alloc] initWithController:self];

        self.view = [[[UIView alloc] initWithFrame:frame] autorelease];
		self.view.translatesAutoresizingMaskIntoConstraints = NO;
		self.view.autoresizesSubviews = YES;
		self.view.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;

#if defined(CONTENT_WIDTH) && defined(CONTENT_HEIGHT)
		CGRect bounds = self.view.bounds;
		float scale = MIN(bounds.size.width / CONTENT_WIDTH, bounds.size.height / CONTENT_HEIGHT);
		self.view.transform = CGAffineTransformMakeScale(scale, scale);
#else
        float scale = 1.0;
#endif

#ifdef USE_WKWEBVIEW
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
#ifdef ALLOW_CROSS_ORIGIN
        @try {
            [configuration setValue:@TRUE forKey:@"allowUniversalAccessFromFileURLs"];
        } @catch (NSException *exception) {}
#endif
        configuration.applicationNameForUserAgent = @"roland.quattro(iOS)";
        configuration.allowsInlineMediaPlayback = YES;
        _webView = [[WKWebView alloc] initWithFrame:frame configuration:configuration];
		[self.webView setUIDelegate:self];
        [self.webView setNavigationDelegate:self];
#else
        _webView = [[UIWebView alloc] initWithFrame:frame];
        [self.webView setDelegate:self];
        self.webView.scalesPageToFit = YES;
        self.webView.allowsInlineMediaPlayback = YES;
#endif
#ifdef WEBVIEW_NO_BOUNCE
        self.webView.scrollView.bounces = false;
#endif
        self.webView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
		[self.view addSubview:_webView];
#ifdef USE_WKWEBVIEW
        if ([[URL scheme] isEqualToString:@"file"]) {
            NSString *path = [[NSURL URLWithString:@"./" relativeToURL:URL] absoluteString];
            [self.webView loadFileURL:URL allowingReadAccessToURL:[NSURL URLWithString:path]];
        } else {
            [self.webView loadRequest:[NSURLRequest requestWithURL:URL]];
        }
#else
        [self.webView loadRequest:[NSURLRequest requestWithURL:URL]];
#endif

        if (@available(iOS 13.0, *)) {
            _indicator = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleLarge];
        } else {
            _indicator = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhiteLarge];
        }
        _indicator.frame = frame;
        _indicator.center = CGPointMake(CGRectGetMidX(self.view.bounds)/scale, CGRectGetMidY(self.view.bounds)/scale);
        _indicator.hidesWhenStopped = YES;
        _indicator.backgroundColor = UIColor.blackColor;
        _indicator.layer.opacity = 0.5;
        [self.view addSubview:_indicator];
    };
    
	return self;
}

- (void)dealloc
{
#ifdef USE_WKWEBVIEW
	[self.webView setUIDelegate:nil];
    [self.webView setNavigationDelegate:nil];
#else
	[self.webView setDelegate:nil];
#endif
    
    [_recognizer release];
    [_webView release];
    [_indicator release];
    [_longpress1 release];
    [_longpress2 release];

#ifdef USE_WKWEBVIEW
	[_intf stopXHRServer];
#endif
	[_intf release];

    [super dealloc];
}

#ifdef PREFERS_STATUSBAR_HIDDEN
- (BOOL)prefersStatusBarHidden
{
    return YES;
}
#endif

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [self.navigationController setToolbarHidden:YES];

    [self removeLongPressGestures];

    [_recognizer requestAuthorization];
}

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
    [self.navigationController setNavigationBarHidden:YES];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
}

- (void)applicationDidEnterBackground;
{
    [_recognizer stopListening];

    [self callJavaScriptFunction:@"$native.stop()"];
}

- (void)applicationWillEnterForeground;
{
#ifdef USE_WKWEBVIEW
    if ([_intf startXHRServer]) {
        /* server port is changed */
        NSString *script = [NSString stringWithFormat:@"window.$$xhrport = %u", _intf.portNo];
        WKUserScript *userScript = [[WKUserScript alloc] initWithSource:script
                                                          injectionTime:WKUserScriptInjectionTimeAtDocumentStart
                                                       forMainFrameOnly:NO];
        [self.webView.configuration.userContentController removeAllUserScripts];
        [self.webView.configuration.userContentController addUserScript:userScript];
        [self callJavaScriptFunction:script];
    }
#endif

#ifdef USE_TGIF
	TGIF_AudioOutputReStart();
#endif

	[self callJavaScriptFunction:@"$native.restart()"];
}

- (void)nativeControl:(NSString *)request
{
    /* process for request */
}

#ifdef USE_WKWEBVIEW
- (void)callJavaScriptFunction:(NSString *)script
{
    [self.webView evaluateJavaScript:script completionHandler:nil];
}
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(nonnull WKNavigationResponse *)navigationResponse decisionHandler:(nonnull void (^)(WKNavigationResponsePolicy))decisionHandler
{
    if (navigationResponse.canShowMIMEType) {
        decisionHandler(WKNavigationResponsePolicyAllow);
    } else {
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"download", [[navigationResponse.response URL] absoluteString]];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
        decisionHandler(WKNavigationResponsePolicyCancel);
    }
}
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(nonnull NSString *)message initiatedByFrame:(nonnull WKFrameInfo *)frame completionHandler:(nonnull void (^)(void))completionHandler
{
	UIAlertController *alertController = [UIAlertController alertControllerWithTitle:message message:webView.URL.host preferredStyle:UIAlertControllerStyleAlert];
	[alertController addAction:[UIAlertAction actionWithTitle:@"CLOSE" style:UIAlertActionStyleCancel handler:^(UIAlertAction *action) {
		completionHandler();
	}]];
	[self presentViewController:alertController animated:YES completion:^{}];
}
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL))completionHandler
{
	UIAlertController *alertController = [UIAlertController alertControllerWithTitle:message message:webView.URL.host preferredStyle:UIAlertControllerStyleAlert];
	[alertController addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction *action) {
		completionHandler(YES);
	}]];
	[alertController addAction:[UIAlertAction actionWithTitle:@"Cancel" style:UIAlertActionStyleCancel handler:^(UIAlertAction *action) {
		completionHandler(NO);
	}]];
	[self presentViewController:alertController animated:YES completion:^{}];
}
#else
- (void)callJavaScriptFunction:(NSString *)script
{
    [self.webView stringByEvaluatingJavaScriptFromString:script];
}
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    NSString *filename  = [[request URL] lastPathComponent];
	NSString *extension = [filename pathExtension];
	if (extension && ![extension isEqualToString:@""] && ![extension isEqualToString:@"html"]) {
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"download", [[request URL] absoluteString]];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
        return NO;
    }
    return YES;
}
#endif

#pragma mark - remove long press guestures (bugfix for -webkit-touch-callout)

- (void)removeLongPressGestures
{
    _longpress1 = [[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(handleGestures:)];
    self.longpress1.minimumPressDuration = 0.45f;
    self.longpress1.allowableMovement = 100.0f;

    _longpress2 = [[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(handleGestures:)];
    self.longpress2.minimumPressDuration = 0.08f;
    self.longpress2.allowableMovement = 100.0f;
    self.longpress2.numberOfTapsRequired = 1;

    NSArray *views = self.webView.subviews;
    for (int i = 0; i < views.count; i++) {
        UIView *webViewScrollView = views[i];
        if ([webViewScrollView isKindOfClass:[UIScrollView class]]) {
            NSArray *webViewScrollViewSubViews = webViewScrollView.subviews;
            if (webViewScrollViewSubViews.count) {
                UIView *view = webViewScrollViewSubViews[0];
                [view addGestureRecognizer:self.longpress1];
                [view addGestureRecognizer:self.longpress2];
                break;
            }
        }
    }
}

- (void)handleGestures:(UILongPressGestureRecognizer *)sender
{
    /* no guestures */
}

#pragma mark - open "Bluetooth MIDI Devices"

- (void)coreMIDIBLE
{
#ifdef USE_VENDER_BLEMIDI
    ScanBLEMIDIController *controller = [[[ScanBLEMIDIController alloc] initWithNibName:@"ScanBLEMIDIController" bundle:nil] autorelease];
#else
    CABTMIDICentralViewController *controller = [[[CABTMIDICentralViewController alloc] init] autorelease];
#endif

#if TARGET_IPHONE_SIMULATOR
    controller.preferredContentSize = CGSizeMake(800, 600);
#endif
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        [self.navigationController setNavigationBarHidden:NO];
        [self.navigationController pushViewController:controller animated:YES];
    } else {
        [self popoverViewController:controller];
    }
}

#pragma mark - document interaction for iOS

- (void)documentInteraction:(NSURL *)url
{
#if 0
    NSString *filePath = [NSString stringWithFormat:@"%@%@", NSTemporaryDirectory(), url.lastPathComponent];
    if (![[NSFileManager defaultManager] fileExistsAtPath:filePath]) {
        NSData *data = [NSData dataWithContentsOfURL:url];
        [data writeToFile:filePath atomically:NO];
    }
    url = [NSURL fileURLWithPath:filePath];
#endif

    UIDocumentInteractionController *controller = [UIDocumentInteractionController interactionControllerWithURL:url];
    controller.delegate = self;
    [controller presentPreviewAnimated:YES];
}

- (UIViewController *)documentInteractionControllerViewControllerForPreview:(UIDocumentInteractionController *)controller
{
    return  self;
}

- (void)documentInteractionController:(UIDocumentInteractionController *)controller willBeginSendingToApplication:(NSString *)application
{
    /* nothing to do */
}

- (void)documentInteractionController:(UIDocumentInteractionController *)controller didEndSendingToApplication:(NSString *)application
{
    /* nothing to do */
}

#pragma mark - openfilename & savefilename for iOS

- (void)openFilename:(id)obj
{
    OpenPanelController *controller = [[[OpenPanelController alloc] initWithNibName:@"OpenPanelController" bundle:nil] autorelease];
    controller.panel = [obj autorelease];
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    controller.currentURL = [NSURL fileURLWithPath:[paths objectAtIndex:0]];
    [self popoverViewController:controller];
}

- (void)saveFilename:(id)obj
{
    SavePanelController *controller = [[[SavePanelController alloc] initWithNibName:@"SavePanelController" bundle:nil] autorelease];
    controller.panel = [obj autorelease];
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    controller.currentURL = [NSURL fileURLWithPath:[paths objectAtIndex:0]];
    [self popoverViewController:controller];
}

- (void)popoverViewController:(UIViewController *)controller
{
    UINavigationController* navigation = [[[UINavigationController alloc] initWithRootViewController:controller] autorelease];
    navigation.modalPresentationStyle = UIModalPresentationPopover;
    //navigation.preferredContentSize = self.view.frame.size;
    [self presentViewController:navigation animated:YES completion:nil];

    if (navigation.popoverPresentationController) {
        navigation.popoverPresentationController.permittedArrowDirections = 0;
        navigation.popoverPresentationController.sourceView = self.view;
        navigation.popoverPresentationController.sourceRect = self.view.bounds;
        navigation.popoverPresentationController.delegate = self;
    }
}

#pragma mark - import & export file for iOS

#ifdef USE_iCLOUD_DOCUMENTS
- (void)importFile:(NSArray *)utis
{
    NSArray *types = utis ? utis : @[@"public.data"];
    UIDocumentPickerViewController *controller = [[UIDocumentPickerViewController alloc] initWithDocumentTypes:types inMode:UIDocumentPickerModeImport];
    controller.delegate = self;
    [self presentViewController:controller animated:YES completion:nil];
}

- (void)exportFile:(NSString *)path
{
    NSURL *url = [NSURL fileURLWithPath:path];
    UIDocumentPickerViewController *controller = [[UIDocumentPickerViewController alloc] initWithURL:url inMode:UIDocumentPickerModeExportToService];
    controller.delegate = self;
    [self presentViewController:controller animated:YES completion:nil];
}
#endif

- (void)documentPicker:(UIDocumentPickerViewController *)controller didPickDocumentsAtURLs:(nonnull NSArray<NSURL *> *)urls
{
    if (controller.documentPickerMode == UIDocumentPickerModeImport) {
        for (NSURL *url in urls) {
            NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"import", [url path]];
            [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
        }
    }
}

#pragma mark - start/stop speech recognition

- (void)startListening:(id)obj
{
    [_recognizer startListening:obj];
}

- (void)stopListening
{
    [_recognizer stopListening];
}

#pragma mark - start camera for reading barcode

- (void)readBarcode:(NSString *)desiredType
{
    NSDictionary *types = @{
                            @"UPC-E":      AVMetadataObjectTypeUPCECode,
                            @"EAN8":       AVMetadataObjectTypeEAN8Code,
                            @"EAN13":      AVMetadataObjectTypeEAN13Code,
                            @"CODE39":     AVMetadataObjectTypeCode39Code,
                            @"CODE93":     AVMetadataObjectTypeCode93Code,
                            @"CODE128":    AVMetadataObjectTypeCode128Code,
                            @"ITF14":      AVMetadataObjectTypeITF14Code,
                            @"QR":         AVMetadataObjectTypeQRCode,
                            @"DataMatrix": AVMetadataObjectTypeDataMatrixCode,
                            @"PDF417":     AVMetadataObjectTypePDF417Code,
                            };

    AVMetadataObjectType type = [types objectForKey:desiredType];
    if (!type) return;

    BarcodeViewController *controller = [[[BarcodeViewController alloc] init] autorelease];
    controller.type = type;
    [self.navigationController setNavigationBarHidden:NO];
    [self.navigationController pushViewController:controller animated:YES];
}

@end
