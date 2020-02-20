(function () {

    const FUNCTION_LIST = ['num1', 'num2', 'num3', 'num4', 'curnum', 'bankdown', 'bankup', 'ctl1', 'ctl2', 'gk-sw1', 'gk-sw2', 'gk-vol', 'ctl3', 'ctl4', 'ctl5', 'ctl6', 'exp1', 'exp2'];

    const MANUAL_LIST = ['num1-manual', 'num2-manual', 'num3-manual', 'num4-manual'];

    const LED_COLOR_LIST = ['num1', 'num2', 'num3', 'num4', 'bankdown', 'bankup', 'ctl1', 'ctl2', 'curnum'];

    const MIDI = ['midi1', 'midi2', 'midi3', 'midi4'];

    const TAP = {
        CTL_FUNC: 0,
        MANUAL_FUNC: 1,
        ASSIGN: 2,
        PATCH_TO_MIDI: 3,
        LED_COLOR: 4,
        GTR_BASS_MIDI: 5,
    };

    window.ctlExpController = {
        controllerFunction() {
            FUNCTION_LIST.forEach(element => {
                let mode = APP_MODE === MODE.GUITAR ? '' : '-bass';
                let value = parseInt($(`#ctl-exp-${element}${mode}-preference-toggle`).find('input:checked').val());
                ctlControlFunctionController.changePreferenceFunction(value, element, mode);
            });
        },

        /* check mode guitar-bass */
        load() {
            let ctlExpSelectGuitar = $('#ctl-exp-select-btn');
            let ctlExpSelectBass = $('#ctl-exp-select-btn-bass');
            let ctlExpFrameGuitar = $('#ctl-exp-frame-1');
            let ctlExpFrameBass = $('#ctl-exp-frame-2');
            if (APP_MODE === MODE.GUITAR) {
                ctlExpSelectBass.hide();
                ctlExpFrameBass.hide();
                ctlExpSelectGuitar.show();
                ctlExpFrameGuitar.show();
                ctlExpSelectGuitar.trigger('elf-update', TAP.CTL_FUNC);
                ctlExpSelectGuitar.trigger('elf-change', TAP.CTL_FUNC);
            } else {
                ctlExpSelectGuitar.hide();
                ctlExpFrameGuitar.hide();
                ctlExpSelectBass.show();
                ctlExpFrameBass.show();
                ctlExpSelectBass.trigger('elf-update', TAP.CTL_FUNC);
                ctlExpSelectBass.trigger('elf-change', TAP.CTL_FUNC);
            }
        },

        eventCtlExp() {
            $('#ctl-exp-select-btn, #ctl-exp-select-btn-bass').on('elf-changed', (e, v) => {
                let mode = APP_MODE === MODE.GUITAR ? '' : '-bass';
                let valueModeGtrBass = APP_MODE === MODE.GUITAR ? 'guitar' : 'bass';
                switch (v) {
                    case TAP.MANUAL_FUNC:
                        MANUAL_LIST.forEach(element => {
                            let value = parseInt($(`#ctl-exp-${element}${mode}-preference-toggle`).find('input:checked').val());
                            ctlControlFunctionController.changePreferenceFunction(value, element, mode);
                        });
                        break;
                    case TAP.PATCH_TO_MIDI:
                        MIDI.forEach((element) => {
                            let valuePC = parseInt($(`#patch-${element}${mode}-setting-midi_pc_sharp-dial`).find('p').text());
                            let valueMsb = parseInt($(`#patch-${element}${mode}-setting-bank_msb-dial`).find('p').text());
                            ctlExpPatchToMidiController.ctlExpPatchToMidi(valuePC, valueMsb, element, mode);
                        });
                        break;
                    case TAP.LED_COLOR:
                        LED_COLOR_LIST.forEach(element => {
                            let value = parseInt($(`#ctl-led-color${mode}-${element}-preference-toggle`).find('input:checked').val());
                            ctlExpLedColorController.changePreferenceFunction(value, element, mode);
                        });
                        break;
                    case TAP.GTR_BASS_MIDI:
                        {
                        let value = parseInt($(`#ctl-${valueModeGtrBass}-to-midi-mode-toggle`).find('input:checked').val());
                        ctlExpGuitarBassMidiController.checkStatusDial(value, valueModeGtrBass);
                        }
                        break;
                }
            });
        },
    };
})();
