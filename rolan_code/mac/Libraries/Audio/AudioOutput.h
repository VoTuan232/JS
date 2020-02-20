//
//  AudioOutput.h
//
//  Copyright 2013 Roland Corporation. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AudioOutputStream.h"

/** 本体でのオーディオ出力用のオブジェクトです。
 
 AudioOutputStream プロトコルを実装しています。
 
 @see AudioOutputStream
 */
@interface AudioOutput : NSObject <AudioOutputStream>

@property (assign) id<AudioOutputStreamDelegate> delegate;

- (void)ASBD:(AudioStreamBasicDescription *)audioFormat;

- (void)start;
- (void)pause;
- (void)stop;

- (float)volume;
- (void)setVolume:(float)gain;

- (NSUInteger)numberOfChannels;

- (float)peakPowerForChannel:(NSUInteger)channelNumber;
- (NSTimeInterval)currentTime;
- (int)status;

@end
