//
//  NativeCall+notification.m
//
//  Copyright 2018 Roland Corporation. All rights reserved.
//

#import <TargetConditionals.h>
#if TARGET_OS_IPHONE
#import <UIKit/UIKit.h>
#else
#import <Cocoa/Cocoa.h>
#endif
#import "NativeCall.h"

//static NSString *const OBJ_NAME = @"notification";

NSString *const DEVICE_TOKEN_KEY = @"device-token";

@interface NativeCall (notification) @end

@implementation NativeCall (notification)

- (NSString *)$$notification_token:(NSString *)param1 :(NSString *)param2
{
    NSString *token = [[NSUserDefaults standardUserDefaults] stringForKey:DEVICE_TOKEN_KEY];
#ifdef DEBUG
    NSLog(@"apns device token: %@", token);
#endif
    return_s(token);
}

- (NSString *)$$notification_badge:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
	if (param1) {
		[UIApplication sharedApplication].applicationIconBadgeNumber = [param1 intValue];
	}
	return_d([UIApplication sharedApplication].applicationIconBadgeNumber);
#else
	return_d(0); /* always return 0 */
#endif
}

@end
