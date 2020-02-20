//
//  OpenPanelController.h
//
//  Copyright (c) 2015 Roland Corporation. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "NativeCall.h"

@interface OpenPanelController : UIViewController
@property (retain) OpenPanel *panel;
@property (retain) NSURL *currentURL;
@end
