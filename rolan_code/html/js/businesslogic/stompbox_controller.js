/* use text variation instead of stompbox */

(function () {

    const IDS = {
        selectMenuFifty: '#stompbox-select-menu-1-btn',
        selectMenuTen: '#stompbox-select-menu-2-btn',
        writeStompboxFifty: '#write-to-stompbox-num-1-select',
        writeStompboxTen: '#write-to-stompbox-num-2-select',
        selectButtonOk: '#stompbox-select-ok',
        writeStompboxInput: '#write-to-stompbox-name-input',
        writeButtonOk: '#write-to-stompbox-ok',
        stompboxCancel: '#stompbox-select-cancel',
    }

    const INST_KEY = [
        CHAIN_BLOCK_ID_MAP.inst1,
        CHAIN_BLOCK_ID_MAP.inst2,
        CHAIN_BLOCK_ID_MAP.inst3,
    ];

    const FX_KEY = [
        CHAIN_BLOCK_ID_MAP.fx1,
        CHAIN_BLOCK_ID_MAP.fx2,
        CHAIN_BLOCK_ID_MAP.fx3,
    ];

    const VALUE_VARIATION_BOX = {
        SELECT: 0,
        WRITE: 1,
    }

    const TOTAL_STOMPBOX_FIFTY = 50;
    const TOTAL_STOMPBOX_TEN = 10;

    const OFF_NUM = 1;

    // map with id CHAIN_BLOCK_ID_MAP
    const SELECT_ID_BLOCK = {
        inst1: 0,
        inst2: 1,
        inst3: 2,
        inst1_lfo: 3,
        inst2_lfo: 4,
        inst3_lfo: 5,
        inst1_seq: 6,
        inst2_seq: 7,
        inst3_seq: 8,
        inst1_amp: 9,
        inst2_amp: 10,
        inst3_amp: 11,
        cmp: 12,
        ds: 13,
        amp: 14,
        ns: 15,
        eq1: 16,
        eq2: 17,
        dly1: 18,
        dly2: 19,
        mdly: 20,
        cho: 21,
        fx1: 22,
        fx2: 59,
        fx3: 96,
        rev: 133,
        fv1: 134,
        fv2: 135,
    };

    const NAME_WRITE_ADDRESS = {
        inst: 0,
        cmp: 0,
        fx_cmp: 0,
        ds: 1,
        amp: 2,
        inst_amp: 2,
        ns: 3,
        eq1: 4,
        eq2: 4,
        dly1: 5,
        dly2: 5,
        mdly: 6,
        fx_delay: 6,
        cho: 7,
        fx_chorus: 7,
        fx_ac_reso: 8,
        fx_a_wah: 9,
        fx_c_vibe: 10,
        fx_defretter: 11,
        fx_defretter_bass: 12,
        fx_flanger: 13,
        fx_flanger_bass: 13,
        fx_g_eq: 14,
        fx_parametric_eq: 14,
        fx_harmonist: 15,
        fx_humanizer: 16,
        fx_isolator: 17,
        fx_limiter: 18,
        fx_lofi: 19,
        fx_octave: 20,
        fx_octave_bass: 20,
        fx_pan: 21,
        fx_pedal_bend: 22,
        fx_phaser: 23,
        fx_pitch_shift: 24,
        fx_ring_mod: 25,
        fx_rotary: 26,
        fx_sitar_sim: 27,
        fx_slicer: 28,
        fx_slow_gear: 29,
        fx_slow_gear_bass: 29,
        fx_sound_hold: 30,
        fx_t_wah: 31,
        fx_t_wah_bass: 31,
        fx_tremolo: 32,
        fx_vibrato: 33,
        fx_wah: 34,
        rev: 35,
        fx_reverb: 35,
        fv1: 36,
        fv2: 36,
        fx_fv: 36,
    };

    const STR_CONFIG = {
        STR_BASS: '_bass',
        INST: 'inst',
        FX: 'fx',
        FX1: 'fx-1',
        FX2: 'fx-2',
        FX3: 'fx-3',
        AMP: 'amp',
        VAR_BASS: 'Bass',
        VAR_INST: 'Inst',
        EFCT_DEFAULT: 'Efct',
        VARI: 'Vari',
        STR_LFO: '_lfo',
        STR_SEQ: '_seq',
        STR_AMP: '_amp',
        VARIATION: 'VARIATION',
        AMP_VARIATION: 'AMP VARIATION',
        LFO_VARIATION: 'LFO VARIATION 1&2',
        SEQ_VARIATION: 'SEQ VARIATION'
    }

    const INST_TAB = [
        { key: INST_CONTROL.TAB.COMMON, string: '' },
        { key: INST_CONTROL.TAB.LFO1, string: STR_CONFIG.STR_LFO },
        { key: INST_CONTROL.TAB.LFO2, string: STR_CONFIG.STR_LFO },
        { key: INST_CONTROL.TAB.SEQ, string: STR_CONFIG.STR_SEQ },
        { key: INST_CONTROL.TAB.AMP, string: STR_CONFIG.STR_AMP },
    ];

    const INST_TYPE_ID = [
        { key: INST_GUITAR.TYPE.DYNAMIC_SYNTH, string: '-dynamic', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.OSC_SYNTH, string: '-osc', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.GR_300, string: '-gr-300', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.E_GUITAR, string: '-e-gtr', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.ACOUSTIC, string: '-acoustic', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.E_BASS, string: '-e-bass', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.VIO_GUITAR, string: '-vio-gtr', mode: MODE.GUITAR },
        { key: INST_GUITAR.TYPE.POLY_FX, string: '-poly-fx', mode: MODE.GUITAR },

        { key: INST_BASS.TYPE.DYNAMIC_SYNTH, string: '-dynamic', mode: MODE.BASS },
        { key: INST_BASS.TYPE.OSC_SYNTH, string: '-osc', mode: MODE.BASS },
        { key: INST_BASS.TYPE.ANALOG_GR, string: '-analog-gr', mode: MODE.BASS },
        { key: INST_BASS.TYPE.E_BASS, string: '-e-bass', mode: MODE.BASS },
        { key: INST_BASS.TYPE.AC_BASS, string: '-ac-bass', mode: MODE.BASS },
        { key: INST_BASS.TYPE.E_GUITAR, string: '-e-gtr', mode: MODE.BASS },
        { key: INST_BASS.TYPE.POLY_FX, string: '-poly-fx', mode: MODE.BASS },
    ];

    const INST_VARIATION_ADDRESS = {
        TYPE: [
            { key: INST_GUITAR.TYPE.DYNAMIC_SYNTH, string: 'DynaSynth', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.OSC_SYNTH, string: 'OscSynth', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.GR_300, string: 'Gr300', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.E_GUITAR, string: 'EGtr', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.ACOUSTIC, string: 'Acoustic', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.E_BASS, string: 'EBass', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.VIO_GUITAR, string: 'VioGtr', mode: MODE.GUITAR },
            { key: INST_GUITAR.TYPE.POLY_FX, string: 'PolyFx', mode: MODE.GUITAR },

            { key: INST_BASS.TYPE.DYNAMIC_SYNTH, string: 'DynaSynth', mode: MODE.BASS },
            { key: INST_BASS.TYPE.OSC_SYNTH, string: 'OscSynth', mode: MODE.BASS },
            { key: INST_BASS.TYPE.ANALOG_GR, string: 'AnalogGr', mode: MODE.BASS },
            { key: INST_BASS.TYPE.E_BASS, string: 'EBass', mode: MODE.BASS },
            { key: INST_BASS.TYPE.AC_BASS, string: 'AcBass', mode: MODE.BASS },
            { key: INST_BASS.TYPE.E_GUITAR, string: 'VioGtr', mode: MODE.BASS },
            { key: INST_BASS.TYPE.POLY_FX, string: 'PolyFx', mode: MODE.BASS },
        ],
        TAB: [
            { key: INST_CONTROL.TAB.LFO1, string: 'Lfo' },
            { key: INST_CONTROL.TAB.LFO2, string: 'Lfo' },
            { key: INST_CONTROL.TAB.SEQ, string: 'Seq' },
        ]
    }

    const FX_NAME_WRITE = [
        { key: FX_TYPE.COMPRESSOR, string: 'cmp' },
        { key: FX_TYPE.DELAY, string: 'delay' },
        { key: FX_TYPE.CHORUS, string: 'chorus' },
        { key: FX_TYPE.AC_RESONANCE, string: 'ac_reso' },
        { key: FX_TYPE.AUTO_WAH, string: 'a_wah' },
        { key: FX_TYPE.CLASSIC_VIBE, string: 'c_vibe' },
        { key: FX_TYPE.DEFRETTER, string: 'defretter' },
        { key: FX_TYPE.DEFRETTER_BASS, string: 'defretter_bass' },
        { key: FX_TYPE.FLANGER, string: 'flanger' },
        { key: FX_TYPE.FLANGER_BASS, string: 'flanger_bass' },
        { key: FX_TYPE.GRAPHIC_EQ, string: 'g_eq' },
        { key: FX_TYPE.PARAMETRIC_EQ, string: 'parametric_eq' },
        { key: FX_TYPE.HARMONIST, string: 'harmonist' },
        { key: FX_TYPE.HUMANIZER, string: 'humanizer' },
        { key: FX_TYPE.ISOLATOR, string: 'isolator' },
        { key: FX_TYPE.LIMITER, string: 'limiter' },
        { key: FX_TYPE.LO_FI, string: 'lofi' },
        { key: FX_TYPE.OCTAVE, string: 'octave' },
        { key: FX_TYPE.OCTAVE_BASS, string: 'octave' },
        { key: FX_TYPE.PAN, string: 'pan' },
        { key: FX_TYPE.PEDAL_BEND, string: 'pedal_bend' },
        { key: FX_TYPE.PHASER, string: 'phaser' },
        { key: FX_TYPE.PITCH_SHIFTER, string: 'pitch_shift' },
        { key: FX_TYPE.RING_MOD, string: 'ring_mod' },
        { key: FX_TYPE.ROTARY, string: 'rotary' },
        { key: FX_TYPE.SITAR_SIM, string: 'sitar_sim' },
        { key: FX_TYPE.SLICER, string: 'slicer' },
        { key: FX_TYPE.SLOW_GEAR, string: 'slow_gear' },
        { key: FX_TYPE.SLOW_GEAR_BASS, string: 'slow_gear_bass' },
        { key: FX_TYPE.SOUND_HOLD, string: 'sound_hold' },
        { key: FX_TYPE.TOUCH_WAH, string: 't_wah' },
        { key: FX_TYPE.TOUCH_WAH_BASS, string: 't_wah_bass' },
        { key: FX_TYPE.TREMOLO, string: 'tremolo' },
        { key: FX_TYPE.VIBRATO, string: 'vibrato' },
        { key: FX_TYPE.WAH, string: 'wah' },
        { key: FX_TYPE.REVERB, string: 'reverb' },
        { key: FX_TYPE.FOOT_VOLUME, string: 'fv' },
    ];

    window.stompboxController = {
        selectedStompboxPage: null,
        currentStompboxNumMap: {},
        initStompboxMap() {
            for (const prop in SELECT_ID_BLOCK) {
                if (FX_KEY.includes(prop)) {
                    for (const ele of FX_TYPE_LIST) {
                        this.currentStompboxNumMap[prop + '-' + ele] = OFF_NUM;
                    }
                } else {
                    this.currentStompboxNumMap[prop] = OFF_NUM;
                }
            }
        },

        assignStompboxEvents() {
            let self = this;
            $('.stompbox-select-box-style').on('elf-changed', function (e, v) {
                let id = $(this).attr('id').replace(/-variation-select-box/, '').replace(/-bass/, '');
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let isFiftyVari = (INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP);
                self.selectedStompboxPage = id;
                switch (v) {
                    case VALUE_VARIATION_BOX.SELECT:
                        btsDOMController.openLoading();
                        if (isFiftyVari) {
                            $(IDS.selectMenuTen).hide();
                            $(IDS.selectMenuFifty).show();
                        } else {
                            $(IDS.selectMenuFifty).hide();
                            $(IDS.selectMenuTen).show();
                        }
                        stompboxMIDIController.getStompboxNames(id, isFiftyVari).then(names => {
                            self.updateStompboxSelectPage(id, isFiftyVari, names);
                            btsDOMController.closeLoading();
                            popup_open('stompbox-select');
                        }).catch(error => {
                            btsDOMController.closeLoading();
                            console.info(error);
                        });
                        break;
                    case VALUE_VARIATION_BOX.WRITE:
                        {
                        if (isFiftyVari) {
                            $(IDS.writeStompboxTen).hide();
                            $(IDS.writeStompboxFifty).show();
                        } else {
                            $(IDS.writeStompboxFifty).hide();
                            $(IDS.writeStompboxTen).show();
                        }

                        let currentNum = self.getCurrentStompboxNum(id);

                        if (currentNum <= 1) {
                            currentNum = 2;
                        }
                        stompboxMIDIController.getStompboxName(id, currentNum).then(name => {
                            self.updateWriteToStompboxDialog(isFiftyVari, currentNum, name);
                            popup_open('write-to-stompbox');
                        }).catch(error => {
                            console.info(error);
                        });
                        }

                        break;
                }
            });

            $(IDS.selectMenuFifty).on('elf-changed', function (e, v) {
                stompboxMIDIController.selectStompbox(self.selectedStompboxPage, v);
            });

            $(IDS.selectMenuTen).on('elf-changed', function (e, v) {
                stompboxMIDIController.selectStompbox(self.selectedStompboxPage, v);
            });

            $(IDS.writeStompboxFifty).on('elf-changed', function (e, v) {
                self._updateValueInInputVariation(v);
            });

            $(IDS.writeStompboxTen).on('elf-changed', function (e, v) {
                self._updateValueInInputVariation(v);
            });

            $(IDS.selectButtonOk).on(pointer.click, function (e) {
                e.preventDefault();
                let id = self.selectedStompboxPage;
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let stompboxNumChecked = 0;
                if (INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP) {
                    stompboxNumChecked = self._getNumChecked(TOTAL_STOMPBOX_FIFTY, IDS.selectMenuFifty);
                } else {
                    stompboxNumChecked = self._getNumChecked(TOTAL_STOMPBOX_TEN, IDS.selectMenuTen);
                }

                self.setCurrentStompboxNum(id, stompboxNumChecked);
            });

            $(IDS.writeButtonOk).on(pointer.click, function (e) {
                e.preventDefault();
                let id = self.selectedStompboxPage;
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let isFiftyVari = INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP;
                let idWriteSelect = isFiftyVari ? IDS.writeStompboxFifty : IDS.writeStompboxTen;

                let listTagA = $(`${idWriteSelect}-list`);
                let numChecked = listTagA.find('a[checked="checked"]')[0];
                let currentNum = listTagA.find('a').toArray().indexOf(numChecked);

                if (currentNum === -1) return;

                let name = $(IDS.writeStompboxInput).find('input').val();
                stompboxMIDIController.writeToStompbox(self.selectedStompboxPage, currentNum, name);
                self.setCurrentStompboxNum(id, currentNum + 2);
            });

            $(IDS.stompboxCancel).on(pointer.click, function (e) {
                e.preventDefault();
                let id = self.selectedStompboxPage;
                stompboxMIDIController.selectStompbox(id, OFF_NUM);
                self.setCurrentStompboxNum(id, OFF_NUM);
            });
        },

        _updateValueInInputVariation(v) {
            let id = this.selectedStompboxPage;
            let self = this;
            stompboxMIDIController.getStompboxName(id, v + 2).then(name => {
                $(IDS.writeStompboxInput).find('input').val(name);
                self.setCurrentStompboxNum(id, v + 2);
            }).catch(error => {
                console.info(error);
            });
        },

        _getNumChecked(total, idMenuBtn) {
            let stompboxNumChecked = 0;
            for (let i = 0; i < total + 2; i++) {
                if ($(idMenuBtn).find('input').eq(i).prop('checked')) {
                    stompboxNumChecked = i;
                    break;
                }
            }

            return stompboxNumChecked;
        },

        _convert2RawStringInstType(type, typeList) {
            let string = '';
            for (let ele of typeList) {
                if (ele.key === type && APP_MODE === ele.mode) {
                    string = ele.string;
                    break;
                }
            }

            return string;
        },

        _convert2RawStringInstTab(tab, tabList) {
            let string = '';
            for (let ele of tabList) {
                if (ele.key === tab) {
                    string = ele.string;
                    break;
                }
            }

            return string;
        },

        _convert2RawStringFxType(typeFx) {
            let string = '';
            for (let ele of FX_NAME_WRITE) {
                if (FX_TYPE_LIST.indexOf(ele.key) === typeFx) {
                    string = ele.string;
                    break;
                }
            }

            return string;
        },

        updateStompboxSelectPage(id, isFiftyVari, names) {
            let idMenuBtn = isFiftyVari ? IDS.selectMenuFifty : IDS.selectMenuTen;
            let labelDOM = $(idMenuBtn).find('label');
            let inputDOM = $(idMenuBtn).find('input');
            names.forEach(function (name, index) {
                labelDOM.eq(index + 2).text(((index >= 0 && index < 9) ? '0' : '') + (index + 1) + ' ' + name);
            });
            inputDOM.prop('checked', false);
            inputDOM.eq(this.getCurrentStompboxNum(id)).prop('checked', true);
        },

        updateWriteToStompboxDialog: function (isFiftyVari, currentNum, name) {
            let idWriteSelect = (isFiftyVari) ? IDS.writeStompboxFifty : IDS.writeStompboxTen;
            $(IDS.writeStompboxInput).find('input').val(name);
            $(idWriteSelect).children('p').text(currentNum - 1);
            $(`${idWriteSelect}-list`).find('div').find('a').removeAttr('checked').eq(currentNum - 2).attr('checked', true);
        },

        getCurrentStompboxNum(id) {
            return this.currentStompboxNumMap[this._getRawIdCurrentStompbox(id)];
        },

        setCurrentStompboxNum(id, stompboxNumChecked) {
            this.currentStompboxNumMap[this._getRawIdCurrentStompbox(id)] = stompboxNumChecked;
        },

        getSelectedStompboxPage() {
            return this.selectedStompboxPage;
        },

        _getRawIdCurrentStompbox(id) {
            if (INST_KEY.includes(id)) {
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let strTab = this._convert2RawStringInstTab(controlTypeAndTab.tab, INST_TAB);
                id = id + strTab;
            } else if (FX_KEY.includes(id)) {
                let typeFx = controlTypeFx.getSelectedTypeFx();
                id = id + '-' + FX_TYPE_LIST[typeFx];
            }

            return id;
        },

        convertRawIdFromIndex(index) {
            let rawId;
            let typeFx;
            let tab = '';
            for (const prop in SELECT_ID_BLOCK) {
                if (FX_KEY.includes(prop)) {
                    if (index >= SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx1] && index < SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx2]) {
                        rawId = CHAIN_BLOCK_ID_MAP.fx1;
                        typeFx = index - SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx1];
                        break;
                    } else if (index >= SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx2] && index < SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx3]) {
                        rawId = CHAIN_BLOCK_ID_MAP.fx2;
                        typeFx = index - SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx2];
                        break;
                    } else if (index >= SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx3] && index < SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.reverb]) {
                        rawId = CHAIN_BLOCK_ID_MAP.fx3;
                        typeFx = index - SELECT_ID_BLOCK[CHAIN_BLOCK_ID_MAP.fx3];
                        break;
                    }
                } else {
                    if (SELECT_ID_BLOCK[prop] === index) {
                        rawId = prop;
                        if (prop.includes(STR_CONFIG.STR_LFO)) {
                            tab = STR_CONFIG.STR_LFO;
                            rawId = rawId.replace(STR_CONFIG.STR_LFO, '');
                        } else if (prop.includes(STR_CONFIG.STR_SEQ)) {
                            tab = STR_CONFIG.STR_SEQ;
                            rawId = rawId.replace(STR_CONFIG.STR_SEQ, '');
                        } else if (prop.includes(STR_CONFIG.STR_AMP)) {
                            tab = STR_CONFIG.STR_AMP;
                            rawId = rawId.replace(STR_CONFIG.STR_AMP, '');
                        }
                        break;
                    }
                }
            }

            return { id: rawId, typeFx: typeFx, tab: tab };
        }
    };

    window.stompboxMIDIController = {
        receiveSelectStompbox(i, value) {
            const LABEL_IN_PAGE = 12;
            const HEIGHT_LABEL = 40;
            const DEFAULT_SCROLL = 0;

            let conventId = stompboxController.convertRawIdFromIndex(i);
            let currentId = stompboxController.getSelectedStompboxPage();
            let currentTypeFx = controlTypeFx.getSelectedTypeFx();
            let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();

            if (conventId.id !== currentId) {
                return;
            }

            if ((((i >= SELECT_ID_BLOCK.inst1 && i <= SELECT_ID_BLOCK.inst3_amp) || (i >= SELECT_ID_BLOCK.fx1 && i <= SELECT_ID_BLOCK.fx3)) &&
                ((conventId.typeFx === currentTypeFx && FX_KEY.includes(currentId)) ||
                    (conventId.tab === STR_CONFIG.STR_LFO && (controlTypeAndTab.tab === INST_CONTROL.TAB.LFO1 || controlTypeAndTab.tab === INST_CONTROL.TAB.LFO2)) ||
                    (conventId.tab === STR_CONFIG.STR_SEQ && (controlTypeAndTab.tab === INST_CONTROL.TAB.SEQ)) ||
                    (conventId.tab === STR_CONFIG.STR_AMP && (controlTypeAndTab.tab === INST_CONTROL.TAB.AMP))))
                || (conventId.typeFx === undefined && conventId.tab === '')) {
                // TODO
                let stompboxNumChecked = parseInt(value, 16);
                let isFiftyVari = INST_KEY.includes(currentId) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP;

                let idMenuBtn = isFiftyVari ? IDS.selectMenuFifty : IDS.selectMenuTen;
                let inputDOM = $(idMenuBtn).find('input');

                inputDOM.prop('checked', false);
                inputDOM.eq(stompboxNumChecked).prop('checked', true);

                let scrollTop = stompboxNumChecked >= LABEL_IN_PAGE && isFiftyVari ? HEIGHT_LABEL * stompboxNumChecked : DEFAULT_SCROLL;
                $(idMenuBtn).parent().scrollTop(scrollTop);

                stompboxController.setCurrentStompboxNum(currentId, stompboxNumChecked);
            }
        },

        receiveWriteToStompbox(i, value) {
            let currentNum = parseInt(value.slice(2, 4), 16);
            let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
            let id = stompboxController.getSelectedStompboxPage();
            
            let MAX_CURRENT = INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP ? TOTAL_STOMPBOX_FIFTY : TOTAL_STOMPBOX_TEN;

            if (currentNum > MAX_CURRENT - 1) {
                return;
            }

            let nameWrite = this.getNameWrite(id);

            let strBid = this.getVariationNumberAddressBid(id, controlTypeAndTab);
            let addr = Parameter.getblock(`${strBid}(${currentNum + 1})`).addr;

            util.waitForRQ1Reply(_7bitize(addr) + nameWrite, ADDRESS_CONST.SIZE.STOMP_BOX_NAMES, {
                success: function (msg) {
                    let name = util.convert2NameStr(msg);
                    isFiftyVari = INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP;
                    let idMenuBtn = isFiftyVari ? IDS.selectMenuFifty : IDS.selectMenuTen;

                    let labelDOM = $(idMenuBtn).find('label');
                    labelDOM.eq(currentNum + 2).text(((currentNum >= 0 && currentNum < 9) ? '0' : '') + (currentNum + 1) + ' ' + name);
                    if (currentNum + 2 === stompboxController.getCurrentStompboxNum(id)) {
                        $(IDS.writeStompboxInput).find('input').val(name);
                    }
                },
                error: function () {
                    console.log('error when get name');
                }
            });
        },

        selectStompbox(id, v) {
            let dataSelectId = parseInt(this.convertRawStompBoxId(id));
            let data = dataSelectId >= MAX_HEX ? dataSelectId + MAX_HEX : dataSelectId;
            let addr = ADDRESS_CONST.COMMAND.STOMP_BOX_SELECT + data;
            MIDIController.dt1(nibble(addr), hex2(v));
        },

        convertRawStompBoxId(id) {
            if (INST_KEY.includes(id)) {
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let strTab = stompboxController._convert2RawStringInstTab(controlTypeAndTab.tab, INST_TAB);
                id = id + strTab;
            }

            let index = SELECT_ID_BLOCK[id];

            if (FX_KEY.includes(id)) {
                let typeFx = controlTypeFx.getSelectedTypeFx();
                index += typeFx;
            }

            return index;
        },

        getStompboxNames(id, isFiftyVari) {
            let self = this;
            return new Promise((resolve, reject) => {
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let strBid = self.getVariationNumberAddressBid(id, controlTypeAndTab);

                let total = isFiftyVari ? TOTAL_STOMPBOX_FIFTY : TOTAL_STOMPBOX_TEN;

                let nameWrite = this.getNameWrite(id);

                let names = [];
                for (let i = 1; i <= total; i++) {
                    let addr = Parameter.getblock(`${strBid}(${i})`).addr;

                    util.waitForRQ1Reply(_7bitize(addr) + nameWrite, ADDRESS_CONST.SIZE.STOMP_BOX_NAMES, {
                        success: function (msg) {
                            let name = util.convert2NameStr(msg);
                            names.push(name.trim());
                            if (i === total) {
                                resolve(names);
                            }
                        },
                        error: function () {
                            reject('fail load data variation names');
                        }
                    });
                }
            });
        },

        getStompboxName(id, currentNum) {
            let self = this;
            return new Promise((resolve, reject) => {
                let addr = self._getRawAddressNameAndWrite(id, currentNum - 2);
                util.waitForRQ1Reply(addr, ADDRESS_CONST.SIZE.STOMP_BOX_NAMES, {
                    success: function (msg) {
                        let name = util.convert2NameStr(msg);
                        resolve(name.trim());
                    },
                    error: function (e) {
                        reject('fail load data variation name');
                    }
                });
            });
        },

        writeToStompbox(id, currentNum, name) {
            let nameHex = util.convert2NameHex(util.convert2AsciiOnlyStrSpace(name));
            let addr = this._getRawAddressNameAndWrite(id, currentNum);
            MIDIController.dt1(nibble(addr), nameHex);
        },

        _getRawAddressNameAndWrite(id, currentNum) {
            let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
            let strBid = this.getVariationNumberAddressBid(id, controlTypeAndTab);
            let addr = Parameter.getblock(`${strBid}(${currentNum + 1})`).addr;
            let nameWrite = this.getNameWrite(id);

            return _7bitize(addr) + nameWrite;
        },

        getVariationNumberAddressBid(id, controlTypeAndTab) {
            let mode = APP_MODE === MODE.BASS ? STR_CONFIG.VAR_BASS : '';
            let strEfct = STR_CONFIG.EFCT_DEFAULT;
            let strTab = '';
            let strType = STR_CONFIG.EFCT_DEFAULT;
            if (INST_KEY.includes(id) && controlTypeAndTab.tab !== INST_CONTROL.TAB.AMP) {
                strEfct = STR_CONFIG.VAR_INST;
                strTab = stompboxController._convert2RawStringInstTab(controlTypeAndTab.tab, INST_VARIATION_ADDRESS.TAB);
                strType = stompboxController._convert2RawStringInstType(controlTypeAndTab.type, INST_VARIATION_ADDRESS.TYPE);
            }

            return strEfct + strTab + STR_CONFIG.VARI + mode + '_' + strType;
        },

        getNameWrite(id) {
            let configId;
            if (INST_KEY.includes(id)) {
                let controlTypeAndTab = controlTypeAndTabInst.getSelectedTypeAndTab();
                let extend = controlTypeAndTab.tab === INST_CONTROL.TAB.AMP ? STR_CONFIG.STR_AMP : '';
                configId = STR_CONFIG.INST + extend;
            } else if (FX_KEY.includes(id)) {
                let typeFx = controlTypeFx.getSelectedTypeFx();
                let strFx = stompboxController._convert2RawStringFxType(typeFx);
                configId = STR_CONFIG.FX + '_' + strFx;
            } else {
                configId = id;
            }
            let index = NAME_WRITE_ADDRESS[configId];

            let nameWrite = parseInt('0x' + hex2(parseInt(index)) + '00');

            return nameWrite;
        }
    };

    /* set value type and tab of inst */
    window.controlTypeAndTabInst = {
        selectedType: 0,
        selectedTab: 0,
        instType: null,
        setSelectedTypeAndTab(selectedType, selectedTab, instType) {
            if (selectedType !== null) {
                this.selectedType = selectedType;
            }
            if (selectedTab !== null) {
                this.selectedTab = selectedTab;
            }
            this.instType = instType;
            this.controlBtnVariation();
        },

        getSelectedTypeAndTab() {
            return { type: this.selectedType, tab: this.selectedTab };
        },

        controlBtnVariation() {
            let strMode = (APP_MODE === MODE.BASS) ? '-bass' : '';
            if (this.selectedTab === INST_CONTROL.TAB.COMMON ||
                ((this.selectedTab > INST_CONTROL.TAB.AMP && this.selectedTab <= INST_CONTROL.TAB.SEQ) && (this.selectedType === INST_CONTROL.TYPE.DYNAMIC || this.selectedType === INST_CONTROL.TYPE.OSC)) ||
                ((this.selectedTab === INST_CONTROL.TAB.AMP) && (this.selectedType !== INST_CONTROL.TYPE.DYNAMIC && this.selectedType !== INST_CONTROL.TYPE.OSC))) {
                $(`#${this.instType}-variation-select-box${strMode}`).show();
            } else {
                $(`#${this.instType}-variation-select-box${strMode}`).hide();
            }
            if (this.selectedType === INST_CONTROL.TYPE.DYNAMIC && (this.selectedTab === INST_CONTROL.TAB.LFO1 || this.selectedTab === INST_CONTROL.TAB.LFO2)) {
                $(`#${this.instType}-variation-select-box${strMode}`).find('p').text(STR_CONFIG.LFO_VARIATION).parent().css('width', '140px');
            } else if (this.selectedType === INST_CONTROL.TYPE.DYNAMIC && this.selectedTab === INST_CONTROL.TAB.SEQ) {
                $(`#${this.instType}-variation-select-box${strMode}`).find('p').text(STR_CONFIG.SEQ_VARIATION).parent().css('width', '120px');
            } else if (this.selectedTab === INST_CONTROL.TAB.AMP) {
                $(`#${this.instType}-variation-select-box${strMode}`).find('p').text(STR_CONFIG.AMP_VARIATION).parent().css('width', '120px');
            } else {
                $(`#${this.instType}-variation-select-box${strMode}`).find('p').text(STR_CONFIG.VARIATION).parent().css('width', '96px');
            }

            instGuitarController.controlBtnTrigger(this.selectedType === INST_CONTROL.TYPE.DYNAMIC && this.selectedTab === INST_CONTROL.TAB.SEQ);
        },
    };

    /* set value type fx */
    window.controlTypeFx = {
        selectedTypeFx: 0,
        setSelectedTypeFx(selectedTypeFx) {
            if (selectedTypeFx !== null) {
                this.selectedTypeFx = selectedTypeFx;
            }
        },

        getSelectedTypeFx() {
            return this.selectedTypeFx;
        },
    };

})();