//
//  BarcodeViewController.m
//
//  Copyright (c) 2018 Roland Corporation. All rights reserved.
//

#import <AVFoundation/AVFoundation.h>
#import "BarcodeViewController.h"

@interface BarcodeViewController () <AVCaptureMetadataOutputObjectsDelegate> {
    AVCaptureSession *_session;
    AVCaptureVideoPreviewLayer *_previewLayer;
    BOOL detected;
}
@end

@implementation BarcodeViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    _session = [[AVCaptureSession alloc] init];
    
    AVCaptureDeviceDiscoverySession *discoverySession =
    [AVCaptureDeviceDiscoverySession discoverySessionWithDeviceTypes:@[AVCaptureDeviceTypeBuiltInWideAngleCamera]
                                                           mediaType:AVMediaTypeVideo
                                                            position:AVCaptureDevicePositionBack];
    NSArray *devices = [discoverySession devices];
    AVCaptureDevice *device = devices.count ? devices[0] : [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];

    NSError *error = nil;
    AVCaptureDeviceInput *input = [AVCaptureDeviceInput deviceInputWithDevice:device error:&error];
    if (error != nil) {
        [self dismissViewControllerAnimated:YES completion:nil]; return;
    }
    [_session addInput:input];
    
    AVCaptureMetadataOutput *output = [[[AVCaptureMetadataOutput alloc] init] autorelease];
    [output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
    [_session addOutput:output];

    _previewLayer = [AVCaptureVideoPreviewLayer layerWithSession:_session];
    _previewLayer.frame = self.view.bounds;
    _previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;
    [self.view.layer addSublayer:_previewLayer];

    output.metadataObjectTypes = @[self.type];
    [_session startRunning];
}

-(void)viewDidLayoutSubviews
{
    [super viewDidLayoutSubviews];
    
    _previewLayer.frame = self.view.bounds;

    UIInterfaceOrientation orientation = UIInterfaceOrientationUnknown;
    if (@available(iOS 13.0, *)) {
        orientation = [[UIApplication sharedApplication] windows][0].windowScene.interfaceOrientation;
    } else {
        orientation = [[UIApplication sharedApplication] statusBarOrientation];
    }
    switch (orientation) {
        case UIInterfaceOrientationPortrait:
            [_previewLayer.connection setVideoOrientation:AVCaptureVideoOrientationPortrait];
            break;
        case UIInterfaceOrientationPortraitUpsideDown:
            [_previewLayer.connection setVideoOrientation:AVCaptureVideoOrientationPortraitUpsideDown];
            break;
        case UIInterfaceOrientationLandscapeLeft:
            [_previewLayer.connection setVideoOrientation:AVCaptureVideoOrientationLandscapeLeft];
            break;
        case UIInterfaceOrientationLandscapeRight:
            [_previewLayer.connection setVideoOrientation:AVCaptureVideoOrientationLandscapeRight];
            break;
        default:
            break;
    }
}

- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];

    [_session stopRunning];
    [_session release];
    self.type = nil;
}

- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection {
    for (AVMetadataObject *metadata in metadataObjects) {
        if ([metadata.type isEqualToString:self.type] && !detected) {
            detected = YES;
            NSString *data = [(AVMetadataMachineReadableCodeObject *)metadata stringValue];
            NSString *event = [NSString stringWithFormat:@"%@\f%@\f%@", @"barcode", @"detected", data];
            [[NSNotificationCenter defaultCenter] postNotificationName:POST_EVENT object:event userInfo:nil];
            [self.navigationController popViewControllerAnimated:YES];
        }
    }
}

@end
