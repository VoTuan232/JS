//
//  NativeCall+midi.m
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#import "NativeCall.h"
#import <TargetConditionals.h>

static NSString *const OBJ_NAME = @"recognizer";

@interface NativeCall (recognizer) <SpeechRecognizationResult> @end

@implementation NativeCall (recognizer)

- (NSString *)$$recognizer_start:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
    [[NSNotificationCenter defaultCenter] postNotificationName:@"startListening" object:self userInfo:nil];
#else
    [self result:@"error" :@"Speech Recognization is not supported."];
#endif
    undefined;
}

- (NSString *)$$recognizer_stop:(NSString *)param1 :(NSString *)param2
{
#if TARGET_OS_IPHONE
    [[NSNotificationCenter defaultCenter] postNotificationName:@"stopListening" object:nil userInfo:nil];
#endif
    undefined;
}

- (void)result:(NSString *)param1 :(NSString *)param2
{
    NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", OBJ_NAME, param1, param2];
    [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
}

@end
