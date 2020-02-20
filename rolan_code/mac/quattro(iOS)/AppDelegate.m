//
//  AppDelegate.m
//

#import "AppDelegate.h"
#import "WebViewController.h"
#import "JavaScriptInterface.h"

@interface AppDelegate ()
@property (retain) WebViewController *viewController;
@end

@implementation AppDelegate

- (void)dealloc
{
    [_window release];
    [_viewController release];
    [super dealloc];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]] autorelease];

#ifndef USE_WKWEBVIEW
	UIWebView *webView = [[[UIWebView alloc] initWithFrame:CGRectZero] autorelease];
	NSString *userAgent = [webView stringByEvaluatingJavaScriptFromString:@"navigator.userAgent"];
	NSDictionary *dictionary = @{ @"UserAgent":[userAgent stringByAppendingString:@" roland.quattro(iOS)"] };
	[[NSUserDefaults standardUserDefaults] registerDefaults:dictionary];
#endif

	NSURL *url = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"html/index" ofType:@"html"]];
	self.viewController = [[[WebViewController alloc] initWithFrame:[[UIScreen mainScreen] bounds] setMainFrameURL:url] autorelease];

	UINavigationController* navigation = [[[UINavigationController alloc] initWithRootViewController:self.viewController] autorelease];
	self.window.rootViewController = navigation;
	[self.window makeKeyAndVisible];

#ifdef USE_APNS
	[[UIApplication sharedApplication] registerForRemoteNotifications];
/*
	NSDictionary *userInfo = [launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
	if (userInfo) {
		[self application:application didReceiveRemoteNotification:userInfo];
	}
*/
#endif

	return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    NSString *param1 = @"open";
    NSString *param2 = [url path];

    if ([[url host] isEqualToString:@"command"]) {
        param1 = [url lastPathComponent];
        param2 = [url query];
    }
    if (param2) {
        NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@\f%@", @"app", @"command", param1, param2];
        [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
    }
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
	// Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
	// Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
	// Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
	// If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    
    [self.viewController applicationDidEnterBackground];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
	// Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.

	[self.viewController applicationWillEnterForeground];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
	// Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
	// Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

/* for Remote Notification */

#ifdef USE_APNS
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
	NSString *token = [[deviceToken description] stringByTrimmingCharactersInSet: [NSCharacterSet characterSetWithCharactersInString:@"<>"]];
	token = [token stringByReplacingOccurrencesOfString:@" " withString:@""];
	NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
	[defaults setObject:token forKey:DEVICE_TOKEN_KEY];
	[defaults synchronize];

	NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", @"notification", @"refresh", token];
	[[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
{
	NSDictionary *data = [userInfo objectForKey:@"data"];
	if (data) {
		NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", @"notification", @"received", JSONStringWithObject(data)];
		[[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
	}
}
#endif

@end
