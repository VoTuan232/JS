//
//  NativeCall+netservice.m
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#import "NativeCall.h"

static NSString *const OBJ_NAME = @"netservice";

@interface NativeCall (netservice) <NetServiceDiscoveryDelegate> @end

@implementation NativeCall (netservice)

- (NSString *)$$netservice_search:(NSString *)param1 :(NSString *)param2
{
    if (netservice) return_b(false);

    netservice = [[NetServiceDiscovery alloc] init];
    netservice.delegate = self;
    [netservice searchForServicesOfType:param1];
    return_b(true);
}

- (NSString *)$$netservice_stop:(NSString *)param1 :(NSString *)param2
{
    [netservice stop];
    undefined;
}

- (void)netServiceDidResolve:(NSString *)name address:(NSString *)address port:(int)port
{
    NSDictionary *dict = @{
                           @"name": name,
                           @"address": address,
                           @"port":[NSNumber numberWithInt:port]
                           };

    NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", OBJ_NAME, @"resolved", JSONStringWithObject(dict)];
    [self postEvent:event];
}

- (void)netServiceDidRemoveService:(NSString *)name
{
    NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", OBJ_NAME, @"lost", name];
    [self postEvent:event];
}

- (void)netServiceDidDidStopSearch
{
    [netservice release];
    netservice = nil;

    NSString *event = [NSString stringWithFormat:@"%@\f%@", OBJ_NAME, @"stopped"];
    [self postEvent:event];
}

@end
