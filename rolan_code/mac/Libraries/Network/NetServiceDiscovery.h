//
//  NetServiceDiscovery.h
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "../Prefix.h"

@protocol NetServiceDiscoveryDelegate <NSObject>

@optional
- (void)netServiceDidResolve:(NSString *)name address:(NSString *)address port:(int)port;
- (void)netServiceDidRemoveService:(NSString *)name;
- (void)netServiceDidDidStopSearch;

@end

@interface NetServiceDiscovery : NSObject <NSNetServiceBrowserDelegate, NSNetServiceDelegate>

@property (assign) id<NetServiceDiscoveryDelegate> delegate;

- (BOOL)searchForServicesOfType:(NSString *)type;
- (void)stop;

@end
