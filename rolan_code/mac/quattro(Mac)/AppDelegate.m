//
//  AppDelegate.m
//

#import "AppDelegate.h"
#import "WebViewController.h"
#import "JavaScriptInterface.h"

@interface AppDelegate ()
@property (assign) IBOutlet NSWindow *window;
@property (assign) IBOutlet WebViewController *viewController;
@property (assign) NSMutableArray *options;
@end

@implementation AppDelegate

#ifdef ENABLE_WEBKIT_DEVELOPER
+ (void)initialize {
    [[NSUserDefaults standardUserDefaults] registerDefaults:@{@"WebKitDeveloperExtras": @YES,
                                                              @"WebKitScriptDebuggerEnabled": @YES,
                                                              @"WebKitScriptProfilerEnabled": @YES}];
}
#endif

- (void)dealloc
{
	[_viewController release];
	[super dealloc];
}

-(void)applicationWillFinishLaunching:(NSNotification *)aNotification
{
    NSAppleEventManager *appleEventManager = [NSAppleEventManager sharedAppleEventManager];
    [appleEventManager setEventHandler:self
                           andSelector:@selector(handleGetURLEvent:withReplyEvent:)
                         forEventClass:kInternetEventClass andEventID:kAEGetURL];
}

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
    [self.window setFrameAutosaveName:@"mainWindow"];
    self.window.delegate = self;

    NSBundle *bundle = [NSBundle bundleForClass:[self class]];
    NSString *path = [bundle pathForResource:@"html/index" ofType:@"html"];
    [_viewController createWebViewWithFrame:[self.window.contentView bounds] setMainFrameURL:path];
	[self.window.contentView addSubview:self.viewController.webView];

    if (_options) {
        for (NSString *filename in _options) {
            NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"open", filename];
            [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
        }
        [_options release];
    }

    [[[NSWorkspace sharedWorkspace] notificationCenter] addObserver: self
                                                           selector: @selector(receiveWakeNote:)
                                                               name: NSWorkspaceDidWakeNotification object: NULL];

    [NSApp registerForRemoteNotificationTypes:(NSRemoteNotificationTypeAlert | NSRemoteNotificationTypeSound)];
}

- (BOOL)application:(NSApplication *)sender openFile:(NSString *)filename
{
    if (_viewController) {
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"open", filename];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
    } else {
        if (_options == nil) {
            _options = [[NSMutableArray alloc] init];
        }
        [_options addObject:filename];
    }

    return YES;
}

- (void)handleGetURLEvent:(NSAppleEventDescriptor *)event withReplyEvent:(NSAppleEventDescriptor *)replyEvent
{
    NSURL *url = [NSURL URLWithString:[[event paramDescriptorForKeyword:keyDirectObject] stringValue]];
    if ([[url host] isEqualToString:@"command"]) {
        NSString *param1 = [url lastPathComponent];
        NSString *param2 = [url query];
        if (param2) {
            NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", param1, param2];
            [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
        }
    }
}

- (void)receiveWakeNote:(NSNotification*)note
{
    NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"wakeup", [note name]];
    [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
}

#ifdef ENABLE_APP_EXIT
- (BOOL)windowShouldClose:(id)sender
{
    [self exit:nil];
    return NO;
}
- (IBAction)exit:(id)sender
{
    NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", @"exit", @""];
    [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
}
#else
- (IBAction)exit:(id)sender
{
    [[NSApplication sharedApplication] terminate:sender];
}
#endif

- (BOOL)applicationShouldTerminateAfterLastWindowClosed:(NSApplication *)sender
{
    return YES;
}

- (void)applicationWillTerminate:(NSNotification *)aNotification
{
}

/* for Remote Notification */

- (void)application:(NSApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
	NSString *token = [[deviceToken description] stringByTrimmingCharactersInSet:[NSCharacterSet characterSetWithCharactersInString:@"<>"]];
	token = [token stringByReplacingOccurrencesOfString:@" " withString:@""];
	NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
	[defaults setObject:token forKey:DEVICE_TOKEN_KEY];
	[defaults synchronize];

	NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", @"notification", @"refresh", token];
	[[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
}

- (void)application:(NSApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
{
	NSDictionary *data = [userInfo objectForKey:@"data"];
	if (data) {
		NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", @"notification", @"received", JSONStringWithObject(data)];
		[[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
	}
}

@end
