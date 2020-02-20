//
//  NetServiceDiscovery.m
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#import "NetServiceDiscovery.h"
#import <sys/socket.h>
#import <netinet/in.h>
#import <arpa/inet.h>

@interface NetServiceDiscovery () {
    NSNetServiceBrowser *_netServiceBrowser;
    NSMutableArray *_services;
    BOOL _searching;
}
@end

@implementation NetServiceDiscovery

- (id)init
{
    if (self = [super init]) {
        _services = [[NSMutableArray alloc] init];
        _netServiceBrowser = [[NSNetServiceBrowser alloc] init];
        _netServiceBrowser.delegate = self;
    }
    return self;
}

- (void)dealloc
{
    [_netServiceBrowser release];
    [_services removeAllObjects];
    [_services release];

    [super dealloc];
}

- (BOOL)searchForServicesOfType:(NSString *)type
{
    if (_searching) return NO; /* already sercing... */

    _searching = YES;
    [_netServiceBrowser searchForServicesOfType:type inDomain:@"local."];
    return YES;
}

- (void)stop
{
    if (_searching) {
        [_netServiceBrowser stop];
    }
}

- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
             didNotSearch:(NSDictionary<NSString *,NSNumber *> *)errorDict
{
    _searching = NO;

    if ([self.delegate respondsToSelector:@selector(netServiceDidDidStopSearch)])
        [self.delegate netServiceDidDidStopSearch];
}

- (void)netServiceBrowserDidStopSearch:(NSNetServiceBrowser *)browser
{
    [_services removeAllObjects];
    _searching = NO;

    if ([self.delegate respondsToSelector:@selector(netServiceDidDidStopSearch)])
        [self.delegate netServiceDidDidStopSearch];
}

- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
           didFindService:(NSNetService *)service
               moreComing:(BOOL)moreComing
{
    [_services addObject:service];
    service.delegate = self;
    [service resolveWithTimeout:10.0f];
}

- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
         didRemoveService:(NSNetService *)service
               moreComing:(BOOL)moreComing
{
    [_services removeObject:service];
    service.delegate = nil;

    if ([self.delegate respondsToSelector:@selector(netServiceDidRemoveService:)])
        [self.delegate netServiceDidRemoveService:[service name]];
}

- (void)netServiceDidResolveAddress:(NSNetService *)sender
{
    struct sockaddr_in addr;
    for (NSData *data in [sender addresses]) {
        if (data.length == sizeof(addr)) {
            [data getBytes:&addr length:sizeof(addr)];
            NSString *name = [sender name];
            NSString *address = @(inet_ntoa(addr.sin_addr));
            int port = (int)[sender port];
            if ([self.delegate respondsToSelector:@selector(netServiceDidResolve:address:port:)])
                [self.delegate netServiceDidResolve:name address:address port:port];
        }
    }
}

@end
