(function () {
    const INST_KEY = ['inst1', 'inst2', 'inst3'];
    const CONTROL_TYPE = [
        { key: 0, string: 'dynamic' },
        { key: 1, string: 'osc' },
        { key: 2, string: 'gr-300' },
        { key: 3, string: 'e-gtr' },
        { key: 4, string: 'acoustic' },
        { key: 5, string: 'e-bass' },
        { key: 6, string: 'vio-gtr' },
        { key: 7, string: 'poly-fx' },
    ];

    const LIST_COMMON_STRING = ['pan_6', 'pan_5', 'pan_4', 'pan_3', 'pan_2', 'pan_1', 'lv_6', 'lv_5', 'lv_4', 'lv_3', 'lv_2', 'lv_1'];

    const OSC_LIST_INPUT = ['pitch', 'fine', 'pitchenvattack', 'pitchenvdepth', 'pitchbenddepth', 'pitchbendctl', 'ring-sw'];
    const OSC_LIST_PWM = ['pwmenvattack', 'pwmenvdepth', 'pulsewidth'];
    const OSC_LIST_FEEDBACK = ['feedback', 'harmonics'];
    const OSC_ALL_ID = ['pitch', 'fine', 'detune', 'sharpness', 'feedback', 'harmonics', 'supersaw', 'pulsewidth', 'pwmenvattack', 'pwmenvdepth', 'pitchenvattack', 'pitchenvdepth', 'pitchbenddepth', 'pitchbendctl', 'sync-sw', 'ring-sw'];
    const OSC_MODE_SIGGLE = ['pitch2', 'fine2', 'pitchenvattack2', 'pitchenvdecay2', 'pitchenvdepth2', 'level2', 'waveform2-select'];
    const LIST_GR300 = ['comp-sw', 'pitch-a', 'fine-a', 'pitch-b', 'fine-b', 'duet-sw', 'sweep-sw', 'sweep-rise', 'sweep-fall', 'vibrato-sw', 'vibrato-rate', 'vibrato-depth', 'picth-sw'];
    const GUITAR_TYPE_FRETLESS = ['depth', 'sens', 'attack', 'resonance', 'directlevel', 'tone-type-select'];
    const TYPE_AMP_PAGE = ['e-gtr', 'e-bass', 'acoustic'];
    const VIO_E_GTR = ['vio-gtr', 'e-gtr'];

    const POLY_TYPE_TOUCHWAH = ['sens', 'frequency', 'comp-attack', 'comp-sustain', 'comp-sw', 'tone-type', 'peak', 'decay', 'filter', 'polarity', 'tone-type-select'];
    const POLY_TYPE_NOT_TOUCHWAH = ['gtr-volume', 'color', 'tone'];
    const POLY_TYPE_DISTORTION = ['gain', 'gain-balance'];

    const BEND_DEPTH_ID = ['inst-guitar-alttune-bend-depth_1', 'inst-guitar-alttune-bend-depth_2', 'inst-guitar-alttune-bend-depth_3', 'inst-guitar-alttune-bend-depth_4', 'inst-guitar-alttune-bend-depth_5', 'inst-guitar-alttune-bend-depth_6'];
    const BEND_SW_CONTROL = ['inst-guitar-alttune-bend-sw', 'inst-guitar-alttune-bend-control'];

    const TOUCH_WAH = 4;
    const DISTORTION = 0;

    const BRIGHT_DISPLAY_LIST_TYPE_SELECT = [1, 2, 6, 9, 10, 12, 20, 22, 24, 26];
    const TUNING_TYPE = {
        USER: 36,
    };

    const ALT_TUNE = {
        STR12_TYPE: 1,
    };

    const TAB_COMMON_ALTTUNE = 1;
    const TAB_COMMON_OSC = 2;
    const WAVEFORM = {
        pwm: 4,
        defaultSaw: 5,
        noise: 6,
        feedback: 7,
        superSaw: 8,
        input: 9
    };

    const FILTER_TYPE = {
        ladderLPF: 4,
        ladderHPF: 5
    };

    const ACT_TYPE = {
        reso: 6,
        banjo: 7,
        nylon: 5,
        sitar: 8
    };

    const E_BASS_TYPE = {
        JP: 0,
        FRETLESS: 2,
    }

    const MODE_OSC_SINGLE = 0;
    const OSC_POLY = 1;
    const MODE_GR300 = 2;
    const GTR_FRETLESS = 11;
    const EGTR_SP_TYPE_OFF = 0;
    const C_AND_F_IN_PUSELECT = 3;
    const TYPE_SELECT_E_VIO_GTR = {
        CLA_ST: 0,
        MOD_ST: 1,
        TE: 2,
        LP: 3,
        P_90: 4,
        _355: 5,
        L4: 6,
        RICK: 7,
        LIPS: 8,
        WIDERANGE: 9,
        BRIGHTHUM: 10,
        FRETLESS: 11
    };

    const PU_SELECT_E_VIO_GTR = {
        REAR: 0,
        R_C: 1,
        CENTER: 2,
        C_F: 3,
        R_F: 4,
        FRONT: 5,
        ALL: 6
    };

    const CONFIG_ENABLE_TYPE = [
        { key: TYPE_SELECT_E_VIO_GTR.CLA_ST, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_C, PU_SELECT_E_VIO_GTR.CENTER, PU_SELECT_E_VIO_GTR.C_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.MOD_ST, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_C, PU_SELECT_E_VIO_GTR.CENTER, PU_SELECT_E_VIO_GTR.C_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.TE, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.LP, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.P_90, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR._355, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.L4, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.RICK, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.LIPS, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_C, PU_SELECT_E_VIO_GTR.CENTER, PU_SELECT_E_VIO_GTR.C_F, PU_SELECT_E_VIO_GTR.FRONT, PU_SELECT_E_VIO_GTR.ALL] },
        { key: TYPE_SELECT_E_VIO_GTR.WIDERANGE, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
        { key: TYPE_SELECT_E_VIO_GTR.BRIGHTHUM, enable: [PU_SELECT_E_VIO_GTR.REAR, PU_SELECT_E_VIO_GTR.R_F, PU_SELECT_E_VIO_GTR.FRONT] },
    ];

    let vioEgtrController = {
        puSelect: 0,
        setSelectedPuSelect(puSelect) {
            this.puSelect = puSelect;
        },
        getSelectedPuSelect() {
            return this.puSelect;
        },
    };

    let typeSelectEVioGtrDOM = {
        changeDataTypePosition(typeSelect, typeGuitar) {
            let dataType = CONFIG_ENABLE_TYPE.find(x => x.key === typeSelect);
            let listDOM = $(`#inst-guitar-guitar-${typeGuitar}-pu-select-list`);
            listDOM.find('a').toArray().forEach((element, index) => {
                if (dataType.enable.includes(index)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
            this.triggerTypePosition(dataType.enable, typeGuitar);
        },

        triggerTypePosition(dataEnable, typeGuitar) {
            let prevSelectedPuSelect = vioEgtrController.getSelectedPuSelect();
            let index;
            if (dataEnable.includes(prevSelectedPuSelect)) {
                index = prevSelectedPuSelect;
            } else if (dataEnable.includes(prevSelectedPuSelect + 1)) {
                index = prevSelectedPuSelect + 1;
                if (prevSelectedPuSelect <= C_AND_F_IN_PUSELECT) {
                    index++
                }
            } else {
                index = dataEnable[0];
            }
            $(`#inst-guitar-guitar-${typeGuitar}-pu-select`).trigger('elf-change', index);
            $(`#inst-guitar-guitar-${typeGuitar}-pu-select`).trigger('elf-update', index);
        },
    };

    window.instGuitarController = {
        currentInst: null,
        listTab: {},
        type: 0,
        iDPitchFine: [],
        id12Str: [],
        setCurrentInst(currentInst) {
            this.currentInst = currentInst;
            updateActiveDial('inst-guitar-osc-dynamic-sync-sw', this.currentInst !== 'inst1');
            updateActiveDial('inst-guitar-osc-dynamic-ring-sw', this.currentInst !== 'inst1');
        },
        getCurrentInst() {
            return this.currentInst;
        },
        setCurrentTab(currentTab, inst, type) {
            this.listTab[`tab_${inst}_${type}`] = currentTab;
        },
        getCurrentTab(inst, type) {
            return this.listTab[`tab_${inst}_${type}`];
        },
        
        resetTab() {
            let self = this;
            INST_KEY.forEach(instKey => {
                CONTROL_TYPE.forEach(typeStr => {
                    self.listTab[`tab_${instKey}_${typeStr.string}`] = 0;
                });
            });
        },

        initialize() {
            INST_KEY.forEach(i => {
                CONTROL_TYPE.forEach(t => {
                    this.listTab[`tab_${i}_${t.string}`] = 0;
                });
            });
            instController.disabledCommonString(APP_MST_PATCH_TYPE, '-guitar');
            instController.disabledCommonString(APP_MST_PATCH_TYPE, '-bass');

            let idAltTune = getIdAlTune();
            this.iDPitchFine = [...idAltTune.listIDPicthAndFine];
            this.id12Str = [...idAltTune.listID12Str];
        },

        loadPageInitInst() {
            $('#inst-wrapper').show();
            $('#inst-trigger').hide();
            for (let ele of CONTROL_TYPE) {
                if (ele.key === INST_GUITAR.TYPE.DYNAMIC_SYNTH) {
                    $(`#inst-list-tab-${ele.string}`).show();
                } else {
                    $(`#inst-list-tab-${ele.string}`).hide();
                }
            };
        },

        eventsInstGuitar() {
            let self = this;
            $('#inst-type').on('elf-changed elf-update', function (e, v) {
                let inst = self.currentInst;
                controlTypeAndTabInst.setSelectedTypeAndTab(v, null, inst);
                self.type = v;
                let type = convert2RawStringInstTab(self.type, CONTROL_TYPE);
                let currentTab = self.getCurrentTab(inst, type);
                for (let ele of CONTROL_TYPE) {
                    if (ele.key === v) {
                        $(`#inst-list-tab-${ele.string}`).show();
                        $(`#inst-list-tab-${ele.string}`).trigger('elf-change', [currentTab, true]);
                        $(`#inst-list-tab-${ele.string}`).trigger('elf-update', currentTab);
                    } else {
                        $(`#inst-list-tab-${ele.string}`).hide();
                    }
                };
            });

            for (let ele of CONTROL_TYPE) {
                $(`#inst-list-tab-${ele.string}`).on('elf-changed', function (e, v, updateOnly) {
                    let strTab = $(e.target).find('label').eq(v).text();
                    let valueTab = INST_CONTROL.TAB_STR[strTab];
                    controlTypeAndTabInst.setSelectedTypeAndTab(null, valueTab, self.currentInst);
                    if (self.type === INST_CONTROL.TYPE.OSC && v === TAB_COMMON_OSC) {
                        let valueMonoPolyOsc = getDataParameter('inst-guitar-osc-osc-monopolymode-dial');
                        updateDialStatus('inst-guitar-osc-osc-portamentomode', valueMonoPolyOsc === OSC_POLY);
                    }

                    if (v === TAB_COMMON_ALTTUNE) {
                        if (self.type === INST_GUITAR.TYPE.E_GUITAR || self.type === INST_GUITAR.TYPE.ACOUSTIC || self.type === INST_GUITAR.TYPE.E_BASS) {
                            hiddenListId(['inst-guitar-alttune-12str-sw', 'inst-guitar-alttune-12str-type'], true);
                            hiddenListId(self.id12Str, true);
                            if ($('#inst-guitar-alttune-12str-sw-mask').css('display') === 'none') {
                                let value12StrType = getDataParameter('inst-guitar-alttune-12str-type-dial');
                                disableListId(self.id12Str, value12StrType === ALT_TUNE.STR12_TYPE);
                            } else {
                                disableListId(self.id12Str, false);
                            }
                            BEND_DEPTH_ID.forEach(ele => {
                                updateActiveDial(`${ele}_1`, false);
                                updateActiveDial(`${ele}`, true);
                            });

                            BEND_SW_CONTROL.forEach(ele => {
                                updateActiveDial(`${ele}-1`, false);
                                updateActiveDial(`${ele}`, true);
                            });
                        } else {
                            hiddenListId(['inst-guitar-alttune-12str-sw', 'inst-guitar-alttune-12str-type'], false);
                            hiddenListId(self.id12Str, false);
                            BEND_DEPTH_ID.forEach(ele => {
                                updateActiveDial(`${ele}_1`, true);
                                updateActiveDial(`${ele}`, false);
                            });
        
                            BEND_SW_CONTROL.forEach(ele => {
                                updateActiveDial(`${ele}-1`, true);
                                updateActiveDial(`${ele}`, false);
                            });
                        }

                        let valueTuning = getDataParameter('inst-guitar-alttune-tuning-type');
                        disableListId(self.iDPitchFine, valueTuning === TUNING_TYPE.USER);
                    }

                    if (updateOnly) {
                        return;
                    }
                    let type = convert2RawStringInstTab(self.type, CONTROL_TYPE);
                    let inst = self.currentInst;
                    self.setCurrentTab(v, inst, type);
                });
            }

            $('#inst-guitar-alttune-tuning-type').on('elf-changed', function (e, v) {
                disableListId(self.iDPitchFine, v === TUNING_TYPE.USER);
            });

            $('#inst-guitar-alttune-12str-type-dial').on('elf-change', function (e, v) {
                disableListId(self.id12Str, v === ALT_TUNE.STR12_TYPE);
            });

            $('#inst-guitar-osc-dynamic-waveform-select').on('elf-changed elf-update', (e, v) => {
                if (v === WAVEFORM.input) {
                    OSC_ALL_ID.forEach(e => {
                        updateDialStatus(`inst-guitar-osc-dynamic-${e}`, false);
                    });
                } else {
                    updateDialStatus('inst-guitar-osc-dynamic-supersaw', v === WAVEFORM.superSaw);

                    OSC_LIST_INPUT.forEach(e => {
                        updateDialStatus(`inst-guitar-osc-dynamic-${e}`, v !== WAVEFORM.input);
                    });
                    OSC_LIST_FEEDBACK.forEach(e => {
                        updateDialStatus(`inst-guitar-osc-dynamic-${e}`, v === WAVEFORM.feedback);
                    });
                    OSC_LIST_PWM.forEach(e => {
                        updateDialStatus(`inst-guitar-osc-dynamic-${e}`, v === WAVEFORM.pwm);
                    });

                    updateDialStatus('inst-guitar-osc-dynamic-sharpness', v === WAVEFORM.noise);
                    updateDialStatus('inst-guitar-osc-dynamic-sync-sw', v !== WAVEFORM.noise);
                    updateDialStatus('inst-guitar-osc-dynamic-detune', v === WAVEFORM.defaultSaw);
                }
            });

            $('#inst-guitar-filter-dynamic-type-select').on('elf-changed elf-update', function (e, v) {
                updateDialStatus('inst-guitar-filter-dynamic-slope-select', (v !== FILTER_TYPE.ladderLPF && v !== FILTER_TYPE.ladderHPF))
            });

            $('#inst-guitar-filter-osc-type-select').on('elf-changed elf-update', function (e, v) {
                updateDialStatus('inst-guitar-filter-osc-slope-select', (v !== FILTER_TYPE.ladderLPF && v !== FILTER_TYPE.ladderHPF))
            });
            $('#inst-guitar-osc-osc-waveform1-select').on('elf-changed elf-update', function (e, v) {
                disableListId(['inst-guitar-osc-osc-pulsewidth1', 'inst-guitar-osc-osc-pwmodrate1'], v === WAVEFORM.pwm);
            });

            $('#inst-guitar-osc-osc-waveform2-select').on('elf-changed elf-update', function (e, v) {
                let valueOscMode = getDataParameter('inst-guitar-osc-osc-mode-select');
                disableListId(['inst-guitar-osc-osc-pulsewidth2', 'inst-guitar-osc-osc-pwmodrate2'], (v === WAVEFORM.pwm && valueOscMode !== MODE_OSC_SINGLE));
            });

            $('#inst-guitar-osc-osc-mode-select').on('elf-changed elf-update', function (e, v) {
                OSC_MODE_SIGGLE.forEach(ele => {
                    updateDialStatus(`inst-guitar-osc-osc-${ele}`, v !== MODE_OSC_SINGLE);
                });

                let valueWaveForm2 = getDataParameter('inst-guitar-osc-osc-waveform2-select');
                disableListId(['inst-guitar-osc-osc-pulsewidth2', 'inst-guitar-osc-osc-pwmodrate2'], (valueWaveForm2 === WAVEFORM.pwm && v !== MODE_OSC_SINGLE));
                disableListId(['inst-guitar-lfo1-osc-pitch2-depth', 'inst-guitar-lfo2-osc-pitch2-depth'], v !== MODE_OSC_SINGLE);
            });

            $('#inst-guitar-osc-osc-monopolymode-dial').on('elf-change', function (e, v) {
                updateDialStatus('inst-guitar-osc-osc-portamentomode', v === OSC_POLY);
            });

            $('#inst-guitar-gr300-mode-select').on('elf-changed elf-update', function (e, v) {
                LIST_GR300.forEach(e => {
                    updateDialStatus(`inst-guitar-gr300-${e}`, v !== MODE_GR300);
                });
            });

            VIO_E_GTR.forEach(ele => {
                $(`#inst-guitar-guitar-${ele}-type-select`).on('elf-changed elf-update', function (e, v) {
                    if (v !== GTR_FRETLESS) {
                        typeSelectEVioGtrDOM.changeDataTypePosition(v, ele);
                    }
                    updateDialStatus(`inst-guitar-guitar-${ele}-pu-select`, v !== GTR_FRETLESS);
                    GUITAR_TYPE_FRETLESS.forEach(e => {
                        updateDialStatus(`inst-guitar-guitar-${ele}-${e}`, v === GTR_FRETLESS);
                    });
                });

                $(`#inst-guitar-guitar-${ele}-pu-select`).on('elf-changed elf-update', function (e, v) {
                    vioEgtrController.setSelectedPuSelect(v);
                });
            });

            TYPE_AMP_PAGE.forEach(typeAmp => {
                $(`#inst-guitar-amp-${typeAmp}-type-select`).on('elf-changed elf-update', function (e, v) {
                    updateDialStatus(`inst-guitar-amp-${typeAmp}-bright`, BRIGHT_DISPLAY_LIST_TYPE_SELECT.includes(v));
                });

                $(`#inst-guitar-amp-${typeAmp}-sp-type-select`).on('elf-changed elf-update', function (e, v) {
                    disableListId([`inst-guitar-amp-${typeAmp}-mic-position-select`, `inst-guitar-amp-${typeAmp}-mic-type-select`], v !== EGTR_SP_TYPE_OFF);
                    if (typeAmp === 'e-bass') {
                        disableListId([`inst-guitar-amp-${typeAmp}-mic-level`, `inst-guitar-amp-${typeAmp}-direct-level`], v !== EGTR_SP_TYPE_OFF);
                    }
                });
            });

            $('#inst-guitar-acoustic-type-select').on('elf-changed elf-update', function (e, v) {
                // Inst1Acoustic_Type != RESO, BANJO
                updateDialStatus(`inst-guitar-acoustic-resonance`, v === ACT_TYPE.reso || v === ACT_TYPE.banjo);
                updateDialStatus(`inst-guitar-acoustic-body`, !(v === ACT_TYPE.reso || v === ACT_TYPE.banjo));
                // Inst1Acoustic_Type == NYLON, SITAR, BANJO
                updateDialStatus(`inst-guitar-acoustic-attack`, (v === ACT_TYPE.nylon || v === ACT_TYPE.sitar || v === ACT_TYPE.banjo));

                //Inst1Acoustic_Type == RESO
                updateDialStatus(`inst-guitar-acoustic-sustain`, v === ACT_TYPE.reso);

                //Inst1Acoustic_Type == SITAR
                disableListId(['inst-guitar-acoustic-buzz', 'inst-guitar-acoustic-decay', 'inst-guitar-acoustic-color', 'inst-guitar-acoustic-sens', 'inst-guitar-acoustic-pu-select'], v === ACT_TYPE.sitar);
            });

            $('#inst-guitar-e-bass-type-select').on('elf-changed elf-update', function (e, v) {
                disableListId(['inst-guitar-e-bass-rear-volume', 'inst-guitar-e-bass-front-volume'], v === E_BASS_TYPE.JP);
                GUITAR_TYPE_FRETLESS.forEach(element => {
                    updateDialStatus(`inst-guitar-e-bass-${element}`, v === E_BASS_TYPE.FRETLESS);
                });
            });

            $('#inst-guitar-poly-fx-type-select').on('elf-changed elf-update', function (e, v) {
                POLY_TYPE_TOUCHWAH.forEach(element => {
                    updateDialStatus(`inst-guitar-poly-fx-${element}`, v === TOUCH_WAH);
                });
                POLY_TYPE_NOT_TOUCHWAH.forEach(element => {
                    updateDialStatus(`inst-guitar-poly-fx-${element}`, v !== TOUCH_WAH);
                });
                POLY_TYPE_DISTORTION.forEach(element => {
                    updateDialStatus(`inst-guitar-poly-fx-${element}`, v === DISTORTION);
                });
            });

            $('#inst-trigger, #inst-bass-trigger').on('mousedown', (e) => {
                $(e.currentTarget).addClass('inst-trigger-btn-mousedown').removeClass('inst-trigger-btn-mouseup');
                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.RETRIGGER), hex2(0));
            }).on('mouseup', (e) => {
                $(e.currentTarget).addClass('inst-trigger-btn-mouseup').removeClass('inst-trigger-btn-mousedown');
            });
        },

        controlBtnTrigger(isActive) {
            if (isActive) {
                $('#inst-trigger, #inst-bass-trigger').show();
            } else {
                $('#inst-trigger, #inst-bass-trigger').hide();
            }
        }
    };

    // event change GK NORMAL PATCH
    window.instController = {
        disabledCommonString(value, mode) {
            LIST_COMMON_STRING.forEach(element => {
                updateDialStatus(`inst${mode}-common-str-${element}`, value === MST_PATCH_TYPE.GK);
            });
        },
    };

    function disableListId(listId, active) {
        listId.forEach(id => {
            updateDialStatus(id, active);
        });
    };

    function hiddenListId(listId, active) {
        listId.forEach(id => {
            updateActiveDial(id, active);
        });
    };

    function getIdContentInDial(id) {
        return (id && id.indexOf('dial') != -1) ? id.substring(0, id.length - 5) : '';
    }

    //alttune
    //get id dial 12str AND PITCH
    function getIdAlTune() {
        let listID12Str = [];
        let listIDPicthAndFine = [];
        $('#inst-guitar-alttune-child-frame > div').each(function () {
            let idName = $(this).attr('id');
            let idContent = getIdContentInDial(idName);
            if (idName.indexOf('inst-guitar-alttune-12str') !== -1 &&
                idName.indexOf('inst-guitar-alttune-12str-sw') === -1 &&
                idName.indexOf('inst-guitar-alttune-12str-type') === -1) {
                if (idContent !== '') {
                    listID12Str.push(idContent);
                }
            } else if (idName.indexOf('inst-guitar-alttune-shift') !== -1 ||
                idName.indexOf('inst-guitar-alttune-fine') !== -1) {
                if (idContent !== '') {
                    listIDPicthAndFine.push(idContent);
                }
            }
        });

        return { listID12Str: listID12Str, listIDPicthAndFine: listIDPicthAndFine }
    };

    function getDataParameter(id) {
        let item = _items[id];

        return Parameter.value(item.pid, item.size, item.vofs);
    }

    function convert2RawStringInstTab(tab, tabList) {
        let string = '';
        for (let ele of tabList) {
            if (ele.key === tab) {
                string = ele.string;
                break;
            }
        }

        return string;
    };

    /** 
     * status disable/enable dial
     * private function
     * @param {string} id 
     * @param {boolean} active [true||false]
    */
    function updateDialStatus(id, active) {
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('opacity', active ? '1' : '0.4');
        $(`#${id}-mask`).css('display', active ? 'none' : '');
        $(`#${id}-dial`).attr('tabindex', active ? '0' : '-1');
    };

    function updateActiveDial(id, isActive) {
        $(`#${id}-mask`).css('display', 'none');
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('display', isActive ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isActive ? '0' : '-1');
    };
})();