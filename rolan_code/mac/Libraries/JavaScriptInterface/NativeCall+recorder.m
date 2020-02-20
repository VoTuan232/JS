//
//  NativeCall+recorder.m
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#import "NativeCall.h"

static NSString *const OBJ_NAME = @"recorder";

@interface NativeCall (recorder) @end

@implementation NativeCall (recorder)

- (NSString *)$$recorder_create:(NSString *)param1 :(NSString *)param2
{
	return_b([recorder create:[NSURL fileURLWithPath:param1]
                       format:(enum RecordingFormat)[param2 intValue]]);
}

- (NSString *)$$recorder_record: (NSString *)param1 :(NSString *)param2
{ [recorder record]; undefined; }

- (NSString *)$$recorder_pause:(NSString *)param1 :(NSString *)param2
{ [recorder pause]; undefined; }

- (NSString *)$$recorder_stop: (NSString *)param1 :(NSString *)param2
{ [recorder stop:[param1 boolValue]]; undefined; }

- (NSString *)$$recorder_file:(NSString *)param1 :(NSString *)param2
{ return_s([recorder.file path]); }

- (NSString *)$$recorder_status:(NSString *)param1 :(NSString *)param2
{ return_d(recorder.status); }

- (NSString *)$$recorder_channels:(NSString *)param1 :(NSString *)param2
{ return_u(recorder.numberOfChannels); }

- (NSString *)$$recorder_peakpower:(NSString *)param1 :(NSString *)param2
{ return_f([recorder peakPowerForChannel:[param1 intValue]]); }

- (NSString *)$$recorder_time:(NSString *)param1 :(NSString *)param2
{ return_f(recorder.currentTime); }

- (NSString *)$$recorder_volume:(NSString *)param1 :(NSString *)param2
{
	if (param1) {
		recorder.volume = [param1 floatValue];
	}
	return_f(recorder.volume);
}

- (NSString *)$$recorder_input:(NSString *)param1 :(NSString *)param2
{ recorder.input = [param1 boolValue] ? rwc.inputStream : input; undefined; }

@end

@implementation _AudioRecorderDelegate

- (void)audioRecorderDidFinishRecording:(NSURL *)fileURL
{
	NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", OBJ_NAME, @"stop", [fileURL path]];
    [self.native postEvent:event];
}

- (void)audioRecorderErrorDidOccur:(NSURL *)fileURL
{
	NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", OBJ_NAME, @"error", [fileURL path]];
    [self.native postEvent:event];
}

@end
