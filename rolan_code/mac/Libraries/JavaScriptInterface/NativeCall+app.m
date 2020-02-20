//
//  NativeCall+app.m
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#import <TargetConditionals.h>
#if !TARGET_OS_IPHONE
#import <Cocoa/Cocoa.h>
#endif
#import "NativeCall.h"

//static NSString *const OBJ_NAME = @"app";

@interface NativeCall (app) @end

@implementation NativeCall (app)

- (NSString *)$$app_ready:(NSString *)param1 :(NSString *)param2
{
	self.ready = YES;
	undefined;
}

- (NSString *)$$app_storage:(NSString *)param1 :(NSString *)param2
{
	NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
	if (param1) {
		[defaults setObject:param1 forKey:@"pref"];
		[defaults synchronize];
		undefined;
	} else {
		return_s([defaults stringForKey:@"pref"]);
	}
}

- (NSString *)$$app_storage2:(NSString *)param1 :(NSString *)param2
{
	NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
	if (param2) {
		if ([param1 length] > 0) {
			[defaults setObject:param2 forKey:param1];
			[defaults synchronize];
		}
		undefined;
	} else {
		return_s(([param1 length] > 0) ? [defaults stringForKey:param1] : @"");
	}
}

- (NSString *)$$app_clipboard:(NSString *)param1 :(NSString *)param2
{
	if (param1) {
		self.clipboard = param1;
		undefined;
	} else {
		return_s(self.clipboard);
	}
}

- (NSString *)$$app_getevent:(NSString *)param1 :(NSString *)param2
{
	@synchronized(_queue) {
		if ([_queue count] > 0) {
			NSString *event = [[[_queue objectAtIndex:0] retain] autorelease];
			[_queue removeObjectAtIndex:0];
			return_s(event);
		}
	}
	undefined;
}

- (NSString *)$$app_startevent:(NSString *)param1 :(NSString *)param2
{
	@synchronized(_queue) {
		if ((self.event = _triggered = [param1 boolValue])) {
			[self performSelectorOnMainThread:@selector(processEvent) withObject:nil waitUntilDone:NO];
		}
	}
	return_b(YES);
}

- (NSString *)$$app_importfile:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
    NSArray *filter = nil;
    if (param1) {
        @try
        {
            NSDictionary *dict = dictionaryWithJSONString(param1);
            filter = (NSArray *)[dict valueForKey:@"uti"];
        }
        @catch (NSException *exception) {}
    }
    [[NSNotificationCenter defaultCenter] postNotificationName:@"importFile" object:filter userInfo:nil];
#endif
    undefined;
}

- (NSString *)$$app_exportfile:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
    [[NSNotificationCenter defaultCenter] postNotificationName:@"exportFile" object:param1 userInfo:nil];
#endif
    undefined;
}

- (NSString *)$$app_control:(NSString *)param1 :(NSString *)param2
{
    [[NSNotificationCenter defaultCenter] postNotificationName:NATIVE_CONTROL object:param1 userInfo:@{@"native":self}];
    undefined;
}

- (NSString *)$$app_exit:(NSString *)param1 :(NSString *)param2
{
    [self performSelectorOnMainThread:@selector(exit) withObject:nil waitUntilDone:NO];
    undefined;
}

- (void)exit
{
#if !TARGET_OS_IPHONE
	[[NSApplication sharedApplication] terminate:nil];
#endif
}

@end
