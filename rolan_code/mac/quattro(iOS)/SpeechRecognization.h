//
//  SpeechRecognization.h
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Speech/Speech.h>
#import "NativeCall.h"

@interface SpeechRecognization : NSObject

- (void)requestAuthorization;

- (void)startListening:(id<SpeechRecognizationResult>)obj;
- (void)stopListening;

@end
