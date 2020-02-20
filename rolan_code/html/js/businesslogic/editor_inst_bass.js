(function () {
    const INST_KEY = ['inst1', 'inst2', 'inst3'];
    const CONTROL_TYPE = [
        { key: 0, string: 'dynamic' },
        { key: 1, string: 'osc' },
        { key: 2, string: 'analog-gr' },
        { key: 3, string: 'e-bass' },
        { key: 4, string: 'ac-bass' },
        { key: 5, string: 'e-gtr' },
        { key: 6, string: 'poly-fx' },
    ];

    const OSC_LIST_INPUT = ['pitch', 'fine', 'pitchenvattack', 'pitchenvdepth', 'pitchbenddepth', 'pitchbendctl', 'ring-sw'];
    const OSC_LIST_PWM = ['pwmenvattack', 'pwmenvdepth', 'pulsewidth'];
    const OSC_LIST_FEEDBACK = ['feedback', 'harmonics'];
    const OSC_ALL_ID = ['pitch', 'fine', 'detune', 'sharpness', 'feedback', 'harmonics', 'supersaw', 'pulsewidth', 'pwmenvattack', 'pwmenvdepth', 'pitchenvattack', 'pitchenvdepth', 'pitchbenddepth', 'pitchbendctl', 'sync-sw', 'ring-sw'];
    const OSC_MODE_SIGGLE = ['pitch2', 'fine2', 'pitchenvattack2', 'pitchenvdecay2', 'pitchenvdepth2', 'level2', 'waveform2-select'];
    const LIST_ANALOG = ['comp-sw', 'pitch-a', 'fine-a', 'pitch-b', 'fine-b', 'duet-sw', 'sweep-sw', 'sweep-rise', 'sweep-fall', 'vibrato-sw', 'vibrato-rate', 'vibrato-depth', 'pitch-sw'];
    const GUITAR_TYPE_FRETLESS = ['depth', 'sens', 'attack', 'resonance', 'directlevel', 'tone-type-select'];
    const TYPE_AMP_PAGE = ['e-gtr', 'e-bass', 'ac-bass'];
    const BEND_DEPTH_ID = ['inst-bass-alttune-bend-depth_1', 'inst-bass-alttune-bend-depth_2', 'inst-bass-alttune-bend-depth_3', 'inst-bass-alttune-bend-depth_4', 'inst-bass-alttune-bend-depth_5', 'inst-bass-alttune-bend-depth_6'];
    const BEND_SW_CONTROL = ['inst-bass-alttune-bend-sw', 'inst-bass-alttune-bend-control'];
    const POLY_TYPE_TOUCHWAH = ['sens', 'frequency', 'comp-attack', 'comp-sustain', 'comp-sw', 'tone-type', 'peak', 'decay', 'filter', 'polarity', 'tone-type-select'];
    const POLY_TYPE_NOT_TOUCHWAH = ['gtr-volume', 'color', 'tone'];
    const POLY_TYPE_DISTORTION = ['gain', 'gain-balance'];

    const TOUCH_WAH = 4;
    const DISTORTION = 0;

    const BRIGHT_DISPLAY_LIST_TYPE_SELECT = [1, 2, 6, 9, 10, 12, 20, 22, 24, 26];
    const TUNING_TYPE = {
        USER: 24,
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

    const MODE_OSC_SINGLE = 0;
    const OSC_POLY = 1;
    const MODE_ANALOG = 2;
    const GTR_FRETLESS = 2;
    const EGTR_SP_TYPE_OFF = 0;

    const STATUS_E_BASS = [
        { id: 'tone-type-select', key: [9] },
        { id: 'mst-volume', key: [0, 1, 6, 5, 7, 8] },
        { id: 'rear-volume', key: [0, 1, 6, 5, 7, 8] },
        { id: 'front-volume', key: [0, 1, 6, 5, 7, 8] },
        { id: 'volume', key: [2, 3, 4, 9] },
        { id: 'tone', key: [0, 1, 6, 2, 3, 9] },
        { id: 'treble', key: [4] },
        { id: 'bass', key: [4] },
        { id: 'pu-select-select', key: [5] },
        { id: 'rear-tone', key: [5] },
        { id: 'front-tone', key: [5] },
        { id: 'treble-active', key: [7] },
        { id: 'bass-active', key: [7] },
        { id: 'treble-on', key: [8] },
        { id: 'bass-on', key: [8] },
        { id: 'solo-select', key: [8] },
        { id: 'sens', key: [9] },
        { id: 'depth', key: [9] },
        { id: 'attack', key: [9] },
        { id: 'resonance', key: [9] },
        { id: 'directlevel', key: [9] },
    ];

    const TYPE_SELECT_E_GTR = {
        ST: 0,
        LP: 1,
        FRETLESS: 2
    };

    const PU_SELECT_E_GTR = {
        REAR: 0,
        R_C: 1,
        CENTER: 2,
        C_F: 3,
        R_F: 4,
        FRONT: 5
    };

    const CONFIG_ENABLE_TYPE = [
        { key: TYPE_SELECT_E_GTR.ST, enable: [PU_SELECT_E_GTR.REAR, PU_SELECT_E_GTR.R_C, PU_SELECT_E_GTR.CENTER, PU_SELECT_E_GTR.C_F, PU_SELECT_E_GTR.FRONT] },
        { key: TYPE_SELECT_E_GTR.LP, enable: [PU_SELECT_E_GTR.REAR, PU_SELECT_E_GTR.R_F, PU_SELECT_E_GTR.FRONT] },
    ];

    let egtrController = {
        puSelect: 0,
        setSelectedPuSelect(puSelect) {
            this.puSelect = puSelect;
        },
        getSelectedPuSelect() {
            return this.puSelect;
        },
    };

    let typeSelectGtrDOM = {
        changeDataTypePosition(typeSelect) {
            let dataType = CONFIG_ENABLE_TYPE.find(x => x.key === typeSelect);
            let listDOM = $(`#inst-bass-guitar-e-gtr-pu-select-list`);
            listDOM.find('a').toArray().forEach((element, index) => {
                if (dataType.enable.includes(index)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
            this.triggerTypePosition(dataType.enable);
        },

        triggerTypePosition(dataEnable) {
            let prevSelectedPuSelect = egtrController.getSelectedPuSelect();
            let index;
            if (dataEnable.includes(prevSelectedPuSelect)) {
                index = prevSelectedPuSelect;
            } else if (prevSelectedPuSelect >= PU_SELECT_E_GTR.C_F) {
                index = dataEnable[dataEnable.length - 1];
            } else {
                index = dataEnable[0];
            }
            $(`#inst-bass-guitar-e-gtr-pu-select`).trigger('elf-change', index);
            $(`#inst-bass-guitar-e-gtr-pu-select`).trigger('elf-update', index);
        },
    };

    window.instBassController = {
        currentInst: null,
        listTab: {},
        type: 0,
        iDPitchFine: [],
        id12Str: [],
        setCurrentInst(currentInst) {
            this.currentInst = currentInst;
            updateActiveDial('inst-bass-osc-dynamic-sync-sw', this.currentInst !== 'inst1');
            updateActiveDial('inst-bass-osc-dynamic-ring-sw', this.currentInst !== 'inst1');
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

            let idAltTune = getIdAlTune();
            this.iDPitchFine = [...idAltTune.listIDPitchAndFine];
            this.id12Str = [...idAltTune.listID12Str];
        },

        eventsInstBass() {
            let self = this;
            $('#inst-bass-type').on('elf-changed elf-update', function (e, v) {
                let inst = self.currentInst;
                controlTypeAndTabInst.setSelectedTypeAndTab(v, null, inst);
                self.type = v;
                let type = convert2RawStringInstTab(self.type, CONTROL_TYPE);
                let currentTab = self.getCurrentTab(inst, type);
                for (let ele of CONTROL_TYPE) {
                    if (ele.key === v) {
                        $(`#inst-bass-list-tab-${ele.string}`).show();
                        $(`#inst-bass-list-tab-${ele.string}`).trigger('elf-change', [currentTab, true]);
                        $(`#inst-bass-list-tab-${ele.string}`).trigger('elf-update', currentTab);
                    } else {
                        $(`#inst-bass-list-tab-${ele.string}`).hide();
                    }
                };
            });

            for (let ele of CONTROL_TYPE) {
                $(`#inst-bass-list-tab-${ele.string}`).on('elf-changed', function (e, v, updateOnly) {
                    let strTab = $(e.target).find('label').eq(v).text();
                    let valueTab = INST_CONTROL.TAB_STR[strTab];
                    controlTypeAndTabInst.setSelectedTypeAndTab(null, valueTab, self.currentInst);

                    if (self.type === INST_CONTROL.TYPE.OSC && v === TAB_COMMON_OSC) {
                        let valueMonoPolyOsc = getDataParameter('inst-bass-osc-osc-monopolymode-dial');
                        updateDialStatus('inst-bass-osc-osc-portamentomode', valueMonoPolyOsc === OSC_POLY);
                    }

                    if (v === TAB_COMMON_ALTTUNE) {
                        if (self.type === INST_BASS.TYPE.E_BASS || self.type === INST_BASS.TYPE.AC_BASS || self.type === INST_BASS.TYPE.E_GUITAR) {
                            hiddenListId(['inst-bass-alttune-12str-sw', 'inst-bass-alttune-12str-type'], true);
                            hiddenListId(self.id12Str, true);
                            if ($('#inst-bass-alttune-12str-sw-mask').css('display') === 'none') {
                                let value12StrType = getDataParameter('inst-bass-alttune-12str-type-dial');
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
                            hiddenListId(['inst-bass-alttune-12str-sw', 'inst-bass-alttune-12str-type'], false);
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
        
                        let valueTuning = getDataParameter('inst-bass-alttune-tuning-type');
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

            $('#inst-bass-alttune-tuning-type').on('elf-changed', function (e, v) {
                disableListId(self.iDPitchFine, v === TUNING_TYPE.USER);
            });

            $('#inst-bass-alttune-12str-type-dial').on('elf-change', function (e, v) {
                disableListId(self.id12Str, v === ALT_TUNE.STR12_TYPE);
            });

            $('#inst-bass-osc-dynamic-waveform-select').on('elf-changed elf-update', (e, v) => {
                if (v === WAVEFORM.input) {
                    OSC_ALL_ID.forEach(e => {
                        updateDialStatus(`inst-bass-osc-dynamic-${e}`, false);
                    });
                } else {
                    updateDialStatus('inst-bass-osc-dynamic-supersaw', v === WAVEFORM.superSaw);

                    OSC_LIST_INPUT.forEach(e => {
                        updateDialStatus(`inst-bass-osc-dynamic-${e}`, v !== WAVEFORM.input);
                    });
                    OSC_LIST_FEEDBACK.forEach(e => {
                        updateDialStatus(`inst-bass-osc-dynamic-${e}`, v === WAVEFORM.feedback);
                    });
                    OSC_LIST_PWM.forEach(e => {
                        updateDialStatus(`inst-bass-osc-dynamic-${e}`, v === WAVEFORM.pwm);
                    });

                    updateDialStatus('inst-bass-osc-dynamic-sharpness', v === WAVEFORM.noise);
                    updateDialStatus('inst-bass-osc-dynamic-sync-sw', v !== WAVEFORM.noise);
                    updateDialStatus('inst-bass-osc-dynamic-detune', v === WAVEFORM.defaultSaw);
                }
            });

            $('#inst-bass-filter-dynamic-type-select').on('elf-changed elf-update', function (e, v) {
                updateDialStatus('inst-bass-filter-dynamic-slope-select', (v !== FILTER_TYPE.ladderLPF && v !== FILTER_TYPE.ladderHPF))
            });
            
            $('#inst-bass-filter-osc-type-select').on('elf-changed elf-update', function (e, v) {
                updateDialStatus('inst-bass-filter-osc-slope-select', (v !== FILTER_TYPE.ladderLPF && v !== FILTER_TYPE.ladderHPF))
            });
            $('#inst-bass-osc-osc-waveform1-select').on('elf-changed elf-update', function (e, v) {
                disableListId(['inst-bass-osc-osc-pulsewidth1', 'inst-bass-osc-osc-pwmodrate1'], v === WAVEFORM.pwm);
            });

            $('#inst-bass-osc-osc-waveform2-select').on('elf-changed elf-update', function (e, v) {
                let valueOscMode = getDataParameter('inst-bass-osc-osc-mode-select');
                disableListId(['inst-bass-osc-osc-pulsewidth2', 'inst-bass-osc-osc-pwmodrate2'], (v === WAVEFORM.pwm && valueOscMode !== MODE_OSC_SINGLE));
            });

            $('#inst-bass-osc-osc-mode-select').on('elf-changed elf-update', function (e, v) {
                OSC_MODE_SIGGLE.forEach(ele => {
                    updateDialStatus(`inst-bass-osc-osc-${ele}`, v !== MODE_OSC_SINGLE);
                });

                let valueWaveForm2 = getDataParameter('inst-bass-osc-osc-waveform2-select');
                disableListId(['inst-bass-osc-osc-pulsewidth2', 'inst-bass-osc-osc-pwmodrate2'], (valueWaveForm2 === WAVEFORM.pwm && v !== MODE_OSC_SINGLE));
                disableListId(['inst-bass-lfo1-osc-pitch2-depth', 'inst-bass-lfo2-osc-pitch2-depth'], v !== MODE_OSC_SINGLE);
            });

            $('#inst-bass-osc-osc-monopolymode-dial').on('elf-change', function (e, v) {
                updateDialStatus('inst-bass-osc-osc-portamentomode', v === OSC_POLY);
            });

            $('#inst-bass-analog-gr-mode-select').on('elf-changed elf-update', function (e, v) {
                LIST_ANALOG.forEach(e => {
                    updateDialStatus(`inst-bass-analog-gr-${e}`, v !== MODE_ANALOG);
                });
            });

            $('#inst-bass-bass-type-select').on('elf-changed elf-update', function (e, v) {
                STATUS_E_BASS.forEach(element => {
                    updateDialStatus(`inst-bass-bass-${element.id}`, element.key.includes(v));
                });
            });

            $(`#inst-bass-guitar-e-gtr-type-select`).on('elf-changed elf-update', function (e, v) {
                if (v !== GTR_FRETLESS) {
                    typeSelectGtrDOM.changeDataTypePosition(v);
                }
                updateDialStatus(`inst-bass-guitar-e-gtr-pu-select`, v !== GTR_FRETLESS);
                GUITAR_TYPE_FRETLESS.forEach(e => {
                    updateDialStatus(`inst-bass-guitar-e-gtr-${e}`, v === GTR_FRETLESS);
                });
            });

            $('#inst-bass-guitar-e-gtr-pu-select').on('elf-changed elf-update', function (e, v) {
                egtrController.setSelectedPuSelect(v);
            });

            TYPE_AMP_PAGE.forEach(typeAmp => {
                $(`#inst-bass-amp-${typeAmp}-type-select`).on('elf-changed elf-update', function (e, v) {
                    updateDialStatus(`inst-bass-amp-${typeAmp}-bright`, BRIGHT_DISPLAY_LIST_TYPE_SELECT.includes(v));
                });

                $(`#inst-bass-amp-${typeAmp}-sp-type-select`).on('elf-changed elf-update', function (e, v) {
                    disableListId([`inst-bass-amp-${typeAmp}-mic-position-select`, `inst-bass-amp-${typeAmp}-mic-type-select`], v !== EGTR_SP_TYPE_OFF);
                });
            });

            $('#inst-bass-poly-fx-type-select').on('elf-changed elf-update', function (e, v) {
                POLY_TYPE_TOUCHWAH.forEach(element => {
                    updateDialStatus(`inst-bass-poly-fx-${element}`, v === TOUCH_WAH);
                });
                POLY_TYPE_NOT_TOUCHWAH.forEach(element => {
                    updateDialStatus(`inst-bass-poly-fx-${element}`, v !== TOUCH_WAH);
                });
                POLY_TYPE_DISTORTION.forEach(element => {
                    updateDialStatus(`inst-bass-poly-fx-${element}`, v === DISTORTION);
                });
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
        let listIDPitchAndFine = [];
        $('#inst-bass-alttune-child-frame > div').each(function () {
            let idName = $(this).attr('id');
            let idContent = getIdContentInDial(idName);
            if (idName.indexOf('inst-bass-alttune-12str') !== -1 &&
                idName.indexOf('inst-bass-alttune-12str-sw') === -1 &&
                idName.indexOf('inst-bass-alttune-12str-type') === -1) {
                if (idContent !== '') {
                    listID12Str.push(idContent);
                }
            } else if (idName.indexOf('inst-bass-alttune-shift') !== -1 ||
                idName.indexOf('inst-bass-alttune-fine') !== -1) {
                if (idContent !== '') {
                    listIDPitchAndFine.push(idContent);
                }
            }
        });

        return { listID12Str: listID12Str, listIDPitchAndFine: listIDPitchAndFine }
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