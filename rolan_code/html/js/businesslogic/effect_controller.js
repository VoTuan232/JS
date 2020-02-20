//
//	effect_controller.js
//
//	Copyright 2020 Roland Corporation. All rights reserved.
//
(function () {
    const KEY_MODE_BASS = '-bass';

    const LIST_SWITCH = [
        { mode: 'cmp', type: CHAIN_BLOCK_ID_MAP.compressor },
        { mode: 'ds', type: CHAIN_BLOCK_ID_MAP.distortion },
        { mode: 'inst1', type: CHAIN_BLOCK_ID_MAP.inst1 },
        { mode: 'inst2', type: CHAIN_BLOCK_ID_MAP.inst2 },
        { mode: 'inst3', type: CHAIN_BLOCK_ID_MAP.inst3 },
        { mode: 'amp', type: CHAIN_BLOCK_ID_MAP.airdPreamp },
        { mode: 'ns', type: CHAIN_BLOCK_ID_MAP.noiseSuppressor },
        { mode: 'eq1', type: CHAIN_BLOCK_ID_MAP.equalizer1 },
        { mode: 'eq2', type: CHAIN_BLOCK_ID_MAP.equalizer2 },
        { mode: 'cho', type: CHAIN_BLOCK_ID_MAP.chorus },
        { mode: 'rev', type: CHAIN_BLOCK_ID_MAP.reverb },
        { mode: 'dly1', type: CHAIN_BLOCK_ID_MAP.delay1 },
        { mode: 'dly2', type: CHAIN_BLOCK_ID_MAP.delay2 },
        { mode: 'mdly', type: CHAIN_BLOCK_ID_MAP.masterDelay },
        { mode: 'fx1', type: CHAIN_BLOCK_ID_MAP.fx1 },
        { mode: 'fx2', type: CHAIN_BLOCK_ID_MAP.fx2 },
        { mode: 'fx3', type: CHAIN_BLOCK_ID_MAP.fx3 },
        { mode: 'normal', type: CHAIN_BLOCK_ID_MAP.normal },
        { mode: 'sndrtn', type: CHAIN_BLOCK_ID_MAP.sendReturn }
    ];

    const DEFAULT_SWITCH_OFF = [
        CHAIN_BLOCK_ID_MAP.normal,
        CHAIN_BLOCK_ID_MAP.compressor,
        CHAIN_BLOCK_ID_MAP.distortion,
        CHAIN_BLOCK_ID_MAP.equalizer1,
        CHAIN_BLOCK_ID_MAP.equalizer2,
        CHAIN_BLOCK_ID_MAP.chorus,
        CHAIN_BLOCK_ID_MAP.delay1,
        CHAIN_BLOCK_ID_MAP.delay2,
        CHAIN_BLOCK_ID_MAP.masterDelay,
        CHAIN_BLOCK_ID_MAP.fx1,
        CHAIN_BLOCK_ID_MAP.fx2,
        CHAIN_BLOCK_ID_MAP.fx3,
        CHAIN_BLOCK_ID_MAP.sendReturn,
    ];

    window.effectChainController = {
        defaultSwitch() {
            DEFAULT_SWITCH_OFF.forEach(element => {
                chainModelController.turnOn(element, false);
            });
        },

        assignEffectEvents() {
            LIST_SWITCH.forEach(element => {
                $(`#${element.mode}-switch, #${element.mode}-bass-switch`).on('elf-changed', function (e, v) {
                    chainModelController.turnOn(element.type, v === SWITCH.ON);
                });
            });
        },

        receiveSwitch(type, key, value) {
            chainModelController.turnOn(type + key, value === SWITCH.ON);
        }   
    };

    window.effectDOMController = {
        turnOn: function (id, v) {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let switchElm = $('#' + id + `${mode}-switch`);
            switchElm.trigger('elf-update', v ? SWITCH.ON : SWITCH.OFF);
            switchElm.trigger('elf-change', v ? SWITCH.ON : SWITCH.OFF);
        },
    };
})();
