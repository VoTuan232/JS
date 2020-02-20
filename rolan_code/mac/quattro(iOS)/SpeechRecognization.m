//
//  SavePanelController.m
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import "SpeechRecognization.h"
#import "JavaScriptInterface.h"

@interface SpeechRecognization () {
    SFSpeechRecognitionTask *_task;
    BOOL _authorized;
    NSTimer *_timer;
    BOOL _detect;
}
@property (retain) AVAudioEngine *audioEngine;
@property (retain) SFSpeechRecognizer *recognizer;
@property (retain) SFSpeechAudioBufferRecognitionRequest *request;
@end

@implementation SpeechRecognization

- (id)init
{
    if (self = [super init]) {
#ifdef USE_SPEECH_RECOGNIZER
        if (![SFSpeechRecognizer class]) return self;
        _audioEngine = [[AVAudioEngine alloc] init];
        _recognizer = [[SFSpeechRecognizer alloc] initWithLocale:[NSLocale localeWithLocaleIdentifier:[[NSLocale currentLocale] localeIdentifier]]];
#endif
    }
    
    return self;
}

- (void)dealloc
{
    [self stopListening];

    [_recognizer release];
    [_audioEngine release];

    [super dealloc];
}

- (void)requestAuthorization
{
#ifdef USE_SPEECH_RECOGNIZER
    if (![SFSpeechRecognizer class]) return;
    
    [SFSpeechRecognizer requestAuthorization:^(SFSpeechRecognizerAuthorizationStatus status) {
        switch (status) {
            case SFSpeechRecognizerAuthorizationStatusNotDetermined:
            case SFSpeechRecognizerAuthorizationStatusDenied:
            case SFSpeechRecognizerAuthorizationStatusRestricted:
                _authorized = NO;
                break;
            case SFSpeechRecognizerAuthorizationStatusAuthorized:
                _authorized = YES;
                break;
            default:
                break;
        }
    }];
#endif
}

- (void)startListening:(id<SpeechRecognizationResult>)obj
{
    if (!_authorized) {
        [obj result:@"error" :@"Speech Recognition is not available."];
        return;
    }

    if (self.audioEngine.running) {
        [obj result:@"error" :@"AVAudioEngine is running."];
        return;
    }
    
    [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryRecord error:nil];
    [[AVAudioSession sharedInstance] setMode:AVAudioSessionModeMeasurement error:nil];
    [[AVAudioSession sharedInstance] setActive:YES withOptions:AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation error:nil];
    
    self.request = [[SFSpeechAudioBufferRecognitionRequest alloc] init];
    self.request.shouldReportPartialResults = YES;

    _task = [self.recognizer recognitionTaskWithRequest:self.request resultHandler:^(SFSpeechRecognitionResult * _Nullable result, NSError * _Nullable error) {

        if (error) {
            [obj result:@"error" :error.localizedDescription];
        } else if (result) {
            _detect = YES;
            if (result.isFinal) {
                [obj result:@"final" :result.bestTranscription.formattedString];
            } else {
                [obj result:@"partial" :result.bestTranscription.formattedString];
            }
        }
        
        if (error || result.isFinal) {
            [_timer invalidate];
            _timer = nil;

            [self.audioEngine stop];
            [self.audioEngine.inputNode removeTapOnBus:0];
            self.request = nil;
            _task = nil;
        }
    }];
    
    AVAudioFormat *recordingFormat = [self.audioEngine.inputNode outputFormatForBus:0];
    [self.audioEngine.inputNode installTapOnBus:0 bufferSize:1024 format:recordingFormat block:^(AVAudioPCMBuffer * _Nonnull buffer, AVAudioTime * _Nonnull when) {
        [self.request appendAudioPCMBuffer:buffer];
    }];
    
    [self.audioEngine prepare];

    _detect = NO;
    _timer = [NSTimer scheduledTimerWithTimeInterval:3.0
                                              target:self
                                            selector:@selector(silence:)
                                            userInfo:nil
                                             repeats:YES];

    [self.audioEngine startAndReturnError:nil];
}

-(void)silence:(NSTimer *)timer {
    if (!_detect) {
        if (self.audioEngine.running) {
            [self.audioEngine stop];
            [self.request endAudio];
        }
    }
    _detect = NO;
}

- (void)stopListening
{
    [_task cancel];
    _task = nil;
}

@end
