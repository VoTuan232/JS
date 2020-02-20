(function () {
    const STATUS_FX_DELAY_DIAL = [
        { id: 'd1-time', key: [3, 4, 5] },
        { id: 'time', key: [0, 1, 2, 6, 7, 8, 9, 10] },
        { id: 'feed-back', key: [0, 1, 2, 6, 7, 8, 9] },
        { id: 'd1-feed-back', key: [3, 4, 5] },
        { id: 'trigger', key: [10, 11] },
        { id: 'high-cut', key: [0, 1, 2, 6, 7, 8, 9] },
        { id: 'd1-high-cut', key: [3, 4, 5] },
        { id: 'rise-time', key: [11] },
        { id: 'tap-time', key: [2] },
        { id: 'd1-effect-level', key: [3, 4, 5] },
        { id: 'd2-time', key: [3, 4, 5] },
        { id: 'mode-depth', key: [9] },
        { id: 'd2-feed-back', key: [3, 4, 5] },
        { id: 'd2-high-cut', key: [3, 4, 5] },
        { id: 'd2-effect-level', key: [3, 4, 5] },
        { id: 'effect-level', key: [0, 1, 2, 6, 7, 8, 9, 10, 11] },
        { id: 'direct-level', key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { id: 'bpm-mst', key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { id: 'mode-rate', key: [9] }
    ];

    const LIST_NAME_HARMONIST = [
        { key: 0, typeKey: 'C(Am)', listName: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B'] },
        { key: 1, typeKey: 'Db(Bbm)', listName: ['Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C'] },
        { key: 2, typeKey: 'D(Bm)', listName: ['D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db'] },
        { key: 3, typeKey: 'Eb(Cm)', listName: ['Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D'] },
        { key: 4, typeKey: 'E(C#m)', listName: ['E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb'] },
        { key: 5, typeKey: 'F(Dm)', listName: ['F', 'F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E'] },
        { key: 6, typeKey: 'F#(D#m)', listName: ['F#', 'G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F'] },
        { key: 7, typeKey: 'G(Em)', listName: ['G', 'Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#'] },
        { key: 8, typeKey: 'Ab(Fm)', listName: ['Ab', 'A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G'] },
        { key: 9, typeKey: 'A(F#m)', listName: ['A', 'Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'] },
        { key: 10, typeKey: 'Bb(Gm)', listName: ['Bd', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A'] },
        { key: 11, typeKey: 'B(G#m)', listName: ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bd'] },
    ];

    const LIST_DIAL_DISABLE_DUAL = ['rate-2', 'depth-2', 'pre-delay-2', 'effect-level-2', 'low-cut-2', 'high-cut-2',
        'rate-1', 'depth-1', 'pre-delay-1', 'effect-level-1', 'low-cut-1', 'high-cut-1', 'wave-form-1', 'wave-form-2', 'output-mode'
    ];

    const LIST_DIAL_DISABLE_DIF_DUAL = ['rate', 'depth', 'pre-delay', 'effect-level', 'low-cut', 'high-cut', 'wave-form'];
    const LIST_DIAL_DISABLE_DIF_VOICE_HARMONIST = ['hr2-harmony', 'hr2-level', 'hr2-pre-delay'];

    const DUAL = 3;

    const PAN_TYPE = {
        AUTO: 0
    };

    const AUTO = 1;

    const PITCH_SHIFTER_VOICE = {
        ONE_VOICE: 0
    };

    const REVERB_TYPE = {
        SPRING: 5
    };

    const VALUE_HARMONIST = {
        selectListVoice: 0,
        dialHr1Harmony: 12,
        dialHr2Harmony: 21,
    };

    let selectHarmonist = {
        dataVoice_1: VALUE_HARMONIST.selectListVoice,
        dataVoice_2: VALUE_HARMONIST.selectListVoice,
        dataVoice_3: VALUE_HARMONIST.selectListVoice,
        hr1_1: VALUE_HARMONIST.dialHr1Harmony,
        hr1_2: VALUE_HARMONIST.dialHr1Harmony,
        hr1_3: VALUE_HARMONIST.dialHr1Harmony,
        hr2_1: VALUE_HARMONIST.dialHr2HarmonyValue,
        hr2_2: VALUE_HARMONIST.dialHr2HarmonyValue,
        hr2_3: VALUE_HARMONIST.dialHr2HarmonyValue,
        setSelectListVoice(dataVoice) {
            this.dataVoice = dataVoice;
        },
        getSelectListVoice() {
            return this.dataVoice;
        },

        setDialHr1Harmony(hr1) {
            this.hr1 = hr1;
        },
        getDialHr1Harmony() {
            return this.hr1;
        },

        setDialHr2Harmony(hr2) {
            this.hr2 = hr2;
        },
        getDialHr2Harmony() {
            return this.hr2;
        },
    };

    const KEY_MODE_BASS = '-bass';

    const USER_VALUE = 29;
    const HR_TYPE_DIAL = ['c', 'db', 'd', 'eb', 'e', 'f', 'fs', 'g', 'ab', 'a', 'bb', 'b'];

    const TYPE = {
        CHORUS: 2,
        DELAY: 7,
        HARMONIST: 12,
        HUMANIZER: 13,
        PAN: 19,
        PITCH: 23,
    }

    const VOICE1 = 0;

    window.editorFx = function () {
        $(`#fx-type, #fx-bass-type`).on('elf-update elf-changed', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            showPageWithCondition(v, typeMode);
            // set type for variation
            controlTypeFx.setSelectedTypeFx(v);
            switch (v) {
                case TYPE.CHORUS:
                    changeModeChorus();
                    break;
                case TYPE.DELAY:
                    changeModeTypeDelay();
                    updateRiseFallTimeDialStatus();
                    break;
                case TYPE.HUMANIZER:
                    changeHumanizerModeSelect(v);
                    break;
                case TYPE.PAN:
                    changePanTypeSelect();
                    break;
                case TYPE.PITCH:
                    changePitchTypeSelect();
                    break;
                case TYPE.HARMONIST:
                    changeLabelHrForKey();
                    checkUpdateSelectListVoice();
                    updateDialStatusHr1();
                    updateDialStatusHr2();
                    break;
            }
        });

        $(`#fx-chorus-mode-select-list, #fx-bass-chorus-mode-select-list`).on('elf-changed', function (e, v) {
            changeModeChorus(v);
        });

        $(`#fx-harmonist-voice-select-list, #fx-bass-harmonist-voice-select-list`).on('elf-changed', function (e, v) {
            checkUpdateSelectListVoice(v);
            updateDialStatusHr2(null, v);
            selectHarmonist.setSelectListVoice(v);
        });

        $(`#fx-harmonist-hr1-harmony-dial, #fx-bass-harmonist-hr1-harmony-dial`).on('elf-change', function (e, v) {
            updateDialStatusHr1(v);
            selectHarmonist.setDialHr1Harmony(v);
        });

        $(`#fx-harmonist-hr2-harmony-dial, #fx-bass-harmonist-hr2-harmony-dial`).on('elf-change', function (e, v) {
            updateDialStatusHr2(v, null);
            selectHarmonist.setDialHr2Harmony(v);
        });

        $(`#fx-delay-type-select-list, #fx-bass-delay-type-select-list`).on('elf-changed', function (e, v) {
            changeModeTypeDelay();
        });

        $(`#fx-delay-twist-mode-select-list, #fx-bass-delay-twist-mode-select-list`).on('elf-changed', function (e, v) {
            updateRiseFallTimeDialStatus();
        });

        $(`#fx-pan-type-select, #fx-bass-pan-type-select`).on('elf-changed', function (e, v) {
            changePanTypeSelect(v);
        });

        $(`#fx-pitch-shifter-voice-select-select, #fx-bass-pitch-shifter-voice-select-select`).on('elf-changed', function (e, v) {
            changePitchTypeSelect(v);
        });

        $(`#fx-reverb-type-select-select, #fx-bass-reverb-type-select-select`).on('elf-changed elf-update', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            updateDialStatus(`fx${typeMode}-reverb-spring-sens`, v !== REVERB_TYPE.SPRING);
        });

        $(`#fx-humanizer-mode-select, #fx-bass-humanizer-mode-select`).on('elf-changed', function (e, v) {
            changeHumanizerModeSelect(v);
        });

        $('#fx-harmonist-master-key-dial, #fx-bass-harmonist-master-key-dial').on('elf-change', function (e, v) {
            changeLabelHrForKey(v);
        });

        updateDialStatus(`fx-reverb-spring-sens`, true);
        updateDialStatus(`fx-bass-reverb-spring-sens`, true);
    };

    function changeLabelHrForKey(v) {
        let typeMode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
        if (v === undefined) {
            v = getDataParameter(`fx${typeMode}-harmonist-master-key-dial`);
        }
        LIST_NAME_HARMONIST.forEach(ele => {
            if (ele.key === v) {
                for (let i = 0; i < ele.listName.length; i++) {
                    $(`#fx${typeMode}-harmonist-hr1-${HR_TYPE_DIAL[i]}-label`).find('p').text(`HR1:${ele.listName[i]}`);
                    $(`#fx${typeMode}-harmonist-hr2-${HR_TYPE_DIAL[i]}-label`).find('p').text(`HR2:${ele.listName[i]}`);
                }
            }
        })
    }

    function changeModeChorus(v) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        if (v === undefined) {
            v = getDataParameter(`fx${typeMode}-chorus-mode-select-list`)
        }
        updateDialEqualDual(v !== DUAL);
        updateDialDifDual(v === DUAL);

        updateTwistModeStatus();
        updateRiseFallTimeDialStatus();
    }

    function updateDialEqualDual(isDisable) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        updateDialStatus(`fx${typeMode}-chorus-rate-1`, isDisable);
        updateDialStatus(`fx${typeMode}-chorus-rate-2`, isDisable);

        LIST_DIAL_DISABLE_DUAL.forEach(element => {
            updateDialStatus(`fx${typeMode}-chorus-${element}`, isDisable);
        });
    }

    function updateDialDifDual(isDisable ) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        updateDialStatus(`fx${typeMode}-chorus-rate`, isDisable);

        LIST_DIAL_DISABLE_DIF_DUAL.forEach(element => {
            updateDialStatus(`fx${typeMode}-chorus-${element}`, isDisable);
        });
    }

    function showPageWithCondition(value, typeMode) {
        for (let element of FX_TYPE_LIST) {
            $(`#fx${typeMode}-${element}`).css('display', FX_TYPE_LIST.indexOf(element) === value ? '' : 'none');
        }
    };

    function changeModeTypeDelay() {
        updateTwistModeStatus();
        updateRiseFallTimeDialStatus();
    };

    function updateTwistModeStatus() {
        const TWIST_TYPE = 11;
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        let vType = getDataParameter(`fx${typeMode}-delay-type-select-list`);

        for (let i = 0; i < STATUS_FX_DELAY_DIAL.length; i++) {
            let element = STATUS_FX_DELAY_DIAL[i];
            updateDialStatus(`fx${typeMode}-delay-${element.id}`, !element.key.includes(vType));
        }
        updateDialStatus(`fx${typeMode}-delay-twist-mode-select-list`, vType !== TWIST_TYPE);
    };

    function updateRiseFallTimeDialStatus() {
        const TWIST_TYPE = 11;
        const SELECT_LIST_MODE = {
            riseFall: 0,
            riseFade: 1,
        }
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        let vType = getDataParameter(`fx${typeMode}-delay-type-select-list`);
        let vMode = getDataParameter(`fx${typeMode}-delay-twist-mode-select-list`);

        if (vType === TWIST_TYPE) {
            updateDialStatus(`fx${typeMode}-delay-fall-time`, vMode !== SELECT_LIST_MODE.riseFall);
            updateDialStatus(`fx${typeMode}-delay-fade-time`, vMode === SELECT_LIST_MODE.riseFall);
        } else {
            updateDialStatus(`fx${typeMode}-delay-fall-time`, true);
            updateDialStatus(`fx${typeMode}-delay-fade-time`, true);
        }
    };

    function updateDialStatusHr1(value) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        let valuePrev = selectHarmonist.getDialHr1Harmony();
        if (value === undefined) {
            value = getDataParameter(`fx${typeMode}-harmonist-hr1-harmony-dial`);
            selectHarmonist.setDialHr1Harmony(value);
            HR_TYPE_DIAL.forEach(element => {
                updateDialStatus(`fx${typeMode}-harmonist-hr1-${element}`, value !== USER_VALUE);
            });
        } else {
            if (value === USER_VALUE || valuePrev === USER_VALUE) {
                HR_TYPE_DIAL.forEach(element => {
                    updateDialStatus(`fx${typeMode}-harmonist-hr1-${element}`, value !== USER_VALUE);
                });
            }
        }
    };

    function updateDialStatusHr2(valueHr2, valueVoice) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        let valuePrev = selectHarmonist.getDialHr2Harmony();

        if (valueHr2 === undefined && valueVoice === undefined) {
            valueHr2 = getDataParameter(`fx${typeMode}-harmonist-hr2-harmony-dial`);
            valueVoice = getDataParameter(`fx${typeMode}-harmonist-voice-select-list`);
            selectHarmonist.setDialHr2Harmony(valueHr2);
            HR_TYPE_DIAL.forEach(element => {
                updateDialStatus(`fx${typeMode}-harmonist-hr2-${element}`, !(valueHr2 === USER_VALUE && valueVoice !== VOICE1));
            });
        } else if (valueVoice === null) {
            valueVoice = getDataParameter(`fx${typeMode}-harmonist-voice-select-list`);
            if (valueHr2 === USER_VALUE || valuePrev === USER_VALUE) {
                HR_TYPE_DIAL.forEach(element => {
                    updateDialStatus(`fx${typeMode}-harmonist-hr2-${element}`, !(valueHr2 === USER_VALUE && valueVoice !== VOICE1));
                });
            }
        } else if (valueHr2 === null) {
            valueHr2 = getDataParameter(`fx${typeMode}-harmonist-hr2-harmony-dial`);
            HR_TYPE_DIAL.forEach(element => {
                updateDialStatus(`fx${typeMode}-harmonist-hr2-${element}`, !(valueHr2 === USER_VALUE && valueVoice !== VOICE1));
            });
        }
    };

    function checkUpdateSelectListVoice(value) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        if (value === undefined) {
            value = getDataParameter(`fx${typeMode}-harmonist-voice-select-list`);
        }
        LIST_DIAL_DISABLE_DIF_VOICE_HARMONIST.forEach(element => {
            updateDialStatus(`fx${typeMode}-harmonist-${element}`, value === VOICE1);
        });
    };

    function changeHumanizerModeSelect(vMode) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        if (vMode === undefined) {
            vMode = getDataParameter(`fx${typeMode}-humanizer-mode-select`);
        }
        updateDialStatus(`fx${typeMode}-humanizer-sens`, vMode === AUTO);
        updateDialStatus(`fx${typeMode}-humanizer-manuals`, vMode !== AUTO);
    };

    function changePanTypeSelect(vPan) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        if (vPan === undefined) {
            vPan = getDataParameter(`fx${typeMode}-pan-type-select`);
        }
        updateDialStatus(`fx${typeMode}-pan-wave-shape`, vPan !== PAN_TYPE.AUTO);
        updateDialStatus(`fx${typeMode}-pan-rate`, vPan !== PAN_TYPE.AUTO);
        updateDialStatus(`fx${typeMode}-pan-depth`, vPan !== PAN_TYPE.AUTO);
        updateDialStatus(`fx${typeMode}-pan-position`, vPan === PAN_TYPE.AUTO);
    };

    function changePitchTypeSelect(vPitch) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        if (vPitch === undefined) {
            vPitch = getDataParameter(`fx${typeMode}-pitch-shifter-voice-select-select`);
        }
        updateDialStatus(`fx${typeMode}-pitch-shifter-ps2-pitch`, vPitch === PITCH_SHIFTER_VOICE.ONE_VOICE);
        updateDialStatus(`fx${typeMode}-pitch-shifter-ps2-mode`, vPitch === PITCH_SHIFTER_VOICE.ONE_VOICE);
        updateDialStatus(`fx${typeMode}-pitch-shifter-ps2-fine`, vPitch === PITCH_SHIFTER_VOICE.ONE_VOICE);
        updateDialStatus(`fx${typeMode}-pitch-shifter-ps2-pre-delay`, vPitch === PITCH_SHIFTER_VOICE.ONE_VOICE);
        updateDialStatus(`fx${typeMode}-pitch-shifter-ps2-level`, vPitch === PITCH_SHIFTER_VOICE.ONE_VOICE);
    }

    function getDataParameter(id) {
        let item = _items[id];

        return Parameter.value(item.pid, item.size, item.vofs);
    };

    function updateDialStatus(id, isDisable) {
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('opacity', isDisable ? '0.4' : '1');
        $(`#${id}-mask`).css('display', isDisable ? 'block' : 'none');
        $('#' + id + '-dial').attr('tabindex', isDisable ? '-1' : '0');
    };
})();