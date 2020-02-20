/* global
Editor const
*/

(function (window) {
    INST_GUITAR = {
        TYPE: {
            DYNAMIC_SYNTH: 0,
            OSC_SYNTH: 1,
            GR_300: 2,
            E_GUITAR: 3,
            ACOUSTIC: 4,
            E_BASS: 5,
            VIO_GUITAR: 6,
            POLY_FX: 7
        },
        STATUS: {
            ON: 1,
            OFF: 0
        }
    };

    INST_BASS = {
        TYPE: {
            DYNAMIC_SYNTH: 0,
            OSC_SYNTH: 1,
            ANALOG_GR: 2,
            E_BASS: 3,
            AC_BASS: 4,
            E_GUITAR: 5,
            POLY_FX: 6
        },
        STATUS: {
            ON: 1,
            OFF: 0
        }
    };

    INST_CONTROL = {
        TYPE: {
            DYNAMIC: 0,
            OSC: 1,
        },
        TAB: {
            COMMON: 0,
            ALT_TUNE: 1,
            AMP: 4,
            LFO1: 5,
            LFO2: 6,
            SEQ: 7,
        },
        TAB_STR: {
            'COMMON': 0,
            'ALT TUNE': 1,
            'OSC': 2,
            'FILTER': 3,
            'AMP': 4,
            'LFO1': 5,
            'LFO2': 6,
            'SEQ': 7,
            'LAYER': 8,
            'GR-300': 9,
            'GUITAR': 10,
            'NS': 11,
            'EQ': 12,
            'ACOUSTIC': 13,
            'BASS': 14,
            'HARMO': 15,
            'POLY FX': 16,
            'ANALOG GR': 17,
            'AC BASS': 18,
        }
    };

    FX_TYPE = {
        AC_RESONANCE: 'ac-resonance',
        AUTO_WAH: 'auto-wah',
        CHORUS: 'chorus',
        CLASSIC_VIBE: 'classic-vibe',
        COMPRESSOR: 'compressor',
        DEFRETTER: 'defretter',
        DEFRETTER_BASS: 'defretter-bass',
        DELAY: 'delay',
        FLANGER: 'flanger',
        FLANGER_BASS: 'flanger-bass',
        FOOT_VOLUME: 'foot-volume',
        GRAPHIC_EQ: 'graphic-eq',
        HARMONIST: 'harmonist',
        HUMANIZER: 'humanizer',
        ISOLATOR: 'isolator',
        LIMITER: 'limiter',
        LO_FI: 'lofi',
        OCTAVE: 'octave',
        OCTAVE_BASS: 'octave-bass',
        PAN: 'pan',
        PARAMETRIC_EQ: 'parametric-eq',
        PEDAL_BEND: 'pedal-bend',
        PHASER: 'phaser',
        PITCH_SHIFTER: 'pitch-shifter',
        REVERB: 'reverb',
        RING_MOD: 'ring-mod',
        ROTARY: 'rotary',
        SITAR_SIM: 'sitar-sim',
        SLICER: 'slicer',
        SLOW_GEAR: 'slow-gear',
        SLOW_GEAR_BASS: 'slow-gear-bass',
        SOUND_HOLD: 'sound-hold',
        TOUCH_WAH: 'touch-wah',
        TOUCH_WAH_BASS: 'touch-wah-bass',
        TREMOLO: 'tremolo',
        VIBRATO: 'vibrato',
        WAH: 'wah'
    };

    FX_TYPE_LIST = [
        FX_TYPE.AC_RESONANCE,
        FX_TYPE.AUTO_WAH,
        FX_TYPE.CHORUS,
        FX_TYPE.CLASSIC_VIBE,
        FX_TYPE.COMPRESSOR,
        FX_TYPE.DEFRETTER,
        FX_TYPE.DEFRETTER_BASS,
        FX_TYPE.DELAY,
        FX_TYPE.FLANGER,
        FX_TYPE.FLANGER_BASS,
        FX_TYPE.FOOT_VOLUME,
        FX_TYPE.GRAPHIC_EQ,
        FX_TYPE.HARMONIST,
        FX_TYPE.HUMANIZER,
        FX_TYPE.ISOLATOR,
        FX_TYPE.LIMITER,
        FX_TYPE.LO_FI,
        FX_TYPE.OCTAVE,
        FX_TYPE.OCTAVE_BASS,
        FX_TYPE.PAN,
        FX_TYPE.PARAMETRIC_EQ,
        FX_TYPE.PEDAL_BEND,
        FX_TYPE.PHASER,
        FX_TYPE.PITCH_SHIFTER,
        FX_TYPE.REVERB,
        FX_TYPE.RING_MOD,
        FX_TYPE.ROTARY,
        FX_TYPE.SITAR_SIM,
        FX_TYPE.SLICER,
        FX_TYPE.SLOW_GEAR,
        FX_TYPE.SLOW_GEAR_BASS,
        FX_TYPE.SOUND_HOLD,
        FX_TYPE.TOUCH_WAH,
        FX_TYPE.TOUCH_WAH_BASS,
        FX_TYPE.TREMOLO,
        FX_TYPE.VIBRATO,
        FX_TYPE.WAH
    ];

    MST_PATCH_TYPE = {
        GK: 0,
        NORMAL: 1
    };

    APP_MST_PATCH_TYPE = MST_PATCH_TYPE.GK;

    COMMAND_VARIATION_LIST = [
        ADDRESS_CONST.COMMAND.INST_VARIATION_WRITE_CMD,
        ADDRESS_CONST.COMMAND.LFO_VARIATION_WRITE_CMD,
        ADDRESS_CONST.COMMAND.SEQ_VARIATION_WRITE_CMD,
        ADDRESS_CONST.COMMAND.AMP_VARIATION_WRITE_CMD,
        ADDRESS_CONST.COMMAND.EFFECT_VARIATION_WRITE_CMD,
    ];

    TOTAL_SELECT_STOMP = 136;
    MAX_HEX = 128;

    RECEIVE_INPUT_CHAIN = {
        INPUT: 0,
        CHAIN: 1
    };

    SUB_MAIN_OUT = {
        ON: 1,
        OFF: 0
    };

    SWITCH = {
        OFF: 0,
        ON: 1,
    };

    HEADER_TAB = 0;

    DIVIDER_MODE_ENUM = {
        dual: 0,
        singleA: 1,
        singleB: 2
    };

    SYSTEM = {
        PAGE_DEVICE: 11,
        INPUT_SETTING: 1
    }

    MODE = {
        GUITAR: 0,
        BASS: 1
    };

    APP_MODE = MODE.GUITAR;
})();
