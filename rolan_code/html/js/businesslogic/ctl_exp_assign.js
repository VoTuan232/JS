/* global
ctlExpAssignEvents
*/

(function () {
    const N_ASSIGN = 16;

    const ASSIGN_SOURCE = {
        EXP1: 13,
        EXP2: 14,
        GKSW1: 15,
        GKSW2: 16,
        GKVOL: 17,
        WAVE_PEDAL: 18,
        STRING_START: 19,
        STRING_END: 26,
        CC_START: 27,
    };

    const ASSIGN_FUNCTION = {
        RISE_TIME: 'assign-rise-time',
        FALL_TIME: 'assign-fall-time',
        INPUT_SENS: 'assign-input-sens',
        WAVE_RATE: 'assign-wave-rate',
        WAVE_FORM: 'assign-wave-form',
        MIDI_CH: 'assign-midi-ch-1',
        MIDI_CC: 'assign-midi-cc',
        MIDI_CC_MIN: 'assign-midi-cc-value-min',
        MIDI_CC_MAX: 'assign-midi-cc-value-max',
        MIDI_PC: 'assign-midi-pc',
        BANK_MSB: 'assign-bank-msb',
        BANK_LSB: 'assign-bank-lsb',
    }

    const TOGGLE_MODE = {
        TOGGLE: 0,
        MOMENT: 1,
    }

    const INIT_VALUE = {
        MODE: 0,
        SOURCE: 9,
    }

    window.valueSrcAndMode = {
        mode: INIT_VALUE.MODE,
        source: INIT_VALUE.SOURCE,
        isRiseFall: false,
        setToggleMode(mode) {
            this.mode = mode;
        },
        setValueSource(source) {
            this.source = source;
        },
        setIsEnableRiseFall(isRiseFall) {
            this.isRiseFall = isRiseFall;
        },
        getToggleMode() {
            return this.mode;
        },
        getValueSource() {
            return this.source;
        },
        getIsEnableRiseFall() {
            return this.isRiseFall;
        },
    };

    window.isAssignTargetMidi = {
        isValCc: false,
        isValPc: false,
        isBankMsbOff: true,
        setIsValCc(isValCc) {
            this.isValCc = isValCc;
        },
        setIsValPc(isValPc) {
            this.isValPc = isValPc;
        },
        getIsValCc() {
            return this.isValCc;
        },
        getIsValPc() {
            return this.isValPc;
        },
        setIsBankMsbOff(isBankMsbOff) {
            this.isBankMsbOff = isBankMsbOff;
        },
        getIsBankMsbOff() {
            return this.isBankMsbOff;
        },
    };

    const KEY_MODE_BASS = '-bass';

    const TARGET_INIT = 0;

    const BANK_MSB_OFF = 0;

    // global function
    window.ctlExpAssignController = {
        offLineMode() {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            for (let i = 0; i < N_ASSIGN; i++) {
                let currentPage = i;
                let ids = [
                    `#assign-top${mode}-${currentPage + 1}-target-min`,
                    `#assign-top${mode}-${currentPage + 1}-target-max`,
    
                    `#assign-top${mode}-${currentPage + 1}-mode-stringer`,         
    
                    `#assign-top${mode}-${currentPage + 1}-rise-time-stringer`,                
                    `#assign-top${mode}-${currentPage + 1}-fall-time-stringer`,
                    `#assign-top${mode}-${currentPage + 1}-input-sens-stringer`,
                    `#assign-top${mode}-${currentPage + 1}-wave-rate-stringer`,                
                    `#assign-top${mode}-${currentPage + 1}-wave-form-stringer`,
                    
                    `#assign-top${mode}-${currentPage + 1}-midi-ch`,
                    `#assign-top${mode}-${currentPage + 1}-midi-cc`,                
                    `#assign-top${mode}-${currentPage + 1}-cc-value-min`,                
                    `#assign-top${mode}-${currentPage + 1}-cc-value-max`, 
                    `#assign-top${mode}-${currentPage + 1}-pc`,                
                    `#assign-top${mode}-${currentPage + 1}-midi-msb`,
                    `#assign-top${mode}-${currentPage + 1}-midi-lsb`,
                ];
    
                disableLabelTopAssign(true, ids);
            }
        },

        /** 
         * begin load
         * public function
        */
        ctlExpAssign() {
            let self = this;
            for (let i = 0; i < N_ASSIGN; i++) {
                (function (n) {
                    $(`#assign-list-assign-${n + 1}-edit-button, #assign-list-assign-bass-${n + 1}-edit-button`).on('click', function (e) {
                        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                        assignPageModelController.setCurrentAssignPage(n);
                        $('#hidden-assign-group-button' + mode).trigger('elf-change', n);
                        $(`#assign${mode}-label`).find('p').text('ASSIGN ' + (n + 1) + ' SETTING');
                        $(`#assign-target${mode}-select-list`).trigger('elf-change', [TARGET_INIT, true]);
                        popup_open('assign' + mode);
                        let pageNum = 0;
                        $.each($(`#assign-top${mode}-tab`).find('label'), function (index, elm) {
                            if ($(elm).attr('checked') === 'checked') {
                                pageNum = index;
                            }
                        });
                        $(`#assign-page${mode}-tab`).trigger('elf-update', pageNum);
                        $(`#assign-page${mode}-tab`).trigger('elf-change', pageNum);
                    });
                })(i);
            }

            $(`#assign-page-tab, #assign-page-bass-tab`).on('elf-changed', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                $(`#assign-top${mode}-tab`).trigger('elf-update', v);
                $(`#assign-top${mode}-tab`).trigger('elf-change', v);
            });

            $(`#assign-act-range-lo-dial, #assign-act-range-lo-bass-dial`).on('elf-changed', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                let max = Parameter.value(_items[`assign-act-range-hi${mode}-dial`].pid, INTEGER4x4, 0) / 128;
                if (max <= v) {
                    $(`#assign-act-range-hi${mode}-dial`).trigger('elf-update', v + 1);
                    $(`#assign-act-range-hi${mode}-dial`).trigger('elf-change', v + 1);
                }
            });

            $(`#assign-act-range-hi-dial, #assign-act-range-hi-bass-dial`).on('elf-changed', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                let min = Parameter.value(_items[`assign-act-range-lo${mode}-dial`].pid, INTEGER4x4, 0) / 128;
                if (min >= v) {
                    $(`#assign-act-range-lo${mode}-dial`).trigger('elf-update', v - 1);
                    $(`#assign-act-range-lo${mode}-dial`).trigger('elf-change', v - 1);
                }
            });

            $(`#assign-bank-msb-dial, #assign-bank-msb-bass-dial`).on('elf-changed elf-update', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                isAssignTargetMidi.setIsBankMsbOff(v === BANK_MSB_OFF);
                if (e.type === 'elf-changed') {
                    let p = $(`#assign-target${mode}-select-list`).find('p').text();
                    isAssignTargetMidi.setIsValCc(p === 'MIDI CC#');
                    isAssignTargetMidi.setIsValPc(p === 'MIDI PC#');
                    self.assignSettingSourceMidi(mode, true, assignPageModelController.getCurrentAssignPage());
                    self.updateLabelMidi(mode, true, assignPageModelController.getCurrentAssignPage());
                }
            });

            $(`#assign-source-select-list, #assign-source-bass-select-list`).on('elf-changed elf-update', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                valueSrcAndMode.setValueSource(v);
                if (e.type === 'elf-changed') {
                    let item = _items[`assign-mode${mode}-toggle`];
                    valueSrcAndMode.setToggleMode(Parameter.value(item.pid, item.size, item.vofs));
                    valueSrcAndMode.setIsEnableRiseFall(parseInt($(`#assign-target${mode}-select-list`).find('a[checked="checked"]').attr('data-rise-fall')) === 0);
                    self.assignSettingSource(mode, assignPageModelController.getCurrentAssignPage());
                    self.updateLabelSource(mode, assignPageModelController.getCurrentAssignPage());
                }
            });

            $(`#assign-mode-toggle, #assign-mode-bass-toggle`).on('elf-changed elf-update', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                valueSrcAndMode.setToggleMode(v);
                if (e.type === 'elf-changed') {
                    let item = _items[`assign-source${mode}-select-list`];
                    valueSrcAndMode.setValueSource(Parameter.value(item.pid, item.size, item.vofs));
                    valueSrcAndMode.setIsEnableRiseFall(parseInt($(`#assign-target${mode}-select-list`).find('a[checked="checked"]').attr('data-rise-fall')) === 0);
                    self.assignSettingSource(mode, assignPageModelController.getCurrentAssignPage());
                    self.updateLabelSource(mode, assignPageModelController.getCurrentAssignPage());
                }
            });
        },

        assignSettingSource(mode) {
            let valueSrc = valueSrcAndMode.getValueSource();
            let modeToggle = valueSrcAndMode.getToggleMode();
            let isDisableRiseFall = valueSrcAndMode.getIsEnableRiseFall();

            let checkRiseFall = (valueSrc !== ASSIGN_SOURCE.EXP1 && valueSrc !== ASSIGN_SOURCE.EXP2 && valueSrc !== ASSIGN_SOURCE.GKVOL && valueSrc !== ASSIGN_SOURCE.WAVE_PEDAL);
            let checkValueSrcMode = (valueSrc >= ASSIGN_SOURCE.STRING_START && modeToggle === TOGGLE_MODE.MOMENT);

            updateDialStatus(ASSIGN_FUNCTION.RISE_TIME + mode, checkRiseFall && !checkValueSrcMode && !isDisableRiseFall);
            updateDialStatus(ASSIGN_FUNCTION.FALL_TIME + mode, checkRiseFall && !checkValueSrcMode && !isDisableRiseFall);

            updateDialStatus(ASSIGN_FUNCTION.INPUT_SENS + mode, valueSrc >= ASSIGN_SOURCE.STRING_START && valueSrc <= ASSIGN_SOURCE.STRING_END);

            updateDialStatus(ASSIGN_FUNCTION.WAVE_RATE + mode, valueSrc === ASSIGN_SOURCE.WAVE_PEDAL);
            updateDialStatus(ASSIGN_FUNCTION.WAVE_FORM + mode, valueSrc === ASSIGN_SOURCE.WAVE_PEDAL);
        },

        assignSettingSourceMidi(mode, changeDataDial) {       
            let isValCc = isAssignTargetMidi.getIsValCc();
            let isValPc = isAssignTargetMidi.getIsValPc();
            let isBankMsbOff = isAssignTargetMidi.getIsBankMsbOff();

            if (!changeDataDial) {
                updateDialStatus(ASSIGN_FUNCTION.MIDI_CH + mode, isValCc || isValPc);
                updateDialStatus(ASSIGN_FUNCTION.MIDI_CC + mode, isValCc);
                updateDialStatus(ASSIGN_FUNCTION.MIDI_CC_MIN + mode, isValCc);
                updateDialStatus(ASSIGN_FUNCTION.MIDI_CC_MAX + mode, isValCc);
    
                updateDialStatus(ASSIGN_FUNCTION.MIDI_PC + mode, isValPc);
                updateDialStatus(ASSIGN_FUNCTION.BANK_MSB + mode, isValPc);
            }

            updateDialStatus(ASSIGN_FUNCTION.BANK_LSB + mode, isValPc && !isBankMsbOff);
        },

        updateLabelSource(mode, currentPage) {
            let valueSrc = valueSrcAndMode.getValueSource();
            let modeToggle = valueSrcAndMode.getToggleMode();
            let isDisableRiseFall = valueSrcAndMode.getIsEnableRiseFall();
            
            let checkRiseFall = (valueSrc !== ASSIGN_SOURCE.EXP1 && valueSrc !== ASSIGN_SOURCE.EXP2 && valueSrc !== ASSIGN_SOURCE.GKVOL && valueSrc !== ASSIGN_SOURCE.WAVE_PEDAL);
            let checkValueSrcMode = (valueSrc >= ASSIGN_SOURCE.STRING_START && modeToggle === TOGGLE_MODE.MOMENT);

            let idsRiseFall = [
                `#assign-top${mode}-${currentPage + 1}-rise-time-stringer`,                
                `#assign-top${mode}-${currentPage + 1}-fall-time-stringer`,                
            ];

            let idsInputSens = [`#assign-top${mode}-${currentPage + 1}-input-sens-stringer`]

            let idsWave = [
                `#assign-top${mode}-${currentPage + 1}-wave-rate-stringer`,                
                `#assign-top${mode}-${currentPage + 1}-wave-form-stringer`,                
            ];

            disableLabelTopAssign(!checkRiseFall || checkValueSrcMode || isDisableRiseFall, idsRiseFall);
            disableLabelTopAssign(!(valueSrc >= ASSIGN_SOURCE.STRING_START && valueSrc <= ASSIGN_SOURCE.STRING_END), idsInputSens);
            disableLabelTopAssign(valueSrc !== ASSIGN_SOURCE.WAVE_PEDAL, idsWave);
        },

        updateLabelMidi(mode, changeDataDial, currentPage) {
            let isValCc = isAssignTargetMidi.getIsValCc();
            let isValPc = isAssignTargetMidi.getIsValPc();
            let isBankMsbOff = isAssignTargetMidi.getIsBankMsbOff();

            let idsMidiCh = [
                `#assign-top${mode}-${currentPage + 1}-midi-ch`,                
            ];

            let idsMidiCC = [
                `#assign-top${mode}-${currentPage + 1}-midi-cc`,                
                `#assign-top${mode}-${currentPage + 1}-cc-value-min`,                
                `#assign-top${mode}-${currentPage + 1}-cc-value-max`,                
            ];

            let idsMidiPc = [
                `#assign-top${mode}-${currentPage + 1}-pc`,                
                `#assign-top${mode}-${currentPage + 1}-midi-msb`,                
            ];

            let idsBankLsb = [
                `#assign-top${mode}-${currentPage + 1}-midi-lsb`,                
            ];

            if (!changeDataDial) {
                disableLabelTopAssign(!(isValCc || isValPc), idsMidiCh);
                disableLabelTopAssign(!isValCc, idsMidiCC);
                disableLabelTopAssign(!isValPc, idsMidiPc);
            }

            disableLabelTopAssign(!(isValPc && !isBankMsbOff), idsBankLsb);
        }
    };

    function updateDialStatus(id, disable) {
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('opacity', disable ? '1' : '0.4');
        $(`#${id}-mask`).css('display', disable ? 'none' : '');
        $(`#${id}-dial`).attr('tabindex', disable ? '0' : '-1');
    };
})();