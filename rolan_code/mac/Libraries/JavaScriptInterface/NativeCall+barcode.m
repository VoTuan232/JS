//
//  NativeCall+barcode.m
//
//  Copyright 2018 Roland Corporation. All rights reserved.
//

#import <AVFoundation/AVFoundation.h>
#import "NativeCall.h"
#import <TargetConditionals.h>

//static NSString *const OBJ_NAME = @"barcode";

@interface NativeCall (barcode) @end

@implementation NativeCall (barcode)

- (NSString *)$$barcode_read:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
    if (param1) {
        [[NSNotificationCenter defaultCenter] postNotificationName:@"readBarcode" object:param1 userInfo:nil];
    } 
#else
    /* Not supported */
#endif
    undefined;
}

@end
