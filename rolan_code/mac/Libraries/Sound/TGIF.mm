//
//  TGIF.cpp
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#ifdef USE_TGIF

#import "TGIF.h"
#import <libtg/TGAdaptor.h>
#import <AudioUnit/AudioUnit.h>
#import <CommonCrypto/CommonDigest.h>
#import "../MIDIClient/timestamp.h"
#import "../../security.h"

#import <TargetConditionals.h>
#if TARGET_OS_IPHONE
#import <AVFoundation/AVFoundation.h>
#endif

#define kSampleRate         (44100.0)
#define kNumOfChannels      (2)

static mach_timebase_info_data_t base;

static AudioUnit       _audioUnit = 0;
static MIDIClientRef   _clientRef = 0;
static MIDIPortRef     _outputPortRef = 0;
static MIDIEndpointRef _destinationRef = 0;

static int  _refcount = 0;
static BOOL _started = NO;
static BOOL _thru = NO;

static uint32_t _time0 = 0;
static uint64_t _renderFrames = 0;
static uint64_t _lastTimeStamp = 0;

#if TARGET_OS_IPHONE
@interface AudioSessionObserver : NSObject
@end
@implementation AudioSessionObserver
- (void)handleInterruption:(NSNotification *)notification
{
    AVAudioSessionInterruptionType type = (AVAudioSessionInterruptionType)[notification.userInfo[AVAudioSessionInterruptionTypeKey] unsignedIntegerValue];
    switch (type) {
        case AVAudioSessionInterruptionTypeBegan:
            _started = NO;
            AudioOutputUnitStop(_audioUnit);
            break;
        case AVAudioSessionInterruptionTypeEnded:
            _started = (AudioOutputUnitStart(_audioUnit) == noErr);
            break;
        default:
            break;
    }
}
- (void)handleRouteChange:(NSNotification *)notification
{
    /* nothing to do */
}
@end
static AudioSessionObserver *_observer = nil;;
#endif

