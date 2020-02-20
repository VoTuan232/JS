//
//	editor_setting.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//


// ----------------------------------------
// for GUITAR MODE
// ----------------------------------------

function EditorSetting1() { // see "var Patch = [" of address_map.js

	this.blockSet = [
		'Temp_patch%common',
		'Temp_patch%common2',
		'Temp_patch%led',
		'Temp_patch%assign(1)',
		'Temp_patch%assign(2)',
		'Temp_patch%assign(3)',
		'Temp_patch%assign(4)',
		'Temp_patch%assign(5)',
		'Temp_patch%assign(6)',
		'Temp_patch%assign(7)',
		'Temp_patch%assign(8)',
		'Temp_patch%assign(9)',
		'Temp_patch%assign(10)',
		'Temp_patch%assign(11)',
		'Temp_patch%assign(12)',
		'Temp_patch%assign(13)',
		'Temp_patch%assign(14)',
		'Temp_patch%assign(15)',
		'Temp_patch%assign(16)',
//		'Temp_patch%padding',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function EditorSetting2() {

	this.blockSet = [
		// see "var Patch = [" of address_map.js
		'Temp_patch%efct',
		'Temp_patch%gtr2midi',

		/// see "var Inst = [" of address_map.js
		'Temp_patch%inst(1)%inst',
		'Temp_patch%inst(1)%instDynaSynth',
		'Temp_patch%inst(1)%instOscSynth',
		'Temp_patch%inst(1)%instGr300',
		'Temp_patch%inst(1)%instEGtr',
		'Temp_patch%inst(1)%instAcoustic',
		'Temp_patch%inst(1)%instEBass',
		'Temp_patch%inst(1)%instVioGtr',
		'Temp_patch%inst(1)%instPolyFx',
		'Temp_patch%inst(1)%instAltTune',

		'Temp_patch%inst(2)%inst',
		'Temp_patch%inst(2)%instDynaSynth',
		'Temp_patch%inst(2)%instOscSynth',
		'Temp_patch%inst(2)%instGr300',
		'Temp_patch%inst(2)%instEGtr',
		'Temp_patch%inst(2)%instAcoustic',
		'Temp_patch%inst(2)%instEBass',
		'Temp_patch%inst(2)%instVioGtr',
		'Temp_patch%inst(2)%instPolyFx',
		'Temp_patch%inst(2)%instAltTune',

		'Temp_patch%inst(3)%inst',
		'Temp_patch%inst(3)%instDynaSynth',
		'Temp_patch%inst(3)%instOscSynth',
		'Temp_patch%inst(3)%instGr300',
		'Temp_patch%inst(3)%instEGtr',
		'Temp_patch%inst(3)%instAcoustic',
		'Temp_patch%inst(3)%instEBass',
		'Temp_patch%inst(3)%instVioGtr',
		'Temp_patch%inst(3)%instPolyFx',
		'Temp_patch%inst(3)%instAltTune',

		'Temp_patch%comp',
		'Temp_patch%dist',
		'Temp_patch%amp',
		'Temp_patch%ns',
		'Temp_patch%eq(1)',
		'Temp_patch%eq(2)',
		'Temp_patch%delay(1)',
		'Temp_patch%delay(2)',
		'Temp_patch%mstDelay',
		'Temp_patch%chorus',

		// see "var Fx = [" of address_map.js
		'Temp_patch%fx(1)%fx',
		'Temp_patch%fx(1)%fxAcReso',
		'Temp_patch%fx(1)%fxAWah',
		'Temp_patch%fx(1)%fxChorus',
		'Temp_patch%fx(1)%fxCVibe',
		'Temp_patch%fx(1)%fxComp',
		'Temp_patch%fx(1)%fxDefretter',
		'Temp_patch%fx(1)%fxDefretterBass',
		'Temp_patch%fx(1)%fxDelay',
		'Temp_patch%fx(1)%fxFlanger',
		'Temp_patch%fx(1)%fxFlangerBass',
		'Temp_patch%fx(1)%fxFv',
		'Temp_patch%fx(1)%fxGEq',
		'Temp_patch%fx(1)%fxHarmonist',
		'Temp_patch%fx(1)%fxHumanizer',
		'Temp_patch%fx(1)%fxIsolator',
		'Temp_patch%fx(1)%fxLimiter',
		'Temp_patch%fx(1)%fxLofi',
		'Temp_patch%fx(1)%fxOctave',
		'Temp_patch%fx(1)%fxOctaveBass',
		'Temp_patch%fx(1)%fxPan',
		'Temp_patch%fx(1)%fxPEq',
		'Temp_patch%fx(1)%fxPedalBend',
		'Temp_patch%fx(1)%fxPhaser',
		'Temp_patch%fx(1)%fxPitchShift',
		'Temp_patch%fx(1)%fxReverb',
		'Temp_patch%fx(1)%fxRingMod',
		'Temp_patch%fx(1)%fxRotary',
		'Temp_patch%fx(1)%fxSitarSim',
		'Temp_patch%fx(1)%fxSlicer',
		'Temp_patch%fx(1)%fxSlowGear',
		'Temp_patch%fx(1)%fxSlowGearBass',
		'Temp_patch%fx(1)%fxSoundHold',
		'Temp_patch%fx(1)%fxTWah',
		'Temp_patch%fx(1)%fxTWahBass',
		'Temp_patch%fx(1)%fxTremolo',
		'Temp_patch%fx(1)%fxVibrato',
		'Temp_patch%fx(1)%fxWah',
		
		'Temp_patch%fx(2)%fx',
		'Temp_patch%fx(2)%fxAcReso',
		'Temp_patch%fx(2)%fxAWah',
		'Temp_patch%fx(2)%fxChorus',
		'Temp_patch%fx(2)%fxCVibe',
		'Temp_patch%fx(2)%fxComp',
		'Temp_patch%fx(2)%fxDefretter',
		'Temp_patch%fx(2)%fxDefretterBass',
		'Temp_patch%fx(2)%fxDelay',
		'Temp_patch%fx(2)%fxFlanger',
		'Temp_patch%fx(2)%fxFlangerBass',
		'Temp_patch%fx(2)%fxFv',
		'Temp_patch%fx(2)%fxGEq',
		'Temp_patch%fx(2)%fxHarmonist',
		'Temp_patch%fx(2)%fxHumanizer',
		'Temp_patch%fx(2)%fxIsolator',
		'Temp_patch%fx(2)%fxLimiter',
		'Temp_patch%fx(2)%fxLofi',
		'Temp_patch%fx(2)%fxOctave',
		'Temp_patch%fx(2)%fxOctaveBass',
		'Temp_patch%fx(2)%fxPan',
		'Temp_patch%fx(2)%fxPEq',
		'Temp_patch%fx(2)%fxPedalBend',
		'Temp_patch%fx(2)%fxPhaser',
		'Temp_patch%fx(2)%fxPitchShift',
		'Temp_patch%fx(2)%fxReverb',
		'Temp_patch%fx(2)%fxRingMod',
		'Temp_patch%fx(2)%fxRotary',
		'Temp_patch%fx(2)%fxSitarSim',
		'Temp_patch%fx(2)%fxSlicer',
		'Temp_patch%fx(2)%fxSlowGear',
		'Temp_patch%fx(2)%fxSlowGearBass',
		'Temp_patch%fx(2)%fxSoundHold',
		'Temp_patch%fx(2)%fxTWah',
		'Temp_patch%fx(2)%fxTWahBass',
		'Temp_patch%fx(2)%fxTremolo',
		'Temp_patch%fx(2)%fxVibrato',
		'Temp_patch%fx(2)%fxWah',
		
		'Temp_patch%fx(3)%fx',
		'Temp_patch%fx(3)%fxAcReso',
		'Temp_patch%fx(3)%fxAWah',
		'Temp_patch%fx(3)%fxChorus',
		'Temp_patch%fx(3)%fxCVibe',
		'Temp_patch%fx(3)%fxComp',
		'Temp_patch%fx(3)%fxDefretter',
		'Temp_patch%fx(3)%fxDefretterBass',
		'Temp_patch%fx(3)%fxDelay',
		'Temp_patch%fx(3)%fxFlanger',
		'Temp_patch%fx(3)%fxFlangerBass',
		'Temp_patch%fx(3)%fxFv',
		'Temp_patch%fx(3)%fxGEq',
		'Temp_patch%fx(3)%fxHarmonist',
		'Temp_patch%fx(3)%fxHumanizer',
		'Temp_patch%fx(3)%fxIsolator',
		'Temp_patch%fx(3)%fxLimiter',
		'Temp_patch%fx(3)%fxLofi',
		'Temp_patch%fx(3)%fxOctave',
		'Temp_patch%fx(3)%fxOctaveBass',
		'Temp_patch%fx(3)%fxPan',
		'Temp_patch%fx(3)%fxPEq',
		'Temp_patch%fx(3)%fxPedalBend',
		'Temp_patch%fx(3)%fxPhaser',
		'Temp_patch%fx(3)%fxPitchShift',
		'Temp_patch%fx(3)%fxReverb',
		'Temp_patch%fx(3)%fxRingMod',
		'Temp_patch%fx(3)%fxRotary',
		'Temp_patch%fx(3)%fxSitarSim',
		'Temp_patch%fx(3)%fxSlicer',
		'Temp_patch%fx(3)%fxSlowGear',
		'Temp_patch%fx(3)%fxSlowGearBass',
		'Temp_patch%fx(3)%fxSoundHold',
		'Temp_patch%fx(3)%fxTWah',
		'Temp_patch%fx(3)%fxTWahBass',
		'Temp_patch%fx(3)%fxTremolo',
		'Temp_patch%fx(3)%fxVibrato',
		'Temp_patch%fx(3)%fxWah',
		
		'Temp_patch%reverb',
	];
	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function SystemSetting() {

	this.blockSet = [ // see this.layout of address_map.js 
		'SystemEx_common',
		'System_common',
		'System_control',
		'System_led',
		'System_midi',
		'System_gkSetting(1)',
		'System_gkSetting(2)',
		'System_gkSetting(3)',
		'System_gkSetting(4)',
		'System_gkSetting(5)',
		'System_gkSetting(6)',
		'System_gkSetting(7)',
		'System_gkSetting(8)',
		'System_gkSetting(9)',
		'System_gkSetting(10)',
		'System_normalSetting(1)',
		'System_normalSetting(2)',
		'System_normalSetting(3)',
		'System_normalSetting(4)',
		'System_normalSetting(5)',
		'System_normalSetting(6)',
		'System_normalSetting(7)',
		'System_normalSetting(8)',
		'System_normalSetting(9)',
		'System_normalSetting(10)',
		'System_inout',
		'System_efct',
		'System_pitch',
		'System_gtr2midi',
		'Pcmap_bank(1)',
		'Pcmap_bank(2)',
		'Pcmap_bank(3)',
		'Pcmap_bank(4)',
		'Setup_efct',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function PatchName() {

	this.blockSet = [
		'patch_name',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVari_DynaSynthName() {
	this.blockSet = [
		'InstVari_DynaSynth(1)%name',
		'InstVari_DynaSynth(2)%name',
		'InstVari_DynaSynth(3)%name',
		'InstVari_DynaSynth(4)%name',
		'InstVari_DynaSynth(5)%name',
		'InstVari_DynaSynth(6)%name',
		'InstVari_DynaSynth(7)%name',
		'InstVari_DynaSynth(8)%name',
		'InstVari_DynaSynth(9)%name',
		'InstVari_DynaSynth(10)%name',
		'InstVari_DynaSynth(11)%name',
		'InstVari_DynaSynth(12)%name',
		'InstVari_DynaSynth(13)%name',
		'InstVari_DynaSynth(14)%name',
		'InstVari_DynaSynth(15)%name',
		'InstVari_DynaSynth(16)%name',
		'InstVari_DynaSynth(17)%name',
		'InstVari_DynaSynth(18)%name',
		'InstVari_DynaSynth(19)%name',
		'InstVari_DynaSynth(20)%name',
		'InstVari_DynaSynth(21)%name',
		'InstVari_DynaSynth(22)%name',
		'InstVari_DynaSynth(23)%name',
		'InstVari_DynaSynth(24)%name',
		'InstVari_DynaSynth(25)%name',
		'InstVari_DynaSynth(26)%name',
		'InstVari_DynaSynth(27)%name',
		'InstVari_DynaSynth(28)%name',
		'InstVari_DynaSynth(29)%name',
		'InstVari_DynaSynth(30)%name',
		'InstVari_DynaSynth(31)%name',
		'InstVari_DynaSynth(32)%name',
		'InstVari_DynaSynth(33)%name',
		'InstVari_DynaSynth(34)%name',
		'InstVari_DynaSynth(35)%name',
		'InstVari_DynaSynth(36)%name',
		'InstVari_DynaSynth(37)%name',
		'InstVari_DynaSynth(38)%name',
		'InstVari_DynaSynth(39)%name',
		'InstVari_DynaSynth(40)%name',
		'InstVari_DynaSynth(41)%name',
		'InstVari_DynaSynth(42)%name',
		'InstVari_DynaSynth(43)%name',
		'InstVari_DynaSynth(44)%name',
		'InstVari_DynaSynth(45)%name',
		'InstVari_DynaSynth(46)%name',
		'InstVari_DynaSynth(47)%name',
		'InstVari_DynaSynth(48)%name',
		'InstVari_DynaSynth(49)%name',
		'InstVari_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_OscSynthName() {
	this.blockSet = [
		'InstVari_OscSynth(1)%name',
		'InstVari_OscSynth(2)%name',
		'InstVari_OscSynth(3)%name',
		'InstVari_OscSynth(4)%name',
		'InstVari_OscSynth(5)%name',
		'InstVari_OscSynth(6)%name',
		'InstVari_OscSynth(7)%name',
		'InstVari_OscSynth(8)%name',
		'InstVari_OscSynth(9)%name',
		'InstVari_OscSynth(10)%name',
		'InstVari_OscSynth(11)%name',
		'InstVari_OscSynth(12)%name',
		'InstVari_OscSynth(13)%name',
		'InstVari_OscSynth(14)%name',
		'InstVari_OscSynth(15)%name',
		'InstVari_OscSynth(16)%name',
		'InstVari_OscSynth(17)%name',
		'InstVari_OscSynth(18)%name',
		'InstVari_OscSynth(19)%name',
		'InstVari_OscSynth(20)%name',
		'InstVari_OscSynth(21)%name',
		'InstVari_OscSynth(22)%name',
		'InstVari_OscSynth(23)%name',
		'InstVari_OscSynth(24)%name',
		'InstVari_OscSynth(25)%name',
		'InstVari_OscSynth(26)%name',
		'InstVari_OscSynth(27)%name',
		'InstVari_OscSynth(28)%name',
		'InstVari_OscSynth(29)%name',
		'InstVari_OscSynth(30)%name',
		'InstVari_OscSynth(31)%name',
		'InstVari_OscSynth(32)%name',
		'InstVari_OscSynth(33)%name',
		'InstVari_OscSynth(34)%name',
		'InstVari_OscSynth(35)%name',
		'InstVari_OscSynth(36)%name',
		'InstVari_OscSynth(37)%name',
		'InstVari_OscSynth(38)%name',
		'InstVari_OscSynth(39)%name',
		'InstVari_OscSynth(40)%name',
		'InstVari_OscSynth(41)%name',
		'InstVari_OscSynth(42)%name',
		'InstVari_OscSynth(43)%name',
		'InstVari_OscSynth(44)%name',
		'InstVari_OscSynth(45)%name',
		'InstVari_OscSynth(46)%name',
		'InstVari_OscSynth(47)%name',
		'InstVari_OscSynth(48)%name',
		'InstVari_OscSynth(49)%name',
		'InstVari_OscSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_Gr300Name() {
	this.blockSet = [
		'InstVari_Gr300(1)%name',
		'InstVari_Gr300(2)%name',
		'InstVari_Gr300(3)%name',
		'InstVari_Gr300(4)%name',
		'InstVari_Gr300(5)%name',
		'InstVari_Gr300(6)%name',
		'InstVari_Gr300(7)%name',
		'InstVari_Gr300(8)%name',
		'InstVari_Gr300(9)%name',
		'InstVari_Gr300(10)%name',
		'InstVari_Gr300(11)%name',
		'InstVari_Gr300(12)%name',
		'InstVari_Gr300(13)%name',
		'InstVari_Gr300(14)%name',
		'InstVari_Gr300(15)%name',
		'InstVari_Gr300(16)%name',
		'InstVari_Gr300(17)%name',
		'InstVari_Gr300(18)%name',
		'InstVari_Gr300(19)%name',
		'InstVari_Gr300(20)%name',
		'InstVari_Gr300(21)%name',
		'InstVari_Gr300(22)%name',
		'InstVari_Gr300(23)%name',
		'InstVari_Gr300(24)%name',
		'InstVari_Gr300(25)%name',
		'InstVari_Gr300(26)%name',
		'InstVari_Gr300(27)%name',
		'InstVari_Gr300(28)%name',
		'InstVari_Gr300(29)%name',
		'InstVari_Gr300(30)%name',
		'InstVari_Gr300(31)%name',
		'InstVari_Gr300(32)%name',
		'InstVari_Gr300(33)%name',
		'InstVari_Gr300(34)%name',
		'InstVari_Gr300(35)%name',
		'InstVari_Gr300(36)%name',
		'InstVari_Gr300(37)%name',
		'InstVari_Gr300(38)%name',
		'InstVari_Gr300(39)%name',
		'InstVari_Gr300(40)%name',
		'InstVari_Gr300(41)%name',
		'InstVari_Gr300(42)%name',
		'InstVari_Gr300(43)%name',
		'InstVari_Gr300(44)%name',
		'InstVari_Gr300(45)%name',
		'InstVari_Gr300(46)%name',
		'InstVari_Gr300(47)%name',
		'InstVari_Gr300(48)%name',
		'InstVari_Gr300(49)%name',
		'InstVari_Gr300(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_EGtrName() {
	this.blockSet = [
		'InstVari_EGtr(1)%name',
		'InstVari_EGtr(2)%name',
		'InstVari_EGtr(3)%name',
		'InstVari_EGtr(4)%name',
		'InstVari_EGtr(5)%name',
		'InstVari_EGtr(6)%name',
		'InstVari_EGtr(7)%name',
		'InstVari_EGtr(8)%name',
		'InstVari_EGtr(9)%name',
		'InstVari_EGtr(10)%name',
		'InstVari_EGtr(11)%name',
		'InstVari_EGtr(12)%name',
		'InstVari_EGtr(13)%name',
		'InstVari_EGtr(14)%name',
		'InstVari_EGtr(15)%name',
		'InstVari_EGtr(16)%name',
		'InstVari_EGtr(17)%name',
		'InstVari_EGtr(18)%name',
		'InstVari_EGtr(19)%name',
		'InstVari_EGtr(20)%name',
		'InstVari_EGtr(21)%name',
		'InstVari_EGtr(22)%name',
		'InstVari_EGtr(23)%name',
		'InstVari_EGtr(24)%name',
		'InstVari_EGtr(25)%name',
		'InstVari_EGtr(26)%name',
		'InstVari_EGtr(27)%name',
		'InstVari_EGtr(28)%name',
		'InstVari_EGtr(29)%name',
		'InstVari_EGtr(30)%name',
		'InstVari_EGtr(31)%name',
		'InstVari_EGtr(32)%name',
		'InstVari_EGtr(33)%name',
		'InstVari_EGtr(34)%name',
		'InstVari_EGtr(35)%name',
		'InstVari_EGtr(36)%name',
		'InstVari_EGtr(37)%name',
		'InstVari_EGtr(38)%name',
		'InstVari_EGtr(39)%name',
		'InstVari_EGtr(40)%name',
		'InstVari_EGtr(41)%name',
		'InstVari_EGtr(42)%name',
		'InstVari_EGtr(43)%name',
		'InstVari_EGtr(44)%name',
		'InstVari_EGtr(45)%name',
		'InstVari_EGtr(46)%name',
		'InstVari_EGtr(47)%name',
		'InstVari_EGtr(48)%name',
		'InstVari_EGtr(49)%name',
		'InstVari_EGtr(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_AcousticName() {
	this.blockSet = [
		'InstVari_Acoustic(1)%name',
		'InstVari_Acoustic(2)%name',
		'InstVari_Acoustic(3)%name',
		'InstVari_Acoustic(4)%name',
		'InstVari_Acoustic(5)%name',
		'InstVari_Acoustic(6)%name',
		'InstVari_Acoustic(7)%name',
		'InstVari_Acoustic(8)%name',
		'InstVari_Acoustic(9)%name',
		'InstVari_Acoustic(10)%name',
		'InstVari_Acoustic(11)%name',
		'InstVari_Acoustic(12)%name',
		'InstVari_Acoustic(13)%name',
		'InstVari_Acoustic(14)%name',
		'InstVari_Acoustic(15)%name',
		'InstVari_Acoustic(16)%name',
		'InstVari_Acoustic(17)%name',
		'InstVari_Acoustic(18)%name',
		'InstVari_Acoustic(19)%name',
		'InstVari_Acoustic(20)%name',
		'InstVari_Acoustic(21)%name',
		'InstVari_Acoustic(22)%name',
		'InstVari_Acoustic(23)%name',
		'InstVari_Acoustic(24)%name',
		'InstVari_Acoustic(25)%name',
		'InstVari_Acoustic(26)%name',
		'InstVari_Acoustic(27)%name',
		'InstVari_Acoustic(28)%name',
		'InstVari_Acoustic(29)%name',
		'InstVari_Acoustic(30)%name',
		'InstVari_Acoustic(31)%name',
		'InstVari_Acoustic(32)%name',
		'InstVari_Acoustic(33)%name',
		'InstVari_Acoustic(34)%name',
		'InstVari_Acoustic(35)%name',
		'InstVari_Acoustic(36)%name',
		'InstVari_Acoustic(37)%name',
		'InstVari_Acoustic(38)%name',
		'InstVari_Acoustic(39)%name',
		'InstVari_Acoustic(40)%name',
		'InstVari_Acoustic(41)%name',
		'InstVari_Acoustic(42)%name',
		'InstVari_Acoustic(43)%name',
		'InstVari_Acoustic(44)%name',
		'InstVari_Acoustic(45)%name',
		'InstVari_Acoustic(46)%name',
		'InstVari_Acoustic(47)%name',
		'InstVari_Acoustic(48)%name',
		'InstVari_Acoustic(49)%name',
		'InstVari_Acoustic(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_VioGtrName() {
	this.blockSet = [
		'InstVari_VioGtr(1)%name',
		'InstVari_VioGtr(2)%name',
		'InstVari_VioGtr(3)%name',
		'InstVari_VioGtr(4)%name',
		'InstVari_VioGtr(5)%name',
		'InstVari_VioGtr(6)%name',
		'InstVari_VioGtr(7)%name',
		'InstVari_VioGtr(8)%name',
		'InstVari_VioGtr(9)%name',
		'InstVari_VioGtr(10)%name',
		'InstVari_VioGtr(11)%name',
		'InstVari_VioGtr(12)%name',
		'InstVari_VioGtr(13)%name',
		'InstVari_VioGtr(14)%name',
		'InstVari_VioGtr(15)%name',
		'InstVari_VioGtr(16)%name',
		'InstVari_VioGtr(17)%name',
		'InstVari_VioGtr(18)%name',
		'InstVari_VioGtr(19)%name',
		'InstVari_VioGtr(20)%name',
		'InstVari_VioGtr(21)%name',
		'InstVari_VioGtr(22)%name',
		'InstVari_VioGtr(23)%name',
		'InstVari_VioGtr(24)%name',
		'InstVari_VioGtr(25)%name',
		'InstVari_VioGtr(26)%name',
		'InstVari_VioGtr(27)%name',
		'InstVari_VioGtr(28)%name',
		'InstVari_VioGtr(29)%name',
		'InstVari_VioGtr(30)%name',
		'InstVari_VioGtr(31)%name',
		'InstVari_VioGtr(32)%name',
		'InstVari_VioGtr(33)%name',
		'InstVari_VioGtr(34)%name',
		'InstVari_VioGtr(35)%name',
		'InstVari_VioGtr(36)%name',
		'InstVari_VioGtr(37)%name',
		'InstVari_VioGtr(38)%name',
		'InstVari_VioGtr(39)%name',
		'InstVari_VioGtr(40)%name',
		'InstVari_VioGtr(41)%name',
		'InstVari_VioGtr(42)%name',
		'InstVari_VioGtr(43)%name',
		'InstVari_VioGtr(44)%name',
		'InstVari_VioGtr(45)%name',
		'InstVari_VioGtr(46)%name',
		'InstVari_VioGtr(47)%name',
		'InstVari_VioGtr(48)%name',
		'InstVari_VioGtr(49)%name',
		'InstVari_VioGtr(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVari_PolyFxName() {
	this.blockSet = [
		'InstVari_PolyFx(1)%name',
		'InstVari_PolyFx(2)%name',
		'InstVari_PolyFx(3)%name',
		'InstVari_PolyFx(4)%name',
		'InstVari_PolyFx(5)%name',
		'InstVari_PolyFx(6)%name',
		'InstVari_PolyFx(7)%name',
		'InstVari_PolyFx(8)%name',
		'InstVari_PolyFx(9)%name',
		'InstVari_PolyFx(10)%name',
		'InstVari_PolyFx(11)%name',
		'InstVari_PolyFx(12)%name',
		'InstVari_PolyFx(13)%name',
		'InstVari_PolyFx(14)%name',
		'InstVari_PolyFx(15)%name',
		'InstVari_PolyFx(16)%name',
		'InstVari_PolyFx(17)%name',
		'InstVari_PolyFx(18)%name',
		'InstVari_PolyFx(19)%name',
		'InstVari_PolyFx(20)%name',
		'InstVari_PolyFx(21)%name',
		'InstVari_PolyFx(22)%name',
		'InstVari_PolyFx(23)%name',
		'InstVari_PolyFx(24)%name',
		'InstVari_PolyFx(25)%name',
		'InstVari_PolyFx(26)%name',
		'InstVari_PolyFx(27)%name',
		'InstVari_PolyFx(28)%name',
		'InstVari_PolyFx(29)%name',
		'InstVari_PolyFx(30)%name',
		'InstVari_PolyFx(31)%name',
		'InstVari_PolyFx(32)%name',
		'InstVari_PolyFx(33)%name',
		'InstVari_PolyFx(34)%name',
		'InstVari_PolyFx(35)%name',
		'InstVari_PolyFx(36)%name',
		'InstVari_PolyFx(37)%name',
		'InstVari_PolyFx(38)%name',
		'InstVari_PolyFx(39)%name',
		'InstVari_PolyFx(40)%name',
		'InstVari_PolyFx(41)%name',
		'InstVari_PolyFx(42)%name',
		'InstVari_PolyFx(43)%name',
		'InstVari_PolyFx(44)%name',
		'InstVari_PolyFx(45)%name',
		'InstVari_PolyFx(46)%name',
		'InstVari_PolyFx(47)%name',
		'InstVari_PolyFx(48)%name',
		'InstVari_PolyFx(49)%name',
		'InstVari_PolyFx(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstLfoVari_DynaSynthName() {
	this.blockSet = [
		'InstLfoVari_DynaSynth(1)%name',
		'InstLfoVari_DynaSynth(2)%name',
		'InstLfoVari_DynaSynth(3)%name',
		'InstLfoVari_DynaSynth(4)%name',
		'InstLfoVari_DynaSynth(5)%name',
		'InstLfoVari_DynaSynth(6)%name',
		'InstLfoVari_DynaSynth(7)%name',
		'InstLfoVari_DynaSynth(8)%name',
		'InstLfoVari_DynaSynth(9)%name',
		'InstLfoVari_DynaSynth(10)%name',
		'InstLfoVari_DynaSynth(11)%name',
		'InstLfoVari_DynaSynth(12)%name',
		'InstLfoVari_DynaSynth(13)%name',
		'InstLfoVari_DynaSynth(14)%name',
		'InstLfoVari_DynaSynth(15)%name',
		'InstLfoVari_DynaSynth(16)%name',
		'InstLfoVari_DynaSynth(17)%name',
		'InstLfoVari_DynaSynth(18)%name',
		'InstLfoVari_DynaSynth(19)%name',
		'InstLfoVari_DynaSynth(20)%name',
		'InstLfoVari_DynaSynth(21)%name',
		'InstLfoVari_DynaSynth(22)%name',
		'InstLfoVari_DynaSynth(23)%name',
		'InstLfoVari_DynaSynth(24)%name',
		'InstLfoVari_DynaSynth(25)%name',
		'InstLfoVari_DynaSynth(26)%name',
		'InstLfoVari_DynaSynth(27)%name',
		'InstLfoVari_DynaSynth(28)%name',
		'InstLfoVari_DynaSynth(29)%name',
		'InstLfoVari_DynaSynth(30)%name',
		'InstLfoVari_DynaSynth(31)%name',
		'InstLfoVari_DynaSynth(32)%name',
		'InstLfoVari_DynaSynth(33)%name',
		'InstLfoVari_DynaSynth(34)%name',
		'InstLfoVari_DynaSynth(35)%name',
		'InstLfoVari_DynaSynth(36)%name',
		'InstLfoVari_DynaSynth(37)%name',
		'InstLfoVari_DynaSynth(38)%name',
		'InstLfoVari_DynaSynth(39)%name',
		'InstLfoVari_DynaSynth(40)%name',
		'InstLfoVari_DynaSynth(41)%name',
		'InstLfoVari_DynaSynth(42)%name',
		'InstLfoVari_DynaSynth(43)%name',
		'InstLfoVari_DynaSynth(44)%name',
		'InstLfoVari_DynaSynth(45)%name',
		'InstLfoVari_DynaSynth(46)%name',
		'InstLfoVari_DynaSynth(47)%name',
		'InstLfoVari_DynaSynth(48)%name',
		'InstLfoVari_DynaSynth(49)%name',
		'InstLfoVari_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstLfoVari_OscSynthName() {
	this.blockSet = [
		'InstLfoVari_OscSynth(1)%name',
		'InstLfoVari_OscSynth(2)%name',
		'InstLfoVari_OscSynth(3)%name',
		'InstLfoVari_OscSynth(4)%name',
		'InstLfoVari_OscSynth(5)%name',
		'InstLfoVari_OscSynth(6)%name',
		'InstLfoVari_OscSynth(7)%name',
		'InstLfoVari_OscSynth(8)%name',
		'InstLfoVari_OscSynth(9)%name',
		'InstLfoVari_OscSynth(10)%name',
		'InstLfoVari_OscSynth(11)%name',
		'InstLfoVari_OscSynth(12)%name',
		'InstLfoVari_OscSynth(13)%name',
		'InstLfoVari_OscSynth(14)%name',
		'InstLfoVari_OscSynth(15)%name',
		'InstLfoVari_OscSynth(16)%name',
		'InstLfoVari_OscSynth(17)%name',
		'InstLfoVari_OscSynth(18)%name',
		'InstLfoVari_OscSynth(19)%name',
		'InstLfoVari_OscSynth(20)%name',
		'InstLfoVari_OscSynth(21)%name',
		'InstLfoVari_OscSynth(22)%name',
		'InstLfoVari_OscSynth(23)%name',
		'InstLfoVari_OscSynth(24)%name',
		'InstLfoVari_OscSynth(25)%name',
		'InstLfoVari_OscSynth(26)%name',
		'InstLfoVari_OscSynth(27)%name',
		'InstLfoVari_OscSynth(28)%name',
		'InstLfoVari_OscSynth(29)%name',
		'InstLfoVari_OscSynth(30)%name',
		'InstLfoVari_OscSynth(31)%name',
		'InstLfoVari_OscSynth(32)%name',
		'InstLfoVari_OscSynth(33)%name',
		'InstLfoVari_OscSynth(34)%name',
		'InstLfoVari_OscSynth(35)%name',
		'InstLfoVari_OscSynth(36)%name',
		'InstLfoVari_OscSynth(37)%name',
		'InstLfoVari_OscSynth(38)%name',
		'InstLfoVari_OscSynth(39)%name',
		'InstLfoVari_OscSynth(40)%name',
		'InstLfoVari_OscSynth(41)%name',
		'InstLfoVari_OscSynth(42)%name',
		'InstLfoVari_OscSynth(43)%name',
		'InstLfoVari_OscSynth(44)%name',
		'InstLfoVari_OscSynth(45)%name',
		'InstLfoVari_OscSynth(46)%name',
		'InstLfoVari_OscSynth(47)%name',
		'InstLfoVari_OscSynth(48)%name',
		'InstLfoVari_OscSynth(49)%name',
		'InstLfoVari_OscSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstSeqVari_DynaSynthName() {
	this.blockSet = [
		'InstSeqVari_DynaSynth(1)%name',
		'InstSeqVari_DynaSynth(2)%name',
		'InstSeqVari_DynaSynth(3)%name',
		'InstSeqVari_DynaSynth(4)%name',
		'InstSeqVari_DynaSynth(5)%name',
		'InstSeqVari_DynaSynth(6)%name',
		'InstSeqVari_DynaSynth(7)%name',
		'InstSeqVari_DynaSynth(8)%name',
		'InstSeqVari_DynaSynth(9)%name',
		'InstSeqVari_DynaSynth(10)%name',
		'InstSeqVari_DynaSynth(11)%name',
		'InstSeqVari_DynaSynth(12)%name',
		'InstSeqVari_DynaSynth(13)%name',
		'InstSeqVari_DynaSynth(14)%name',
		'InstSeqVari_DynaSynth(15)%name',
		'InstSeqVari_DynaSynth(16)%name',
		'InstSeqVari_DynaSynth(17)%name',
		'InstSeqVari_DynaSynth(18)%name',
		'InstSeqVari_DynaSynth(19)%name',
		'InstSeqVari_DynaSynth(20)%name',
		'InstSeqVari_DynaSynth(21)%name',
		'InstSeqVari_DynaSynth(22)%name',
		'InstSeqVari_DynaSynth(23)%name',
		'InstSeqVari_DynaSynth(24)%name',
		'InstSeqVari_DynaSynth(25)%name',
		'InstSeqVari_DynaSynth(26)%name',
		'InstSeqVari_DynaSynth(27)%name',
		'InstSeqVari_DynaSynth(28)%name',
		'InstSeqVari_DynaSynth(29)%name',
		'InstSeqVari_DynaSynth(30)%name',
		'InstSeqVari_DynaSynth(31)%name',
		'InstSeqVari_DynaSynth(32)%name',
		'InstSeqVari_DynaSynth(33)%name',
		'InstSeqVari_DynaSynth(34)%name',
		'InstSeqVari_DynaSynth(35)%name',
		'InstSeqVari_DynaSynth(36)%name',
		'InstSeqVari_DynaSynth(37)%name',
		'InstSeqVari_DynaSynth(38)%name',
		'InstSeqVari_DynaSynth(39)%name',
		'InstSeqVari_DynaSynth(40)%name',
		'InstSeqVari_DynaSynth(41)%name',
		'InstSeqVari_DynaSynth(42)%name',
		'InstSeqVari_DynaSynth(43)%name',
		'InstSeqVari_DynaSynth(44)%name',
		'InstSeqVari_DynaSynth(45)%name',
		'InstSeqVari_DynaSynth(46)%name',
		'InstSeqVari_DynaSynth(47)%name',
		'InstSeqVari_DynaSynth(48)%name',
		'InstSeqVari_DynaSynth(49)%name',
		'InstSeqVari_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function EfctVari_EfctName() {
	this.blockSet = [
		// EffectComp
		'EfctVari_Efct(1)%name(1)',
		'EfctVari_Efct(2)%name(1)',
		'EfctVari_Efct(3)%name(1)',
		'EfctVari_Efct(4)%name(1)',
		'EfctVari_Efct(5)%name(1)',
		'EfctVari_Efct(6)%name(1)',
		'EfctVari_Efct(7)%name(1)',
		'EfctVari_Efct(8)%name(1)',
		'EfctVari_Efct(9)%name(1)',
		'EfctVari_Efct(10)%name(1)',
		
		// EffectDist
		'EfctVari_Efct(1)%name(2)',
		'EfctVari_Efct(2)%name(2)',
		'EfctVari_Efct(3)%name(2)',
		'EfctVari_Efct(4)%name(2)',
		'EfctVari_Efct(5)%name(2)',
		'EfctVari_Efct(6)%name(2)',
		'EfctVari_Efct(7)%name(2)',
		'EfctVari_Efct(8)%name(2)',
		'EfctVari_Efct(9)%name(2)',
		'EfctVari_Efct(10)%name(2)',
		
		// EffectAmp
		'EfctVari_Efct(1)%name(3)',
		'EfctVari_Efct(2)%name(3)',
		'EfctVari_Efct(3)%name(3)',
		'EfctVari_Efct(4)%name(3)',
		'EfctVari_Efct(5)%name(3)',
		'EfctVari_Efct(6)%name(3)',
		'EfctVari_Efct(7)%name(3)',
		'EfctVari_Efct(8)%name(3)',
		'EfctVari_Efct(9)%name(3)',
		'EfctVari_Efct(10)%name(3)',
		
		// EffectNs
		'EfctVari_Efct(1)%name(4)',
		'EfctVari_Efct(2)%name(4)',
		'EfctVari_Efct(3)%name(4)',
		'EfctVari_Efct(4)%name(4)',
		'EfctVari_Efct(5)%name(4)',
		'EfctVari_Efct(6)%name(4)',
		'EfctVari_Efct(7)%name(4)',
		'EfctVari_Efct(8)%name(4)',
		'EfctVari_Efct(9)%name(4)',
		'EfctVari_Efct(10)%name(4)',
		
		// EffectEq
		'EfctVari_Efct(1)%name(5)',
		'EfctVari_Efct(2)%name(5)',
		'EfctVari_Efct(3)%name(5)',
		'EfctVari_Efct(4)%name(5)',
		'EfctVari_Efct(5)%name(5)',
		'EfctVari_Efct(6)%name(5)',
		'EfctVari_Efct(7)%name(5)',
		'EfctVari_Efct(8)%name(5)',
		'EfctVari_Efct(9)%name(5)',
		'EfctVari_Efct(10)%name(5)',
		
		// EffectDelay
		'EfctVari_Efct(1)%name(6)',
		'EfctVari_Efct(2)%name(6)',
		'EfctVari_Efct(3)%name(6)',
		'EfctVari_Efct(4)%name(6)',
		'EfctVari_Efct(5)%name(6)',
		'EfctVari_Efct(6)%name(6)',
		'EfctVari_Efct(7)%name(6)',
		'EfctVari_Efct(8)%name(6)',
		'EfctVari_Efct(9)%name(6)',
		'EfctVari_Efct(10)%name(6)',
	
		// EffectMstDelay
		'EfctVari_Efct(1)%name(7)',
		'EfctVari_Efct(2)%name(7)',
		'EfctVari_Efct(3)%name(7)',
		'EfctVari_Efct(4)%name(7)',
		'EfctVari_Efct(5)%name(7)',
		'EfctVari_Efct(6)%name(7)',
		'EfctVari_Efct(7)%name(7)',
		'EfctVari_Efct(8)%name(7)',
		'EfctVari_Efct(9)%name(7)',
		'EfctVari_Efct(10)%name(7)',
		
		// EffectChorus
		'EfctVari_Efct(1)%name(8)',
		'EfctVari_Efct(2)%name(8)',
		'EfctVari_Efct(3)%name(8)',
		'EfctVari_Efct(4)%name(8)',
		'EfctVari_Efct(5)%name(8)',
		'EfctVari_Efct(6)%name(8)',
		'EfctVari_Efct(7)%name(8)',
		'EfctVari_Efct(8)%name(8)',
		'EfctVari_Efct(9)%name(8)',
		'EfctVari_Efct(10)%name(8)',
		
		// EffectFxAcReso
		'EfctVari_Efct(1)%name(9)',
		'EfctVari_Efct(2)%name(9)',
		'EfctVari_Efct(3)%name(9)',
		'EfctVari_Efct(4)%name(9)',
		'EfctVari_Efct(5)%name(9)',
		'EfctVari_Efct(6)%name(9)',
		'EfctVari_Efct(7)%name(9)',
		'EfctVari_Efct(8)%name(9)',
		'EfctVari_Efct(9)%name(9)',
		'EfctVari_Efct(10)%name(9)',
		
		// EffectFxAWah
		'EfctVari_Efct(1)%name(10)',
		'EfctVari_Efct(2)%name(10)',
		'EfctVari_Efct(3)%name(10)',
		'EfctVari_Efct(4)%name(10)',
		'EfctVari_Efct(5)%name(10)',
		'EfctVari_Efct(6)%name(10)',
		'EfctVari_Efct(7)%name(10)',
		'EfctVari_Efct(8)%name(10)',
		'EfctVari_Efct(9)%name(10)',
		'EfctVari_Efct(10)%name(10)',
		
		// EffectFxCVibe
		'EfctVari_Efct(1)%name(11)',
		'EfctVari_Efct(2)%name(11)',
		'EfctVari_Efct(3)%name(11)',
		'EfctVari_Efct(4)%name(11)',
		'EfctVari_Efct(5)%name(11)',
		'EfctVari_Efct(6)%name(11)',
		'EfctVari_Efct(7)%name(11)',
		'EfctVari_Efct(8)%name(11)',
		'EfctVari_Efct(9)%name(11)',
		'EfctVari_Efct(10)%name(11)',
		
		// EffectFxDefretter
		'EfctVari_Efct(1)%name(12)',
		'EfctVari_Efct(2)%name(12)',
		'EfctVari_Efct(3)%name(12)',
		'EfctVari_Efct(4)%name(12)',
		'EfctVari_Efct(5)%name(12)',
		'EfctVari_Efct(6)%name(12)',
		'EfctVari_Efct(7)%name(12)',
		'EfctVari_Efct(8)%name(12)',
		'EfctVari_Efct(9)%name(12)',
		'EfctVari_Efct(10)%name(12)',
		
		// EffectFxDefretterBass
		'EfctVari_Efct(1)%name(13)',
		'EfctVari_Efct(2)%name(13)',
		'EfctVari_Efct(3)%name(13)',
		'EfctVari_Efct(4)%name(13)',
		'EfctVari_Efct(5)%name(13)',
		'EfctVari_Efct(6)%name(13)',
		'EfctVari_Efct(7)%name(13)',
		'EfctVari_Efct(8)%name(13)',
		'EfctVari_Efct(9)%name(13)',
		'EfctVari_Efct(10)%name(13)',
		
		// EffectFxFlanger
		'EfctVari_Efct(1)%name(14)',
		'EfctVari_Efct(2)%name(14)',
		'EfctVari_Efct(3)%name(14)',
		'EfctVari_Efct(4)%name(14)',
		'EfctVari_Efct(5)%name(14)',
		'EfctVari_Efct(6)%name(14)',
		'EfctVari_Efct(7)%name(14)',
		'EfctVari_Efct(8)%name(14)',
		'EfctVari_Efct(9)%name(14)',
		'EfctVari_Efct(10)%name(14)',
		
		// EffectFxGEq
		'EfctVari_Efct(1)%name(15)',
		'EfctVari_Efct(2)%name(15)',
		'EfctVari_Efct(3)%name(15)',
		'EfctVari_Efct(4)%name(15)',
		'EfctVari_Efct(5)%name(15)',
		'EfctVari_Efct(6)%name(15)',
		'EfctVari_Efct(7)%name(15)',
		'EfctVari_Efct(8)%name(15)',
		'EfctVari_Efct(9)%name(15)',
		'EfctVari_Efct(10)%name(15)',
		
		// EffectFxHarmonist
		'EfctVari_Efct(1)%name(16)',
		'EfctVari_Efct(2)%name(16)',
		'EfctVari_Efct(3)%name(16)',
		'EfctVari_Efct(4)%name(16)',
		'EfctVari_Efct(5)%name(16)',
		'EfctVari_Efct(6)%name(16)',
		'EfctVari_Efct(7)%name(16)',
		'EfctVari_Efct(8)%name(16)',
		'EfctVari_Efct(9)%name(16)',
		'EfctVari_Efct(10)%name(16)',
		
		// EffectFxHumanizer
		'EfctVari_Efct(1)%name(17)',
		'EfctVari_Efct(2)%name(17)',
		'EfctVari_Efct(3)%name(17)',
		'EfctVari_Efct(4)%name(17)',
		'EfctVari_Efct(5)%name(17)',
		'EfctVari_Efct(6)%name(17)',
		'EfctVari_Efct(7)%name(17)',
		'EfctVari_Efct(8)%name(17)',
		'EfctVari_Efct(9)%name(17)',
		'EfctVari_Efct(10)%name(17)',
		
		// EffectFxIsolator
		'EfctVari_Efct(1)%name(18)',
		'EfctVari_Efct(2)%name(18)',
		'EfctVari_Efct(3)%name(18)',
		'EfctVari_Efct(4)%name(18)',
		'EfctVari_Efct(5)%name(18)',
		'EfctVari_Efct(6)%name(18)',
		'EfctVari_Efct(7)%name(18)',
		'EfctVari_Efct(8)%name(18)',
		'EfctVari_Efct(9)%name(18)',
		'EfctVari_Efct(10)%name(18)',
		
		// EffectFxLimiter
		'EfctVari_Efct(1)%name(19)',
		'EfctVari_Efct(2)%name(19)',
		'EfctVari_Efct(3)%name(19)',
		'EfctVari_Efct(4)%name(19)',
		'EfctVari_Efct(5)%name(19)',
		'EfctVari_Efct(6)%name(19)',
		'EfctVari_Efct(7)%name(19)',
		'EfctVari_Efct(8)%name(19)',
		'EfctVari_Efct(9)%name(19)',
		'EfctVari_Efct(10)%name(19)',
		
		// EffectFxLofi
		'EfctVari_Efct(1)%name(20)',
		'EfctVari_Efct(2)%name(20)',
		'EfctVari_Efct(3)%name(20)',
		'EfctVari_Efct(4)%name(20)',
		'EfctVari_Efct(5)%name(20)',
		'EfctVari_Efct(6)%name(20)',
		'EfctVari_Efct(7)%name(20)',
		'EfctVari_Efct(8)%name(20)',
		'EfctVari_Efct(9)%name(20)',
		'EfctVari_Efct(10)%name(20)',
		
		// EffectFxOctave
		'EfctVari_Efct(1)%name(21)',
		'EfctVari_Efct(2)%name(21)',
		'EfctVari_Efct(3)%name(21)',
		'EfctVari_Efct(4)%name(21)',
		'EfctVari_Efct(5)%name(21)',
		'EfctVari_Efct(6)%name(21)',
		'EfctVari_Efct(7)%name(21)',
		'EfctVari_Efct(8)%name(21)',
		'EfctVari_Efct(9)%name(21)',
		'EfctVari_Efct(10)%name(21)',
		
		// EffectFxPan
		'EfctVari_Efct(1)%name(22)',
		'EfctVari_Efct(2)%name(22)',
		'EfctVari_Efct(3)%name(22)',
		'EfctVari_Efct(4)%name(22)',
		'EfctVari_Efct(5)%name(22)',
		'EfctVari_Efct(6)%name(22)',
		'EfctVari_Efct(7)%name(22)',
		'EfctVari_Efct(8)%name(22)',
		'EfctVari_Efct(9)%name(22)',
		'EfctVari_Efct(10)%name(22)',
		
		// EffectFxPedalBend
		'EfctVari_Efct(1)%name(23)',
		'EfctVari_Efct(2)%name(23)',
		'EfctVari_Efct(3)%name(23)',
		'EfctVari_Efct(4)%name(23)',
		'EfctVari_Efct(5)%name(23)',
		'EfctVari_Efct(6)%name(23)',
		'EfctVari_Efct(7)%name(23)',
		'EfctVari_Efct(8)%name(23)',
		'EfctVari_Efct(9)%name(23)',
		'EfctVari_Efct(10)%name(23)',
		
		// EffectFxPhaser
		'EfctVari_Efct(1)%name(24)',
		'EfctVari_Efct(2)%name(24)',
		'EfctVari_Efct(3)%name(24)',
		'EfctVari_Efct(4)%name(24)',
		'EfctVari_Efct(5)%name(24)',
		'EfctVari_Efct(6)%name(24)',
		'EfctVari_Efct(7)%name(24)',
		'EfctVari_Efct(8)%name(24)',
		'EfctVari_Efct(9)%name(24)',
		'EfctVari_Efct(10)%name(24)',
		
		// EffectFxPitchShift
		'EfctVari_Efct(1)%name(25)',
		'EfctVari_Efct(2)%name(25)',
		'EfctVari_Efct(3)%name(25)',
		'EfctVari_Efct(4)%name(25)',
		'EfctVari_Efct(5)%name(25)',
		'EfctVari_Efct(6)%name(25)',
		'EfctVari_Efct(7)%name(25)',
		'EfctVari_Efct(8)%name(25)',
		'EfctVari_Efct(9)%name(25)',
		'EfctVari_Efct(10)%name(25)',
		
		// EffectFxRingMod
		'EfctVari_Efct(1)%name(26)',
		'EfctVari_Efct(2)%name(26)',
		'EfctVari_Efct(3)%name(26)',
		'EfctVari_Efct(4)%name(26)',
		'EfctVari_Efct(5)%name(26)',
		'EfctVari_Efct(6)%name(26)',
		'EfctVari_Efct(7)%name(26)',
		'EfctVari_Efct(8)%name(26)',
		'EfctVari_Efct(9)%name(26)',
		'EfctVari_Efct(10)%name(26)',
		
		// EffectFxRotary
		'EfctVari_Efct(1)%name(27)',
		'EfctVari_Efct(2)%name(27)',
		'EfctVari_Efct(3)%name(27)',
		'EfctVari_Efct(4)%name(27)',
		'EfctVari_Efct(5)%name(27)',
		'EfctVari_Efct(6)%name(27)',
		'EfctVari_Efct(7)%name(27)',
		'EfctVari_Efct(8)%name(27)',
		'EfctVari_Efct(9)%name(27)',
		'EfctVari_Efct(10)%name(27)',
		
		// EffectFxSitarSim
		'EfctVari_Efct(1)%name(28)',
		'EfctVari_Efct(2)%name(28)',
		'EfctVari_Efct(3)%name(28)',
		'EfctVari_Efct(4)%name(28)',
		'EfctVari_Efct(5)%name(28)',
		'EfctVari_Efct(6)%name(28)',
		'EfctVari_Efct(7)%name(28)',
		'EfctVari_Efct(8)%name(28)',
		'EfctVari_Efct(9)%name(28)',
		'EfctVari_Efct(10)%name(28)',
		
		// EffectFxSlicer
		'EfctVari_Efct(1)%name(29)',
		'EfctVari_Efct(2)%name(29)',
		'EfctVari_Efct(3)%name(29)',
		'EfctVari_Efct(4)%name(29)',
		'EfctVari_Efct(5)%name(29)',
		'EfctVari_Efct(6)%name(29)',
		'EfctVari_Efct(7)%name(29)',
		'EfctVari_Efct(8)%name(29)',
		'EfctVari_Efct(9)%name(29)',
		'EfctVari_Efct(10)%name(29)',
		
		// EffectFxSlowGear
		'EfctVari_Efct(1)%name(30)',
		'EfctVari_Efct(2)%name(30)',
		'EfctVari_Efct(3)%name(30)',
		'EfctVari_Efct(4)%name(30)',
		'EfctVari_Efct(5)%name(30)',
		'EfctVari_Efct(6)%name(30)',
		'EfctVari_Efct(7)%name(30)',
		'EfctVari_Efct(8)%name(30)',
		'EfctVari_Efct(9)%name(30)',
		'EfctVari_Efct(10)%name(30)',
		
		// EffectFxSoundHold
		'EfctVari_Efct(1)%name(31)',
		'EfctVari_Efct(2)%name(31)',
		'EfctVari_Efct(3)%name(31)',
		'EfctVari_Efct(4)%name(31)',
		'EfctVari_Efct(5)%name(31)',
		'EfctVari_Efct(6)%name(31)',
		'EfctVari_Efct(7)%name(31)',
		'EfctVari_Efct(8)%name(31)',
		'EfctVari_Efct(9)%name(31)',
		'EfctVari_Efct(10)%name(31)',
		
		// EffectFxTWah
		'EfctVari_Efct(1)%name(32)',
		'EfctVari_Efct(2)%name(32)',
		'EfctVari_Efct(3)%name(32)',
		'EfctVari_Efct(4)%name(32)',
		'EfctVari_Efct(5)%name(32)',
		'EfctVari_Efct(6)%name(32)',
		'EfctVari_Efct(7)%name(32)',
		'EfctVari_Efct(8)%name(32)',
		'EfctVari_Efct(9)%name(32)',
		'EfctVari_Efct(10)%name(32)',
		
		// EffectFxTremolo
		'EfctVari_Efct(1)%name(33)',
		'EfctVari_Efct(2)%name(33)',
		'EfctVari_Efct(3)%name(33)',
		'EfctVari_Efct(4)%name(33)',
		'EfctVari_Efct(5)%name(33)',
		'EfctVari_Efct(6)%name(33)',
		'EfctVari_Efct(7)%name(33)',
		'EfctVari_Efct(8)%name(33)',
		'EfctVari_Efct(9)%name(33)',
		'EfctVari_Efct(10)%name(33)',
		
		// EffectFxVibrato
		'EfctVari_Efct(1)%name(34)',
		'EfctVari_Efct(2)%name(34)',
		'EfctVari_Efct(3)%name(34)',
		'EfctVari_Efct(4)%name(34)',
		'EfctVari_Efct(5)%name(34)',
		'EfctVari_Efct(6)%name(34)',
		'EfctVari_Efct(7)%name(34)',
		'EfctVari_Efct(8)%name(34)',
		'EfctVari_Efct(9)%name(34)',
		'EfctVari_Efct(10)%name(34)',
		
		// EffectFxWah
		'EfctVari_Efct(1)%name(35)',
		'EfctVari_Efct(2)%name(35)',
		'EfctVari_Efct(3)%name(35)',
		'EfctVari_Efct(4)%name(35)',
		'EfctVari_Efct(5)%name(35)',
		'EfctVari_Efct(6)%name(35)',
		'EfctVari_Efct(7)%name(35)',
		'EfctVari_Efct(8)%name(35)',
		'EfctVari_Efct(9)%name(35)',
		'EfctVari_Efct(10)%name(35)',
		
		// EffectReverb
		'EfctVari_Efct(1)%name(36)',
		'EfctVari_Efct(2)%name(36)',
		'EfctVari_Efct(3)%name(36)',
		'EfctVari_Efct(4)%name(36)',
		'EfctVari_Efct(5)%name(36)',
		'EfctVari_Efct(6)%name(36)',
		'EfctVari_Efct(7)%name(36)',
		'EfctVari_Efct(8)%name(36)',
		'EfctVari_Efct(9)%name(36)',
		'EfctVari_Efct(10)%name(36)',
		
		// EffectFv
		'EfctVari_Efct(1)%name(37)',
		'EfctVari_Efct(2)%name(37)',
		'EfctVari_Efct(3)%name(37)',
		'EfctVari_Efct(4)%name(37)',
		'EfctVari_Efct(5)%name(37)',
		'EfctVari_Efct(6)%name(37)',
		'EfctVari_Efct(7)%name(37)',
		'EfctVari_Efct(8)%name(37)',
		'EfctVari_Efct(9)%name(37)',
		'EfctVari_Efct(10)%name(37)',
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

// ----------------------------------------
// for BASS MODE
// ----------------------------------------

function EditorSettingBass1() { // see "var PatchBass = [" of address_map.js

	this.blockSet = [
		'Temp_patchBass%common',
		// 'Temp_patchBass%common(2)',
		'Temp_patchBass%led',
		'Temp_patchBass%assign(1)',
		'Temp_patchBass%assign(2)',
		'Temp_patchBass%assign(3)',
		'Temp_patchBass%assign(4)',
		'Temp_patchBass%assign(5)',
		'Temp_patchBass%assign(6)',
		'Temp_patchBass%assign(7)',
		'Temp_patchBass%assign(8)',
		'Temp_patchBass%assign(9)',
		'Temp_patchBass%assign(10)',
		'Temp_patchBass%assign(11)',
		'Temp_patchBass%assign(12)',
		'Temp_patchBass%assign(13)',
		'Temp_patchBass%assign(14)',
		'Temp_patchBass%assign(15)',
		'Temp_patchBass%assign(16)',
//		'Temp_patchBass%padding',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function EditorSettingBass2() {

	this.blockSet = [
		// see "var PatchBass = [" of address_map.js
		'Temp_patchBass%efct',
		'Temp_patchBass%gtr2midi',

		/// see "var InstBass = [" of address_map.js
		'Temp_patchBass%inst(1)%inst',
		'Temp_patchBass%inst(1)%instDynaSynth',
		'Temp_patchBass%inst(1)%instOscSynth',
		'Temp_patchBass%inst(1)%instAnalogGr',
		'Temp_patchBass%inst(1)%instEBass',
		'Temp_patchBass%inst(1)%instAcBass',
		'Temp_patchBass%inst(1)%instEGtr',
		// 'Temp_patchBass%inst(1)%instVioGtr',
		'Temp_patchBass%inst(1)%instPolyFx',
		'Temp_patchBass%inst(1)%instAltTune',

		'Temp_patchBass%inst(2)%inst',
		'Temp_patchBass%inst(2)%instDynaSynth',
		'Temp_patchBass%inst(2)%instOscSynth',
		'Temp_patchBass%inst(2)%instAnalogGr',
		'Temp_patchBass%inst(2)%instEBass',
		'Temp_patchBass%inst(2)%instAcBass',
		'Temp_patchBass%inst(2)%instEGtr',
		// 'Temp_patchBass%inst(2)%instVioGtr',
		'Temp_patchBass%inst(2)%instPolyFx',
		'Temp_patchBass%inst(2)%instAltTune',

		'Temp_patchBass%inst(3)%inst',
		'Temp_patchBass%inst(3)%instDynaSynth',
		'Temp_patchBass%inst(3)%instOscSynth',
		'Temp_patchBass%inst(3)%instAnalogGr',
		'Temp_patchBass%inst(3)%instEBass',
		'Temp_patchBass%inst(3)%instAcBass',
		'Temp_patchBass%inst(3)%instEGtr',
		// 'Temp_patchBass%inst(3)%instVioGtr',
		'Temp_patchBass%inst(3)%instPolyFx',
		'Temp_patchBass%inst(3)%instAltTune',

		'Temp_patchBass%comp',
		'Temp_patchBass%dist',
		'Temp_patchBass%amp',
		'Temp_patchBass%ns',
		'Temp_patchBass%eq(1)',
		'Temp_patchBass%eq(2)',
		'Temp_patchBass%delay(1)',
		'Temp_patchBass%delay(2)',
		'Temp_patchBass%mstDelay',
		'Temp_patchBass%chorus',

		// see "var Fx = [" of address_map.js
		'Temp_patchBass%fx(1)%fx',
		'Temp_patchBass%fx(1)%fxAcReso',
		'Temp_patchBass%fx(1)%fxAWah',
		'Temp_patchBass%fx(1)%fxChorus',
		'Temp_patchBass%fx(1)%fxCVibe',
		'Temp_patchBass%fx(1)%fxComp',
		'Temp_patchBass%fx(1)%fxDefretter',
		'Temp_patchBass%fx(1)%fxDefretterBass',
		'Temp_patchBass%fx(1)%fxDelay',
		'Temp_patchBass%fx(1)%fxFlanger',
		'Temp_patchBass%fx(1)%fxFlangerBass',
		'Temp_patchBass%fx(1)%fxFv',
		'Temp_patchBass%fx(1)%fxGEq',
		'Temp_patchBass%fx(1)%fxHarmonist',
		'Temp_patchBass%fx(1)%fxHumanizer',
		'Temp_patchBass%fx(1)%fxIsolator',
		'Temp_patchBass%fx(1)%fxLimiter',
		'Temp_patchBass%fx(1)%fxLofi',
		'Temp_patchBass%fx(1)%fxOctave',
		'Temp_patchBass%fx(1)%fxOctaveBass',
		'Temp_patchBass%fx(1)%fxPan',
		'Temp_patchBass%fx(1)%fxPEq',
		'Temp_patchBass%fx(1)%fxPedalBend',
		'Temp_patchBass%fx(1)%fxPhaser',
		'Temp_patchBass%fx(1)%fxPitchShift',
		'Temp_patchBass%fx(1)%fxReverb',
		'Temp_patchBass%fx(1)%fxRingMod',
		'Temp_patchBass%fx(1)%fxRotary',
		'Temp_patchBass%fx(1)%fxSitarSim',
		'Temp_patchBass%fx(1)%fxSlicer',
		'Temp_patchBass%fx(1)%fxSlowGear',
		'Temp_patchBass%fx(1)%fxSlowGearBass',
		'Temp_patchBass%fx(1)%fxSoundHold',
		'Temp_patchBass%fx(1)%fxTWah',
		'Temp_patchBass%fx(1)%fxTWahBass',
		'Temp_patchBass%fx(1)%fxTremolo',
		'Temp_patchBass%fx(1)%fxVibrato',
		'Temp_patchBass%fx(1)%fxWah',
		
		'Temp_patchBass%fx(2)%fx',
		'Temp_patchBass%fx(2)%fxAcReso',
		'Temp_patchBass%fx(2)%fxAWah',
		'Temp_patchBass%fx(2)%fxChorus',
		'Temp_patchBass%fx(2)%fxCVibe',
		'Temp_patchBass%fx(2)%fxComp',
		'Temp_patchBass%fx(2)%fxDefretter',
		'Temp_patchBass%fx(2)%fxDefretterBass',
		'Temp_patchBass%fx(2)%fxDelay',
		'Temp_patchBass%fx(2)%fxFlanger',
		'Temp_patchBass%fx(2)%fxFlangerBass',
		'Temp_patchBass%fx(2)%fxFv',
		'Temp_patchBass%fx(2)%fxGEq',
		'Temp_patchBass%fx(2)%fxHarmonist',
		'Temp_patchBass%fx(2)%fxHumanizer',
		'Temp_patchBass%fx(2)%fxIsolator',
		'Temp_patchBass%fx(2)%fxLimiter',
		'Temp_patchBass%fx(2)%fxLofi',
		'Temp_patchBass%fx(2)%fxOctave',
		'Temp_patchBass%fx(2)%fxOctaveBass',
		'Temp_patchBass%fx(2)%fxPan',
		'Temp_patchBass%fx(2)%fxPEq',
		'Temp_patchBass%fx(2)%fxPedalBend',
		'Temp_patchBass%fx(2)%fxPhaser',
		'Temp_patchBass%fx(2)%fxPitchShift',
		'Temp_patchBass%fx(2)%fxReverb',
		'Temp_patchBass%fx(2)%fxRingMod',
		'Temp_patchBass%fx(2)%fxRotary',
		'Temp_patchBass%fx(2)%fxSitarSim',
		'Temp_patchBass%fx(2)%fxSlicer',
		'Temp_patchBass%fx(2)%fxSlowGear',
		'Temp_patchBass%fx(2)%fxSlowGearBass',
		'Temp_patchBass%fx(2)%fxSoundHold',
		'Temp_patchBass%fx(2)%fxTWah',
		'Temp_patchBass%fx(2)%fxTWahBass',
		'Temp_patchBass%fx(2)%fxTremolo',
		'Temp_patchBass%fx(2)%fxVibrato',
		'Temp_patchBass%fx(2)%fxWah',
		
		'Temp_patchBass%fx(3)%fx',
		'Temp_patchBass%fx(3)%fxAcReso',
		'Temp_patchBass%fx(3)%fxAWah',
		'Temp_patchBass%fx(3)%fxChorus',
		'Temp_patchBass%fx(3)%fxCVibe',
		'Temp_patchBass%fx(3)%fxComp',
		'Temp_patchBass%fx(3)%fxDefretter',
		'Temp_patchBass%fx(3)%fxDefretterBass',
		'Temp_patchBass%fx(3)%fxDelay',
		'Temp_patchBass%fx(3)%fxFlanger',
		'Temp_patchBass%fx(3)%fxFlangerBass',
		'Temp_patchBass%fx(3)%fxFv',
		'Temp_patchBass%fx(3)%fxGEq',
		'Temp_patchBass%fx(3)%fxHarmonist',
		'Temp_patchBass%fx(3)%fxHumanizer',
		'Temp_patchBass%fx(3)%fxIsolator',
		'Temp_patchBass%fx(3)%fxLimiter',
		'Temp_patchBass%fx(3)%fxLofi',
		'Temp_patchBass%fx(3)%fxOctave',
		'Temp_patchBass%fx(3)%fxOctaveBass',
		'Temp_patchBass%fx(3)%fxPan',
		'Temp_patchBass%fx(3)%fxPEq',
		'Temp_patchBass%fx(3)%fxPedalBend',
		'Temp_patchBass%fx(3)%fxPhaser',
		'Temp_patchBass%fx(3)%fxPitchShift',
		'Temp_patchBass%fx(3)%fxReverb',
		'Temp_patchBass%fx(3)%fxRingMod',
		'Temp_patchBass%fx(3)%fxRotary',
		'Temp_patchBass%fx(3)%fxSitarSim',
		'Temp_patchBass%fx(3)%fxSlicer',
		'Temp_patchBass%fx(3)%fxSlowGear',
		'Temp_patchBass%fx(3)%fxSlowGearBass',
		'Temp_patchBass%fx(3)%fxSoundHold',
		'Temp_patchBass%fx(3)%fxTWah',
		'Temp_patchBass%fx(3)%fxTWahBass',
		'Temp_patchBass%fx(3)%fxTremolo',
		'Temp_patchBass%fx(3)%fxVibrato',
		'Temp_patchBass%fx(3)%fxWah',
		
		'Temp_patchBass%reverb',
	];
	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function SystemSettingBass() {

	this.blockSet = [ // see "var PatchBass = [" of address_map.js 
	'SystemEx_common',
	'SystemBass_common',
	'SystemBass_control',
	'SystemBass_led',
	'SystemBass_midi',
	'SystemBass_gkSetting(1)',
	'SystemBass_gkSetting(2)',
	'SystemBass_gkSetting(3)',
	'SystemBass_gkSetting(4)',
	'SystemBass_gkSetting(5)',
	'SystemBass_gkSetting(6)',
	'SystemBass_gkSetting(7)',
	'SystemBass_gkSetting(8)',
	'SystemBass_gkSetting(9)',
	'SystemBass_gkSetting(10)',
	'SystemBass_normalSetting(1)',
	'SystemBass_normalSetting(2)',
	'SystemBass_normalSetting(3)',
	'SystemBass_normalSetting(4)',
	'SystemBass_normalSetting(5)',
	'SystemBass_normalSetting(6)',
	'SystemBass_normalSetting(7)',
	'SystemBass_normalSetting(8)',
	'SystemBass_normalSetting(9)',
	'SystemBass_normalSetting(10)',
	'SystemBass_inout',
	'SystemBass_efct',
	'SystemBass_pitch',
	'SystemBass_gtr2midi',
	'PcmapBass_bank(1)',
	'PcmapBass_bank(2)',
	'PcmapBass_bank(3)',
	'PcmapBass_bank(4)',
	'Setup_efct',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function PatchNameBass() {

	this.blockSet = [
		'patch_nameBass',
	];

	this.parts = 0;

	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVari_EBassName() {
	this.blockSet = [
		'InstVari_EBass(1)%name',
		'InstVari_EBass(2)%name',
		'InstVari_EBass(3)%name',
		'InstVari_EBass(4)%name',
		'InstVari_EBass(5)%name',
		'InstVari_EBass(6)%name',
		'InstVari_EBass(7)%name',
		'InstVari_EBass(8)%name',
		'InstVari_EBass(9)%name',
		'InstVari_EBass(10)%name',
		'InstVari_EBass(11)%name',
		'InstVari_EBass(12)%name',
		'InstVari_EBass(13)%name',
		'InstVari_EBass(14)%name',
		'InstVari_EBass(15)%name',
		'InstVari_EBass(16)%name',
		'InstVari_EBass(17)%name',
		'InstVari_EBass(18)%name',
		'InstVari_EBass(19)%name',
		'InstVari_EBass(20)%name',
		'InstVari_EBass(21)%name',
		'InstVari_EBass(22)%name',
		'InstVari_EBass(23)%name',
		'InstVari_EBass(24)%name',
		'InstVari_EBass(25)%name',
		'InstVari_EBass(26)%name',
		'InstVari_EBass(27)%name',
		'InstVari_EBass(28)%name',
		'InstVari_EBass(29)%name',
		'InstVari_EBass(30)%name',
		'InstVari_EBass(31)%name',
		'InstVari_EBass(32)%name',
		'InstVari_EBass(33)%name',
		'InstVari_EBass(34)%name',
		'InstVari_EBass(35)%name',
		'InstVari_EBass(36)%name',
		'InstVari_EBass(37)%name',
		'InstVari_EBass(38)%name',
		'InstVari_EBass(39)%name',
		'InstVari_EBass(40)%name',
		'InstVari_EBass(41)%name',
		'InstVari_EBass(42)%name',
		'InstVari_EBass(43)%name',
		'InstVari_EBass(44)%name',
		'InstVari_EBass(45)%name',
		'InstVari_EBass(46)%name',
		'InstVari_EBass(47)%name',
		'InstVari_EBass(48)%name',
		'InstVari_EBass(49)%name',
		'InstVari_EBass(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVariBass_DynaSynthName() {
	this.blockSet = [
		'InstVariBass_DynaSynth(1)%name',
		'InstVariBass_DynaSynth(2)%name',
		'InstVariBass_DynaSynth(3)%name',
		'InstVariBass_DynaSynth(4)%name',
		'InstVariBass_DynaSynth(5)%name',
		'InstVariBass_DynaSynth(6)%name',
		'InstVariBass_DynaSynth(7)%name',
		'InstVariBass_DynaSynth(8)%name',
		'InstVariBass_DynaSynth(9)%name',
		'InstVariBass_DynaSynth(10)%name',
		'InstVariBass_DynaSynth(11)%name',
		'InstVariBass_DynaSynth(12)%name',
		'InstVariBass_DynaSynth(13)%name',
		'InstVariBass_DynaSynth(14)%name',
		'InstVariBass_DynaSynth(15)%name',
		'InstVariBass_DynaSynth(16)%name',
		'InstVariBass_DynaSynth(17)%name',
		'InstVariBass_DynaSynth(18)%name',
		'InstVariBass_DynaSynth(19)%name',
		'InstVariBass_DynaSynth(20)%name',
		'InstVariBass_DynaSynth(21)%name',
		'InstVariBass_DynaSynth(22)%name',
		'InstVariBass_DynaSynth(23)%name',
		'InstVariBass_DynaSynth(24)%name',
		'InstVariBass_DynaSynth(25)%name',
		'InstVariBass_DynaSynth(26)%name',
		'InstVariBass_DynaSynth(27)%name',
		'InstVariBass_DynaSynth(28)%name',
		'InstVariBass_DynaSynth(29)%name',
		'InstVariBass_DynaSynth(30)%name',
		'InstVariBass_DynaSynth(31)%name',
		'InstVariBass_DynaSynth(32)%name',
		'InstVariBass_DynaSynth(33)%name',
		'InstVariBass_DynaSynth(34)%name',
		'InstVariBass_DynaSynth(35)%name',
		'InstVariBass_DynaSynth(36)%name',
		'InstVariBass_DynaSynth(37)%name',
		'InstVariBass_DynaSynth(38)%name',
		'InstVariBass_DynaSynth(39)%name',
		'InstVariBass_DynaSynth(40)%name',
		'InstVariBass_DynaSynth(41)%name',
		'InstVariBass_DynaSynth(42)%name',
		'InstVariBass_DynaSynth(43)%name',
		'InstVariBass_DynaSynth(44)%name',
		'InstVariBass_DynaSynth(45)%name',
		'InstVariBass_DynaSynth(46)%name',
		'InstVariBass_DynaSynth(47)%name',
		'InstVariBass_DynaSynth(48)%name',
		'InstVariBass_DynaSynth(49)%name',
		'InstVariBass_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVariBass_OscSynthName() {
	this.blockSet = [
		'InstVariBass_OscSynth(1)%name',
		'InstVariBass_OscSynth(2)%name',
		'InstVariBass_OscSynth(3)%name',
		'InstVariBass_OscSynth(4)%name',
		'InstVariBass_OscSynth(5)%name',
		'InstVariBass_OscSynth(6)%name',
		'InstVariBass_OscSynth(7)%name',
		'InstVariBass_OscSynth(8)%name',
		'InstVariBass_OscSynth(9)%name',
		'InstVariBass_OscSynth(10)%name',
		'InstVariBass_OscSynth(11)%name',
		'InstVariBass_OscSynth(12)%name',
		'InstVariBass_OscSynth(13)%name',
		'InstVariBass_OscSynth(14)%name',
		'InstVariBass_OscSynth(15)%name',
		'InstVariBass_OscSynth(16)%name',
		'InstVariBass_OscSynth(17)%name',
		'InstVariBass_OscSynth(18)%name',
		'InstVariBass_OscSynth(19)%name',
		'InstVariBass_OscSynth(20)%name',
		'InstVariBass_OscSynth(21)%name',
		'InstVariBass_OscSynth(22)%name',
		'InstVariBass_OscSynth(23)%name',
		'InstVariBass_OscSynth(24)%name',
		'InstVariBass_OscSynth(25)%name',
		'InstVariBass_OscSynth(26)%name',
		'InstVariBass_OscSynth(27)%name',
		'InstVariBass_OscSynth(28)%name',
		'InstVariBass_OscSynth(29)%name',
		'InstVariBass_OscSynth(30)%name',
		'InstVariBass_OscSynth(31)%name',
		'InstVariBass_OscSynth(32)%name',
		'InstVariBass_OscSynth(33)%name',
		'InstVariBass_OscSynth(34)%name',
		'InstVariBass_OscSynth(35)%name',
		'InstVariBass_OscSynth(36)%name',
		'InstVariBass_OscSynth(37)%name',
		'InstVariBass_OscSynth(38)%name',
		'InstVariBass_OscSynth(39)%name',
		'InstVariBass_OscSynth(40)%name',
		'InstVariBass_OscSynth(41)%name',
		'InstVariBass_OscSynth(42)%name',
		'InstVariBass_OscSynth(43)%name',
		'InstVariBass_OscSynth(44)%name',
		'InstVariBass_OscSynth(45)%name',
		'InstVariBass_OscSynth(46)%name',
		'InstVariBass_OscSynth(47)%name',
		'InstVariBass_OscSynth(48)%name',
		'InstVariBass_OscSynth(49)%name',
		'InstVariBass_OscSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstVariBass_AnalogGrName() {
	this.blockSet = [
		'InstVariBass_AnalogGr(1)%name',
		'InstVariBass_AnalogGr(2)%name',
		'InstVariBass_AnalogGr(3)%name',
		'InstVariBass_AnalogGr(4)%name',
		'InstVariBass_AnalogGr(5)%name',
		'InstVariBass_AnalogGr(6)%name',
		'InstVariBass_AnalogGr(7)%name',
		'InstVariBass_AnalogGr(8)%name',
		'InstVariBass_AnalogGr(9)%name',
		'InstVariBass_AnalogGr(10)%name',
		'InstVariBass_AnalogGr(11)%name',
		'InstVariBass_AnalogGr(12)%name',
		'InstVariBass_AnalogGr(13)%name',
		'InstVariBass_AnalogGr(14)%name',
		'InstVariBass_AnalogGr(15)%name',
		'InstVariBass_AnalogGr(16)%name',
		'InstVariBass_AnalogGr(17)%name',
		'InstVariBass_AnalogGr(18)%name',
		'InstVariBass_AnalogGr(19)%name',
		'InstVariBass_AnalogGr(20)%name',
		'InstVariBass_AnalogGr(21)%name',
		'InstVariBass_AnalogGr(22)%name',
		'InstVariBass_AnalogGr(23)%name',
		'InstVariBass_AnalogGr(24)%name',
		'InstVariBass_AnalogGr(25)%name',
		'InstVariBass_AnalogGr(26)%name',
		'InstVariBass_AnalogGr(27)%name',
		'InstVariBass_AnalogGr(28)%name',
		'InstVariBass_AnalogGr(29)%name',
		'InstVariBass_AnalogGr(30)%name',
		'InstVariBass_AnalogGr(31)%name',
		'InstVariBass_AnalogGr(32)%name',
		'InstVariBass_AnalogGr(33)%name',
		'InstVariBass_AnalogGr(34)%name',
		'InstVariBass_AnalogGr(35)%name',
		'InstVariBass_AnalogGr(36)%name',
		'InstVariBass_AnalogGr(37)%name',
		'InstVariBass_AnalogGr(38)%name',
		'InstVariBass_AnalogGr(39)%name',
		'InstVariBass_AnalogGr(40)%name',
		'InstVariBass_AnalogGr(41)%name',
		'InstVariBass_AnalogGr(42)%name',
		'InstVariBass_AnalogGr(43)%name',
		'InstVariBass_AnalogGr(44)%name',
		'InstVariBass_AnalogGr(45)%name',
		'InstVariBass_AnalogGr(46)%name',
		'InstVariBass_AnalogGr(47)%name',
		'InstVariBass_AnalogGr(48)%name',
		'InstVariBass_AnalogGr(49)%name',
		'InstVariBass_AnalogGr(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVariBass_EBassName() {
	this.blockSet = [
		'InstVariBass_EBass(1)%name',
		'InstVariBass_EBass(2)%name',
		'InstVariBass_EBass(3)%name',
		'InstVariBass_EBass(4)%name',
		'InstVariBass_EBass(5)%name',
		'InstVariBass_EBass(6)%name',
		'InstVariBass_EBass(7)%name',
		'InstVariBass_EBass(8)%name',
		'InstVariBass_EBass(9)%name',
		'InstVariBass_EBass(10)%name',
		'InstVariBass_EBass(11)%name',
		'InstVariBass_EBass(12)%name',
		'InstVariBass_EBass(13)%name',
		'InstVariBass_EBass(14)%name',
		'InstVariBass_EBass(15)%name',
		'InstVariBass_EBass(16)%name',
		'InstVariBass_EBass(17)%name',
		'InstVariBass_EBass(18)%name',
		'InstVariBass_EBass(19)%name',
		'InstVariBass_EBass(20)%name',
		'InstVariBass_EBass(21)%name',
		'InstVariBass_EBass(22)%name',
		'InstVariBass_EBass(23)%name',
		'InstVariBass_EBass(24)%name',
		'InstVariBass_EBass(25)%name',
		'InstVariBass_EBass(26)%name',
		'InstVariBass_EBass(27)%name',
		'InstVariBass_EBass(28)%name',
		'InstVariBass_EBass(29)%name',
		'InstVariBass_EBass(30)%name',
		'InstVariBass_EBass(31)%name',
		'InstVariBass_EBass(32)%name',
		'InstVariBass_EBass(33)%name',
		'InstVariBass_EBass(34)%name',
		'InstVariBass_EBass(35)%name',
		'InstVariBass_EBass(36)%name',
		'InstVariBass_EBass(37)%name',
		'InstVariBass_EBass(38)%name',
		'InstVariBass_EBass(39)%name',
		'InstVariBass_EBass(40)%name',
		'InstVariBass_EBass(41)%name',
		'InstVariBass_EBass(42)%name',
		'InstVariBass_EBass(43)%name',
		'InstVariBass_EBass(44)%name',
		'InstVariBass_EBass(45)%name',
		'InstVariBass_EBass(46)%name',
		'InstVariBass_EBass(47)%name',
		'InstVariBass_EBass(48)%name',
		'InstVariBass_EBass(49)%name',
		'InstVariBass_EBass(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVariBass_AcBassName() {
	this.blockSet = [
		'InstVariBass_AcBass(1)%name',
		'InstVariBass_AcBass(2)%name',
		'InstVariBass_AcBass(3)%name',
		'InstVariBass_AcBass(4)%name',
		'InstVariBass_AcBass(5)%name',
		'InstVariBass_AcBass(6)%name',
		'InstVariBass_AcBass(7)%name',
		'InstVariBass_AcBass(8)%name',
		'InstVariBass_AcBass(9)%name',
		'InstVariBass_AcBass(10)%name',
		'InstVariBass_AcBass(11)%name',
		'InstVariBass_AcBass(12)%name',
		'InstVariBass_AcBass(13)%name',
		'InstVariBass_AcBass(14)%name',
		'InstVariBass_AcBass(15)%name',
		'InstVariBass_AcBass(16)%name',
		'InstVariBass_AcBass(17)%name',
		'InstVariBass_AcBass(18)%name',
		'InstVariBass_AcBass(19)%name',
		'InstVariBass_AcBass(20)%name',
		'InstVariBass_AcBass(21)%name',
		'InstVariBass_AcBass(22)%name',
		'InstVariBass_AcBass(23)%name',
		'InstVariBass_AcBass(24)%name',
		'InstVariBass_AcBass(25)%name',
		'InstVariBass_AcBass(26)%name',
		'InstVariBass_AcBass(27)%name',
		'InstVariBass_AcBass(28)%name',
		'InstVariBass_AcBass(29)%name',
		'InstVariBass_AcBass(30)%name',
		'InstVariBass_AcBass(31)%name',
		'InstVariBass_AcBass(32)%name',
		'InstVariBass_AcBass(33)%name',
		'InstVariBass_AcBass(34)%name',
		'InstVariBass_AcBass(35)%name',
		'InstVariBass_AcBass(36)%name',
		'InstVariBass_AcBass(37)%name',
		'InstVariBass_AcBass(38)%name',
		'InstVariBass_AcBass(39)%name',
		'InstVariBass_AcBass(40)%name',
		'InstVariBass_AcBass(41)%name',
		'InstVariBass_AcBass(42)%name',
		'InstVariBass_AcBass(43)%name',
		'InstVariBass_AcBass(44)%name',
		'InstVariBass_AcBass(45)%name',
		'InstVariBass_AcBass(46)%name',
		'InstVariBass_AcBass(47)%name',
		'InstVariBass_AcBass(48)%name',
		'InstVariBass_AcBass(49)%name',
		'InstVariBass_AcBass(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

function InstVariBass_EGtrName() {
	this.blockSet = [
		'InstVariBass_EGtr(1)%name',
		'InstVariBass_EGtr(2)%name',
		'InstVariBass_EGtr(3)%name',
		'InstVariBass_EGtr(4)%name',
		'InstVariBass_EGtr(5)%name',
		'InstVariBass_EGtr(6)%name',
		'InstVariBass_EGtr(7)%name',
		'InstVariBass_EGtr(8)%name',
		'InstVariBass_EGtr(9)%name',
		'InstVariBass_EGtr(10)%name',
		'InstVariBass_EGtr(11)%name',
		'InstVariBass_EGtr(12)%name',
		'InstVariBass_EGtr(13)%name',
		'InstVariBass_EGtr(14)%name',
		'InstVariBass_EGtr(15)%name',
		'InstVariBass_EGtr(16)%name',
		'InstVariBass_EGtr(17)%name',
		'InstVariBass_EGtr(18)%name',
		'InstVariBass_EGtr(19)%name',
		'InstVariBass_EGtr(20)%name',
		'InstVariBass_EGtr(21)%name',
		'InstVariBass_EGtr(22)%name',
		'InstVariBass_EGtr(23)%name',
		'InstVariBass_EGtr(24)%name',
		'InstVariBass_EGtr(25)%name',
		'InstVariBass_EGtr(26)%name',
		'InstVariBass_EGtr(27)%name',
		'InstVariBass_EGtr(28)%name',
		'InstVariBass_EGtr(29)%name',
		'InstVariBass_EGtr(30)%name',
		'InstVariBass_EGtr(31)%name',
		'InstVariBass_EGtr(32)%name',
		'InstVariBass_EGtr(33)%name',
		'InstVariBass_EGtr(34)%name',
		'InstVariBass_EGtr(35)%name',
		'InstVariBass_EGtr(36)%name',
		'InstVariBass_EGtr(37)%name',
		'InstVariBass_EGtr(38)%name',
		'InstVariBass_EGtr(39)%name',
		'InstVariBass_EGtr(40)%name',
		'InstVariBass_EGtr(41)%name',
		'InstVariBass_EGtr(42)%name',
		'InstVariBass_EGtr(43)%name',
		'InstVariBass_EGtr(44)%name',
		'InstVariBass_EGtr(45)%name',
		'InstVariBass_EGtr(46)%name',
		'InstVariBass_EGtr(47)%name',
		'InstVariBass_EGtr(48)%name',
		'InstVariBass_EGtr(49)%name',
		'InstVariBass_EGtr(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}

// no InstVariBass_VioGtrName on BASS MODE

function InstVariBass_PolyFxName() {
	this.blockSet = [
		'InstVariBass_PolyFx(1)%name',
		'InstVariBass_PolyFx(2)%name',
		'InstVariBass_PolyFx(3)%name',
		'InstVariBass_PolyFx(4)%name',
		'InstVariBass_PolyFx(5)%name',
		'InstVariBass_PolyFx(6)%name',
		'InstVariBass_PolyFx(7)%name',
		'InstVariBass_PolyFx(8)%name',
		'InstVariBass_PolyFx(9)%name',
		'InstVariBass_PolyFx(10)%name',
		'InstVariBass_PolyFx(11)%name',
		'InstVariBass_PolyFx(12)%name',
		'InstVariBass_PolyFx(13)%name',
		'InstVariBass_PolyFx(14)%name',
		'InstVariBass_PolyFx(15)%name',
		'InstVariBass_PolyFx(16)%name',
		'InstVariBass_PolyFx(17)%name',
		'InstVariBass_PolyFx(18)%name',
		'InstVariBass_PolyFx(19)%name',
		'InstVariBass_PolyFx(20)%name',
		'InstVariBass_PolyFx(21)%name',
		'InstVariBass_PolyFx(22)%name',
		'InstVariBass_PolyFx(23)%name',
		'InstVariBass_PolyFx(24)%name',
		'InstVariBass_PolyFx(25)%name',
		'InstVariBass_PolyFx(26)%name',
		'InstVariBass_PolyFx(27)%name',
		'InstVariBass_PolyFx(28)%name',
		'InstVariBass_PolyFx(29)%name',
		'InstVariBass_PolyFx(30)%name',
		'InstVariBass_PolyFx(31)%name',
		'InstVariBass_PolyFx(32)%name',
		'InstVariBass_PolyFx(33)%name',
		'InstVariBass_PolyFx(34)%name',
		'InstVariBass_PolyFx(35)%name',
		'InstVariBass_PolyFx(36)%name',
		'InstVariBass_PolyFx(37)%name',
		'InstVariBass_PolyFx(38)%name',
		'InstVariBass_PolyFx(39)%name',
		'InstVariBass_PolyFx(40)%name',
		'InstVariBass_PolyFx(41)%name',
		'InstVariBass_PolyFx(42)%name',
		'InstVariBass_PolyFx(43)%name',
		'InstVariBass_PolyFx(44)%name',
		'InstVariBass_PolyFx(45)%name',
		'InstVariBass_PolyFx(46)%name',
		'InstVariBass_PolyFx(47)%name',
		'InstVariBass_PolyFx(48)%name',
		'InstVariBass_PolyFx(49)%name',
		'InstVariBass_PolyFx(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstLfoVariBass_DynaSynthName() {
	this.blockSet = [
		'InstLfoVariBass_DynaSynth(1)%name',
		'InstLfoVariBass_DynaSynth(2)%name',
		'InstLfoVariBass_DynaSynth(3)%name',
		'InstLfoVariBass_DynaSynth(4)%name',
		'InstLfoVariBass_DynaSynth(5)%name',
		'InstLfoVariBass_DynaSynth(6)%name',
		'InstLfoVariBass_DynaSynth(7)%name',
		'InstLfoVariBass_DynaSynth(8)%name',
		'InstLfoVariBass_DynaSynth(9)%name',
		'InstLfoVariBass_DynaSynth(10)%name',
		'InstLfoVariBass_DynaSynth(11)%name',
		'InstLfoVariBass_DynaSynth(12)%name',
		'InstLfoVariBass_DynaSynth(13)%name',
		'InstLfoVariBass_DynaSynth(14)%name',
		'InstLfoVariBass_DynaSynth(15)%name',
		'InstLfoVariBass_DynaSynth(16)%name',
		'InstLfoVariBass_DynaSynth(17)%name',
		'InstLfoVariBass_DynaSynth(18)%name',
		'InstLfoVariBass_DynaSynth(19)%name',
		'InstLfoVariBass_DynaSynth(20)%name',
		'InstLfoVariBass_DynaSynth(21)%name',
		'InstLfoVariBass_DynaSynth(22)%name',
		'InstLfoVariBass_DynaSynth(23)%name',
		'InstLfoVariBass_DynaSynth(24)%name',
		'InstLfoVariBass_DynaSynth(25)%name',
		'InstLfoVariBass_DynaSynth(26)%name',
		'InstLfoVariBass_DynaSynth(27)%name',
		'InstLfoVariBass_DynaSynth(28)%name',
		'InstLfoVariBass_DynaSynth(29)%name',
		'InstLfoVariBass_DynaSynth(30)%name',
		'InstLfoVariBass_DynaSynth(31)%name',
		'InstLfoVariBass_DynaSynth(32)%name',
		'InstLfoVariBass_DynaSynth(33)%name',
		'InstLfoVariBass_DynaSynth(34)%name',
		'InstLfoVariBass_DynaSynth(35)%name',
		'InstLfoVariBass_DynaSynth(36)%name',
		'InstLfoVariBass_DynaSynth(37)%name',
		'InstLfoVariBass_DynaSynth(38)%name',
		'InstLfoVariBass_DynaSynth(39)%name',
		'InstLfoVariBass_DynaSynth(40)%name',
		'InstLfoVariBass_DynaSynth(41)%name',
		'InstLfoVariBass_DynaSynth(42)%name',
		'InstLfoVariBass_DynaSynth(43)%name',
		'InstLfoVariBass_DynaSynth(44)%name',
		'InstLfoVariBass_DynaSynth(45)%name',
		'InstLfoVariBass_DynaSynth(46)%name',
		'InstLfoVariBass_DynaSynth(47)%name',
		'InstLfoVariBass_DynaSynth(48)%name',
		'InstLfoVariBass_DynaSynth(49)%name',
		'InstLfoVariBass_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstLfoVariBass_OscSynthName() {
	this.blockSet = [
		'InstLfoVariBass_OscSynth(1)%name',
		'InstLfoVariBass_OscSynth(2)%name',
		'InstLfoVariBass_OscSynth(3)%name',
		'InstLfoVariBass_OscSynth(4)%name',
		'InstLfoVariBass_OscSynth(5)%name',
		'InstLfoVariBass_OscSynth(6)%name',
		'InstLfoVariBass_OscSynth(7)%name',
		'InstLfoVariBass_OscSynth(8)%name',
		'InstLfoVariBass_OscSynth(9)%name',
		'InstLfoVariBass_OscSynth(10)%name',
		'InstLfoVariBass_OscSynth(11)%name',
		'InstLfoVariBass_OscSynth(12)%name',
		'InstLfoVariBass_OscSynth(13)%name',
		'InstLfoVariBass_OscSynth(14)%name',
		'InstLfoVariBass_OscSynth(15)%name',
		'InstLfoVariBass_OscSynth(16)%name',
		'InstLfoVariBass_OscSynth(17)%name',
		'InstLfoVariBass_OscSynth(18)%name',
		'InstLfoVariBass_OscSynth(19)%name',
		'InstLfoVariBass_OscSynth(20)%name',
		'InstLfoVariBass_OscSynth(21)%name',
		'InstLfoVariBass_OscSynth(22)%name',
		'InstLfoVariBass_OscSynth(23)%name',
		'InstLfoVariBass_OscSynth(24)%name',
		'InstLfoVariBass_OscSynth(25)%name',
		'InstLfoVariBass_OscSynth(26)%name',
		'InstLfoVariBass_OscSynth(27)%name',
		'InstLfoVariBass_OscSynth(28)%name',
		'InstLfoVariBass_OscSynth(29)%name',
		'InstLfoVariBass_OscSynth(30)%name',
		'InstLfoVariBass_OscSynth(31)%name',
		'InstLfoVariBass_OscSynth(32)%name',
		'InstLfoVariBass_OscSynth(33)%name',
		'InstLfoVariBass_OscSynth(34)%name',
		'InstLfoVariBass_OscSynth(35)%name',
		'InstLfoVariBass_OscSynth(36)%name',
		'InstLfoVariBass_OscSynth(37)%name',
		'InstLfoVariBass_OscSynth(38)%name',
		'InstLfoVariBass_OscSynth(39)%name',
		'InstLfoVariBass_OscSynth(40)%name',
		'InstLfoVariBass_OscSynth(41)%name',
		'InstLfoVariBass_OscSynth(42)%name',
		'InstLfoVariBass_OscSynth(43)%name',
		'InstLfoVariBass_OscSynth(44)%name',
		'InstLfoVariBass_OscSynth(45)%name',
		'InstLfoVariBass_OscSynth(46)%name',
		'InstLfoVariBass_OscSynth(47)%name',
		'InstLfoVariBass_OscSynth(48)%name',
		'InstLfoVariBass_OscSynth(49)%name',
		'InstLfoVariBass_OscSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function InstSeqVariBass_DynaSynthName() {
	this.blockSet = [
		'InstSeqVariBass_DynaSynth(1)%name',
		'InstSeqVariBass_DynaSynth(2)%name',
		'InstSeqVariBass_DynaSynth(3)%name',
		'InstSeqVariBass_DynaSynth(4)%name',
		'InstSeqVariBass_DynaSynth(5)%name',
		'InstSeqVariBass_DynaSynth(6)%name',
		'InstSeqVariBass_DynaSynth(7)%name',
		'InstSeqVariBass_DynaSynth(8)%name',
		'InstSeqVariBass_DynaSynth(9)%name',
		'InstSeqVariBass_DynaSynth(10)%name',
		'InstSeqVariBass_DynaSynth(11)%name',
		'InstSeqVariBass_DynaSynth(12)%name',
		'InstSeqVariBass_DynaSynth(13)%name',
		'InstSeqVariBass_DynaSynth(14)%name',
		'InstSeqVariBass_DynaSynth(15)%name',
		'InstSeqVariBass_DynaSynth(16)%name',
		'InstSeqVariBass_DynaSynth(17)%name',
		'InstSeqVariBass_DynaSynth(18)%name',
		'InstSeqVariBass_DynaSynth(19)%name',
		'InstSeqVariBass_DynaSynth(20)%name',
		'InstSeqVariBass_DynaSynth(21)%name',
		'InstSeqVariBass_DynaSynth(22)%name',
		'InstSeqVariBass_DynaSynth(23)%name',
		'InstSeqVariBass_DynaSynth(24)%name',
		'InstSeqVariBass_DynaSynth(25)%name',
		'InstSeqVariBass_DynaSynth(26)%name',
		'InstSeqVariBass_DynaSynth(27)%name',
		'InstSeqVariBass_DynaSynth(28)%name',
		'InstSeqVariBass_DynaSynth(29)%name',
		'InstSeqVariBass_DynaSynth(30)%name',
		'InstSeqVariBass_DynaSynth(31)%name',
		'InstSeqVariBass_DynaSynth(32)%name',
		'InstSeqVariBass_DynaSynth(33)%name',
		'InstSeqVariBass_DynaSynth(34)%name',
		'InstSeqVariBass_DynaSynth(35)%name',
		'InstSeqVariBass_DynaSynth(36)%name',
		'InstSeqVariBass_DynaSynth(37)%name',
		'InstSeqVariBass_DynaSynth(38)%name',
		'InstSeqVariBass_DynaSynth(39)%name',
		'InstSeqVariBass_DynaSynth(40)%name',
		'InstSeqVariBass_DynaSynth(41)%name',
		'InstSeqVariBass_DynaSynth(42)%name',
		'InstSeqVariBass_DynaSynth(43)%name',
		'InstSeqVariBass_DynaSynth(44)%name',
		'InstSeqVariBass_DynaSynth(45)%name',
		'InstSeqVariBass_DynaSynth(46)%name',
		'InstSeqVariBass_DynaSynth(47)%name',
		'InstSeqVariBass_DynaSynth(48)%name',
		'InstSeqVariBass_DynaSynth(49)%name',
		'InstSeqVariBass_DynaSynth(50)%name'
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}
function EfctVariBass_EfctName() {
	this.blockSet = [
		// EffectComp
		'EfctVariBass_Efct(1)%name(1)',
		'EfctVariBass_Efct(2)%name(1)',
		'EfctVariBass_Efct(3)%name(1)',
		'EfctVariBass_Efct(4)%name(1)',
		'EfctVariBass_Efct(5)%name(1)',
		'EfctVariBass_Efct(6)%name(1)',
		'EfctVariBass_Efct(7)%name(1)',
		'EfctVariBass_Efct(8)%name(1)',
		'EfctVariBass_Efct(9)%name(1)',
		'EfctVariBass_Efct(10)%name(1)',
		
		// EffectDist
		'EfctVariBass_Efct(1)%name(2)',
		'EfctVariBass_Efct(2)%name(2)',
		'EfctVariBass_Efct(3)%name(2)',
		'EfctVariBass_Efct(4)%name(2)',
		'EfctVariBass_Efct(5)%name(2)',
		'EfctVariBass_Efct(6)%name(2)',
		'EfctVariBass_Efct(7)%name(2)',
		'EfctVariBass_Efct(8)%name(2)',
		'EfctVariBass_Efct(9)%name(2)',
		'EfctVariBass_Efct(10)%name(2)',
		
		// EffectAmp
		'EfctVariBass_Efct(1)%name(3)',
		'EfctVariBass_Efct(2)%name(3)',
		'EfctVariBass_Efct(3)%name(3)',
		'EfctVariBass_Efct(4)%name(3)',
		'EfctVariBass_Efct(5)%name(3)',
		'EfctVariBass_Efct(6)%name(3)',
		'EfctVariBass_Efct(7)%name(3)',
		'EfctVariBass_Efct(8)%name(3)',
		'EfctVariBass_Efct(9)%name(3)',
		'EfctVariBass_Efct(10)%name(3)',
		
		// EffectNs
		'EfctVariBass_Efct(1)%name(4)',
		'EfctVariBass_Efct(2)%name(4)',
		'EfctVariBass_Efct(3)%name(4)',
		'EfctVariBass_Efct(4)%name(4)',
		'EfctVariBass_Efct(5)%name(4)',
		'EfctVariBass_Efct(6)%name(4)',
		'EfctVariBass_Efct(7)%name(4)',
		'EfctVariBass_Efct(8)%name(4)',
		'EfctVariBass_Efct(9)%name(4)',
		'EfctVariBass_Efct(10)%name(4)',
		
		// EffectEq
		'EfctVariBass_Efct(1)%name(5)',
		'EfctVariBass_Efct(2)%name(5)',
		'EfctVariBass_Efct(3)%name(5)',
		'EfctVariBass_Efct(4)%name(5)',
		'EfctVariBass_Efct(5)%name(5)',
		'EfctVariBass_Efct(6)%name(5)',
		'EfctVariBass_Efct(7)%name(5)',
		'EfctVariBass_Efct(8)%name(5)',
		'EfctVariBass_Efct(9)%name(5)',
		'EfctVariBass_Efct(10)%name(5)',
		
		// EffectDelay
		'EfctVariBass_Efct(1)%name(6)',
		'EfctVariBass_Efct(2)%name(6)',
		'EfctVariBass_Efct(3)%name(6)',
		'EfctVariBass_Efct(4)%name(6)',
		'EfctVariBass_Efct(5)%name(6)',
		'EfctVariBass_Efct(6)%name(6)',
		'EfctVariBass_Efct(7)%name(6)',
		'EfctVariBass_Efct(8)%name(6)',
		'EfctVariBass_Efct(9)%name(6)',
		'EfctVariBass_Efct(10)%name(6)',
	
		// EffectMstDelay
		'EfctVariBass_Efct(1)%name(7)',
		'EfctVariBass_Efct(2)%name(7)',
		'EfctVariBass_Efct(3)%name(7)',
		'EfctVariBass_Efct(4)%name(7)',
		'EfctVariBass_Efct(5)%name(7)',
		'EfctVariBass_Efct(6)%name(7)',
		'EfctVariBass_Efct(7)%name(7)',
		'EfctVariBass_Efct(8)%name(7)',
		'EfctVariBass_Efct(9)%name(7)',
		'EfctVariBass_Efct(10)%name(7)',
		
		// EffectChorus
		'EfctVariBass_Efct(1)%name(8)',
		'EfctVariBass_Efct(2)%name(8)',
		'EfctVariBass_Efct(3)%name(8)',
		'EfctVariBass_Efct(4)%name(8)',
		'EfctVariBass_Efct(5)%name(8)',
		'EfctVariBass_Efct(6)%name(8)',
		'EfctVariBass_Efct(7)%name(8)',
		'EfctVariBass_Efct(8)%name(8)',
		'EfctVariBass_Efct(9)%name(8)',
		'EfctVariBass_Efct(10)%name(8)',
		
		// EffectFxAcReso
		'EfctVariBass_Efct(1)%name(9)',
		'EfctVariBass_Efct(2)%name(9)',
		'EfctVariBass_Efct(3)%name(9)',
		'EfctVariBass_Efct(4)%name(9)',
		'EfctVariBass_Efct(5)%name(9)',
		'EfctVariBass_Efct(6)%name(9)',
		'EfctVariBass_Efct(7)%name(9)',
		'EfctVariBass_Efct(8)%name(9)',
		'EfctVariBass_Efct(9)%name(9)',
		'EfctVariBass_Efct(10)%name(9)',
		
		// EffectFxAWah
		'EfctVariBass_Efct(1)%name(10)',
		'EfctVariBass_Efct(2)%name(10)',
		'EfctVariBass_Efct(3)%name(10)',
		'EfctVariBass_Efct(4)%name(10)',
		'EfctVariBass_Efct(5)%name(10)',
		'EfctVariBass_Efct(6)%name(10)',
		'EfctVariBass_Efct(7)%name(10)',
		'EfctVariBass_Efct(8)%name(10)',
		'EfctVariBass_Efct(9)%name(10)',
		'EfctVariBass_Efct(10)%name(10)',
		
		// EffectFxCVibe
		'EfctVariBass_Efct(1)%name(11)',
		'EfctVariBass_Efct(2)%name(11)',
		'EfctVariBass_Efct(3)%name(11)',
		'EfctVariBass_Efct(4)%name(11)',
		'EfctVariBass_Efct(5)%name(11)',
		'EfctVariBass_Efct(6)%name(11)',
		'EfctVariBass_Efct(7)%name(11)',
		'EfctVariBass_Efct(8)%name(11)',
		'EfctVariBass_Efct(9)%name(11)',
		'EfctVariBass_Efct(10)%name(11)',
		
		// EffectFxDefretter
		'EfctVariBass_Efct(1)%name(12)',
		'EfctVariBass_Efct(2)%name(12)',
		'EfctVariBass_Efct(3)%name(12)',
		'EfctVariBass_Efct(4)%name(12)',
		'EfctVariBass_Efct(5)%name(12)',
		'EfctVariBass_Efct(6)%name(12)',
		'EfctVariBass_Efct(7)%name(12)',
		'EfctVariBass_Efct(8)%name(12)',
		'EfctVariBass_Efct(9)%name(12)',
		'EfctVariBass_Efct(10)%name(12)',
		
		// EffectFxDefretterBass
		'EfctVariBass_Efct(1)%name(13)',
		'EfctVariBass_Efct(2)%name(13)',
		'EfctVariBass_Efct(3)%name(13)',
		'EfctVariBass_Efct(4)%name(13)',
		'EfctVariBass_Efct(5)%name(13)',
		'EfctVariBass_Efct(6)%name(13)',
		'EfctVariBass_Efct(7)%name(13)',
		'EfctVariBass_Efct(8)%name(13)',
		'EfctVariBass_Efct(9)%name(13)',
		'EfctVariBass_Efct(10)%name(13)',
		
		// EffectFxFlanger
		'EfctVariBass_Efct(1)%name(14)',
		'EfctVariBass_Efct(2)%name(14)',
		'EfctVariBass_Efct(3)%name(14)',
		'EfctVariBass_Efct(4)%name(14)',
		'EfctVariBass_Efct(5)%name(14)',
		'EfctVariBass_Efct(6)%name(14)',
		'EfctVariBass_Efct(7)%name(14)',
		'EfctVariBass_Efct(8)%name(14)',
		'EfctVariBass_Efct(9)%name(14)',
		'EfctVariBass_Efct(10)%name(14)',
		
		// EffectFxGEq
		'EfctVariBass_Efct(1)%name(15)',
		'EfctVariBass_Efct(2)%name(15)',
		'EfctVariBass_Efct(3)%name(15)',
		'EfctVariBass_Efct(4)%name(15)',
		'EfctVariBass_Efct(5)%name(15)',
		'EfctVariBass_Efct(6)%name(15)',
		'EfctVariBass_Efct(7)%name(15)',
		'EfctVariBass_Efct(8)%name(15)',
		'EfctVariBass_Efct(9)%name(15)',
		'EfctVariBass_Efct(10)%name(15)',
		
		// EffectFxHarmonist
		'EfctVariBass_Efct(1)%name(16)',
		'EfctVariBass_Efct(2)%name(16)',
		'EfctVariBass_Efct(3)%name(16)',
		'EfctVariBass_Efct(4)%name(16)',
		'EfctVariBass_Efct(5)%name(16)',
		'EfctVariBass_Efct(6)%name(16)',
		'EfctVariBass_Efct(7)%name(16)',
		'EfctVariBass_Efct(8)%name(16)',
		'EfctVariBass_Efct(9)%name(16)',
		'EfctVariBass_Efct(10)%name(16)',
		
		// EffectFxHumanizer
		'EfctVariBass_Efct(1)%name(17)',
		'EfctVariBass_Efct(2)%name(17)',
		'EfctVariBass_Efct(3)%name(17)',
		'EfctVariBass_Efct(4)%name(17)',
		'EfctVariBass_Efct(5)%name(17)',
		'EfctVariBass_Efct(6)%name(17)',
		'EfctVariBass_Efct(7)%name(17)',
		'EfctVariBass_Efct(8)%name(17)',
		'EfctVariBass_Efct(9)%name(17)',
		'EfctVariBass_Efct(10)%name(17)',
		
		// EffectFxIsolator
		'EfctVariBass_Efct(1)%name(18)',
		'EfctVariBass_Efct(2)%name(18)',
		'EfctVariBass_Efct(3)%name(18)',
		'EfctVariBass_Efct(4)%name(18)',
		'EfctVariBass_Efct(5)%name(18)',
		'EfctVariBass_Efct(6)%name(18)',
		'EfctVariBass_Efct(7)%name(18)',
		'EfctVariBass_Efct(8)%name(18)',
		'EfctVariBass_Efct(9)%name(18)',
		'EfctVariBass_Efct(10)%name(18)',
		
		// EffectFxLimiter
		'EfctVariBass_Efct(1)%name(19)',
		'EfctVariBass_Efct(2)%name(19)',
		'EfctVariBass_Efct(3)%name(19)',
		'EfctVariBass_Efct(4)%name(19)',
		'EfctVariBass_Efct(5)%name(19)',
		'EfctVariBass_Efct(6)%name(19)',
		'EfctVariBass_Efct(7)%name(19)',
		'EfctVariBass_Efct(8)%name(19)',
		'EfctVariBass_Efct(9)%name(19)',
		'EfctVariBass_Efct(10)%name(19)',
		
		// EffectFxLofi
		'EfctVariBass_Efct(1)%name(20)',
		'EfctVariBass_Efct(2)%name(20)',
		'EfctVariBass_Efct(3)%name(20)',
		'EfctVariBass_Efct(4)%name(20)',
		'EfctVariBass_Efct(5)%name(20)',
		'EfctVariBass_Efct(6)%name(20)',
		'EfctVariBass_Efct(7)%name(20)',
		'EfctVariBass_Efct(8)%name(20)',
		'EfctVariBass_Efct(9)%name(20)',
		'EfctVariBass_Efct(10)%name(20)',
		
		// EffectFxOctave
		'EfctVariBass_Efct(1)%name(21)',
		'EfctVariBass_Efct(2)%name(21)',
		'EfctVariBass_Efct(3)%name(21)',
		'EfctVariBass_Efct(4)%name(21)',
		'EfctVariBass_Efct(5)%name(21)',
		'EfctVariBass_Efct(6)%name(21)',
		'EfctVariBass_Efct(7)%name(21)',
		'EfctVariBass_Efct(8)%name(21)',
		'EfctVariBass_Efct(9)%name(21)',
		'EfctVariBass_Efct(10)%name(21)',
		
		// EffectFxPan
		'EfctVariBass_Efct(1)%name(22)',
		'EfctVariBass_Efct(2)%name(22)',
		'EfctVariBass_Efct(3)%name(22)',
		'EfctVariBass_Efct(4)%name(22)',
		'EfctVariBass_Efct(5)%name(22)',
		'EfctVariBass_Efct(6)%name(22)',
		'EfctVariBass_Efct(7)%name(22)',
		'EfctVariBass_Efct(8)%name(22)',
		'EfctVariBass_Efct(9)%name(22)',
		'EfctVariBass_Efct(10)%name(22)',
		
		// EffectFxPedalBend
		'EfctVariBass_Efct(1)%name(23)',
		'EfctVariBass_Efct(2)%name(23)',
		'EfctVariBass_Efct(3)%name(23)',
		'EfctVariBass_Efct(4)%name(23)',
		'EfctVariBass_Efct(5)%name(23)',
		'EfctVariBass_Efct(6)%name(23)',
		'EfctVariBass_Efct(7)%name(23)',
		'EfctVariBass_Efct(8)%name(23)',
		'EfctVariBass_Efct(9)%name(23)',
		'EfctVariBass_Efct(10)%name(23)',
		
		// EffectFxPhaser
		'EfctVariBass_Efct(1)%name(24)',
		'EfctVariBass_Efct(2)%name(24)',
		'EfctVariBass_Efct(3)%name(24)',
		'EfctVariBass_Efct(4)%name(24)',
		'EfctVariBass_Efct(5)%name(24)',
		'EfctVariBass_Efct(6)%name(24)',
		'EfctVariBass_Efct(7)%name(24)',
		'EfctVariBass_Efct(8)%name(24)',
		'EfctVariBass_Efct(9)%name(24)',
		'EfctVariBass_Efct(10)%name(24)',
		
		// EffectFxPitchShift
		'EfctVariBass_Efct(1)%name(25)',
		'EfctVariBass_Efct(2)%name(25)',
		'EfctVariBass_Efct(3)%name(25)',
		'EfctVariBass_Efct(4)%name(25)',
		'EfctVariBass_Efct(5)%name(25)',
		'EfctVariBass_Efct(6)%name(25)',
		'EfctVariBass_Efct(7)%name(25)',
		'EfctVariBass_Efct(8)%name(25)',
		'EfctVariBass_Efct(9)%name(25)',
		'EfctVariBass_Efct(10)%name(25)',
		
		// EffectFxRingMod
		'EfctVariBass_Efct(1)%name(26)',
		'EfctVariBass_Efct(2)%name(26)',
		'EfctVariBass_Efct(3)%name(26)',
		'EfctVariBass_Efct(4)%name(26)',
		'EfctVariBass_Efct(5)%name(26)',
		'EfctVariBass_Efct(6)%name(26)',
		'EfctVariBass_Efct(7)%name(26)',
		'EfctVariBass_Efct(8)%name(26)',
		'EfctVariBass_Efct(9)%name(26)',
		'EfctVariBass_Efct(10)%name(26)',
		
		// EffectFxRotary
		'EfctVariBass_Efct(1)%name(27)',
		'EfctVariBass_Efct(2)%name(27)',
		'EfctVariBass_Efct(3)%name(27)',
		'EfctVariBass_Efct(4)%name(27)',
		'EfctVariBass_Efct(5)%name(27)',
		'EfctVariBass_Efct(6)%name(27)',
		'EfctVariBass_Efct(7)%name(27)',
		'EfctVariBass_Efct(8)%name(27)',
		'EfctVariBass_Efct(9)%name(27)',
		'EfctVariBass_Efct(10)%name(27)',
		
		// EffectFxSitarSim
		'EfctVariBass_Efct(1)%name(28)',
		'EfctVariBass_Efct(2)%name(28)',
		'EfctVariBass_Efct(3)%name(28)',
		'EfctVariBass_Efct(4)%name(28)',
		'EfctVariBass_Efct(5)%name(28)',
		'EfctVariBass_Efct(6)%name(28)',
		'EfctVariBass_Efct(7)%name(28)',
		'EfctVariBass_Efct(8)%name(28)',
		'EfctVariBass_Efct(9)%name(28)',
		'EfctVariBass_Efct(10)%name(28)',
		
		// EffectFxSlicer
		'EfctVariBass_Efct(1)%name(29)',
		'EfctVariBass_Efct(2)%name(29)',
		'EfctVariBass_Efct(3)%name(29)',
		'EfctVariBass_Efct(4)%name(29)',
		'EfctVariBass_Efct(5)%name(29)',
		'EfctVariBass_Efct(6)%name(29)',
		'EfctVariBass_Efct(7)%name(29)',
		'EfctVariBass_Efct(8)%name(29)',
		'EfctVariBass_Efct(9)%name(29)',
		'EfctVariBass_Efct(10)%name(29)',
		
		// EffectFxSlowGear
		'EfctVariBass_Efct(1)%name(30)',
		'EfctVariBass_Efct(2)%name(30)',
		'EfctVariBass_Efct(3)%name(30)',
		'EfctVariBass_Efct(4)%name(30)',
		'EfctVariBass_Efct(5)%name(30)',
		'EfctVariBass_Efct(6)%name(30)',
		'EfctVariBass_Efct(7)%name(30)',
		'EfctVariBass_Efct(8)%name(30)',
		'EfctVariBass_Efct(9)%name(30)',
		'EfctVariBass_Efct(10)%name(30)',
		
		// EffectFxSoundHold
		'EfctVariBass_Efct(1)%name(31)',
		'EfctVariBass_Efct(2)%name(31)',
		'EfctVariBass_Efct(3)%name(31)',
		'EfctVariBass_Efct(4)%name(31)',
		'EfctVariBass_Efct(5)%name(31)',
		'EfctVariBass_Efct(6)%name(31)',
		'EfctVariBass_Efct(7)%name(31)',
		'EfctVariBass_Efct(8)%name(31)',
		'EfctVariBass_Efct(9)%name(31)',
		'EfctVariBass_Efct(10)%name(31)',
		
		// EffectFxTWah
		'EfctVariBass_Efct(1)%name(32)',
		'EfctVariBass_Efct(2)%name(32)',
		'EfctVariBass_Efct(3)%name(32)',
		'EfctVariBass_Efct(4)%name(32)',
		'EfctVariBass_Efct(5)%name(32)',
		'EfctVariBass_Efct(6)%name(32)',
		'EfctVariBass_Efct(7)%name(32)',
		'EfctVariBass_Efct(8)%name(32)',
		'EfctVariBass_Efct(9)%name(32)',
		'EfctVariBass_Efct(10)%name(32)',
		
		// EffectFxTremolo
		'EfctVariBass_Efct(1)%name(33)',
		'EfctVariBass_Efct(2)%name(33)',
		'EfctVariBass_Efct(3)%name(33)',
		'EfctVariBass_Efct(4)%name(33)',
		'EfctVariBass_Efct(5)%name(33)',
		'EfctVariBass_Efct(6)%name(33)',
		'EfctVariBass_Efct(7)%name(33)',
		'EfctVariBass_Efct(8)%name(33)',
		'EfctVariBass_Efct(9)%name(33)',
		'EfctVariBass_Efct(10)%name(33)',
		
		// EffectFxVibrato
		'EfctVariBass_Efct(1)%name(34)',
		'EfctVariBass_Efct(2)%name(34)',
		'EfctVariBass_Efct(3)%name(34)',
		'EfctVariBass_Efct(4)%name(34)',
		'EfctVariBass_Efct(5)%name(34)',
		'EfctVariBass_Efct(6)%name(34)',
		'EfctVariBass_Efct(7)%name(34)',
		'EfctVariBass_Efct(8)%name(34)',
		'EfctVariBass_Efct(9)%name(34)',
		'EfctVariBass_Efct(10)%name(34)',
		
		// EffectFxWah
		'EfctVariBass_Efct(1)%name(35)',
		'EfctVariBass_Efct(2)%name(35)',
		'EfctVariBass_Efct(3)%name(35)',
		'EfctVariBass_Efct(4)%name(35)',
		'EfctVariBass_Efct(5)%name(35)',
		'EfctVariBass_Efct(6)%name(35)',
		'EfctVariBass_Efct(7)%name(35)',
		'EfctVariBass_Efct(8)%name(35)',
		'EfctVariBass_Efct(9)%name(35)',
		'EfctVariBass_Efct(10)%name(35)',
		
		// EffectReverb
		'EfctVariBass_Efct(1)%name(36)',
		'EfctVariBass_Efct(2)%name(36)',
		'EfctVariBass_Efct(3)%name(36)',
		'EfctVariBass_Efct(4)%name(36)',
		'EfctVariBass_Efct(5)%name(36)',
		'EfctVariBass_Efct(6)%name(36)',
		'EfctVariBass_Efct(7)%name(36)',
		'EfctVariBass_Efct(8)%name(36)',
		'EfctVariBass_Efct(9)%name(36)',
		'EfctVariBass_Efct(10)%name(36)',
		
		// EffectFv
		'EfctVariBass_Efct(1)%name(37)',
		'EfctVariBass_Efct(2)%name(37)',
		'EfctVariBass_Efct(3)%name(37)',
		'EfctVariBass_Efct(4)%name(37)',
		'EfctVariBass_Efct(5)%name(37)',
		'EfctVariBass_Efct(6)%name(37)',
		'EfctVariBass_Efct(7)%name(37)',
		'EfctVariBass_Efct(8)%name(37)',
		'EfctVariBass_Efct(9)%name(37)',
		'EfctVariBass_Efct(10)%name(37)',
	];
	this.parts = 0;
	this.readStart = function(midi) {};
	this.readStop = function(midi) {};
	this.syncStart = function(midi) {};
	this.syncStop = function(midi) {};
	this.previewStart = function(midi, part) {};
	this.previewStop = function(midi) {};
}