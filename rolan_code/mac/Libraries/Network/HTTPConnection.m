//
//  HTTPConnection.m
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#import "HTTPConnection.h"

@interface HTTPConnection () {
    u_int32_t _tid;
    NSMutableDictionary *_dict;
}
@end

@implementation HTTPConnection

- (id)init
{
	if (self = [super init]) {
        _dict = [[NSMutableDictionary alloc] init];
    }
	return self;
}

- (void)dealloc
{
    [_dict removeAllObjects];
    [_dict release];

    [super dealloc];
}

- (u_int32_t)download:(NSURL *)url to:(NSURL *)fileURL
{
    if (!url) {
        return 0xffffffff;
    }

    HTTPTask* obj = [[[HTTPTask alloc] initWithHTTPConnection:self] autorelease];
    @synchronized(_dict) {
      obj.uid = _tid++;
      [_dict setObject:obj forKey:[NSNumber numberWithUnsignedInt:obj.uid]];
    }

    obj.url = url;
    if (fileURL != nil) {
        obj.fileURL = fileURL;
    } else {
        int pid = [[NSProcessInfo processInfo] processIdentifier];
        obj.fileURL = [NSURL fileURLWithPath:[NSTemporaryDirectory() stringByAppendingPathComponent:[NSString stringWithFormat:@"qttr_%x_%x.tmp", pid, obj.uid]]];
    }
    [obj download];
    return obj.uid;
}

- (u_int32_t)upload:(NSURL *)url file:(NSURL *)fileURL
{
    if (!url || !fileURL) {
        return 0xffffffff;
    }

    HTTPTask* obj = [[[HTTPTask alloc] initWithHTTPConnection:self] autorelease];
    @synchronized(_dict) {
      obj.uid = _tid++;
      [_dict setObject:obj forKey:[NSNumber numberWithUnsignedInt:obj.uid]];
    }
    obj.url = url;
    obj.fileURL = fileURL;
    [obj upload];
	return obj.uid;
}

- (void)cancel:(u_int32_t)uid
{
    @synchronized(_dict) {
		HTTPTask* obj = [_dict objectForKey:[NSNumber numberWithUnsignedInt:uid]];
		[obj cancel];
		[_dict removeObjectForKey:[NSNumber numberWithUnsignedInt:uid]];
	}
}

- (void)didLoadData:(u_int32_t)uid contentLength:(NSInteger)length amount:(NSInteger)bytes
{
    if ([self.delegate respondsToSelector:@selector(connectionDidLoadData:contentLength:amount:)]) {
        [self.delegate connectionDidLoadData:uid contentLength:length amount:bytes];
    }
}

- (void)didFinishLoading:(HTTPTask *)obj
{
    if ([self.delegate respondsToSelector:@selector(connectionDidFinishLoading:file:)]) {
        [self.delegate connectionDidFinishLoading:obj.uid file:obj.fileURL];
    }
    @synchronized(_dict) {
        [_dict removeObjectForKey:[NSNumber numberWithUnsignedInt:obj.uid]];
    }
}

- (void)errorDidOccur:(HTTPTask *)obj
{
    if ([self.delegate respondsToSelector:@selector(connectionErrorDidOccur:url:)]) {
        [self.delegate connectionErrorDidOccur:obj.uid url:obj.url];
    }
    @synchronized(_dict) {
        [_dict removeObjectForKey:[NSNumber numberWithUnsignedInt:obj.uid]];
    }
}

@end
