//
//  NativeProtocol.m
//
//  Copyright 2013 Roland Corporation. All rights reserved.
//

#import "NativeProtocol.h"

@implementation NativeProtocol

static NSString *const Prefix = @"/!quattro";

NativeCall* __global_native_call = nil;

+ (BOOL)canInitWithRequest:(NSURLRequest *)request
{
    return [[[request URL] path] isEqualToString:Prefix];
}

+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request
{
    return request;
}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest *)a toRequest:(NSURLRequest *)b
{
    return NO;
}

- (void)startLoading
{
#ifdef USE_NATIVE_OBJPTR
    NSString *objptr = [self.request valueForHTTPHeaderField:@"native"];
    if (objptr) {
        NativeCall *native = (NativeCall *)[objptr longLongValue];
        [self sendResponse:[native dispatch:self.request]];
    } else {
        [self sendResponse:_rete(@"$$native not defined")];
    }
#else
    [self sendResponse:[__global_native_call dispatch:self.request]];
#endif
}

- (void)stopLoading
{
    /* nothing to do */
}

- (void)sendResponse:(NSString *)body
{
    NSData *data = [body dataUsingEncoding:NSUTF8StringEncoding];

    NSHTTPURLResponse *response = [[NSHTTPURLResponse alloc] initWithURL:[self.request URL]
                                                              statusCode:200
                                                             HTTPVersion:@"HTTP/1.1"
                                                            headerFields:@{@"Content-Type" : @"text/plain"}];

    [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
	[self.client URLProtocol:self didLoadData:data];
    [self.client URLProtocolDidFinishLoading:self];

    [response release];
}

@end