extern "C" {

/* private functions */

static OSStatus renderCallback(void*                       inRefCon,
                               AudioUnitRenderActionFlags* ioActionFlags,
                               const AudioTimeStamp*       inTimeStamp,
                               UInt32                      inBusNumber,
                               UInt32                      inNumberFrames,
                               AudioBufferList*            ioData)
{
    if ((_renderFrames * 1000 / kSampleRate) + _time0 < current_millis_timestamp()) {
		_renderFrames = _lastTimeStamp = 0;
        TGAdaptor_flushEvents();
    }

    TGAdaptor_processReplacingFloat((float *)ioData->mBuffers[0].mData, inNumberFrames);

    if (_renderFrames == 0) _time0 = current_millis_timestamp() + 1;
    _renderFrames += inNumberFrames;
    return noErr;
}

static void ReadProc(const MIDIPacketList *pktlist, void *readProcRefCon, void *srcConnRefCon)
{
    MIDIPacket *packet = (MIDIPacket *)&(pktlist->packet[0]);
    for (UInt32 i = 0; i < pktlist->numPackets; i++) {
        long deltaframes = 0;
        if (_lastTimeStamp && packet->timeStamp) {
            uint64_t delta = (packet->timeStamp - _lastTimeStamp) * base.numer / base.denom;
            deltaframes = (long)(delta * kSampleRate / 1000000000);
        }
        _lastTimeStamp = packet->timeStamp;
        TGAdaptor_processEvents(packet->data, packet->length, deltaframes);
        packet = MIDIPacketNext(packet);
    }
}

/* public functions */

void TGIF_Initialize()
{
    if ((++_refcount) != 1) return;

    mach_timebase_info(&base);

#if TARGET_OS_IPHONE
    [[AVAudioSession sharedInstance] setPreferredIOBufferDuration:(128 / kSampleRate) error:nil];
    [[AVAudioSession sharedInstance] setPreferredSampleRate:kSampleRate error:nil];
#endif

    /* initialize AudioUnit Output */

    AudioComponentDescription cd;
    cd.componentType = kAudioUnitType_Output;
#if TARGET_OS_IPHONE
    cd.componentSubType = kAudioUnitSubType_RemoteIO;
#else
    cd.componentSubType = kAudioUnitSubType_DefaultOutput;
#endif
    cd.componentManufacturer = kAudioUnitManufacturer_Apple;
    cd.componentFlags = 0;
    cd.componentFlagsMask = 0;
    AudioComponent component = AudioComponentFindNext(NULL, &cd);
    if (AudioComponentInstanceNew(component, &_audioUnit) != noErr) return;
    if (AudioUnitInitialize(_audioUnit) != noErr) return;

    AURenderCallbackStruct callbackStruct;
    callbackStruct.inputProc = renderCallback;
    callbackStruct.inputProcRefCon = nil;
    AudioUnitSetProperty(_audioUnit,
                         kAudioUnitProperty_SetRenderCallback,
                         kAudioUnitScope_Input,
                         0,
                         &callbackStruct,
                         sizeof(AURenderCallbackStruct));

    AudioStreamBasicDescription audioFormat;
    audioFormat.mSampleRate        = kSampleRate;
    audioFormat.mFormatID          = kAudioFormatLinearPCM;
    audioFormat.mFormatFlags       = kAudioFormatFlagsNativeFloatPacked;
    audioFormat.mChannelsPerFrame  = kNumOfChannels;
    audioFormat.mBytesPerPacket    = sizeof(float) * kNumOfChannels;
    audioFormat.mBytesPerFrame     = sizeof(float) * kNumOfChannels;
    audioFormat.mBitsPerChannel    = 8 * sizeof(float);
    audioFormat.mFramesPerPacket   = 1;
    audioFormat.mReserved          = 0;
    AudioUnitSetProperty(_audioUnit,
                         kAudioUnitProperty_StreamFormat,
                         kAudioUnitScope_Input,
                         0,
                         &audioFormat,
                         sizeof(AudioStreamBasicDescription));

    UInt32 maxFramesPerSlice = 0;
    UInt32 propertySize = sizeof(maxFramesPerSlice);
    AudioUnitGetProperty(_audioUnit,
                         kAudioUnitProperty_MaximumFramesPerSlice,
                         kAudioUnitScope_Global,
                         0,
                         &maxFramesPerSlice,
                         &propertySize);

    /* initialize libtg */
#ifdef LIBTG_ACTIVATION_KEY_LEN
    int len = LIBTG_ACTIVATION_KEY_LEN;
    unsigned char key[len + 4];
    DESCRUMBLE_KEY(key, LIBTG_ACTIVATION_KEY);
    int pid = [[NSProcessInfo processInfo] processIdentifier];
    key[len++] = (unsigned char)((pid >> 24) & 0xff);
    key[len++] = (unsigned char)((pid >> 16) & 0xff);
    key[len++] = (unsigned char)((pid >>  8) & 0xff);
    key[len++] = (unsigned char)((pid >>  0) & 0xff);
    unsigned char context[CC_MD5_DIGEST_LENGTH];
    CC_MD5(key, len, context);
#else
	void *context = 0;
#endif
    BOOL success = TGMac_initialize(context, kSampleRate);

    /* activate libtg */
    if (success) {
        success = TGAdaptor_activate(kSampleRate, maxFramesPerSlice);
    }

    /* create virtual MIDI output endpoint */
    if (success) {
        MIDIClientCreate((CFStringRef)@"jp.co.roland.quattro.TGIF", NULL, nil, &_clientRef);
        MIDIOutputPortCreate(_clientRef, (CFStringRef)@"TGIFOutputPort", &_outputPortRef);
        MIDIDestinationCreate(_clientRef, (CFStringRef)@"TGIF", ReadProc, nil, &_destinationRef);
        MIDIObjectSetIntegerProperty(_destinationRef, kMIDIPropertyUniqueID, 'TGIF');

        /* hidden from other clients */
        SInt32 isOffline = 1;
        MIDIObjectSetIntegerProperty(_destinationRef, kMIDIPropertyOffline, isOffline);
    }

#if TARGET_OS_IPHONE
    if (success) {
        _observer = [[AudioSessionObserver alloc] init];
        [[NSNotificationCenter defaultCenter] addObserver:_observer
                                                 selector:@selector(handleInterruption:)
                                                     name:AVAudioSessionInterruptionNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:_observer
                                                 selector:@selector(handleRouteChange:)
                                                     name:AVAudioSessionRouteChangeNotification
                                                   object:nil];
    }
#endif
    
    /* start AudioUnit Output */
    if (success) {
        _started = (AudioOutputUnitStart(_audioUnit) == noErr);
    }
}

void TGIF_Uninitialize()
{
    if ((--_refcount) != 0) return;

    if (_started) {
        _started = _thru = NO;

        if (_destinationRef) {
            MIDIEndpointDispose(_destinationRef);
            _destinationRef = 0;
        }
        if (_outputPortRef) {
            MIDIPortDispose(_outputPortRef);
            _outputPortRef = 0;
        }
        if (_clientRef) {
            MIDIClientDispose(_clientRef);
            _clientRef = 0;
        }

        if (_audioUnit) {
            AudioOutputUnitStop(_audioUnit);
            AudioUnitUninitialize(_audioUnit);
            AudioComponentInstanceDispose(_audioUnit);
            _audioUnit = 0;
        }

#if TARGET_OS_IPHONE
        [[NSNotificationCenter defaultCenter] removeObserver:_observer];
        [_observer release];
        _observer = nil;
#endif

        TGMac_terminate();
    }
}

void TGIF_AudioOutputReStart()
{
    _started = (AudioOutputUnitStart(_audioUnit) == noErr);
}

int TGIF_GetValue(u_int32_t pid)
{
    return (_started ? TGAdaptor_getValue(pid) : 0);
}

void TGIF_SetValue(u_int32_t pid, int val)
{
    if (_started) TGAdaptor_setValue(pid, val);
}

void TGIF_MIDISend(const u_int8_t *data, int bytes, MIDITimeStamp timeStamp)
{
    if (!_started || !_destinationRef)
        return;

    if (data == NULL || bytes <= 0)
        return;

    assert(bytes <= 512);

    ByteCount list[bytes + 100];

    MIDIPacketList  *packetList = (MIDIPacketList*)list;
    MIDIPacket      *packet     = MIDIPacketListInit(packetList);
    MIDITimeStamp   time        = timeStamp;

    MIDIPacketListAdd(packetList, sizeof(list), packet, time, bytes, data);
    MIDISend(_outputPortRef, _destinationRef, packetList);
}

void TGIF_MIDIThru(const MIDIPacketList *pktlist)
{
    if (_started && _thru) ReadProc(pktlist, NULL, NULL);
}

MIDIEndpointRef TGIF_MIDIGetDestination() { return _destinationRef; }

BOOL TGIF_IsThru() { return _thru; }
void TGIF_SetThru(BOOL enable) { _thru = enable; }

} /* extern "C" */

#endif /* USE_TGIF */
