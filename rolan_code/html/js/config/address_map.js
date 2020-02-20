// ***** This file is created automatically *****

//
// address_map.js
//
// Copyright 2020 Roland Corporation. All rights reserved.
//

function AddressMap() {

	/* parameter definitions  */


// block
var SystemExCommon = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'AutoOff',	desc: 'AUTO OFF'}, // SystemExCommon_AutoOff:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 1,	init: 1,	factor: 1,	name: 'UsbDevDrvMode',	desc: 'DRIVER'}, // SystemExCommon_UsbDevDrvMode:0: 00.00.00.01
];
var SystemCommon = [
	{addr: 0x00000000,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'CurrentPatchNum',	desc: 'Patch Number'}, // SystemCommon_CurrentPatchNum:0: 00.00.00.00
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TunerType',	desc: 'Tuner Type'}, // SystemCommon_TunerType:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankChangeMode',	desc: 'BANK CHANGE MODE'}, // SystemCommon_BankChangeMode:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 99,	init: 0,	factor: 1,	name: 'BankExtentMin',	desc: 'BANK EXTENT MIN'}, // SystemCommon_BankExtentMin:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 99,	init: 99,	factor: 1,	name: 'BankExtentMax',	desc: 'BANK EXTENT MAX'}, // SystemCommon_BankExtentMax:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'BankUpDownSw',	desc: 'BANK UP\046DOWN SW'}, // SystemCommon_BankUpDownSw:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'GkVolHold',	desc: 'GK VOL HOLD'}, // SystemCommon_GkVolHold:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Exp1Hold',	desc: 'EXP1 HOLD'}, // SystemCommon_Exp1Hold:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Exp2Hold',	desc: 'EXP2 HOLD'}, // SystemCommon_Exp2Hold:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'KnobLock',	desc: 'KNOB LOCK'}, // SystemCommon_KnobLock:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'OutputLevelKnob',	desc: 'OUTPUT LEVEL'}, // SystemCommon_OutputLevelKnob:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 0,	factor: 1,	name: 'Knob1Setting',	desc: 'KNOB1 SETTING'}, // SystemCommon_Knob1Setting:0: 00.00.00.0e
	{addr: 0x00000012,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 2,	factor: 1,	name: 'Knob2Setting',	desc: 'KNOB2 SETTING'}, // SystemCommon_Knob2Setting:0: 00.00.00.12
	{addr: 0x00000016,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 3,	factor: 1,	name: 'Knob3Setting',	desc: 'KNOB3 SETTING'}, // SystemCommon_Knob3Setting:0: 00.00.00.16
	{addr: 0x0000001a,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 1,	factor: 1,	name: 'Knob4Setting',	desc: 'KNOB4 SETTING'}, // SystemCommon_Knob4Setting:0: 00.00.00.1a
	{addr: 0x0000001e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 12,	factor: 1,	name: 'Knob5Setting',	desc: 'KNOB5 SETTING'}, // SystemCommon_Knob5Setting:0: 00.00.00.1e
	{addr: 0x00000022,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 4,	factor: 1,	name: 'Knob6Setting',	desc: 'KNOB6 SETTING'}, // SystemCommon_Knob6Setting:0: 00.00.00.22
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 0,	factor: 1,	name: 'GkSet',	desc: 'GK SET'}, // SystemCommon_GkSet:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 0,	factor: 1,	name: 'NormalSet',	desc: 'NORMAL SET'}, // SystemCommon_NormalSet:0: 00.00.00.27
];
var SystemCommonBass = [
	{addr: 0x00000000,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'CurrentPatchNum',	desc: 'Patch Number'}, // SystemCommonBass_CurrentPatchNum:0: 00.00.00.00
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TunerType',	desc: 'Tuner Type'}, // SystemCommonBass_TunerType:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankChangeMode',	desc: 'BANK CHANGE MODE'}, // SystemCommonBass_BankChangeMode:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 99,	init: 0,	factor: 1,	name: 'BankExtentMin',	desc: 'BANK EXTENT MIN'}, // SystemCommonBass_BankExtentMin:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 99,	init: 99,	factor: 1,	name: 'BankExtentMax',	desc: 'BANK EXTENT MAX'}, // SystemCommonBass_BankExtentMax:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'BankUpDownSw',	desc: 'BANK UP\046DOWN SW'}, // SystemCommonBass_BankUpDownSw:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'GkVolHold',	desc: 'GK VOL HOLD'}, // SystemCommonBass_GkVolHold:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Exp1Hold',	desc: 'EXP1 HOLD'}, // SystemCommonBass_Exp1Hold:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Exp2Hold',	desc: 'EXP2 HOLD'}, // SystemCommonBass_Exp2Hold:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'KnobLock',	desc: 'KNOB LOCK'}, // SystemCommonBass_KnobLock:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'OutputLevelKnob',	desc: 'OUTPUT LEVEL'}, // SystemCommonBass_OutputLevelKnob:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 0,	factor: 1,	name: 'Knob1Setting',	desc: 'KNOB1 SETTING'}, // SystemCommonBass_Knob1Setting:0: 00.00.00.0e
	{addr: 0x00000012,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 2,	factor: 1,	name: 'Knob2Setting',	desc: 'KNOB2 SETTING'}, // SystemCommonBass_Knob2Setting:0: 00.00.00.12
	{addr: 0x00000016,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 3,	factor: 1,	name: 'Knob3Setting',	desc: 'KNOB3 SETTING'}, // SystemCommonBass_Knob3Setting:0: 00.00.00.16
	{addr: 0x0000001a,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 1,	factor: 1,	name: 'Knob4Setting',	desc: 'KNOB4 SETTING'}, // SystemCommonBass_Knob4Setting:0: 00.00.00.1a
	{addr: 0x0000001e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 12,	factor: 1,	name: 'Knob5Setting',	desc: 'KNOB5 SETTING'}, // SystemCommonBass_Knob5Setting:0: 00.00.00.1e
	{addr: 0x00000022,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1208,	init: 4,	factor: 1,	name: 'Knob6Setting',	desc: 'KNOB6 SETTING'}, // SystemCommonBass_Knob6Setting:0: 00.00.00.22
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 0,	factor: 1,	name: 'GkSet',	desc: 'GK SET'}, // SystemCommonBass_GkSet:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 0,	factor: 1,	name: 'NormalSet',	desc: 'NORMAL SET'}, // SystemCommonBass_NormalSet:0: 00.00.00.27
];
var SystemControl = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'Num1Function',	desc: 'Num1 Function'}, // SystemControl_Num1Function:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num1Mode',	desc: 'Num1 Mode'}, // SystemControl_Num1Mode:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'Num2Function',	desc: 'Num2 Function'}, // SystemControl_Num2Function:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num2Mode',	desc: 'Num2 Mode'}, // SystemControl_Num2Mode:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'Num3Function',	desc: 'Num3 Function'}, // SystemControl_Num3Function:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num3Mode',	desc: 'Num3 Mode'}, // SystemControl_Num3Mode:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'Num4Function',	desc: 'Num4 Function'}, // SystemControl_Num4Function:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num4Mode',	desc: 'Num4 Mode'}, // SystemControl_Num4Mode:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'BankDownFunction',	desc: 'BankDown Function'}, // SystemControl_BankDownFunction:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankDownMode',	desc: 'BankDown Mode'}, // SystemControl_BankDownMode:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'BankUpFunction',	desc: 'BankUp Function'}, // SystemControl_BankUpFunction:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankUpMode',	desc: 'BankUp Mode'}, // SystemControl_BankUpMode:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 110,	factor: 1,	name: 'Ctl1Function',	desc: 'Ctl1 Function'}, // SystemControl_Ctl1Function:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl1Mode',	desc: 'Ctl1 Mode'}, // SystemControl_Ctl1Mode:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 9,	factor: 1,	name: 'Ctl2Function',	desc: 'Ctl2 Function'}, // SystemControl_Ctl2Function:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl2Mode',	desc: 'Ctl2 Mode'}, // SystemControl_Ctl2Mode:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'Ctl3Function',	desc: 'Ctl3 Function'}, // SystemControl_Ctl3Function:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl3Mode',	desc: 'Ctl3 Mode'}, // SystemControl_Ctl3Mode:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'Ctl4Function',	desc: 'Ctl4 Function'}, // SystemControl_Ctl4Function:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl4Mode',	desc: 'Ctl4 Mode'}, // SystemControl_Ctl4Mode:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'Ctl5Function',	desc: 'Ctl5 Function'}, // SystemControl_Ctl5Function:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl5Mode',	desc: 'Ctl5 Mode'}, // SystemControl_Ctl5Mode:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'Ctl6Function',	desc: 'Ctl6 Function'}, // SystemControl_Ctl6Function:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl6Mode',	desc: 'Ctl6 Mode'}, // SystemControl_Ctl6Mode:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 0,	factor: 1,	name: 'CNumFunction',	desc: 'CNum Function'}, // SystemControl_CNumFunction:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CNumMode',	desc: 'CNum Mode'}, // SystemControl_CNumMode:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 0,	factor: 1,	name: 'Exp1Function',	desc: 'Exp1 Function'}, // SystemControl_Exp1Function:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 0,	factor: 1,	name: 'Exp2Function',	desc: 'Exp2 Function'}, // SystemControl_Exp2Function:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 0,	factor: 1,	name: 'GkVolFunction',	desc: 'GK VOL Function'}, // SystemControl_GkVolFunction:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 4,	factor: 1,	name: 'GkSw1Function',	desc: 'GK SW1 Function'}, // SystemControl_GkSw1Function:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'GkSw1Mode',	desc: 'GK SW1 Mode'}, // SystemControl_GkSw1Mode:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 3,	factor: 1,	name: 'GkSw2Function',	desc: 'GK SW2 Function'}, // SystemControl_GkSw2Function:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'GkSw2Mode',	desc: 'GK SW2 Mode'}, // SystemControl_GkSw2Mode:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num1Preference',	desc: 'Num1 Preference'}, // SystemControl_Num1Preference:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num2Preference',	desc: 'Num2 Preference'}, // SystemControl_Num2Preference:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num3Preference',	desc: 'Num3 Preference'}, // SystemControl_Num3Preference:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num4Preference',	desc: 'Num4 Preference'}, // SystemControl_Num4Preference:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankDownPreference',	desc: 'BankDown Preference'}, // SystemControl_BankDownPreference:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankUpPreference',	desc: 'BankUp Preference'}, // SystemControl_BankUpPreference:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl1Preference',	desc: 'Ctl1 Preference'}, // SystemControl_Ctl1Preference:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl2Preference',	desc: 'Ctl2 Preference'}, // SystemControl_Ctl2Preference:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl3Preference',	desc: 'Ctl3 Preference'}, // SystemControl_Ctl3Preference:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl4Preference',	desc: 'Ctl4 Preference'}, // SystemControl_Ctl4Preference:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl5Preference',	desc: 'Ctl5 Preference'}, // SystemControl_Ctl5Preference:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl6Preference',	desc: 'Ctl6 Preference'}, // SystemControl_Ctl6Preference:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CNumPreference',	desc: 'CNum Preference'}, // SystemControl_CNumPreference:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Exp1Preference',	desc: 'Exp1 Preference'}, // SystemControl_Exp1Preference:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Exp2Preference',	desc: 'Exp2 Preference'}, // SystemControl_Exp2Preference:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'GkVolPreference',	desc: 'GK VOL Preference'}, // SystemControl_GkVolPreference:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'GkSw1Preference',	desc: 'GK SW1 Preference'}, // SystemControl_GkSw1Preference:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'GkSw2Preference',	desc: 'GK SW2 Preference'}, // SystemControl_GkSw2Preference:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 16,	factor: 1,	name: 'ManualNum1Function',	desc: 'Manual Num1 Function'}, // SystemControl_ManualNum1Function:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum1Mode',	desc: 'Manual Num1 Mode'}, // SystemControl_ManualNum1Mode:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 17,	factor: 1,	name: 'ManualNum2Function',	desc: 'Manual Num2 Function'}, // SystemControl_ManualNum2Function:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum2Mode',	desc: 'Manual Num2 Mode'}, // SystemControl_ManualNum2Mode:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 18,	factor: 1,	name: 'ManualNum3Function',	desc: 'Manual Num3 Function'}, // SystemControl_ManualNum3Function:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum3Mode',	desc: 'Manual Num3 Mode'}, // SystemControl_ManualNum3Mode:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 23,	factor: 1,	name: 'ManualNum4Function',	desc: 'Manual Num4 Function'}, // SystemControl_ManualNum4Function:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum4Mode',	desc: 'Manual Num4 Mode'}, // SystemControl_ManualNum4Mode:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum1Preference',	desc: 'Manual Num1 Preference'}, // SystemControl_ManualNum1Preference:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum2Preference',	desc: 'Manual Num2 Preference'}, // SystemControl_ManualNum2Preference:0: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum3Preference',	desc: 'Manual Num3 Preference'}, // SystemControl_ManualNum3Preference:0: 00.00.00.3d
	{addr: 0x0000003e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum4Preference',	desc: 'Manual Num4 Preference'}, // SystemControl_ManualNum4Preference:0: 00.00.00.3e
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlMode',	desc: 'CONTROL MODE'}, // SystemControl_ControlMode:0: 00.00.00.3f
];
var SystemLed = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM1_OFF',	desc: 'NUM1 OFF'}, // SystemLed_NUM1_OFF:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM1_ON',	desc: 'NUM1 ON'}, // SystemLed_NUM1_ON:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM2_OFF',	desc: 'NUM2 OFF'}, // SystemLed_NUM2_OFF:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM2_ON',	desc: 'NUM2 ON'}, // SystemLed_NUM2_ON:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM3_OFF',	desc: 'NUM3 OFF'}, // SystemLed_NUM3_OFF:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM3_ON',	desc: 'NUM3 ON'}, // SystemLed_NUM3_ON:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM4_OFF',	desc: 'NUM4 OFF'}, // SystemLed_NUM4_OFF:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM4_ON',	desc: 'NUM4 ON'}, // SystemLed_NUM4_ON:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'BANKDOWN_OFF',	desc: 'BANKDOWN OFF'}, // SystemLed_BANKDOWN_OFF:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'BANKDOWN_ON',	desc: 'BANKDOWN ON'}, // SystemLed_BANKDOWN_ON:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'BANKUP_OFF',	desc: 'BANKUP OFF'}, // SystemLed_BANKUP_OFF:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'BANKUP_ON',	desc: 'BANKUP ON'}, // SystemLed_BANKUP_ON:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CTL1_OFF',	desc: 'CTL1 OFF'}, // SystemLed_CTL1_OFF:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CTL1_ON',	desc: 'CTL1 ON'}, // SystemLed_CTL1_ON:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CTL2_OFF',	desc: 'CTL2 OFF'}, // SystemLed_CTL2_OFF:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CTL2_ON',	desc: 'CTL2 ON'}, // SystemLed_CTL2_ON:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CNUM_OFF',	desc: 'CNUM OFF'}, // SystemLed_CNUM_OFF:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CNUM_ON',	desc: 'CNUM ON'}, // SystemLed_CNUM_ON:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num1Preference',	desc: 'NUM1 PREFERENCE'}, // SystemLed_Num1Preference:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num2Preference',	desc: 'NUM2 PREFERENCE'}, // SystemLed_Num2Preference:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num3Preference',	desc: 'NUM3 PREFERENCE'}, // SystemLed_Num3Preference:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Num4Preference',	desc: 'NUM4 PREFERENCE'}, // SystemLed_Num4Preference:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankDownPreference',	desc: 'BANKDOWN PREFERENCE'}, // SystemLed_BankDownPreference:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BankUpPreference',	desc: 'BANKUP PREFERENCE'}, // SystemLed_BankUpPreference:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl1Preference',	desc: 'CTL1 PREFERENCE'}, // SystemLed_Ctl1Preference:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Ctl2Preference',	desc: 'CTL2 PREFERENCE'}, // SystemLed_Ctl2Preference:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CNumPreference',	desc: 'CNUM PREFERENCE'}, // SystemLed_CNumPreference:0: 00.00.00.1a
];
var SystemMidi = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 0,	factor: 1,	name: 'RxChannel',	desc: 'RX CHANNEL'}, // SystemMidi_RxChannel:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'OmniMode',	desc: 'OMNI MODE'}, // SystemMidi_OmniMode:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 16,	factor: 1,	name: 'TxChannel',	desc: 'TX CHANNEL'}, // SystemMidi_TxChannel:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'SyncClock',	desc: 'SYNC CLOCK'}, // SystemMidi_SyncClock:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'MidiInThru',	desc: 'MIDI IN THRU'}, // SystemMidi_MidiInThru:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'UsbInThru',	desc: 'USB IN THRU'}, // SystemMidi_UsbInThru:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ClockOut',	desc: 'CLOCK OUT'}, // SystemMidi_ClockOut:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PcOut',	desc: 'PC OUT'}, // SystemMidi_PcOut:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TxPcMap',	desc: 'TX PC MAP'}, // SystemMidi_TxPcMap:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'RxPcMap',	desc: 'RX PC MAP'}, // SystemMidi_RxPcMap:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Num1Cc',	desc: 'NUM1 CC#'}, // SystemMidi_Num1Cc:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Num2Cc',	desc: 'NUM2 CC#'}, // SystemMidi_Num2Cc:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Num3Cc',	desc: 'NUM3 CC#'}, // SystemMidi_Num3Cc:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Num4Cc',	desc: 'NUM4 CC#'}, // SystemMidi_Num4Cc:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'BankdownCc',	desc: 'BANKDOWN CC#'}, // SystemMidi_BankdownCc:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'BankupCc',	desc: 'BANKUP CC#'}, // SystemMidi_BankupCc:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl1Cc',	desc: 'CTL1 CC#'}, // SystemMidi_Ctl1Cc:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl2Cc',	desc: 'CTL2 CC#'}, // SystemMidi_Ctl2Cc:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl3Cc',	desc: 'CTL3 CC#'}, // SystemMidi_Ctl3Cc:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl4Cc',	desc: 'CTL4 CC#'}, // SystemMidi_Ctl4Cc:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl5Cc',	desc: 'CTL5 CC#'}, // SystemMidi_Ctl5Cc:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Ctl6Cc',	desc: 'CTL6 CC#'}, // SystemMidi_Ctl6Cc:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Exp1Cc',	desc: 'EXP1 CC#'}, // SystemMidi_Exp1Cc:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'Exp2Cc',	desc: 'EXP2 CC#'}, // SystemMidi_Exp2Cc:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'GkVolCc',	desc: 'GK VOL CC#'}, // SystemMidi_GkVolCc:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'GkSw1Cc',	desc: 'GK SW1 CC#'}, // SystemMidi_GkSw1Cc:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'GkSw2Cc',	desc: 'GK SW2 CC#'}, // SystemMidi_GkSw2Cc:0: 00.00.00.1a
];
var SystemGkSetting = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(1)',	desc: 'NAME'}, // SystemGkSetting__Name:1: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(2)',	desc: 'NAME'}, // SystemGkSetting__Name:2: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(3)',	desc: 'NAME'}, // SystemGkSetting__Name:3: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(4)',	desc: 'NAME'}, // SystemGkSetting__Name:4: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(5)',	desc: 'NAME'}, // SystemGkSetting__Name:5: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(6)',	desc: 'NAME'}, // SystemGkSetting__Name:6: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(7)',	desc: 'NAME'}, // SystemGkSetting__Name:7: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(8)',	desc: 'NAME'}, // SystemGkSetting__Name:8: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'GkType',	desc: 'GK TYPE'}, // SystemGkSetting_GkType:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 162,	init: 161,	factor: 1,	name: 'Scale',	desc: 'SCALE'}, // SystemGkSetting_Scale:0: 00.00.00.09
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 16,	factor: 1,	name: 'Distance1',	desc: 'DISTANCE1'}, // SystemGkSetting_Distance1:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 18,	factor: 1,	name: 'Distance2',	desc: 'DISTANCE2'}, // SystemGkSetting_Distance2:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 20,	factor: 1,	name: 'Distance3',	desc: 'DISTANCE3'}, // SystemGkSetting_Distance3:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 18,	factor: 1,	name: 'Distance4',	desc: 'DISTANCE4'}, // SystemGkSetting_Distance4:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 20,	factor: 1,	name: 'Distance5',	desc: 'DISTANCE5'}, // SystemGkSetting_Distance5:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 22,	factor: 1,	name: 'Distance6',	desc: 'DISTANCE6'}, // SystemGkSetting_Distance6:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens1',	desc: 'SENS1'}, // SystemGkSetting_Sens1:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens2',	desc: 'SENS2'}, // SystemGkSetting_Sens2:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens3',	desc: 'SENS3'}, // SystemGkSetting_Sens3:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens4',	desc: 'SENS4'}, // SystemGkSetting_Sens4:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens5',	desc: 'SENS5'}, // SystemGkSetting_Sens5:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens6',	desc: 'SENS6'}, // SystemGkSetting_Sens6:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuPhase',	desc: 'PU PHASE'}, // SystemGkSetting_PuPhase:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuDirection',	desc: 'PU DIRECTION'}, // SystemGkSetting_PuDirection:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneL',	desc: 'PIEZO TONE L'}, // SystemGkSetting_PiezoToneL:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneH',	desc: 'PIEZO TONE H'}, // SystemGkSetting_PiezoToneH:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SwPosition',	desc: 'SW POSITION'}, // SystemGkSetting_SwPosition:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'NormalPuGain',	desc: 'NORMAL PU GAIN'}, // SystemGkSetting_NormalPuGain:0: 00.00.00.1c
];
var SystemGkSettingBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(1)',	desc: 'NAME'}, // SystemGkSettingBass__Name:1: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(2)',	desc: 'NAME'}, // SystemGkSettingBass__Name:2: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(3)',	desc: 'NAME'}, // SystemGkSettingBass__Name:3: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(4)',	desc: 'NAME'}, // SystemGkSettingBass__Name:4: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(5)',	desc: 'NAME'}, // SystemGkSettingBass__Name:5: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(6)',	desc: 'NAME'}, // SystemGkSettingBass__Name:6: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(7)',	desc: 'NAME'}, // SystemGkSettingBass__Name:7: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(8)',	desc: 'NAME'}, // SystemGkSettingBass__Name:8: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'GkType',	desc: 'GK TYPE'}, // SystemGkSettingBass_GkType:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 234,	init: 233,	factor: 1,	name: 'Scale',	desc: 'SCALE'}, // SystemGkSettingBass_Scale:0: 00.00.00.09
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 7,	factor: 1,	name: 'GkPuPosition',	desc: 'GK PU POSITION'}, // SystemGkSettingBass_GkPuPosition:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'DistanceH',	desc: 'DISTANCE HiC'}, // SystemGkSettingBass_DistanceH:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Distance1',	desc: 'DISTANCE 1st'}, // SystemGkSettingBass_Distance1:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Distance2',	desc: 'DISTANCE 2nd'}, // SystemGkSettingBass_Distance2:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Distance3',	desc: 'DISTANCE 3rd'}, // SystemGkSettingBass_Distance3:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Distance4',	desc: 'DISTANCE 4th'}, // SystemGkSettingBass_Distance4:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 49,	factor: 1,	name: 'DistanceL',	desc: 'DISTANCE LowB'}, // SystemGkSettingBass_DistanceL:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'SensH',	desc: 'SENS HiC'}, // SystemGkSettingBass_SensH:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens1',	desc: 'SENS 1st'}, // SystemGkSettingBass_Sens1:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens2',	desc: 'SENS 2nd'}, // SystemGkSettingBass_Sens2:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens3',	desc: 'SENS 3rd'}, // SystemGkSettingBass_Sens3:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens4',	desc: 'SENS 4th'}, // SystemGkSettingBass_Sens4:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'SensL',	desc: 'SENS LowB'}, // SystemGkSettingBass_SensL:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuPhase',	desc: 'PU PHASE'}, // SystemGkSettingBass_PuPhase:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuDirection',	desc: 'PU DIRECTION'}, // SystemGkSettingBass_PuDirection:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneL',	desc: 'PIEZO TONE L'}, // SystemGkSettingBass_PiezoToneL:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneH',	desc: 'PIEZO TONE H'}, // SystemGkSettingBass_PiezoToneH:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SwPosition',	desc: 'SW POSITION'}, // SystemGkSettingBass_SwPosition:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'NormalPuGain',	desc: 'NORMAL PU GAIN'}, // SystemGkSettingBass_NormalPuGain:0: 00.00.00.1d
];
var SystemNormalSetting = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(1)',	desc: 'NAME'}, // SystemNormalSetting__Name:1: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(2)',	desc: 'NAME'}, // SystemNormalSetting__Name:2: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(3)',	desc: 'NAME'}, // SystemNormalSetting__Name:3: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(4)',	desc: 'NAME'}, // SystemNormalSetting__Name:4: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(5)',	desc: 'NAME'}, // SystemNormalSetting__Name:5: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(6)',	desc: 'NAME'}, // SystemNormalSetting__Name:6: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(7)',	desc: 'NAME'}, // SystemNormalSetting__Name:7: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 32,	max: 126,	init: 32,	factor: 1,	name: '_Name(8)',	desc: 'NAME'}, // SystemNormalSetting__Name:8: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CompSw',	desc: 'COMPRESSOR SW'}, // SystemNormalSetting_CompSw:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // SystemNormalSetting_Attack:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sustain',	desc: 'SUSTAIN'}, // SystemNormalSetting_Sustain:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // SystemNormalSetting_Level:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // SystemNormalSetting_Sens:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Low',	desc: 'LOW'}, // SystemNormalSetting_Low:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'High',	desc: 'HIGH'}, // SystemNormalSetting_High:0: 00.00.00.0e
];
var PcmapPc = [
	{addr: 0x00000000,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__0',	desc: 'Program Change'}, // PcmapPc_Pc:0: 00.00.00.00
	{addr: 0x00000004,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__1',	desc: 'Program Change'}, // PcmapPc_Pc:1: 00.00.00.04
	{addr: 0x00000008,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__2',	desc: 'Program Change'}, // PcmapPc_Pc:2: 00.00.00.08
	{addr: 0x0000000c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__3',	desc: 'Program Change'}, // PcmapPc_Pc:3: 00.00.00.0c
	{addr: 0x00000010,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__4',	desc: 'Program Change'}, // PcmapPc_Pc:4: 00.00.00.10
	{addr: 0x00000014,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__5',	desc: 'Program Change'}, // PcmapPc_Pc:5: 00.00.00.14
	{addr: 0x00000018,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__6',	desc: 'Program Change'}, // PcmapPc_Pc:6: 00.00.00.18
	{addr: 0x0000001c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__7',	desc: 'Program Change'}, // PcmapPc_Pc:7: 00.00.00.1c
	{addr: 0x00000020,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__8',	desc: 'Program Change'}, // PcmapPc_Pc:8: 00.00.00.20
	{addr: 0x00000024,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__9',	desc: 'Program Change'}, // PcmapPc_Pc:9: 00.00.00.24
	{addr: 0x00000028,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__10',	desc: 'Program Change'}, // PcmapPc_Pc:10: 00.00.00.28
	{addr: 0x0000002c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__11',	desc: 'Program Change'}, // PcmapPc_Pc:11: 00.00.00.2c
	{addr: 0x00000030,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__12',	desc: 'Program Change'}, // PcmapPc_Pc:12: 00.00.00.30
	{addr: 0x00000034,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__13',	desc: 'Program Change'}, // PcmapPc_Pc:13: 00.00.00.34
	{addr: 0x00000038,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__14',	desc: 'Program Change'}, // PcmapPc_Pc:14: 00.00.00.38
	{addr: 0x0000003c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__15',	desc: 'Program Change'}, // PcmapPc_Pc:15: 00.00.00.3c
	{addr: 0x00000040,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__16',	desc: 'Program Change'}, // PcmapPc_Pc:16: 00.00.00.40
	{addr: 0x00000044,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__17',	desc: 'Program Change'}, // PcmapPc_Pc:17: 00.00.00.44
	{addr: 0x00000048,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__18',	desc: 'Program Change'}, // PcmapPc_Pc:18: 00.00.00.48
	{addr: 0x0000004c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__19',	desc: 'Program Change'}, // PcmapPc_Pc:19: 00.00.00.4c
	{addr: 0x00000050,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__20',	desc: 'Program Change'}, // PcmapPc_Pc:20: 00.00.00.50
	{addr: 0x00000054,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__21',	desc: 'Program Change'}, // PcmapPc_Pc:21: 00.00.00.54
	{addr: 0x00000058,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__22',	desc: 'Program Change'}, // PcmapPc_Pc:22: 00.00.00.58
	{addr: 0x0000005c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__23',	desc: 'Program Change'}, // PcmapPc_Pc:23: 00.00.00.5c
	{addr: 0x00000060,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__24',	desc: 'Program Change'}, // PcmapPc_Pc:24: 00.00.00.60
	{addr: 0x00000064,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__25',	desc: 'Program Change'}, // PcmapPc_Pc:25: 00.00.00.64
	{addr: 0x00000068,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__26',	desc: 'Program Change'}, // PcmapPc_Pc:26: 00.00.00.68
	{addr: 0x0000006c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__27',	desc: 'Program Change'}, // PcmapPc_Pc:27: 00.00.00.6c
	{addr: 0x00000070,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__28',	desc: 'Program Change'}, // PcmapPc_Pc:28: 00.00.00.70
	{addr: 0x00000074,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__29',	desc: 'Program Change'}, // PcmapPc_Pc:29: 00.00.00.74
	{addr: 0x00000078,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__30',	desc: 'Program Change'}, // PcmapPc_Pc:30: 00.00.00.78
	{addr: 0x0000007c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__31',	desc: 'Program Change'}, // PcmapPc_Pc:31: 00.00.00.7c
	{addr: 0x00000100,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__32',	desc: 'Program Change'}, // PcmapPc_Pc:32: 00.00.01.00
	{addr: 0x00000104,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__33',	desc: 'Program Change'}, // PcmapPc_Pc:33: 00.00.01.04
	{addr: 0x00000108,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__34',	desc: 'Program Change'}, // PcmapPc_Pc:34: 00.00.01.08
	{addr: 0x0000010c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__35',	desc: 'Program Change'}, // PcmapPc_Pc:35: 00.00.01.0c
	{addr: 0x00000110,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__36',	desc: 'Program Change'}, // PcmapPc_Pc:36: 00.00.01.10
	{addr: 0x00000114,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__37',	desc: 'Program Change'}, // PcmapPc_Pc:37: 00.00.01.14
	{addr: 0x00000118,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__38',	desc: 'Program Change'}, // PcmapPc_Pc:38: 00.00.01.18
	{addr: 0x0000011c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__39',	desc: 'Program Change'}, // PcmapPc_Pc:39: 00.00.01.1c
	{addr: 0x00000120,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__40',	desc: 'Program Change'}, // PcmapPc_Pc:40: 00.00.01.20
	{addr: 0x00000124,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__41',	desc: 'Program Change'}, // PcmapPc_Pc:41: 00.00.01.24
	{addr: 0x00000128,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__42',	desc: 'Program Change'}, // PcmapPc_Pc:42: 00.00.01.28
	{addr: 0x0000012c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__43',	desc: 'Program Change'}, // PcmapPc_Pc:43: 00.00.01.2c
	{addr: 0x00000130,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__44',	desc: 'Program Change'}, // PcmapPc_Pc:44: 00.00.01.30
	{addr: 0x00000134,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__45',	desc: 'Program Change'}, // PcmapPc_Pc:45: 00.00.01.34
	{addr: 0x00000138,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__46',	desc: 'Program Change'}, // PcmapPc_Pc:46: 00.00.01.38
	{addr: 0x0000013c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__47',	desc: 'Program Change'}, // PcmapPc_Pc:47: 00.00.01.3c
	{addr: 0x00000140,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__48',	desc: 'Program Change'}, // PcmapPc_Pc:48: 00.00.01.40
	{addr: 0x00000144,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__49',	desc: 'Program Change'}, // PcmapPc_Pc:49: 00.00.01.44
	{addr: 0x00000148,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__50',	desc: 'Program Change'}, // PcmapPc_Pc:50: 00.00.01.48
	{addr: 0x0000014c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__51',	desc: 'Program Change'}, // PcmapPc_Pc:51: 00.00.01.4c
	{addr: 0x00000150,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__52',	desc: 'Program Change'}, // PcmapPc_Pc:52: 00.00.01.50
	{addr: 0x00000154,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__53',	desc: 'Program Change'}, // PcmapPc_Pc:53: 00.00.01.54
	{addr: 0x00000158,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__54',	desc: 'Program Change'}, // PcmapPc_Pc:54: 00.00.01.58
	{addr: 0x0000015c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__55',	desc: 'Program Change'}, // PcmapPc_Pc:55: 00.00.01.5c
	{addr: 0x00000160,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__56',	desc: 'Program Change'}, // PcmapPc_Pc:56: 00.00.01.60
	{addr: 0x00000164,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__57',	desc: 'Program Change'}, // PcmapPc_Pc:57: 00.00.01.64
	{addr: 0x00000168,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__58',	desc: 'Program Change'}, // PcmapPc_Pc:58: 00.00.01.68
	{addr: 0x0000016c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__59',	desc: 'Program Change'}, // PcmapPc_Pc:59: 00.00.01.6c
	{addr: 0x00000170,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__60',	desc: 'Program Change'}, // PcmapPc_Pc:60: 00.00.01.70
	{addr: 0x00000174,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__61',	desc: 'Program Change'}, // PcmapPc_Pc:61: 00.00.01.74
	{addr: 0x00000178,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__62',	desc: 'Program Change'}, // PcmapPc_Pc:62: 00.00.01.78
	{addr: 0x0000017c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__63',	desc: 'Program Change'}, // PcmapPc_Pc:63: 00.00.01.7c
	{addr: 0x00000200,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__64',	desc: 'Program Change'}, // PcmapPc_Pc:64: 00.00.02.00
	{addr: 0x00000204,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__65',	desc: 'Program Change'}, // PcmapPc_Pc:65: 00.00.02.04
	{addr: 0x00000208,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__66',	desc: 'Program Change'}, // PcmapPc_Pc:66: 00.00.02.08
	{addr: 0x0000020c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__67',	desc: 'Program Change'}, // PcmapPc_Pc:67: 00.00.02.0c
	{addr: 0x00000210,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__68',	desc: 'Program Change'}, // PcmapPc_Pc:68: 00.00.02.10
	{addr: 0x00000214,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__69',	desc: 'Program Change'}, // PcmapPc_Pc:69: 00.00.02.14
	{addr: 0x00000218,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__70',	desc: 'Program Change'}, // PcmapPc_Pc:70: 00.00.02.18
	{addr: 0x0000021c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__71',	desc: 'Program Change'}, // PcmapPc_Pc:71: 00.00.02.1c
	{addr: 0x00000220,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__72',	desc: 'Program Change'}, // PcmapPc_Pc:72: 00.00.02.20
	{addr: 0x00000224,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__73',	desc: 'Program Change'}, // PcmapPc_Pc:73: 00.00.02.24
	{addr: 0x00000228,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__74',	desc: 'Program Change'}, // PcmapPc_Pc:74: 00.00.02.28
	{addr: 0x0000022c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__75',	desc: 'Program Change'}, // PcmapPc_Pc:75: 00.00.02.2c
	{addr: 0x00000230,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__76',	desc: 'Program Change'}, // PcmapPc_Pc:76: 00.00.02.30
	{addr: 0x00000234,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__77',	desc: 'Program Change'}, // PcmapPc_Pc:77: 00.00.02.34
	{addr: 0x00000238,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__78',	desc: 'Program Change'}, // PcmapPc_Pc:78: 00.00.02.38
	{addr: 0x0000023c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__79',	desc: 'Program Change'}, // PcmapPc_Pc:79: 00.00.02.3c
	{addr: 0x00000240,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__80',	desc: 'Program Change'}, // PcmapPc_Pc:80: 00.00.02.40
	{addr: 0x00000244,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__81',	desc: 'Program Change'}, // PcmapPc_Pc:81: 00.00.02.44
	{addr: 0x00000248,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__82',	desc: 'Program Change'}, // PcmapPc_Pc:82: 00.00.02.48
	{addr: 0x0000024c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__83',	desc: 'Program Change'}, // PcmapPc_Pc:83: 00.00.02.4c
	{addr: 0x00000250,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__84',	desc: 'Program Change'}, // PcmapPc_Pc:84: 00.00.02.50
	{addr: 0x00000254,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__85',	desc: 'Program Change'}, // PcmapPc_Pc:85: 00.00.02.54
	{addr: 0x00000258,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__86',	desc: 'Program Change'}, // PcmapPc_Pc:86: 00.00.02.58
	{addr: 0x0000025c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__87',	desc: 'Program Change'}, // PcmapPc_Pc:87: 00.00.02.5c
	{addr: 0x00000260,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__88',	desc: 'Program Change'}, // PcmapPc_Pc:88: 00.00.02.60
	{addr: 0x00000264,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__89',	desc: 'Program Change'}, // PcmapPc_Pc:89: 00.00.02.64
	{addr: 0x00000268,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__90',	desc: 'Program Change'}, // PcmapPc_Pc:90: 00.00.02.68
	{addr: 0x0000026c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__91',	desc: 'Program Change'}, // PcmapPc_Pc:91: 00.00.02.6c
	{addr: 0x00000270,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__92',	desc: 'Program Change'}, // PcmapPc_Pc:92: 00.00.02.70
	{addr: 0x00000274,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__93',	desc: 'Program Change'}, // PcmapPc_Pc:93: 00.00.02.74
	{addr: 0x00000278,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__94',	desc: 'Program Change'}, // PcmapPc_Pc:94: 00.00.02.78
	{addr: 0x0000027c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__95',	desc: 'Program Change'}, // PcmapPc_Pc:95: 00.00.02.7c
	{addr: 0x00000300,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__96',	desc: 'Program Change'}, // PcmapPc_Pc:96: 00.00.03.00
	{addr: 0x00000304,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__97',	desc: 'Program Change'}, // PcmapPc_Pc:97: 00.00.03.04
	{addr: 0x00000308,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__98',	desc: 'Program Change'}, // PcmapPc_Pc:98: 00.00.03.08
	{addr: 0x0000030c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__99',	desc: 'Program Change'}, // PcmapPc_Pc:99: 00.00.03.0c
	{addr: 0x00000310,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__100',	desc: 'Program Change'}, // PcmapPc_Pc:100: 00.00.03.10
	{addr: 0x00000314,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__101',	desc: 'Program Change'}, // PcmapPc_Pc:101: 00.00.03.14
	{addr: 0x00000318,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__102',	desc: 'Program Change'}, // PcmapPc_Pc:102: 00.00.03.18
	{addr: 0x0000031c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__103',	desc: 'Program Change'}, // PcmapPc_Pc:103: 00.00.03.1c
	{addr: 0x00000320,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__104',	desc: 'Program Change'}, // PcmapPc_Pc:104: 00.00.03.20
	{addr: 0x00000324,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__105',	desc: 'Program Change'}, // PcmapPc_Pc:105: 00.00.03.24
	{addr: 0x00000328,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__106',	desc: 'Program Change'}, // PcmapPc_Pc:106: 00.00.03.28
	{addr: 0x0000032c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__107',	desc: 'Program Change'}, // PcmapPc_Pc:107: 00.00.03.2c
	{addr: 0x00000330,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__108',	desc: 'Program Change'}, // PcmapPc_Pc:108: 00.00.03.30
	{addr: 0x00000334,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__109',	desc: 'Program Change'}, // PcmapPc_Pc:109: 00.00.03.34
	{addr: 0x00000338,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__110',	desc: 'Program Change'}, // PcmapPc_Pc:110: 00.00.03.38
	{addr: 0x0000033c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__111',	desc: 'Program Change'}, // PcmapPc_Pc:111: 00.00.03.3c
	{addr: 0x00000340,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__112',	desc: 'Program Change'}, // PcmapPc_Pc:112: 00.00.03.40
	{addr: 0x00000344,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__113',	desc: 'Program Change'}, // PcmapPc_Pc:113: 00.00.03.44
	{addr: 0x00000348,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__114',	desc: 'Program Change'}, // PcmapPc_Pc:114: 00.00.03.48
	{addr: 0x0000034c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__115',	desc: 'Program Change'}, // PcmapPc_Pc:115: 00.00.03.4c
	{addr: 0x00000350,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__116',	desc: 'Program Change'}, // PcmapPc_Pc:116: 00.00.03.50
	{addr: 0x00000354,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__117',	desc: 'Program Change'}, // PcmapPc_Pc:117: 00.00.03.54
	{addr: 0x00000358,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__118',	desc: 'Program Change'}, // PcmapPc_Pc:118: 00.00.03.58
	{addr: 0x0000035c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__119',	desc: 'Program Change'}, // PcmapPc_Pc:119: 00.00.03.5c
	{addr: 0x00000360,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__120',	desc: 'Program Change'}, // PcmapPc_Pc:120: 00.00.03.60
	{addr: 0x00000364,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__121',	desc: 'Program Change'}, // PcmapPc_Pc:121: 00.00.03.64
	{addr: 0x00000368,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__122',	desc: 'Program Change'}, // PcmapPc_Pc:122: 00.00.03.68
	{addr: 0x0000036c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__123',	desc: 'Program Change'}, // PcmapPc_Pc:123: 00.00.03.6c
	{addr: 0x00000370,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__124',	desc: 'Program Change'}, // PcmapPc_Pc:124: 00.00.03.70
	{addr: 0x00000374,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__125',	desc: 'Program Change'}, // PcmapPc_Pc:125: 00.00.03.74
	{addr: 0x00000378,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__126',	desc: 'Program Change'}, // PcmapPc_Pc:126: 00.00.03.78
	{addr: 0x0000037c,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 399,	init: 0,	factor: 1,	name: 'Pc__127',	desc: 'Program Change'}, // PcmapPc_Pc:127: 00.00.03.7c
];
var SetupTemp = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst1Variation',	desc: 'INST VARIATION'}, // SetupTemp_Inst1Variation:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst2Variation',	desc: 'INST VARIATION'}, // SetupTemp_Inst2Variation:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst3Variation',	desc: 'INST VARIATION'}, // SetupTemp_Inst3Variation:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst1LfoVariation',	desc: 'LFO VARIATION'}, // SetupTemp_Inst1LfoVariation:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst2LfoVariation',	desc: 'LFO VARIATION'}, // SetupTemp_Inst2LfoVariation:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst3LfoVariation',	desc: 'LFO VARIATION'}, // SetupTemp_Inst3LfoVariation:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst1SeqVariation',	desc: 'SEQUENCER VARIATION'}, // SetupTemp_Inst1SeqVariation:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst2SeqVariation',	desc: 'SEQUENCER VARIATION'}, // SetupTemp_Inst2SeqVariation:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 51,	init: 1,	factor: 1,	name: 'Inst3SeqVariation',	desc: 'SEQUENCER VARIATION'}, // SetupTemp_Inst3SeqVariation:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'Inst1AmpVariation',	desc: 'AMP VARIATION'}, // SetupTemp_Inst1AmpVariation:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'Inst2AmpVariation',	desc: 'AMP VARIATION'}, // SetupTemp_Inst2AmpVariation:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'Inst3AmpVariation',	desc: 'AMP VARIATION'}, // SetupTemp_Inst3AmpVariation:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(1)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:1: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(2)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:2: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(3)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:3: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(4)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:4: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(5)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:5: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(6)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:6: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(7)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:7: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(8)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:8: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(9)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:9: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(10)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:10: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(11)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:11: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(12)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:12: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(13)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:13: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(14)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:14: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(15)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:15: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(16)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:16: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(17)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:17: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(18)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:18: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(19)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:19: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(20)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:20: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(21)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:21: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(22)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:22: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(23)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:23: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(24)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:24: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(25)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:25: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(26)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:26: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(27)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:27: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(28)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:28: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(29)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:29: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(30)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:30: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(31)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:31: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(32)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:32: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(33)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:33: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(34)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:34: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(35)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:35: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(36)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:36: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(37)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:37: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(38)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:38: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(39)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:39: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(40)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:40: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(41)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:41: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(42)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:42: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(43)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:43: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(44)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:44: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(45)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:45: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(46)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:46: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(47)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:47: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(48)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:48: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(49)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:49: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(50)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:50: 00.00.00.3d
	{addr: 0x0000003e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(51)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:51: 00.00.00.3e
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(52)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:52: 00.00.00.3f
	{addr: 0x00000040,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(53)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:53: 00.00.00.40
	{addr: 0x00000041,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(54)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:54: 00.00.00.41
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(55)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:55: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(56)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:56: 00.00.00.43
	{addr: 0x00000044,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(57)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:57: 00.00.00.44
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(58)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:58: 00.00.00.45
	{addr: 0x00000046,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(59)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:59: 00.00.00.46
	{addr: 0x00000047,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(60)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:60: 00.00.00.47
	{addr: 0x00000048,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(61)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:61: 00.00.00.48
	{addr: 0x00000049,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(62)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:62: 00.00.00.49
	{addr: 0x0000004a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(63)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:63: 00.00.00.4a
	{addr: 0x0000004b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(64)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:64: 00.00.00.4b
	{addr: 0x0000004c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(65)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:65: 00.00.00.4c
	{addr: 0x0000004d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(66)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:66: 00.00.00.4d
	{addr: 0x0000004e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(67)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:67: 00.00.00.4e
	{addr: 0x0000004f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(68)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:68: 00.00.00.4f
	{addr: 0x00000050,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(69)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:69: 00.00.00.50
	{addr: 0x00000051,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(70)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:70: 00.00.00.51
	{addr: 0x00000052,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(71)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:71: 00.00.00.52
	{addr: 0x00000053,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(72)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:72: 00.00.00.53
	{addr: 0x00000054,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(73)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:73: 00.00.00.54
	{addr: 0x00000055,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(74)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:74: 00.00.00.55
	{addr: 0x00000056,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(75)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:75: 00.00.00.56
	{addr: 0x00000057,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(76)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:76: 00.00.00.57
	{addr: 0x00000058,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(77)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:77: 00.00.00.58
	{addr: 0x00000059,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(78)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:78: 00.00.00.59
	{addr: 0x0000005a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(79)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:79: 00.00.00.5a
	{addr: 0x0000005b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(80)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:80: 00.00.00.5b
	{addr: 0x0000005c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(81)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:81: 00.00.00.5c
	{addr: 0x0000005d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(82)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:82: 00.00.00.5d
	{addr: 0x0000005e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(83)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:83: 00.00.00.5e
	{addr: 0x0000005f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(84)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:84: 00.00.00.5f
	{addr: 0x00000060,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(85)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:85: 00.00.00.60
	{addr: 0x00000061,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(86)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:86: 00.00.00.61
	{addr: 0x00000062,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(87)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:87: 00.00.00.62
	{addr: 0x00000063,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(88)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:88: 00.00.00.63
	{addr: 0x00000064,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(89)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:89: 00.00.00.64
	{addr: 0x00000065,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(90)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:90: 00.00.00.65
	{addr: 0x00000066,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(91)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:91: 00.00.00.66
	{addr: 0x00000067,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(92)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:92: 00.00.00.67
	{addr: 0x00000068,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(93)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:93: 00.00.00.68
	{addr: 0x00000069,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(94)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:94: 00.00.00.69
	{addr: 0x0000006a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(95)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:95: 00.00.00.6a
	{addr: 0x0000006b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(96)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:96: 00.00.00.6b
	{addr: 0x0000006c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(97)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:97: 00.00.00.6c
	{addr: 0x0000006d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(98)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:98: 00.00.00.6d
	{addr: 0x0000006e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(99)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:99: 00.00.00.6e
	{addr: 0x0000006f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(100)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:100: 00.00.00.6f
	{addr: 0x00000070,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(101)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:101: 00.00.00.70
	{addr: 0x00000071,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(102)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:102: 00.00.00.71
	{addr: 0x00000072,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(103)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:103: 00.00.00.72
	{addr: 0x00000073,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(104)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:104: 00.00.00.73
	{addr: 0x00000074,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(105)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:105: 00.00.00.74
	{addr: 0x00000075,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(106)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:106: 00.00.00.75
	{addr: 0x00000076,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(107)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:107: 00.00.00.76
	{addr: 0x00000077,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(108)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:108: 00.00.00.77
	{addr: 0x00000078,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(109)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:109: 00.00.00.78
	{addr: 0x00000079,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(110)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:110: 00.00.00.79
	{addr: 0x0000007a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(111)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:111: 00.00.00.7a
	{addr: 0x0000007b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(112)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:112: 00.00.00.7b
	{addr: 0x0000007c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(113)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:113: 00.00.00.7c
	{addr: 0x0000007d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(114)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:114: 00.00.00.7d
	{addr: 0x0000007e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(115)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:115: 00.00.00.7e
	{addr: 0x0000007f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(116)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:116: 00.00.00.7f
	{addr: 0x00000100,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(117)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:117: 00.00.01.00
	{addr: 0x00000101,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(118)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:118: 00.00.01.01
	{addr: 0x00000102,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(119)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:119: 00.00.01.02
	{addr: 0x00000103,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(120)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:120: 00.00.01.03
	{addr: 0x00000104,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(121)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:121: 00.00.01.04
	{addr: 0x00000105,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(122)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:122: 00.00.01.05
	{addr: 0x00000106,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(123)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:123: 00.00.01.06
	{addr: 0x00000107,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'EfctVariation(124)',	desc: 'EFFECT VARIATION'}, // SetupTemp_EfctVariation:124: 00.00.01.07
	{addr: 0x00000108,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'BTSDevelopMode',	desc: 'BTS DEVELOP MODE'}, // SetupTemp_BTSDevelopMode:0: 00.00.01.08
];
var PatchCommon = [
	{addr: 0x00000000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Name',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlNum1Function',	desc: 'Num1 Function'}, // PatchCommon_ControlNum1Function:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlNum1Mode',	desc: 'Num1 Mode'}, // PatchCommon_ControlNum1Mode:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlNum2Function',	desc: 'Num2 Function'}, // PatchCommon_ControlNum2Function:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlNum2Mode',	desc: 'Num2 Mode'}, // PatchCommon_ControlNum2Mode:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlNum3Function',	desc: 'Num3 Function'}, // PatchCommon_ControlNum3Function:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlNum3Mode',	desc: 'Num3 Mode'}, // PatchCommon_ControlNum3Mode:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlNum4Function',	desc: 'Num4 Function'}, // PatchCommon_ControlNum4Function:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlNum4Mode',	desc: 'Num4 Mode'}, // PatchCommon_ControlNum4Mode:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlBankDownFunction',	desc: 'BankDown Function'}, // PatchCommon_ControlBankDownFunction:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlBankDownMode',	desc: 'BankDown Mode'}, // PatchCommon_ControlBankDownMode:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 1,	factor: 1,	name: 'ControlBankUpFunction',	desc: 'BankUp Function'}, // PatchCommon_ControlBankUpFunction:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlBankUpMode',	desc: 'BankUp Mode'}, // PatchCommon_ControlBankUpMode:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 110,	factor: 1,	name: 'ControlCtl1Function',	desc: 'Ctl1 Function'}, // PatchCommon_ControlCtl1Function:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl1Mode',	desc: 'Ctl1 Mode'}, // PatchCommon_ControlCtl1Mode:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 9,	factor: 1,	name: 'ControlCtl2Function',	desc: 'Ctl2 Function'}, // PatchCommon_ControlCtl2Function:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl2Mode',	desc: 'Ctl2 Mode'}, // PatchCommon_ControlCtl2Mode:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'ControlCtl3Function',	desc: 'Ctl3 Function'}, // PatchCommon_ControlCtl3Function:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl3Mode',	desc: 'Ctl3 Mode'}, // PatchCommon_ControlCtl3Mode:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'ControlCtl4Function',	desc: 'Ctl4 Function'}, // PatchCommon_ControlCtl4Function:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl4Mode',	desc: 'Ctl4 Mode'}, // PatchCommon_ControlCtl4Mode:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'ControlCtl5Function',	desc: 'Ctl5 Function'}, // PatchCommon_ControlCtl5Function:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl5Mode',	desc: 'Ctl5 Mode'}, // PatchCommon_ControlCtl5Mode:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 0,	factor: 1,	name: 'ControlCtl6Function',	desc: 'Ctl6 Function'}, // PatchCommon_ControlCtl6Function:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCtl6Mode',	desc: 'Ctl6 Mode'}, // PatchCommon_ControlCtl6Mode:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 0,	factor: 1,	name: 'ControlCNumFunction',	desc: 'CNum Function'}, // PatchCommon_ControlCNumFunction:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlCNumMode',	desc: 'CNum Mode'}, // PatchCommon_ControlCNumMode:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 0,	factor: 1,	name: 'ControlExp1Function',	desc: 'Exp1 Function'}, // PatchCommon_ControlExp1Function:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 0,	factor: 1,	name: 'ControlExp2Function',	desc: 'Exp2 Function'}, // PatchCommon_ControlExp2Function:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 45,	init: 8,	factor: 1,	name: 'ControlGkVolFunction',	desc: 'Gk Vol Function'}, // PatchCommon_ControlGkVolFunction:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 4,	factor: 1,	name: 'ControlGkSw1Function',	desc: 'Gk Sw1 Function'}, // PatchCommon_ControlGkSw1Function:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlGkSw1Mode',	desc: 'Gk Sw1 Mode'}, // PatchCommon_ControlGkSw1Mode:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 3,	factor: 1,	name: 'ControlGkSw2Function',	desc: 'Gk Sw2 Function'}, // PatchCommon_ControlGkSw2Function:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ControlGkSw2Mode',	desc: 'Gk Sw2 Mode'}, // PatchCommon_ControlGkSw2Mode:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 16,	factor: 1,	name: 'ManualNum1Function',	desc: 'Manual Num1 Function'}, // PatchCommon_ManualNum1Function:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum1Mode',	desc: 'Manual Num1 Mode'}, // PatchCommon_ManualNum1Mode:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 17,	factor: 1,	name: 'ManualNum2Function',	desc: 'Manual Num2 Function'}, // PatchCommon_ManualNum2Function:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum2Mode',	desc: 'Manual Num2 Mode'}, // PatchCommon_ManualNum2Mode:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 18,	factor: 1,	name: 'ManualNum3Function',	desc: 'Manual Num3 Function'}, // PatchCommon_ManualNum3Function:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum3Mode',	desc: 'Manual Num3 Mode'}, // PatchCommon_ManualNum3Mode:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 116,	init: 23,	factor: 1,	name: 'ManualNum4Function',	desc: 'Manual Num4 Function'}, // PatchCommon_ManualNum4Function:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ManualNum4Mode',	desc: 'Manual Num4 Mode'}, // PatchCommon_ManualNum4Mode:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 0,	factor: 1,	name: 'PMIDI1_CH',	desc: '1:CH'}, // PatchCommon_PMIDI1_CH:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI1_BANK_MSB',	desc: '1:BANK MSB'}, // PatchCommon_PMIDI1_BANK_MSB:0: 00.00.00.3a
	{addr: 0x0000003c,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI1_BANK_LSB',	desc: '1:BANK LSB'}, // PatchCommon_PMIDI1_BANK_LSB:0: 00.00.00.3c
	{addr: 0x0000003e,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI1_PC_NO',	desc: '1:PC#'}, // PatchCommon_PMIDI1_PC_NO:0: 00.00.00.3e
	{addr: 0x00000040,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI1_CC1_NO',	desc: '1:CC1#'}, // PatchCommon_PMIDI1_CC1_NO:0: 00.00.00.40
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI1_CC1_VALUE',	desc: '1:CC1 VALUE'}, // PatchCommon_PMIDI1_CC1_VALUE:0: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI1_CC2_NO',	desc: '1:CC2#'}, // PatchCommon_PMIDI1_CC2_NO:0: 00.00.00.43
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI1_CC2_VALUE',	desc: '1:CC2 VALUE'}, // PatchCommon_PMIDI1_CC2_VALUE:0: 00.00.00.45
	{addr: 0x00000046,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 0,	factor: 1,	name: 'PMIDI2_CH',	desc: '2:CH'}, // PatchCommon_PMIDI2_CH:0: 00.00.00.46
	{addr: 0x00000047,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI2_BANK_MSB',	desc: '2:BANK MSB'}, // PatchCommon_PMIDI2_BANK_MSB:0: 00.00.00.47
	{addr: 0x00000049,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI2_BANK_LSB',	desc: '2:BANK LSB'}, // PatchCommon_PMIDI2_BANK_LSB:0: 00.00.00.49
	{addr: 0x0000004b,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI2_PC_NO',	desc: '2:PC#'}, // PatchCommon_PMIDI2_PC_NO:0: 00.00.00.4b
	{addr: 0x0000004d,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI2_CC1_NO',	desc: '2:CC1#'}, // PatchCommon_PMIDI2_CC1_NO:0: 00.00.00.4d
	{addr: 0x0000004f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI2_CC1_VALUE',	desc: '2:CC1 VALUE'}, // PatchCommon_PMIDI2_CC1_VALUE:0: 00.00.00.4f
	{addr: 0x00000050,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI2_CC2_NO',	desc: '2:CC2#'}, // PatchCommon_PMIDI2_CC2_NO:0: 00.00.00.50
	{addr: 0x00000052,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI2_CC2_VALUE',	desc: '2:CC2 VALUE'}, // PatchCommon_PMIDI2_CC2_VALUE:0: 00.00.00.52
	{addr: 0x00000053,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 0,	factor: 1,	name: 'PMIDI3_CH',	desc: '3:CH'}, // PatchCommon_PMIDI3_CH:0: 00.00.00.53
	{addr: 0x00000054,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI3_BANK_MSB',	desc: '3:BANK MSB'}, // PatchCommon_PMIDI3_BANK_MSB:0: 00.00.00.54
	{addr: 0x00000056,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI3_BANK_LSB',	desc: '3:BANK LSB'}, // PatchCommon_PMIDI3_BANK_LSB:0: 00.00.00.56
	{addr: 0x00000058,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI3_PC_NO',	desc: '3:PC#'}, // PatchCommon_PMIDI3_PC_NO:0: 00.00.00.58
	{addr: 0x0000005a,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI3_CC1_NO',	desc: '3:CC1#'}, // PatchCommon_PMIDI3_CC1_NO:0: 00.00.00.5a
	{addr: 0x0000005c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI3_CC1_VALUE',	desc: '3:CC1 VALUE'}, // PatchCommon_PMIDI3_CC1_VALUE:0: 00.00.00.5c
	{addr: 0x0000005d,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI3_CC2_NO',	desc: '3:CC2#'}, // PatchCommon_PMIDI3_CC2_NO:0: 00.00.00.5d
	{addr: 0x0000005f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI3_CC2_VALUE',	desc: '3:CC2 VALUE'}, // PatchCommon_PMIDI3_CC2_VALUE:0: 00.00.00.5f
	{addr: 0x00000060,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 0,	factor: 1,	name: 'PMIDI4_CH',	desc: '4:CH'}, // PatchCommon_PMIDI4_CH:0: 00.00.00.60
	{addr: 0x00000061,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI4_BANK_MSB',	desc: '4:BANK MSB'}, // PatchCommon_PMIDI4_BANK_MSB:0: 00.00.00.61
	{addr: 0x00000063,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI4_BANK_LSB',	desc: '4:BANK LSB'}, // PatchCommon_PMIDI4_BANK_LSB:0: 00.00.00.63
	{addr: 0x00000065,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI4_PC_NO',	desc: '4:PC#'}, // PatchCommon_PMIDI4_PC_NO:0: 00.00.00.65
	{addr: 0x00000067,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI4_CC1_NO',	desc: '4:CC1#'}, // PatchCommon_PMIDI4_CC1_NO:0: 00.00.00.67
	{addr: 0x00000069,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI4_CC1_VALUE',	desc: '4:CC1 VALUE'}, // PatchCommon_PMIDI4_CC1_VALUE:0: 00.00.00.69
	{addr: 0x0000006a,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'PMIDI4_CC2_NO',	desc: '4:CC2#'}, // PatchCommon_PMIDI4_CC2_NO:0: 00.00.00.6a
	{addr: 0x0000006c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'PMIDI4_CC2_VALUE',	desc: '4:CC2 VALUE'}, // PatchCommon_PMIDI4_CC2_VALUE:0: 00.00.00.6c
	{addr: 0x0000006d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'G2MidiCc1Src',	desc: 'CC1 SRC'}, // PatchCommon_G2MidiCc1Src:0: 00.00.00.6d
	{addr: 0x0000006e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'G2MidiCc1Cc',	desc: 'CC1 CC#'}, // PatchCommon_G2MidiCc1Cc:0: 00.00.00.6e
	{addr: 0x0000006f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'G2MidiCc2Src',	desc: 'CC2 SRC'}, // PatchCommon_G2MidiCc2Src:0: 00.00.00.6f
	{addr: 0x00000070,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 63,	init: 0,	factor: 1,	name: 'G2MidiCc2Cc',	desc: 'CC2 CC#'}, // PatchCommon_G2MidiCc2Cc:0: 00.00.00.70
	{addr: 0x00000071,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiBankMsb',	desc: 'BANK MSB'}, // PatchCommon_G2MidiBankMsb:0: 00.00.00.71
	{addr: 0x00000073,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiBankLsb',	desc: 'BANK LSB'}, // PatchCommon_G2MidiBankLsb:0: 00.00.00.73
	{addr: 0x00000075,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiPc',	desc: 'PC'}, // PatchCommon_G2MidiPc:0: 00.00.00.75
	{addr: 0x00000077,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr1BankMsb',	desc: 'STR1 BANK MSB'}, // PatchCommon_G2MidiStr1BankMsb:0: 00.00.00.77
	{addr: 0x00000079,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr1BankLsb',	desc: 'STR1 BANK LSB'}, // PatchCommon_G2MidiStr1BankLsb:0: 00.00.00.79
	{addr: 0x0000007b,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr1Pc',	desc: 'STR1 PC'}, // PatchCommon_G2MidiStr1Pc:0: 00.00.00.7b
	{addr: 0x0000007d,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr2BankMsb',	desc: 'STR2 BANK MSB'}, // PatchCommon_G2MidiStr2BankMsb:0: 00.00.00.7d
	{addr: 0x0000007f,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr2BankLsb',	desc: 'STR2 BANK LSB'}, // PatchCommon_G2MidiStr2BankLsb:0: 00.00.00.7f
	{addr: 0x00000101,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr2Pc',	desc: 'STR2 PC'}, // PatchCommon_G2MidiStr2Pc:0: 00.00.01.01
	{addr: 0x00000103,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr3BankMsb',	desc: 'STR3 BANK MSB'}, // PatchCommon_G2MidiStr3BankMsb:0: 00.00.01.03
	{addr: 0x00000105,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr3BankLsb',	desc: 'STR3 BANK LSB'}, // PatchCommon_G2MidiStr3BankLsb:0: 00.00.01.05
	{addr: 0x00000107,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr3Pc',	desc: 'STR3 PC'}, // PatchCommon_G2MidiStr3Pc:0: 00.00.01.07
	{addr: 0x00000109,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr4BankMsb',	desc: 'STR4 BANK MSB'}, // PatchCommon_G2MidiStr4BankMsb:0: 00.00.01.09
	{addr: 0x0000010b,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr4BankLsb',	desc: 'STR4 BANK LSB'}, // PatchCommon_G2MidiStr4BankLsb:0: 00.00.01.0b
	{addr: 0x0000010d,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr4Pc',	desc: 'STR4 PC'}, // PatchCommon_G2MidiStr4Pc:0: 00.00.01.0d
	{addr: 0x0000010f,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr5BankMsb',	desc: 'STR5 BANK MSB'}, // PatchCommon_G2MidiStr5BankMsb:0: 00.00.01.0f
	{addr: 0x00000111,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr5BankLsb',	desc: 'STR5 BANK LSB'}, // PatchCommon_G2MidiStr5BankLsb:0: 00.00.01.11
	{addr: 0x00000113,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr5Pc',	desc: 'STR5 PC'}, // PatchCommon_G2MidiStr5Pc:0: 00.00.01.13
	{addr: 0x00000115,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr6BankMsb',	desc: 'STR6 BANK MSB'}, // PatchCommon_G2MidiStr6BankMsb:0: 00.00.01.15
	{addr: 0x00000117,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr6BankLsb',	desc: 'STR6 BANK LSB'}, // PatchCommon_G2MidiStr6BankLsb:0: 00.00.01.17
	{addr: 0x00000119,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'G2MidiStr6Pc',	desc: 'STR6 PC'}, // PatchCommon_G2MidiStr6Pc:0: 00.00.01.19
];
var PatchCommon2 = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'GkSet',	desc: 'GK SET'}, // PatchCommon2_GkSet:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'NormalSet',	desc: 'NORMAL SET'}, // PatchCommon2_NormalSet:0: 00.00.00.01
];
var PatchCommon2Bass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'GkSet',	desc: 'GK SET'}, // PatchCommon2Bass_GkSet:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'NormalSet',	desc: 'NORMAL SET'}, // PatchCommon2Bass_NormalSet:0: 00.00.00.01
];
var PatchLed = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM1_OFF',	desc: 'NUM1 OFF'}, // PatchLed_NUM1_OFF:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM1_ON',	desc: 'NUM1 ON'}, // PatchLed_NUM1_ON:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM2_OFF',	desc: 'NUM2 OFF'}, // PatchLed_NUM2_OFF:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM2_ON',	desc: 'NUM2 ON'}, // PatchLed_NUM2_ON:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM3_OFF',	desc: 'NUM3 OFF'}, // PatchLed_NUM3_OFF:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM3_ON',	desc: 'NUM3 ON'}, // PatchLed_NUM3_ON:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'NUM4_OFF',	desc: 'NUM4 OFF'}, // PatchLed_NUM4_OFF:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'NUM4_ON',	desc: 'NUM4 ON'}, // PatchLed_NUM4_ON:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'BANKDOWN_OFF',	desc: 'BANKDOWN OFF'}, // PatchLed_BANKDOWN_OFF:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'BANKDOWN_ON',	desc: 'BANKDOWN ON'}, // PatchLed_BANKDOWN_ON:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'BANKUP_OFF',	desc: 'BANKUP OFF'}, // PatchLed_BANKUP_OFF:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'BANKUP_ON',	desc: 'BANKUP ON'}, // PatchLed_BANKUP_ON:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CTL1_OFF',	desc: 'CTL1 OFF'}, // PatchLed_CTL1_OFF:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CTL1_ON',	desc: 'CTL1 ON'}, // PatchLed_CTL1_ON:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CTL2_OFF',	desc: 'CTL2 OFF'}, // PatchLed_CTL2_OFF:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CTL2_ON',	desc: 'CTL2 ON'}, // PatchLed_CTL2_ON:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'CNUM_OFF',	desc: 'CNUM OFF'}, // PatchLed_CNUM_OFF:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'CNUM_ON',	desc: 'CNUM ON'}, // PatchLed_CNUM_ON:0: 00.00.00.11
	{addr: 0x00000012,	size: 8,	ofs: 0,	min: 0,	max: 2147483647,	init: 0,	factor: 1,	name: 'OnOffState',	desc: 'ON OFF STATE'}, // PatchLed_OnOffState:0: 00.00.00.12
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 0,	factor: 1,	name: 'OnOffState2',	desc: 'ON OFF STATE'}, // PatchLed_OnOffState2:0: 00.00.00.1a
];
var Assign = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SW',	desc: 'SW'}, // Assign_SW:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 2047,	init: 8,	factor: 1,	name: 'TARGET',	desc: 'TARGET'}, // Assign_TARGET:0: 00.00.00.01
	{addr: 0x00000005,	size: INTEGER4x4,	ofs: 32768,	min: -32768,	max: 32767,	init: 0,	factor: 1,	name: 'TARGET_MIN',	desc: 'TARGET MIN'}, // Assign_TARGET_MIN:0: 00.00.00.05
	{addr: 0x00000009,	size: INTEGER4x4,	ofs: 32768,	min: -32768,	max: 32767,	init: 1,	factor: 1,	name: 'TARGET_MAX',	desc: 'TARGET MAX'}, // Assign_TARGET_MAX:0: 00.00.00.09
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 89,	init: 9,	factor: 1,	name: 'SOURCE',	desc: 'SOURCE'}, // Assign_SOURCE:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'MODE',	desc: 'MODE'}, // Assign_MODE:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 16128,	init: 0,	factor: 128,	name: 'ACT_RANGE_LO',	desc: 'ACT RANGE LO'}, // Assign_ACT_RANGE_LO:0: 00.00.00.0f
	{addr: 0x00000013,	size: INTEGER4x4,	ofs: 0,	min: 128,	max: 16256,	init: 16256,	factor: 128,	name: 'ACT_RANGE_HI',	desc: 'ACT RANGE HI'}, // Assign_ACT_RANGE_HI:0: 00.00.00.13
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'RISE_TIME',	desc: 'RISE TIME'}, // Assign_RISE_TIME:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'FALL_TIME',	desc: 'FALL TIME'}, // Assign_FALL_TIME:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 20,	factor: 1,	name: 'WAVE_RATE',	desc: 'WAVE RATE'}, // Assign_WAVE_RATE:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'WAVE_FORM',	desc: 'WAVE FORM'}, // Assign_WAVE_FORM:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 16,	init: 0,	factor: 1,	name: 'MIDI_CH',	desc: 'MIDI CH'}, // Assign_MIDI_CH:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 127,	init: 1,	factor: 1,	name: 'MIDI_CC_NO',	desc: 'MIDI CC#'}, // Assign_MIDI_CC_NO:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 16383,	init: 0,	factor: 128,	name: 'MIDI_CC_VALUE_MIN',	desc: 'MIDI CC VALUE MIN'}, // Assign_MIDI_CC_VALUE_MIN:0: 00.00.00.1d
	{addr: 0x00000021,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 16383,	init: 16383,	factor: 128,	name: 'MIDI_CC_VALUE_MAX',	desc: 'MIDI CC VALUE MAX'}, // Assign_MIDI_CC_VALUE_MAX:0: 00.00.00.21
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'MIDI_CC_TWO_BYTE_MODE',	desc: 'MIDI CC TWO BYTE MODE'}, // Assign_MIDI_CC_TWO_BYTE_MODE:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: -1,	min: 1,	max: 128,	init: 1,	factor: 1,	name: 'MIDI_PC_NO',	desc: 'MIDI PC#'}, // Assign_MIDI_PC_NO:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'MIDI_BANK_MSB',	desc: 'MIDI BANK MSB'}, // Assign_MIDI_BANK_MSB:0: 00.00.00.27
	{addr: 0x00000029,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 128,	init: 0,	factor: 1,	name: 'MIDI_BANK_LSB',	desc: 'MIDI BANK LSB'}, // Assign_MIDI_BANK_LSB:0: 00.00.00.29
];
var InstVariName = [
	{addr: 0x00000000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: '                ',	factor: 1,	name: 'Name',	desc: 'Name'}, // InstVariName_Name:0: 00.00.00.00
];
var InstLfoDynaSynth = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1Sw',	desc: 'LFO1 ON/OFF'}, // InstLfoDynaSynth_Lfo1Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo1WaveForm',	desc: 'LFO1 SHAPE'}, // InstLfoDynaSynth_Lfo1WaveForm:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo1Rate',	desc: 'LFO1 RATE'}, // InstLfoDynaSynth_Lfo1Rate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1DynamicDepth',	desc: 'LFO1 DYNAMIC DEPTH'}, // InstLfoDynaSynth_Lfo1DynamicDepth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo1PitchDepth',	desc: 'LFO1 PITCH DEPTH'}, // InstLfoDynaSynth_Lfo1PitchDepth:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo1FilterDepth',	desc: 'LFO1 FILTER DEPTH'}, // InstLfoDynaSynth_Lfo1FilterDepth:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo1AmpDepth',	desc: 'LFO1 AMP DEPTH'}, // InstLfoDynaSynth_Lfo1AmpDepth:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo1PwmDepth',	desc: 'LFO1 PWM DEPTH'}, // InstLfoDynaSynth_Lfo1PwmDepth:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Lfo1FadeTime',	desc: 'LFO1 FADE TIME'}, // InstLfoDynaSynth_Lfo1FadeTime:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo1Sync',	desc: 'LFO1 SYNC'}, // InstLfoDynaSynth_Lfo1Sync:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2Sw',	desc: 'LFO2 ON/OFF'}, // InstLfoDynaSynth_Lfo2Sw:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo2WaveForm',	desc: 'LFO2 SHAPE'}, // InstLfoDynaSynth_Lfo2WaveForm:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo2Rate',	desc: 'LFO2 RATE'}, // InstLfoDynaSynth_Lfo2Rate:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2DynamicDepth',	desc: 'LFO2 DYNAMIC DEPTH'}, // InstLfoDynaSynth_Lfo2DynamicDepth:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo2PitchDepth',	desc: 'LFO2 PITCH DEPTH'}, // InstLfoDynaSynth_Lfo2PitchDepth:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo2FilterDepth',	desc: 'LFO2 FILTER DEPTH'}, // InstLfoDynaSynth_Lfo2FilterDepth:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo2AmpDepth',	desc: 'LFO2 AMP DEPTH'}, // InstLfoDynaSynth_Lfo2AmpDepth:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Lfo2PwmDepth',	desc: 'LFO2 PWM DEPTH'}, // InstLfoDynaSynth_Lfo2PwmDepth:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Lfo2FadeTime',	desc: 'LFO2 FADE TIME'}, // InstLfoDynaSynth_Lfo2FadeTime:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo2Sync',	desc: 'LFO2 SYNC'}, // InstLfoDynaSynth_Lfo2Sync:0: 00.00.00.13
];
var InstLfoOscSynth = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1Sw',	desc: 'LFO1 ON/OFF'}, // InstLfoOscSynth_Lfo1Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo1WaveForm',	desc: 'LFO1 SHAPE'}, // InstLfoOscSynth_Lfo1WaveForm:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo1Rate',	desc: 'LFO1 RATE'}, // InstLfoOscSynth_Lfo1Rate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1Pitch1Depth',	desc: 'LFO1 PITCH1 DEPTH'}, // InstLfoOscSynth_Lfo1Pitch1Depth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1Pitch2Depth',	desc: 'LFO1 PITCH2 DEPTH'}, // InstLfoOscSynth_Lfo1Pitch2Depth:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1FilterDepth',	desc: 'LFO1 FILTER DEPTH'}, // InstLfoOscSynth_Lfo1FilterDepth:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1AmpDepth',	desc: 'LFO1 AMP DEPTH'}, // InstLfoOscSynth_Lfo1AmpDepth:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1DelayTime',	desc: 'LFO1 DELAY TIME'}, // InstLfoOscSynth_Lfo1DelayTime:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1FadeTime',	desc: 'LFO1 FADE TIME'}, // InstLfoOscSynth_Lfo1FadeTime:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo1Sync',	desc: 'LFO1 SYNC'}, // InstLfoOscSynth_Lfo1Sync:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2Sw',	desc: 'LFO2 ON/OFF'}, // InstLfoOscSynth_Lfo2Sw:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo2WaveForm',	desc: 'LFO2 SHAPE'}, // InstLfoOscSynth_Lfo2WaveForm:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo2Rate',	desc: 'LFO2 RATE'}, // InstLfoOscSynth_Lfo2Rate:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2Pitch1Depth',	desc: 'LFO2 PITCH1 DEPTH'}, // InstLfoOscSynth_Lfo2Pitch1Depth:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2Pitch2Depth',	desc: 'LFO2 PITCH2 DEPTH'}, // InstLfoOscSynth_Lfo2Pitch2Depth:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2FilterDepth',	desc: 'LFO2 FILTER DEPTH'}, // InstLfoOscSynth_Lfo2FilterDepth:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2AmpDepth',	desc: 'LFO2 AMP DEPTH'}, // InstLfoOscSynth_Lfo2AmpDepth:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2DelayTime',	desc: 'LFO2 DELAY TIME'}, // InstLfoOscSynth_Lfo2DelayTime:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2FadeTime',	desc: 'LFO2 FADE TIME'}, // InstLfoOscSynth_Lfo2FadeTime:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo2Sync',	desc: 'LFO2 SYNC'}, // InstLfoOscSynth_Lfo2Sync:0: 00.00.00.13
];
var InstSeqDynaSynth = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'PitchTarget',	desc: 'PITCH TARGET'}, // InstSeqDynaSynth_PitchTarget:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'FilterCutoffTarget',	desc: 'CUTOFF TARGET'}, // InstSeqDynaSynth_FilterCutoffTarget:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'InstLevelTarget',	desc: 'LEVEL TARGET'}, // InstSeqDynaSynth_InstLevelTarget:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep1Min',	desc: 'PITCH STEP1 MIN'}, // InstSeqDynaSynth_SeqPitchStep1Min:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep1Max',	desc: 'PITCH STEP1 MAX'}, // InstSeqDynaSynth_SeqPitchStep1Max:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep2Min',	desc: 'PITCH STEP2 MIN'}, // InstSeqDynaSynth_SeqPitchStep2Min:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep2Max',	desc: 'PITCH STEP2 MAX'}, // InstSeqDynaSynth_SeqPitchStep2Max:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep3Min',	desc: 'PITCH STEP3 MIN'}, // InstSeqDynaSynth_SeqPitchStep3Min:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep3Max',	desc: 'PITCH STEP3 MAX'}, // InstSeqDynaSynth_SeqPitchStep3Max:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep4Min',	desc: 'PITCH STEP4 MIN'}, // InstSeqDynaSynth_SeqPitchStep4Min:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep4Max',	desc: 'PITCH STEP4 MAX'}, // InstSeqDynaSynth_SeqPitchStep4Max:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep5Min',	desc: 'PITCH STEP5 MIN'}, // InstSeqDynaSynth_SeqPitchStep5Min:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep5Max',	desc: 'PITCH STEP5 MAX'}, // InstSeqDynaSynth_SeqPitchStep5Max:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep6Min',	desc: 'PITCH STEP6 MIN'}, // InstSeqDynaSynth_SeqPitchStep6Min:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep6Max',	desc: 'PITCH STEP6 MAX'}, // InstSeqDynaSynth_SeqPitchStep6Max:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep7Min',	desc: 'PITCH STEP7 MIN'}, // InstSeqDynaSynth_SeqPitchStep7Min:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep7Max',	desc: 'PITCH STEP7 MAX'}, // InstSeqDynaSynth_SeqPitchStep7Max:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep8Min',	desc: 'PITCH STEP8 MIN'}, // InstSeqDynaSynth_SeqPitchStep8Min:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep8Max',	desc: 'PITCH STEP8 MAX'}, // InstSeqDynaSynth_SeqPitchStep8Max:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep9Min',	desc: 'PITCH STEP9 MIN'}, // InstSeqDynaSynth_SeqPitchStep9Min:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep9Max',	desc: 'PITCH STEP9 MAX'}, // InstSeqDynaSynth_SeqPitchStep9Max:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep10Min',	desc: 'PITCH STEP10 MIN'}, // InstSeqDynaSynth_SeqPitchStep10Min:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep10Max',	desc: 'PITCH STEP10 MAX'}, // InstSeqDynaSynth_SeqPitchStep10Max:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep11Min',	desc: 'PITCH STEP11 MIN'}, // InstSeqDynaSynth_SeqPitchStep11Min:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep11Max',	desc: 'PITCH STEP11 MAX'}, // InstSeqDynaSynth_SeqPitchStep11Max:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep12Min',	desc: 'PITCH STEP12 MIN'}, // InstSeqDynaSynth_SeqPitchStep12Min:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep12Max',	desc: 'PITCH STEP12 MAX'}, // InstSeqDynaSynth_SeqPitchStep12Max:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep13Min',	desc: 'PITCH STEP13 MIN'}, // InstSeqDynaSynth_SeqPitchStep13Min:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep13Max',	desc: 'PITCH STEP13 MAX'}, // InstSeqDynaSynth_SeqPitchStep13Max:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep14Min',	desc: 'PITCH STEP14 MIN'}, // InstSeqDynaSynth_SeqPitchStep14Min:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep14Max',	desc: 'PITCH STEP14 MAX'}, // InstSeqDynaSynth_SeqPitchStep14Max:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep15Min',	desc: 'PITCH STEP15 MIN'}, // InstSeqDynaSynth_SeqPitchStep15Min:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep15Max',	desc: 'PITCH STEP15 MAX'}, // InstSeqDynaSynth_SeqPitchStep15Max:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep16Min',	desc: 'PITCH STEP16 MIN'}, // InstSeqDynaSynth_SeqPitchStep16Min:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep16Max',	desc: 'PITCH STEP16 MAX'}, // InstSeqDynaSynth_SeqPitchStep16Max:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep1Min',	desc: 'FILTER CUTOFF STEP1 MIN'}, // InstSeqDynaSynth_SeqFltCofStep1Min:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep1Max',	desc: 'FILTER CUTOFF STEP1 MAX'}, // InstSeqDynaSynth_SeqFltCofStep1Max:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep2Min',	desc: 'FILTER CUTOFF STEP2 MIN'}, // InstSeqDynaSynth_SeqFltCofStep2Min:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep2Max',	desc: 'FILTER CUTOFF STEP2 MAX'}, // InstSeqDynaSynth_SeqFltCofStep2Max:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep3Min',	desc: 'FILTER CUTOFF STEP3 MIN'}, // InstSeqDynaSynth_SeqFltCofStep3Min:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep3Max',	desc: 'FILTER CUTOFF STEP3 MAX'}, // InstSeqDynaSynth_SeqFltCofStep3Max:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep4Min',	desc: 'FILTER CUTOFF STEP4 MIN'}, // InstSeqDynaSynth_SeqFltCofStep4Min:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep4Max',	desc: 'FILTER CUTOFF STEP4 MAX'}, // InstSeqDynaSynth_SeqFltCofStep4Max:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep5Min',	desc: 'FILTER CUTOFF STEP5 MIN'}, // InstSeqDynaSynth_SeqFltCofStep5Min:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep5Max',	desc: 'FILTER CUTOFF STEP5 MAX'}, // InstSeqDynaSynth_SeqFltCofStep5Max:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep6Min',	desc: 'FILTER CUTOFF STEP6 MIN'}, // InstSeqDynaSynth_SeqFltCofStep6Min:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep6Max',	desc: 'FILTER CUTOFF STEP6 MAX'}, // InstSeqDynaSynth_SeqFltCofStep6Max:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep7Min',	desc: 'FILTER CUTOFF STEP7 MIN'}, // InstSeqDynaSynth_SeqFltCofStep7Min:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep7Max',	desc: 'FILTER CUTOFF STEP7 MAX'}, // InstSeqDynaSynth_SeqFltCofStep7Max:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep8Min',	desc: 'FILTER CUTOFF STEP8 MIN'}, // InstSeqDynaSynth_SeqFltCofStep8Min:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep8Max',	desc: 'FILTER CUTOFF STEP8 MAX'}, // InstSeqDynaSynth_SeqFltCofStep8Max:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep9Min',	desc: 'FILTER CUTOFF STEP9 MIN'}, // InstSeqDynaSynth_SeqFltCofStep9Min:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep9Max',	desc: 'FILTER CUTOFF STEP9 MAX'}, // InstSeqDynaSynth_SeqFltCofStep9Max:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep10Min',	desc: 'FILTER CUTOFF STEP10 MIN'}, // InstSeqDynaSynth_SeqFltCofStep10Min:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep10Max',	desc: 'FILTER CUTOFF STEP10 MAX'}, // InstSeqDynaSynth_SeqFltCofStep10Max:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep11Min',	desc: 'FILTER CUTOFF STEP11 MIN'}, // InstSeqDynaSynth_SeqFltCofStep11Min:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep11Max',	desc: 'FILTER CUTOFF STEP11 MAX'}, // InstSeqDynaSynth_SeqFltCofStep11Max:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep12Min',	desc: 'FILTER CUTOFF STEP12 MIN'}, // InstSeqDynaSynth_SeqFltCofStep12Min:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep12Max',	desc: 'FILTER CUTOFF STEP12 MAX'}, // InstSeqDynaSynth_SeqFltCofStep12Max:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep13Min',	desc: 'FILTER CUTOFF STEP13 MIN'}, // InstSeqDynaSynth_SeqFltCofStep13Min:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep13Max',	desc: 'FILTER CUTOFF STEP13 MAX'}, // InstSeqDynaSynth_SeqFltCofStep13Max:0: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep14Min',	desc: 'FILTER CUTOFF STEP14 MIN'}, // InstSeqDynaSynth_SeqFltCofStep14Min:0: 00.00.00.3d
	{addr: 0x0000003e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep14Max',	desc: 'FILTER CUTOFF STEP14 MAX'}, // InstSeqDynaSynth_SeqFltCofStep14Max:0: 00.00.00.3e
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep15Min',	desc: 'FILTER CUTOFF STEP15 MIN'}, // InstSeqDynaSynth_SeqFltCofStep15Min:0: 00.00.00.3f
	{addr: 0x00000040,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep15Max',	desc: 'FILTER CUTOFF STEP15 MAX'}, // InstSeqDynaSynth_SeqFltCofStep15Max:0: 00.00.00.40
	{addr: 0x00000041,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep16Min',	desc: 'FILTER CUTOFF STEP16 MIN'}, // InstSeqDynaSynth_SeqFltCofStep16Min:0: 00.00.00.41
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'SeqFltCofStep16Max',	desc: 'FILTER CUTOFF STEP16 MAX'}, // InstSeqDynaSynth_SeqFltCofStep16Max:0: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep1Min',	desc: 'INST LEVEL STEP1 MIN'}, // InstSeqDynaSynth_SeqInstLevStep1Min:0: 00.00.00.43
	{addr: 0x00000044,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep1Max',	desc: 'INST LEVEL STEP1 MAX'}, // InstSeqDynaSynth_SeqInstLevStep1Max:0: 00.00.00.44
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep2Min',	desc: 'INST LEVEL STEP2 MIN'}, // InstSeqDynaSynth_SeqInstLevStep2Min:0: 00.00.00.45
	{addr: 0x00000046,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep2Max',	desc: 'INST LEVEL STEP2 MAX'}, // InstSeqDynaSynth_SeqInstLevStep2Max:0: 00.00.00.46
	{addr: 0x00000047,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep3Min',	desc: 'INST LEVEL STEP3 MIN'}, // InstSeqDynaSynth_SeqInstLevStep3Min:0: 00.00.00.47
	{addr: 0x00000048,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep3Max',	desc: 'INST LEVEL STEP3 MAX'}, // InstSeqDynaSynth_SeqInstLevStep3Max:0: 00.00.00.48
	{addr: 0x00000049,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep4Min',	desc: 'INST LEVEL STEP4 MIN'}, // InstSeqDynaSynth_SeqInstLevStep4Min:0: 00.00.00.49
	{addr: 0x0000004a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep4Max',	desc: 'INST LEVEL STEP4 MAX'}, // InstSeqDynaSynth_SeqInstLevStep4Max:0: 00.00.00.4a
	{addr: 0x0000004b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep5Min',	desc: 'INST LEVEL STEP5 MIN'}, // InstSeqDynaSynth_SeqInstLevStep5Min:0: 00.00.00.4b
	{addr: 0x0000004c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep5Max',	desc: 'INST LEVEL STEP5 MAX'}, // InstSeqDynaSynth_SeqInstLevStep5Max:0: 00.00.00.4c
	{addr: 0x0000004d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep6Min',	desc: 'INST LEVEL STEP6 MIN'}, // InstSeqDynaSynth_SeqInstLevStep6Min:0: 00.00.00.4d
	{addr: 0x0000004e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep6Max',	desc: 'INST LEVEL STEP6 MAX'}, // InstSeqDynaSynth_SeqInstLevStep6Max:0: 00.00.00.4e
	{addr: 0x0000004f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep7Min',	desc: 'INST LEVEL STEP7 MIN'}, // InstSeqDynaSynth_SeqInstLevStep7Min:0: 00.00.00.4f
	{addr: 0x00000050,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep7Max',	desc: 'INST LEVEL STEP7 MAX'}, // InstSeqDynaSynth_SeqInstLevStep7Max:0: 00.00.00.50
	{addr: 0x00000051,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep8Min',	desc: 'INST LEVEL STEP8 MIN'}, // InstSeqDynaSynth_SeqInstLevStep8Min:0: 00.00.00.51
	{addr: 0x00000052,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep8Max',	desc: 'INST LEVEL STEP8 MAX'}, // InstSeqDynaSynth_SeqInstLevStep8Max:0: 00.00.00.52
	{addr: 0x00000053,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep9Min',	desc: 'INST LEVEL STEP9 MIN'}, // InstSeqDynaSynth_SeqInstLevStep9Min:0: 00.00.00.53
	{addr: 0x00000054,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep9Max',	desc: 'INST LEVEL STEP9 MAX'}, // InstSeqDynaSynth_SeqInstLevStep9Max:0: 00.00.00.54
	{addr: 0x00000055,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep10Min',	desc: 'INST LEVEL STEP10 MIN'}, // InstSeqDynaSynth_SeqInstLevStep10Min:0: 00.00.00.55
	{addr: 0x00000056,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep10Max',	desc: 'INST LEVEL STEP10 MAX'}, // InstSeqDynaSynth_SeqInstLevStep10Max:0: 00.00.00.56
	{addr: 0x00000057,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep11Min',	desc: 'INST LEVEL STEP11 MIN'}, // InstSeqDynaSynth_SeqInstLevStep11Min:0: 00.00.00.57
	{addr: 0x00000058,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep11Max',	desc: 'INST LEVEL STEP11 MAX'}, // InstSeqDynaSynth_SeqInstLevStep11Max:0: 00.00.00.58
	{addr: 0x00000059,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep12Min',	desc: 'INST LEVEL STEP12 MIN'}, // InstSeqDynaSynth_SeqInstLevStep12Min:0: 00.00.00.59
	{addr: 0x0000005a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep12Max',	desc: 'INST LEVEL STEP12 MAX'}, // InstSeqDynaSynth_SeqInstLevStep12Max:0: 00.00.00.5a
	{addr: 0x0000005b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep13Min',	desc: 'INST LEVEL STEP13 MIN'}, // InstSeqDynaSynth_SeqInstLevStep13Min:0: 00.00.00.5b
	{addr: 0x0000005c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep13Max',	desc: 'INST LEVEL STEP13 MAX'}, // InstSeqDynaSynth_SeqInstLevStep13Max:0: 00.00.00.5c
	{addr: 0x0000005d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep14Min',	desc: 'INST LEVEL STEP14 MIN'}, // InstSeqDynaSynth_SeqInstLevStep14Min:0: 00.00.00.5d
	{addr: 0x0000005e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep14Max',	desc: 'INST LEVEL STEP14 MAX'}, // InstSeqDynaSynth_SeqInstLevStep14Max:0: 00.00.00.5e
	{addr: 0x0000005f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep15Min',	desc: 'INST LEVEL STEP15 MIN'}, // InstSeqDynaSynth_SeqInstLevStep15Min:0: 00.00.00.5f
	{addr: 0x00000060,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep15Max',	desc: 'INST LEVEL STEP15 MAX'}, // InstSeqDynaSynth_SeqInstLevStep15Max:0: 00.00.00.60
	{addr: 0x00000061,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep16Min',	desc: 'INST LEVEL STEP16 MIN'}, // InstSeqDynaSynth_SeqInstLevStep16Min:0: 00.00.00.61
	{addr: 0x00000062,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep16Max',	desc: 'INST LEVEL STEP16 MAX'}, // InstSeqDynaSynth_SeqInstLevStep16Max:0: 00.00.00.62
	{addr: 0x00000063,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1Sw',	desc: 'ON/OFF'}, // InstSeqDynaSynth_Seq1Sw:0: 00.00.00.63
	{addr: 0x00000064,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1Sync',	desc: 'SYNC'}, // InstSeqDynaSynth_Seq1Sync:0: 00.00.00.64
	{addr: 0x00000065,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 16,	init: 4,	factor: 1,	name: 'Seq1LoopLength',	desc: 'LOOP LENGTH'}, // InstSeqDynaSynth_Seq1LoopLength:0: 00.00.00.65
	{addr: 0x00000066,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Seq1Rate',	desc: 'RATE'}, // InstSeqDynaSynth_Seq1Rate:0: 00.00.00.66
	{addr: 0x00000067,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1OneShotMode',	desc: '1 SHOT'}, // InstSeqDynaSynth_Seq1OneShotMode:0: 00.00.00.67
	{addr: 0x00000068,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1TurboSw',	desc: 'TURBO'}, // InstSeqDynaSynth_Seq1TurboSw:0: 00.00.00.68
	{addr: 0x00000069,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step1Curve',	desc: 'STEP1 CURVE'}, // InstSeqDynaSynth_Seq1Step1Curve:0: 00.00.00.69
	{addr: 0x0000006a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step2Curve',	desc: 'STEP2 CURVE'}, // InstSeqDynaSynth_Seq1Step2Curve:0: 00.00.00.6a
	{addr: 0x0000006b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step3Curve',	desc: 'STEP3 CURVE'}, // InstSeqDynaSynth_Seq1Step3Curve:0: 00.00.00.6b
	{addr: 0x0000006c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step4Curve',	desc: 'STEP4 CURVE'}, // InstSeqDynaSynth_Seq1Step4Curve:0: 00.00.00.6c
	{addr: 0x0000006d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step5Curve',	desc: 'STEP5 CURVE'}, // InstSeqDynaSynth_Seq1Step5Curve:0: 00.00.00.6d
	{addr: 0x0000006e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step6Curve',	desc: 'STEP6 CURVE'}, // InstSeqDynaSynth_Seq1Step6Curve:0: 00.00.00.6e
	{addr: 0x0000006f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step7Curve',	desc: 'STEP7 CURVE'}, // InstSeqDynaSynth_Seq1Step7Curve:0: 00.00.00.6f
	{addr: 0x00000070,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step8Curve',	desc: 'STEP8 CURVE'}, // InstSeqDynaSynth_Seq1Step8Curve:0: 00.00.00.70
	{addr: 0x00000071,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step9Curve',	desc: 'STEP9 CURVE'}, // InstSeqDynaSynth_Seq1Step9Curve:0: 00.00.00.71
	{addr: 0x00000072,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step10Curve',	desc: 'STEP10 CURVE'}, // InstSeqDynaSynth_Seq1Step10Curve:0: 00.00.00.72
	{addr: 0x00000073,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step11Curve',	desc: 'STEP11 CURVE'}, // InstSeqDynaSynth_Seq1Step11Curve:0: 00.00.00.73
	{addr: 0x00000074,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step12Curve',	desc: 'STEP12 CURVE'}, // InstSeqDynaSynth_Seq1Step12Curve:0: 00.00.00.74
	{addr: 0x00000075,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step13Curve',	desc: 'STEP13 CURVE'}, // InstSeqDynaSynth_Seq1Step13Curve:0: 00.00.00.75
	{addr: 0x00000076,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step14Curve',	desc: 'STEP14 CURVE'}, // InstSeqDynaSynth_Seq1Step14Curve:0: 00.00.00.76
	{addr: 0x00000077,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step15Curve',	desc: 'STEP15 CURVE'}, // InstSeqDynaSynth_Seq1Step15Curve:0: 00.00.00.77
	{addr: 0x00000078,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step16Curve',	desc: 'STEP16 CURVE'}, // InstSeqDynaSynth_Seq1Step16Curve:0: 00.00.00.78
	{addr: 0x00000079,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2Sw',	desc: 'ON/OFF'}, // InstSeqDynaSynth_Seq2Sw:0: 00.00.00.79
	{addr: 0x0000007a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2Sync',	desc: 'SYNC'}, // InstSeqDynaSynth_Seq2Sync:0: 00.00.00.7a
	{addr: 0x0000007b,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 16,	init: 4,	factor: 1,	name: 'Seq2LoopLength',	desc: 'LOOP LENGTH'}, // InstSeqDynaSynth_Seq2LoopLength:0: 00.00.00.7b
	{addr: 0x0000007c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Seq2Rate',	desc: 'RATE'}, // InstSeqDynaSynth_Seq2Rate:0: 00.00.00.7c
	{addr: 0x0000007d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2OneShotMode',	desc: '1 SHOT'}, // InstSeqDynaSynth_Seq2OneShotMode:0: 00.00.00.7d
	{addr: 0x0000007e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2TurboSw',	desc: 'TURBO'}, // InstSeqDynaSynth_Seq2TurboSw:0: 00.00.00.7e
	{addr: 0x0000007f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step1Curve',	desc: 'STEP1 CURVE'}, // InstSeqDynaSynth_Seq2Step1Curve:0: 00.00.00.7f
	{addr: 0x00000100,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step2Curve',	desc: 'STEP2 CURVE'}, // InstSeqDynaSynth_Seq2Step2Curve:0: 00.00.01.00
	{addr: 0x00000101,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step3Curve',	desc: 'STEP3 CURVE'}, // InstSeqDynaSynth_Seq2Step3Curve:0: 00.00.01.01
	{addr: 0x00000102,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step4Curve',	desc: 'STEP4 CURVE'}, // InstSeqDynaSynth_Seq2Step4Curve:0: 00.00.01.02
	{addr: 0x00000103,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step5Curve',	desc: 'STEP5 CURVE'}, // InstSeqDynaSynth_Seq2Step5Curve:0: 00.00.01.03
	{addr: 0x00000104,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step6Curve',	desc: 'STEP6 CURVE'}, // InstSeqDynaSynth_Seq2Step6Curve:0: 00.00.01.04
	{addr: 0x00000105,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step7Curve',	desc: 'STEP7 CURVE'}, // InstSeqDynaSynth_Seq2Step7Curve:0: 00.00.01.05
	{addr: 0x00000106,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step8Curve',	desc: 'STEP8 CURVE'}, // InstSeqDynaSynth_Seq2Step8Curve:0: 00.00.01.06
	{addr: 0x00000107,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step9Curve',	desc: 'STEP9 CURVE'}, // InstSeqDynaSynth_Seq2Step9Curve:0: 00.00.01.07
	{addr: 0x00000108,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step10Curve',	desc: 'STEP10 CURVE'}, // InstSeqDynaSynth_Seq2Step10Curve:0: 00.00.01.08
	{addr: 0x00000109,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step11Curve',	desc: 'STEP11 CURVE'}, // InstSeqDynaSynth_Seq2Step11Curve:0: 00.00.01.09
	{addr: 0x0000010a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step12Curve',	desc: 'STEP12 CURVE'}, // InstSeqDynaSynth_Seq2Step12Curve:0: 00.00.01.0a
	{addr: 0x0000010b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step13Curve',	desc: 'STEP13 CURVE'}, // InstSeqDynaSynth_Seq2Step13Curve:0: 00.00.01.0b
	{addr: 0x0000010c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step14Curve',	desc: 'STEP14 CURVE'}, // InstSeqDynaSynth_Seq2Step14Curve:0: 00.00.01.0c
	{addr: 0x0000010d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step15Curve',	desc: 'STEP15 CURVE'}, // InstSeqDynaSynth_Seq2Step15Curve:0: 00.00.01.0d
	{addr: 0x0000010e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step16Curve',	desc: 'STEP16 CURVE'}, // InstSeqDynaSynth_Seq2Step16Curve:0: 00.00.01.0e
];
var EfctVariName = [
	{addr: 0x00000000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: '                ',	factor: 1,	name: 'Name',	desc: 'Name'}, // EfctVariName_Name:0: 00.00.00.00
];
var Padding = [
];
var SystemEfct = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'ReturnGroundLift',	desc: 'GROUND LIFT'}, // SystemEfct_ReturnGroundLift:0: 00.00.00.00
];
var SystemInOut = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'MainOutLOutputSelect',	desc: 'L:OUTPUT SELECT'}, // SystemInOut_MainOutLOutputSelect:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'MainOutROutputSelect',	desc: 'R:OUTPUT SELECT'}, // SystemInOut_MainOutROutputSelect:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqLowGain',	desc: 'L:LOW GAIN'}, // SystemInOut_MainOutLGlobalEqLowGain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqLMidGain',	desc: 'L:LOW-MID GAIN'}, // SystemInOut_MainOutLGlobalEqLMidGain:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'MainOutLGlobalEqLMidFreq',	desc: 'L:LOW-MID FREQ'}, // SystemInOut_MainOutLGlobalEqLMidFreq:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'MainOutLGlobalEqLMidQ',	desc: 'L:LOW-MID Q'}, // SystemInOut_MainOutLGlobalEqLMidQ:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqHMidGain',	desc: 'L:HIGH-MID GAIN'}, // SystemInOut_MainOutLGlobalEqHMidGain:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'MainOutLGlobalEqHMidFreq',	desc: 'L:HIGH-MID FREQ'}, // SystemInOut_MainOutLGlobalEqHMidFreq:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'MainOutLGlobalEqHMidQ',	desc: 'L:HIGH-MID Q'}, // SystemInOut_MainOutLGlobalEqHMidQ:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqHighGain',	desc: 'L:HIGH GAIN'}, // SystemInOut_MainOutLGlobalEqHighGain:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqLowCut',	desc: 'L:LOW CUT'}, // SystemInOut_MainOutLGlobalEqLowCut:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'MainOutLGlobalEqHighCut',	desc: 'L:HIGH CUT'}, // SystemInOut_MainOutLGlobalEqHighCut:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqLowGain',	desc: 'R:LOW GAIN'}, // SystemInOut_MainOutRGlobalEqLowGain:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqLMidGain',	desc: 'R:LOW-MID GAIN'}, // SystemInOut_MainOutRGlobalEqLMidGain:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'MainOutRGlobalEqLMidFreq',	desc: 'R:LOW-MID FREQ'}, // SystemInOut_MainOutRGlobalEqLMidFreq:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'MainOutRGlobalEqLMidQ',	desc: 'R:LOW-MID Q'}, // SystemInOut_MainOutRGlobalEqLMidQ:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqHMidGain',	desc: 'R:HIGH-MID GAIN'}, // SystemInOut_MainOutRGlobalEqHMidGain:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'MainOutRGlobalEqHMidFreq',	desc: 'R:HIGH-MID FREQ'}, // SystemInOut_MainOutRGlobalEqHMidFreq:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'MainOutRGlobalEqHMidQ',	desc: 'R:HIGH-MID Q'}, // SystemInOut_MainOutRGlobalEqHMidQ:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqHighGain',	desc: 'R:HIGH GAIN'}, // SystemInOut_MainOutRGlobalEqHighGain:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqLowCut',	desc: 'R:LOW CUT'}, // SystemInOut_MainOutRGlobalEqLowCut:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'MainOutRGlobalEqHighCut',	desc: 'R:HIGH CUT'}, // SystemInOut_MainOutRGlobalEqHighCut:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'SubOutLOutputSelect',	desc: 'SUB:L:OUTPUT SELECT'}, // SystemInOut_SubOutLOutputSelect:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'SubOutROutputSelect',	desc: 'R:OUTPUT SELECT'}, // SystemInOut_SubOutROutputSelect:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqLowGain',	desc: 'L:LOW GAIN'}, // SystemInOut_SubOutLGlobalEqLowGain:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqLMidGain',	desc: 'L:LOW-MID GAIN'}, // SystemInOut_SubOutLGlobalEqLMidGain:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'SubOutLGlobalEqLMidFreq',	desc: 'L:LOW-MID FREQ'}, // SystemInOut_SubOutLGlobalEqLMidFreq:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'SubOutLGlobalEqLMidQ',	desc: 'L:LOW-MID Q'}, // SystemInOut_SubOutLGlobalEqLMidQ:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqHMidGain',	desc: 'L:HIGH-MID GAIN'}, // SystemInOut_SubOutLGlobalEqHMidGain:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'SubOutLGlobalEqHMidFreq',	desc: 'L:HIGH-MID FREQ'}, // SystemInOut_SubOutLGlobalEqHMidFreq:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'SubOutLGlobalEqHMidQ',	desc: 'L:HIGH-MID Q'}, // SystemInOut_SubOutLGlobalEqHMidQ:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqHighGain',	desc: 'L:HIGH GAIN'}, // SystemInOut_SubOutLGlobalEqHighGain:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqLowCut',	desc: 'L:LOW CUT'}, // SystemInOut_SubOutLGlobalEqLowCut:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'SubOutLGlobalEqHighCut',	desc: 'L:HIGH CUT'}, // SystemInOut_SubOutLGlobalEqHighCut:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqLowGain',	desc: 'R:LOW GAIN'}, // SystemInOut_SubOutRGlobalEqLowGain:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqLMidGain',	desc: 'R:LOW-MID GAIN'}, // SystemInOut_SubOutRGlobalEqLMidGain:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'SubOutRGlobalEqLMidFreq',	desc: 'R:LOW-MID FREQ'}, // SystemInOut_SubOutRGlobalEqLMidFreq:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'SubOutRGlobalEqLMidQ',	desc: 'R:LOW-MID Q'}, // SystemInOut_SubOutRGlobalEqLMidQ:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqHMidGain',	desc: 'R:HIGH-MID GAIN'}, // SystemInOut_SubOutRGlobalEqHMidGain:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'SubOutRGlobalEqHMidFreq',	desc: 'R:HIGH-MID FREQ'}, // SystemInOut_SubOutRGlobalEqHMidFreq:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'SubOutRGlobalEqHMidQ',	desc: 'R:HIGH-MID Q'}, // SystemInOut_SubOutRGlobalEqHMidQ:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqHighGain',	desc: 'R:HIGH GAIN'}, // SystemInOut_SubOutRGlobalEqHighGain:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqLowCut',	desc: 'R:LOW CUT'}, // SystemInOut_SubOutRGlobalEqLowCut:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'SubOutRGlobalEqHighCut',	desc: 'R:HIGH CUT'}, // SystemInOut_SubOutRGlobalEqHighCut:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'MainOutputLLevel',	desc: 'L:OUTPUT LEVEL'}, // SystemInOut_MainOutputLLevel:0: 00.00.00.2c
	{addr: 0x0000002e,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'MainOutputRLevel',	desc: 'R:OUTPUT LEVEL'}, // SystemInOut_MainOutputRLevel:0: 00.00.00.2e
	{addr: 0x00000030,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'SubOutputLLevel',	desc: 'L:OUTPUT LEVEL'}, // SystemInOut_SubOutputLLevel:0: 00.00.00.30
	{addr: 0x00000032,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'SubOutputRLevel',	desc: 'R:OUTPUT LEVEL'}, // SystemInOut_SubOutputRLevel:0: 00.00.00.32
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'MainOutOutputSelectLinkSw',	desc: 'STEREO LINK'}, // SystemInOut_MainOutOutputSelectLinkSw:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'SubOutOutputSelectLinkSw',	desc: 'SUB:STEREO LINK'}, // SystemInOut_SubOutOutputSelectLinkSw:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'MainOutGlobalEqLinkSw',	desc: 'STEREO LINK'}, // SystemInOut_MainOutGlobalEqLinkSw:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'SubOutGlobalEqLinkSw',	desc: 'STEREO LINK'}, // SystemInOut_SubOutGlobalEqLinkSw:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutLGlobalEqLevel',	desc: 'MAIN L:LEVEL'}, // SystemInOut_MainOutLGlobalEqLevel:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'MainOutRGlobalEqLevel',	desc: 'MAIN R:LEVEL'}, // SystemInOut_MainOutRGlobalEqLevel:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutLGlobalEqLevel',	desc: 'SUB L:LEVEL'}, // SystemInOut_SubOutLGlobalEqLevel:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'SubOutRGlobalEqLevel',	desc: 'SUB R:LEVEL'}, // SystemInOut_SubOutRGlobalEqLevel:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'TotalNsThreshold',	desc: 'NS THRESHOLD'}, // SystemInOut_TotalNsThreshold:0: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'TotalReverbLevel',	desc: 'REVERB LEVEL'}, // SystemInOut_TotalReverbLevel:0: 00.00.00.3d
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'UsbAudioMainMixLevel',	desc: 'MIX LEVEL'}, // SystemInOut_UsbAudioMainMixLevel:0: 00.00.00.3f
	{addr: 0x00000040,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'UsbAudioSubMixLevel',	desc: 'MIX LEVEL'}, // SystemInOut_UsbAudioSubMixLevel:0: 00.00.00.40
	{addr: 0x00000041,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'UsbAudioInputLevel',	desc: 'IN LEVEL'}, // SystemInOut_UsbAudioInputLevel:0: 00.00.00.41
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'UsbAudioOutputLevel',	desc: 'OUT LEVEL'}, // SystemInOut_UsbAudioOutputLevel:0: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'UsbAudioRouting',	desc: 'AUDIO ROUTING'}, // SystemInOut_UsbAudioRouting:0: 00.00.00.43
	{addr: 0x00000044,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 7,	factor: 1,	name: 'UsbAudioInPosition',	desc: 'IN POSITION'}, // SystemInOut_UsbAudioInPosition:0: 00.00.00.44
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 8,	init: 7,	factor: 1,	name: 'UsbAudioOutPosition',	desc: 'OUT POSITION'}, // SystemInOut_UsbAudioOutPosition:0: 00.00.00.45
];
var SetupEfct = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'GkType',	desc: 'GK TYPE'}, // SetupEfct_GkType:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 162,	init: 161,	factor: 1,	name: 'Scale',	desc: 'SCALE'}, // SetupEfct_Scale:0: 00.00.00.01
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 16,	factor: 1,	name: 'Distance1',	desc: 'DISTANCE1'}, // SetupEfct_Distance1:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 18,	factor: 1,	name: 'Distance2',	desc: 'DISTANCE2'}, // SetupEfct_Distance2:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 20,	factor: 1,	name: 'Distance3',	desc: 'DISTANCE3'}, // SetupEfct_Distance3:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 18,	factor: 1,	name: 'Distance4',	desc: 'DISTANCE4'}, // SetupEfct_Distance4:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 20,	factor: 1,	name: 'Distance5',	desc: 'DISTANCE5'}, // SetupEfct_Distance5:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 40,	init: 22,	factor: 1,	name: 'Distance6',	desc: 'DISTANCE6'}, // SetupEfct_Distance6:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens1',	desc: 'SENS1'}, // SetupEfct_Sens1:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens2',	desc: 'SENS2'}, // SetupEfct_Sens2:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens3',	desc: 'SENS3'}, // SetupEfct_Sens3:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens4',	desc: 'SENS4'}, // SetupEfct_Sens4:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens5',	desc: 'SENS5'}, // SetupEfct_Sens5:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'Sens6',	desc: 'SENS6'}, // SetupEfct_Sens6:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuPhase',	desc: 'PU PHASE'}, // SetupEfct_PuPhase:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PuDirection',	desc: 'PU DIRECTION'}, // SetupEfct_PuDirection:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneL',	desc: 'PIEZO TONE L'}, // SetupEfct_PiezoToneL:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'PiezoToneH',	desc: 'PIEZO TONE H'}, // SetupEfct_PiezoToneH:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SwPosition',	desc: 'SW POSITION'}, // SetupEfct_SwPosition:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'NormalPuGain',	desc: 'NORMAL PU GAIN'}, // SetupEfct_NormalPuGain:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'BassGkType',	desc: 'GK TYPE'}, // SetupEfct_BassGkType:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 234,	init: 233,	factor: 1,	name: 'BassScale',	desc: 'SCALE'}, // SetupEfct_BassScale:0: 00.00.00.16
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 7,	factor: 1,	name: 'BassGkPuPosition',	desc: 'GK PU POSITION'}, // SetupEfct_BassGkPuPosition:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BassDistanceH',	desc: 'DISTANCE HiC'}, // SetupEfct_BassDistanceH:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BassDistance1',	desc: 'DISTANCE 1st'}, // SetupEfct_BassDistance1:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BassDistance2',	desc: 'DISTANCE 2nd'}, // SetupEfct_BassDistance2:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BassDistance3',	desc: 'DISTANCE 3rd'}, // SetupEfct_BassDistance3:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BassDistance4',	desc: 'DISTANCE 4th'}, // SetupEfct_BassDistance4:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 49,	factor: 1,	name: 'BassDistanceL',	desc: 'DISTANCE LowB'}, // SetupEfct_BassDistanceL:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSensH',	desc: 'SENS HiC'}, // SetupEfct_BassSensH:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSens1',	desc: 'SENS 1st'}, // SetupEfct_BassSens1:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSens2',	desc: 'SENS 2nd'}, // SetupEfct_BassSens2:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSens3',	desc: 'SENS 3rd'}, // SetupEfct_BassSens3:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSens4',	desc: 'SENS 4th'}, // SetupEfct_BassSens4:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 65,	factor: 1,	name: 'BassSensL',	desc: 'SENS LowB'}, // SetupEfct_BassSensL:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BassPuPhase',	desc: 'PU PHASE'}, // SetupEfct_BassPuPhase:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BassPuDirection',	desc: 'PU DIRECTION'}, // SetupEfct_BassPuDirection:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'BassPiezoToneL',	desc: 'PIEZO TONE L'}, // SetupEfct_BassPiezoToneL:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'BassPiezoToneH',	desc: 'PIEZO TONE H'}, // SetupEfct_BassPiezoToneH:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BassSwPosition',	desc: 'SW POSITION'}, // SetupEfct_BassSwPosition:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'BassNormalPuGain',	desc: 'NORMAL PU GAIN'}, // SetupEfct_BassNormalPuGain:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CompSw',	desc: 'COMPRESSOR SW'}, // SetupEfct_CompSw:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // SetupEfct_Attack:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sustain',	desc: 'SUSTAIN'}, // SetupEfct_Sustain:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // SetupEfct_Level:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // SetupEfct_Sens:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Low',	desc: 'LOW'}, // SetupEfct_Low:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'High',	desc: 'HIGH'}, // SetupEfct_High:0: 00.00.00.31
];
var SystemPitch = [
	{addr: 0x00000000,	size: INTEGER4x4,	ofs: 435,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'ReferencePitch',	desc: 'REFERENCE PITCH'}, // SystemPitch_ReferencePitch:0: 00.00.00.00
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 0,	factor: 1,	name: 'PolyTunerType',	desc: 'POLY TUNER TYPE'}, // SystemPitch_PolyTunerType:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 16,	min: -5,	max: 0,	init: 0,	factor: 1,	name: 'PolyTunerOffset',	desc: 'POLY TUNER OFFSET'}, // SystemPitch_PolyTunerOffset:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'TunerOutput',	desc: 'TUNER OUTPUT'}, // SystemPitch_TunerOutput:0: 00.00.00.06
];
var SystemGtr2Midi = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Gtr2MidiSw',	desc: 'ON/OFF'}, // SystemGtr2Midi_Gtr2MidiSw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'HoldCtl',	desc: 'HOLD CTL'}, // SystemGtr2Midi_HoldCtl:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BendThin',	desc: 'BEND THIN'}, // SystemGtr2Midi_BendThin:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 0,	factor: 1,	name: 'BasicCh',	desc: 'BASIC CH'}, // SystemGtr2Midi_BasicCh:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PcMask',	desc: 'PC MASK'}, // SystemGtr2Midi_PcMask:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 2,	factor: 1,	name: 'BendRange',	desc: 'BEND RANGE'}, // SystemGtr2Midi_BendRange:0: 00.00.00.05
];
var PatchEfct = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PatchType',	desc: 'PATCH TYPE'}, // PatchEfct_PatchType:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NormalSw',	desc: 'NORMAL ON/OFF'}, // PatchEfct_NormalSw:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'NormalLevel',	desc: 'NORMAL LEVEL'}, // PatchEfct_NormalLevel:0: 00.00.00.02
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 2,	factor: 1,	name: 'NormalCableSim',	desc: 'CABLE SIM'}, // PatchEfct_NormalCableSim:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NormalPhaseSw',	desc: 'PHASE'}, // PatchEfct_NormalPhaseSw:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 0,	factor: 10,	name: 'FootVolume1Min',	desc: 'VOLUME1:VOLUME MIN'}, // PatchEfct_FootVolume1Min:0: 00.00.00.06
	{addr: 0x0000000a,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'FootVolume1Max',	desc: 'VOLUME1:VOLUME MAX'}, // PatchEfct_FootVolume1Max:0: 00.00.00.0a
	{addr: 0x0000000e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'FootVolume1Level',	desc: 'VOLUME1:PEDAL POSITION'}, // PatchEfct_FootVolume1Level:0: 00.00.00.0e
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'FootVolume1Curve',	desc: 'VOLUME1:VOLUME CURVE'}, // PatchEfct_FootVolume1Curve:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 0,	factor: 10,	name: 'FootVolume2Min',	desc: 'VOLUME2:VOLUME MIN'}, // PatchEfct_FootVolume2Min:0: 00.00.00.13
	{addr: 0x00000017,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'FootVolume2Max',	desc: 'VOLUME2:VOLUME MAX'}, // PatchEfct_FootVolume2Max:0: 00.00.00.17
	{addr: 0x0000001b,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'FootVolume2Level',	desc: 'VOLUME2:PEDAL POSITION'}, // PatchEfct_FootVolume2Level:0: 00.00.00.1b
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'FootVolume2Curve',	desc: 'VOLUME2:VOLUME CURVE'}, // PatchEfct_FootVolume2Curve:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'DivMode',	desc: 'ODE'}, // PatchEfct_DivMode:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'DivChSelect',	desc: 'H SELECT'}, // PatchEfct_DivChSelect:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'MixABBalance',	desc: '/B BALANCE'}, // PatchEfct_MixABBalance:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'MixAchPan',	desc: ':PAN'}, // PatchEfct_MixAchPan:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'MixBchPan',	desc: ':PAN'}, // PatchEfct_MixBchPan:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal1ABBalance',	desc: 'BAL1:A/B BALANCE'}, // PatchEfct_Bal1ABBalance:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal1AchPan',	desc: 'BAL1:A:PAN'}, // PatchEfct_Bal1AchPan:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal1BchPan',	desc: 'BAL1:B:PAN'}, // PatchEfct_Bal1BchPan:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal2ABBalance',	desc: 'BAL2:A/B BALANCE'}, // PatchEfct_Bal2ABBalance:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal2AchPan',	desc: 'BAL2:A:PAN'}, // PatchEfct_Bal2AchPan:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal2BchPan',	desc: 'BAL2:B:PAN'}, // PatchEfct_Bal2BchPan:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal3ABBalance',	desc: 'BAL3:A/B BALANCE'}, // PatchEfct_Bal3ABBalance:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal3AchPan',	desc: 'BAL3:A:PAN'}, // PatchEfct_Bal3AchPan:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bal3BchPan',	desc: 'BAL3:B:PAN'}, // PatchEfct_Bal3BchPan:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SROnOff',	desc: '/OFF'}, // PatchEfct_SROnOff:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'SRMode',	desc: 'DE'}, // PatchEfct_SRMode:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'SRSendLevel',	desc: 'ND LEVEL'}, // PatchEfct_SRSendLevel:0: 00.00.00.30
	{addr: 0x00000032,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'SRReturnLevel',	desc: 'TURN LEVEL'}, // PatchEfct_SRReturnLevel:0: 00.00.00.32
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SRAdjust',	desc: 'JUST'}, // PatchEfct_SRAdjust:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SRPhase',	desc: 'ASE'}, // PatchEfct_SRPhase:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'MOutStereoLink',	desc: 'STEREO LINK'}, // PatchEfct_MOutStereoLink:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'MOutLPhase',	desc: 'L:PHASE'}, // PatchEfct_MOutLPhase:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'MOutRPhase',	desc: 'R:PHASE'}, // PatchEfct_MOutRPhase:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'SOutStereoLink',	desc: 'STEREO LINK'}, // PatchEfct_SOutStereoLink:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SOutLPhase',	desc: 'L:PHASE'}, // PatchEfct_SOutLPhase:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SOutRPhase',	desc: 'R:PHASE'}, // PatchEfct_SOutRPhase:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'MasterPatchLevel',	desc: 'PATCH LEVEL'}, // PatchEfct_MasterPatchLevel:0: 00.00.00.3c
	{addr: 0x0000003e,	size: INTEGER4x4,	ofs: 0,	min: 400,	max: 2500,	init: 1200,	factor: 10,	name: 'MasterBpm',	desc: 'BPM'}, // PatchEfct_MasterBpm:0: 00.00.00.3e
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 0,	factor: 1,	name: 'MasterKey',	desc: 'KEY'}, // PatchEfct_MasterKey:0: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TempoHold',	desc: 'TEMPO HOLD'}, // PatchEfct_TempoHold:0: 00.00.00.43
	{addr: 0x00000044,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'InputSens',	desc: 'INPUT SENS'}, // PatchEfct_InputSens:0: 00.00.00.44
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'InputBox1',	desc: 'INPUT BOX1'}, // PatchEfct_InputBox1:0: 00.00.00.45
	{addr: 0x00000046,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'InputBox2',	desc: 'INPUT BOX2'}, // PatchEfct_InputBox2:0: 00.00.00.46
	{addr: 0x00000047,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'InputBox3',	desc: 'INPUT BOX3'}, // PatchEfct_InputBox3:0: 00.00.00.47
	{addr: 0x00000048,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 3,	factor: 1,	name: 'InputBox4',	desc: 'INPUT BOX4'}, // PatchEfct_InputBox4:0: 00.00.00.48
	{addr: 0x00000049,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 4,	factor: 1,	name: 'ChainElement1',	desc: 'CHAIN ELEMENT1'}, // PatchEfct_ChainElement1:0: 00.00.00.49
	{addr: 0x0000004a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement2',	desc: 'CHAIN ELEMENT2'}, // PatchEfct_ChainElement2:0: 00.00.00.4a
	{addr: 0x0000004b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 5,	factor: 1,	name: 'ChainElement3',	desc: 'CHAIN ELEMENT3'}, // PatchEfct_ChainElement3:0: 00.00.00.4b
	{addr: 0x0000004c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement4',	desc: 'CHAIN ELEMENT4'}, // PatchEfct_ChainElement4:0: 00.00.00.4c
	{addr: 0x0000004d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 16,	factor: 1,	name: 'ChainElement5',	desc: 'CHAIN ELEMENT5'}, // PatchEfct_ChainElement5:0: 00.00.00.4d
	{addr: 0x0000004e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement6',	desc: 'CHAIN ELEMENT6'}, // PatchEfct_ChainElement6:0: 00.00.00.4e
	{addr: 0x0000004f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 6,	factor: 1,	name: 'ChainElement7',	desc: 'CHAIN ELEMENT7'}, // PatchEfct_ChainElement7:0: 00.00.00.4f
	{addr: 0x00000050,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement8',	desc: 'CHAIN ELEMENT8'}, // PatchEfct_ChainElement8:0: 00.00.00.50
	{addr: 0x00000051,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 7,	factor: 1,	name: 'ChainElement9',	desc: 'CHAIN ELEMENT9'}, // PatchEfct_ChainElement9:0: 00.00.00.51
	{addr: 0x00000052,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 14,	factor: 1,	name: 'ChainElement10',	desc: 'CHAIN ELEMENT10'}, // PatchEfct_ChainElement10:0: 00.00.00.52
	{addr: 0x00000053,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 10,	factor: 1,	name: 'ChainElement11',	desc: 'CHAIN ELEMENT11'}, // PatchEfct_ChainElement11:0: 00.00.00.53
	{addr: 0x00000054,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement12',	desc: 'CHAIN ELEMENT12'}, // PatchEfct_ChainElement12:0: 00.00.00.54
	{addr: 0x00000055,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 0,	factor: 1,	name: 'ChainElement13',	desc: 'CHAIN ELEMENT13'}, // PatchEfct_ChainElement13:0: 00.00.00.55
	{addr: 0x00000056,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 1,	factor: 1,	name: 'ChainElement14',	desc: 'CHAIN ELEMENT14'}, // PatchEfct_ChainElement14:0: 00.00.00.56
	{addr: 0x00000057,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 2,	factor: 1,	name: 'ChainElement15',	desc: 'CHAIN ELEMENT15'}, // PatchEfct_ChainElement15:0: 00.00.00.57
	{addr: 0x00000058,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 8,	factor: 1,	name: 'ChainElement16',	desc: 'CHAIN ELEMENT16'}, // PatchEfct_ChainElement16:0: 00.00.00.58
	{addr: 0x00000059,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 3,	factor: 1,	name: 'ChainElement17',	desc: 'CHAIN ELEMENT17'}, // PatchEfct_ChainElement17:0: 00.00.00.59
	{addr: 0x0000005a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 9,	factor: 1,	name: 'ChainElement18',	desc: 'CHAIN ELEMENT18'}, // PatchEfct_ChainElement18:0: 00.00.00.5a
	{addr: 0x0000005b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 15,	factor: 1,	name: 'ChainElement19',	desc: 'CHAIN ELEMENT19'}, // PatchEfct_ChainElement19:0: 00.00.00.5b
	{addr: 0x0000005c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 11,	factor: 1,	name: 'ChainElement20',	desc: 'CHAIN ELEMENT20'}, // PatchEfct_ChainElement20:0: 00.00.00.5c
	{addr: 0x0000005d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 24,	factor: 1,	name: 'ChainElement21',	desc: 'CHAIN ELEMENT21'}, // PatchEfct_ChainElement21:0: 00.00.00.5d
	{addr: 0x0000005e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 12,	factor: 1,	name: 'ChainElement22',	desc: 'CHAIN ELEMENT22'}, // PatchEfct_ChainElement22:0: 00.00.00.5e
	{addr: 0x0000005f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 13,	factor: 1,	name: 'ChainElement23',	desc: 'CHAIN ELEMENT23'}, // PatchEfct_ChainElement23:0: 00.00.00.5f
	{addr: 0x00000060,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 17,	factor: 1,	name: 'ChainElement24',	desc: 'CHAIN ELEMENT24'}, // PatchEfct_ChainElement24:0: 00.00.00.60
	{addr: 0x00000061,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 18,	factor: 1,	name: 'ChainElement25',	desc: 'CHAIN ELEMENT25'}, // PatchEfct_ChainElement25:0: 00.00.00.61
	{addr: 0x00000062,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 19,	factor: 1,	name: 'ChainElement26',	desc: 'CHAIN ELEMENT26'}, // PatchEfct_ChainElement26:0: 00.00.00.62
	{addr: 0x00000063,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 20,	factor: 1,	name: 'ChainElement27',	desc: 'CHAIN ELEMENT27'}, // PatchEfct_ChainElement27:0: 00.00.00.63
	{addr: 0x00000064,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 21,	factor: 1,	name: 'ChainElement28',	desc: 'CHAIN ELEMENT28'}, // PatchEfct_ChainElement28:0: 00.00.00.64
	{addr: 0x00000065,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 22,	factor: 1,	name: 'ChainElement29',	desc: 'CHAIN ELEMENT29'}, // PatchEfct_ChainElement29:0: 00.00.00.65
	{addr: 0x00000066,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 23,	factor: 1,	name: 'ChainElement30',	desc: 'CHAIN ELEMENT30'}, // PatchEfct_ChainElement30:0: 00.00.00.66
];
var PatchGtr2Midi = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Mode',	desc: 'MODE'}, // PatchGtr2Midi_Mode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'AltTune',	desc: 'ALT TUNE'}, // PatchGtr2Midi_AltTune:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'PlayFeel',	desc: 'PLAY FEEL'}, // PatchGtr2Midi_PlayFeel:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'Chromatic',	desc: 'CHROMATIC'}, // PatchGtr2Midi_Chromatic:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'HoldType',	desc: 'HOLD TYPE'}, // PatchGtr2Midi_HoldType:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 10,	init: 5,	factor: 1,	name: 'Dynamics',	desc: 'DYNAMICS'}, // PatchGtr2Midi_Dynamics:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 2,	factor: 1,	name: 'LowVeloCut',	desc: 'LOW VELO CUT'}, // PatchGtr2Midi_LowVeloCut:0: 00.00.00.06
];
var PatchInst = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'InstSw',	desc: 'INST ON/OFF'}, // PatchInst1_InstSw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 7,	init: 0,	factor: 1,	name: 'InstType',	desc: 'INST TYPE'}, // PatchInst1_InstType:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'InstLevel',	desc: 'INST LEVEL'}, // PatchInst1_InstLevel:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NormalMixSw',	desc: 'NOR MIX SW'}, // PatchInst1_NormalMixSw:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'NormalMixLevel',	desc: 'NOR MIX LEVEL'}, // PatchInst1_NormalMixLevel:0: 00.00.00.04
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel1',	desc: 'STRING LEVEL1'}, // PatchInst1_StringLevel1:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel2',	desc: 'STRING LEVEL2'}, // PatchInst1_StringLevel2:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel3',	desc: 'STRING LEVEL3'}, // PatchInst1_StringLevel3:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel4',	desc: 'STRING LEVEL4'}, // PatchInst1_StringLevel4:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel5',	desc: 'STRING LEVEL5'}, // PatchInst1_StringLevel5:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel6',	desc: 'STRING LEVEL6'}, // PatchInst1_StringLevel6:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan1',	desc: 'STRING PAN 1'}, // PatchInst1_StringPan1:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan2',	desc: 'STRING PAN 2'}, // PatchInst1_StringPan2:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan3',	desc: 'STRING PAN 3'}, // PatchInst1_StringPan3:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan4',	desc: 'STRING PAN 4'}, // PatchInst1_StringPan4:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan5',	desc: 'STRING PAN 5'}, // PatchInst1_StringPan5:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan6',	desc: 'STRING PAN 6'}, // PatchInst1_StringPan6:0: 00.00.00.11
];
var PatchInstBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'InstSw',	desc: 'INST ON/OFF'}, // PatchInst1Bass_InstSw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'InstType',	desc: 'INST TYPE'}, // PatchInst1Bass_InstType:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'InstLevel',	desc: 'INST LEVEL'}, // PatchInst1Bass_InstLevel:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NormalMixSw',	desc: 'NOR MIX SW'}, // PatchInst1Bass_NormalMixSw:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER2x4,	ofs: 0,	min: 0,	max: 200,	init: 100,	factor: 1,	name: 'NormalMixLevel',	desc: 'NOR MIX LEVEL'}, // PatchInst1Bass_NormalMixLevel:0: 00.00.00.04
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevelH',	desc: 'STR LEVEL HiC'}, // PatchInst1Bass_StringLevelH:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel1',	desc: 'STR LEVEL 1st'}, // PatchInst1Bass_StringLevel1:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel2',	desc: 'STR LEVEL 2nd'}, // PatchInst1Bass_StringLevel2:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel3',	desc: 'STR LEVEL 3rd'}, // PatchInst1Bass_StringLevel3:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevel4',	desc: 'STR LEVEL 4th'}, // PatchInst1Bass_StringLevel4:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'StringLevelL',	desc: 'STR LEVEL LowB'}, // PatchInst1Bass_StringLevelL:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPanH',	desc: 'STR PAN HiC'}, // PatchInst1Bass_StringPanH:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan1',	desc: 'STR PAN 1st'}, // PatchInst1Bass_StringPan1:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan2',	desc: 'STR PAN 2nd'}, // PatchInst1Bass_StringPan2:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan3',	desc: 'STR PAN 3rd'}, // PatchInst1Bass_StringPan3:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPan4',	desc: 'STR PAN 4th'}, // PatchInst1Bass_StringPan4:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'StringPanL',	desc: 'STR PAN LowB'}, // PatchInst1Bass_StringPanL:0: 00.00.00.11
];
var PatchInstDynaSynth = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NotUseMonoPolyMode',	desc: 'MONO/POLY SW'}, // PatchInst1DynaSynth_NotUseMonoPolyMode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NotUsePortamentoSw',	desc: 'PORTA SW'}, // PatchInst1DynaSynth_NotUsePortamentoSw:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'NotUsePortamentoRate',	desc: 'PORTA TIME'}, // PatchInst1DynaSynth_NotUsePortamentoRate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NotUsePortamentoMode',	desc: 'PORTA MODE'}, // PatchInst1DynaSynth_NotUsePortamentoMode:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 1,	factor: 1,	name: 'WaveForm',	desc: 'WAVEFORM'}, // PatchInst1DynaSynth_WaveForm:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Pitch',	desc: 'PITCH'}, // PatchInst1DynaSynth_Pitch:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine',	desc: 'FINE'}, // PatchInst1DynaSynth_Fine:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'PulseWidth',	desc: 'PULSE WIDTH'}, // PatchInst1DynaSynth_PulseWidth:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'PwmEnvAttack',	desc: 'PWM ENV ATTACK'}, // PatchInst1DynaSynth_PwmEnvAttack:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'PwmEnvDepth',	desc: 'PWM ENV DEPTH'}, // PatchInst1DynaSynth_PwmEnvDepth:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 10,	factor: 1,	name: 'Detune',	desc: 'DETUNE'}, // PatchInst1DynaSynth_Detune:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sharpness',	desc: 'SHARPNESS'}, // PatchInst1DynaSynth_Sharpness:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Feedback',	desc: 'FEEDBACK'}, // PatchInst1DynaSynth_Feedback:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'Harmonics',	desc: 'HARMONICS'}, // PatchInst1DynaSynth_Harmonics:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'SuperSawDetune',	desc: 'S-SAW DETUNE'}, // PatchInst1DynaSynth_SuperSawDetune:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'PitchEnvAttack',	desc: 'P. ENV ATTACK'}, // PatchInst1DynaSynth_PitchEnvAttack:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'PitchEnvDepth',	desc: 'P. ENV DEPTH'}, // PatchInst1DynaSynth_PitchEnvDepth:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'PitchBendDepth',	desc: 'P. BEND DEPTH'}, // PatchInst1DynaSynth_PitchBendDepth:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'PitchBendCtl',	desc: 'P. BEND CTL'}, // PatchInst1DynaSynth_PitchBendCtl:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SyncSw',	desc: 'SYNC SW'}, // PatchInst1DynaSynth_SyncSw:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseSyncPitch',	desc: 'NotUseSyncPitch'}, // PatchInst1DynaSynth_NotUseSyncPitch:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseSyncFine',	desc: 'NotUseSyncFine'}, // PatchInst1DynaSynth_NotUseSyncFine:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseSyncDepth',	desc: 'NotUseSyncDepth'}, // PatchInst1DynaSynth_NotUseSyncDepth:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'RingSw',	desc: 'RING SW'}, // PatchInst1DynaSynth_RingSw:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseRingPitch',	desc: 'NotUseRingPitch'}, // PatchInst1DynaSynth_NotUseRingPitch:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseRingFine',	desc: 'NotUseRingFine'}, // PatchInst1DynaSynth_NotUseRingFine:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'NotUseRingDepth',	desc: 'NotUseRingDepth'}, // PatchInst1DynaSynth_NotUseRingDepth:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 2,	factor: 1,	name: 'LowVeloCut',	desc: 'LOW VELO CUT'}, // PatchInst1DynaSynth_LowVeloCut:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'FilterSw',	desc: 'FILTER ON/OFF'}, // PatchInst1DynaSynth_FilterSw:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 0,	factor: 1,	name: 'FilterType',	desc: 'TYPE'}, // PatchInst1DynaSynth_FilterType:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'FilterSlope',	desc: 'SLOPE'}, // PatchInst1DynaSynth_FilterSlope:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'FilterCutoff',	desc: 'CUTOFF'}, // PatchInst1DynaSynth_FilterCutoff:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'FilterResonance',	desc: 'RESONANCE'}, // PatchInst1DynaSynth_FilterResonance:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FilterEnvAttack',	desc: 'F. ENV ATTACK'}, // PatchInst1DynaSynth_FilterEnvAttack:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FilterEnvDepth',	desc: 'F. ENV DEPTH'}, // PatchInst1DynaSynth_FilterEnvDepth:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'AmpEnvAttack',	desc: 'A. ENV ATTACK'}, // PatchInst1DynaSynth_AmpEnvAttack:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'NotUseAmpSustainSw',	desc: 'SUSTAIN SW'}, // PatchInst1DynaSynth_NotUseAmpSustainSw:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'AmpLowCut',	desc: 'LOW CUT'}, // PatchInst1DynaSynth_AmpLowCut:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'AmpHighCut',	desc: 'HIGH CUT'}, // PatchInst1DynaSynth_AmpHighCut:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1Sw',	desc: 'LFO1 ON/OFF'}, // PatchInst1DynaSynth_Lfo1Sw:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo1WaveForm',	desc: 'SHAPE'}, // PatchInst1DynaSynth_Lfo1WaveForm:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo1Rate',	desc: 'RATE'}, // PatchInst1DynaSynth_Lfo1Rate:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1DynamicDepth',	desc: 'DYNAMIC DEPTH'}, // PatchInst1DynaSynth_Lfo1DynamicDepth:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1PitchDepth',	desc: 'PITCH DEPTH'}, // PatchInst1DynaSynth_Lfo1PitchDepth:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Lfo1FilterDepth',	desc: 'FILTER DEPTH'}, // PatchInst1DynaSynth_Lfo1FilterDepth:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1AmpDepth',	desc: 'AMP DEPTH'}, // PatchInst1DynaSynth_Lfo1AmpDepth:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1PwmDepth',	desc: 'PWM DEPTH'}, // PatchInst1DynaSynth_Lfo1PwmDepth:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Lfo1FadeTime',	desc: 'FADE TIME'}, // PatchInst1DynaSynth_Lfo1FadeTime:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo1Sync',	desc: 'SYNC'}, // PatchInst1DynaSynth_Lfo1Sync:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2Sw',	desc: 'LFO2 ON/OFF'}, // PatchInst1DynaSynth_Lfo2Sw:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 4,	factor: 1,	name: 'Lfo2WaveForm',	desc: 'SHAPE'}, // PatchInst1DynaSynth_Lfo2WaveForm:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo2Rate',	desc: 'RATE'}, // PatchInst1DynaSynth_Lfo2Rate:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2DynamicDepth',	desc: 'DYNAMIC DEPTH'}, // PatchInst1DynaSynth_Lfo2DynamicDepth:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Lfo2PitchDepth',	desc: 'PITCH DEPTH'}, // PatchInst1DynaSynth_Lfo2PitchDepth:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2FilterDepth',	desc: 'FILTER DEPTH'}, // PatchInst1DynaSynth_Lfo2FilterDepth:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2AmpDepth',	desc: 'AMP DEPTH'}, // PatchInst1DynaSynth_Lfo2AmpDepth:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2PwmDepth',	desc: 'PWM DEPTH'}, // PatchInst1DynaSynth_Lfo2PwmDepth:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Lfo2FadeTime',	desc: 'FADE TIME'}, // PatchInst1DynaSynth_Lfo2FadeTime:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo2Sync',	desc: 'SYNC'}, // PatchInst1DynaSynth_Lfo2Sync:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'PitchTarget',	desc: 'PITCH TARGET'}, // PatchInst1DynaSynth_PitchTarget:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'FilterCutoffTarget',	desc: 'CUTOFF TARGET'}, // PatchInst1DynaSynth_FilterCutoffTarget:0: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'InstLevelTarget',	desc: 'LEVEL TARGET'}, // PatchInst1DynaSynth_InstLevelTarget:0: 00.00.00.3d
	{addr: 0x0000003e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep1Min',	desc: 'PITCH STEP1 MIN'}, // PatchInst1DynaSynth_SeqPitchStep1Min:0: 00.00.00.3e
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep1Max',	desc: 'PITCH STEP1 MAX'}, // PatchInst1DynaSynth_SeqPitchStep1Max:0: 00.00.00.3f
	{addr: 0x00000040,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep2Min',	desc: 'PITCH STEP2 MIN'}, // PatchInst1DynaSynth_SeqPitchStep2Min:0: 00.00.00.40
	{addr: 0x00000041,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep2Max',	desc: 'PITCH STEP2 MAX'}, // PatchInst1DynaSynth_SeqPitchStep2Max:0: 00.00.00.41
	{addr: 0x00000042,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep3Min',	desc: 'PITCH STEP3 MIN'}, // PatchInst1DynaSynth_SeqPitchStep3Min:0: 00.00.00.42
	{addr: 0x00000043,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep3Max',	desc: 'PITCH STEP3 MAX'}, // PatchInst1DynaSynth_SeqPitchStep3Max:0: 00.00.00.43
	{addr: 0x00000044,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep4Min',	desc: 'PITCH STEP4 MIN'}, // PatchInst1DynaSynth_SeqPitchStep4Min:0: 00.00.00.44
	{addr: 0x00000045,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep4Max',	desc: 'PITCH STEP4 MAX'}, // PatchInst1DynaSynth_SeqPitchStep4Max:0: 00.00.00.45
	{addr: 0x00000046,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep5Min',	desc: 'PITCH STEP5 MIN'}, // PatchInst1DynaSynth_SeqPitchStep5Min:0: 00.00.00.46
	{addr: 0x00000047,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep5Max',	desc: 'PITCH STEP5 MAX'}, // PatchInst1DynaSynth_SeqPitchStep5Max:0: 00.00.00.47
	{addr: 0x00000048,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep6Min',	desc: 'PITCH STEP6 MIN'}, // PatchInst1DynaSynth_SeqPitchStep6Min:0: 00.00.00.48
	{addr: 0x00000049,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep6Max',	desc: 'PITCH STEP6 MAX'}, // PatchInst1DynaSynth_SeqPitchStep6Max:0: 00.00.00.49
	{addr: 0x0000004a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep7Min',	desc: 'PITCH STEP7 MIN'}, // PatchInst1DynaSynth_SeqPitchStep7Min:0: 00.00.00.4a
	{addr: 0x0000004b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep7Max',	desc: 'PITCH STEP7 MAX'}, // PatchInst1DynaSynth_SeqPitchStep7Max:0: 00.00.00.4b
	{addr: 0x0000004c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep8Min',	desc: 'PITCH STEP8 MIN'}, // PatchInst1DynaSynth_SeqPitchStep8Min:0: 00.00.00.4c
	{addr: 0x0000004d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep8Max',	desc: 'PITCH STEP8 MAX'}, // PatchInst1DynaSynth_SeqPitchStep8Max:0: 00.00.00.4d
	{addr: 0x0000004e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep9Min',	desc: 'PITCH STEP9 MIN'}, // PatchInst1DynaSynth_SeqPitchStep9Min:0: 00.00.00.4e
	{addr: 0x0000004f,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep9Max',	desc: 'PITCH STEP9 MAX'}, // PatchInst1DynaSynth_SeqPitchStep9Max:0: 00.00.00.4f
	{addr: 0x00000050,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep10Min',	desc: 'PITCH STEP10 MIN'}, // PatchInst1DynaSynth_SeqPitchStep10Min:0: 00.00.00.50
	{addr: 0x00000051,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep10Max',	desc: 'PITCH STEP10 MAX'}, // PatchInst1DynaSynth_SeqPitchStep10Max:0: 00.00.00.51
	{addr: 0x00000052,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep11Min',	desc: 'PITCH STEP11 MIN'}, // PatchInst1DynaSynth_SeqPitchStep11Min:0: 00.00.00.52
	{addr: 0x00000053,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep11Max',	desc: 'PITCH STEP11 MAX'}, // PatchInst1DynaSynth_SeqPitchStep11Max:0: 00.00.00.53
	{addr: 0x00000054,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep12Min',	desc: 'PITCH STEP12 MIN'}, // PatchInst1DynaSynth_SeqPitchStep12Min:0: 00.00.00.54
	{addr: 0x00000055,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep12Max',	desc: 'PITCH STEP12 MAX'}, // PatchInst1DynaSynth_SeqPitchStep12Max:0: 00.00.00.55
	{addr: 0x00000056,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep13Min',	desc: 'PITCH STEP13 MIN'}, // PatchInst1DynaSynth_SeqPitchStep13Min:0: 00.00.00.56
	{addr: 0x00000057,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep13Max',	desc: 'PITCH STEP13 MAX'}, // PatchInst1DynaSynth_SeqPitchStep13Max:0: 00.00.00.57
	{addr: 0x00000058,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep14Min',	desc: 'PITCH STEP14 MIN'}, // PatchInst1DynaSynth_SeqPitchStep14Min:0: 00.00.00.58
	{addr: 0x00000059,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep14Max',	desc: 'PITCH STEP14 MAX'}, // PatchInst1DynaSynth_SeqPitchStep14Max:0: 00.00.00.59
	{addr: 0x0000005a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep15Min',	desc: 'PITCH STEP15 MIN'}, // PatchInst1DynaSynth_SeqPitchStep15Min:0: 00.00.00.5a
	{addr: 0x0000005b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep15Max',	desc: 'PITCH STEP15 MAX'}, // PatchInst1DynaSynth_SeqPitchStep15Max:0: 00.00.00.5b
	{addr: 0x0000005c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'SeqPitchStep16Min',	desc: 'PITCH STEP16 MIN'}, // PatchInst1DynaSynth_SeqPitchStep16Min:0: 00.00.00.5c
	{addr: 0x0000005d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'SeqPitchStep16Max',	desc: 'PITCH STEP16 MAX'}, // PatchInst1DynaSynth_SeqPitchStep16Max:0: 00.00.00.5d
	{addr: 0x0000005e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep1Min',	desc: 'FILTER CUTOFF STEP1 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep1Min:0: 00.00.00.5e
	{addr: 0x0000005f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep1Max',	desc: 'FILTER CUTOFF STEP1 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep1Max:0: 00.00.00.5f
	{addr: 0x00000060,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep2Min',	desc: 'FILTER CUTOFF STEP2 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep2Min:0: 00.00.00.60
	{addr: 0x00000061,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep2Max',	desc: 'FILTER CUTOFF STEP2 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep2Max:0: 00.00.00.61
	{addr: 0x00000062,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep3Min',	desc: 'FILTER CUTOFF STEP3 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep3Min:0: 00.00.00.62
	{addr: 0x00000063,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep3Max',	desc: 'FILTER CUTOFF STEP3 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep3Max:0: 00.00.00.63
	{addr: 0x00000064,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep4Min',	desc: 'FILTER CUTOFF STEP4 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep4Min:0: 00.00.00.64
	{addr: 0x00000065,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep4Max',	desc: 'FILTER CUTOFF STEP4 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep4Max:0: 00.00.00.65
	{addr: 0x00000066,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep5Min',	desc: 'FILTER CUTOFF STEP5 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep5Min:0: 00.00.00.66
	{addr: 0x00000067,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep5Max',	desc: 'FILTER CUTOFF STEP5 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep5Max:0: 00.00.00.67
	{addr: 0x00000068,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep6Min',	desc: 'FILTER CUTOFF STEP6 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep6Min:0: 00.00.00.68
	{addr: 0x00000069,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep6Max',	desc: 'FILTER CUTOFF STEP6 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep6Max:0: 00.00.00.69
	{addr: 0x0000006a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep7Min',	desc: 'FILTER CUTOFF STEP7 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep7Min:0: 00.00.00.6a
	{addr: 0x0000006b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep7Max',	desc: 'FILTER CUTOFF STEP7 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep7Max:0: 00.00.00.6b
	{addr: 0x0000006c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep8Min',	desc: 'FILTER CUTOFF STEP8 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep8Min:0: 00.00.00.6c
	{addr: 0x0000006d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep8Max',	desc: 'FILTER CUTOFF STEP8 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep8Max:0: 00.00.00.6d
	{addr: 0x0000006e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep9Min',	desc: 'FILTER CUTOFF STEP9 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep9Min:0: 00.00.00.6e
	{addr: 0x0000006f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep9Max',	desc: 'FILTER CUTOFF STEP9 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep9Max:0: 00.00.00.6f
	{addr: 0x00000070,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep10Min',	desc: 'FILTER CUTOFF STEP10 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep10Min:0: 00.00.00.70
	{addr: 0x00000071,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep10Max',	desc: 'FILTER CUTOFF STEP10 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep10Max:0: 00.00.00.71
	{addr: 0x00000072,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep11Min',	desc: 'FILTER CUTOFF STEP11 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep11Min:0: 00.00.00.72
	{addr: 0x00000073,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep11Max',	desc: 'FILTER CUTOFF STEP11 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep11Max:0: 00.00.00.73
	{addr: 0x00000074,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep12Min',	desc: 'FILTER CUTOFF STEP12 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep12Min:0: 00.00.00.74
	{addr: 0x00000075,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep12Max',	desc: 'FILTER CUTOFF STEP12 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep12Max:0: 00.00.00.75
	{addr: 0x00000076,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep13Min',	desc: 'FILTER CUTOFF STEP13 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep13Min:0: 00.00.00.76
	{addr: 0x00000077,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep13Max',	desc: 'FILTER CUTOFF STEP13 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep13Max:0: 00.00.00.77
	{addr: 0x00000078,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep14Min',	desc: 'FILTER CUTOFF STEP14 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep14Min:0: 00.00.00.78
	{addr: 0x00000079,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep14Max',	desc: 'FILTER CUTOFF STEP14 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep14Max:0: 00.00.00.79
	{addr: 0x0000007a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep15Min',	desc: 'FILTER CUTOFF STEP15 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep15Min:0: 00.00.00.7a
	{addr: 0x0000007b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep15Max',	desc: 'FILTER CUTOFF STEP15 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep15Max:0: 00.00.00.7b
	{addr: 0x0000007c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SeqFltCofStep16Min',	desc: 'FILTER CUTOFF STEP16 MIN'}, // PatchInst1DynaSynth_SeqFltCofStep16Min:0: 00.00.00.7c
	{addr: 0x0000007d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'SeqFltCofStep16Max',	desc: 'FILTER CUTOFF STEP16 MAX'}, // PatchInst1DynaSynth_SeqFltCofStep16Max:0: 00.00.00.7d
	{addr: 0x0000007e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep1Min',	desc: 'INST LEVEL STEP1 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep1Min:0: 00.00.00.7e
	{addr: 0x0000007f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep1Max',	desc: 'INST LEVEL STEP1 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep1Max:0: 00.00.00.7f
	{addr: 0x00000100,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep2Min',	desc: 'INST LEVEL STEP2 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep2Min:0: 00.00.01.00
	{addr: 0x00000101,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep2Max',	desc: 'INST LEVEL STEP2 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep2Max:0: 00.00.01.01
	{addr: 0x00000102,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep3Min',	desc: 'INST LEVEL STEP3 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep3Min:0: 00.00.01.02
	{addr: 0x00000103,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep3Max',	desc: 'INST LEVEL STEP3 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep3Max:0: 00.00.01.03
	{addr: 0x00000104,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep4Min',	desc: 'INST LEVEL STEP4 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep4Min:0: 00.00.01.04
	{addr: 0x00000105,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep4Max',	desc: 'INST LEVEL STEP4 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep4Max:0: 00.00.01.05
	{addr: 0x00000106,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep5Min',	desc: 'INST LEVEL STEP5 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep5Min:0: 00.00.01.06
	{addr: 0x00000107,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep5Max',	desc: 'INST LEVEL STEP5 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep5Max:0: 00.00.01.07
	{addr: 0x00000108,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep6Min',	desc: 'INST LEVEL STEP6 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep6Min:0: 00.00.01.08
	{addr: 0x00000109,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep6Max',	desc: 'INST LEVEL STEP6 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep6Max:0: 00.00.01.09
	{addr: 0x0000010a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep7Min',	desc: 'INST LEVEL STEP7 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep7Min:0: 00.00.01.0a
	{addr: 0x0000010b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep7Max',	desc: 'INST LEVEL STEP7 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep7Max:0: 00.00.01.0b
	{addr: 0x0000010c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep8Min',	desc: 'INST LEVEL STEP8 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep8Min:0: 00.00.01.0c
	{addr: 0x0000010d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep8Max',	desc: 'INST LEVEL STEP8 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep8Max:0: 00.00.01.0d
	{addr: 0x0000010e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep9Min',	desc: 'INST LEVEL STEP9 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep9Min:0: 00.00.01.0e
	{addr: 0x0000010f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep9Max',	desc: 'INST LEVEL STEP9 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep9Max:0: 00.00.01.0f
	{addr: 0x00000110,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep10Min',	desc: 'INST LEVEL STEP10 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep10Min:0: 00.00.01.10
	{addr: 0x00000111,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep10Max',	desc: 'INST LEVEL STEP10 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep10Max:0: 00.00.01.11
	{addr: 0x00000112,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep11Min',	desc: 'INST LEVEL STEP11 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep11Min:0: 00.00.01.12
	{addr: 0x00000113,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep11Max',	desc: 'INST LEVEL STEP11 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep11Max:0: 00.00.01.13
	{addr: 0x00000114,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep12Min',	desc: 'INST LEVEL STEP12 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep12Min:0: 00.00.01.14
	{addr: 0x00000115,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep12Max',	desc: 'INST LEVEL STEP12 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep12Max:0: 00.00.01.15
	{addr: 0x00000116,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep13Min',	desc: 'INST LEVEL STEP13 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep13Min:0: 00.00.01.16
	{addr: 0x00000117,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep13Max',	desc: 'INST LEVEL STEP13 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep13Max:0: 00.00.01.17
	{addr: 0x00000118,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep14Min',	desc: 'INST LEVEL STEP14 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep14Min:0: 00.00.01.18
	{addr: 0x00000119,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep14Max',	desc: 'INST LEVEL STEP14 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep14Max:0: 00.00.01.19
	{addr: 0x0000011a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep15Min',	desc: 'INST LEVEL STEP15 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep15Min:0: 00.00.01.1a
	{addr: 0x0000011b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep15Max',	desc: 'INST LEVEL STEP15 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep15Max:0: 00.00.01.1b
	{addr: 0x0000011c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'SeqInstLevStep16Min',	desc: 'INST LEVEL STEP16 MIN'}, // PatchInst1DynaSynth_SeqInstLevStep16Min:0: 00.00.01.1c
	{addr: 0x0000011d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'SeqInstLevStep16Max',	desc: 'INST LEVEL STEP16 MAX'}, // PatchInst1DynaSynth_SeqInstLevStep16Max:0: 00.00.01.1d
	{addr: 0x0000011e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Seq1Sw',	desc: 'ON/OFF'}, // PatchInst1DynaSynth_Seq1Sw:0: 00.00.01.1e
	{addr: 0x0000011f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Seq1Sync',	desc: 'SYNC'}, // PatchInst1DynaSynth_Seq1Sync:0: 00.00.01.1f
	{addr: 0x00000120,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 16,	init: 4,	factor: 1,	name: 'Seq1LoopLength',	desc: 'LOOP LENGTH'}, // PatchInst1DynaSynth_Seq1LoopLength:0: 00.00.01.20
	{addr: 0x00000121,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 109,	factor: 1,	name: 'Seq1Rate',	desc: 'RATE'}, // PatchInst1DynaSynth_Seq1Rate:0: 00.00.01.21
	{addr: 0x00000122,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1OneShotMode',	desc: '1 SHOT'}, // PatchInst1DynaSynth_Seq1OneShotMode:0: 00.00.01.22
	{addr: 0x00000123,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq1TurboSw',	desc: 'TURBO'}, // PatchInst1DynaSynth_Seq1TurboSw:0: 00.00.01.23
	{addr: 0x00000124,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 1,	factor: 1,	name: 'Seq1Step1Curve',	desc: 'STEP1 CURVE'}, // PatchInst1DynaSynth_Seq1Step1Curve:0: 00.00.01.24
	{addr: 0x00000125,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 1,	factor: 1,	name: 'Seq1Step2Curve',	desc: 'STEP2 CURVE'}, // PatchInst1DynaSynth_Seq1Step2Curve:0: 00.00.01.25
	{addr: 0x00000126,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 1,	factor: 1,	name: 'Seq1Step3Curve',	desc: 'STEP3 CURVE'}, // PatchInst1DynaSynth_Seq1Step3Curve:0: 00.00.01.26
	{addr: 0x00000127,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 1,	factor: 1,	name: 'Seq1Step4Curve',	desc: 'STEP4 CURVE'}, // PatchInst1DynaSynth_Seq1Step4Curve:0: 00.00.01.27
	{addr: 0x00000128,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step5Curve',	desc: 'STEP5 CURVE'}, // PatchInst1DynaSynth_Seq1Step5Curve:0: 00.00.01.28
	{addr: 0x00000129,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step6Curve',	desc: 'STEP6 CURVE'}, // PatchInst1DynaSynth_Seq1Step6Curve:0: 00.00.01.29
	{addr: 0x0000012a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step7Curve',	desc: 'STEP7 CURVE'}, // PatchInst1DynaSynth_Seq1Step7Curve:0: 00.00.01.2a
	{addr: 0x0000012b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step8Curve',	desc: 'STEP8 CURVE'}, // PatchInst1DynaSynth_Seq1Step8Curve:0: 00.00.01.2b
	{addr: 0x0000012c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step9Curve',	desc: 'STEP9 CURVE'}, // PatchInst1DynaSynth_Seq1Step9Curve:0: 00.00.01.2c
	{addr: 0x0000012d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step10Curve',	desc: 'STEP10 CURVE'}, // PatchInst1DynaSynth_Seq1Step10Curve:0: 00.00.01.2d
	{addr: 0x0000012e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step11Curve',	desc: 'STEP11 CURVE'}, // PatchInst1DynaSynth_Seq1Step11Curve:0: 00.00.01.2e
	{addr: 0x0000012f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step12Curve',	desc: 'STEP12 CURVE'}, // PatchInst1DynaSynth_Seq1Step12Curve:0: 00.00.01.2f
	{addr: 0x00000130,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step13Curve',	desc: 'STEP13 CURVE'}, // PatchInst1DynaSynth_Seq1Step13Curve:0: 00.00.01.30
	{addr: 0x00000131,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step14Curve',	desc: 'STEP14 CURVE'}, // PatchInst1DynaSynth_Seq1Step14Curve:0: 00.00.01.31
	{addr: 0x00000132,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step15Curve',	desc: 'STEP15 CURVE'}, // PatchInst1DynaSynth_Seq1Step15Curve:0: 00.00.01.32
	{addr: 0x00000133,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq1Step16Curve',	desc: 'STEP16 CURVE'}, // PatchInst1DynaSynth_Seq1Step16Curve:0: 00.00.01.33
	{addr: 0x00000134,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Seq2Sw',	desc: 'ON/OFF'}, // PatchInst1DynaSynth_Seq2Sw:0: 00.00.01.34
	{addr: 0x00000135,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Seq2Sync',	desc: 'SYNC'}, // PatchInst1DynaSynth_Seq2Sync:0: 00.00.01.35
	{addr: 0x00000136,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 16,	init: 4,	factor: 1,	name: 'Seq2LoopLength',	desc: 'LOOP LENGTH'}, // PatchInst1DynaSynth_Seq2LoopLength:0: 00.00.01.36
	{addr: 0x00000137,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 109,	factor: 1,	name: 'Seq2Rate',	desc: 'RATE'}, // PatchInst1DynaSynth_Seq2Rate:0: 00.00.01.37
	{addr: 0x00000138,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2OneShotMode',	desc: '1 SHOT'}, // PatchInst1DynaSynth_Seq2OneShotMode:0: 00.00.01.38
	{addr: 0x00000139,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Seq2TurboSw',	desc: 'TURBO'}, // PatchInst1DynaSynth_Seq2TurboSw:0: 00.00.01.39
	{addr: 0x0000013a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 2,	factor: 1,	name: 'Seq2Step1Curve',	desc: 'STEP1 CURVE'}, // PatchInst1DynaSynth_Seq2Step1Curve:0: 00.00.01.3a
	{addr: 0x0000013b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 2,	factor: 1,	name: 'Seq2Step2Curve',	desc: 'STEP2 CURVE'}, // PatchInst1DynaSynth_Seq2Step2Curve:0: 00.00.01.3b
	{addr: 0x0000013c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 2,	factor: 1,	name: 'Seq2Step3Curve',	desc: 'STEP3 CURVE'}, // PatchInst1DynaSynth_Seq2Step3Curve:0: 00.00.01.3c
	{addr: 0x0000013d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 2,	factor: 1,	name: 'Seq2Step4Curve',	desc: 'STEP4 CURVE'}, // PatchInst1DynaSynth_Seq2Step4Curve:0: 00.00.01.3d
	{addr: 0x0000013e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step5Curve',	desc: 'STEP5 CURVE'}, // PatchInst1DynaSynth_Seq2Step5Curve:0: 00.00.01.3e
	{addr: 0x0000013f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step6Curve',	desc: 'STEP6 CURVE'}, // PatchInst1DynaSynth_Seq2Step6Curve:0: 00.00.01.3f
	{addr: 0x00000140,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step7Curve',	desc: 'STEP7 CURVE'}, // PatchInst1DynaSynth_Seq2Step7Curve:0: 00.00.01.40
	{addr: 0x00000141,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step8Curve',	desc: 'STEP8 CURVE'}, // PatchInst1DynaSynth_Seq2Step8Curve:0: 00.00.01.41
	{addr: 0x00000142,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step9Curve',	desc: 'STEP9 CURVE'}, // PatchInst1DynaSynth_Seq2Step9Curve:0: 00.00.01.42
	{addr: 0x00000143,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step10Curve',	desc: 'STEP10 CURVE'}, // PatchInst1DynaSynth_Seq2Step10Curve:0: 00.00.01.43
	{addr: 0x00000144,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step11Curve',	desc: 'STEP11 CURVE'}, // PatchInst1DynaSynth_Seq2Step11Curve:0: 00.00.01.44
	{addr: 0x00000145,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step12Curve',	desc: 'STEP12 CURVE'}, // PatchInst1DynaSynth_Seq2Step12Curve:0: 00.00.01.45
	{addr: 0x00000146,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step13Curve',	desc: 'STEP13 CURVE'}, // PatchInst1DynaSynth_Seq2Step13Curve:0: 00.00.01.46
	{addr: 0x00000147,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step14Curve',	desc: 'STEP14 CURVE'}, // PatchInst1DynaSynth_Seq2Step14Curve:0: 00.00.01.47
	{addr: 0x00000148,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step15Curve',	desc: 'STEP15 CURVE'}, // PatchInst1DynaSynth_Seq2Step15Curve:0: 00.00.01.48
	{addr: 0x00000149,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 12,	init: 0,	factor: 1,	name: 'Seq2Step16Curve',	desc: 'STEP16 CURVE'}, // PatchInst1DynaSynth_Seq2Step16Curve:0: 00.00.01.49
	{addr: 0x0000014a,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 60,	init: 1,	factor: 1,	name: 'LFade',	desc: 'L. FADE'}, // PatchInst1DynaSynth_LFade:0: 00.00.01.4a
	{addr: 0x0000014b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 67,	init: 0,	factor: 1,	name: 'Lower',	desc: 'LOWER'}, // PatchInst1DynaSynth_Lower:0: 00.00.01.4b
	{addr: 0x0000014c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 67,	init: 67,	factor: 1,	name: 'Upper',	desc: 'UPPER'}, // PatchInst1DynaSynth_Upper:0: 00.00.01.4c
	{addr: 0x0000014d,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 60,	init: 1,	factor: 1,	name: 'UFade',	desc: 'U. FADE'}, // PatchInst1DynaSynth_UFade:0: 00.00.01.4d
];
var PatchInstOscSynth = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'OscMode',	desc: 'MODE'}, // PatchInst1OscSynth_OscMode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'WaveForm1',	desc: 'WAVEFORM1'}, // PatchInst1OscSynth_WaveForm1:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Pitch1',	desc: 'PITCH1'}, // PatchInst1OscSynth_Pitch1:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine1',	desc: 'FINE1'}, // PatchInst1OscSynth_Fine1:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'PulseWidth1',	desc: 'PULSE WIDTH1'}, // PatchInst1OscSynth_PulseWidth1:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'PWModRate1',	desc: 'PW MOD RATE1'}, // PatchInst1OscSynth_PWModRate1:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: 'PitchEnvAttack1',	desc: 'P. ENV ATTACK1'}, // PatchInst1OscSynth_PitchEnvAttack1:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'PitchEnvDecay1',	desc: 'P. ENV DECAY1'}, // PatchInst1OscSynth_PitchEnvDecay1:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 16,	min: -12,	max: 12,	init: 0,	factor: 1,	name: 'PitchEnvDepth1',	desc: 'P. ENV DEPTH1'}, // PatchInst1OscSynth_PitchEnvDepth1:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level1',	desc: 'LEVEL1'}, // PatchInst1OscSynth_Level1:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 2,	factor: 1,	name: 'WaveForm2',	desc: 'WAVEFORM2'}, // PatchInst1OscSynth_WaveForm2:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 7,	factor: 1,	name: 'Pitch2',	desc: 'PITCH2'}, // PatchInst1OscSynth_Pitch2:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine2',	desc: 'FINE2'}, // PatchInst1OscSynth_Fine2:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'PulseWidth2',	desc: 'PULSE WIDTH2'}, // PatchInst1OscSynth_PulseWidth2:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'PWModRate2',	desc: 'PW MOD RATE2'}, // PatchInst1OscSynth_PWModRate2:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: 'PitchEnvAttack2',	desc: 'P. ENV ATTACK2'}, // PatchInst1OscSynth_PitchEnvAttack2:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'PitchEnvDecay2',	desc: 'P. ENV DECAY2'}, // PatchInst1OscSynth_PitchEnvDecay2:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 16,	min: -12,	max: 12,	init: 0,	factor: 1,	name: 'PitchEnvDepth2',	desc: 'P. ENV DEPTH2'}, // PatchInst1OscSynth_PitchEnvDepth2:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level2',	desc: 'LEVEL2'}, // PatchInst1OscSynth_Level2:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'MonoPolyMode',	desc: 'MONO/POLY SW'}, // PatchInst1OscSynth_MonoPolyMode:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Chromatic',	desc: 'CHROMATIC'}, // PatchInst1OscSynth_Chromatic:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PortamentoSw',	desc: 'PORTA SW'}, // PatchInst1OscSynth_PortamentoSw:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'PortamentoRate',	desc: 'PORTA TIME'}, // PatchInst1OscSynth_PortamentoRate:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'PortamentoMode',	desc: 'PORTA MODE'}, // PatchInst1OscSynth_PortamentoMode:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'HoldMode',	desc: 'HOLD MODE'}, // PatchInst1OscSynth_HoldMode:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 2,	factor: 1,	name: 'LowVeloCut',	desc: 'LOW VELO CUT'}, // PatchInst1OscSynth_LowVeloCut:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'FilterSw',	desc: 'FILTER ON/OFF'}, // PatchInst1OscSynth_FilterSw:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 0,	factor: 1,	name: 'FilterType',	desc: 'TYPE'}, // PatchInst1OscSynth_FilterType:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'FilterSlope',	desc: 'SLOPE'}, // PatchInst1OscSynth_FilterSlope:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FilterCutoff',	desc: 'CUTOFF'}, // PatchInst1OscSynth_FilterCutoff:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'FilterCutoffFollow',	desc: 'CUTOFF FOLLOW'}, // PatchInst1OscSynth_FilterCutoffFollow:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FilterResonance',	desc: 'RESONANCE'}, // PatchInst1OscSynth_FilterResonance:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FilterVeloSens',	desc: 'VELOCITY SENS'}, // PatchInst1OscSynth_FilterVeloSens:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 5,	factor: 1,	name: 'FilterEnvAttack',	desc: 'F. ENV ATTACK'}, // PatchInst1OscSynth_FilterEnvAttack:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'FilterEnvDecay',	desc: 'F. ENV DECAY'}, // PatchInst1OscSynth_FilterEnvDecay:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: 'FilterEnvSustain',	desc: 'F. ENV SUSTAIN'}, // PatchInst1OscSynth_FilterEnvSustain:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 2,	factor: 1,	name: 'FilterEnvRelease',	desc: 'F. ENV RELEASE'}, // PatchInst1OscSynth_FilterEnvRelease:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 10,	factor: 1,	name: 'FilterEnvDepth',	desc: 'F. ENV DEPTH'}, // PatchInst1OscSynth_FilterEnvDepth:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpVeloSens',	desc: 'VELOCITY SENS'}, // PatchInst1OscSynth_AmpVeloSens:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpEnvAttack',	desc: 'A. ENV ATTACK'}, // PatchInst1OscSynth_AmpEnvAttack:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'AmpEnvDecay',	desc: 'A. ENV DECAY'}, // PatchInst1OscSynth_AmpEnvDecay:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 35,	factor: 1,	name: 'AmpEnvSustain',	desc: 'A. ENV SUSTAIN'}, // PatchInst1OscSynth_AmpEnvSustain:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 2,	factor: 1,	name: 'AmpEnvRelease',	desc: 'A. ENV RELEASE'}, // PatchInst1OscSynth_AmpEnvRelease:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'AmpLowCut',	desc: 'LOW CUT'}, // PatchInst1OscSynth_AmpLowCut:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'AmpHighCut',	desc: 'HIGH CUT'}, // PatchInst1OscSynth_AmpHighCut:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo1Sw',	desc: 'LFO1 ON/OFF'}, // PatchInst1OscSynth_Lfo1Sw:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Lfo1WaveForm',	desc: 'SHAPE'}, // PatchInst1OscSynth_Lfo1WaveForm:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo1Rate',	desc: 'RATE'}, // PatchInst1OscSynth_Lfo1Rate:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1Pitch1Depth',	desc: 'PITCH1 DEPTH'}, // PatchInst1OscSynth_Lfo1Pitch1Depth:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1Pitch2Depth',	desc: 'PITCH2 DEPTH'}, // PatchInst1OscSynth_Lfo1Pitch2Depth:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'Lfo1FilterDepth',	desc: 'FILTER DEPTH'}, // PatchInst1OscSynth_Lfo1FilterDepth:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1AmpDepth',	desc: 'AMP DEPTH'}, // PatchInst1OscSynth_Lfo1AmpDepth:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1DelayTime',	desc: 'DELAY TIME'}, // PatchInst1OscSynth_Lfo1DelayTime:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo1FadeTime',	desc: 'FADE TIME'}, // PatchInst1OscSynth_Lfo1FadeTime:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo1Sync',	desc: 'SYNC'}, // PatchInst1OscSynth_Lfo1Sync:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Lfo2Sw',	desc: 'LFO2 ON/OFF'}, // PatchInst1OscSynth_Lfo2Sw:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 4,	factor: 1,	name: 'Lfo2WaveForm',	desc: 'SHAPE'}, // PatchInst1OscSynth_Lfo2WaveForm:0: 00.00.00.38
	{addr: 0x00000039,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Lfo2Rate',	desc: 'RATE'}, // PatchInst1OscSynth_Lfo2Rate:0: 00.00.00.39
	{addr: 0x0000003a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Lfo2Pitch1Depth',	desc: 'PITCH1 DEPTH'}, // PatchInst1OscSynth_Lfo2Pitch1Depth:0: 00.00.00.3a
	{addr: 0x0000003b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Lfo2Pitch2Depth',	desc: 'PITCH2 DEPTH'}, // PatchInst1OscSynth_Lfo2Pitch2Depth:0: 00.00.00.3b
	{addr: 0x0000003c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2FilterDepth',	desc: 'FILTER DEPTH'}, // PatchInst1OscSynth_Lfo2FilterDepth:0: 00.00.00.3c
	{addr: 0x0000003d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2AmpDepth',	desc: 'AMP DEPTH'}, // PatchInst1OscSynth_Lfo2AmpDepth:0: 00.00.00.3d
	{addr: 0x0000003e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2DelayTime',	desc: 'DELAY TIME'}, // PatchInst1OscSynth_Lfo2DelayTime:0: 00.00.00.3e
	{addr: 0x0000003f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Lfo2FadeTime',	desc: 'FADE TIME'}, // PatchInst1OscSynth_Lfo2FadeTime:0: 00.00.00.3f
	{addr: 0x00000040,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Lfo2Sync',	desc: 'SYNC'}, // PatchInst1OscSynth_Lfo2Sync:0: 00.00.00.40
];
var PatchInstGr300 = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Mode',	desc: 'MODE'}, // PatchInst1Gr300_Mode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'CompSw',	desc: 'COMP SW'}, // PatchInst1Gr300_CompSw:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 75,	factor: 1,	name: 'Cutoff',	desc: 'CUTOFF'}, // PatchInst1Gr300_Cutoff:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1Gr300_Resonance:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'EnvModSw',	desc: 'ENV MOD SW'}, // PatchInst1Gr300_EnvModSw:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EnvModSens',	desc: 'ENV MOD SENS'}, // PatchInst1Gr300_EnvModSens:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'EnvModAttack',	desc: 'ENV MOD ATTACK'}, // PatchInst1Gr300_EnvModAttack:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'PitchSw',	desc: 'PITCH SW'}, // PatchInst1Gr300_PitchSw:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 16,	min: -12,	max: 12,	init: 0,	factor: 1,	name: 'PitchA',	desc: 'PITCH A'}, // PatchInst1Gr300_PitchA:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FineA',	desc: 'FINE A'}, // PatchInst1Gr300_FineA:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 16,	min: -12,	max: 12,	init: 0,	factor: 1,	name: 'PitchB',	desc: 'PITCH B'}, // PatchInst1Gr300_PitchB:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FineB',	desc: 'FINE B'}, // PatchInst1Gr300_FineB:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'DuetSw',	desc: 'DUET SW'}, // PatchInst1Gr300_DuetSw:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SweepSw',	desc: 'SWEEP SW'}, // PatchInst1Gr300_SweepSw:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SweepRise',	desc: 'SWEEP RISE'}, // PatchInst1Gr300_SweepRise:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'SweepFall',	desc: 'SWEEP FALL'}, // PatchInst1Gr300_SweepFall:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'VibratoSw',	desc: 'VIBRATO SW'}, // PatchInst1Gr300_VibratoSw:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'VibratoRate',	desc: 'VIBRATO RATE'}, // PatchInst1Gr300_VibratoRate:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'VibratoDepth',	desc: 'VIBRATO DEPTH'}, // PatchInst1Gr300_VibratoDepth:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchInst1Gr300_LowCut:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchInst1Gr300_HighCut:0: 00.00.00.14
];
var PatchInstEGtr = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1EGtr_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'PuSelect',	desc: 'PU SELECT'}, // PatchInst1EGtr_PuSelect:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'ToneType',	desc: 'TONE TYPE'}, // PatchInst1EGtr_ToneType:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1EGtr_Sens:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchInst1EGtr_Depth:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1EGtr_Attack:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1EGtr_Resonance:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EGtr_DirectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Volume',	desc: 'VOLUME'}, // PatchInst1EGtr_Volume:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1EGtr_Tone:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1EGtr_AmpSw:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 1,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1EGtr_AmpType:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1EGtr_AmpGain:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1EGtr_AmpTCompPre:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1EGtr_AmpTCompPost:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1EGtr_AmpLevel:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1EGtr_AmpBass:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1EGtr_AmpMiddle:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1EGtr_AmpTreble:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1EGtr_AmpPresence:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1EGtr_AmpBright:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1EGtr_AmpGainSw:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1EGtr_AmpSoloSw:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1EGtr_AmpSoloLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1EGtr_AmpSpType:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1EGtr_AmpMicType:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1EGtr_AmpMicDistance:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1EGtr_AmpMicPosition:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1EGtr_AmpMicLevel:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EGtr_AmpDirectLevel:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1EGtr_NsSw:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1EGtr_NsThreshold:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1EGtr_NsRelease:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1EGtr_EqSw:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1EGtr_EqLowCut:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1EGtr_EqLowGain:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1EGtr_EqLowMidFreq:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1EGtr_EqLowMidQ:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1EGtr_EqLowMidGain:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1EGtr_EqHighMidFreq:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1EGtr_EqHighMidQ:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1EGtr_EqHighMidGain:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1EGtr_EqHighGain:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1EGtr_EqHighCut:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1EGtr_EqLevel:0: 00.00.00.2c
];
var PatchInstEBassBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 9,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1EBassBass_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'MasterVolume',	desc: 'MASTER VOLUME'}, // PatchInst1EBassBass_MasterVolume:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'RearVolume',	desc: 'REAR VOLUME'}, // PatchInst1EBassBass_RearVolume:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'FrontVolume',	desc: 'FRONT VOLUME'}, // PatchInst1EBassBass_FrontVolume:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'RearTone',	desc: 'REAR TONE'}, // PatchInst1EBassBass_RearTone:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'FrontTone',	desc: 'FRONT TONE'}, // PatchInst1EBassBass_FrontTone:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Treble',	desc: 'TREBLE'}, // PatchInst1EBassBass_Treble:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bass',	desc: 'BASS'}, // PatchInst1EBassBass_Bass:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Treble_Active',	desc: 'TREBLE'}, // PatchInst1EBassBass_Treble_Active:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Bass_Active',	desc: 'BASS'}, // PatchInst1EBassBass_Bass_Active:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'PuSelect',	desc: 'PU SELECT'}, // PatchInst1EBassBass_PuSelect:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'TrebleOn',	desc: 'TREBLE ON'}, // PatchInst1EBassBass_TrebleOn:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'BassOn',	desc: 'BASS ON'}, // PatchInst1EBassBass_BassOn:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'RhythmSolo',	desc: 'RHYTHM/SOLO'}, // PatchInst1EBassBass_RhythmSolo:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'ToneType',	desc: 'TONE TYPE'}, // PatchInst1EBassBass_ToneType:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1EBassBass_Sens:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchInst1EBassBass_Depth:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1EBassBass_Attack:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1EBassBass_Resonance:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EBassBass_DirectLevel:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Volume',	desc: 'VOLUME'}, // PatchInst1EBassBass_Volume:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1EBassBass_Tone:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1EBassBass_AmpSw:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 23,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1EBassBass_AmpType:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1EBassBass_AmpGain:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1EBassBass_AmpTCompPre:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1EBassBass_AmpTCompPost:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1EBassBass_AmpLevel:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1EBassBass_AmpBass:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1EBassBass_AmpMiddle:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1EBassBass_AmpTreble:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1EBassBass_AmpPresence:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1EBassBass_AmpBright:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1EBassBass_AmpGainSw:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1EBassBass_AmpSoloSw:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1EBassBass_AmpSoloLevel:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1EBassBass_AmpSpType:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1EBassBass_AmpMicType:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1EBassBass_AmpMicDistance:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1EBassBass_AmpMicPosition:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1EBassBass_AmpMicLevel:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EBassBass_AmpDirectLevel:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1EBassBass_NsSw:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1EBassBass_NsThreshold:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1EBassBass_NsRelease:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1EBassBass_EqSw:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1EBassBass_EqLowCut:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1EBassBass_EqLowGain:0: 00.00.00.2f
	{addr: 0x00000030,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1EBassBass_EqLowMidFreq:0: 00.00.00.30
	{addr: 0x00000031,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1EBassBass_EqLowMidQ:0: 00.00.00.31
	{addr: 0x00000032,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1EBassBass_EqLowMidGain:0: 00.00.00.32
	{addr: 0x00000033,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1EBassBass_EqHighMidFreq:0: 00.00.00.33
	{addr: 0x00000034,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1EBassBass_EqHighMidQ:0: 00.00.00.34
	{addr: 0x00000035,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1EBassBass_EqHighMidGain:0: 00.00.00.35
	{addr: 0x00000036,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1EBassBass_EqHighGain:0: 00.00.00.36
	{addr: 0x00000037,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1EBassBass_EqHighCut:0: 00.00.00.37
	{addr: 0x00000038,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1EBassBass_EqLevel:0: 00.00.00.38
];
var PatchInstAcoustic = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 8,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1Acoustic_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'Body',	desc: 'BODY'}, // PatchInst1Acoustic_Body:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1Acoustic_Attack:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'PuSelect',	desc: 'PU SELECT'}, // PatchInst1Acoustic_PuSelect:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1Acoustic_Sens:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Color',	desc: 'COLOR'}, // PatchInst1Acoustic_Color:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Decay',	desc: 'DECAY'}, // PatchInst1Acoustic_Decay:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Buzz',	desc: 'BUZZ'}, // PatchInst1Acoustic_Buzz:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1Acoustic_Resonance:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sustain',	desc: 'SUSTAIN'}, // PatchInst1Acoustic_Sustain:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Level',	desc: 'VOLUME'}, // PatchInst1Acoustic_Level:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1Acoustic_Tone:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1Acoustic_AmpSw:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1Acoustic_AmpType:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1Acoustic_AmpGain:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1Acoustic_AmpTCompPre:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1Acoustic_AmpTCompPost:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1Acoustic_AmpLevel:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1Acoustic_AmpBass:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1Acoustic_AmpMiddle:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1Acoustic_AmpTreble:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1Acoustic_AmpPresence:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1Acoustic_AmpBright:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1Acoustic_AmpGainSw:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1Acoustic_AmpSoloSw:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1Acoustic_AmpSoloLevel:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1Acoustic_AmpSpType:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1Acoustic_AmpMicType:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1Acoustic_AmpMicDistance:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1Acoustic_AmpMicPosition:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1Acoustic_AmpMicLevel:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1Acoustic_AmpDirectLevel:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1Acoustic_NsSw:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1Acoustic_NsThreshold:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1Acoustic_NsRelease:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1Acoustic_EqSw:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1Acoustic_EqLowCut:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1Acoustic_EqLowGain:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1Acoustic_EqLowMidFreq:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1Acoustic_EqLowMidQ:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1Acoustic_EqLowMidGain:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1Acoustic_EqHighMidFreq:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1Acoustic_EqHighMidQ:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1Acoustic_EqHighMidGain:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1Acoustic_EqHighGain:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1Acoustic_EqHighCut:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1Acoustic_EqLevel:0: 00.00.00.2e
];
var PatchInstAcBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'VOLUME'}, // PatchInst1AcBass_Level:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Body',	desc: 'BODY'}, // PatchInst1AcBass_Body:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1AcBass_Resonance:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Size',	desc: 'SIZE'}, // PatchInst1AcBass_Size:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1AcBass_Attack:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bottom',	desc: 'BOTTOM'}, // PatchInst1AcBass_Bottom:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'BuzzSens',	desc: 'BUZZ SENS'}, // PatchInst1AcBass_BuzzSens:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Decay',	desc: 'DECAY'}, // PatchInst1AcBass_Decay:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1AcBass_AmpSw:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 23,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1AcBass_AmpType:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1AcBass_AmpGain:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1AcBass_AmpTCompPre:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1AcBass_AmpTCompPost:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1AcBass_AmpLevel:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1AcBass_AmpBass:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1AcBass_AmpMiddle:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1AcBass_AmpTreble:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1AcBass_AmpPresence:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1AcBass_AmpBright:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1AcBass_AmpGainSw:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1AcBass_AmpSoloSw:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1AcBass_AmpSoloLevel:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1AcBass_AmpSpType:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1AcBass_AmpMicType:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1AcBass_AmpMicDistance:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1AcBass_AmpMicPosition:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1AcBass_AmpMicLevel:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1AcBass_AmpDirectLevel:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1AcBass_NsSw:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1AcBass_NsThreshold:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1AcBass_NsRelease:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1AcBass_EqSw:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1AcBass_EqLowCut:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1AcBass_EqLowGain:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1AcBass_EqLowMidFreq:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1AcBass_EqLowMidQ:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1AcBass_EqLowMidGain:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1AcBass_EqHighMidFreq:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1AcBass_EqHighMidQ:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1AcBass_EqHighMidGain:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1AcBass_EqHighGain:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1AcBass_EqHighCut:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1AcBass_EqLevel:0: 00.00.00.2a
];
var PatchInstEBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1EBass_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'FrontVolume',	desc: 'FRONT VOLUME'}, // PatchInst1EBass_FrontVolume:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'RearVolume',	desc: 'REAR VOLUME'}, // PatchInst1EBass_RearVolume:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'ToneType',	desc: 'TONE TYPE'}, // PatchInst1EBass_ToneType:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1EBass_Sens:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchInst1EBass_Depth:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1EBass_Attack:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1EBass_Resonance:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EBass_DirectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Volume',	desc: 'VOLUME'}, // PatchInst1EBass_Volume:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1EBass_Tone:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1EBass_AmpSw:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 23,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1EBass_AmpType:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1EBass_AmpGain:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1EBass_AmpTCompPre:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1EBass_AmpTCompPost:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1EBass_AmpLevel:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1EBass_AmpBass:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1EBass_AmpMiddle:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1EBass_AmpTreble:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1EBass_AmpPresence:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1EBass_AmpBright:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1EBass_AmpGainSw:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1EBass_AmpSoloSw:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1EBass_AmpSoloLevel:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1EBass_AmpSpType:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1EBass_AmpMicType:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1EBass_AmpMicDistance:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1EBass_AmpMicPosition:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1EBass_AmpMicLevel:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EBass_AmpDirectLevel:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1EBass_NsSw:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1EBass_NsThreshold:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1EBass_NsRelease:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1EBass_EqSw:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1EBass_EqLowCut:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1EBass_EqLowGain:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1EBass_EqLowMidFreq:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1EBass_EqLowMidQ:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1EBass_EqLowMidGain:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1EBass_EqHighMidFreq:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1EBass_EqHighMidQ:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1EBass_EqHighMidGain:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1EBass_EqHighGain:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1EBass_EqHighCut:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1EBass_EqLevel:0: 00.00.00.2d
];
var PatchInstEGtrBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1EGtrBass_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 0,	factor: 1,	name: 'PuSelect',	desc: 'PU SELECT'}, // PatchInst1EGtrBass_PuSelect:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'ToneType',	desc: 'TONE TYPE'}, // PatchInst1EGtrBass_ToneType:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1EGtrBass_Sens:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchInst1EGtrBass_Depth:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchInst1EGtrBass_Attack:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchInst1EGtrBass_Resonance:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EGtrBass_DirectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Volume',	desc: 'VOLUME'}, // PatchInst1EGtrBass_Volume:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1EGtrBass_Tone:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'AmpSw',	desc: 'AMP ON/OFF'}, // PatchInst1EGtrBass_AmpSw:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 1,	factor: 1,	name: 'AmpType',	desc: 'TYPE'}, // PatchInst1EGtrBass_AmpType:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'AmpGain',	desc: 'GAIN'}, // PatchInst1EGtrBass_AmpGain:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPre',	desc: 'SAG'}, // PatchInst1EGtrBass_AmpTCompPre:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'AmpTCompPost',	desc: 'RESONANCE'}, // PatchInst1EGtrBass_AmpTCompPost:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpLevel',	desc: 'LEVEL'}, // PatchInst1EGtrBass_AmpLevel:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpBass',	desc: 'BASS'}, // PatchInst1EGtrBass_AmpBass:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpMiddle',	desc: 'MIDDLE'}, // PatchInst1EGtrBass_AmpMiddle:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpTreble',	desc: 'TREBLE'}, // PatchInst1EGtrBass_AmpTreble:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpPresence',	desc: 'PRESENCE'}, // PatchInst1EGtrBass_AmpPresence:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpBright',	desc: 'BRIGHT'}, // PatchInst1EGtrBass_AmpBright:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'AmpGainSw',	desc: 'GAIN SW'}, // PatchInst1EGtrBass_AmpGainSw:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'AmpSoloSw',	desc: 'SOLO SW'}, // PatchInst1EGtrBass_AmpSoloSw:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'AmpSoloLevel',	desc: 'SOLO LEVEL'}, // PatchInst1EGtrBass_AmpSoloLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'AmpSpType',	desc: 'SP TYPE'}, // PatchInst1EGtrBass_AmpSpType:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'AmpMicType',	desc: 'MIC TYPE'}, // PatchInst1EGtrBass_AmpMicType:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'AmpMicDistance',	desc: 'MIC DISTANCE'}, // PatchInst1EGtrBass_AmpMicDistance:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'AmpMicPosition',	desc: 'MIC POSITION'}, // PatchInst1EGtrBass_AmpMicPosition:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'AmpMicLevel',	desc: 'MIC LEVEL'}, // PatchInst1EGtrBass_AmpMicLevel:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'AmpDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1EGtrBass_AmpDirectLevel:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1EGtrBass_NsSw:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1EGtrBass_NsThreshold:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1EGtrBass_NsRelease:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1EGtrBass_EqSw:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1EGtrBass_EqLowCut:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1EGtrBass_EqLowGain:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1EGtrBass_EqLowMidFreq:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1EGtrBass_EqLowMidQ:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1EGtrBass_EqLowMidGain:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1EGtrBass_EqHighMidFreq:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1EGtrBass_EqHighMidQ:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1EGtrBass_EqHighMidGain:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1EGtrBass_EqHighGain:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1EGtrBass_EqHighCut:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1EGtrBass_EqLevel:0: 00.00.00.2c
];
var PatchInstVioGtr = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 0,	factor: 1,	name: 'EGtrType',	desc: 'TYPE'}, // PatchInst1VioGtr_EGtrType:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 5,	factor: 1,	name: 'EGtrPuSelect',	desc: 'PU SELECT'}, // PatchInst1VioGtr_EGtrPuSelect:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'EGtrToneType',	desc: 'TONE TYPE'}, // PatchInst1VioGtr_EGtrToneType:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EGtrSens',	desc: 'SENS'}, // PatchInst1VioGtr_EGtrSens:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'EGtrDepth',	desc: 'DEPTH'}, // PatchInst1VioGtr_EGtrDepth:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EGtrAttack',	desc: 'ATTACK'}, // PatchInst1VioGtr_EGtrAttack:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EGtrResonance',	desc: 'RESONANCE'}, // PatchInst1VioGtr_EGtrResonance:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'EGtrDirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1VioGtr_EGtrDirectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EGtrVolume',	desc: 'VOLUME'}, // PatchInst1VioGtr_EGtrVolume:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EGtrTone',	desc: 'TONE'}, // PatchInst1VioGtr_EGtrTone:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'HarmoPitch',	desc: 'PITCH'}, // PatchInst1VioGtr_HarmoPitch:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'HarmoGain',	desc: 'GAIN'}, // PatchInst1VioGtr_HarmoGain:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'HarmoAttack',	desc: 'ATTACK'}, // PatchInst1VioGtr_HarmoAttack:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchInst1VioGtr_DirectLevel:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FilterOvertone',	desc: 'OVERTONE'}, // PatchInst1VioGtr_FilterOvertone:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'FilterAttack',	desc: 'ATTACK'}, // PatchInst1VioGtr_FilterAttack:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FilterPowerBend',	desc: 'POWER BEND'}, // PatchInst1VioGtr_FilterPowerBend:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'FilterSlideTime',	desc: 'SLIDE TIME'}, // PatchInst1VioGtr_FilterSlideTime:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'FilterOctave',	desc: 'OCTAVE'}, // PatchInst1VioGtr_FilterOctave:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Color',	desc: 'COLOR'}, // PatchInst1VioGtr_Color:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'TouchSens',	desc: 'TOUCH SENS'}, // PatchInst1VioGtr_TouchSens:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'LeadEmphasis',	desc: 'LEAD EMPHASIS'}, // PatchInst1VioGtr_LeadEmphasis:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1VioGtr_NsSw:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1VioGtr_NsThreshold:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1VioGtr_NsRelease:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'EqSw',	desc: 'EQ ON/OFF'}, // PatchInst1VioGtr_EqSw:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'EqLowCut',	desc: 'LOW CUT'}, // PatchInst1VioGtr_EqLowCut:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowGain',	desc: 'LOW GAIN'}, // PatchInst1VioGtr_EqLowGain:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'EqLowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchInst1VioGtr_EqLowMidFreq:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqLowMidQ',	desc: 'LOW-MID Q'}, // PatchInst1VioGtr_EqLowMidQ:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLowMidGain',	desc: 'LOW-MID GAIN'}, // PatchInst1VioGtr_EqLowMidGain:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'EqHighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchInst1VioGtr_EqHighMidFreq:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'EqHighMidQ',	desc: 'HIGH-MID Q'}, // PatchInst1VioGtr_EqHighMidQ:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchInst1VioGtr_EqHighMidGain:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqHighGain',	desc: 'HIGH GAIN'}, // PatchInst1VioGtr_EqHighGain:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'EqHighCut',	desc: 'HIGH CUT'}, // PatchInst1VioGtr_EqHighCut:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'EqLevel',	desc: 'LEVEL'}, // PatchInst1VioGtr_EqLevel:0: 00.00.00.24
];
var PatchInstPolyFx = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchInst1PolyFx_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'GuitarVolume',	desc: 'GUITAR VOLUME'}, // PatchInst1PolyFx_GuitarVolume:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Gain',	desc: 'GAIN'}, // PatchInst1PolyFx_Gain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'GainBalance',	desc: 'GAIN BALANCE'}, // PatchInst1PolyFx_GainBalance:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Color',	desc: 'COLOR'}, // PatchInst1PolyFx_Color:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchInst1PolyFx_Tone:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'FilterMode',	desc: 'FILTER MODE'}, // PatchInst1PolyFx_FilterMode:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Polarity',	desc: 'POLARITY'}, // PatchInst1PolyFx_Polarity:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchInst1PolyFx_Sens:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'Frequency',	desc: 'FREQUENCY'}, // PatchInst1PolyFx_Frequency:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'Decay',	desc: 'DECAY'}, // PatchInst1PolyFx_Decay:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Peak',	desc: 'PEAK'}, // PatchInst1PolyFx_Peak:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'ToneType',	desc: 'TONE TYPE'}, // PatchInst1PolyFx_ToneType:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CompSw',	desc: 'COMP SW'}, // PatchInst1PolyFx_CompSw:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'CompSustain',	desc: 'COMP SUSTAIN'}, // PatchInst1PolyFx_CompSustain:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'CompAttack',	desc: 'COMP ATTACK'}, // PatchInst1PolyFx_CompAttack:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'NsSw',	desc: 'NS ON/OFF'}, // PatchInst1PolyFx_NsSw:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsThreshold',	desc: 'THRESHOLD'}, // PatchInst1PolyFx_NsThreshold:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'NsRelease',	desc: 'RELEASE'}, // PatchInst1PolyFx_NsRelease:0: 00.00.00.12
];
var PatchInstAltTune = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchInst1AltTune_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 36,	init: 0,	factor: 1,	name: 'TuningType',	desc: 'TUNING TYPE'}, // PatchInst1AltTune_TuningType:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift1',	desc: 'PITCH 1'}, // PatchInst1AltTune_Shift1:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift2',	desc: 'PITCH 2'}, // PatchInst1AltTune_Shift2:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift3',	desc: 'PITCH 3'}, // PatchInst1AltTune_Shift3:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift4',	desc: 'PITCH 4'}, // PatchInst1AltTune_Shift4:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift5',	desc: 'PITCH 5'}, // PatchInst1AltTune_Shift5:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift6',	desc: 'PITCH 6'}, // PatchInst1AltTune_Shift6:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine1',	desc: 'FINE 1'}, // PatchInst1AltTune_Fine1:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine2',	desc: 'FINE 2'}, // PatchInst1AltTune_Fine2:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine3',	desc: 'FINE 3'}, // PatchInst1AltTune_Fine3:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine4',	desc: 'FINE 4'}, // PatchInst1AltTune_Fine4:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine5',	desc: 'FINE 5'}, // PatchInst1AltTune_Fine5:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine6',	desc: 'FINE 6'}, // PatchInst1AltTune_Fine6:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: '_12StrSw',	desc: '12STR SW'}, // PatchInst1AltTune__12StrSw:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: '_12StrType',	desc: '12STR TYPE'}, // PatchInst1AltTune__12StrType:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: '_12StrShift1',	desc: '12STR PITCH 1'}, // PatchInst1AltTune__12StrShift1:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: '_12StrShift2',	desc: '12STR PITCH 2'}, // PatchInst1AltTune__12StrShift2:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift3',	desc: '12STR PITCH 3'}, // PatchInst1AltTune__12StrShift3:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift4',	desc: '12STR PITCH 4'}, // PatchInst1AltTune__12StrShift4:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift5',	desc: '12STR PITCH 5'}, // PatchInst1AltTune__12StrShift5:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift6',	desc: '12STR PITCH 6'}, // PatchInst1AltTune__12StrShift6:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 10,	factor: 1,	name: '_12StrFine1',	desc: '12STR FINE 1'}, // PatchInst1AltTune__12StrFine1:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 10,	factor: 1,	name: '_12StrFine2',	desc: '12STR FINE 2'}, // PatchInst1AltTune__12StrFine2:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 7,	factor: 1,	name: '_12StrFine3',	desc: '12STR FINE 3'}, // PatchInst1AltTune__12StrFine3:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 7,	factor: 1,	name: '_12StrFine4',	desc: '12STR FINE 4'}, // PatchInst1AltTune__12StrFine4:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 7,	factor: 1,	name: '_12StrFine5',	desc: '12STR FINE 5'}, // PatchInst1AltTune__12StrFine5:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 7,	factor: 1,	name: '_12StrFine6',	desc: '12STR FINE 6'}, // PatchInst1AltTune__12StrFine6:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 90,	factor: 1,	name: '_12StrLevel1',	desc: '12STR LEVEL 1'}, // PatchInst1AltTune__12StrLevel1:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 90,	factor: 1,	name: '_12StrLevel2',	desc: '12STR LEVEL 2'}, // PatchInst1AltTune__12StrLevel2:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 85,	factor: 1,	name: '_12StrLevel3',	desc: '12STR LEVEL 3'}, // PatchInst1AltTune__12StrLevel3:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 90,	factor: 1,	name: '_12StrLevel4',	desc: '12STR LEVEL 4'}, // PatchInst1AltTune__12StrLevel4:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 90,	factor: 1,	name: '_12StrLevel5',	desc: '12STR LEVEL 5'}, // PatchInst1AltTune__12StrLevel5:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 90,	factor: 1,	name: '_12StrLevel6',	desc: '12STR LEVEL 6'}, // PatchInst1AltTune__12StrLevel6:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 15,	factor: 1,	name: '_12StrDelay1',	desc: '12STR DELAY 1'}, // PatchInst1AltTune__12StrDelay1:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 15,	factor: 1,	name: '_12StrDelay2',	desc: '12STR DELAY 2'}, // PatchInst1AltTune__12StrDelay2:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay3',	desc: '12STR DELAY 3'}, // PatchInst1AltTune__12StrDelay3:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay4',	desc: '12STR DELAY 4'}, // PatchInst1AltTune__12StrDelay4:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay5',	desc: '12STR DELAY 5'}, // PatchInst1AltTune__12StrDelay5:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay6',	desc: '12STR DELAY 6'}, // PatchInst1AltTune__12StrDelay6:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BendSw',	desc: 'STR BEND SW'}, // PatchInst1AltTune_BendSw:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth1',	desc: 'BEND DEPTH1'}, // PatchInst1AltTune_BendDepth1:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth2',	desc: 'BEND DEPTH2'}, // PatchInst1AltTune_BendDepth2:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth3',	desc: 'BEND DEPTH3'}, // PatchInst1AltTune_BendDepth3:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth4',	desc: 'BEND DEPTH4'}, // PatchInst1AltTune_BendDepth4:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth5',	desc: 'BEND DEPTH5'}, // PatchInst1AltTune_BendDepth5:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth6',	desc: 'BEND DEPTH6'}, // PatchInst1AltTune_BendDepth6:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'BendControl',	desc: 'BEND CONTROL'}, // PatchInst1AltTune_BendControl:0: 00.00.00.2f
];
var PatchInstAltTuneBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchInst1AltTuneBass_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 24,	init: 23,	factor: 1,	name: 'TuningType',	desc: 'TUNING TYPE'}, // PatchInst1AltTuneBass_TuningType:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'ShiftH',	desc: 'PITCH HiC'}, // PatchInst1AltTuneBass_ShiftH:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift1',	desc: 'PITCH 1st'}, // PatchInst1AltTuneBass_Shift1:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift2',	desc: 'PITCH 2nd'}, // PatchInst1AltTuneBass_Shift2:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift3',	desc: 'PITCH 3rd'}, // PatchInst1AltTuneBass_Shift3:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Shift4',	desc: 'PITCH 4th'}, // PatchInst1AltTuneBass_Shift4:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'ShiftL',	desc: 'PITCH LowB'}, // PatchInst1AltTuneBass_ShiftL:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FineH',	desc: 'FINE HiC'}, // PatchInst1AltTuneBass_FineH:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine1',	desc: 'FINE 1st'}, // PatchInst1AltTuneBass_Fine1:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine2',	desc: 'FINE 2nd'}, // PatchInst1AltTuneBass_Fine2:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine3',	desc: 'FINE 3rd'}, // PatchInst1AltTuneBass_Fine3:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Fine4',	desc: 'FINE 4th'}, // PatchInst1AltTuneBass_Fine4:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'FineL',	desc: 'FINE LowB'}, // PatchInst1AltTuneBass_FineL:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: '_12StrSw',	desc: '12STR SW'}, // PatchInst1AltTuneBass__12StrSw:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: '_12StrType',	desc: '12STR TYPE'}, // PatchInst1AltTuneBass__12StrType:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShiftH',	desc: '12PITCH HiC'}, // PatchInst1AltTuneBass__12StrShiftH:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift1',	desc: '12PITCH 1st'}, // PatchInst1AltTuneBass__12StrShift1:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift2',	desc: '12PITCH 2nd'}, // PatchInst1AltTuneBass__12StrShift2:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift3',	desc: '12PITCH 3rd'}, // PatchInst1AltTuneBass__12StrShift3:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShift4',	desc: '12PITCH 4th'}, // PatchInst1AltTuneBass__12StrShift4:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: '_12StrShiftL',	desc: '12PITCH LowB'}, // PatchInst1AltTuneBass__12StrShiftL:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFineH',	desc: '12FINE HiC'}, // PatchInst1AltTuneBass__12StrFineH:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFine1',	desc: '12FINE 1st'}, // PatchInst1AltTuneBass__12StrFine1:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFine2',	desc: '12FINE 2nd'}, // PatchInst1AltTuneBass__12StrFine2:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFine3',	desc: '12FINE 3rd'}, // PatchInst1AltTuneBass__12StrFine3:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFine4',	desc: '12FINE 4th'}, // PatchInst1AltTuneBass__12StrFine4:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: '_12StrFineL',	desc: '12FINE LowB'}, // PatchInst1AltTuneBass__12StrFineL:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevelH',	desc: '12LEVEL HiC'}, // PatchInst1AltTuneBass__12StrLevelH:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevel1',	desc: '12LEVEL 1st'}, // PatchInst1AltTuneBass__12StrLevel1:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevel2',	desc: '12LEVEL 2nd'}, // PatchInst1AltTuneBass__12StrLevel2:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevel3',	desc: '12LEVEL 3rd'}, // PatchInst1AltTuneBass__12StrLevel3:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevel4',	desc: '12LEVEL 4th'}, // PatchInst1AltTuneBass__12StrLevel4:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: '_12StrLevelL',	desc: '12LEVEL LowB'}, // PatchInst1AltTuneBass__12StrLevelL:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelayH',	desc: '12DELAY HiC'}, // PatchInst1AltTuneBass__12StrDelayH:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay1',	desc: '12DELAY 1st'}, // PatchInst1AltTuneBass__12StrDelay1:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay2',	desc: '12DELAY 2nd'}, // PatchInst1AltTuneBass__12StrDelay2:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay3',	desc: '12DELAY 3rd'}, // PatchInst1AltTuneBass__12StrDelay3:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelay4',	desc: '12DELAY 4th'}, // PatchInst1AltTuneBass__12StrDelay4:0: 00.00.00.26
	{addr: 0x00000027,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 10,	factor: 1,	name: '_12StrDelayL',	desc: '12DELAY LowB'}, // PatchInst1AltTuneBass__12StrDelayL:0: 00.00.00.27
	{addr: 0x00000028,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'BendSw',	desc: 'STR BEND SW'}, // PatchInst1AltTuneBass_BendSw:0: 00.00.00.28
	{addr: 0x00000029,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepthH',	desc: 'BEND DEPTH HiC'}, // PatchInst1AltTuneBass_BendDepthH:0: 00.00.00.29
	{addr: 0x0000002a,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth1',	desc: 'BEND DEPTH 1st'}, // PatchInst1AltTuneBass_BendDepth1:0: 00.00.00.2a
	{addr: 0x0000002b,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth2',	desc: 'BEND DEPTH 2nd'}, // PatchInst1AltTuneBass_BendDepth2:0: 00.00.00.2b
	{addr: 0x0000002c,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth3',	desc: 'BEND DEPTH 3rd'}, // PatchInst1AltTuneBass_BendDepth3:0: 00.00.00.2c
	{addr: 0x0000002d,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepth4',	desc: 'BEND DEPTH 4th'}, // PatchInst1AltTuneBass_BendDepth4:0: 00.00.00.2d
	{addr: 0x0000002e,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'BendDepthL',	desc: 'BEND DEPTH LowB'}, // PatchInst1AltTuneBass_BendDepthL:0: 00.00.00.2e
	{addr: 0x0000002f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'BendControl',	desc: 'BEND CONTROL'}, // PatchInst1AltTuneBass_BendControl:0: 00.00.00.2f
];
var PatchComp = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchComp_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchComp_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sustain',	desc: 'SUSTAIN'}, // PatchComp_Sustain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchComp_Attack:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchComp_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchComp_DirectLevel:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchComp_Tone:0: 00.00.00.06
];
var PatchDist = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchDist_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 34,	init: 11,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchDist_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'Drive',	desc: 'DRIVE'}, // PatchDist_Drive:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchDist_Tone:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'LEVEL'}, // PatchDist_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Bottom',	desc: 'BOTTOM'}, // PatchDist_Bottom:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchDist_DirectLevel:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SoloSw',	desc: 'SOLO SW'}, // PatchDist_SoloSw:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'SoloLevel',	desc: 'SOLO LEVEL'}, // PatchDist_SoloLevel:0: 00.00.00.08
];
var PatchAmp = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchAmp_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 1,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchAmp_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'Gain',	desc: 'GAIN'}, // PatchAmp_Gain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'TCompPre',	desc: 'SAG'}, // PatchAmp_TCompPre:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 16,	min: -10,	max: 10,	init: 0,	factor: 1,	name: 'TCompPost',	desc: 'RESONANCE'}, // PatchAmp_TCompPost:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchAmp_Level:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Bass',	desc: 'BASS'}, // PatchAmp_Bass:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Middle',	desc: 'MIDDLE'}, // PatchAmp_Middle:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Treble',	desc: 'TREBLE'}, // PatchAmp_Treble:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Presence',	desc: 'PRESENCE'}, // PatchAmp_Presence:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Bright',	desc: 'BRIGHT'}, // PatchAmp_Bright:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'GainSw',	desc: 'GAIN SW'}, // PatchAmp_GainSw:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'SoloSw',	desc: 'SOLO SW'}, // PatchAmp_SoloSw:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'SoloLevel',	desc: 'SOLO LEVEL'}, // PatchAmp_SoloLevel:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 13,	init: 1,	factor: 1,	name: 'SpType',	desc: 'SP TYPE'}, // PatchAmp_SpType:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'MicType',	desc: 'MIC TYPE'}, // PatchAmp_MicType:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'MicDistance',	desc: 'MIC DISTANCE'}, // PatchAmp_MicDistance:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 10,	init: 5,	factor: 1,	name: 'MicPosition',	desc: 'MIC POSITION'}, // PatchAmp_MicPosition:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'MicLevel',	desc: 'MIC LEVEL'}, // PatchAmp_MicLevel:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchAmp_DirectLevel:0: 00.00.00.13
];
var PatchEq = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchEq1_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'LowGain',	desc: 'LOW GAIN'}, // PatchEq1_LowGain:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'HighGain',	desc: 'HIGH GAIN'}, // PatchEq1_HighGain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'LowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchEq1_LowMidFreq:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'LowMidQ',	desc: 'LOW-MID Q'}, // PatchEq1_LowMidQ:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'LowMidGain',	desc: 'LOW-MID GAIN'}, // PatchEq1_LowMidGain:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'HighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchEq1_HighMidFreq:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'HighMidQ',	desc: 'HIGH-MID Q'}, // PatchEq1_HighMidQ:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'HighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchEq1_HighMidGain:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchEq1_LowCut:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchEq1_HighCut:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchEq1_Level:0: 00.00.00.0b
];
var PatchNs = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchNs_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Threshold',	desc: 'THRESHOLD'}, // PatchNs_Threshold:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 30,	factor: 1,	name: 'Release',	desc: 'RELEASE'}, // PatchNs_Release:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'Detect',	desc: 'DETECT'}, // PatchNs_Detect:0: 00.00.00.03
];
var PatchDelay = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchDelay1_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 400,	factor: 1,	name: 'Time',	desc: 'TIME'}, // PatchDelay1_Time:0: 00.00.00.01
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Feedback',	desc: 'FEEDBACK'}, // PatchDelay1_Feedback:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchDelay1_HighCut:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchDelay1_EffectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchDelay1_DirectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CarryOver',	desc: 'CARRY OVER'}, // PatchDelay1_CarryOver:0: 00.00.00.09
];
var PatchMstDelay = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchMstDelay_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchMstDelay_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 400,	factor: 1,	name: 'Time',	desc: 'TIME'}, // PatchMstDelay_Time:0: 00.00.00.02
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Feedback',	desc: 'FEEDBACK'}, // PatchMstDelay_Feedback:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchMstDelay_HighCut:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchMstDelay_EffectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchMstDelay_DirectLevel:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 100,	factor: 1,	name: 'D1Time',	desc: 'D1 TIME'}, // PatchMstDelay_D1Time:0: 00.00.00.0a
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'D1Feedback',	desc: 'D1 FEEDBACK'}, // PatchMstDelay_D1Feedback:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'D1HighCut',	desc: 'D1 HIGH CUT'}, // PatchMstDelay_D1HighCut:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'D1EffectLevel',	desc: 'D1 EFFECT LEVEL'}, // PatchMstDelay_D1EffectLevel:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 400,	factor: 1,	name: 'D2Time',	desc: 'D2 TIME'}, // PatchMstDelay_D2Time:0: 00.00.00.11
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'D2Feedback',	desc: 'D2 FEEDBACK'}, // PatchMstDelay_D2Feedback:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'D2HighCut',	desc: 'D2 HIGH CUT'}, // PatchMstDelay_D2HighCut:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'D2EffectLevel',	desc: 'D2 EFFECT LEVEL'}, // PatchMstDelay_D2EffectLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'ModRate',	desc: 'MOD RATE'}, // PatchMstDelay_ModRate:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'ModDepth',	desc: 'MOD DEPTH'}, // PatchMstDelay_ModDepth:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Trigger',	desc: 'TRIGGER'}, // PatchMstDelay_Trigger:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TwistMode',	desc: 'MODE'}, // PatchMstDelay_TwistMode:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchMstDelay_RiseTime:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FallTime',	desc: 'FALL TIME'}, // PatchMstDelay_FallTime:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FadeTime',	desc: 'FADE TIME'}, // PatchMstDelay_FadeTime:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'TapTime',	desc: 'TAP TIME'}, // PatchMstDelay_TapTime:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CarryOver',	desc: 'CARRY OVER'}, // PatchMstDelay_CarryOver:0: 00.00.00.20
];
var PatchChorus = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchChorus_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'Mode',	desc: 'MODE'}, // PatchChorus_Mode:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 40,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchChorus_Rate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchChorus_Depth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay',	desc: 'PRE-DELAY'}, // PatchChorus_PreDelay:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchChorus_EffectLevel:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm',	desc: 'WAVEFORM'}, // PatchChorus_WaveForm:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchChorus_LowCut:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchChorus_HighCut:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 40,	factor: 1,	name: 'Rate1',	desc: 'RATE 1'}, // PatchChorus_Rate1:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth1',	desc: 'DEPTH 1'}, // PatchChorus_Depth1:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay1',	desc: 'PRE-DELAY 1'}, // PatchChorus_PreDelay1:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel1',	desc: 'EFFECT LEVEL 1'}, // PatchChorus_EffectLevel1:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm1',	desc: 'WAVEFORM 1'}, // PatchChorus_WaveForm1:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut1',	desc: 'LOW CUT 1'}, // PatchChorus_LowCut1:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut1',	desc: 'HIGH CUT 1'}, // PatchChorus_HighCut1:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 60,	factor: 1,	name: 'Rate2',	desc: 'RATE 2'}, // PatchChorus_Rate2:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth2',	desc: 'DEPTH 2'}, // PatchChorus_Depth2:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay2',	desc: 'PRE-DELAY 2'}, // PatchChorus_PreDelay2:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel2',	desc: 'EFFECT LEVEL 2'}, // PatchChorus_EffectLevel2:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm2',	desc: 'WAVEFORM 2'}, // PatchChorus_WaveForm2:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut2',	desc: 'LOW CUT 2'}, // PatchChorus_LowCut2:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut2',	desc: 'HIGH CUT 2'}, // PatchChorus_HighCut2:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchChorus_DirectLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'OutputMode',	desc: 'OUTPUT MODE'}, // PatchChorus_OutputMode:0: 00.00.00.18
];
var PatchReverb = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Sw',	desc: 'ON/OFF'}, // PatchReverb_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 4,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchReverb_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 100,	init: 25,	factor: 1,	name: 'Time',	desc: 'TIME'}, // PatchReverb_Time:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CarryOver',	desc: 'CARRY OVER'}, // PatchReverb_CarryOver:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 500,	init: 0,	factor: 1,	name: 'PreDelay',	desc: 'PRE-DELAY'}, // PatchReverb_PreDelay:0: 00.00.00.04
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 35,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchReverb_EffectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 10,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchReverb_LowCut:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 23,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchReverb_HighCut:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 10,	init: 8,	factor: 1,	name: 'Density',	desc: 'DENSITY'}, // PatchReverb_Density:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchReverb_DirectLevel:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'SpringSens',	desc: 'SPRING SENS'}, // PatchReverb_SpringSens:0: 00.00.00.0d
];
var PatchFx = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Sw',	desc: 'FX ON/OFF'}, // PatchFx1_Sw:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 36,	init: 2,	factor: 1,	name: 'FxType',	desc: 'FX TYPE'}, // PatchFx1_FxType:0: 00.00.00.01
];
var PatchFxAcReso = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1AcReso_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1AcReso_Resonance:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchFx1AcReso_Tone:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchFx1AcReso_Level:0: 00.00.00.03
];
var PatchFxAWah = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'FilterMode',	desc: 'FILTER MODE'}, // PatchFx1AWah_FilterMode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1AWah_Rate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1AWah_Depth:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1AWah_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Frequency',	desc: 'FREQUENCY'}, // PatchFx1AWah_Frequency:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1AWah_Resonance:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Waveform',	desc: 'WAVEFORM'}, // PatchFx1AWah_Waveform:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1AWah_DirectLevel:0: 00.00.00.07
];
var PatchFxChorus = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'DontRemoveMe',	desc: 'SW(Dummy)'}, // PatchFx1Chorus_DontRemoveMe:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'Mode',	desc: 'MODE'}, // PatchFx1Chorus_Mode:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 40,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Chorus_Rate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Chorus_Depth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay',	desc: 'PRE-DELAY'}, // PatchFx1Chorus_PreDelay:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Chorus_EffectLevel:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm',	desc: 'WAVEFORM'}, // PatchFx1Chorus_WaveForm:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchFx1Chorus_LowCut:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1Chorus_HighCut:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 40,	factor: 1,	name: 'Rate1',	desc: 'RATE 1'}, // PatchFx1Chorus_Rate1:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth1',	desc: 'DEPTH 1'}, // PatchFx1Chorus_Depth1:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay1',	desc: 'PRE-DELAY 1'}, // PatchFx1Chorus_PreDelay1:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel1',	desc: 'EFFECT LEVEL 1'}, // PatchFx1Chorus_EffectLevel1:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm1',	desc: 'WAVEFORM 1'}, // PatchFx1Chorus_WaveForm1:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut1',	desc: 'LOW CUT 1'}, // PatchFx1Chorus_LowCut1:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut1',	desc: 'HIGH CUT 1'}, // PatchFx1Chorus_HighCut1:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 60,	factor: 1,	name: 'Rate2',	desc: 'RATE 2'}, // PatchFx1Chorus_Rate2:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Depth2',	desc: 'DEPTH 2'}, // PatchFx1Chorus_Depth2:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 80,	init: 8,	factor: 1,	name: 'PreDelay2',	desc: 'PRE-DELAY 2'}, // PatchFx1Chorus_PreDelay2:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel2',	desc: 'EFFECT LEVEL 2'}, // PatchFx1Chorus_EffectLevel2:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'WaveForm2',	desc: 'WAVEFORM 2'}, // PatchFx1Chorus_WaveForm2:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut2',	desc: 'LOW CUT 2'}, // PatchFx1Chorus_LowCut2:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut2',	desc: 'HIGH CUT 2'}, // PatchFx1Chorus_HighCut2:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Chorus_DirectLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'OutputMode',	desc: 'OUTPUT MODE'}, // PatchFx1Chorus_OutputMode:0: 00.00.00.18
];
var PatchFxCVibe = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 70,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1CVibe_Rate:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1CVibe_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1CVibe_EffectLevel:0: 00.00.00.02
];
var PatchFxComp = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'DontRemoveMe',	desc: 'SW(Dummy)'}, // PatchFx1Comp_DontRemoveMe:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Comp_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sustain',	desc: 'SUSTAIN'}, // PatchFx1Comp_Sustain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchFx1Comp_Attack:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Comp_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Comp_DirectLevel:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchFx1Comp_Tone:0: 00.00.00.06
];
var PatchFxDefretter = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1Defretter_Sens:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Defretter_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchFx1Defretter_Tone:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Defretter_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchFx1Defretter_Attack:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1Defretter_Resonance:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Defretter_DirectLevel:0: 00.00.00.06
];
var PatchFxDefretterBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1DefretterBass_Sens:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 70,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchFx1DefretterBass_Attack:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchFx1DefretterBass_Tone:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1DefretterBass_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1DefretterBass_DirectLevel:0: 00.00.00.04
];
var PatchFxDelay = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'DontRemoveMe',	desc: 'SW(Dummy)'}, // PatchFx1Delay_DontRemoveMe:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 11,	init: 1,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Delay_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 400,	factor: 1,	name: 'Time',	desc: 'TIME'}, // PatchFx1Delay_Time:0: 00.00.00.02
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Feedback',	desc: 'FEEDBACK'}, // PatchFx1Delay_Feedback:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1Delay_HighCut:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Delay_EffectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Delay_DirectLevel:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 100,	factor: 1,	name: 'D1Time',	desc: 'D1 TIME'}, // PatchFx1Delay_D1Time:0: 00.00.00.0a
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'D1Feedback',	desc: 'D1 FEEDBACK'}, // PatchFx1Delay_D1Feedback:0: 00.00.00.0e
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'D1HighCut',	desc: 'D1 HIGH CUT'}, // PatchFx1Delay_D1HighCut:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'D1EffectLevel',	desc: 'D1 EFFECT LEVEL'}, // PatchFx1Delay_D1EffectLevel:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER4x4,	ofs: 0,	min: 1,	max: 2018,	init: 400,	factor: 1,	name: 'D2Time',	desc: 'D2 TIME'}, // PatchFx1Delay_D2Time:0: 00.00.00.11
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'D2Feedback',	desc: 'D2 FEEDBACK'}, // PatchFx1Delay_D2Feedback:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'D2HighCut',	desc: 'D2 HIGH CUT'}, // PatchFx1Delay_D2HighCut:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 50,	factor: 1,	name: 'D2EffectLevel',	desc: 'D2 EFFECT LEVEL'}, // PatchFx1Delay_D2EffectLevel:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'ModRate',	desc: 'MOD RATE'}, // PatchFx1Delay_ModRate:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'ModDepth',	desc: 'MOD DEPTH'}, // PatchFx1Delay_ModDepth:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Trigger',	desc: 'TRIGGER'}, // PatchFx1Delay_Trigger:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'TwistMode',	desc: 'MODE'}, // PatchFx1Delay_TwistMode:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1Delay_RiseTime:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FallTime',	desc: 'FALL TIME'}, // PatchFx1Delay_FallTime:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FadeTime',	desc: 'FADE TIME'}, // PatchFx1Delay_FadeTime:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'TapTime',	desc: 'TAP TIME'}, // PatchFx1Delay_TapTime:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CarryOver',	desc: 'CARRY OVER'}, // PatchFx1Delay_CarryOver:0: 00.00.00.20
];
var PatchFxFlanger = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 25,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Flanger_Rate:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Flanger_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1Flanger_Resonance:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 75,	factor: 1,	name: 'Manual',	desc: 'MANUAL'}, // PatchFx1Flanger_Manual:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Separation',	desc: 'SEPARATION'}, // PatchFx1Flanger_Separation:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchFx1Flanger_LowCut:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1Flanger_HighCut:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Flanger_EffectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Flanger_DirectLevel:0: 00.00.00.08
];
var PatchFxFlangerBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 25,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1FlangerBass_Rate:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1FlangerBass_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1FlangerBass_Resonance:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 75,	factor: 1,	name: 'Manual',	desc: 'MANUAL'}, // PatchFx1FlangerBass_Manual:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Separation',	desc: 'SEPARATION'}, // PatchFx1FlangerBass_Separation:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchFx1FlangerBass_LowCut:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1FlangerBass_HighCut:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1FlangerBass_EffectLevel:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1FlangerBass_DirectLevel:0: 00.00.00.08
];
var PatchFxFv = [
	{addr: 0x00000000,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 0,	factor: 10,	name: 'VolumeMin',	desc: 'VOLUME MIN'}, // PatchFx1Fv_VolumeMin:0: 00.00.00.00
	{addr: 0x00000004,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'VolumeMax',	desc: 'VOLUME MAX'}, // PatchFx1Fv_VolumeMax:0: 00.00.00.04
	{addr: 0x00000008,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'PedalPosition',	desc: 'PEDAL POSITION'}, // PatchFx1Fv_PedalPosition:0: 00.00.00.08
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 2,	factor: 1,	name: 'VolumeCurve',	desc: 'VOLUME CURVE'}, // PatchFx1Fv_VolumeCurve:0: 00.00.00.0c
];
var PatchFxGEq = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band100Hz',	desc: '100Hz'}, // PatchFx1GEq_Band100Hz:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band200Hz',	desc: '200Hz'}, // PatchFx1GEq_Band200Hz:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band400Hz',	desc: '400Hz'}, // PatchFx1GEq_Band400Hz:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band800Hz',	desc: '800Hz'}, // PatchFx1GEq_Band800Hz:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band1600Hz',	desc: '1.6kHz'}, // PatchFx1GEq_Band1600Hz:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band3200Hz',	desc: '3.2kHz'}, // PatchFx1GEq_Band3200Hz:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Band6400Hz',	desc: '6.4kHz'}, // PatchFx1GEq_Band6400Hz:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchFx1GEq_Level:0: 00.00.00.07
];
var PatchFxHarmonist = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Voice',	desc: 'VOICE'}, // PatchFx1Harmonist_Voice:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 12,	factor: 1,	name: 'Hr1Harmony',	desc: 'HR1:HARMONY'}, // PatchFx1Harmonist_Hr1Harmony:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 21,	factor: 1,	name: 'Hr2Harmony',	desc: 'HR2:HARMONY'}, // PatchFx1Harmonist_Hr2Harmony:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Hr1Level',	desc: 'HR1:LEVEL'}, // PatchFx1Harmonist_Hr1Level:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 318,	init: 0,	factor: 1,	name: 'Hr1PreDelay',	desc: 'HR1:PRE-DELAY'}, // PatchFx1Harmonist_Hr1PreDelay:0: 00.00.00.04
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Hr1Feedback',	desc: 'HR1:FEEDBACK'}, // PatchFx1Harmonist_Hr1Feedback:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Harmonist_DirectLevel:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Hr2Level',	desc: 'HR2:LEVEL'}, // PatchFx1Harmonist_Hr2Level:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 318,	init: 0,	factor: 1,	name: 'Hr2PreDelay',	desc: 'HR2:PRE-DELAY'}, // PatchFx1Harmonist_Hr2PreDelay:0: 00.00.00.0b
	{addr: 0x0000000f,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1C',	desc: 'HR1:C'}, // PatchFx1Harmonist_Hr1C:0: 00.00.00.0f
	{addr: 0x00000010,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1Db',	desc: 'HR1:Db'}, // PatchFx1Harmonist_Hr1Db:0: 00.00.00.10
	{addr: 0x00000011,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1D',	desc: 'HR1:D'}, // PatchFx1Harmonist_Hr1D:0: 00.00.00.11
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1Eb',	desc: 'HR1:Eb'}, // PatchFx1Harmonist_Hr1Eb:0: 00.00.00.12
	{addr: 0x00000013,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1E',	desc: 'HR1:E'}, // PatchFx1Harmonist_Hr1E:0: 00.00.00.13
	{addr: 0x00000014,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1F',	desc: 'HR1:F'}, // PatchFx1Harmonist_Hr1F:0: 00.00.00.14
	{addr: 0x00000015,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1Fs',	desc: 'HR1:F#'}, // PatchFx1Harmonist_Hr1Fs:0: 00.00.00.15
	{addr: 0x00000016,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1G',	desc: 'HR1:G'}, // PatchFx1Harmonist_Hr1G:0: 00.00.00.16
	{addr: 0x00000017,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1Ab',	desc: 'HR1:Ab'}, // PatchFx1Harmonist_Hr1Ab:0: 00.00.00.17
	{addr: 0x00000018,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1A',	desc: 'HR1:A'}, // PatchFx1Harmonist_Hr1A:0: 00.00.00.18
	{addr: 0x00000019,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1Bb',	desc: 'HR1:Bb'}, // PatchFx1Harmonist_Hr1Bb:0: 00.00.00.19
	{addr: 0x0000001a,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr1B',	desc: 'HR1:B'}, // PatchFx1Harmonist_Hr1B:0: 00.00.00.1a
	{addr: 0x0000001b,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2C',	desc: 'HR2:C'}, // PatchFx1Harmonist_Hr2C:0: 00.00.00.1b
	{addr: 0x0000001c,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2Db',	desc: 'HR2:Db'}, // PatchFx1Harmonist_Hr2Db:0: 00.00.00.1c
	{addr: 0x0000001d,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2D',	desc: 'HR2:D'}, // PatchFx1Harmonist_Hr2D:0: 00.00.00.1d
	{addr: 0x0000001e,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2Eb',	desc: 'HR2:Eb'}, // PatchFx1Harmonist_Hr2Eb:0: 00.00.00.1e
	{addr: 0x0000001f,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2E',	desc: 'HR2:E'}, // PatchFx1Harmonist_Hr2E:0: 00.00.00.1f
	{addr: 0x00000020,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2F',	desc: 'HR2:F'}, // PatchFx1Harmonist_Hr2F:0: 00.00.00.20
	{addr: 0x00000021,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2Fs',	desc: 'HR2:F#'}, // PatchFx1Harmonist_Hr2Fs:0: 00.00.00.21
	{addr: 0x00000022,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2G',	desc: 'HR2:G'}, // PatchFx1Harmonist_Hr2G:0: 00.00.00.22
	{addr: 0x00000023,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2Ab',	desc: 'HR2:Ab'}, // PatchFx1Harmonist_Hr2Ab:0: 00.00.00.23
	{addr: 0x00000024,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2A',	desc: 'HR2:A'}, // PatchFx1Harmonist_Hr2A:0: 00.00.00.24
	{addr: 0x00000025,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2Bb',	desc: 'HR2:Bb'}, // PatchFx1Harmonist_Hr2Bb:0: 00.00.00.25
	{addr: 0x00000026,	size: INTEGER1x7,	ofs: 24,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Hr2B',	desc: 'HR2:B'}, // PatchFx1Harmonist_Hr2B:0: 00.00.00.26
];
var PatchFxHumanizer = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Mode',	desc: 'MODE'}, // PatchFx1Humanizer_Mode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 0,	factor: 1,	name: 'Vowel1',	desc: 'VOWEL1'}, // PatchFx1Humanizer_Vowel1:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 4,	init: 2,	factor: 1,	name: 'Vowel2',	desc: 'VOWEL2'}, // PatchFx1Humanizer_Vowel2:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1Humanizer_Sens:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Humanizer_Rate:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Humanizer_Depth:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Manual',	desc: 'MANUAL'}, // PatchFx1Humanizer_Manual:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Humanizer_EffectLevel:0: 00.00.00.07
];
var PatchFxIsolator = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Band',	desc: 'BAND'}, // PatchFx1Isolator_Band:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 109,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Isolator_Rate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Isolator_Depth:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'BandLevel',	desc: 'BAND LEVEL'}, // PatchFx1Isolator_BandLevel:0: 00.00.00.03
];
var PatchFxLimiter = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Limiter_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 60,	factor: 1,	name: 'Threshold',	desc: 'THRESHOLD'}, // PatchFx1Limiter_Threshold:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 17,	init: 11,	factor: 1,	name: 'Ratio',	desc: 'RATIO'}, // PatchFx1Limiter_Ratio:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 25,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Limiter_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchFx1Limiter_Attack:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 20,	factor: 1,	name: 'Release',	desc: 'RELEASE'}, // PatchFx1Limiter_Release:0: 00.00.00.05
];
var PatchFxLofi = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 15,	init: 8,	factor: 1,	name: 'BitDepth',	desc: 'BIT DEPTH'}, // PatchFx1Lofi_BitDepth:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 31,	init: 15,	factor: 1,	name: 'SampleRate',	desc: 'SAMPLE RATE'}, // PatchFx1Lofi_SampleRate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Balance',	desc: 'BALANCE'}, // PatchFx1Lofi_Balance:0: 00.00.00.02
];
var PatchFxOctave = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 60,	factor: 1,	name: 'Oct2',	desc: '-2OCT'}, // PatchFx1Octave_Oct2:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Oct1',	desc: '-1OCT'}, // PatchFx1Octave_Oct1:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Octave_DirectLevel:0: 00.00.00.02
];
var PatchFxOctaveBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 60,	factor: 1,	name: 'Oct2',	desc: '-2OCT'}, // PatchFx1OctaveBass_Oct2:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Oct1',	desc: '-1OCT'}, // PatchFx1OctaveBass_Oct1:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1OctaveBass_DirectLevel:0: 00.00.00.02
];
var PatchFxPan = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Pan_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'WaveShape',	desc: 'WAVE SHAPE'}, // PatchFx1Pan_WaveShape:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 40,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Pan_Rate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Pan_Depth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Pan_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Position',	desc: 'POSITION'}, // PatchFx1Pan_Position:0: 00.00.00.05
];
var PatchFxPEq = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'DontRemoveMe',	desc: 'SW(Dummy)'}, // PatchFx1PEq_DontRemoveMe:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'LowGain',	desc: 'LOW GAIN'}, // PatchFx1PEq_LowGain:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'HighGain',	desc: 'HIGH GAIN'}, // PatchFx1PEq_HighGain:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 14,	factor: 1,	name: 'LowMidFreq',	desc: 'LOW-MID FREQ'}, // PatchFx1PEq_LowMidFreq:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'LowMidQ',	desc: 'LOW-MID Q'}, // PatchFx1PEq_LowMidQ:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'LowMidGain',	desc: 'LOW-MID GAIN'}, // PatchFx1PEq_LowMidGain:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 29,	init: 23,	factor: 1,	name: 'HighMidFreq',	desc: 'HIGH-MID FREQ'}, // PatchFx1PEq_HighMidFreq:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 5,	init: 1,	factor: 1,	name: 'HighMidQ',	desc: 'HIGH-MID Q'}, // PatchFx1PEq_HighMidQ:0: 00.00.00.07
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'HighMidGain',	desc: 'HIGH-MID GAIN'}, // PatchFx1PEq_HighMidGain:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 0,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchFx1PEq_LowCut:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 30,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1PEq_HighCut:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 32,	min: -20,	max: 20,	init: 0,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchFx1PEq_Level:0: 00.00.00.0b
];
var PatchFxPedalBend = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 12,	factor: 1,	name: 'Pitch',	desc: 'PITCH'}, // PatchFx1PedalBend_Pitch:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1PedalBend_EffectLevel:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 0,	factor: 10,	name: 'PedalPosition',	desc: 'PEDAL POSITION'}, // PatchFx1PedalBend_PedalPosition:0: 00.00.00.02
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1PedalBend_DirectLevel:0: 00.00.00.06
];
var PatchFxPhaser = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Phaser_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 70,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Phaser_Rate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Phaser_Depth:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1Phaser_Resonance:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 55,	factor: 1,	name: 'Manual',	desc: 'MANUAL'}, // PatchFx1Phaser_Manual:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 119,	init: 0,	factor: 1,	name: 'StepRate',	desc: 'STEP RATE'}, // PatchFx1Phaser_StepRate:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Phaser_EffectLevel:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Phaser_DirectLevel:0: 00.00.00.07
];
var PatchFxPitchShift = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'Voice',	desc: 'VOICE'}, // PatchFx1PitchShift_Voice:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Ps1Pitch',	desc: 'PS1:PITCH'}, // PatchFx1PitchShift_Ps1Pitch:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 32,	min: -24,	max: 24,	init: 0,	factor: 1,	name: 'Ps2Pitch',	desc: 'PS2:PITCH'}, // PatchFx1PitchShift_Ps2Pitch:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1PitchShift_DirectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'Ps1Mode',	desc: 'PS1:MODE'}, // PatchFx1PitchShift_Ps1Mode:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 10,	factor: 1,	name: 'Ps1Fine',	desc: 'PS1:FINE'}, // PatchFx1PitchShift_Ps1Fine:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 318,	init: 0,	factor: 1,	name: 'Ps1PreDelay',	desc: 'PS1:PRE-DELAY'}, // PatchFx1PitchShift_Ps1PreDelay:0: 00.00.00.06
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Ps1Level',	desc: 'PS1:LEVEL'}, // PatchFx1PitchShift_Ps1Level:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'Ps1Feedback',	desc: 'PS1:FEEDBACK'}, // PatchFx1PitchShift_Ps1Feedback:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 3,	init: 1,	factor: 1,	name: 'Ps2Mode',	desc: 'PS2:MODE'}, // PatchFx1PitchShift_Ps2Mode:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: -10,	factor: 1,	name: 'Ps2Fine',	desc: 'PS2:FINE'}, // PatchFx1PitchShift_Ps2Fine:0: 00.00.00.0d
	{addr: 0x0000000e,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 318,	init: 0,	factor: 1,	name: 'Ps2PreDelay',	desc: 'PS2:PRE-DELAY'}, // PatchFx1PitchShift_Ps2PreDelay:0: 00.00.00.0e
	{addr: 0x00000012,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'Ps2Level',	desc: 'PS2:LEVEL'}, // PatchFx1PitchShift_Ps2Level:0: 00.00.00.12
];
var PatchFxReverb = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 0,	init: 0,	factor: 1,	name: 'DontRemoveMe',	desc: 'SW(Dummy)'}, // PatchFx1Reverb_DontRemoveMe:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 4,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Reverb_Type:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 100,	init: 25,	factor: 1,	name: 'Time',	desc: 'TIME'}, // PatchFx1Reverb_Time:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'CarryOver',	desc: 'CARRY OVER'}, // PatchFx1Reverb_CarryOver:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 500,	init: 0,	factor: 1,	name: 'PreDelay',	desc: 'PRE-DELAY'}, // PatchFx1Reverb_PreDelay:0: 00.00.00.04
	{addr: 0x00000008,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 35,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Reverb_EffectLevel:0: 00.00.00.08
	{addr: 0x00000009,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 10,	factor: 1,	name: 'LowCut',	desc: 'LOW CUT'}, // PatchFx1Reverb_LowCut:0: 00.00.00.09
	{addr: 0x0000000a,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 30,	init: 23,	factor: 1,	name: 'HighCut',	desc: 'HIGH CUT'}, // PatchFx1Reverb_HighCut:0: 00.00.00.0a
	{addr: 0x0000000b,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 10,	init: 8,	factor: 1,	name: 'Density',	desc: 'DENSITY'}, // PatchFx1Reverb_Density:0: 00.00.00.0b
	{addr: 0x0000000c,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Reverb_DirectLevel:0: 00.00.00.0c
	{addr: 0x0000000d,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'SpringSens',	desc: 'SPRING SENS'}, // PatchFx1Reverb_SpringSens:0: 00.00.00.0d
];
var PatchFxRingMod = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Intelligent',	desc: 'INTELLIGENT'}, // PatchFx1RingMod_Intelligent:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Frequency',	desc: 'FREQUENCY'}, // PatchFx1RingMod_Frequency:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'FreqModRate',	desc: 'FREQ MOD RATE'}, // PatchFx1RingMod_FreqModRate:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'FreqModDepth',	desc: 'FREQ MOD DEPTH'}, // PatchFx1RingMod_FreqModDepth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1RingMod_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1RingMod_DirectLevel:0: 00.00.00.05
];
var PatchFxRotary = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'SpeedSelect',	desc: 'SPEED SELECT'}, // PatchFx1Rotary_SpeedSelect:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 30,	factor: 1,	name: 'RateSlow',	desc: 'RATE SLOW'}, // PatchFx1Rotary_RateSlow:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 85,	factor: 1,	name: 'RateFast',	desc: 'RATE FAST'}, // PatchFx1Rotary_RateFast:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Rotary_Depth:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1Rotary_RiseTime:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'FallTime',	desc: 'FALL TIME'}, // PatchFx1Rotary_FallTime:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Rotary_EffectLevel:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Rotary_DirectLevel:0: 00.00.00.07
];
var PatchFxSitarSim = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1SitarSim_Sens:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1SitarSim_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 64,	min: -50,	max: 50,	init: 0,	factor: 1,	name: 'Tone',	desc: 'TONE'}, // PatchFx1SitarSim_Tone:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1SitarSim_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 32,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1SitarSim_Resonance:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 40,	factor: 1,	name: 'Buzz',	desc: 'BUZZ'}, // PatchFx1SitarSim_Buzz:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1SitarSim_DirectLevel:0: 00.00.00.06
];
var PatchFxSlicer = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 19,	init: 0,	factor: 1,	name: 'Pattern',	desc: 'PATTERN'}, // PatchFx1Slicer_Pattern:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 50,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Slicer_Rate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Trigger',	desc: 'TRIGGER'}, // PatchFx1Slicer_Trigger:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Slicer_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Attack',	desc: 'ATTACK'}, // PatchFx1Slicer_Attack:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 1,	max: 99,	init: 50,	factor: 1,	name: 'Duty',	desc: 'DUTY'}, // PatchFx1Slicer_Duty:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Slicer_DirectLevel:0: 00.00.00.06
];
var PatchFxSlowGear = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1SlowGear_Sens:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1SlowGear_RiseTime:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchFx1SlowGear_Level:0: 00.00.00.02
];
var PatchFxSlowGearBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1SlowGearBass_Sens:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1SlowGearBass_RiseTime:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Level',	desc: 'LEVEL'}, // PatchFx1SlowGearBass_Level:0: 00.00.00.02
];
var PatchFxSoundHold = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 0,	factor: 1,	name: 'Trigger',	desc: 'TRIGGER'}, // PatchFx1SoundHold_Trigger:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1SoundHold_RiseTime:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 120,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1SoundHold_EffectLevel:0: 00.00.00.02
];
var PatchFxTWah = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 1,	factor: 1,	name: 'FilterMode',	desc: 'FILTER MODE'}, // PatchFx1TWah_FilterMode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Polarity',	desc: 'POLARITY'}, // PatchFx1TWah_Polarity:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1TWah_Sens:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Frequency',	desc: 'FREQUENCY'}, // PatchFx1TWah_Frequency:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1TWah_Resonance:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Decay',	desc: 'DECAY'}, // PatchFx1TWah_Decay:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1TWah_EffectLevel:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1TWah_DirectLevel:0: 00.00.00.07
];
var PatchFxTWahBass = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 2,	init: 0,	factor: 1,	name: 'FilterMode',	desc: 'FILTER MODE'}, // PatchFx1TWahBass_FilterMode:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Polarity',	desc: 'POLARITY'}, // PatchFx1TWahBass_Polarity:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Sens',	desc: 'SENS'}, // PatchFx1TWahBass_Sens:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Frequency',	desc: 'FREQUENCY'}, // PatchFx1TWahBass_Frequency:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Resonance',	desc: 'RESONANCE'}, // PatchFx1TWahBass_Resonance:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Decay',	desc: 'DECAY'}, // PatchFx1TWahBass_Decay:0: 00.00.00.05
	{addr: 0x00000006,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1TWahBass_EffectLevel:0: 00.00.00.06
	{addr: 0x00000007,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1TWahBass_DirectLevel:0: 00.00.00.07
];
var PatchFxTremolo = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'WaveShape',	desc: 'WAVE SHAPE'}, // PatchFx1Tremolo_WaveShape:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 85,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Tremolo_Rate:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Tremolo_Depth:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Tremolo_EffectLevel:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Tremolo_DirectLevel:0: 00.00.00.04
];
var PatchFxVibrato = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 118,	init: 80,	factor: 1,	name: 'Rate',	desc: 'RATE'}, // PatchFx1Vibrato_Rate:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 45,	factor: 1,	name: 'Depth',	desc: 'DEPTH'}, // PatchFx1Vibrato_Depth:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 1,	init: 1,	factor: 1,	name: 'Trigger',	desc: 'TRIGGER'}, // PatchFx1Vibrato_Trigger:0: 00.00.00.02
	{addr: 0x00000003,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 50,	factor: 1,	name: 'RiseTime',	desc: 'RISE TIME'}, // PatchFx1Vibrato_RiseTime:0: 00.00.00.03
	{addr: 0x00000004,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 80,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Vibrato_EffectLevel:0: 00.00.00.04
	{addr: 0x00000005,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Vibrato_DirectLevel:0: 00.00.00.05
];
var PatchFxWah = [
	{addr: 0x00000000,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 6,	init: 0,	factor: 1,	name: 'Type',	desc: 'TYPE'}, // PatchFx1Wah_Type:0: 00.00.00.00
	{addr: 0x00000001,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 100,	factor: 1,	name: 'EffectLevel',	desc: 'EFFECT LEVEL'}, // PatchFx1Wah_EffectLevel:0: 00.00.00.01
	{addr: 0x00000002,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'PedalPosition',	desc: 'PEDAL POSITION'}, // PatchFx1Wah_PedalPosition:0: 00.00.00.02
	{addr: 0x00000006,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 0,	factor: 10,	name: 'PedalMin',	desc: 'PEDAL MIN'}, // PatchFx1Wah_PedalMin:0: 00.00.00.06
	{addr: 0x0000000a,	size: INTEGER4x4,	ofs: 0,	min: 0,	max: 1000,	init: 1000,	factor: 10,	name: 'PedalMax',	desc: 'PEDAL MAX'}, // PatchFx1Wah_PedalMax:0: 00.00.00.0a
	{addr: 0x0000000e,	size: INTEGER1x7,	ofs: 0,	min: 0,	max: 100,	init: 0,	factor: 1,	name: 'DirectLevel',	desc: 'DIRECT LEVEL'}, // PatchFx1Wah_DirectLevel:0: 00.00.00.0e
];

// group
var Fx = [
	{addr: 0x00000000,	size: 0,	child: PatchFx,	name: 'fx'  }, // PatchFx1:fx1: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchFxAcReso,	name: 'fxAcReso'  }, // PatchFx1AcReso:fx1AcReso: 00.00.01.00
	{addr: 0x00000200,	size: 0,	child: PatchFxAWah,	name: 'fxAWah'  }, // PatchFx1AWah:fx1AWah: 00.00.02.00
	{addr: 0x00000300,	size: 0,	child: PatchFxChorus,	name: 'fxChorus'  }, // PatchFx1Chorus:fx1Chorus: 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: PatchFxCVibe,	name: 'fxCVibe'  }, // PatchFx1CVibe:fx1CVibe: 00.00.04.00
	{addr: 0x00000500,	size: 0,	child: PatchFxComp,	name: 'fxComp'  }, // PatchFx1Comp:fx1Comp: 00.00.05.00
	{addr: 0x00000600,	size: 0,	child: PatchFxDefretter,	name: 'fxDefretter'  }, // PatchFx1Defretter:fx1Defretter: 00.00.06.00
	{addr: 0x00000700,	size: 0,	child: PatchFxDefretterBass,	name: 'fxDefretterBass'  }, // PatchFx1DefretterBass:fx1DefretterBass: 00.00.07.00
	{addr: 0x00000800,	size: 0,	child: PatchFxDelay,	name: 'fxDelay'  }, // PatchFx1Delay:fx1Delay: 00.00.08.00
	{addr: 0x00000900,	size: 0,	child: PatchFxFlanger,	name: 'fxFlanger'  }, // PatchFx1Flanger:fx1Flanger: 00.00.09.00
	{addr: 0x00000a00,	size: 0,	child: PatchFxFlangerBass,	name: 'fxFlangerBass'  }, // PatchFx1FlangerBass:fx1FlangerBass: 00.00.0a.00
	{addr: 0x00000b00,	size: 0,	child: PatchFxFv,	name: 'fxFv'  }, // PatchFx1Fv:fx1Fv: 00.00.0b.00
	{addr: 0x00000c00,	size: 0,	child: PatchFxGEq,	name: 'fxGEq'  }, // PatchFx1GEq:fx1GEq: 00.00.0c.00
	{addr: 0x00000d00,	size: 0,	child: PatchFxHarmonist,	name: 'fxHarmonist'  }, // PatchFx1Harmonist:fx1Harmonist: 00.00.0d.00
	{addr: 0x00000e00,	size: 0,	child: PatchFxHumanizer,	name: 'fxHumanizer'  }, // PatchFx1Humanizer:fx1Humanizer: 00.00.0e.00
	{addr: 0x00000f00,	size: 0,	child: PatchFxIsolator,	name: 'fxIsolator'  }, // PatchFx1Isolator:fx1Isolator: 00.00.0f.00
	{addr: 0x00001000,	size: 0,	child: PatchFxLimiter,	name: 'fxLimiter'  }, // PatchFx1Limiter:fx1Limiter: 00.00.10.00
	{addr: 0x00001100,	size: 0,	child: PatchFxLofi,	name: 'fxLofi'  }, // PatchFx1Lofi:fx1Lofi: 00.00.11.00
	{addr: 0x00001200,	size: 0,	child: PatchFxOctave,	name: 'fxOctave'  }, // PatchFx1Octave:fx1Octave: 00.00.12.00
	{addr: 0x00001300,	size: 0,	child: PatchFxOctaveBass,	name: 'fxOctaveBass'  }, // PatchFx1OctaveBass:fx1OctaveBass: 00.00.13.00
	{addr: 0x00001400,	size: 0,	child: PatchFxPan,	name: 'fxPan'  }, // PatchFx1Pan:fx1Pan: 00.00.14.00
	{addr: 0x00001500,	size: 0,	child: PatchFxPEq,	name: 'fxPEq'  }, // PatchFx1PEq:fx1PEq: 00.00.15.00
	{addr: 0x00001600,	size: 0,	child: PatchFxPedalBend,	name: 'fxPedalBend'  }, // PatchFx1PedalBend:fx1PedalBend: 00.00.16.00
	{addr: 0x00001700,	size: 0,	child: PatchFxPhaser,	name: 'fxPhaser'  }, // PatchFx1Phaser:fx1Phaser: 00.00.17.00
	{addr: 0x00001800,	size: 0,	child: PatchFxPitchShift,	name: 'fxPitchShift'  }, // PatchFx1PitchShift:fx1PitchShift: 00.00.18.00
	{addr: 0x00001900,	size: 0,	child: PatchFxReverb,	name: 'fxReverb'  }, // PatchFx1Reverb:fx1Reverb: 00.00.19.00
	{addr: 0x00001a00,	size: 0,	child: PatchFxRingMod,	name: 'fxRingMod'  }, // PatchFx1RingMod:fx1RingMod: 00.00.1a.00
	{addr: 0x00001b00,	size: 0,	child: PatchFxRotary,	name: 'fxRotary'  }, // PatchFx1Rotary:fx1Rotary: 00.00.1b.00
	{addr: 0x00001c00,	size: 0,	child: PatchFxSitarSim,	name: 'fxSitarSim'  }, // PatchFx1SitarSim:fx1SitarSim: 00.00.1c.00
	{addr: 0x00001d00,	size: 0,	child: PatchFxSlicer,	name: 'fxSlicer'  }, // PatchFx1Slicer:fx1Slicer: 00.00.1d.00
	{addr: 0x00001e00,	size: 0,	child: PatchFxSlowGear,	name: 'fxSlowGear'  }, // PatchFx1SlowGear:fx1SlowGear: 00.00.1e.00
	{addr: 0x00001f00,	size: 0,	child: PatchFxSlowGearBass,	name: 'fxSlowGearBass'  }, // PatchFx1SlowGearBass:fx1SlowGearBass: 00.00.1f.00
	{addr: 0x00002000,	size: 0,	child: PatchFxSoundHold,	name: 'fxSoundHold'  }, // PatchFx1SoundHold:fx1SoundHold: 00.00.20.00
	{addr: 0x00002100,	size: 0,	child: PatchFxTWah,	name: 'fxTWah'  }, // PatchFx1TWah:fx1TWah: 00.00.21.00
	{addr: 0x00002200,	size: 0,	child: PatchFxTWahBass,	name: 'fxTWahBass'  }, // PatchFx1TWahBass:fx1TWahBass: 00.00.22.00
	{addr: 0x00002300,	size: 0,	child: PatchFxTremolo,	name: 'fxTremolo'  }, // PatchFx1Tremolo:fx1Tremolo: 00.00.23.00
	{addr: 0x00002400,	size: 0,	child: PatchFxVibrato,	name: 'fxVibrato'  }, // PatchFx1Vibrato:fx1Vibrato: 00.00.24.00
	{addr: 0x00002500,	size: 0,	child: PatchFxWah,	name: 'fxWah'  }, // PatchFx1Wah:fx1Wah: 00.00.25.00
];
var Inst = [
	{addr: 0x00000000,	size: 0,	child: PatchInst,	name: 'inst'  }, // PatchInst1:inst1: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstDynaSynth,	name: 'instDynaSynth'  }, // PatchInst1DynaSynth:inst1DynaSynth: 00.00.01.00
	{addr: 0x00000300,	size: 0,	child: PatchInstOscSynth,	name: 'instOscSynth'  }, // PatchInst1OscSynth:inst1OscSynth: 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: PatchInstGr300,	name: 'instGr300'  }, // PatchInst1Gr300:inst1Gr300: 00.00.04.00
	{addr: 0x00000500,	size: 0,	child: PatchInstEGtr,	name: 'instEGtr'  }, // PatchInst1EGtr:inst1EGtr: 00.00.05.00
	{addr: 0x00000600,	size: 0,	child: PatchInstAcoustic,	name: 'instAcoustic'  }, // PatchInst1Acoustic:inst1Acoustic: 00.00.06.00
	{addr: 0x00000700,	size: 0,	child: PatchInstEBass,	name: 'instEBass'  }, // PatchInst1EBass:inst1EBass: 00.00.07.00
	{addr: 0x00000800,	size: 0,	child: PatchInstVioGtr,	name: 'instVioGtr'  }, // PatchInst1VioGtr:inst1VioGtr: 00.00.08.00
	{addr: 0x00000900,	size: 0,	child: PatchInstPolyFx,	name: 'instPolyFx'  }, // PatchInst1PolyFx:inst1PolyFx: 00.00.09.00
	{addr: 0x00000a00,	size: 0,	child: PatchInstAltTune,	name: 'instAltTune'  }, // PatchInst1AltTune:inst1AltTune: 00.00.0a.00
];
var InstBass = [
	{addr: 0x00000000,	size: 0,	child: PatchInstBass,	name: 'inst'  }, // PatchInst1Bass:inst1: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstDynaSynth,	name: 'instDynaSynth'  }, // PatchInst1DynaSynth:inst1DynaSynth: 00.00.01.00
	{addr: 0x00000300,	size: 0,	child: PatchInstOscSynth,	name: 'instOscSynth'  }, // PatchInst1OscSynth:inst1OscSynth: 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: PatchInstGr300,	name: 'instAnalogGr'  }, // PatchInst1Gr300:inst1AnalogGr: 00.00.04.00
	{addr: 0x00000500,	size: 0,	child: PatchInstEBassBass,	name: 'instEBass'  }, // PatchInst1EBassBass:inst1EBass: 00.00.05.00
	{addr: 0x00000600,	size: 0,	child: PatchInstAcBass,	name: 'instAcBass'  }, // PatchInst1AcBass:inst1AcBass: 00.00.06.00
	{addr: 0x00000700,	size: 0,	child: PatchInstEGtrBass,	name: 'instEGtr'  }, // PatchInst1EGtrBass:inst1EGtr: 00.00.07.00
	{addr: 0x00000800,	size: 0,	child: PatchInstPolyFx,	name: 'instPolyFx'  }, // PatchInst1PolyFx:inst1PolyFx: 00.00.08.00
	{addr: 0x00000900,	size: 0,	child: PatchInstAltTuneBass,	name: 'instAltTune'  }, // PatchInst1AltTuneBass:inst1AltTune: 00.00.09.00
];
var Patch = [
	{addr: 0x00000000,	size: 0,	child: PatchCommon,	name: 'common'  }, // PatchCommon:common: 00.00.00.00
	{addr: 0x00000200,	size: 0,	child: PatchCommon2,	name: 'common2'  }, // PatchCommon2:common2: 00.00.02.00
	{addr: 0x00000300,	size: 0,	child: PatchLed,	name: 'led'  }, // PatchLed:led: 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: Assign,	name: 'assign(1)'  }, // Assign:assign(1): 00.00.04.00
	{addr: 0x00000440,	size: 0,	child: Assign,	name: 'assign(2)'  }, // Assign:assign(2): 00.00.04.40
	{addr: 0x00000500,	size: 0,	child: Assign,	name: 'assign(3)'  }, // Assign:assign(3): 00.00.05.00
	{addr: 0x00000540,	size: 0,	child: Assign,	name: 'assign(4)'  }, // Assign:assign(4): 00.00.05.40
	{addr: 0x00000600,	size: 0,	child: Assign,	name: 'assign(5)'  }, // Assign:assign(5): 00.00.06.00
	{addr: 0x00000640,	size: 0,	child: Assign,	name: 'assign(6)'  }, // Assign:assign(6): 00.00.06.40
	{addr: 0x00000700,	size: 0,	child: Assign,	name: 'assign(7)'  }, // Assign:assign(7): 00.00.07.00
	{addr: 0x00000740,	size: 0,	child: Assign,	name: 'assign(8)'  }, // Assign:assign(8): 00.00.07.40
	{addr: 0x00000800,	size: 0,	child: Assign,	name: 'assign(9)'  }, // Assign:assign(9): 00.00.08.00
	{addr: 0x00000840,	size: 0,	child: Assign,	name: 'assign(10)'  }, // Assign:assign(10): 00.00.08.40
	{addr: 0x00000900,	size: 0,	child: Assign,	name: 'assign(11)'  }, // Assign:assign(11): 00.00.09.00
	{addr: 0x00000940,	size: 0,	child: Assign,	name: 'assign(12)'  }, // Assign:assign(12): 00.00.09.40
	{addr: 0x00000a00,	size: 0,	child: Assign,	name: 'assign(13)'  }, // Assign:assign(13): 00.00.0a.00
	{addr: 0x00000a40,	size: 0,	child: Assign,	name: 'assign(14)'  }, // Assign:assign(14): 00.00.0a.40
	{addr: 0x00000b00,	size: 0,	child: Assign,	name: 'assign(15)'  }, // Assign:assign(15): 00.00.0b.00
	{addr: 0x00000b40,	size: 0,	child: Assign,	name: 'assign(16)'  }, // Assign:assign(16): 00.00.0b.40
	{addr: 0x00000c00,	size: 0,	child: Padding,	name: 'padding'  }, // Padding:padding: 00.00.0c.00
	{addr: 0x00001200,	size: 0,	child: PatchEfct,	name: 'efct'  }, // PatchEfct:efct: 00.00.12.00
	{addr: 0x00001400,	size: 0,	child: PatchGtr2Midi,	name: 'gtr2midi'  }, // PatchGtr2Midi:gtr2midi: 00.00.14.00
	{addr: 0x00001500,	size: 0,	child: Inst,	name: 'inst(1)'  }, // PatchInst1:inst: 00.00.15.00
	{addr: 0x00002000,	size: 0,	child: Inst,	name: 'inst(2)'  }, // PatchInst2:inst2: 00.00.20.00
	{addr: 0x00002b00,	size: 0,	child: Inst,	name: 'inst(3)'  }, // PatchInst3:inst3: 00.00.2b.00
	{addr: 0x00003600,	size: 0,	child: PatchComp,	name: 'comp'  }, // PatchComp:comp: 00.00.36.00
	{addr: 0x00003700,	size: 0,	child: PatchDist,	name: 'dist'  }, // PatchDist:dist: 00.00.37.00
	{addr: 0x00003800,	size: 0,	child: PatchAmp,	name: 'amp'  }, // PatchAmp:amp: 00.00.38.00
	{addr: 0x00003900,	size: 0,	child: PatchNs,	name: 'ns'  }, // PatchNs:ns: 00.00.39.00
	{addr: 0x00003a00,	size: 0,	child: PatchEq,	name: 'eq(1)'  }, // PatchEq1:eq1: 00.00.3a.00
	{addr: 0x00003b00,	size: 0,	child: PatchEq,	name: 'eq(2)'  }, // PatchEq2:eq2: 00.00.3b.00
	{addr: 0x00003c00,	size: 0,	child: PatchDelay,	name: 'delay(1)'  }, // PatchDelay1:delay1: 00.00.3c.00
	{addr: 0x00003d00,	size: 0,	child: PatchDelay,	name: 'delay(2)'  }, // PatchDelay2:delay2: 00.00.3d.00
	{addr: 0x00003e00,	size: 0,	child: PatchMstDelay,	name: 'mstDelay'  }, // PatchMstDelay:mstDelay: 00.00.3e.00
	{addr: 0x00003f00,	size: 0,	child: PatchChorus,	name: 'chorus'  }, // PatchChorus:chorus: 00.00.3f.00
	{addr: 0x00004000,	size: 0,	child: Fx,	name: 'fx(1)'  }, // PatchFx1:fx: 00.00.40.00
	{addr: 0x00006600,	size: 0,	child: Fx,	name: 'fx(2)'  }, // PatchFx2:fx2: 00.00.66.00
	{addr: 0x00010c00,	size: 0,	child: Fx,	name: 'fx(3)'  }, // PatchFx3:fx3: 00.01.0c.00
	{addr: 0x00013200,	size: 0,	child: PatchReverb,	name: 'reverb'  }, // PatchReverb:reverb: 00.01.32.00
];
var PatchBass = [
	{addr: 0x00000000,	size: 0,	child: PatchCommon,	name: 'common'  }, // PatchCommon:common: 00.00.00.00
	{addr: 0x00000200,	size: 0,	child: PatchCommon2Bass,	name: 'common2'  }, // PatchCommon2Bass:common2: 00.00.02.00
	{addr: 0x00000300,	size: 0,	child: PatchLed,	name: 'led'  }, // PatchLed:led: 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: Assign,	name: 'assign(1)'  }, // Assign:assign(1): 00.00.04.00
	{addr: 0x00000440,	size: 0,	child: Assign,	name: 'assign(2)'  }, // Assign:assign(2): 00.00.04.40
	{addr: 0x00000500,	size: 0,	child: Assign,	name: 'assign(3)'  }, // Assign:assign(3): 00.00.05.00
	{addr: 0x00000540,	size: 0,	child: Assign,	name: 'assign(4)'  }, // Assign:assign(4): 00.00.05.40
	{addr: 0x00000600,	size: 0,	child: Assign,	name: 'assign(5)'  }, // Assign:assign(5): 00.00.06.00
	{addr: 0x00000640,	size: 0,	child: Assign,	name: 'assign(6)'  }, // Assign:assign(6): 00.00.06.40
	{addr: 0x00000700,	size: 0,	child: Assign,	name: 'assign(7)'  }, // Assign:assign(7): 00.00.07.00
	{addr: 0x00000740,	size: 0,	child: Assign,	name: 'assign(8)'  }, // Assign:assign(8): 00.00.07.40
	{addr: 0x00000800,	size: 0,	child: Assign,	name: 'assign(9)'  }, // Assign:assign(9): 00.00.08.00
	{addr: 0x00000840,	size: 0,	child: Assign,	name: 'assign(10)'  }, // Assign:assign(10): 00.00.08.40
	{addr: 0x00000900,	size: 0,	child: Assign,	name: 'assign(11)'  }, // Assign:assign(11): 00.00.09.00
	{addr: 0x00000940,	size: 0,	child: Assign,	name: 'assign(12)'  }, // Assign:assign(12): 00.00.09.40
	{addr: 0x00000a00,	size: 0,	child: Assign,	name: 'assign(13)'  }, // Assign:assign(13): 00.00.0a.00
	{addr: 0x00000a40,	size: 0,	child: Assign,	name: 'assign(14)'  }, // Assign:assign(14): 00.00.0a.40
	{addr: 0x00000b00,	size: 0,	child: Assign,	name: 'assign(15)'  }, // Assign:assign(15): 00.00.0b.00
	{addr: 0x00000b40,	size: 0,	child: Assign,	name: 'assign(16)'  }, // Assign:assign(16): 00.00.0b.40
	{addr: 0x00000c00,	size: 0,	child: Padding,	name: 'padding'  }, // Padding:padding: 00.00.0c.00
	{addr: 0x00001200,	size: 0,	child: PatchEfct,	name: 'efct'  }, // PatchEfct:efct: 00.00.12.00
	{addr: 0x00001400,	size: 0,	child: PatchGtr2Midi,	name: 'gtr2midi'  }, // PatchGtr2Midi:gtr2midi: 00.00.14.00
	{addr: 0x00001500,	size: 0,	child: InstBass,	name: 'inst(1)'  }, // PatchInst1Bass:inst: 00.00.15.00
	{addr: 0x00001f00,	size: 0,	child: InstBass,	name: 'inst(2)'  }, // PatchInst2Bass:inst2: 00.00.1f.00
	{addr: 0x00002900,	size: 0,	child: InstBass,	name: 'inst(3)'  }, // PatchInst3Bass:inst3: 00.00.29.00
	{addr: 0x00003300,	size: 0,	child: PatchComp,	name: 'comp'  }, // PatchComp:comp: 00.00.33.00
	{addr: 0x00003400,	size: 0,	child: PatchDist,	name: 'dist'  }, // PatchDist:dist: 00.00.34.00
	{addr: 0x00003500,	size: 0,	child: PatchAmp,	name: 'amp'  }, // PatchAmp:amp: 00.00.35.00
	{addr: 0x00003600,	size: 0,	child: PatchNs,	name: 'ns'  }, // PatchNs:ns: 00.00.36.00
	{addr: 0x00003700,	size: 0,	child: PatchEq,	name: 'eq(1)'  }, // PatchEq1:eq1: 00.00.37.00
	{addr: 0x00003800,	size: 0,	child: PatchEq,	name: 'eq(2)'  }, // PatchEq2:eq2: 00.00.38.00
	{addr: 0x00003900,	size: 0,	child: PatchDelay,	name: 'delay(1)'  }, // PatchDelay1:delay1: 00.00.39.00
	{addr: 0x00003a00,	size: 0,	child: PatchDelay,	name: 'delay(2)'  }, // PatchDelay2:delay2: 00.00.3a.00
	{addr: 0x00003b00,	size: 0,	child: PatchMstDelay,	name: 'mstDelay'  }, // PatchMstDelay:mstDelay: 00.00.3b.00
	{addr: 0x00003c00,	size: 0,	child: PatchChorus,	name: 'chorus'  }, // PatchChorus:chorus: 00.00.3c.00
	{addr: 0x00003d00,	size: 0,	child: Fx,	name: 'fx(1)'  }, // PatchFx1:fx: 00.00.3d.00
	{addr: 0x00006300,	size: 0,	child: Fx,	name: 'fx(2)'  }, // PatchFx2:fx2: 00.00.63.00
	{addr: 0x00010900,	size: 0,	child: Fx,	name: 'fx(3)'  }, // PatchFx3:fx3: 00.01.09.00
	{addr: 0x00012f00,	size: 0,	child: PatchReverb,	name: 'reverb'  }, // PatchReverb:reverb: 00.01.2f.00
];
var InstVariDynaSynth = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstDynaSynth,	name: 'inst'  }, // PatchInst1DynaSynth:inst: 00.00.01.00
];
var InstVariOscSynth = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstOscSynth,	name: 'inst'  }, // PatchInst1OscSynth:inst: 00.00.01.00
];
var InstVariGr300 = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstGr300,	name: 'inst'  }, // PatchInst1Gr300:inst: 00.00.01.00
];
var InstVariEGtr = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstEGtr,	name: 'inst'  }, // PatchInst1EGtr:inst: 00.00.01.00
];
var InstVariAcoustic = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstAcoustic,	name: 'inst'  }, // PatchInst1Acoustic:inst: 00.00.01.00
];
var InstVariEBass = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstEBass,	name: 'inst'  }, // PatchInst1EBass:inst: 00.00.01.00
];
var InstVariVioGtr = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstVioGtr,	name: 'inst'  }, // PatchInst1VioGtr:inst: 00.00.01.00
];
var InstVariPolyFx = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstPolyFx,	name: 'inst'  }, // PatchInst1PolyFx:inst: 00.00.01.00
];
var InstVariEBassBass = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstEBassBass,	name: 'inst'  }, // PatchInst1EBassBass:inst: 00.00.01.00
];
var InstVariAcBass = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstAcBass,	name: 'inst'  }, // PatchInst1AcBass:inst: 00.00.01.00
];
var InstVariEGtrBass = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: PatchInstEGtrBass,	name: 'inst'  }, // PatchInst1EGtrBass:inst: 00.00.01.00
];
var InstLfoVariDynaSynth = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: InstLfoDynaSynth,	name: 'lfo'  }, // InstLfoDynaSynth:lfo: 00.00.01.00
];
var InstLfoVariOscSynth = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: InstLfoOscSynth,	name: 'lfo'  }, // InstLfoOscSynth:lfo: 00.00.01.00
];
var InstSeqVariDynaSynth = [
	{addr: 0x00000000,	size: 0,	child: InstVariName,	name: 'name'  }, // InstVariName:name: 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: InstSeqDynaSynth,	name: 'seq'  }, // InstSeqDynaSynth:seq: 00.00.01.00
];
var EfctVariItem = [
	{addr: 0x00000000,	size: 0,	child: EfctVariName,	name: 'name(1)'  }, // EfctVariName:name(1): 00.00.00.00
	{addr: 0x00000100,	size: 0,	child: EfctVariName,	name: 'name(2)'  }, // EfctVariName:name(2): 00.00.01.00
	{addr: 0x00000200,	size: 0,	child: EfctVariName,	name: 'name(3)'  }, // EfctVariName:name(3): 00.00.02.00
	{addr: 0x00000300,	size: 0,	child: EfctVariName,	name: 'name(4)'  }, // EfctVariName:name(4): 00.00.03.00
	{addr: 0x00000400,	size: 0,	child: EfctVariName,	name: 'name(5)'  }, // EfctVariName:name(5): 00.00.04.00
	{addr: 0x00000500,	size: 0,	child: EfctVariName,	name: 'name(6)'  }, // EfctVariName:name(6): 00.00.05.00
	{addr: 0x00000600,	size: 0,	child: EfctVariName,	name: 'name(7)'  }, // EfctVariName:name(7): 00.00.06.00
	{addr: 0x00000700,	size: 0,	child: EfctVariName,	name: 'name(8)'  }, // EfctVariName:name(8): 00.00.07.00
	{addr: 0x00000800,	size: 0,	child: EfctVariName,	name: 'name(9)'  }, // EfctVariName:name(9): 00.00.08.00
	{addr: 0x00000900,	size: 0,	child: EfctVariName,	name: 'name(10)'  }, // EfctVariName:name(10): 00.00.09.00
	{addr: 0x00000a00,	size: 0,	child: EfctVariName,	name: 'name(11)'  }, // EfctVariName:name(11): 00.00.0a.00
	{addr: 0x00000b00,	size: 0,	child: EfctVariName,	name: 'name(12)'  }, // EfctVariName:name(12): 00.00.0b.00
	{addr: 0x00000c00,	size: 0,	child: EfctVariName,	name: 'name(13)'  }, // EfctVariName:name(13): 00.00.0c.00
	{addr: 0x00000d00,	size: 0,	child: EfctVariName,	name: 'name(14)'  }, // EfctVariName:name(14): 00.00.0d.00
	{addr: 0x00000e00,	size: 0,	child: EfctVariName,	name: 'name(15)'  }, // EfctVariName:name(15): 00.00.0e.00
	{addr: 0x00000f00,	size: 0,	child: EfctVariName,	name: 'name(16)'  }, // EfctVariName:name(16): 00.00.0f.00
	{addr: 0x00001000,	size: 0,	child: EfctVariName,	name: 'name(17)'  }, // EfctVariName:name(17): 00.00.10.00
	{addr: 0x00001100,	size: 0,	child: EfctVariName,	name: 'name(18)'  }, // EfctVariName:name(18): 00.00.11.00
	{addr: 0x00001200,	size: 0,	child: EfctVariName,	name: 'name(19)'  }, // EfctVariName:name(19): 00.00.12.00
	{addr: 0x00001300,	size: 0,	child: EfctVariName,	name: 'name(20)'  }, // EfctVariName:name(20): 00.00.13.00
	{addr: 0x00001400,	size: 0,	child: EfctVariName,	name: 'name(21)'  }, // EfctVariName:name(21): 00.00.14.00
	{addr: 0x00001500,	size: 0,	child: EfctVariName,	name: 'name(22)'  }, // EfctVariName:name(22): 00.00.15.00
	{addr: 0x00001600,	size: 0,	child: EfctVariName,	name: 'name(23)'  }, // EfctVariName:name(23): 00.00.16.00
	{addr: 0x00001700,	size: 0,	child: EfctVariName,	name: 'name(24)'  }, // EfctVariName:name(24): 00.00.17.00
	{addr: 0x00001800,	size: 0,	child: EfctVariName,	name: 'name(25)'  }, // EfctVariName:name(25): 00.00.18.00
	{addr: 0x00001900,	size: 0,	child: EfctVariName,	name: 'name(26)'  }, // EfctVariName:name(26): 00.00.19.00
	{addr: 0x00001a00,	size: 0,	child: EfctVariName,	name: 'name(27)'  }, // EfctVariName:name(27): 00.00.1a.00
	{addr: 0x00001b00,	size: 0,	child: EfctVariName,	name: 'name(28)'  }, // EfctVariName:name(28): 00.00.1b.00
	{addr: 0x00001c00,	size: 0,	child: EfctVariName,	name: 'name(29)'  }, // EfctVariName:name(29): 00.00.1c.00
	{addr: 0x00001d00,	size: 0,	child: EfctVariName,	name: 'name(30)'  }, // EfctVariName:name(30): 00.00.1d.00
	{addr: 0x00001e00,	size: 0,	child: EfctVariName,	name: 'name(31)'  }, // EfctVariName:name(31): 00.00.1e.00
	{addr: 0x00001f00,	size: 0,	child: EfctVariName,	name: 'name(32)'  }, // EfctVariName:name(32): 00.00.1f.00
	{addr: 0x00002000,	size: 0,	child: EfctVariName,	name: 'name(33)'  }, // EfctVariName:name(33): 00.00.20.00
	{addr: 0x00002100,	size: 0,	child: EfctVariName,	name: 'name(34)'  }, // EfctVariName:name(34): 00.00.21.00
	{addr: 0x00002200,	size: 0,	child: EfctVariName,	name: 'name(35)'  }, // EfctVariName:name(35): 00.00.22.00
	{addr: 0x00002300,	size: 0,	child: EfctVariName,	name: 'name(36)'  }, // EfctVariName:name(36): 00.00.23.00
	{addr: 0x00002400,	size: 0,	child: EfctVariName,	name: 'name(37)'  }, // EfctVariName:name(37): 00.00.24.00
	{addr: 0x00002500,	size: 0,	child: PatchComp,	name: 'comp'  }, // PatchComp:comp: 00.00.25.00
	{addr: 0x00002600,	size: 0,	child: PatchDist,	name: 'dist'  }, // PatchDist:dist: 00.00.26.00
	{addr: 0x00002700,	size: 0,	child: PatchAmp,	name: 'amp'  }, // PatchAmp:amp: 00.00.27.00
	{addr: 0x00002800,	size: 0,	child: PatchNs,	name: 'ns'  }, // PatchNs:ns: 00.00.28.00
	{addr: 0x00002900,	size: 0,	child: PatchEq,	name: 'eq'  }, // PatchEq1:eq: 00.00.29.00
	{addr: 0x00002a00,	size: 0,	child: PatchDelay,	name: 'delay'  }, // PatchDelay1:delay: 00.00.2a.00
	{addr: 0x00002b00,	size: 0,	child: PatchMstDelay,	name: 'mstDelay'  }, // PatchMstDelay:mstDelay: 00.00.2b.00
	{addr: 0x00002c00,	size: 0,	child: PatchChorus,	name: 'chorus'  }, // PatchChorus:chorus: 00.00.2c.00
	{addr: 0x00002d00,	size: 0,	child: PatchFxAcReso,	name: 'fxAcReso'  }, // PatchFx1AcReso:fxAcReso: 00.00.2d.00
	{addr: 0x00002e00,	size: 0,	child: PatchFxAWah,	name: 'fxAWah'  }, // PatchFx1AWah:fxAWah: 00.00.2e.00
	{addr: 0x00002f00,	size: 0,	child: PatchFxCVibe,	name: 'fxCVibe'  }, // PatchFx1CVibe:fxCVibe: 00.00.2f.00
	{addr: 0x00003000,	size: 0,	child: PatchFxDefretter,	name: 'fxDefretter'  }, // PatchFx1Defretter:fxDefretter: 00.00.30.00
	{addr: 0x00003100,	size: 0,	child: PatchFxDefretterBass,	name: 'fxDefretterBass'  }, // PatchFx1DefretterBass:fxDefretterBass: 00.00.31.00
	{addr: 0x00003200,	size: 0,	child: PatchFxFlanger,	name: 'fxFlanger'  }, // PatchFx1Flanger:fxFlanger: 00.00.32.00
	{addr: 0x00003300,	size: 0,	child: PatchFxGEq,	name: 'fxGEq'  }, // PatchFx1GEq:fxGEq: 00.00.33.00
	{addr: 0x00003400,	size: 0,	child: PatchFxHarmonist,	name: 'fxHarmonist'  }, // PatchFx1Harmonist:fxHarmonist: 00.00.34.00
	{addr: 0x00003500,	size: 0,	child: PatchFxHumanizer,	name: 'fxHumanizer'  }, // PatchFx1Humanizer:fxHumanizer: 00.00.35.00
	{addr: 0x00003600,	size: 0,	child: PatchFxIsolator,	name: 'fxIsolator'  }, // PatchFx1Isolator:fxIsolator: 00.00.36.00
	{addr: 0x00003700,	size: 0,	child: PatchFxLimiter,	name: 'fxLimiter'  }, // PatchFx1Limiter:fxLimiter: 00.00.37.00
	{addr: 0x00003800,	size: 0,	child: PatchFxLofi,	name: 'fxLofi'  }, // PatchFx1Lofi:fxLofi: 00.00.38.00
	{addr: 0x00003900,	size: 0,	child: PatchFxOctave,	name: 'fxOctave'  }, // PatchFx1Octave:fxOctave: 00.00.39.00
	{addr: 0x00003a00,	size: 0,	child: PatchFxPan,	name: 'fxPan'  }, // PatchFx1Pan:fxPan: 00.00.3a.00
	{addr: 0x00003b00,	size: 0,	child: PatchFxPedalBend,	name: 'fxPedalBend'  }, // PatchFx1PedalBend:fxPedalBend: 00.00.3b.00
	{addr: 0x00003c00,	size: 0,	child: PatchFxPhaser,	name: 'fxPhaser'  }, // PatchFx1Phaser:fxPhaser: 00.00.3c.00
	{addr: 0x00003d00,	size: 0,	child: PatchFxPitchShift,	name: 'fxPitchShift'  }, // PatchFx1PitchShift:fxPitchShift: 00.00.3d.00
	{addr: 0x00003e00,	size: 0,	child: PatchFxRingMod,	name: 'fxRingMod'  }, // PatchFx1RingMod:fxRingMod: 00.00.3e.00
	{addr: 0x00003f00,	size: 0,	child: PatchFxRotary,	name: 'fxRotary'  }, // PatchFx1Rotary:fxRotary: 00.00.3f.00
	{addr: 0x00004000,	size: 0,	child: PatchFxSitarSim,	name: 'fxSitarSim'  }, // PatchFx1SitarSim:fxSitarSim: 00.00.40.00
	{addr: 0x00004100,	size: 0,	child: PatchFxSlicer,	name: 'fxSlicer'  }, // PatchFx1Slicer:fxSlicer: 00.00.41.00
	{addr: 0x00004200,	size: 0,	child: PatchFxSlowGear,	name: 'fxSlowGear'  }, // PatchFx1SlowGear:fxSlowGear: 00.00.42.00
	{addr: 0x00004300,	size: 0,	child: PatchFxSoundHold,	name: 'fxSoundHold'  }, // PatchFx1SoundHold:fxSoundHold: 00.00.43.00
	{addr: 0x00004400,	size: 0,	child: PatchFxTWah,	name: 'fxTWah'  }, // PatchFx1TWah:fxTWah: 00.00.44.00
	{addr: 0x00004500,	size: 0,	child: PatchFxTremolo,	name: 'fxTremolo'  }, // PatchFx1Tremolo:fxTremolo: 00.00.45.00
	{addr: 0x00004600,	size: 0,	child: PatchFxVibrato,	name: 'fxVibrato'  }, // PatchFx1Vibrato:fxVibrato: 00.00.46.00
	{addr: 0x00004700,	size: 0,	child: PatchFxWah,	name: 'fxWah'  }, // PatchFx1Wah:fxWah: 00.00.47.00
	{addr: 0x00004800,	size: 0,	child: PatchReverb,	name: 'reverb'  }, // PatchReverb:reverb: 00.00.48.00
	{addr: 0x00004900,	size: 0,	child: PatchFxFv,	name: 'fv'  }, // PatchFx1Fv:fv: 00.00.49.00
];
var PatchName = [
	{addr: 0x00000000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(1)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000010,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(2)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000020,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(3)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000030,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(4)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000040,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(5)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000050,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(6)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000060,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(7)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000070,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(8)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000100,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(9)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000110,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(10)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000120,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(11)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000130,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(12)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000140,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(13)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000150,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(14)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000160,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(15)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000170,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(16)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000200,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(17)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000210,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(18)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000220,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(19)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000230,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(20)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000240,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(21)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000250,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(22)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000260,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(23)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000270,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(24)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000300,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(25)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000310,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(26)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000320,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(27)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000330,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(28)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000340,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(29)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000350,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(30)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000360,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(31)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000370,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(32)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000400,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(33)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000410,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(34)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000420,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(35)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000430,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(36)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000440,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(37)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000450,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(38)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000460,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(39)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000470,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(40)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000500,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(41)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000510,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(42)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000520,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(43)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000530,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(44)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000540,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(45)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000550,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(46)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000560,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(47)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000570,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(48)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000600,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(49)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000610,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(50)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000620,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(51)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000630,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(52)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000640,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(53)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000650,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(54)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000660,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(55)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000670,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(56)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000700,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(57)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000710,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(58)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000720,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(59)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000730,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(60)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000740,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(61)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000750,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(62)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000760,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(63)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000770,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(64)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000800,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(65)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000810,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(66)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000820,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(67)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000830,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(68)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000840,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(69)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000850,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(70)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000860,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(71)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000870,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(72)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000900,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(73)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000910,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(74)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000920,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(75)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000930,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(76)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000940,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(77)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000950,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(78)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000960,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(79)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000970,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(80)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(81)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(82)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(83)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(84)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(85)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(86)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(87)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000a70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(88)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(89)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(90)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(91)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(92)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(93)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(94)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(95)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000b70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(96)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(97)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(98)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(99)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(100)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(101)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(102)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(103)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000c70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(104)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(105)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(106)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(107)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(108)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(109)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(110)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(111)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000d70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(112)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(113)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(114)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(115)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(116)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(117)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(118)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(119)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000e70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(120)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(121)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(122)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(123)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(124)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(125)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(126)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(127)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00000f70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(128)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(129)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001010,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(130)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001020,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(131)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001030,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(132)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001040,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(133)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001050,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(134)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001060,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(135)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001070,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(136)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001100,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(137)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001110,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(138)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001120,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(139)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001130,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(140)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001140,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(141)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001150,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(142)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001160,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(143)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001170,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(144)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001200,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(145)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001210,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(146)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001220,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(147)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001230,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(148)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001240,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(149)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001250,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(150)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001260,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(151)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001270,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(152)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001300,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(153)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001310,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(154)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001320,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(155)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001330,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(156)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001340,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(157)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001350,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(158)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001360,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(159)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001370,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(160)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001400,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(161)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001410,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(162)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001420,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(163)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001430,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(164)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001440,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(165)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001450,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(166)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001460,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(167)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001470,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(168)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001500,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(169)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001510,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(170)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001520,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(171)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001530,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(172)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001540,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(173)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001550,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(174)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001560,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(175)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001570,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(176)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001600,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(177)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001610,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(178)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001620,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(179)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001630,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(180)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001640,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(181)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001650,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(182)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001660,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(183)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001670,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(184)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001700,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(185)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001710,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(186)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001720,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(187)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001730,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(188)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001740,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(189)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001750,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(190)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001760,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(191)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001770,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(192)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001800,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(193)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001810,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(194)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001820,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(195)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001830,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(196)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001840,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(197)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001850,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(198)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001860,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(199)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001870,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'User(200)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001900,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(1)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001910,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(2)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001920,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(3)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001930,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(4)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001940,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(5)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001950,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(6)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001960,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(7)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001970,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(8)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(9)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(10)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(11)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(12)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(13)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(14)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(15)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001a70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(16)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(17)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(18)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(19)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(20)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(21)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(22)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(23)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001b70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(24)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(25)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(26)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(27)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(28)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(29)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(30)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(31)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001c70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(32)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(33)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(34)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(35)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(36)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(37)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(38)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(39)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001d70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(40)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(41)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(42)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(43)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(44)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(45)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(46)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(47)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001e70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(48)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(49)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(50)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(51)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(52)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(53)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(54)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(55)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00001f70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(56)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(57)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002010,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(58)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002020,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(59)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002030,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(60)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002040,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(61)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002050,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(62)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002060,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(63)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002070,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(64)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002100,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(65)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002110,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(66)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002120,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(67)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002130,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(68)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002140,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(69)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002150,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(70)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002160,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(71)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002170,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(72)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002200,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(73)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002210,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(74)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002220,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(75)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002230,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(76)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002240,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(77)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002250,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(78)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002260,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(79)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002270,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(80)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002300,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(81)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002310,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(82)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002320,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(83)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002330,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(84)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002340,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(85)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002350,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(86)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002360,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(87)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002370,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(88)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002400,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(89)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002410,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(90)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002420,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(91)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002430,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(92)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002440,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(93)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002450,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(94)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002460,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(95)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002470,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(96)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002500,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(97)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002510,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(98)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002520,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(99)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002530,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(100)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002540,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(101)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002550,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(102)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002560,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(103)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002570,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(104)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002600,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(105)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002610,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(106)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002620,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(107)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002630,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(108)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002640,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(109)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002650,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(110)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002660,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(111)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002670,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(112)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002700,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(113)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002710,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(114)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002720,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(115)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002730,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(116)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002740,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(117)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002750,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(118)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002760,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(119)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002770,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(120)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002800,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(121)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002810,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(122)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002820,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(123)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002830,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(124)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002840,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(125)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002850,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(126)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002860,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(127)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002870,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(128)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002900,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(129)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002910,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(130)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002920,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(131)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002930,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(132)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002940,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(133)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002950,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(134)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002960,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(135)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002970,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(136)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(137)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(138)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(139)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(140)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(141)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(142)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(143)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002a70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(144)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(145)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(146)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(147)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(148)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(149)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(150)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(151)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002b70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(152)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(153)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(154)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(155)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(156)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(157)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(158)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(159)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002c70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(160)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(161)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(162)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(163)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(164)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(165)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(166)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(167)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002d70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(168)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(169)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(170)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(171)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(172)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(173)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(174)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(175)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002e70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(176)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f00,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(177)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f10,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(178)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f20,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(179)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f30,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(180)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f40,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(181)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f50,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(182)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f60,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(183)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00002f70,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(184)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003000,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(185)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003010,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(186)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003020,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(187)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003030,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(188)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003040,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(189)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003050,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(190)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003060,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(191)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003070,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(192)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003100,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(193)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003110,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(194)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003120,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(195)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003130,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(196)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003140,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(197)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003150,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(198)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003160,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(199)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
	{addr: 0x00003170,	size: 16,	ofs: 0,	min: 32,	max: 126,	init: 'INIT PATCH      ',	factor: 1,	name: 'Preset(200)',	desc: 'Patch Name'}, // PatchCommon_Name:0: 00.00.00.00
];
// root
this.root = [ // BC0
	{addr: 0x00000000,	size: 0,	child: SystemExCommon,	name: 'SystemEx_common'  }, // SystemEx:common: 00.00.00.00
	{addr: 0x00010000,	size: 0,	child: SystemCommon,	name: 'System_common'  }, // System:common: 00.01.00.00
	{addr: 0x00011000,	size: 0,	child: SystemControl,	name: 'System_control'  }, // System:control: 00.01.10.00
	{addr: 0x00012000,	size: 0,	child: SystemLed,	name: 'System_led'  }, // System:led: 00.01.20.00
	{addr: 0x00013000,	size: 0,	child: SystemMidi,	name: 'System_midi'  }, // System:midi: 00.01.30.00
	{addr: 0x00014000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(1)'  }, // System:gkSetting(1): 00.01.40.00
	{addr: 0x00015000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(2)'  }, // System:gkSetting(2): 00.01.50.00
	{addr: 0x00016000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(3)'  }, // System:gkSetting(3): 00.01.60.00
	{addr: 0x00017000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(4)'  }, // System:gkSetting(4): 00.01.70.00
	{addr: 0x00020000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(5)'  }, // System:gkSetting(5): 00.02.00.00
	{addr: 0x00021000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(6)'  }, // System:gkSetting(6): 00.02.10.00
	{addr: 0x00022000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(7)'  }, // System:gkSetting(7): 00.02.20.00
	{addr: 0x00023000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(8)'  }, // System:gkSetting(8): 00.02.30.00
	{addr: 0x00024000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(9)'  }, // System:gkSetting(9): 00.02.40.00
	{addr: 0x00025000,	size: 0,	child: SystemGkSetting,	name: 'System_gkSetting(10)'  }, // System:gkSetting(10): 00.02.50.00
	{addr: 0x00026000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(1)'  }, // System:normalSetting(1): 00.02.60.00
	{addr: 0x00027000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(2)'  }, // System:normalSetting(2): 00.02.70.00
	{addr: 0x00030000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(3)'  }, // System:normalSetting(3): 00.03.00.00
	{addr: 0x00031000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(4)'  }, // System:normalSetting(4): 00.03.10.00
	{addr: 0x00032000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(5)'  }, // System:normalSetting(5): 00.03.20.00
	{addr: 0x00033000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(6)'  }, // System:normalSetting(6): 00.03.30.00
	{addr: 0x00034000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(7)'  }, // System:normalSetting(7): 00.03.40.00
	{addr: 0x00035000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(8)'  }, // System:normalSetting(8): 00.03.50.00
	{addr: 0x00036000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(9)'  }, // System:normalSetting(9): 00.03.60.00
	{addr: 0x00037000,	size: 0,	child: SystemNormalSetting,	name: 'System_normalSetting(10)'  }, // System:normalSetting(10): 00.03.70.00
	{addr: 0x00040000,	size: 0,	child: SystemInOut,	name: 'System_inout'  }, // System:inout: 00.04.00.00
	{addr: 0x00041000,	size: 0,	child: SystemEfct,	name: 'System_efct'  }, // System:efct: 00.04.10.00
	{addr: 0x00042000,	size: 0,	child: SystemPitch,	name: 'System_pitch'  }, // System:pitch: 00.04.20.00
	{addr: 0x00042100,	size: 0,	child: SystemGtr2Midi,	name: 'System_gtr2midi'  }, // System:gtr2midi: 00.04.21.00
	{addr: 0x00080000,	size: 0,	child: SystemCommonBass,	name: 'SystemBass_common'  }, // SystemBass:common: 00.08.00.00
	{addr: 0x00081000,	size: 0,	child: SystemControl,	name: 'SystemBass_control'  }, // SystemBass:control: 00.08.10.00
	{addr: 0x00082000,	size: 0,	child: SystemLed,	name: 'SystemBass_led'  }, // SystemBass:led: 00.08.20.00
	{addr: 0x00083000,	size: 0,	child: SystemMidi,	name: 'SystemBass_midi'  }, // SystemBass:midi: 00.08.30.00
	{addr: 0x00084000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(1)'  }, // SystemBass:gkSetting(1): 00.08.40.00
	{addr: 0x00085000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(2)'  }, // SystemBass:gkSetting(2): 00.08.50.00
	{addr: 0x00086000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(3)'  }, // SystemBass:gkSetting(3): 00.08.60.00
	{addr: 0x00087000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(4)'  }, // SystemBass:gkSetting(4): 00.08.70.00
	{addr: 0x00090000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(5)'  }, // SystemBass:gkSetting(5): 00.09.00.00
	{addr: 0x00091000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(6)'  }, // SystemBass:gkSetting(6): 00.09.10.00
	{addr: 0x00092000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(7)'  }, // SystemBass:gkSetting(7): 00.09.20.00
	{addr: 0x00093000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(8)'  }, // SystemBass:gkSetting(8): 00.09.30.00
	{addr: 0x00094000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(9)'  }, // SystemBass:gkSetting(9): 00.09.40.00
	{addr: 0x00095000,	size: 0,	child: SystemGkSettingBass,	name: 'SystemBass_gkSetting(10)'  }, // SystemBass:gkSetting(10): 00.09.50.00
	{addr: 0x00096000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(1)'  }, // SystemBass:normalSetting(1): 00.09.60.00
	{addr: 0x00097000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(2)'  }, // SystemBass:normalSetting(2): 00.09.70.00
	{addr: 0x000a0000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(3)'  }, // SystemBass:normalSetting(3): 00.0a.00.00
	{addr: 0x000a1000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(4)'  }, // SystemBass:normalSetting(4): 00.0a.10.00
	{addr: 0x000a2000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(5)'  }, // SystemBass:normalSetting(5): 00.0a.20.00
	{addr: 0x000a3000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(6)'  }, // SystemBass:normalSetting(6): 00.0a.30.00
	{addr: 0x000a4000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(7)'  }, // SystemBass:normalSetting(7): 00.0a.40.00
	{addr: 0x000a5000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(8)'  }, // SystemBass:normalSetting(8): 00.0a.50.00
	{addr: 0x000a6000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(9)'  }, // SystemBass:normalSetting(9): 00.0a.60.00
	{addr: 0x000a7000,	size: 0,	child: SystemNormalSetting,	name: 'SystemBass_normalSetting(10)'  }, // SystemBass:normalSetting(10): 00.0a.70.00
	{addr: 0x000b0000,	size: 0,	child: SystemInOut,	name: 'SystemBass_inout'  }, // SystemBass:inout: 00.0b.00.00
	{addr: 0x000b1000,	size: 0,	child: SystemEfct,	name: 'SystemBass_efct'  }, // SystemBass:efct: 00.0b.10.00
	{addr: 0x000b2000,	size: 0,	child: SystemPitch,	name: 'SystemBass_pitch'  }, // SystemBass:pitch: 00.0b.20.00
	{addr: 0x000b2100,	size: 0,	child: SystemGtr2Midi,	name: 'SystemBass_gtr2midi'  }, // SystemBass:gtr2midi: 00.0b.21.00
	{addr: 0x00100000,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(1)'  }, // Pcmap:bank1: 00.10.00.00
	{addr: 0x00100400,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(2)'  }, // Pcmap:bank2: 00.10.04.00
	{addr: 0x00100800,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(3)'  }, // Pcmap:bank3: 00.10.08.00
	{addr: 0x00100c00,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(4)'  }, // Pcmap:bank4: 00.10.0c.00
	{addr: 0x00180000,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(1)'  }, // PcmapBass:bank1: 00.18.00.00
	{addr: 0x00180400,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(2)'  }, // PcmapBass:bank2: 00.18.04.00
	{addr: 0x00180800,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(3)'  }, // PcmapBass:bank3: 00.18.08.00
	{addr: 0x00180c00,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(4)'  }, // PcmapBass:bank4: 00.18.0c.00
	{addr: 0x00200000,	size: 0,	child: SetupTemp,	name: 'Setup_temp'  }, // Setup:temp: 00.20.00.00
	{addr: 0x00200200,	size: 0,	child: SetupEfct,	name: 'Setup_efct'  }, // Setup:efct: 00.20.02.00
	{addr: 0x10000000,	size: 0,	child: Patch,	name: 'Temp_patch'  }, // Temp:patch: 10.00.00.00
	{addr: 0x10020000,	size: 0,	child: PatchBass,	name: 'Temp_patchBass'  }, // Temp:patchBass: 10.02.00.00
	{addr: 0x20000000,	size: 0,	child: Patch,	name: 'User_patch(1)'  }, // User:patch: 20.00.00.00
	{addr: 0x20020000,	size: 0,	child: Patch,	name: 'User_patch(2)'  }, // User:patch: 20.02.00.00
	{addr: 0x20040000,	size: 0,	child: Patch,	name: 'User_patch(3)'  }, // User:patch: 20.04.00.00
	{addr: 0x20060000,	size: 0,	child: Patch,	name: 'User_patch(4)'  }, // User:patch: 20.06.00.00
	{addr: 0x20080000,	size: 0,	child: Patch,	name: 'User_patch(5)'  }, // User:patch: 20.08.00.00
	{addr: 0x200a0000,	size: 0,	child: Patch,	name: 'User_patch(6)'  }, // User:patch: 20.0a.00.00
	{addr: 0x200c0000,	size: 0,	child: Patch,	name: 'User_patch(7)'  }, // User:patch: 20.0c.00.00
	{addr: 0x200e0000,	size: 0,	child: Patch,	name: 'User_patch(8)'  }, // User:patch: 20.0e.00.00
	{addr: 0x20100000,	size: 0,	child: Patch,	name: 'User_patch(9)'  }, // User:patch: 20.10.00.00
	{addr: 0x20120000,	size: 0,	child: Patch,	name: 'User_patch(10)'  }, // User:patch: 20.12.00.00
	{addr: 0x20140000,	size: 0,	child: Patch,	name: 'User_patch(11)'  }, // User:patch: 20.14.00.00
	{addr: 0x20160000,	size: 0,	child: Patch,	name: 'User_patch(12)'  }, // User:patch: 20.16.00.00
	{addr: 0x20180000,	size: 0,	child: Patch,	name: 'User_patch(13)'  }, // User:patch: 20.18.00.00
	{addr: 0x201a0000,	size: 0,	child: Patch,	name: 'User_patch(14)'  }, // User:patch: 20.1a.00.00
	{addr: 0x201c0000,	size: 0,	child: Patch,	name: 'User_patch(15)'  }, // User:patch: 20.1c.00.00
	{addr: 0x201e0000,	size: 0,	child: Patch,	name: 'User_patch(16)'  }, // User:patch: 20.1e.00.00
	{addr: 0x20200000,	size: 0,	child: Patch,	name: 'User_patch(17)'  }, // User:patch: 20.20.00.00
	{addr: 0x20220000,	size: 0,	child: Patch,	name: 'User_patch(18)'  }, // User:patch: 20.22.00.00
	{addr: 0x20240000,	size: 0,	child: Patch,	name: 'User_patch(19)'  }, // User:patch: 20.24.00.00
	{addr: 0x20260000,	size: 0,	child: Patch,	name: 'User_patch(20)'  }, // User:patch: 20.26.00.00
	{addr: 0x20280000,	size: 0,	child: Patch,	name: 'User_patch(21)'  }, // User:patch: 20.28.00.00
	{addr: 0x202a0000,	size: 0,	child: Patch,	name: 'User_patch(22)'  }, // User:patch: 20.2a.00.00
	{addr: 0x202c0000,	size: 0,	child: Patch,	name: 'User_patch(23)'  }, // User:patch: 20.2c.00.00
	{addr: 0x202e0000,	size: 0,	child: Patch,	name: 'User_patch(24)'  }, // User:patch: 20.2e.00.00
	{addr: 0x20300000,	size: 0,	child: Patch,	name: 'User_patch(25)'  }, // User:patch: 20.30.00.00
	{addr: 0x20320000,	size: 0,	child: Patch,	name: 'User_patch(26)'  }, // User:patch: 20.32.00.00
	{addr: 0x20340000,	size: 0,	child: Patch,	name: 'User_patch(27)'  }, // User:patch: 20.34.00.00
	{addr: 0x20360000,	size: 0,	child: Patch,	name: 'User_patch(28)'  }, // User:patch: 20.36.00.00
	{addr: 0x20380000,	size: 0,	child: Patch,	name: 'User_patch(29)'  }, // User:patch: 20.38.00.00
	{addr: 0x203a0000,	size: 0,	child: Patch,	name: 'User_patch(30)'  }, // User:patch: 20.3a.00.00
	{addr: 0x203c0000,	size: 0,	child: Patch,	name: 'User_patch(31)'  }, // User:patch: 20.3c.00.00
	{addr: 0x203e0000,	size: 0,	child: Patch,	name: 'User_patch(32)'  }, // User:patch: 20.3e.00.00
	{addr: 0x20400000,	size: 0,	child: Patch,	name: 'User_patch(33)'  }, // User:patch: 20.40.00.00
	{addr: 0x20420000,	size: 0,	child: Patch,	name: 'User_patch(34)'  }, // User:patch: 20.42.00.00
	{addr: 0x20440000,	size: 0,	child: Patch,	name: 'User_patch(35)'  }, // User:patch: 20.44.00.00
	{addr: 0x20460000,	size: 0,	child: Patch,	name: 'User_patch(36)'  }, // User:patch: 20.46.00.00
	{addr: 0x20480000,	size: 0,	child: Patch,	name: 'User_patch(37)'  }, // User:patch: 20.48.00.00
	{addr: 0x204a0000,	size: 0,	child: Patch,	name: 'User_patch(38)'  }, // User:patch: 20.4a.00.00
	{addr: 0x204c0000,	size: 0,	child: Patch,	name: 'User_patch(39)'  }, // User:patch: 20.4c.00.00
	{addr: 0x204e0000,	size: 0,	child: Patch,	name: 'User_patch(40)'  }, // User:patch: 20.4e.00.00
	{addr: 0x20500000,	size: 0,	child: Patch,	name: 'User_patch(41)'  }, // User:patch: 20.50.00.00
	{addr: 0x20520000,	size: 0,	child: Patch,	name: 'User_patch(42)'  }, // User:patch: 20.52.00.00
	{addr: 0x20540000,	size: 0,	child: Patch,	name: 'User_patch(43)'  }, // User:patch: 20.54.00.00
	{addr: 0x20560000,	size: 0,	child: Patch,	name: 'User_patch(44)'  }, // User:patch: 20.56.00.00
	{addr: 0x20580000,	size: 0,	child: Patch,	name: 'User_patch(45)'  }, // User:patch: 20.58.00.00
	{addr: 0x205a0000,	size: 0,	child: Patch,	name: 'User_patch(46)'  }, // User:patch: 20.5a.00.00
	{addr: 0x205c0000,	size: 0,	child: Patch,	name: 'User_patch(47)'  }, // User:patch: 20.5c.00.00
	{addr: 0x205e0000,	size: 0,	child: Patch,	name: 'User_patch(48)'  }, // User:patch: 20.5e.00.00
	{addr: 0x20600000,	size: 0,	child: Patch,	name: 'User_patch(49)'  }, // User:patch: 20.60.00.00
	{addr: 0x20620000,	size: 0,	child: Patch,	name: 'User_patch(50)'  }, // User:patch: 20.62.00.00
	{addr: 0x20640000,	size: 0,	child: Patch,	name: 'User_patch(51)'  }, // User:patch: 20.64.00.00
	{addr: 0x20660000,	size: 0,	child: Patch,	name: 'User_patch(52)'  }, // User:patch: 20.66.00.00
	{addr: 0x20680000,	size: 0,	child: Patch,	name: 'User_patch(53)'  }, // User:patch: 20.68.00.00
	{addr: 0x206a0000,	size: 0,	child: Patch,	name: 'User_patch(54)'  }, // User:patch: 20.6a.00.00
	{addr: 0x206c0000,	size: 0,	child: Patch,	name: 'User_patch(55)'  }, // User:patch: 20.6c.00.00
	{addr: 0x206e0000,	size: 0,	child: Patch,	name: 'User_patch(56)'  }, // User:patch: 20.6e.00.00
	{addr: 0x20700000,	size: 0,	child: Patch,	name: 'User_patch(57)'  }, // User:patch: 20.70.00.00
	{addr: 0x20720000,	size: 0,	child: Patch,	name: 'User_patch(58)'  }, // User:patch: 20.72.00.00
	{addr: 0x20740000,	size: 0,	child: Patch,	name: 'User_patch(59)'  }, // User:patch: 20.74.00.00
	{addr: 0x20760000,	size: 0,	child: Patch,	name: 'User_patch(60)'  }, // User:patch: 20.76.00.00
	{addr: 0x20780000,	size: 0,	child: Patch,	name: 'User_patch(61)'  }, // User:patch: 20.78.00.00
	{addr: 0x207a0000,	size: 0,	child: Patch,	name: 'User_patch(62)'  }, // User:patch: 20.7a.00.00
	{addr: 0x207c0000,	size: 0,	child: Patch,	name: 'User_patch(63)'  }, // User:patch: 20.7c.00.00
	{addr: 0x207e0000,	size: 0,	child: Patch,	name: 'User_patch(64)'  }, // User:patch: 20.7e.00.00
	{addr: 0x21000000,	size: 0,	child: Patch,	name: 'User_patch(65)'  }, // User:patch: 21.00.00.00
	{addr: 0x21020000,	size: 0,	child: Patch,	name: 'User_patch(66)'  }, // User:patch: 21.02.00.00
	{addr: 0x21040000,	size: 0,	child: Patch,	name: 'User_patch(67)'  }, // User:patch: 21.04.00.00
	{addr: 0x21060000,	size: 0,	child: Patch,	name: 'User_patch(68)'  }, // User:patch: 21.06.00.00
	{addr: 0x21080000,	size: 0,	child: Patch,	name: 'User_patch(69)'  }, // User:patch: 21.08.00.00
	{addr: 0x210a0000,	size: 0,	child: Patch,	name: 'User_patch(70)'  }, // User:patch: 21.0a.00.00
	{addr: 0x210c0000,	size: 0,	child: Patch,	name: 'User_patch(71)'  }, // User:patch: 21.0c.00.00
	{addr: 0x210e0000,	size: 0,	child: Patch,	name: 'User_patch(72)'  }, // User:patch: 21.0e.00.00
	{addr: 0x21100000,	size: 0,	child: Patch,	name: 'User_patch(73)'  }, // User:patch: 21.10.00.00
	{addr: 0x21120000,	size: 0,	child: Patch,	name: 'User_patch(74)'  }, // User:patch: 21.12.00.00
	{addr: 0x21140000,	size: 0,	child: Patch,	name: 'User_patch(75)'  }, // User:patch: 21.14.00.00
	{addr: 0x21160000,	size: 0,	child: Patch,	name: 'User_patch(76)'  }, // User:patch: 21.16.00.00
	{addr: 0x21180000,	size: 0,	child: Patch,	name: 'User_patch(77)'  }, // User:patch: 21.18.00.00
	{addr: 0x211a0000,	size: 0,	child: Patch,	name: 'User_patch(78)'  }, // User:patch: 21.1a.00.00
	{addr: 0x211c0000,	size: 0,	child: Patch,	name: 'User_patch(79)'  }, // User:patch: 21.1c.00.00
	{addr: 0x211e0000,	size: 0,	child: Patch,	name: 'User_patch(80)'  }, // User:patch: 21.1e.00.00
	{addr: 0x21200000,	size: 0,	child: Patch,	name: 'User_patch(81)'  }, // User:patch: 21.20.00.00
	{addr: 0x21220000,	size: 0,	child: Patch,	name: 'User_patch(82)'  }, // User:patch: 21.22.00.00
	{addr: 0x21240000,	size: 0,	child: Patch,	name: 'User_patch(83)'  }, // User:patch: 21.24.00.00
	{addr: 0x21260000,	size: 0,	child: Patch,	name: 'User_patch(84)'  }, // User:patch: 21.26.00.00
	{addr: 0x21280000,	size: 0,	child: Patch,	name: 'User_patch(85)'  }, // User:patch: 21.28.00.00
	{addr: 0x212a0000,	size: 0,	child: Patch,	name: 'User_patch(86)'  }, // User:patch: 21.2a.00.00
	{addr: 0x212c0000,	size: 0,	child: Patch,	name: 'User_patch(87)'  }, // User:patch: 21.2c.00.00
	{addr: 0x212e0000,	size: 0,	child: Patch,	name: 'User_patch(88)'  }, // User:patch: 21.2e.00.00
	{addr: 0x21300000,	size: 0,	child: Patch,	name: 'User_patch(89)'  }, // User:patch: 21.30.00.00
	{addr: 0x21320000,	size: 0,	child: Patch,	name: 'User_patch(90)'  }, // User:patch: 21.32.00.00
	{addr: 0x21340000,	size: 0,	child: Patch,	name: 'User_patch(91)'  }, // User:patch: 21.34.00.00
	{addr: 0x21360000,	size: 0,	child: Patch,	name: 'User_patch(92)'  }, // User:patch: 21.36.00.00
	{addr: 0x21380000,	size: 0,	child: Patch,	name: 'User_patch(93)'  }, // User:patch: 21.38.00.00
	{addr: 0x213a0000,	size: 0,	child: Patch,	name: 'User_patch(94)'  }, // User:patch: 21.3a.00.00
	{addr: 0x213c0000,	size: 0,	child: Patch,	name: 'User_patch(95)'  }, // User:patch: 21.3c.00.00
	{addr: 0x213e0000,	size: 0,	child: Patch,	name: 'User_patch(96)'  }, // User:patch: 21.3e.00.00
	{addr: 0x21400000,	size: 0,	child: Patch,	name: 'User_patch(97)'  }, // User:patch: 21.40.00.00
	{addr: 0x21420000,	size: 0,	child: Patch,	name: 'User_patch(98)'  }, // User:patch: 21.42.00.00
	{addr: 0x21440000,	size: 0,	child: Patch,	name: 'User_patch(99)'  }, // User:patch: 21.44.00.00
	{addr: 0x21460000,	size: 0,	child: Patch,	name: 'User_patch(100)'  }, // User:patch: 21.46.00.00
	{addr: 0x21480000,	size: 0,	child: Patch,	name: 'User_patch(101)'  }, // User:patch: 21.48.00.00
	{addr: 0x214a0000,	size: 0,	child: Patch,	name: 'User_patch(102)'  }, // User:patch: 21.4a.00.00
	{addr: 0x214c0000,	size: 0,	child: Patch,	name: 'User_patch(103)'  }, // User:patch: 21.4c.00.00
	{addr: 0x214e0000,	size: 0,	child: Patch,	name: 'User_patch(104)'  }, // User:patch: 21.4e.00.00
	{addr: 0x21500000,	size: 0,	child: Patch,	name: 'User_patch(105)'  }, // User:patch: 21.50.00.00
	{addr: 0x21520000,	size: 0,	child: Patch,	name: 'User_patch(106)'  }, // User:patch: 21.52.00.00
	{addr: 0x21540000,	size: 0,	child: Patch,	name: 'User_patch(107)'  }, // User:patch: 21.54.00.00
	{addr: 0x21560000,	size: 0,	child: Patch,	name: 'User_patch(108)'  }, // User:patch: 21.56.00.00
	{addr: 0x21580000,	size: 0,	child: Patch,	name: 'User_patch(109)'  }, // User:patch: 21.58.00.00
	{addr: 0x215a0000,	size: 0,	child: Patch,	name: 'User_patch(110)'  }, // User:patch: 21.5a.00.00
	{addr: 0x215c0000,	size: 0,	child: Patch,	name: 'User_patch(111)'  }, // User:patch: 21.5c.00.00
	{addr: 0x215e0000,	size: 0,	child: Patch,	name: 'User_patch(112)'  }, // User:patch: 21.5e.00.00
	{addr: 0x21600000,	size: 0,	child: Patch,	name: 'User_patch(113)'  }, // User:patch: 21.60.00.00
	{addr: 0x21620000,	size: 0,	child: Patch,	name: 'User_patch(114)'  }, // User:patch: 21.62.00.00
	{addr: 0x21640000,	size: 0,	child: Patch,	name: 'User_patch(115)'  }, // User:patch: 21.64.00.00
	{addr: 0x21660000,	size: 0,	child: Patch,	name: 'User_patch(116)'  }, // User:patch: 21.66.00.00
	{addr: 0x21680000,	size: 0,	child: Patch,	name: 'User_patch(117)'  }, // User:patch: 21.68.00.00
	{addr: 0x216a0000,	size: 0,	child: Patch,	name: 'User_patch(118)'  }, // User:patch: 21.6a.00.00
	{addr: 0x216c0000,	size: 0,	child: Patch,	name: 'User_patch(119)'  }, // User:patch: 21.6c.00.00
	{addr: 0x216e0000,	size: 0,	child: Patch,	name: 'User_patch(120)'  }, // User:patch: 21.6e.00.00
	{addr: 0x21700000,	size: 0,	child: Patch,	name: 'User_patch(121)'  }, // User:patch: 21.70.00.00
	{addr: 0x21720000,	size: 0,	child: Patch,	name: 'User_patch(122)'  }, // User:patch: 21.72.00.00
	{addr: 0x21740000,	size: 0,	child: Patch,	name: 'User_patch(123)'  }, // User:patch: 21.74.00.00
	{addr: 0x21760000,	size: 0,	child: Patch,	name: 'User_patch(124)'  }, // User:patch: 21.76.00.00
	{addr: 0x21780000,	size: 0,	child: Patch,	name: 'User_patch(125)'  }, // User:patch: 21.78.00.00
	{addr: 0x217a0000,	size: 0,	child: Patch,	name: 'User_patch(126)'  }, // User:patch: 21.7a.00.00
	{addr: 0x217c0000,	size: 0,	child: Patch,	name: 'User_patch(127)'  }, // User:patch: 21.7c.00.00
	{addr: 0x217e0000,	size: 0,	child: Patch,	name: 'User_patch(128)'  }, // User:patch: 21.7e.00.00
	{addr: 0x22000000,	size: 0,	child: Patch,	name: 'User_patch(129)'  }, // User:patch: 22.00.00.00
	{addr: 0x22020000,	size: 0,	child: Patch,	name: 'User_patch(130)'  }, // User:patch: 22.02.00.00
	{addr: 0x22040000,	size: 0,	child: Patch,	name: 'User_patch(131)'  }, // User:patch: 22.04.00.00
	{addr: 0x22060000,	size: 0,	child: Patch,	name: 'User_patch(132)'  }, // User:patch: 22.06.00.00
	{addr: 0x22080000,	size: 0,	child: Patch,	name: 'User_patch(133)'  }, // User:patch: 22.08.00.00
	{addr: 0x220a0000,	size: 0,	child: Patch,	name: 'User_patch(134)'  }, // User:patch: 22.0a.00.00
	{addr: 0x220c0000,	size: 0,	child: Patch,	name: 'User_patch(135)'  }, // User:patch: 22.0c.00.00
	{addr: 0x220e0000,	size: 0,	child: Patch,	name: 'User_patch(136)'  }, // User:patch: 22.0e.00.00
	{addr: 0x22100000,	size: 0,	child: Patch,	name: 'User_patch(137)'  }, // User:patch: 22.10.00.00
	{addr: 0x22120000,	size: 0,	child: Patch,	name: 'User_patch(138)'  }, // User:patch: 22.12.00.00
	{addr: 0x22140000,	size: 0,	child: Patch,	name: 'User_patch(139)'  }, // User:patch: 22.14.00.00
	{addr: 0x22160000,	size: 0,	child: Patch,	name: 'User_patch(140)'  }, // User:patch: 22.16.00.00
	{addr: 0x22180000,	size: 0,	child: Patch,	name: 'User_patch(141)'  }, // User:patch: 22.18.00.00
	{addr: 0x221a0000,	size: 0,	child: Patch,	name: 'User_patch(142)'  }, // User:patch: 22.1a.00.00
	{addr: 0x221c0000,	size: 0,	child: Patch,	name: 'User_patch(143)'  }, // User:patch: 22.1c.00.00
	{addr: 0x221e0000,	size: 0,	child: Patch,	name: 'User_patch(144)'  }, // User:patch: 22.1e.00.00
	{addr: 0x22200000,	size: 0,	child: Patch,	name: 'User_patch(145)'  }, // User:patch: 22.20.00.00
	{addr: 0x22220000,	size: 0,	child: Patch,	name: 'User_patch(146)'  }, // User:patch: 22.22.00.00
	{addr: 0x22240000,	size: 0,	child: Patch,	name: 'User_patch(147)'  }, // User:patch: 22.24.00.00
	{addr: 0x22260000,	size: 0,	child: Patch,	name: 'User_patch(148)'  }, // User:patch: 22.26.00.00
	{addr: 0x22280000,	size: 0,	child: Patch,	name: 'User_patch(149)'  }, // User:patch: 22.28.00.00
	{addr: 0x222a0000,	size: 0,	child: Patch,	name: 'User_patch(150)'  }, // User:patch: 22.2a.00.00
	{addr: 0x222c0000,	size: 0,	child: Patch,	name: 'User_patch(151)'  }, // User:patch: 22.2c.00.00
	{addr: 0x222e0000,	size: 0,	child: Patch,	name: 'User_patch(152)'  }, // User:patch: 22.2e.00.00
	{addr: 0x22300000,	size: 0,	child: Patch,	name: 'User_patch(153)'  }, // User:patch: 22.30.00.00
	{addr: 0x22320000,	size: 0,	child: Patch,	name: 'User_patch(154)'  }, // User:patch: 22.32.00.00
	{addr: 0x22340000,	size: 0,	child: Patch,	name: 'User_patch(155)'  }, // User:patch: 22.34.00.00
	{addr: 0x22360000,	size: 0,	child: Patch,	name: 'User_patch(156)'  }, // User:patch: 22.36.00.00
	{addr: 0x22380000,	size: 0,	child: Patch,	name: 'User_patch(157)'  }, // User:patch: 22.38.00.00
	{addr: 0x223a0000,	size: 0,	child: Patch,	name: 'User_patch(158)'  }, // User:patch: 22.3a.00.00
	{addr: 0x223c0000,	size: 0,	child: Patch,	name: 'User_patch(159)'  }, // User:patch: 22.3c.00.00
	{addr: 0x223e0000,	size: 0,	child: Patch,	name: 'User_patch(160)'  }, // User:patch: 22.3e.00.00
	{addr: 0x22400000,	size: 0,	child: Patch,	name: 'User_patch(161)'  }, // User:patch: 22.40.00.00
	{addr: 0x22420000,	size: 0,	child: Patch,	name: 'User_patch(162)'  }, // User:patch: 22.42.00.00
	{addr: 0x22440000,	size: 0,	child: Patch,	name: 'User_patch(163)'  }, // User:patch: 22.44.00.00
	{addr: 0x22460000,	size: 0,	child: Patch,	name: 'User_patch(164)'  }, // User:patch: 22.46.00.00
	{addr: 0x22480000,	size: 0,	child: Patch,	name: 'User_patch(165)'  }, // User:patch: 22.48.00.00
	{addr: 0x224a0000,	size: 0,	child: Patch,	name: 'User_patch(166)'  }, // User:patch: 22.4a.00.00
	{addr: 0x224c0000,	size: 0,	child: Patch,	name: 'User_patch(167)'  }, // User:patch: 22.4c.00.00
	{addr: 0x224e0000,	size: 0,	child: Patch,	name: 'User_patch(168)'  }, // User:patch: 22.4e.00.00
	{addr: 0x22500000,	size: 0,	child: Patch,	name: 'User_patch(169)'  }, // User:patch: 22.50.00.00
	{addr: 0x22520000,	size: 0,	child: Patch,	name: 'User_patch(170)'  }, // User:patch: 22.52.00.00
	{addr: 0x22540000,	size: 0,	child: Patch,	name: 'User_patch(171)'  }, // User:patch: 22.54.00.00
	{addr: 0x22560000,	size: 0,	child: Patch,	name: 'User_patch(172)'  }, // User:patch: 22.56.00.00
	{addr: 0x22580000,	size: 0,	child: Patch,	name: 'User_patch(173)'  }, // User:patch: 22.58.00.00
	{addr: 0x225a0000,	size: 0,	child: Patch,	name: 'User_patch(174)'  }, // User:patch: 22.5a.00.00
	{addr: 0x225c0000,	size: 0,	child: Patch,	name: 'User_patch(175)'  }, // User:patch: 22.5c.00.00
	{addr: 0x225e0000,	size: 0,	child: Patch,	name: 'User_patch(176)'  }, // User:patch: 22.5e.00.00
	{addr: 0x22600000,	size: 0,	child: Patch,	name: 'User_patch(177)'  }, // User:patch: 22.60.00.00
	{addr: 0x22620000,	size: 0,	child: Patch,	name: 'User_patch(178)'  }, // User:patch: 22.62.00.00
	{addr: 0x22640000,	size: 0,	child: Patch,	name: 'User_patch(179)'  }, // User:patch: 22.64.00.00
	{addr: 0x22660000,	size: 0,	child: Patch,	name: 'User_patch(180)'  }, // User:patch: 22.66.00.00
	{addr: 0x22680000,	size: 0,	child: Patch,	name: 'User_patch(181)'  }, // User:patch: 22.68.00.00
	{addr: 0x226a0000,	size: 0,	child: Patch,	name: 'User_patch(182)'  }, // User:patch: 22.6a.00.00
	{addr: 0x226c0000,	size: 0,	child: Patch,	name: 'User_patch(183)'  }, // User:patch: 22.6c.00.00
	{addr: 0x226e0000,	size: 0,	child: Patch,	name: 'User_patch(184)'  }, // User:patch: 22.6e.00.00
	{addr: 0x22700000,	size: 0,	child: Patch,	name: 'User_patch(185)'  }, // User:patch: 22.70.00.00
	{addr: 0x22720000,	size: 0,	child: Patch,	name: 'User_patch(186)'  }, // User:patch: 22.72.00.00
	{addr: 0x22740000,	size: 0,	child: Patch,	name: 'User_patch(187)'  }, // User:patch: 22.74.00.00
	{addr: 0x22760000,	size: 0,	child: Patch,	name: 'User_patch(188)'  }, // User:patch: 22.76.00.00
	{addr: 0x22780000,	size: 0,	child: Patch,	name: 'User_patch(189)'  }, // User:patch: 22.78.00.00
	{addr: 0x227a0000,	size: 0,	child: Patch,	name: 'User_patch(190)'  }, // User:patch: 22.7a.00.00
	{addr: 0x227c0000,	size: 0,	child: Patch,	name: 'User_patch(191)'  }, // User:patch: 22.7c.00.00
	{addr: 0x227e0000,	size: 0,	child: Patch,	name: 'User_patch(192)'  }, // User:patch: 22.7e.00.00
	{addr: 0x23000000,	size: 0,	child: Patch,	name: 'User_patch(193)'  }, // User:patch: 23.00.00.00
	{addr: 0x23020000,	size: 0,	child: Patch,	name: 'User_patch(194)'  }, // User:patch: 23.02.00.00
	{addr: 0x23040000,	size: 0,	child: Patch,	name: 'User_patch(195)'  }, // User:patch: 23.04.00.00
	{addr: 0x23060000,	size: 0,	child: Patch,	name: 'User_patch(196)'  }, // User:patch: 23.06.00.00
	{addr: 0x23080000,	size: 0,	child: Patch,	name: 'User_patch(197)'  }, // User:patch: 23.08.00.00
	{addr: 0x230a0000,	size: 0,	child: Patch,	name: 'User_patch(198)'  }, // User:patch: 23.0a.00.00
	{addr: 0x230c0000,	size: 0,	child: Patch,	name: 'User_patch(199)'  }, // User:patch: 23.0c.00.00
	{addr: 0x230e0000,	size: 0,	child: Patch,	name: 'User_patch(200)'  }, // User:patch: 23.0e.00.00
	{addr: 0x28000000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(1)'  }, // UserBass:patch: 28.00.00.00
	{addr: 0x28020000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(2)'  }, // UserBass:patch: 28.02.00.00
	{addr: 0x28040000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(3)'  }, // UserBass:patch: 28.04.00.00
	{addr: 0x28060000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(4)'  }, // UserBass:patch: 28.06.00.00
	{addr: 0x28080000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(5)'  }, // UserBass:patch: 28.08.00.00
	{addr: 0x280a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(6)'  }, // UserBass:patch: 28.0a.00.00
	{addr: 0x280c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(7)'  }, // UserBass:patch: 28.0c.00.00
	{addr: 0x280e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(8)'  }, // UserBass:patch: 28.0e.00.00
	{addr: 0x28100000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(9)'  }, // UserBass:patch: 28.10.00.00
	{addr: 0x28120000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(10)'  }, // UserBass:patch: 28.12.00.00
	{addr: 0x28140000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(11)'  }, // UserBass:patch: 28.14.00.00
	{addr: 0x28160000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(12)'  }, // UserBass:patch: 28.16.00.00
	{addr: 0x28180000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(13)'  }, // UserBass:patch: 28.18.00.00
	{addr: 0x281a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(14)'  }, // UserBass:patch: 28.1a.00.00
	{addr: 0x281c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(15)'  }, // UserBass:patch: 28.1c.00.00
	{addr: 0x281e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(16)'  }, // UserBass:patch: 28.1e.00.00
	{addr: 0x28200000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(17)'  }, // UserBass:patch: 28.20.00.00
	{addr: 0x28220000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(18)'  }, // UserBass:patch: 28.22.00.00
	{addr: 0x28240000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(19)'  }, // UserBass:patch: 28.24.00.00
	{addr: 0x28260000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(20)'  }, // UserBass:patch: 28.26.00.00
	{addr: 0x28280000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(21)'  }, // UserBass:patch: 28.28.00.00
	{addr: 0x282a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(22)'  }, // UserBass:patch: 28.2a.00.00
	{addr: 0x282c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(23)'  }, // UserBass:patch: 28.2c.00.00
	{addr: 0x282e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(24)'  }, // UserBass:patch: 28.2e.00.00
	{addr: 0x28300000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(25)'  }, // UserBass:patch: 28.30.00.00
	{addr: 0x28320000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(26)'  }, // UserBass:patch: 28.32.00.00
	{addr: 0x28340000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(27)'  }, // UserBass:patch: 28.34.00.00
	{addr: 0x28360000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(28)'  }, // UserBass:patch: 28.36.00.00
	{addr: 0x28380000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(29)'  }, // UserBass:patch: 28.38.00.00
	{addr: 0x283a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(30)'  }, // UserBass:patch: 28.3a.00.00
	{addr: 0x283c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(31)'  }, // UserBass:patch: 28.3c.00.00
	{addr: 0x283e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(32)'  }, // UserBass:patch: 28.3e.00.00
	{addr: 0x28400000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(33)'  }, // UserBass:patch: 28.40.00.00
	{addr: 0x28420000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(34)'  }, // UserBass:patch: 28.42.00.00
	{addr: 0x28440000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(35)'  }, // UserBass:patch: 28.44.00.00
	{addr: 0x28460000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(36)'  }, // UserBass:patch: 28.46.00.00
	{addr: 0x28480000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(37)'  }, // UserBass:patch: 28.48.00.00
	{addr: 0x284a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(38)'  }, // UserBass:patch: 28.4a.00.00
	{addr: 0x284c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(39)'  }, // UserBass:patch: 28.4c.00.00
	{addr: 0x284e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(40)'  }, // UserBass:patch: 28.4e.00.00
	{addr: 0x28500000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(41)'  }, // UserBass:patch: 28.50.00.00
	{addr: 0x28520000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(42)'  }, // UserBass:patch: 28.52.00.00
	{addr: 0x28540000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(43)'  }, // UserBass:patch: 28.54.00.00
	{addr: 0x28560000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(44)'  }, // UserBass:patch: 28.56.00.00
	{addr: 0x28580000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(45)'  }, // UserBass:patch: 28.58.00.00
	{addr: 0x285a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(46)'  }, // UserBass:patch: 28.5a.00.00
	{addr: 0x285c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(47)'  }, // UserBass:patch: 28.5c.00.00
	{addr: 0x285e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(48)'  }, // UserBass:patch: 28.5e.00.00
	{addr: 0x28600000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(49)'  }, // UserBass:patch: 28.60.00.00
	{addr: 0x28620000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(50)'  }, // UserBass:patch: 28.62.00.00
	{addr: 0x28640000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(51)'  }, // UserBass:patch: 28.64.00.00
	{addr: 0x28660000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(52)'  }, // UserBass:patch: 28.66.00.00
	{addr: 0x28680000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(53)'  }, // UserBass:patch: 28.68.00.00
	{addr: 0x286a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(54)'  }, // UserBass:patch: 28.6a.00.00
	{addr: 0x286c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(55)'  }, // UserBass:patch: 28.6c.00.00
	{addr: 0x286e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(56)'  }, // UserBass:patch: 28.6e.00.00
	{addr: 0x28700000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(57)'  }, // UserBass:patch: 28.70.00.00
	{addr: 0x28720000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(58)'  }, // UserBass:patch: 28.72.00.00
	{addr: 0x28740000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(59)'  }, // UserBass:patch: 28.74.00.00
	{addr: 0x28760000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(60)'  }, // UserBass:patch: 28.76.00.00
	{addr: 0x28780000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(61)'  }, // UserBass:patch: 28.78.00.00
	{addr: 0x287a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(62)'  }, // UserBass:patch: 28.7a.00.00
	{addr: 0x287c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(63)'  }, // UserBass:patch: 28.7c.00.00
	{addr: 0x287e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(64)'  }, // UserBass:patch: 28.7e.00.00
	{addr: 0x29000000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(65)'  }, // UserBass:patch: 29.00.00.00
	{addr: 0x29020000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(66)'  }, // UserBass:patch: 29.02.00.00
	{addr: 0x29040000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(67)'  }, // UserBass:patch: 29.04.00.00
	{addr: 0x29060000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(68)'  }, // UserBass:patch: 29.06.00.00
	{addr: 0x29080000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(69)'  }, // UserBass:patch: 29.08.00.00
	{addr: 0x290a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(70)'  }, // UserBass:patch: 29.0a.00.00
	{addr: 0x290c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(71)'  }, // UserBass:patch: 29.0c.00.00
	{addr: 0x290e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(72)'  }, // UserBass:patch: 29.0e.00.00
	{addr: 0x29100000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(73)'  }, // UserBass:patch: 29.10.00.00
	{addr: 0x29120000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(74)'  }, // UserBass:patch: 29.12.00.00
	{addr: 0x29140000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(75)'  }, // UserBass:patch: 29.14.00.00
	{addr: 0x29160000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(76)'  }, // UserBass:patch: 29.16.00.00
	{addr: 0x29180000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(77)'  }, // UserBass:patch: 29.18.00.00
	{addr: 0x291a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(78)'  }, // UserBass:patch: 29.1a.00.00
	{addr: 0x291c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(79)'  }, // UserBass:patch: 29.1c.00.00
	{addr: 0x291e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(80)'  }, // UserBass:patch: 29.1e.00.00
	{addr: 0x29200000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(81)'  }, // UserBass:patch: 29.20.00.00
	{addr: 0x29220000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(82)'  }, // UserBass:patch: 29.22.00.00
	{addr: 0x29240000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(83)'  }, // UserBass:patch: 29.24.00.00
	{addr: 0x29260000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(84)'  }, // UserBass:patch: 29.26.00.00
	{addr: 0x29280000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(85)'  }, // UserBass:patch: 29.28.00.00
	{addr: 0x292a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(86)'  }, // UserBass:patch: 29.2a.00.00
	{addr: 0x292c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(87)'  }, // UserBass:patch: 29.2c.00.00
	{addr: 0x292e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(88)'  }, // UserBass:patch: 29.2e.00.00
	{addr: 0x29300000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(89)'  }, // UserBass:patch: 29.30.00.00
	{addr: 0x29320000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(90)'  }, // UserBass:patch: 29.32.00.00
	{addr: 0x29340000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(91)'  }, // UserBass:patch: 29.34.00.00
	{addr: 0x29360000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(92)'  }, // UserBass:patch: 29.36.00.00
	{addr: 0x29380000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(93)'  }, // UserBass:patch: 29.38.00.00
	{addr: 0x293a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(94)'  }, // UserBass:patch: 29.3a.00.00
	{addr: 0x293c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(95)'  }, // UserBass:patch: 29.3c.00.00
	{addr: 0x293e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(96)'  }, // UserBass:patch: 29.3e.00.00
	{addr: 0x29400000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(97)'  }, // UserBass:patch: 29.40.00.00
	{addr: 0x29420000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(98)'  }, // UserBass:patch: 29.42.00.00
	{addr: 0x29440000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(99)'  }, // UserBass:patch: 29.44.00.00
	{addr: 0x29460000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(100)'  }, // UserBass:patch: 29.46.00.00
	{addr: 0x29480000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(101)'  }, // UserBass:patch: 29.48.00.00
	{addr: 0x294a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(102)'  }, // UserBass:patch: 29.4a.00.00
	{addr: 0x294c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(103)'  }, // UserBass:patch: 29.4c.00.00
	{addr: 0x294e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(104)'  }, // UserBass:patch: 29.4e.00.00
	{addr: 0x29500000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(105)'  }, // UserBass:patch: 29.50.00.00
	{addr: 0x29520000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(106)'  }, // UserBass:patch: 29.52.00.00
	{addr: 0x29540000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(107)'  }, // UserBass:patch: 29.54.00.00
	{addr: 0x29560000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(108)'  }, // UserBass:patch: 29.56.00.00
	{addr: 0x29580000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(109)'  }, // UserBass:patch: 29.58.00.00
	{addr: 0x295a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(110)'  }, // UserBass:patch: 29.5a.00.00
	{addr: 0x295c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(111)'  }, // UserBass:patch: 29.5c.00.00
	{addr: 0x295e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(112)'  }, // UserBass:patch: 29.5e.00.00
	{addr: 0x29600000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(113)'  }, // UserBass:patch: 29.60.00.00
	{addr: 0x29620000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(114)'  }, // UserBass:patch: 29.62.00.00
	{addr: 0x29640000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(115)'  }, // UserBass:patch: 29.64.00.00
	{addr: 0x29660000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(116)'  }, // UserBass:patch: 29.66.00.00
	{addr: 0x29680000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(117)'  }, // UserBass:patch: 29.68.00.00
	{addr: 0x296a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(118)'  }, // UserBass:patch: 29.6a.00.00
	{addr: 0x296c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(119)'  }, // UserBass:patch: 29.6c.00.00
	{addr: 0x296e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(120)'  }, // UserBass:patch: 29.6e.00.00
	{addr: 0x29700000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(121)'  }, // UserBass:patch: 29.70.00.00
	{addr: 0x29720000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(122)'  }, // UserBass:patch: 29.72.00.00
	{addr: 0x29740000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(123)'  }, // UserBass:patch: 29.74.00.00
	{addr: 0x29760000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(124)'  }, // UserBass:patch: 29.76.00.00
	{addr: 0x29780000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(125)'  }, // UserBass:patch: 29.78.00.00
	{addr: 0x297a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(126)'  }, // UserBass:patch: 29.7a.00.00
	{addr: 0x297c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(127)'  }, // UserBass:patch: 29.7c.00.00
	{addr: 0x297e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(128)'  }, // UserBass:patch: 29.7e.00.00
	{addr: 0x2a000000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(129)'  }, // UserBass:patch: 2a.00.00.00
	{addr: 0x2a020000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(130)'  }, // UserBass:patch: 2a.02.00.00
	{addr: 0x2a040000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(131)'  }, // UserBass:patch: 2a.04.00.00
	{addr: 0x2a060000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(132)'  }, // UserBass:patch: 2a.06.00.00
	{addr: 0x2a080000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(133)'  }, // UserBass:patch: 2a.08.00.00
	{addr: 0x2a0a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(134)'  }, // UserBass:patch: 2a.0a.00.00
	{addr: 0x2a0c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(135)'  }, // UserBass:patch: 2a.0c.00.00
	{addr: 0x2a0e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(136)'  }, // UserBass:patch: 2a.0e.00.00
	{addr: 0x2a100000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(137)'  }, // UserBass:patch: 2a.10.00.00
	{addr: 0x2a120000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(138)'  }, // UserBass:patch: 2a.12.00.00
	{addr: 0x2a140000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(139)'  }, // UserBass:patch: 2a.14.00.00
	{addr: 0x2a160000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(140)'  }, // UserBass:patch: 2a.16.00.00
	{addr: 0x2a180000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(141)'  }, // UserBass:patch: 2a.18.00.00
	{addr: 0x2a1a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(142)'  }, // UserBass:patch: 2a.1a.00.00
	{addr: 0x2a1c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(143)'  }, // UserBass:patch: 2a.1c.00.00
	{addr: 0x2a1e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(144)'  }, // UserBass:patch: 2a.1e.00.00
	{addr: 0x2a200000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(145)'  }, // UserBass:patch: 2a.20.00.00
	{addr: 0x2a220000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(146)'  }, // UserBass:patch: 2a.22.00.00
	{addr: 0x2a240000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(147)'  }, // UserBass:patch: 2a.24.00.00
	{addr: 0x2a260000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(148)'  }, // UserBass:patch: 2a.26.00.00
	{addr: 0x2a280000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(149)'  }, // UserBass:patch: 2a.28.00.00
	{addr: 0x2a2a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(150)'  }, // UserBass:patch: 2a.2a.00.00
	{addr: 0x2a2c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(151)'  }, // UserBass:patch: 2a.2c.00.00
	{addr: 0x2a2e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(152)'  }, // UserBass:patch: 2a.2e.00.00
	{addr: 0x2a300000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(153)'  }, // UserBass:patch: 2a.30.00.00
	{addr: 0x2a320000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(154)'  }, // UserBass:patch: 2a.32.00.00
	{addr: 0x2a340000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(155)'  }, // UserBass:patch: 2a.34.00.00
	{addr: 0x2a360000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(156)'  }, // UserBass:patch: 2a.36.00.00
	{addr: 0x2a380000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(157)'  }, // UserBass:patch: 2a.38.00.00
	{addr: 0x2a3a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(158)'  }, // UserBass:patch: 2a.3a.00.00
	{addr: 0x2a3c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(159)'  }, // UserBass:patch: 2a.3c.00.00
	{addr: 0x2a3e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(160)'  }, // UserBass:patch: 2a.3e.00.00
	{addr: 0x2a400000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(161)'  }, // UserBass:patch: 2a.40.00.00
	{addr: 0x2a420000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(162)'  }, // UserBass:patch: 2a.42.00.00
	{addr: 0x2a440000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(163)'  }, // UserBass:patch: 2a.44.00.00
	{addr: 0x2a460000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(164)'  }, // UserBass:patch: 2a.46.00.00
	{addr: 0x2a480000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(165)'  }, // UserBass:patch: 2a.48.00.00
	{addr: 0x2a4a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(166)'  }, // UserBass:patch: 2a.4a.00.00
	{addr: 0x2a4c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(167)'  }, // UserBass:patch: 2a.4c.00.00
	{addr: 0x2a4e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(168)'  }, // UserBass:patch: 2a.4e.00.00
	{addr: 0x2a500000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(169)'  }, // UserBass:patch: 2a.50.00.00
	{addr: 0x2a520000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(170)'  }, // UserBass:patch: 2a.52.00.00
	{addr: 0x2a540000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(171)'  }, // UserBass:patch: 2a.54.00.00
	{addr: 0x2a560000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(172)'  }, // UserBass:patch: 2a.56.00.00
	{addr: 0x2a580000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(173)'  }, // UserBass:patch: 2a.58.00.00
	{addr: 0x2a5a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(174)'  }, // UserBass:patch: 2a.5a.00.00
	{addr: 0x2a5c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(175)'  }, // UserBass:patch: 2a.5c.00.00
	{addr: 0x2a5e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(176)'  }, // UserBass:patch: 2a.5e.00.00
	{addr: 0x2a600000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(177)'  }, // UserBass:patch: 2a.60.00.00
	{addr: 0x2a620000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(178)'  }, // UserBass:patch: 2a.62.00.00
	{addr: 0x2a640000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(179)'  }, // UserBass:patch: 2a.64.00.00
	{addr: 0x2a660000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(180)'  }, // UserBass:patch: 2a.66.00.00
	{addr: 0x2a680000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(181)'  }, // UserBass:patch: 2a.68.00.00
	{addr: 0x2a6a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(182)'  }, // UserBass:patch: 2a.6a.00.00
	{addr: 0x2a6c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(183)'  }, // UserBass:patch: 2a.6c.00.00
	{addr: 0x2a6e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(184)'  }, // UserBass:patch: 2a.6e.00.00
	{addr: 0x2a700000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(185)'  }, // UserBass:patch: 2a.70.00.00
	{addr: 0x2a720000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(186)'  }, // UserBass:patch: 2a.72.00.00
	{addr: 0x2a740000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(187)'  }, // UserBass:patch: 2a.74.00.00
	{addr: 0x2a760000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(188)'  }, // UserBass:patch: 2a.76.00.00
	{addr: 0x2a780000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(189)'  }, // UserBass:patch: 2a.78.00.00
	{addr: 0x2a7a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(190)'  }, // UserBass:patch: 2a.7a.00.00
	{addr: 0x2a7c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(191)'  }, // UserBass:patch: 2a.7c.00.00
	{addr: 0x2a7e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(192)'  }, // UserBass:patch: 2a.7e.00.00
	{addr: 0x2b000000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(193)'  }, // UserBass:patch: 2b.00.00.00
	{addr: 0x2b020000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(194)'  }, // UserBass:patch: 2b.02.00.00
	{addr: 0x2b040000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(195)'  }, // UserBass:patch: 2b.04.00.00
	{addr: 0x2b060000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(196)'  }, // UserBass:patch: 2b.06.00.00
	{addr: 0x2b080000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(197)'  }, // UserBass:patch: 2b.08.00.00
	{addr: 0x2b0a0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(198)'  }, // UserBass:patch: 2b.0a.00.00
	{addr: 0x2b0c0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(199)'  }, // UserBass:patch: 2b.0c.00.00
	{addr: 0x2b0e0000,	size: 0,	child: PatchBass,	name: 'UserBass_patch(200)'  }, // UserBass:patch: 2b.0e.00.00
	{addr: 0x30000000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(1)'  }, // InstVari:DynaSynth(1): 30.00.00.00
	{addr: 0x30010000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(2)'  }, // InstVari:DynaSynth(2): 30.01.00.00
	{addr: 0x30020000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(3)'  }, // InstVari:DynaSynth(3): 30.02.00.00
	{addr: 0x30030000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(4)'  }, // InstVari:DynaSynth(4): 30.03.00.00
	{addr: 0x30040000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(5)'  }, // InstVari:DynaSynth(5): 30.04.00.00
	{addr: 0x30050000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(6)'  }, // InstVari:DynaSynth(6): 30.05.00.00
	{addr: 0x30060000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(7)'  }, // InstVari:DynaSynth(7): 30.06.00.00
	{addr: 0x30070000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(8)'  }, // InstVari:DynaSynth(8): 30.07.00.00
	{addr: 0x30080000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(9)'  }, // InstVari:DynaSynth(9): 30.08.00.00
	{addr: 0x30090000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(10)'  }, // InstVari:DynaSynth(10): 30.09.00.00
	{addr: 0x300a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(11)'  }, // InstVari:DynaSynth(11): 30.0a.00.00
	{addr: 0x300b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(12)'  }, // InstVari:DynaSynth(12): 30.0b.00.00
	{addr: 0x300c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(13)'  }, // InstVari:DynaSynth(13): 30.0c.00.00
	{addr: 0x300d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(14)'  }, // InstVari:DynaSynth(14): 30.0d.00.00
	{addr: 0x300e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(15)'  }, // InstVari:DynaSynth(15): 30.0e.00.00
	{addr: 0x300f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(16)'  }, // InstVari:DynaSynth(16): 30.0f.00.00
	{addr: 0x30100000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(17)'  }, // InstVari:DynaSynth(17): 30.10.00.00
	{addr: 0x30110000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(18)'  }, // InstVari:DynaSynth(18): 30.11.00.00
	{addr: 0x30120000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(19)'  }, // InstVari:DynaSynth(19): 30.12.00.00
	{addr: 0x30130000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(20)'  }, // InstVari:DynaSynth(20): 30.13.00.00
	{addr: 0x30140000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(21)'  }, // InstVari:DynaSynth(21): 30.14.00.00
	{addr: 0x30150000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(22)'  }, // InstVari:DynaSynth(22): 30.15.00.00
	{addr: 0x30160000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(23)'  }, // InstVari:DynaSynth(23): 30.16.00.00
	{addr: 0x30170000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(24)'  }, // InstVari:DynaSynth(24): 30.17.00.00
	{addr: 0x30180000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(25)'  }, // InstVari:DynaSynth(25): 30.18.00.00
	{addr: 0x30190000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(26)'  }, // InstVari:DynaSynth(26): 30.19.00.00
	{addr: 0x301a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(27)'  }, // InstVari:DynaSynth(27): 30.1a.00.00
	{addr: 0x301b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(28)'  }, // InstVari:DynaSynth(28): 30.1b.00.00
	{addr: 0x301c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(29)'  }, // InstVari:DynaSynth(29): 30.1c.00.00
	{addr: 0x301d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(30)'  }, // InstVari:DynaSynth(30): 30.1d.00.00
	{addr: 0x301e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(31)'  }, // InstVari:DynaSynth(31): 30.1e.00.00
	{addr: 0x301f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(32)'  }, // InstVari:DynaSynth(32): 30.1f.00.00
	{addr: 0x30200000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(33)'  }, // InstVari:DynaSynth(33): 30.20.00.00
	{addr: 0x30210000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(34)'  }, // InstVari:DynaSynth(34): 30.21.00.00
	{addr: 0x30220000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(35)'  }, // InstVari:DynaSynth(35): 30.22.00.00
	{addr: 0x30230000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(36)'  }, // InstVari:DynaSynth(36): 30.23.00.00
	{addr: 0x30240000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(37)'  }, // InstVari:DynaSynth(37): 30.24.00.00
	{addr: 0x30250000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(38)'  }, // InstVari:DynaSynth(38): 30.25.00.00
	{addr: 0x30260000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(39)'  }, // InstVari:DynaSynth(39): 30.26.00.00
	{addr: 0x30270000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(40)'  }, // InstVari:DynaSynth(40): 30.27.00.00
	{addr: 0x30280000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(41)'  }, // InstVari:DynaSynth(41): 30.28.00.00
	{addr: 0x30290000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(42)'  }, // InstVari:DynaSynth(42): 30.29.00.00
	{addr: 0x302a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(43)'  }, // InstVari:DynaSynth(43): 30.2a.00.00
	{addr: 0x302b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(44)'  }, // InstVari:DynaSynth(44): 30.2b.00.00
	{addr: 0x302c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(45)'  }, // InstVari:DynaSynth(45): 30.2c.00.00
	{addr: 0x302d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(46)'  }, // InstVari:DynaSynth(46): 30.2d.00.00
	{addr: 0x302e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(47)'  }, // InstVari:DynaSynth(47): 30.2e.00.00
	{addr: 0x302f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(48)'  }, // InstVari:DynaSynth(48): 30.2f.00.00
	{addr: 0x30300000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(49)'  }, // InstVari:DynaSynth(49): 30.30.00.00
	{addr: 0x30310000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVari_DynaSynth(50)'  }, // InstVari:DynaSynth(50): 30.31.00.00
	{addr: 0x30320000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(1)'  }, // InstVari:OscSynth(1): 30.32.00.00
	{addr: 0x30330000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(2)'  }, // InstVari:OscSynth(2): 30.33.00.00
	{addr: 0x30340000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(3)'  }, // InstVari:OscSynth(3): 30.34.00.00
	{addr: 0x30350000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(4)'  }, // InstVari:OscSynth(4): 30.35.00.00
	{addr: 0x30360000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(5)'  }, // InstVari:OscSynth(5): 30.36.00.00
	{addr: 0x30370000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(6)'  }, // InstVari:OscSynth(6): 30.37.00.00
	{addr: 0x30380000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(7)'  }, // InstVari:OscSynth(7): 30.38.00.00
	{addr: 0x30390000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(8)'  }, // InstVari:OscSynth(8): 30.39.00.00
	{addr: 0x303a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(9)'  }, // InstVari:OscSynth(9): 30.3a.00.00
	{addr: 0x303b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(10)'  }, // InstVari:OscSynth(10): 30.3b.00.00
	{addr: 0x303c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(11)'  }, // InstVari:OscSynth(11): 30.3c.00.00
	{addr: 0x303d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(12)'  }, // InstVari:OscSynth(12): 30.3d.00.00
	{addr: 0x303e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(13)'  }, // InstVari:OscSynth(13): 30.3e.00.00
	{addr: 0x303f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(14)'  }, // InstVari:OscSynth(14): 30.3f.00.00
	{addr: 0x30400000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(15)'  }, // InstVari:OscSynth(15): 30.40.00.00
	{addr: 0x30410000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(16)'  }, // InstVari:OscSynth(16): 30.41.00.00
	{addr: 0x30420000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(17)'  }, // InstVari:OscSynth(17): 30.42.00.00
	{addr: 0x30430000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(18)'  }, // InstVari:OscSynth(18): 30.43.00.00
	{addr: 0x30440000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(19)'  }, // InstVari:OscSynth(19): 30.44.00.00
	{addr: 0x30450000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(20)'  }, // InstVari:OscSynth(20): 30.45.00.00
	{addr: 0x30460000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(21)'  }, // InstVari:OscSynth(21): 30.46.00.00
	{addr: 0x30470000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(22)'  }, // InstVari:OscSynth(22): 30.47.00.00
	{addr: 0x30480000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(23)'  }, // InstVari:OscSynth(23): 30.48.00.00
	{addr: 0x30490000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(24)'  }, // InstVari:OscSynth(24): 30.49.00.00
	{addr: 0x304a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(25)'  }, // InstVari:OscSynth(25): 30.4a.00.00
	{addr: 0x304b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(26)'  }, // InstVari:OscSynth(26): 30.4b.00.00
	{addr: 0x304c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(27)'  }, // InstVari:OscSynth(27): 30.4c.00.00
	{addr: 0x304d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(28)'  }, // InstVari:OscSynth(28): 30.4d.00.00
	{addr: 0x304e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(29)'  }, // InstVari:OscSynth(29): 30.4e.00.00
	{addr: 0x304f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(30)'  }, // InstVari:OscSynth(30): 30.4f.00.00
	{addr: 0x30500000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(31)'  }, // InstVari:OscSynth(31): 30.50.00.00
	{addr: 0x30510000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(32)'  }, // InstVari:OscSynth(32): 30.51.00.00
	{addr: 0x30520000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(33)'  }, // InstVari:OscSynth(33): 30.52.00.00
	{addr: 0x30530000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(34)'  }, // InstVari:OscSynth(34): 30.53.00.00
	{addr: 0x30540000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(35)'  }, // InstVari:OscSynth(35): 30.54.00.00
	{addr: 0x30550000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(36)'  }, // InstVari:OscSynth(36): 30.55.00.00
	{addr: 0x30560000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(37)'  }, // InstVari:OscSynth(37): 30.56.00.00
	{addr: 0x30570000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(38)'  }, // InstVari:OscSynth(38): 30.57.00.00
	{addr: 0x30580000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(39)'  }, // InstVari:OscSynth(39): 30.58.00.00
	{addr: 0x30590000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(40)'  }, // InstVari:OscSynth(40): 30.59.00.00
	{addr: 0x305a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(41)'  }, // InstVari:OscSynth(41): 30.5a.00.00
	{addr: 0x305b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(42)'  }, // InstVari:OscSynth(42): 30.5b.00.00
	{addr: 0x305c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(43)'  }, // InstVari:OscSynth(43): 30.5c.00.00
	{addr: 0x305d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(44)'  }, // InstVari:OscSynth(44): 30.5d.00.00
	{addr: 0x305e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(45)'  }, // InstVari:OscSynth(45): 30.5e.00.00
	{addr: 0x305f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(46)'  }, // InstVari:OscSynth(46): 30.5f.00.00
	{addr: 0x30600000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(47)'  }, // InstVari:OscSynth(47): 30.60.00.00
	{addr: 0x30610000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(48)'  }, // InstVari:OscSynth(48): 30.61.00.00
	{addr: 0x30620000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(49)'  }, // InstVari:OscSynth(49): 30.62.00.00
	{addr: 0x30630000,	size: 0,	child: InstVariOscSynth,	name: 'InstVari_OscSynth(50)'  }, // InstVari:OscSynth(50): 30.63.00.00
	{addr: 0x30640000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(1)'  }, // InstVari:Gr300(1): 30.64.00.00
	{addr: 0x30650000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(2)'  }, // InstVari:Gr300(2): 30.65.00.00
	{addr: 0x30660000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(3)'  }, // InstVari:Gr300(3): 30.66.00.00
	{addr: 0x30670000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(4)'  }, // InstVari:Gr300(4): 30.67.00.00
	{addr: 0x30680000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(5)'  }, // InstVari:Gr300(5): 30.68.00.00
	{addr: 0x30690000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(6)'  }, // InstVari:Gr300(6): 30.69.00.00
	{addr: 0x306a0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(7)'  }, // InstVari:Gr300(7): 30.6a.00.00
	{addr: 0x306b0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(8)'  }, // InstVari:Gr300(8): 30.6b.00.00
	{addr: 0x306c0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(9)'  }, // InstVari:Gr300(9): 30.6c.00.00
	{addr: 0x306d0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(10)'  }, // InstVari:Gr300(10): 30.6d.00.00
	{addr: 0x306e0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(11)'  }, // InstVari:Gr300(11): 30.6e.00.00
	{addr: 0x306f0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(12)'  }, // InstVari:Gr300(12): 30.6f.00.00
	{addr: 0x30700000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(13)'  }, // InstVari:Gr300(13): 30.70.00.00
	{addr: 0x30710000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(14)'  }, // InstVari:Gr300(14): 30.71.00.00
	{addr: 0x30720000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(15)'  }, // InstVari:Gr300(15): 30.72.00.00
	{addr: 0x30730000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(16)'  }, // InstVari:Gr300(16): 30.73.00.00
	{addr: 0x30740000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(17)'  }, // InstVari:Gr300(17): 30.74.00.00
	{addr: 0x30750000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(18)'  }, // InstVari:Gr300(18): 30.75.00.00
	{addr: 0x30760000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(19)'  }, // InstVari:Gr300(19): 30.76.00.00
	{addr: 0x30770000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(20)'  }, // InstVari:Gr300(20): 30.77.00.00
	{addr: 0x30780000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(21)'  }, // InstVari:Gr300(21): 30.78.00.00
	{addr: 0x30790000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(22)'  }, // InstVari:Gr300(22): 30.79.00.00
	{addr: 0x307a0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(23)'  }, // InstVari:Gr300(23): 30.7a.00.00
	{addr: 0x307b0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(24)'  }, // InstVari:Gr300(24): 30.7b.00.00
	{addr: 0x307c0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(25)'  }, // InstVari:Gr300(25): 30.7c.00.00
	{addr: 0x307d0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(26)'  }, // InstVari:Gr300(26): 30.7d.00.00
	{addr: 0x307e0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(27)'  }, // InstVari:Gr300(27): 30.7e.00.00
	{addr: 0x307f0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(28)'  }, // InstVari:Gr300(28): 30.7f.00.00
	{addr: 0x31000000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(29)'  }, // InstVari:Gr300(29): 31.00.00.00
	{addr: 0x31010000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(30)'  }, // InstVari:Gr300(30): 31.01.00.00
	{addr: 0x31020000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(31)'  }, // InstVari:Gr300(31): 31.02.00.00
	{addr: 0x31030000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(32)'  }, // InstVari:Gr300(32): 31.03.00.00
	{addr: 0x31040000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(33)'  }, // InstVari:Gr300(33): 31.04.00.00
	{addr: 0x31050000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(34)'  }, // InstVari:Gr300(34): 31.05.00.00
	{addr: 0x31060000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(35)'  }, // InstVari:Gr300(35): 31.06.00.00
	{addr: 0x31070000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(36)'  }, // InstVari:Gr300(36): 31.07.00.00
	{addr: 0x31080000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(37)'  }, // InstVari:Gr300(37): 31.08.00.00
	{addr: 0x31090000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(38)'  }, // InstVari:Gr300(38): 31.09.00.00
	{addr: 0x310a0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(39)'  }, // InstVari:Gr300(39): 31.0a.00.00
	{addr: 0x310b0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(40)'  }, // InstVari:Gr300(40): 31.0b.00.00
	{addr: 0x310c0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(41)'  }, // InstVari:Gr300(41): 31.0c.00.00
	{addr: 0x310d0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(42)'  }, // InstVari:Gr300(42): 31.0d.00.00
	{addr: 0x310e0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(43)'  }, // InstVari:Gr300(43): 31.0e.00.00
	{addr: 0x310f0000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(44)'  }, // InstVari:Gr300(44): 31.0f.00.00
	{addr: 0x31100000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(45)'  }, // InstVari:Gr300(45): 31.10.00.00
	{addr: 0x31110000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(46)'  }, // InstVari:Gr300(46): 31.11.00.00
	{addr: 0x31120000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(47)'  }, // InstVari:Gr300(47): 31.12.00.00
	{addr: 0x31130000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(48)'  }, // InstVari:Gr300(48): 31.13.00.00
	{addr: 0x31140000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(49)'  }, // InstVari:Gr300(49): 31.14.00.00
	{addr: 0x31150000,	size: 0,	child: InstVariGr300,	name: 'InstVari_Gr300(50)'  }, // InstVari:Gr300(50): 31.15.00.00
	{addr: 0x31160000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(1)'  }, // InstVari:EGtr(1): 31.16.00.00
	{addr: 0x31170000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(2)'  }, // InstVari:EGtr(2): 31.17.00.00
	{addr: 0x31180000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(3)'  }, // InstVari:EGtr(3): 31.18.00.00
	{addr: 0x31190000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(4)'  }, // InstVari:EGtr(4): 31.19.00.00
	{addr: 0x311a0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(5)'  }, // InstVari:EGtr(5): 31.1a.00.00
	{addr: 0x311b0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(6)'  }, // InstVari:EGtr(6): 31.1b.00.00
	{addr: 0x311c0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(7)'  }, // InstVari:EGtr(7): 31.1c.00.00
	{addr: 0x311d0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(8)'  }, // InstVari:EGtr(8): 31.1d.00.00
	{addr: 0x311e0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(9)'  }, // InstVari:EGtr(9): 31.1e.00.00
	{addr: 0x311f0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(10)'  }, // InstVari:EGtr(10): 31.1f.00.00
	{addr: 0x31200000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(11)'  }, // InstVari:EGtr(11): 31.20.00.00
	{addr: 0x31210000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(12)'  }, // InstVari:EGtr(12): 31.21.00.00
	{addr: 0x31220000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(13)'  }, // InstVari:EGtr(13): 31.22.00.00
	{addr: 0x31230000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(14)'  }, // InstVari:EGtr(14): 31.23.00.00
	{addr: 0x31240000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(15)'  }, // InstVari:EGtr(15): 31.24.00.00
	{addr: 0x31250000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(16)'  }, // InstVari:EGtr(16): 31.25.00.00
	{addr: 0x31260000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(17)'  }, // InstVari:EGtr(17): 31.26.00.00
	{addr: 0x31270000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(18)'  }, // InstVari:EGtr(18): 31.27.00.00
	{addr: 0x31280000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(19)'  }, // InstVari:EGtr(19): 31.28.00.00
	{addr: 0x31290000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(20)'  }, // InstVari:EGtr(20): 31.29.00.00
	{addr: 0x312a0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(21)'  }, // InstVari:EGtr(21): 31.2a.00.00
	{addr: 0x312b0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(22)'  }, // InstVari:EGtr(22): 31.2b.00.00
	{addr: 0x312c0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(23)'  }, // InstVari:EGtr(23): 31.2c.00.00
	{addr: 0x312d0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(24)'  }, // InstVari:EGtr(24): 31.2d.00.00
	{addr: 0x312e0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(25)'  }, // InstVari:EGtr(25): 31.2e.00.00
	{addr: 0x312f0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(26)'  }, // InstVari:EGtr(26): 31.2f.00.00
	{addr: 0x31300000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(27)'  }, // InstVari:EGtr(27): 31.30.00.00
	{addr: 0x31310000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(28)'  }, // InstVari:EGtr(28): 31.31.00.00
	{addr: 0x31320000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(29)'  }, // InstVari:EGtr(29): 31.32.00.00
	{addr: 0x31330000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(30)'  }, // InstVari:EGtr(30): 31.33.00.00
	{addr: 0x31340000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(31)'  }, // InstVari:EGtr(31): 31.34.00.00
	{addr: 0x31350000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(32)'  }, // InstVari:EGtr(32): 31.35.00.00
	{addr: 0x31360000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(33)'  }, // InstVari:EGtr(33): 31.36.00.00
	{addr: 0x31370000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(34)'  }, // InstVari:EGtr(34): 31.37.00.00
	{addr: 0x31380000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(35)'  }, // InstVari:EGtr(35): 31.38.00.00
	{addr: 0x31390000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(36)'  }, // InstVari:EGtr(36): 31.39.00.00
	{addr: 0x313a0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(37)'  }, // InstVari:EGtr(37): 31.3a.00.00
	{addr: 0x313b0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(38)'  }, // InstVari:EGtr(38): 31.3b.00.00
	{addr: 0x313c0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(39)'  }, // InstVari:EGtr(39): 31.3c.00.00
	{addr: 0x313d0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(40)'  }, // InstVari:EGtr(40): 31.3d.00.00
	{addr: 0x313e0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(41)'  }, // InstVari:EGtr(41): 31.3e.00.00
	{addr: 0x313f0000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(42)'  }, // InstVari:EGtr(42): 31.3f.00.00
	{addr: 0x31400000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(43)'  }, // InstVari:EGtr(43): 31.40.00.00
	{addr: 0x31410000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(44)'  }, // InstVari:EGtr(44): 31.41.00.00
	{addr: 0x31420000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(45)'  }, // InstVari:EGtr(45): 31.42.00.00
	{addr: 0x31430000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(46)'  }, // InstVari:EGtr(46): 31.43.00.00
	{addr: 0x31440000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(47)'  }, // InstVari:EGtr(47): 31.44.00.00
	{addr: 0x31450000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(48)'  }, // InstVari:EGtr(48): 31.45.00.00
	{addr: 0x31460000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(49)'  }, // InstVari:EGtr(49): 31.46.00.00
	{addr: 0x31470000,	size: 0,	child: InstVariEGtr,	name: 'InstVari_EGtr(50)'  }, // InstVari:EGtr(50): 31.47.00.00
	{addr: 0x31480000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(1)'  }, // InstVari:Acoustic(1): 31.48.00.00
	{addr: 0x31490000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(2)'  }, // InstVari:Acoustic(2): 31.49.00.00
	{addr: 0x314a0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(3)'  }, // InstVari:Acoustic(3): 31.4a.00.00
	{addr: 0x314b0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(4)'  }, // InstVari:Acoustic(4): 31.4b.00.00
	{addr: 0x314c0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(5)'  }, // InstVari:Acoustic(5): 31.4c.00.00
	{addr: 0x314d0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(6)'  }, // InstVari:Acoustic(6): 31.4d.00.00
	{addr: 0x314e0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(7)'  }, // InstVari:Acoustic(7): 31.4e.00.00
	{addr: 0x314f0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(8)'  }, // InstVari:Acoustic(8): 31.4f.00.00
	{addr: 0x31500000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(9)'  }, // InstVari:Acoustic(9): 31.50.00.00
	{addr: 0x31510000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(10)'  }, // InstVari:Acoustic(10): 31.51.00.00
	{addr: 0x31520000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(11)'  }, // InstVari:Acoustic(11): 31.52.00.00
	{addr: 0x31530000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(12)'  }, // InstVari:Acoustic(12): 31.53.00.00
	{addr: 0x31540000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(13)'  }, // InstVari:Acoustic(13): 31.54.00.00
	{addr: 0x31550000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(14)'  }, // InstVari:Acoustic(14): 31.55.00.00
	{addr: 0x31560000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(15)'  }, // InstVari:Acoustic(15): 31.56.00.00
	{addr: 0x31570000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(16)'  }, // InstVari:Acoustic(16): 31.57.00.00
	{addr: 0x31580000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(17)'  }, // InstVari:Acoustic(17): 31.58.00.00
	{addr: 0x31590000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(18)'  }, // InstVari:Acoustic(18): 31.59.00.00
	{addr: 0x315a0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(19)'  }, // InstVari:Acoustic(19): 31.5a.00.00
	{addr: 0x315b0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(20)'  }, // InstVari:Acoustic(20): 31.5b.00.00
	{addr: 0x315c0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(21)'  }, // InstVari:Acoustic(21): 31.5c.00.00
	{addr: 0x315d0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(22)'  }, // InstVari:Acoustic(22): 31.5d.00.00
	{addr: 0x315e0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(23)'  }, // InstVari:Acoustic(23): 31.5e.00.00
	{addr: 0x315f0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(24)'  }, // InstVari:Acoustic(24): 31.5f.00.00
	{addr: 0x31600000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(25)'  }, // InstVari:Acoustic(25): 31.60.00.00
	{addr: 0x31610000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(26)'  }, // InstVari:Acoustic(26): 31.61.00.00
	{addr: 0x31620000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(27)'  }, // InstVari:Acoustic(27): 31.62.00.00
	{addr: 0x31630000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(28)'  }, // InstVari:Acoustic(28): 31.63.00.00
	{addr: 0x31640000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(29)'  }, // InstVari:Acoustic(29): 31.64.00.00
	{addr: 0x31650000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(30)'  }, // InstVari:Acoustic(30): 31.65.00.00
	{addr: 0x31660000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(31)'  }, // InstVari:Acoustic(31): 31.66.00.00
	{addr: 0x31670000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(32)'  }, // InstVari:Acoustic(32): 31.67.00.00
	{addr: 0x31680000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(33)'  }, // InstVari:Acoustic(33): 31.68.00.00
	{addr: 0x31690000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(34)'  }, // InstVari:Acoustic(34): 31.69.00.00
	{addr: 0x316a0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(35)'  }, // InstVari:Acoustic(35): 31.6a.00.00
	{addr: 0x316b0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(36)'  }, // InstVari:Acoustic(36): 31.6b.00.00
	{addr: 0x316c0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(37)'  }, // InstVari:Acoustic(37): 31.6c.00.00
	{addr: 0x316d0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(38)'  }, // InstVari:Acoustic(38): 31.6d.00.00
	{addr: 0x316e0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(39)'  }, // InstVari:Acoustic(39): 31.6e.00.00
	{addr: 0x316f0000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(40)'  }, // InstVari:Acoustic(40): 31.6f.00.00
	{addr: 0x31700000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(41)'  }, // InstVari:Acoustic(41): 31.70.00.00
	{addr: 0x31710000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(42)'  }, // InstVari:Acoustic(42): 31.71.00.00
	{addr: 0x31720000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(43)'  }, // InstVari:Acoustic(43): 31.72.00.00
	{addr: 0x31730000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(44)'  }, // InstVari:Acoustic(44): 31.73.00.00
	{addr: 0x31740000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(45)'  }, // InstVari:Acoustic(45): 31.74.00.00
	{addr: 0x31750000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(46)'  }, // InstVari:Acoustic(46): 31.75.00.00
	{addr: 0x31760000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(47)'  }, // InstVari:Acoustic(47): 31.76.00.00
	{addr: 0x31770000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(48)'  }, // InstVari:Acoustic(48): 31.77.00.00
	{addr: 0x31780000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(49)'  }, // InstVari:Acoustic(49): 31.78.00.00
	{addr: 0x31790000,	size: 0,	child: InstVariAcoustic,	name: 'InstVari_Acoustic(50)'  }, // InstVari:Acoustic(50): 31.79.00.00
	{addr: 0x317a0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(1)'  }, // InstVari:EBass(1): 31.7a.00.00
	{addr: 0x317b0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(2)'  }, // InstVari:EBass(2): 31.7b.00.00
	{addr: 0x317c0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(3)'  }, // InstVari:EBass(3): 31.7c.00.00
	{addr: 0x317d0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(4)'  }, // InstVari:EBass(4): 31.7d.00.00
	{addr: 0x317e0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(5)'  }, // InstVari:EBass(5): 31.7e.00.00
	{addr: 0x317f0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(6)'  }, // InstVari:EBass(6): 31.7f.00.00
	{addr: 0x32000000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(7)'  }, // InstVari:EBass(7): 32.00.00.00
	{addr: 0x32010000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(8)'  }, // InstVari:EBass(8): 32.01.00.00
	{addr: 0x32020000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(9)'  }, // InstVari:EBass(9): 32.02.00.00
	{addr: 0x32030000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(10)'  }, // InstVari:EBass(10): 32.03.00.00
	{addr: 0x32040000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(11)'  }, // InstVari:EBass(11): 32.04.00.00
	{addr: 0x32050000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(12)'  }, // InstVari:EBass(12): 32.05.00.00
	{addr: 0x32060000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(13)'  }, // InstVari:EBass(13): 32.06.00.00
	{addr: 0x32070000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(14)'  }, // InstVari:EBass(14): 32.07.00.00
	{addr: 0x32080000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(15)'  }, // InstVari:EBass(15): 32.08.00.00
	{addr: 0x32090000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(16)'  }, // InstVari:EBass(16): 32.09.00.00
	{addr: 0x320a0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(17)'  }, // InstVari:EBass(17): 32.0a.00.00
	{addr: 0x320b0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(18)'  }, // InstVari:EBass(18): 32.0b.00.00
	{addr: 0x320c0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(19)'  }, // InstVari:EBass(19): 32.0c.00.00
	{addr: 0x320d0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(20)'  }, // InstVari:EBass(20): 32.0d.00.00
	{addr: 0x320e0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(21)'  }, // InstVari:EBass(21): 32.0e.00.00
	{addr: 0x320f0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(22)'  }, // InstVari:EBass(22): 32.0f.00.00
	{addr: 0x32100000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(23)'  }, // InstVari:EBass(23): 32.10.00.00
	{addr: 0x32110000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(24)'  }, // InstVari:EBass(24): 32.11.00.00
	{addr: 0x32120000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(25)'  }, // InstVari:EBass(25): 32.12.00.00
	{addr: 0x32130000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(26)'  }, // InstVari:EBass(26): 32.13.00.00
	{addr: 0x32140000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(27)'  }, // InstVari:EBass(27): 32.14.00.00
	{addr: 0x32150000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(28)'  }, // InstVari:EBass(28): 32.15.00.00
	{addr: 0x32160000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(29)'  }, // InstVari:EBass(29): 32.16.00.00
	{addr: 0x32170000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(30)'  }, // InstVari:EBass(30): 32.17.00.00
	{addr: 0x32180000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(31)'  }, // InstVari:EBass(31): 32.18.00.00
	{addr: 0x32190000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(32)'  }, // InstVari:EBass(32): 32.19.00.00
	{addr: 0x321a0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(33)'  }, // InstVari:EBass(33): 32.1a.00.00
	{addr: 0x321b0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(34)'  }, // InstVari:EBass(34): 32.1b.00.00
	{addr: 0x321c0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(35)'  }, // InstVari:EBass(35): 32.1c.00.00
	{addr: 0x321d0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(36)'  }, // InstVari:EBass(36): 32.1d.00.00
	{addr: 0x321e0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(37)'  }, // InstVari:EBass(37): 32.1e.00.00
	{addr: 0x321f0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(38)'  }, // InstVari:EBass(38): 32.1f.00.00
	{addr: 0x32200000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(39)'  }, // InstVari:EBass(39): 32.20.00.00
	{addr: 0x32210000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(40)'  }, // InstVari:EBass(40): 32.21.00.00
	{addr: 0x32220000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(41)'  }, // InstVari:EBass(41): 32.22.00.00
	{addr: 0x32230000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(42)'  }, // InstVari:EBass(42): 32.23.00.00
	{addr: 0x32240000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(43)'  }, // InstVari:EBass(43): 32.24.00.00
	{addr: 0x32250000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(44)'  }, // InstVari:EBass(44): 32.25.00.00
	{addr: 0x32260000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(45)'  }, // InstVari:EBass(45): 32.26.00.00
	{addr: 0x32270000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(46)'  }, // InstVari:EBass(46): 32.27.00.00
	{addr: 0x32280000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(47)'  }, // InstVari:EBass(47): 32.28.00.00
	{addr: 0x32290000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(48)'  }, // InstVari:EBass(48): 32.29.00.00
	{addr: 0x322a0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(49)'  }, // InstVari:EBass(49): 32.2a.00.00
	{addr: 0x322b0000,	size: 0,	child: InstVariEBass,	name: 'InstVari_EBass(50)'  }, // InstVari:EBass(50): 32.2b.00.00
	{addr: 0x322c0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(1)'  }, // InstVari:VioGtr(1): 32.2c.00.00
	{addr: 0x322d0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(2)'  }, // InstVari:VioGtr(2): 32.2d.00.00
	{addr: 0x322e0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(3)'  }, // InstVari:VioGtr(3): 32.2e.00.00
	{addr: 0x322f0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(4)'  }, // InstVari:VioGtr(4): 32.2f.00.00
	{addr: 0x32300000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(5)'  }, // InstVari:VioGtr(5): 32.30.00.00
	{addr: 0x32310000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(6)'  }, // InstVari:VioGtr(6): 32.31.00.00
	{addr: 0x32320000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(7)'  }, // InstVari:VioGtr(7): 32.32.00.00
	{addr: 0x32330000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(8)'  }, // InstVari:VioGtr(8): 32.33.00.00
	{addr: 0x32340000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(9)'  }, // InstVari:VioGtr(9): 32.34.00.00
	{addr: 0x32350000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(10)'  }, // InstVari:VioGtr(10): 32.35.00.00
	{addr: 0x32360000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(11)'  }, // InstVari:VioGtr(11): 32.36.00.00
	{addr: 0x32370000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(12)'  }, // InstVari:VioGtr(12): 32.37.00.00
	{addr: 0x32380000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(13)'  }, // InstVari:VioGtr(13): 32.38.00.00
	{addr: 0x32390000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(14)'  }, // InstVari:VioGtr(14): 32.39.00.00
	{addr: 0x323a0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(15)'  }, // InstVari:VioGtr(15): 32.3a.00.00
	{addr: 0x323b0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(16)'  }, // InstVari:VioGtr(16): 32.3b.00.00
	{addr: 0x323c0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(17)'  }, // InstVari:VioGtr(17): 32.3c.00.00
	{addr: 0x323d0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(18)'  }, // InstVari:VioGtr(18): 32.3d.00.00
	{addr: 0x323e0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(19)'  }, // InstVari:VioGtr(19): 32.3e.00.00
	{addr: 0x323f0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(20)'  }, // InstVari:VioGtr(20): 32.3f.00.00
	{addr: 0x32400000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(21)'  }, // InstVari:VioGtr(21): 32.40.00.00
	{addr: 0x32410000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(22)'  }, // InstVari:VioGtr(22): 32.41.00.00
	{addr: 0x32420000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(23)'  }, // InstVari:VioGtr(23): 32.42.00.00
	{addr: 0x32430000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(24)'  }, // InstVari:VioGtr(24): 32.43.00.00
	{addr: 0x32440000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(25)'  }, // InstVari:VioGtr(25): 32.44.00.00
	{addr: 0x32450000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(26)'  }, // InstVari:VioGtr(26): 32.45.00.00
	{addr: 0x32460000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(27)'  }, // InstVari:VioGtr(27): 32.46.00.00
	{addr: 0x32470000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(28)'  }, // InstVari:VioGtr(28): 32.47.00.00
	{addr: 0x32480000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(29)'  }, // InstVari:VioGtr(29): 32.48.00.00
	{addr: 0x32490000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(30)'  }, // InstVari:VioGtr(30): 32.49.00.00
	{addr: 0x324a0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(31)'  }, // InstVari:VioGtr(31): 32.4a.00.00
	{addr: 0x324b0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(32)'  }, // InstVari:VioGtr(32): 32.4b.00.00
	{addr: 0x324c0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(33)'  }, // InstVari:VioGtr(33): 32.4c.00.00
	{addr: 0x324d0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(34)'  }, // InstVari:VioGtr(34): 32.4d.00.00
	{addr: 0x324e0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(35)'  }, // InstVari:VioGtr(35): 32.4e.00.00
	{addr: 0x324f0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(36)'  }, // InstVari:VioGtr(36): 32.4f.00.00
	{addr: 0x32500000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(37)'  }, // InstVari:VioGtr(37): 32.50.00.00
	{addr: 0x32510000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(38)'  }, // InstVari:VioGtr(38): 32.51.00.00
	{addr: 0x32520000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(39)'  }, // InstVari:VioGtr(39): 32.52.00.00
	{addr: 0x32530000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(40)'  }, // InstVari:VioGtr(40): 32.53.00.00
	{addr: 0x32540000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(41)'  }, // InstVari:VioGtr(41): 32.54.00.00
	{addr: 0x32550000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(42)'  }, // InstVari:VioGtr(42): 32.55.00.00
	{addr: 0x32560000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(43)'  }, // InstVari:VioGtr(43): 32.56.00.00
	{addr: 0x32570000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(44)'  }, // InstVari:VioGtr(44): 32.57.00.00
	{addr: 0x32580000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(45)'  }, // InstVari:VioGtr(45): 32.58.00.00
	{addr: 0x32590000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(46)'  }, // InstVari:VioGtr(46): 32.59.00.00
	{addr: 0x325a0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(47)'  }, // InstVari:VioGtr(47): 32.5a.00.00
	{addr: 0x325b0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(48)'  }, // InstVari:VioGtr(48): 32.5b.00.00
	{addr: 0x325c0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(49)'  }, // InstVari:VioGtr(49): 32.5c.00.00
	{addr: 0x325d0000,	size: 0,	child: InstVariVioGtr,	name: 'InstVari_VioGtr(50)'  }, // InstVari:VioGtr(50): 32.5d.00.00
	{addr: 0x325e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(1)'  }, // InstVari:PolyFx(1): 32.5e.00.00
	{addr: 0x325f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(2)'  }, // InstVari:PolyFx(2): 32.5f.00.00
	{addr: 0x32600000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(3)'  }, // InstVari:PolyFx(3): 32.60.00.00
	{addr: 0x32610000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(4)'  }, // InstVari:PolyFx(4): 32.61.00.00
	{addr: 0x32620000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(5)'  }, // InstVari:PolyFx(5): 32.62.00.00
	{addr: 0x32630000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(6)'  }, // InstVari:PolyFx(6): 32.63.00.00
	{addr: 0x32640000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(7)'  }, // InstVari:PolyFx(7): 32.64.00.00
	{addr: 0x32650000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(8)'  }, // InstVari:PolyFx(8): 32.65.00.00
	{addr: 0x32660000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(9)'  }, // InstVari:PolyFx(9): 32.66.00.00
	{addr: 0x32670000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(10)'  }, // InstVari:PolyFx(10): 32.67.00.00
	{addr: 0x32680000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(11)'  }, // InstVari:PolyFx(11): 32.68.00.00
	{addr: 0x32690000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(12)'  }, // InstVari:PolyFx(12): 32.69.00.00
	{addr: 0x326a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(13)'  }, // InstVari:PolyFx(13): 32.6a.00.00
	{addr: 0x326b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(14)'  }, // InstVari:PolyFx(14): 32.6b.00.00
	{addr: 0x326c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(15)'  }, // InstVari:PolyFx(15): 32.6c.00.00
	{addr: 0x326d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(16)'  }, // InstVari:PolyFx(16): 32.6d.00.00
	{addr: 0x326e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(17)'  }, // InstVari:PolyFx(17): 32.6e.00.00
	{addr: 0x326f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(18)'  }, // InstVari:PolyFx(18): 32.6f.00.00
	{addr: 0x32700000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(19)'  }, // InstVari:PolyFx(19): 32.70.00.00
	{addr: 0x32710000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(20)'  }, // InstVari:PolyFx(20): 32.71.00.00
	{addr: 0x32720000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(21)'  }, // InstVari:PolyFx(21): 32.72.00.00
	{addr: 0x32730000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(22)'  }, // InstVari:PolyFx(22): 32.73.00.00
	{addr: 0x32740000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(23)'  }, // InstVari:PolyFx(23): 32.74.00.00
	{addr: 0x32750000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(24)'  }, // InstVari:PolyFx(24): 32.75.00.00
	{addr: 0x32760000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(25)'  }, // InstVari:PolyFx(25): 32.76.00.00
	{addr: 0x32770000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(26)'  }, // InstVari:PolyFx(26): 32.77.00.00
	{addr: 0x32780000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(27)'  }, // InstVari:PolyFx(27): 32.78.00.00
	{addr: 0x32790000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(28)'  }, // InstVari:PolyFx(28): 32.79.00.00
	{addr: 0x327a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(29)'  }, // InstVari:PolyFx(29): 32.7a.00.00
	{addr: 0x327b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(30)'  }, // InstVari:PolyFx(30): 32.7b.00.00
	{addr: 0x327c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(31)'  }, // InstVari:PolyFx(31): 32.7c.00.00
	{addr: 0x327d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(32)'  }, // InstVari:PolyFx(32): 32.7d.00.00
	{addr: 0x327e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(33)'  }, // InstVari:PolyFx(33): 32.7e.00.00
	{addr: 0x327f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(34)'  }, // InstVari:PolyFx(34): 32.7f.00.00
	{addr: 0x33000000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(35)'  }, // InstVari:PolyFx(35): 33.00.00.00
	{addr: 0x33010000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(36)'  }, // InstVari:PolyFx(36): 33.01.00.00
	{addr: 0x33020000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(37)'  }, // InstVari:PolyFx(37): 33.02.00.00
	{addr: 0x33030000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(38)'  }, // InstVari:PolyFx(38): 33.03.00.00
	{addr: 0x33040000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(39)'  }, // InstVari:PolyFx(39): 33.04.00.00
	{addr: 0x33050000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(40)'  }, // InstVari:PolyFx(40): 33.05.00.00
	{addr: 0x33060000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(41)'  }, // InstVari:PolyFx(41): 33.06.00.00
	{addr: 0x33070000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(42)'  }, // InstVari:PolyFx(42): 33.07.00.00
	{addr: 0x33080000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(43)'  }, // InstVari:PolyFx(43): 33.08.00.00
	{addr: 0x33090000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(44)'  }, // InstVari:PolyFx(44): 33.09.00.00
	{addr: 0x330a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(45)'  }, // InstVari:PolyFx(45): 33.0a.00.00
	{addr: 0x330b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(46)'  }, // InstVari:PolyFx(46): 33.0b.00.00
	{addr: 0x330c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(47)'  }, // InstVari:PolyFx(47): 33.0c.00.00
	{addr: 0x330d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(48)'  }, // InstVari:PolyFx(48): 33.0d.00.00
	{addr: 0x330e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(49)'  }, // InstVari:PolyFx(49): 33.0e.00.00
	{addr: 0x330f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVari_PolyFx(50)'  }, // InstVari:PolyFx(50): 33.0f.00.00
	{addr: 0x34000000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(1)'  }, // InstLfoVari:DynaSynth(1): 34.00.00.00
	{addr: 0x34010000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(2)'  }, // InstLfoVari:DynaSynth(2): 34.01.00.00
	{addr: 0x34020000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(3)'  }, // InstLfoVari:DynaSynth(3): 34.02.00.00
	{addr: 0x34030000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(4)'  }, // InstLfoVari:DynaSynth(4): 34.03.00.00
	{addr: 0x34040000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(5)'  }, // InstLfoVari:DynaSynth(5): 34.04.00.00
	{addr: 0x34050000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(6)'  }, // InstLfoVari:DynaSynth(6): 34.05.00.00
	{addr: 0x34060000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(7)'  }, // InstLfoVari:DynaSynth(7): 34.06.00.00
	{addr: 0x34070000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(8)'  }, // InstLfoVari:DynaSynth(8): 34.07.00.00
	{addr: 0x34080000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(9)'  }, // InstLfoVari:DynaSynth(9): 34.08.00.00
	{addr: 0x34090000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(10)'  }, // InstLfoVari:DynaSynth(10): 34.09.00.00
	{addr: 0x340a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(11)'  }, // InstLfoVari:DynaSynth(11): 34.0a.00.00
	{addr: 0x340b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(12)'  }, // InstLfoVari:DynaSynth(12): 34.0b.00.00
	{addr: 0x340c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(13)'  }, // InstLfoVari:DynaSynth(13): 34.0c.00.00
	{addr: 0x340d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(14)'  }, // InstLfoVari:DynaSynth(14): 34.0d.00.00
	{addr: 0x340e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(15)'  }, // InstLfoVari:DynaSynth(15): 34.0e.00.00
	{addr: 0x340f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(16)'  }, // InstLfoVari:DynaSynth(16): 34.0f.00.00
	{addr: 0x34100000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(17)'  }, // InstLfoVari:DynaSynth(17): 34.10.00.00
	{addr: 0x34110000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(18)'  }, // InstLfoVari:DynaSynth(18): 34.11.00.00
	{addr: 0x34120000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(19)'  }, // InstLfoVari:DynaSynth(19): 34.12.00.00
	{addr: 0x34130000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(20)'  }, // InstLfoVari:DynaSynth(20): 34.13.00.00
	{addr: 0x34140000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(21)'  }, // InstLfoVari:DynaSynth(21): 34.14.00.00
	{addr: 0x34150000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(22)'  }, // InstLfoVari:DynaSynth(22): 34.15.00.00
	{addr: 0x34160000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(23)'  }, // InstLfoVari:DynaSynth(23): 34.16.00.00
	{addr: 0x34170000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(24)'  }, // InstLfoVari:DynaSynth(24): 34.17.00.00
	{addr: 0x34180000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(25)'  }, // InstLfoVari:DynaSynth(25): 34.18.00.00
	{addr: 0x34190000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(26)'  }, // InstLfoVari:DynaSynth(26): 34.19.00.00
	{addr: 0x341a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(27)'  }, // InstLfoVari:DynaSynth(27): 34.1a.00.00
	{addr: 0x341b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(28)'  }, // InstLfoVari:DynaSynth(28): 34.1b.00.00
	{addr: 0x341c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(29)'  }, // InstLfoVari:DynaSynth(29): 34.1c.00.00
	{addr: 0x341d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(30)'  }, // InstLfoVari:DynaSynth(30): 34.1d.00.00
	{addr: 0x341e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(31)'  }, // InstLfoVari:DynaSynth(31): 34.1e.00.00
	{addr: 0x341f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(32)'  }, // InstLfoVari:DynaSynth(32): 34.1f.00.00
	{addr: 0x34200000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(33)'  }, // InstLfoVari:DynaSynth(33): 34.20.00.00
	{addr: 0x34210000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(34)'  }, // InstLfoVari:DynaSynth(34): 34.21.00.00
	{addr: 0x34220000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(35)'  }, // InstLfoVari:DynaSynth(35): 34.22.00.00
	{addr: 0x34230000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(36)'  }, // InstLfoVari:DynaSynth(36): 34.23.00.00
	{addr: 0x34240000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(37)'  }, // InstLfoVari:DynaSynth(37): 34.24.00.00
	{addr: 0x34250000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(38)'  }, // InstLfoVari:DynaSynth(38): 34.25.00.00
	{addr: 0x34260000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(39)'  }, // InstLfoVari:DynaSynth(39): 34.26.00.00
	{addr: 0x34270000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(40)'  }, // InstLfoVari:DynaSynth(40): 34.27.00.00
	{addr: 0x34280000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(41)'  }, // InstLfoVari:DynaSynth(41): 34.28.00.00
	{addr: 0x34290000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(42)'  }, // InstLfoVari:DynaSynth(42): 34.29.00.00
	{addr: 0x342a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(43)'  }, // InstLfoVari:DynaSynth(43): 34.2a.00.00
	{addr: 0x342b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(44)'  }, // InstLfoVari:DynaSynth(44): 34.2b.00.00
	{addr: 0x342c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(45)'  }, // InstLfoVari:DynaSynth(45): 34.2c.00.00
	{addr: 0x342d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(46)'  }, // InstLfoVari:DynaSynth(46): 34.2d.00.00
	{addr: 0x342e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(47)'  }, // InstLfoVari:DynaSynth(47): 34.2e.00.00
	{addr: 0x342f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(48)'  }, // InstLfoVari:DynaSynth(48): 34.2f.00.00
	{addr: 0x34300000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(49)'  }, // InstLfoVari:DynaSynth(49): 34.30.00.00
	{addr: 0x34310000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVari_DynaSynth(50)'  }, // InstLfoVari:DynaSynth(50): 34.31.00.00
	{addr: 0x34320000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(1)'  }, // InstLfoVari:OscSynth(1): 34.32.00.00
	{addr: 0x34330000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(2)'  }, // InstLfoVari:OscSynth(2): 34.33.00.00
	{addr: 0x34340000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(3)'  }, // InstLfoVari:OscSynth(3): 34.34.00.00
	{addr: 0x34350000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(4)'  }, // InstLfoVari:OscSynth(4): 34.35.00.00
	{addr: 0x34360000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(5)'  }, // InstLfoVari:OscSynth(5): 34.36.00.00
	{addr: 0x34370000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(6)'  }, // InstLfoVari:OscSynth(6): 34.37.00.00
	{addr: 0x34380000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(7)'  }, // InstLfoVari:OscSynth(7): 34.38.00.00
	{addr: 0x34390000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(8)'  }, // InstLfoVari:OscSynth(8): 34.39.00.00
	{addr: 0x343a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(9)'  }, // InstLfoVari:OscSynth(9): 34.3a.00.00
	{addr: 0x343b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(10)'  }, // InstLfoVari:OscSynth(10): 34.3b.00.00
	{addr: 0x343c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(11)'  }, // InstLfoVari:OscSynth(11): 34.3c.00.00
	{addr: 0x343d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(12)'  }, // InstLfoVari:OscSynth(12): 34.3d.00.00
	{addr: 0x343e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(13)'  }, // InstLfoVari:OscSynth(13): 34.3e.00.00
	{addr: 0x343f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(14)'  }, // InstLfoVari:OscSynth(14): 34.3f.00.00
	{addr: 0x34400000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(15)'  }, // InstLfoVari:OscSynth(15): 34.40.00.00
	{addr: 0x34410000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(16)'  }, // InstLfoVari:OscSynth(16): 34.41.00.00
	{addr: 0x34420000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(17)'  }, // InstLfoVari:OscSynth(17): 34.42.00.00
	{addr: 0x34430000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(18)'  }, // InstLfoVari:OscSynth(18): 34.43.00.00
	{addr: 0x34440000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(19)'  }, // InstLfoVari:OscSynth(19): 34.44.00.00
	{addr: 0x34450000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(20)'  }, // InstLfoVari:OscSynth(20): 34.45.00.00
	{addr: 0x34460000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(21)'  }, // InstLfoVari:OscSynth(21): 34.46.00.00
	{addr: 0x34470000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(22)'  }, // InstLfoVari:OscSynth(22): 34.47.00.00
	{addr: 0x34480000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(23)'  }, // InstLfoVari:OscSynth(23): 34.48.00.00
	{addr: 0x34490000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(24)'  }, // InstLfoVari:OscSynth(24): 34.49.00.00
	{addr: 0x344a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(25)'  }, // InstLfoVari:OscSynth(25): 34.4a.00.00
	{addr: 0x344b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(26)'  }, // InstLfoVari:OscSynth(26): 34.4b.00.00
	{addr: 0x344c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(27)'  }, // InstLfoVari:OscSynth(27): 34.4c.00.00
	{addr: 0x344d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(28)'  }, // InstLfoVari:OscSynth(28): 34.4d.00.00
	{addr: 0x344e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(29)'  }, // InstLfoVari:OscSynth(29): 34.4e.00.00
	{addr: 0x344f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(30)'  }, // InstLfoVari:OscSynth(30): 34.4f.00.00
	{addr: 0x34500000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(31)'  }, // InstLfoVari:OscSynth(31): 34.50.00.00
	{addr: 0x34510000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(32)'  }, // InstLfoVari:OscSynth(32): 34.51.00.00
	{addr: 0x34520000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(33)'  }, // InstLfoVari:OscSynth(33): 34.52.00.00
	{addr: 0x34530000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(34)'  }, // InstLfoVari:OscSynth(34): 34.53.00.00
	{addr: 0x34540000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(35)'  }, // InstLfoVari:OscSynth(35): 34.54.00.00
	{addr: 0x34550000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(36)'  }, // InstLfoVari:OscSynth(36): 34.55.00.00
	{addr: 0x34560000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(37)'  }, // InstLfoVari:OscSynth(37): 34.56.00.00
	{addr: 0x34570000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(38)'  }, // InstLfoVari:OscSynth(38): 34.57.00.00
	{addr: 0x34580000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(39)'  }, // InstLfoVari:OscSynth(39): 34.58.00.00
	{addr: 0x34590000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(40)'  }, // InstLfoVari:OscSynth(40): 34.59.00.00
	{addr: 0x345a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(41)'  }, // InstLfoVari:OscSynth(41): 34.5a.00.00
	{addr: 0x345b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(42)'  }, // InstLfoVari:OscSynth(42): 34.5b.00.00
	{addr: 0x345c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(43)'  }, // InstLfoVari:OscSynth(43): 34.5c.00.00
	{addr: 0x345d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(44)'  }, // InstLfoVari:OscSynth(44): 34.5d.00.00
	{addr: 0x345e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(45)'  }, // InstLfoVari:OscSynth(45): 34.5e.00.00
	{addr: 0x345f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(46)'  }, // InstLfoVari:OscSynth(46): 34.5f.00.00
	{addr: 0x34600000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(47)'  }, // InstLfoVari:OscSynth(47): 34.60.00.00
	{addr: 0x34610000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(48)'  }, // InstLfoVari:OscSynth(48): 34.61.00.00
	{addr: 0x34620000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(49)'  }, // InstLfoVari:OscSynth(49): 34.62.00.00
	{addr: 0x34630000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVari_OscSynth(50)'  }, // InstLfoVari:OscSynth(50): 34.63.00.00
	{addr: 0x35000000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(1)'  }, // InstSeqVari:DynaSynth(1): 35.00.00.00
	{addr: 0x35010000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(2)'  }, // InstSeqVari:DynaSynth(2): 35.01.00.00
	{addr: 0x35020000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(3)'  }, // InstSeqVari:DynaSynth(3): 35.02.00.00
	{addr: 0x35030000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(4)'  }, // InstSeqVari:DynaSynth(4): 35.03.00.00
	{addr: 0x35040000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(5)'  }, // InstSeqVari:DynaSynth(5): 35.04.00.00
	{addr: 0x35050000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(6)'  }, // InstSeqVari:DynaSynth(6): 35.05.00.00
	{addr: 0x35060000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(7)'  }, // InstSeqVari:DynaSynth(7): 35.06.00.00
	{addr: 0x35070000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(8)'  }, // InstSeqVari:DynaSynth(8): 35.07.00.00
	{addr: 0x35080000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(9)'  }, // InstSeqVari:DynaSynth(9): 35.08.00.00
	{addr: 0x35090000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(10)'  }, // InstSeqVari:DynaSynth(10): 35.09.00.00
	{addr: 0x350a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(11)'  }, // InstSeqVari:DynaSynth(11): 35.0a.00.00
	{addr: 0x350b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(12)'  }, // InstSeqVari:DynaSynth(12): 35.0b.00.00
	{addr: 0x350c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(13)'  }, // InstSeqVari:DynaSynth(13): 35.0c.00.00
	{addr: 0x350d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(14)'  }, // InstSeqVari:DynaSynth(14): 35.0d.00.00
	{addr: 0x350e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(15)'  }, // InstSeqVari:DynaSynth(15): 35.0e.00.00
	{addr: 0x350f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(16)'  }, // InstSeqVari:DynaSynth(16): 35.0f.00.00
	{addr: 0x35100000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(17)'  }, // InstSeqVari:DynaSynth(17): 35.10.00.00
	{addr: 0x35110000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(18)'  }, // InstSeqVari:DynaSynth(18): 35.11.00.00
	{addr: 0x35120000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(19)'  }, // InstSeqVari:DynaSynth(19): 35.12.00.00
	{addr: 0x35130000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(20)'  }, // InstSeqVari:DynaSynth(20): 35.13.00.00
	{addr: 0x35140000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(21)'  }, // InstSeqVari:DynaSynth(21): 35.14.00.00
	{addr: 0x35150000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(22)'  }, // InstSeqVari:DynaSynth(22): 35.15.00.00
	{addr: 0x35160000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(23)'  }, // InstSeqVari:DynaSynth(23): 35.16.00.00
	{addr: 0x35170000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(24)'  }, // InstSeqVari:DynaSynth(24): 35.17.00.00
	{addr: 0x35180000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(25)'  }, // InstSeqVari:DynaSynth(25): 35.18.00.00
	{addr: 0x35190000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(26)'  }, // InstSeqVari:DynaSynth(26): 35.19.00.00
	{addr: 0x351a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(27)'  }, // InstSeqVari:DynaSynth(27): 35.1a.00.00
	{addr: 0x351b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(28)'  }, // InstSeqVari:DynaSynth(28): 35.1b.00.00
	{addr: 0x351c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(29)'  }, // InstSeqVari:DynaSynth(29): 35.1c.00.00
	{addr: 0x351d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(30)'  }, // InstSeqVari:DynaSynth(30): 35.1d.00.00
	{addr: 0x351e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(31)'  }, // InstSeqVari:DynaSynth(31): 35.1e.00.00
	{addr: 0x351f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(32)'  }, // InstSeqVari:DynaSynth(32): 35.1f.00.00
	{addr: 0x35200000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(33)'  }, // InstSeqVari:DynaSynth(33): 35.20.00.00
	{addr: 0x35210000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(34)'  }, // InstSeqVari:DynaSynth(34): 35.21.00.00
	{addr: 0x35220000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(35)'  }, // InstSeqVari:DynaSynth(35): 35.22.00.00
	{addr: 0x35230000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(36)'  }, // InstSeqVari:DynaSynth(36): 35.23.00.00
	{addr: 0x35240000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(37)'  }, // InstSeqVari:DynaSynth(37): 35.24.00.00
	{addr: 0x35250000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(38)'  }, // InstSeqVari:DynaSynth(38): 35.25.00.00
	{addr: 0x35260000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(39)'  }, // InstSeqVari:DynaSynth(39): 35.26.00.00
	{addr: 0x35270000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(40)'  }, // InstSeqVari:DynaSynth(40): 35.27.00.00
	{addr: 0x35280000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(41)'  }, // InstSeqVari:DynaSynth(41): 35.28.00.00
	{addr: 0x35290000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(42)'  }, // InstSeqVari:DynaSynth(42): 35.29.00.00
	{addr: 0x352a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(43)'  }, // InstSeqVari:DynaSynth(43): 35.2a.00.00
	{addr: 0x352b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(44)'  }, // InstSeqVari:DynaSynth(44): 35.2b.00.00
	{addr: 0x352c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(45)'  }, // InstSeqVari:DynaSynth(45): 35.2c.00.00
	{addr: 0x352d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(46)'  }, // InstSeqVari:DynaSynth(46): 35.2d.00.00
	{addr: 0x352e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(47)'  }, // InstSeqVari:DynaSynth(47): 35.2e.00.00
	{addr: 0x352f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(48)'  }, // InstSeqVari:DynaSynth(48): 35.2f.00.00
	{addr: 0x35300000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(49)'  }, // InstSeqVari:DynaSynth(49): 35.30.00.00
	{addr: 0x35310000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVari_DynaSynth(50)'  }, // InstSeqVari:DynaSynth(50): 35.31.00.00
	{addr: 0x36000000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(1)'  }, // EfctVari:Efct(1): 36.00.00.00
	{addr: 0x36010000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(2)'  }, // EfctVari:Efct(2): 36.01.00.00
	{addr: 0x36020000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(3)'  }, // EfctVari:Efct(3): 36.02.00.00
	{addr: 0x36030000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(4)'  }, // EfctVari:Efct(4): 36.03.00.00
	{addr: 0x36040000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(5)'  }, // EfctVari:Efct(5): 36.04.00.00
	{addr: 0x36050000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(6)'  }, // EfctVari:Efct(6): 36.05.00.00
	{addr: 0x36060000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(7)'  }, // EfctVari:Efct(7): 36.06.00.00
	{addr: 0x36070000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(8)'  }, // EfctVari:Efct(8): 36.07.00.00
	{addr: 0x36080000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(9)'  }, // EfctVari:Efct(9): 36.08.00.00
	{addr: 0x36090000,	size: 0,	child: EfctVariItem,	name: 'EfctVari_Efct(10)'  }, // EfctVari:Efct(10): 36.09.00.00
	{addr: 0x38000000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(1)'  }, // InstVariBass:DynaSynth(1): 38.00.00.00
	{addr: 0x38010000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(2)'  }, // InstVariBass:DynaSynth(2): 38.01.00.00
	{addr: 0x38020000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(3)'  }, // InstVariBass:DynaSynth(3): 38.02.00.00
	{addr: 0x38030000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(4)'  }, // InstVariBass:DynaSynth(4): 38.03.00.00
	{addr: 0x38040000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(5)'  }, // InstVariBass:DynaSynth(5): 38.04.00.00
	{addr: 0x38050000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(6)'  }, // InstVariBass:DynaSynth(6): 38.05.00.00
	{addr: 0x38060000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(7)'  }, // InstVariBass:DynaSynth(7): 38.06.00.00
	{addr: 0x38070000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(8)'  }, // InstVariBass:DynaSynth(8): 38.07.00.00
	{addr: 0x38080000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(9)'  }, // InstVariBass:DynaSynth(9): 38.08.00.00
	{addr: 0x38090000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(10)'  }, // InstVariBass:DynaSynth(10): 38.09.00.00
	{addr: 0x380a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(11)'  }, // InstVariBass:DynaSynth(11): 38.0a.00.00
	{addr: 0x380b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(12)'  }, // InstVariBass:DynaSynth(12): 38.0b.00.00
	{addr: 0x380c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(13)'  }, // InstVariBass:DynaSynth(13): 38.0c.00.00
	{addr: 0x380d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(14)'  }, // InstVariBass:DynaSynth(14): 38.0d.00.00
	{addr: 0x380e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(15)'  }, // InstVariBass:DynaSynth(15): 38.0e.00.00
	{addr: 0x380f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(16)'  }, // InstVariBass:DynaSynth(16): 38.0f.00.00
	{addr: 0x38100000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(17)'  }, // InstVariBass:DynaSynth(17): 38.10.00.00
	{addr: 0x38110000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(18)'  }, // InstVariBass:DynaSynth(18): 38.11.00.00
	{addr: 0x38120000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(19)'  }, // InstVariBass:DynaSynth(19): 38.12.00.00
	{addr: 0x38130000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(20)'  }, // InstVariBass:DynaSynth(20): 38.13.00.00
	{addr: 0x38140000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(21)'  }, // InstVariBass:DynaSynth(21): 38.14.00.00
	{addr: 0x38150000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(22)'  }, // InstVariBass:DynaSynth(22): 38.15.00.00
	{addr: 0x38160000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(23)'  }, // InstVariBass:DynaSynth(23): 38.16.00.00
	{addr: 0x38170000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(24)'  }, // InstVariBass:DynaSynth(24): 38.17.00.00
	{addr: 0x38180000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(25)'  }, // InstVariBass:DynaSynth(25): 38.18.00.00
	{addr: 0x38190000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(26)'  }, // InstVariBass:DynaSynth(26): 38.19.00.00
	{addr: 0x381a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(27)'  }, // InstVariBass:DynaSynth(27): 38.1a.00.00
	{addr: 0x381b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(28)'  }, // InstVariBass:DynaSynth(28): 38.1b.00.00
	{addr: 0x381c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(29)'  }, // InstVariBass:DynaSynth(29): 38.1c.00.00
	{addr: 0x381d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(30)'  }, // InstVariBass:DynaSynth(30): 38.1d.00.00
	{addr: 0x381e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(31)'  }, // InstVariBass:DynaSynth(31): 38.1e.00.00
	{addr: 0x381f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(32)'  }, // InstVariBass:DynaSynth(32): 38.1f.00.00
	{addr: 0x38200000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(33)'  }, // InstVariBass:DynaSynth(33): 38.20.00.00
	{addr: 0x38210000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(34)'  }, // InstVariBass:DynaSynth(34): 38.21.00.00
	{addr: 0x38220000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(35)'  }, // InstVariBass:DynaSynth(35): 38.22.00.00
	{addr: 0x38230000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(36)'  }, // InstVariBass:DynaSynth(36): 38.23.00.00
	{addr: 0x38240000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(37)'  }, // InstVariBass:DynaSynth(37): 38.24.00.00
	{addr: 0x38250000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(38)'  }, // InstVariBass:DynaSynth(38): 38.25.00.00
	{addr: 0x38260000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(39)'  }, // InstVariBass:DynaSynth(39): 38.26.00.00
	{addr: 0x38270000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(40)'  }, // InstVariBass:DynaSynth(40): 38.27.00.00
	{addr: 0x38280000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(41)'  }, // InstVariBass:DynaSynth(41): 38.28.00.00
	{addr: 0x38290000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(42)'  }, // InstVariBass:DynaSynth(42): 38.29.00.00
	{addr: 0x382a0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(43)'  }, // InstVariBass:DynaSynth(43): 38.2a.00.00
	{addr: 0x382b0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(44)'  }, // InstVariBass:DynaSynth(44): 38.2b.00.00
	{addr: 0x382c0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(45)'  }, // InstVariBass:DynaSynth(45): 38.2c.00.00
	{addr: 0x382d0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(46)'  }, // InstVariBass:DynaSynth(46): 38.2d.00.00
	{addr: 0x382e0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(47)'  }, // InstVariBass:DynaSynth(47): 38.2e.00.00
	{addr: 0x382f0000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(48)'  }, // InstVariBass:DynaSynth(48): 38.2f.00.00
	{addr: 0x38300000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(49)'  }, // InstVariBass:DynaSynth(49): 38.30.00.00
	{addr: 0x38310000,	size: 0,	child: InstVariDynaSynth,	name: 'InstVariBass_DynaSynth(50)'  }, // InstVariBass:DynaSynth(50): 38.31.00.00
	{addr: 0x38320000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(1)'  }, // InstVariBass:OscSynth(1): 38.32.00.00
	{addr: 0x38330000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(2)'  }, // InstVariBass:OscSynth(2): 38.33.00.00
	{addr: 0x38340000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(3)'  }, // InstVariBass:OscSynth(3): 38.34.00.00
	{addr: 0x38350000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(4)'  }, // InstVariBass:OscSynth(4): 38.35.00.00
	{addr: 0x38360000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(5)'  }, // InstVariBass:OscSynth(5): 38.36.00.00
	{addr: 0x38370000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(6)'  }, // InstVariBass:OscSynth(6): 38.37.00.00
	{addr: 0x38380000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(7)'  }, // InstVariBass:OscSynth(7): 38.38.00.00
	{addr: 0x38390000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(8)'  }, // InstVariBass:OscSynth(8): 38.39.00.00
	{addr: 0x383a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(9)'  }, // InstVariBass:OscSynth(9): 38.3a.00.00
	{addr: 0x383b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(10)'  }, // InstVariBass:OscSynth(10): 38.3b.00.00
	{addr: 0x383c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(11)'  }, // InstVariBass:OscSynth(11): 38.3c.00.00
	{addr: 0x383d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(12)'  }, // InstVariBass:OscSynth(12): 38.3d.00.00
	{addr: 0x383e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(13)'  }, // InstVariBass:OscSynth(13): 38.3e.00.00
	{addr: 0x383f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(14)'  }, // InstVariBass:OscSynth(14): 38.3f.00.00
	{addr: 0x38400000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(15)'  }, // InstVariBass:OscSynth(15): 38.40.00.00
	{addr: 0x38410000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(16)'  }, // InstVariBass:OscSynth(16): 38.41.00.00
	{addr: 0x38420000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(17)'  }, // InstVariBass:OscSynth(17): 38.42.00.00
	{addr: 0x38430000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(18)'  }, // InstVariBass:OscSynth(18): 38.43.00.00
	{addr: 0x38440000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(19)'  }, // InstVariBass:OscSynth(19): 38.44.00.00
	{addr: 0x38450000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(20)'  }, // InstVariBass:OscSynth(20): 38.45.00.00
	{addr: 0x38460000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(21)'  }, // InstVariBass:OscSynth(21): 38.46.00.00
	{addr: 0x38470000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(22)'  }, // InstVariBass:OscSynth(22): 38.47.00.00
	{addr: 0x38480000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(23)'  }, // InstVariBass:OscSynth(23): 38.48.00.00
	{addr: 0x38490000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(24)'  }, // InstVariBass:OscSynth(24): 38.49.00.00
	{addr: 0x384a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(25)'  }, // InstVariBass:OscSynth(25): 38.4a.00.00
	{addr: 0x384b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(26)'  }, // InstVariBass:OscSynth(26): 38.4b.00.00
	{addr: 0x384c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(27)'  }, // InstVariBass:OscSynth(27): 38.4c.00.00
	{addr: 0x384d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(28)'  }, // InstVariBass:OscSynth(28): 38.4d.00.00
	{addr: 0x384e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(29)'  }, // InstVariBass:OscSynth(29): 38.4e.00.00
	{addr: 0x384f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(30)'  }, // InstVariBass:OscSynth(30): 38.4f.00.00
	{addr: 0x38500000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(31)'  }, // InstVariBass:OscSynth(31): 38.50.00.00
	{addr: 0x38510000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(32)'  }, // InstVariBass:OscSynth(32): 38.51.00.00
	{addr: 0x38520000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(33)'  }, // InstVariBass:OscSynth(33): 38.52.00.00
	{addr: 0x38530000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(34)'  }, // InstVariBass:OscSynth(34): 38.53.00.00
	{addr: 0x38540000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(35)'  }, // InstVariBass:OscSynth(35): 38.54.00.00
	{addr: 0x38550000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(36)'  }, // InstVariBass:OscSynth(36): 38.55.00.00
	{addr: 0x38560000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(37)'  }, // InstVariBass:OscSynth(37): 38.56.00.00
	{addr: 0x38570000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(38)'  }, // InstVariBass:OscSynth(38): 38.57.00.00
	{addr: 0x38580000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(39)'  }, // InstVariBass:OscSynth(39): 38.58.00.00
	{addr: 0x38590000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(40)'  }, // InstVariBass:OscSynth(40): 38.59.00.00
	{addr: 0x385a0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(41)'  }, // InstVariBass:OscSynth(41): 38.5a.00.00
	{addr: 0x385b0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(42)'  }, // InstVariBass:OscSynth(42): 38.5b.00.00
	{addr: 0x385c0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(43)'  }, // InstVariBass:OscSynth(43): 38.5c.00.00
	{addr: 0x385d0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(44)'  }, // InstVariBass:OscSynth(44): 38.5d.00.00
	{addr: 0x385e0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(45)'  }, // InstVariBass:OscSynth(45): 38.5e.00.00
	{addr: 0x385f0000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(46)'  }, // InstVariBass:OscSynth(46): 38.5f.00.00
	{addr: 0x38600000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(47)'  }, // InstVariBass:OscSynth(47): 38.60.00.00
	{addr: 0x38610000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(48)'  }, // InstVariBass:OscSynth(48): 38.61.00.00
	{addr: 0x38620000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(49)'  }, // InstVariBass:OscSynth(49): 38.62.00.00
	{addr: 0x38630000,	size: 0,	child: InstVariOscSynth,	name: 'InstVariBass_OscSynth(50)'  }, // InstVariBass:OscSynth(50): 38.63.00.00
	{addr: 0x38640000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(1)'  }, // InstVariBass:AnalogGr(1): 38.64.00.00
	{addr: 0x38650000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(2)'  }, // InstVariBass:AnalogGr(2): 38.65.00.00
	{addr: 0x38660000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(3)'  }, // InstVariBass:AnalogGr(3): 38.66.00.00
	{addr: 0x38670000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(4)'  }, // InstVariBass:AnalogGr(4): 38.67.00.00
	{addr: 0x38680000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(5)'  }, // InstVariBass:AnalogGr(5): 38.68.00.00
	{addr: 0x38690000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(6)'  }, // InstVariBass:AnalogGr(6): 38.69.00.00
	{addr: 0x386a0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(7)'  }, // InstVariBass:AnalogGr(7): 38.6a.00.00
	{addr: 0x386b0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(8)'  }, // InstVariBass:AnalogGr(8): 38.6b.00.00
	{addr: 0x386c0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(9)'  }, // InstVariBass:AnalogGr(9): 38.6c.00.00
	{addr: 0x386d0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(10)'  }, // InstVariBass:AnalogGr(10): 38.6d.00.00
	{addr: 0x386e0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(11)'  }, // InstVariBass:AnalogGr(11): 38.6e.00.00
	{addr: 0x386f0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(12)'  }, // InstVariBass:AnalogGr(12): 38.6f.00.00
	{addr: 0x38700000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(13)'  }, // InstVariBass:AnalogGr(13): 38.70.00.00
	{addr: 0x38710000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(14)'  }, // InstVariBass:AnalogGr(14): 38.71.00.00
	{addr: 0x38720000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(15)'  }, // InstVariBass:AnalogGr(15): 38.72.00.00
	{addr: 0x38730000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(16)'  }, // InstVariBass:AnalogGr(16): 38.73.00.00
	{addr: 0x38740000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(17)'  }, // InstVariBass:AnalogGr(17): 38.74.00.00
	{addr: 0x38750000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(18)'  }, // InstVariBass:AnalogGr(18): 38.75.00.00
	{addr: 0x38760000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(19)'  }, // InstVariBass:AnalogGr(19): 38.76.00.00
	{addr: 0x38770000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(20)'  }, // InstVariBass:AnalogGr(20): 38.77.00.00
	{addr: 0x38780000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(21)'  }, // InstVariBass:AnalogGr(21): 38.78.00.00
	{addr: 0x38790000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(22)'  }, // InstVariBass:AnalogGr(22): 38.79.00.00
	{addr: 0x387a0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(23)'  }, // InstVariBass:AnalogGr(23): 38.7a.00.00
	{addr: 0x387b0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(24)'  }, // InstVariBass:AnalogGr(24): 38.7b.00.00
	{addr: 0x387c0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(25)'  }, // InstVariBass:AnalogGr(25): 38.7c.00.00
	{addr: 0x387d0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(26)'  }, // InstVariBass:AnalogGr(26): 38.7d.00.00
	{addr: 0x387e0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(27)'  }, // InstVariBass:AnalogGr(27): 38.7e.00.00
	{addr: 0x387f0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(28)'  }, // InstVariBass:AnalogGr(28): 38.7f.00.00
	{addr: 0x39000000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(29)'  }, // InstVariBass:AnalogGr(29): 39.00.00.00
	{addr: 0x39010000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(30)'  }, // InstVariBass:AnalogGr(30): 39.01.00.00
	{addr: 0x39020000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(31)'  }, // InstVariBass:AnalogGr(31): 39.02.00.00
	{addr: 0x39030000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(32)'  }, // InstVariBass:AnalogGr(32): 39.03.00.00
	{addr: 0x39040000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(33)'  }, // InstVariBass:AnalogGr(33): 39.04.00.00
	{addr: 0x39050000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(34)'  }, // InstVariBass:AnalogGr(34): 39.05.00.00
	{addr: 0x39060000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(35)'  }, // InstVariBass:AnalogGr(35): 39.06.00.00
	{addr: 0x39070000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(36)'  }, // InstVariBass:AnalogGr(36): 39.07.00.00
	{addr: 0x39080000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(37)'  }, // InstVariBass:AnalogGr(37): 39.08.00.00
	{addr: 0x39090000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(38)'  }, // InstVariBass:AnalogGr(38): 39.09.00.00
	{addr: 0x390a0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(39)'  }, // InstVariBass:AnalogGr(39): 39.0a.00.00
	{addr: 0x390b0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(40)'  }, // InstVariBass:AnalogGr(40): 39.0b.00.00
	{addr: 0x390c0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(41)'  }, // InstVariBass:AnalogGr(41): 39.0c.00.00
	{addr: 0x390d0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(42)'  }, // InstVariBass:AnalogGr(42): 39.0d.00.00
	{addr: 0x390e0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(43)'  }, // InstVariBass:AnalogGr(43): 39.0e.00.00
	{addr: 0x390f0000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(44)'  }, // InstVariBass:AnalogGr(44): 39.0f.00.00
	{addr: 0x39100000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(45)'  }, // InstVariBass:AnalogGr(45): 39.10.00.00
	{addr: 0x39110000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(46)'  }, // InstVariBass:AnalogGr(46): 39.11.00.00
	{addr: 0x39120000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(47)'  }, // InstVariBass:AnalogGr(47): 39.12.00.00
	{addr: 0x39130000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(48)'  }, // InstVariBass:AnalogGr(48): 39.13.00.00
	{addr: 0x39140000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(49)'  }, // InstVariBass:AnalogGr(49): 39.14.00.00
	{addr: 0x39150000,	size: 0,	child: InstVariGr300,	name: 'InstVariBass_AnalogGr(50)'  }, // InstVariBass:AnalogGr(50): 39.15.00.00
	{addr: 0x39160000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(1)'  }, // InstVariBass:EBass(1): 39.16.00.00
	{addr: 0x39170000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(2)'  }, // InstVariBass:EBass(2): 39.17.00.00
	{addr: 0x39180000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(3)'  }, // InstVariBass:EBass(3): 39.18.00.00
	{addr: 0x39190000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(4)'  }, // InstVariBass:EBass(4): 39.19.00.00
	{addr: 0x391a0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(5)'  }, // InstVariBass:EBass(5): 39.1a.00.00
	{addr: 0x391b0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(6)'  }, // InstVariBass:EBass(6): 39.1b.00.00
	{addr: 0x391c0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(7)'  }, // InstVariBass:EBass(7): 39.1c.00.00
	{addr: 0x391d0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(8)'  }, // InstVariBass:EBass(8): 39.1d.00.00
	{addr: 0x391e0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(9)'  }, // InstVariBass:EBass(9): 39.1e.00.00
	{addr: 0x391f0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(10)'  }, // InstVariBass:EBass(10): 39.1f.00.00
	{addr: 0x39200000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(11)'  }, // InstVariBass:EBass(11): 39.20.00.00
	{addr: 0x39210000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(12)'  }, // InstVariBass:EBass(12): 39.21.00.00
	{addr: 0x39220000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(13)'  }, // InstVariBass:EBass(13): 39.22.00.00
	{addr: 0x39230000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(14)'  }, // InstVariBass:EBass(14): 39.23.00.00
	{addr: 0x39240000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(15)'  }, // InstVariBass:EBass(15): 39.24.00.00
	{addr: 0x39250000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(16)'  }, // InstVariBass:EBass(16): 39.25.00.00
	{addr: 0x39260000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(17)'  }, // InstVariBass:EBass(17): 39.26.00.00
	{addr: 0x39270000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(18)'  }, // InstVariBass:EBass(18): 39.27.00.00
	{addr: 0x39280000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(19)'  }, // InstVariBass:EBass(19): 39.28.00.00
	{addr: 0x39290000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(20)'  }, // InstVariBass:EBass(20): 39.29.00.00
	{addr: 0x392a0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(21)'  }, // InstVariBass:EBass(21): 39.2a.00.00
	{addr: 0x392b0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(22)'  }, // InstVariBass:EBass(22): 39.2b.00.00
	{addr: 0x392c0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(23)'  }, // InstVariBass:EBass(23): 39.2c.00.00
	{addr: 0x392d0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(24)'  }, // InstVariBass:EBass(24): 39.2d.00.00
	{addr: 0x392e0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(25)'  }, // InstVariBass:EBass(25): 39.2e.00.00
	{addr: 0x392f0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(26)'  }, // InstVariBass:EBass(26): 39.2f.00.00
	{addr: 0x39300000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(27)'  }, // InstVariBass:EBass(27): 39.30.00.00
	{addr: 0x39310000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(28)'  }, // InstVariBass:EBass(28): 39.31.00.00
	{addr: 0x39320000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(29)'  }, // InstVariBass:EBass(29): 39.32.00.00
	{addr: 0x39330000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(30)'  }, // InstVariBass:EBass(30): 39.33.00.00
	{addr: 0x39340000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(31)'  }, // InstVariBass:EBass(31): 39.34.00.00
	{addr: 0x39350000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(32)'  }, // InstVariBass:EBass(32): 39.35.00.00
	{addr: 0x39360000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(33)'  }, // InstVariBass:EBass(33): 39.36.00.00
	{addr: 0x39370000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(34)'  }, // InstVariBass:EBass(34): 39.37.00.00
	{addr: 0x39380000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(35)'  }, // InstVariBass:EBass(35): 39.38.00.00
	{addr: 0x39390000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(36)'  }, // InstVariBass:EBass(36): 39.39.00.00
	{addr: 0x393a0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(37)'  }, // InstVariBass:EBass(37): 39.3a.00.00
	{addr: 0x393b0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(38)'  }, // InstVariBass:EBass(38): 39.3b.00.00
	{addr: 0x393c0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(39)'  }, // InstVariBass:EBass(39): 39.3c.00.00
	{addr: 0x393d0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(40)'  }, // InstVariBass:EBass(40): 39.3d.00.00
	{addr: 0x393e0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(41)'  }, // InstVariBass:EBass(41): 39.3e.00.00
	{addr: 0x393f0000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(42)'  }, // InstVariBass:EBass(42): 39.3f.00.00
	{addr: 0x39400000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(43)'  }, // InstVariBass:EBass(43): 39.40.00.00
	{addr: 0x39410000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(44)'  }, // InstVariBass:EBass(44): 39.41.00.00
	{addr: 0x39420000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(45)'  }, // InstVariBass:EBass(45): 39.42.00.00
	{addr: 0x39430000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(46)'  }, // InstVariBass:EBass(46): 39.43.00.00
	{addr: 0x39440000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(47)'  }, // InstVariBass:EBass(47): 39.44.00.00
	{addr: 0x39450000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(48)'  }, // InstVariBass:EBass(48): 39.45.00.00
	{addr: 0x39460000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(49)'  }, // InstVariBass:EBass(49): 39.46.00.00
	{addr: 0x39470000,	size: 0,	child: InstVariEBassBass,	name: 'InstVariBass_EBass(50)'  }, // InstVariBass:EBass(50): 39.47.00.00
	{addr: 0x39480000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(1)'  }, // InstVariBass:AcBass(1): 39.48.00.00
	{addr: 0x39490000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(2)'  }, // InstVariBass:AcBass(2): 39.49.00.00
	{addr: 0x394a0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(3)'  }, // InstVariBass:AcBass(3): 39.4a.00.00
	{addr: 0x394b0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(4)'  }, // InstVariBass:AcBass(4): 39.4b.00.00
	{addr: 0x394c0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(5)'  }, // InstVariBass:AcBass(5): 39.4c.00.00
	{addr: 0x394d0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(6)'  }, // InstVariBass:AcBass(6): 39.4d.00.00
	{addr: 0x394e0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(7)'  }, // InstVariBass:AcBass(7): 39.4e.00.00
	{addr: 0x394f0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(8)'  }, // InstVariBass:AcBass(8): 39.4f.00.00
	{addr: 0x39500000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(9)'  }, // InstVariBass:AcBass(9): 39.50.00.00
	{addr: 0x39510000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(10)'  }, // InstVariBass:AcBass(10): 39.51.00.00
	{addr: 0x39520000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(11)'  }, // InstVariBass:AcBass(11): 39.52.00.00
	{addr: 0x39530000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(12)'  }, // InstVariBass:AcBass(12): 39.53.00.00
	{addr: 0x39540000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(13)'  }, // InstVariBass:AcBass(13): 39.54.00.00
	{addr: 0x39550000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(14)'  }, // InstVariBass:AcBass(14): 39.55.00.00
	{addr: 0x39560000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(15)'  }, // InstVariBass:AcBass(15): 39.56.00.00
	{addr: 0x39570000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(16)'  }, // InstVariBass:AcBass(16): 39.57.00.00
	{addr: 0x39580000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(17)'  }, // InstVariBass:AcBass(17): 39.58.00.00
	{addr: 0x39590000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(18)'  }, // InstVariBass:AcBass(18): 39.59.00.00
	{addr: 0x395a0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(19)'  }, // InstVariBass:AcBass(19): 39.5a.00.00
	{addr: 0x395b0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(20)'  }, // InstVariBass:AcBass(20): 39.5b.00.00
	{addr: 0x395c0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(21)'  }, // InstVariBass:AcBass(21): 39.5c.00.00
	{addr: 0x395d0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(22)'  }, // InstVariBass:AcBass(22): 39.5d.00.00
	{addr: 0x395e0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(23)'  }, // InstVariBass:AcBass(23): 39.5e.00.00
	{addr: 0x395f0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(24)'  }, // InstVariBass:AcBass(24): 39.5f.00.00
	{addr: 0x39600000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(25)'  }, // InstVariBass:AcBass(25): 39.60.00.00
	{addr: 0x39610000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(26)'  }, // InstVariBass:AcBass(26): 39.61.00.00
	{addr: 0x39620000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(27)'  }, // InstVariBass:AcBass(27): 39.62.00.00
	{addr: 0x39630000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(28)'  }, // InstVariBass:AcBass(28): 39.63.00.00
	{addr: 0x39640000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(29)'  }, // InstVariBass:AcBass(29): 39.64.00.00
	{addr: 0x39650000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(30)'  }, // InstVariBass:AcBass(30): 39.65.00.00
	{addr: 0x39660000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(31)'  }, // InstVariBass:AcBass(31): 39.66.00.00
	{addr: 0x39670000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(32)'  }, // InstVariBass:AcBass(32): 39.67.00.00
	{addr: 0x39680000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(33)'  }, // InstVariBass:AcBass(33): 39.68.00.00
	{addr: 0x39690000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(34)'  }, // InstVariBass:AcBass(34): 39.69.00.00
	{addr: 0x396a0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(35)'  }, // InstVariBass:AcBass(35): 39.6a.00.00
	{addr: 0x396b0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(36)'  }, // InstVariBass:AcBass(36): 39.6b.00.00
	{addr: 0x396c0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(37)'  }, // InstVariBass:AcBass(37): 39.6c.00.00
	{addr: 0x396d0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(38)'  }, // InstVariBass:AcBass(38): 39.6d.00.00
	{addr: 0x396e0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(39)'  }, // InstVariBass:AcBass(39): 39.6e.00.00
	{addr: 0x396f0000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(40)'  }, // InstVariBass:AcBass(40): 39.6f.00.00
	{addr: 0x39700000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(41)'  }, // InstVariBass:AcBass(41): 39.70.00.00
	{addr: 0x39710000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(42)'  }, // InstVariBass:AcBass(42): 39.71.00.00
	{addr: 0x39720000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(43)'  }, // InstVariBass:AcBass(43): 39.72.00.00
	{addr: 0x39730000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(44)'  }, // InstVariBass:AcBass(44): 39.73.00.00
	{addr: 0x39740000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(45)'  }, // InstVariBass:AcBass(45): 39.74.00.00
	{addr: 0x39750000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(46)'  }, // InstVariBass:AcBass(46): 39.75.00.00
	{addr: 0x39760000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(47)'  }, // InstVariBass:AcBass(47): 39.76.00.00
	{addr: 0x39770000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(48)'  }, // InstVariBass:AcBass(48): 39.77.00.00
	{addr: 0x39780000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(49)'  }, // InstVariBass:AcBass(49): 39.78.00.00
	{addr: 0x39790000,	size: 0,	child: InstVariAcBass,	name: 'InstVariBass_AcBass(50)'  }, // InstVariBass:AcBass(50): 39.79.00.00
	{addr: 0x397a0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(1)'  }, // InstVariBass:EGtr(1): 39.7a.00.00
	{addr: 0x397b0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(2)'  }, // InstVariBass:EGtr(2): 39.7b.00.00
	{addr: 0x397c0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(3)'  }, // InstVariBass:EGtr(3): 39.7c.00.00
	{addr: 0x397d0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(4)'  }, // InstVariBass:EGtr(4): 39.7d.00.00
	{addr: 0x397e0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(5)'  }, // InstVariBass:EGtr(5): 39.7e.00.00
	{addr: 0x397f0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(6)'  }, // InstVariBass:EGtr(6): 39.7f.00.00
	{addr: 0x3a000000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(7)'  }, // InstVariBass:EGtr(7): 3a.00.00.00
	{addr: 0x3a010000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(8)'  }, // InstVariBass:EGtr(8): 3a.01.00.00
	{addr: 0x3a020000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(9)'  }, // InstVariBass:EGtr(9): 3a.02.00.00
	{addr: 0x3a030000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(10)'  }, // InstVariBass:EGtr(10): 3a.03.00.00
	{addr: 0x3a040000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(11)'  }, // InstVariBass:EGtr(11): 3a.04.00.00
	{addr: 0x3a050000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(12)'  }, // InstVariBass:EGtr(12): 3a.05.00.00
	{addr: 0x3a060000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(13)'  }, // InstVariBass:EGtr(13): 3a.06.00.00
	{addr: 0x3a070000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(14)'  }, // InstVariBass:EGtr(14): 3a.07.00.00
	{addr: 0x3a080000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(15)'  }, // InstVariBass:EGtr(15): 3a.08.00.00
	{addr: 0x3a090000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(16)'  }, // InstVariBass:EGtr(16): 3a.09.00.00
	{addr: 0x3a0a0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(17)'  }, // InstVariBass:EGtr(17): 3a.0a.00.00
	{addr: 0x3a0b0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(18)'  }, // InstVariBass:EGtr(18): 3a.0b.00.00
	{addr: 0x3a0c0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(19)'  }, // InstVariBass:EGtr(19): 3a.0c.00.00
	{addr: 0x3a0d0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(20)'  }, // InstVariBass:EGtr(20): 3a.0d.00.00
	{addr: 0x3a0e0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(21)'  }, // InstVariBass:EGtr(21): 3a.0e.00.00
	{addr: 0x3a0f0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(22)'  }, // InstVariBass:EGtr(22): 3a.0f.00.00
	{addr: 0x3a100000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(23)'  }, // InstVariBass:EGtr(23): 3a.10.00.00
	{addr: 0x3a110000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(24)'  }, // InstVariBass:EGtr(24): 3a.11.00.00
	{addr: 0x3a120000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(25)'  }, // InstVariBass:EGtr(25): 3a.12.00.00
	{addr: 0x3a130000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(26)'  }, // InstVariBass:EGtr(26): 3a.13.00.00
	{addr: 0x3a140000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(27)'  }, // InstVariBass:EGtr(27): 3a.14.00.00
	{addr: 0x3a150000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(28)'  }, // InstVariBass:EGtr(28): 3a.15.00.00
	{addr: 0x3a160000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(29)'  }, // InstVariBass:EGtr(29): 3a.16.00.00
	{addr: 0x3a170000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(30)'  }, // InstVariBass:EGtr(30): 3a.17.00.00
	{addr: 0x3a180000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(31)'  }, // InstVariBass:EGtr(31): 3a.18.00.00
	{addr: 0x3a190000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(32)'  }, // InstVariBass:EGtr(32): 3a.19.00.00
	{addr: 0x3a1a0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(33)'  }, // InstVariBass:EGtr(33): 3a.1a.00.00
	{addr: 0x3a1b0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(34)'  }, // InstVariBass:EGtr(34): 3a.1b.00.00
	{addr: 0x3a1c0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(35)'  }, // InstVariBass:EGtr(35): 3a.1c.00.00
	{addr: 0x3a1d0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(36)'  }, // InstVariBass:EGtr(36): 3a.1d.00.00
	{addr: 0x3a1e0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(37)'  }, // InstVariBass:EGtr(37): 3a.1e.00.00
	{addr: 0x3a1f0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(38)'  }, // InstVariBass:EGtr(38): 3a.1f.00.00
	{addr: 0x3a200000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(39)'  }, // InstVariBass:EGtr(39): 3a.20.00.00
	{addr: 0x3a210000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(40)'  }, // InstVariBass:EGtr(40): 3a.21.00.00
	{addr: 0x3a220000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(41)'  }, // InstVariBass:EGtr(41): 3a.22.00.00
	{addr: 0x3a230000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(42)'  }, // InstVariBass:EGtr(42): 3a.23.00.00
	{addr: 0x3a240000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(43)'  }, // InstVariBass:EGtr(43): 3a.24.00.00
	{addr: 0x3a250000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(44)'  }, // InstVariBass:EGtr(44): 3a.25.00.00
	{addr: 0x3a260000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(45)'  }, // InstVariBass:EGtr(45): 3a.26.00.00
	{addr: 0x3a270000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(46)'  }, // InstVariBass:EGtr(46): 3a.27.00.00
	{addr: 0x3a280000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(47)'  }, // InstVariBass:EGtr(47): 3a.28.00.00
	{addr: 0x3a290000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(48)'  }, // InstVariBass:EGtr(48): 3a.29.00.00
	{addr: 0x3a2a0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(49)'  }, // InstVariBass:EGtr(49): 3a.2a.00.00
	{addr: 0x3a2b0000,	size: 0,	child: InstVariEGtrBass,	name: 'InstVariBass_EGtr(50)'  }, // InstVariBass:EGtr(50): 3a.2b.00.00
	{addr: 0x3a2c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(1)'  }, // InstVariBass:PolyFx(1): 3a.2c.00.00
	{addr: 0x3a2d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(2)'  }, // InstVariBass:PolyFx(2): 3a.2d.00.00
	{addr: 0x3a2e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(3)'  }, // InstVariBass:PolyFx(3): 3a.2e.00.00
	{addr: 0x3a2f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(4)'  }, // InstVariBass:PolyFx(4): 3a.2f.00.00
	{addr: 0x3a300000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(5)'  }, // InstVariBass:PolyFx(5): 3a.30.00.00
	{addr: 0x3a310000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(6)'  }, // InstVariBass:PolyFx(6): 3a.31.00.00
	{addr: 0x3a320000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(7)'  }, // InstVariBass:PolyFx(7): 3a.32.00.00
	{addr: 0x3a330000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(8)'  }, // InstVariBass:PolyFx(8): 3a.33.00.00
	{addr: 0x3a340000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(9)'  }, // InstVariBass:PolyFx(9): 3a.34.00.00
	{addr: 0x3a350000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(10)'  }, // InstVariBass:PolyFx(10): 3a.35.00.00
	{addr: 0x3a360000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(11)'  }, // InstVariBass:PolyFx(11): 3a.36.00.00
	{addr: 0x3a370000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(12)'  }, // InstVariBass:PolyFx(12): 3a.37.00.00
	{addr: 0x3a380000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(13)'  }, // InstVariBass:PolyFx(13): 3a.38.00.00
	{addr: 0x3a390000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(14)'  }, // InstVariBass:PolyFx(14): 3a.39.00.00
	{addr: 0x3a3a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(15)'  }, // InstVariBass:PolyFx(15): 3a.3a.00.00
	{addr: 0x3a3b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(16)'  }, // InstVariBass:PolyFx(16): 3a.3b.00.00
	{addr: 0x3a3c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(17)'  }, // InstVariBass:PolyFx(17): 3a.3c.00.00
	{addr: 0x3a3d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(18)'  }, // InstVariBass:PolyFx(18): 3a.3d.00.00
	{addr: 0x3a3e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(19)'  }, // InstVariBass:PolyFx(19): 3a.3e.00.00
	{addr: 0x3a3f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(20)'  }, // InstVariBass:PolyFx(20): 3a.3f.00.00
	{addr: 0x3a400000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(21)'  }, // InstVariBass:PolyFx(21): 3a.40.00.00
	{addr: 0x3a410000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(22)'  }, // InstVariBass:PolyFx(22): 3a.41.00.00
	{addr: 0x3a420000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(23)'  }, // InstVariBass:PolyFx(23): 3a.42.00.00
	{addr: 0x3a430000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(24)'  }, // InstVariBass:PolyFx(24): 3a.43.00.00
	{addr: 0x3a440000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(25)'  }, // InstVariBass:PolyFx(25): 3a.44.00.00
	{addr: 0x3a450000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(26)'  }, // InstVariBass:PolyFx(26): 3a.45.00.00
	{addr: 0x3a460000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(27)'  }, // InstVariBass:PolyFx(27): 3a.46.00.00
	{addr: 0x3a470000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(28)'  }, // InstVariBass:PolyFx(28): 3a.47.00.00
	{addr: 0x3a480000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(29)'  }, // InstVariBass:PolyFx(29): 3a.48.00.00
	{addr: 0x3a490000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(30)'  }, // InstVariBass:PolyFx(30): 3a.49.00.00
	{addr: 0x3a4a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(31)'  }, // InstVariBass:PolyFx(31): 3a.4a.00.00
	{addr: 0x3a4b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(32)'  }, // InstVariBass:PolyFx(32): 3a.4b.00.00
	{addr: 0x3a4c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(33)'  }, // InstVariBass:PolyFx(33): 3a.4c.00.00
	{addr: 0x3a4d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(34)'  }, // InstVariBass:PolyFx(34): 3a.4d.00.00
	{addr: 0x3a4e0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(35)'  }, // InstVariBass:PolyFx(35): 3a.4e.00.00
	{addr: 0x3a4f0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(36)'  }, // InstVariBass:PolyFx(36): 3a.4f.00.00
	{addr: 0x3a500000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(37)'  }, // InstVariBass:PolyFx(37): 3a.50.00.00
	{addr: 0x3a510000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(38)'  }, // InstVariBass:PolyFx(38): 3a.51.00.00
	{addr: 0x3a520000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(39)'  }, // InstVariBass:PolyFx(39): 3a.52.00.00
	{addr: 0x3a530000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(40)'  }, // InstVariBass:PolyFx(40): 3a.53.00.00
	{addr: 0x3a540000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(41)'  }, // InstVariBass:PolyFx(41): 3a.54.00.00
	{addr: 0x3a550000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(42)'  }, // InstVariBass:PolyFx(42): 3a.55.00.00
	{addr: 0x3a560000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(43)'  }, // InstVariBass:PolyFx(43): 3a.56.00.00
	{addr: 0x3a570000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(44)'  }, // InstVariBass:PolyFx(44): 3a.57.00.00
	{addr: 0x3a580000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(45)'  }, // InstVariBass:PolyFx(45): 3a.58.00.00
	{addr: 0x3a590000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(46)'  }, // InstVariBass:PolyFx(46): 3a.59.00.00
	{addr: 0x3a5a0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(47)'  }, // InstVariBass:PolyFx(47): 3a.5a.00.00
	{addr: 0x3a5b0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(48)'  }, // InstVariBass:PolyFx(48): 3a.5b.00.00
	{addr: 0x3a5c0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(49)'  }, // InstVariBass:PolyFx(49): 3a.5c.00.00
	{addr: 0x3a5d0000,	size: 0,	child: InstVariPolyFx,	name: 'InstVariBass_PolyFx(50)'  }, // InstVariBass:PolyFx(50): 3a.5d.00.00
	{addr: 0x3b000000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(1)'  }, // InstLfoVariBass:DynaSynth(1): 3b.00.00.00
	{addr: 0x3b010000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(2)'  }, // InstLfoVariBass:DynaSynth(2): 3b.01.00.00
	{addr: 0x3b020000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(3)'  }, // InstLfoVariBass:DynaSynth(3): 3b.02.00.00
	{addr: 0x3b030000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(4)'  }, // InstLfoVariBass:DynaSynth(4): 3b.03.00.00
	{addr: 0x3b040000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(5)'  }, // InstLfoVariBass:DynaSynth(5): 3b.04.00.00
	{addr: 0x3b050000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(6)'  }, // InstLfoVariBass:DynaSynth(6): 3b.05.00.00
	{addr: 0x3b060000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(7)'  }, // InstLfoVariBass:DynaSynth(7): 3b.06.00.00
	{addr: 0x3b070000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(8)'  }, // InstLfoVariBass:DynaSynth(8): 3b.07.00.00
	{addr: 0x3b080000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(9)'  }, // InstLfoVariBass:DynaSynth(9): 3b.08.00.00
	{addr: 0x3b090000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(10)'  }, // InstLfoVariBass:DynaSynth(10): 3b.09.00.00
	{addr: 0x3b0a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(11)'  }, // InstLfoVariBass:DynaSynth(11): 3b.0a.00.00
	{addr: 0x3b0b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(12)'  }, // InstLfoVariBass:DynaSynth(12): 3b.0b.00.00
	{addr: 0x3b0c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(13)'  }, // InstLfoVariBass:DynaSynth(13): 3b.0c.00.00
	{addr: 0x3b0d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(14)'  }, // InstLfoVariBass:DynaSynth(14): 3b.0d.00.00
	{addr: 0x3b0e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(15)'  }, // InstLfoVariBass:DynaSynth(15): 3b.0e.00.00
	{addr: 0x3b0f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(16)'  }, // InstLfoVariBass:DynaSynth(16): 3b.0f.00.00
	{addr: 0x3b100000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(17)'  }, // InstLfoVariBass:DynaSynth(17): 3b.10.00.00
	{addr: 0x3b110000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(18)'  }, // InstLfoVariBass:DynaSynth(18): 3b.11.00.00
	{addr: 0x3b120000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(19)'  }, // InstLfoVariBass:DynaSynth(19): 3b.12.00.00
	{addr: 0x3b130000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(20)'  }, // InstLfoVariBass:DynaSynth(20): 3b.13.00.00
	{addr: 0x3b140000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(21)'  }, // InstLfoVariBass:DynaSynth(21): 3b.14.00.00
	{addr: 0x3b150000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(22)'  }, // InstLfoVariBass:DynaSynth(22): 3b.15.00.00
	{addr: 0x3b160000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(23)'  }, // InstLfoVariBass:DynaSynth(23): 3b.16.00.00
	{addr: 0x3b170000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(24)'  }, // InstLfoVariBass:DynaSynth(24): 3b.17.00.00
	{addr: 0x3b180000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(25)'  }, // InstLfoVariBass:DynaSynth(25): 3b.18.00.00
	{addr: 0x3b190000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(26)'  }, // InstLfoVariBass:DynaSynth(26): 3b.19.00.00
	{addr: 0x3b1a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(27)'  }, // InstLfoVariBass:DynaSynth(27): 3b.1a.00.00
	{addr: 0x3b1b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(28)'  }, // InstLfoVariBass:DynaSynth(28): 3b.1b.00.00
	{addr: 0x3b1c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(29)'  }, // InstLfoVariBass:DynaSynth(29): 3b.1c.00.00
	{addr: 0x3b1d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(30)'  }, // InstLfoVariBass:DynaSynth(30): 3b.1d.00.00
	{addr: 0x3b1e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(31)'  }, // InstLfoVariBass:DynaSynth(31): 3b.1e.00.00
	{addr: 0x3b1f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(32)'  }, // InstLfoVariBass:DynaSynth(32): 3b.1f.00.00
	{addr: 0x3b200000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(33)'  }, // InstLfoVariBass:DynaSynth(33): 3b.20.00.00
	{addr: 0x3b210000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(34)'  }, // InstLfoVariBass:DynaSynth(34): 3b.21.00.00
	{addr: 0x3b220000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(35)'  }, // InstLfoVariBass:DynaSynth(35): 3b.22.00.00
	{addr: 0x3b230000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(36)'  }, // InstLfoVariBass:DynaSynth(36): 3b.23.00.00
	{addr: 0x3b240000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(37)'  }, // InstLfoVariBass:DynaSynth(37): 3b.24.00.00
	{addr: 0x3b250000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(38)'  }, // InstLfoVariBass:DynaSynth(38): 3b.25.00.00
	{addr: 0x3b260000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(39)'  }, // InstLfoVariBass:DynaSynth(39): 3b.26.00.00
	{addr: 0x3b270000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(40)'  }, // InstLfoVariBass:DynaSynth(40): 3b.27.00.00
	{addr: 0x3b280000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(41)'  }, // InstLfoVariBass:DynaSynth(41): 3b.28.00.00
	{addr: 0x3b290000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(42)'  }, // InstLfoVariBass:DynaSynth(42): 3b.29.00.00
	{addr: 0x3b2a0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(43)'  }, // InstLfoVariBass:DynaSynth(43): 3b.2a.00.00
	{addr: 0x3b2b0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(44)'  }, // InstLfoVariBass:DynaSynth(44): 3b.2b.00.00
	{addr: 0x3b2c0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(45)'  }, // InstLfoVariBass:DynaSynth(45): 3b.2c.00.00
	{addr: 0x3b2d0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(46)'  }, // InstLfoVariBass:DynaSynth(46): 3b.2d.00.00
	{addr: 0x3b2e0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(47)'  }, // InstLfoVariBass:DynaSynth(47): 3b.2e.00.00
	{addr: 0x3b2f0000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(48)'  }, // InstLfoVariBass:DynaSynth(48): 3b.2f.00.00
	{addr: 0x3b300000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(49)'  }, // InstLfoVariBass:DynaSynth(49): 3b.30.00.00
	{addr: 0x3b310000,	size: 0,	child: InstLfoVariDynaSynth,	name: 'InstLfoVariBass_DynaSynth(50)'  }, // InstLfoVariBass:DynaSynth(50): 3b.31.00.00
	{addr: 0x3b320000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(1)'  }, // InstLfoVariBass:OscSynth(1): 3b.32.00.00
	{addr: 0x3b330000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(2)'  }, // InstLfoVariBass:OscSynth(2): 3b.33.00.00
	{addr: 0x3b340000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(3)'  }, // InstLfoVariBass:OscSynth(3): 3b.34.00.00
	{addr: 0x3b350000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(4)'  }, // InstLfoVariBass:OscSynth(4): 3b.35.00.00
	{addr: 0x3b360000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(5)'  }, // InstLfoVariBass:OscSynth(5): 3b.36.00.00
	{addr: 0x3b370000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(6)'  }, // InstLfoVariBass:OscSynth(6): 3b.37.00.00
	{addr: 0x3b380000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(7)'  }, // InstLfoVariBass:OscSynth(7): 3b.38.00.00
	{addr: 0x3b390000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(8)'  }, // InstLfoVariBass:OscSynth(8): 3b.39.00.00
	{addr: 0x3b3a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(9)'  }, // InstLfoVariBass:OscSynth(9): 3b.3a.00.00
	{addr: 0x3b3b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(10)'  }, // InstLfoVariBass:OscSynth(10): 3b.3b.00.00
	{addr: 0x3b3c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(11)'  }, // InstLfoVariBass:OscSynth(11): 3b.3c.00.00
	{addr: 0x3b3d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(12)'  }, // InstLfoVariBass:OscSynth(12): 3b.3d.00.00
	{addr: 0x3b3e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(13)'  }, // InstLfoVariBass:OscSynth(13): 3b.3e.00.00
	{addr: 0x3b3f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(14)'  }, // InstLfoVariBass:OscSynth(14): 3b.3f.00.00
	{addr: 0x3b400000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(15)'  }, // InstLfoVariBass:OscSynth(15): 3b.40.00.00
	{addr: 0x3b410000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(16)'  }, // InstLfoVariBass:OscSynth(16): 3b.41.00.00
	{addr: 0x3b420000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(17)'  }, // InstLfoVariBass:OscSynth(17): 3b.42.00.00
	{addr: 0x3b430000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(18)'  }, // InstLfoVariBass:OscSynth(18): 3b.43.00.00
	{addr: 0x3b440000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(19)'  }, // InstLfoVariBass:OscSynth(19): 3b.44.00.00
	{addr: 0x3b450000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(20)'  }, // InstLfoVariBass:OscSynth(20): 3b.45.00.00
	{addr: 0x3b460000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(21)'  }, // InstLfoVariBass:OscSynth(21): 3b.46.00.00
	{addr: 0x3b470000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(22)'  }, // InstLfoVariBass:OscSynth(22): 3b.47.00.00
	{addr: 0x3b480000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(23)'  }, // InstLfoVariBass:OscSynth(23): 3b.48.00.00
	{addr: 0x3b490000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(24)'  }, // InstLfoVariBass:OscSynth(24): 3b.49.00.00
	{addr: 0x3b4a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(25)'  }, // InstLfoVariBass:OscSynth(25): 3b.4a.00.00
	{addr: 0x3b4b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(26)'  }, // InstLfoVariBass:OscSynth(26): 3b.4b.00.00
	{addr: 0x3b4c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(27)'  }, // InstLfoVariBass:OscSynth(27): 3b.4c.00.00
	{addr: 0x3b4d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(28)'  }, // InstLfoVariBass:OscSynth(28): 3b.4d.00.00
	{addr: 0x3b4e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(29)'  }, // InstLfoVariBass:OscSynth(29): 3b.4e.00.00
	{addr: 0x3b4f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(30)'  }, // InstLfoVariBass:OscSynth(30): 3b.4f.00.00
	{addr: 0x3b500000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(31)'  }, // InstLfoVariBass:OscSynth(31): 3b.50.00.00
	{addr: 0x3b510000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(32)'  }, // InstLfoVariBass:OscSynth(32): 3b.51.00.00
	{addr: 0x3b520000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(33)'  }, // InstLfoVariBass:OscSynth(33): 3b.52.00.00
	{addr: 0x3b530000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(34)'  }, // InstLfoVariBass:OscSynth(34): 3b.53.00.00
	{addr: 0x3b540000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(35)'  }, // InstLfoVariBass:OscSynth(35): 3b.54.00.00
	{addr: 0x3b550000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(36)'  }, // InstLfoVariBass:OscSynth(36): 3b.55.00.00
	{addr: 0x3b560000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(37)'  }, // InstLfoVariBass:OscSynth(37): 3b.56.00.00
	{addr: 0x3b570000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(38)'  }, // InstLfoVariBass:OscSynth(38): 3b.57.00.00
	{addr: 0x3b580000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(39)'  }, // InstLfoVariBass:OscSynth(39): 3b.58.00.00
	{addr: 0x3b590000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(40)'  }, // InstLfoVariBass:OscSynth(40): 3b.59.00.00
	{addr: 0x3b5a0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(41)'  }, // InstLfoVariBass:OscSynth(41): 3b.5a.00.00
	{addr: 0x3b5b0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(42)'  }, // InstLfoVariBass:OscSynth(42): 3b.5b.00.00
	{addr: 0x3b5c0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(43)'  }, // InstLfoVariBass:OscSynth(43): 3b.5c.00.00
	{addr: 0x3b5d0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(44)'  }, // InstLfoVariBass:OscSynth(44): 3b.5d.00.00
	{addr: 0x3b5e0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(45)'  }, // InstLfoVariBass:OscSynth(45): 3b.5e.00.00
	{addr: 0x3b5f0000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(46)'  }, // InstLfoVariBass:OscSynth(46): 3b.5f.00.00
	{addr: 0x3b600000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(47)'  }, // InstLfoVariBass:OscSynth(47): 3b.60.00.00
	{addr: 0x3b610000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(48)'  }, // InstLfoVariBass:OscSynth(48): 3b.61.00.00
	{addr: 0x3b620000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(49)'  }, // InstLfoVariBass:OscSynth(49): 3b.62.00.00
	{addr: 0x3b630000,	size: 0,	child: InstLfoVariOscSynth,	name: 'InstLfoVariBass_OscSynth(50)'  }, // InstLfoVariBass:OscSynth(50): 3b.63.00.00
	{addr: 0x3c000000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(1)'  }, // InstSeqVariBass:DynaSynth(1): 3c.00.00.00
	{addr: 0x3c010000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(2)'  }, // InstSeqVariBass:DynaSynth(2): 3c.01.00.00
	{addr: 0x3c020000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(3)'  }, // InstSeqVariBass:DynaSynth(3): 3c.02.00.00
	{addr: 0x3c030000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(4)'  }, // InstSeqVariBass:DynaSynth(4): 3c.03.00.00
	{addr: 0x3c040000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(5)'  }, // InstSeqVariBass:DynaSynth(5): 3c.04.00.00
	{addr: 0x3c050000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(6)'  }, // InstSeqVariBass:DynaSynth(6): 3c.05.00.00
	{addr: 0x3c060000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(7)'  }, // InstSeqVariBass:DynaSynth(7): 3c.06.00.00
	{addr: 0x3c070000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(8)'  }, // InstSeqVariBass:DynaSynth(8): 3c.07.00.00
	{addr: 0x3c080000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(9)'  }, // InstSeqVariBass:DynaSynth(9): 3c.08.00.00
	{addr: 0x3c090000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(10)'  }, // InstSeqVariBass:DynaSynth(10): 3c.09.00.00
	{addr: 0x3c0a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(11)'  }, // InstSeqVariBass:DynaSynth(11): 3c.0a.00.00
	{addr: 0x3c0b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(12)'  }, // InstSeqVariBass:DynaSynth(12): 3c.0b.00.00
	{addr: 0x3c0c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(13)'  }, // InstSeqVariBass:DynaSynth(13): 3c.0c.00.00
	{addr: 0x3c0d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(14)'  }, // InstSeqVariBass:DynaSynth(14): 3c.0d.00.00
	{addr: 0x3c0e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(15)'  }, // InstSeqVariBass:DynaSynth(15): 3c.0e.00.00
	{addr: 0x3c0f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(16)'  }, // InstSeqVariBass:DynaSynth(16): 3c.0f.00.00
	{addr: 0x3c100000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(17)'  }, // InstSeqVariBass:DynaSynth(17): 3c.10.00.00
	{addr: 0x3c110000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(18)'  }, // InstSeqVariBass:DynaSynth(18): 3c.11.00.00
	{addr: 0x3c120000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(19)'  }, // InstSeqVariBass:DynaSynth(19): 3c.12.00.00
	{addr: 0x3c130000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(20)'  }, // InstSeqVariBass:DynaSynth(20): 3c.13.00.00
	{addr: 0x3c140000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(21)'  }, // InstSeqVariBass:DynaSynth(21): 3c.14.00.00
	{addr: 0x3c150000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(22)'  }, // InstSeqVariBass:DynaSynth(22): 3c.15.00.00
	{addr: 0x3c160000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(23)'  }, // InstSeqVariBass:DynaSynth(23): 3c.16.00.00
	{addr: 0x3c170000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(24)'  }, // InstSeqVariBass:DynaSynth(24): 3c.17.00.00
	{addr: 0x3c180000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(25)'  }, // InstSeqVariBass:DynaSynth(25): 3c.18.00.00
	{addr: 0x3c190000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(26)'  }, // InstSeqVariBass:DynaSynth(26): 3c.19.00.00
	{addr: 0x3c1a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(27)'  }, // InstSeqVariBass:DynaSynth(27): 3c.1a.00.00
	{addr: 0x3c1b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(28)'  }, // InstSeqVariBass:DynaSynth(28): 3c.1b.00.00
	{addr: 0x3c1c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(29)'  }, // InstSeqVariBass:DynaSynth(29): 3c.1c.00.00
	{addr: 0x3c1d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(30)'  }, // InstSeqVariBass:DynaSynth(30): 3c.1d.00.00
	{addr: 0x3c1e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(31)'  }, // InstSeqVariBass:DynaSynth(31): 3c.1e.00.00
	{addr: 0x3c1f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(32)'  }, // InstSeqVariBass:DynaSynth(32): 3c.1f.00.00
	{addr: 0x3c200000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(33)'  }, // InstSeqVariBass:DynaSynth(33): 3c.20.00.00
	{addr: 0x3c210000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(34)'  }, // InstSeqVariBass:DynaSynth(34): 3c.21.00.00
	{addr: 0x3c220000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(35)'  }, // InstSeqVariBass:DynaSynth(35): 3c.22.00.00
	{addr: 0x3c230000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(36)'  }, // InstSeqVariBass:DynaSynth(36): 3c.23.00.00
	{addr: 0x3c240000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(37)'  }, // InstSeqVariBass:DynaSynth(37): 3c.24.00.00
	{addr: 0x3c250000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(38)'  }, // InstSeqVariBass:DynaSynth(38): 3c.25.00.00
	{addr: 0x3c260000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(39)'  }, // InstSeqVariBass:DynaSynth(39): 3c.26.00.00
	{addr: 0x3c270000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(40)'  }, // InstSeqVariBass:DynaSynth(40): 3c.27.00.00
	{addr: 0x3c280000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(41)'  }, // InstSeqVariBass:DynaSynth(41): 3c.28.00.00
	{addr: 0x3c290000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(42)'  }, // InstSeqVariBass:DynaSynth(42): 3c.29.00.00
	{addr: 0x3c2a0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(43)'  }, // InstSeqVariBass:DynaSynth(43): 3c.2a.00.00
	{addr: 0x3c2b0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(44)'  }, // InstSeqVariBass:DynaSynth(44): 3c.2b.00.00
	{addr: 0x3c2c0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(45)'  }, // InstSeqVariBass:DynaSynth(45): 3c.2c.00.00
	{addr: 0x3c2d0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(46)'  }, // InstSeqVariBass:DynaSynth(46): 3c.2d.00.00
	{addr: 0x3c2e0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(47)'  }, // InstSeqVariBass:DynaSynth(47): 3c.2e.00.00
	{addr: 0x3c2f0000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(48)'  }, // InstSeqVariBass:DynaSynth(48): 3c.2f.00.00
	{addr: 0x3c300000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(49)'  }, // InstSeqVariBass:DynaSynth(49): 3c.30.00.00
	{addr: 0x3c310000,	size: 0,	child: InstSeqVariDynaSynth,	name: 'InstSeqVariBass_DynaSynth(50)'  }, // InstSeqVariBass:DynaSynth(50): 3c.31.00.00
	{addr: 0x3d000000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(1)'  }, // EfctVariBass:Efct(1): 3d.00.00.00
	{addr: 0x3d010000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(2)'  }, // EfctVariBass:Efct(2): 3d.01.00.00
	{addr: 0x3d020000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(3)'  }, // EfctVariBass:Efct(3): 3d.02.00.00
	{addr: 0x3d030000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(4)'  }, // EfctVariBass:Efct(4): 3d.03.00.00
	{addr: 0x3d040000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(5)'  }, // EfctVariBass:Efct(5): 3d.04.00.00
	{addr: 0x3d050000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(6)'  }, // EfctVariBass:Efct(6): 3d.05.00.00
	{addr: 0x3d060000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(7)'  }, // EfctVariBass:Efct(7): 3d.06.00.00
	{addr: 0x3d070000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(8)'  }, // EfctVariBass:Efct(8): 3d.07.00.00
	{addr: 0x3d080000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(9)'  }, // EfctVariBass:Efct(9): 3d.08.00.00
	{addr: 0x3d090000,	size: 0,	child: EfctVariItem,	name: 'EfctVariBass_Efct(10)'  }, // EfctVariBass:Efct(10): 3d.09.00.00
	{addr: 0x52000000,	size: 0,	child: PatchName,	name: 'patch_name'},
	{addr: 0x53000000,	size: 0,	child: PatchName,	name: 'patch_nameBass'},
];

    /* construction */
    (function(root) {

        /* calucrate size */
        (function(a) {
            for (var n = a.length - 1; n >= 0; n--) {
                var b = a[n];
                if ('child' in b) {
                    b.size = arguments.callee(b.child);
                } else {
                    var bytes = 0;
                    switch (b.size) {
                        case INTEGER1x1: case INTEGER1x2: case INTEGER1x3: case INTEGER1x4:
                        case INTEGER1x5: case INTEGER1x6: case INTEGER1x7:
                            bytes = 1; break;
                        case INTEGER2x4:
                        case INTEGER2x7:
                            bytes = 2; break;
                        case INTEGER4x4:
                            bytes = 4; break;
                        default:
                            bytes = b.size; break;
                    }
                    return _7bitize(nibble(b.addr) + bytes);
        }
            }
            return 0;
        })(root);

        /* all addr and size is nibbled. */
        (function(a) {
            for (var n = 0, max = a.length; n < max; n++) {
                var b = a[n];
                if (!('nibbled' in b)) {
                    b.nibbled = true;
                    b.addr = nibble(b.addr);
                    b.size = (0 < b.size && b.size < INTEGER1x1) ? nibble(b.size) : b.size;
                    if ('child' in b) arguments.callee(b.child);
                }
            }
        })(root);

//      for (var i = 0; i < 6; i++) {
//          var b = {};
//          b.name  = 'User(' + (i + 1) + ')';
//          b.addr  = nibble(0x10010000) + (i * nibble(0x10000));
//          b.size  = 0;
//          b.child = Patch;
//          root.push(b);
//      }

    })(this.root);

this.layout = [ /* for layout tool */
	{addr: 0x00000000,	size: 0,	child: SystemExCommon,	name: 'SystemEx_common'  }, // SystemEx:common: 00.00.00.00
	{addr: 0x00010000,	size: 0,	child: SystemCommon,	name: 'System_common'  }, // System:common: 00.01.00.00
	{addr: 0x00011000,	size: 0,	child: SystemControl,	name: 'System_control'  }, // System:control: 00.01.10.00
	{addr: 0x00012000,	size: 0,	child: SystemLed,	name: 'System_led'  }, // System:led: 00.01.20.00
	{addr: 0x00013000,	size: 0,	child: SystemMidi,	name: 'System_midi'  }, // System:midi: 00.01.30.00
	{addr: 0x00014000,	size: 0,	child: SystemInOut,	name: 'System_inout'  }, // System:inout: 00.01.40.00
	{addr: 0x00015000,	size: 0,	child: SystemEfct,	name: 'System_efct'  }, // System:efct: 00.01.50.00
	{addr: 0x00016000,	size: 0,	child: SystemPitch,	name: 'System_pitch'  }, // System:pitch: 00.01.60.00
	{addr: 0x00016100,	size: 0,	child: SystemGtr2Midi,	name: 'System_gtr2midi'  }, // System:gtr2midi: 00.01.61.00
	{addr: 0x00080000,	size: 0,	child: SystemCommonBass,	name: 'SystemBass_common'  }, // SystemBass:common: 00.08.00.00
	{addr: 0x00081000,	size: 0,	child: SystemControl,	name: 'SystemBass_control'  }, // SystemBass:control: 00.08.10.00
	{addr: 0x00082000,	size: 0,	child: SystemLed,	name: 'SystemBass_led'  }, // SystemBass:led: 00.08.20.00
	{addr: 0x00083000,	size: 0,	child: SystemMidi,	name: 'SystemBass_midi'  }, // SystemBass:midi: 00.08.30.00
	{addr: 0x00084000,	size: 0,	child: SystemInOut,	name: 'SystemBass_inout'  }, // SystemBass:inout: 00.08.40.00
	{addr: 0x00085000,	size: 0,	child: SystemEfct,	name: 'SystemBass_efct'  }, // SystemBass:efct: 00.08.50.00
	{addr: 0x00086000,	size: 0,	child: SystemPitch,	name: 'SystemBass_pitch'  }, // SystemBass:pitch: 00.08.60.00
	{addr: 0x00086100,	size: 0,	child: SystemGtr2Midi,	name: 'SystemBass_gtr2midi'  }, // SystemBass:gtr2midi: 00.08.61.00
	{addr: 0x00100000,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(1)'  }, // Pcmap:bank1: 00.10.00.00
	{addr: 0x00100400,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(2)'  }, // Pcmap:bank2: 00.10.04.00
	{addr: 0x00100800,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(3)'  }, // Pcmap:bank3: 00.10.08.00
	{addr: 0x00100c00,	size: 0,	child: PcmapPc,	name: 'Pcmap_bank(4)'  }, // Pcmap:bank4: 00.10.0c.00
	{addr: 0x00180000,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(1)'  }, // PcmapBass:bank1: 00.18.00.00
	{addr: 0x00180400,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(2)'  }, // PcmapBass:bank2: 00.18.04.00
	{addr: 0x00180800,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(3)'  }, // PcmapBass:bank3: 00.18.08.00
	{addr: 0x00180c00,	size: 0,	child: PcmapPc,	name: 'PcmapBass_bank(4)'  }, // PcmapBass:bank4: 00.18.0c.00
	{addr: 0x00200200,	size: 0,	child: SetupEfct,	name: 'Setup_efct'  }, // Setup:efct: 00.20.02.00
	{addr: 0x10000000,	size: 0,	child: Patch,	name: 'Temp_patch'  }, // Temp:patch: 10.00.00.00
	{addr: 0x10020000,	size: 0,	child: PatchBass,	name: 'Temp_patchBass'  }, // Temp:patchBass: 10.02.00.00
	{addr: 0x52000000,	size: 0,	child: PatchName,	name: 'patch_name'},
	{addr: 0x53000000,	size: 0,	child: PatchName,	name: 'patch_nameBass'},
];
}
