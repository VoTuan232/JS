/* use text poly instead of mutli */

(function () {
    const MAX_VALUE = 10000;
    const CENT = 5000;
    const MONO_INDICATOR_ANGLE = 53;
    const POLY_INDICATOR_MAX_WIDTH = 120;
    const POLY_INDICATOR_MIN_WIDTH = 2;

    const PITCH_GAP_ENUM = {
        FLAT: 0,
        SHARP: 1
    };

    const STR_NUM_POLY_PITCH = {
        STR_1: 1,
        STR_2: 2,
        STR_3: 3,
        STR_4: 4,
        STR_5: 5,
        STR_6: 6
    }

    const STR_NOTE = [
        { key: 0, string: 'C' },
        { key: 1, string: 'C#' },
        { key: 2, string: 'D' },
        { key: 3, string: 'D#' },
        { key: 4, string: 'E' },
        { key: 5, string: 'F' },
        { key: 6, string: 'F#' },
        { key: 7, string: 'G' },
        { key: 8, string: 'G#' },
        { key: 9, string: 'A' },
        { key: 10, string: 'A#' },
        { key: 11, string: 'B' },
    ];

    const KEY_MODE_BASS = '-bass';

    const TUNER_MODE_BTN = {
        MONO: 1,
        POLY: 0
    };

    const FIND_ATTR_EQ = {
        eq1: 1,
        eq2: 2
    };

    const NO_DETECT = 0;

    let tunerController = {
        calcMonoIndicatorDeg: function (pitchValue) {
            return (MONO_INDICATOR_ANGLE / MAX_VALUE) * pitchValue - (MONO_INDICATOR_ANGLE / 2);
        },
        calcPolyIndicatorLength: function (pitchValue) {
            return ((POLY_INDICATOR_MAX_WIDTH - POLY_INDICATOR_MIN_WIDTH) / (MAX_VALUE / 2)) * Math.abs(pitchValue - (MAX_VALUE / 2)) + POLY_INDICATOR_MIN_WIDTH;
        },
        calcPitchGap: function (pitchValue) {
            if (pitchValue < MAX_VALUE / 2) {
                return PITCH_GAP_ENUM.FLAT;
            } else if (pitchValue >= MAX_VALUE / 2) {
                return PITCH_GAP_ENUM.SHARP;
            }
        },
        getNoteName: function (noteNum) {
            let string = '';
            for (let ele of STR_NOTE) {
                if (ele.key === noteNum % STR_NOTE.length) {
                    string = ele.string;
                    break;
                }
            }

            return string;
        },
        getNoteImageMono: function (num) {
            if (num === 0) {
                return 'url(./images/mono_note_none@2x.png)';
            }
            let noteStr = this.getNoteName(num);
            return 'url(./images/mono_note_' + noteStr.replace('#', '_sharp') + '@2x.png)';
        },
        getNoteImagePoly: function (num) {
            if (num === 0) {
                return 'url(./images/poly_note_none@2x.png)';
            }
            let noteStr = this.getNoteName(num);
            return 'url(./images/poly_note_' + noteStr.replace('#', 'sharp') + '@2x.png)';
        },
    };

    let tunerDOMController = {
        updateMonoPitch: function (pitchValue, noteValue, isJustTune, typeMode) {
            $(`#mono${typeMode}-note-label`).css('background-image', tunerController.getNoteImageMono(noteValue));
            if (noteValue === NO_DETECT) {
                $(`#mono${typeMode}-indicator`).css('display', 'none');
                $(`#mono${typeMode}-flat-triangle`).removeClass('is-lighten');
                $(`#mono${typeMode}-sharp-triangle`).removeClass('is-lighten');
                return;
            }
            let deg = tunerController.calcMonoIndicatorDeg(pitchValue === null ? NO_DETECT : pitchValue);
            $(`#mono${typeMode}-indicator`).css({
                'display': 'block',
                'transform': 'rotate(' + deg + 'deg)'
            });
            if (isJustTune) {
                $(`#mono${typeMode}-flat-triangle`).addClass('is-lighten');
                $(`#mono${typeMode}-sharp-triangle`).addClass('is-lighten');
            } else {
                switch (tunerController.calcPitchGap(pitchValue === null ? NO_DETECT : pitchValue)) {
                    case PITCH_GAP_ENUM.FLAT: {
                        $(`#mono${typeMode}-flat-triangle`).addClass('is-lighten');
                        $(`#mono${typeMode}-sharp-triangle`).removeClass('is-lighten');
                        break;
                    }
                    case PITCH_GAP_ENUM.SHARP: {
                        $(`#mono${typeMode}-flat-triangle`).removeClass('is-lighten');
                        $(`#mono${typeMode}-sharp-triangle`).addClass('is-lighten');
                        break;
                    }
                }
            }
        },
        updatePolyPitch: function (pitchValue, noteValue, strNum, isJustTune, typeMode) {
            let noteImage = tunerController.getNoteImagePoly(noteValue);
            $(`#poly${typeMode}-note-${strNum}`).css('background-image', noteImage);
            if (noteValue === NO_DETECT) {
                $(`#poly${typeMode}-flat-bar-${strNum}`).hide();
                $(`#poly${typeMode}-sharp-bar-${strNum}`).hide();
                $(`#poly${typeMode}-flat-triangle-${strNum}`).hide();
                $(`#poly${typeMode}-sharp-triangle-${strNum}`).hide();
                return;
            }
            let barLength = tunerController.calcPolyIndicatorLength(pitchValue === null ? CENT : pitchValue);
            if (isJustTune) {
                $(`#poly${typeMode}-flat-bar-${strNum}`).hide();
                $(`#poly${typeMode}-sharp-bar-${strNum}`).hide();
                $(`#poly${typeMode}-flat-triangle-${strNum}`).show();
                $(`#poly${typeMode}-sharp-triangle-${strNum}`).show();
            } else if (pitchValue === null) {
                $(`#poly${typeMode}-flat-bar-${strNum}`).hide();
                $(`#poly${typeMode}-sharp-bar-${strNum}`).hide();
                $(`#poly${typeMode}-flat-triangle-${strNum}`).hide();
                $(`#poly${typeMode}-sharp-triangle-${strNum}`).hide();
            } else {
                switch (tunerController.calcPitchGap(pitchValue === null ? CENT : pitchValue)) {
                    case PITCH_GAP_ENUM.FLAT: {
                        $(`#poly${typeMode}-flat-triangle-${strNum}`).hide();
                        $(`#poly${typeMode}-sharp-triangle-${strNum}`).hide();
                        $(`#poly${typeMode}-sharp-bar-${strNum}`).hide();
                        $(`#poly${typeMode}-flat-bar-${strNum}`).show().css('width', barLength + 'px');
                        break;
                    }
                    case PITCH_GAP_ENUM.SHARP: {
                        $(`#poly${typeMode}-flat-triangle-${strNum}`).hide();
                        $(`#poly${typeMode}-sharp-triangle-${strNum}`).hide();
                        $(`#poly${typeMode}-flat-bar-${strNum}`).hide();
                        $(`#poly${typeMode}-sharp-bar-${strNum}`).show().css('width', barLength + 'px');
                        break;
                    }
                }
            }
        },
    };

    window.initializeTuner = function () {
        let strNumMonoPitch = 0;
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        tunerDOMController.updateMonoPitch(null, strNumMonoPitch, false, typeMode);
        for (let i = STR_NUM_POLY_PITCH.STR_1; i <= STR_NUM_POLY_PITCH.STR_6; i++) {
            tunerDOMController.updatePolyPitch(null, i, i, false, typeMode);
        }
    };
    window.CURRENT_TAB_TUNER = 0;
    window.assignTunerEvents = function () {
        $('#tuner-mode-btn, #tuner-bass-mode-btn').on('elf-changed', function (e, v, updateOnly) {
            if (updateOnly) {
                return;
            }
            CURRENT_TAB_TUNER = v;
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let runningMode = (APP_MODE === MODE.BASS) ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS + ADDRESS_CONST.ADDRESS.TUNER_TYPE : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR + ADDRESS_CONST.ADDRESS.TUNER_TYPE;
            let tunerModeBtn = (v === TUNER_MODE_BTN.MONO) ? ADDRESS_CONST.RUNNING_MODE.MONO_TUNER : ADDRESS_CONST.RUNNING_MODE.POLY_TUNER;
            runningModeModelController.setCurrentRunningMode(tunerModeBtn);
            MIDIController.dt1(nibble(runningMode), hex2(v));

            if (v !== TUNER_MODE_BTN.POLY) {
                return;
            }

            let monoOutputSelectListOption = $(`#mono${typeMode}-output-select-list`).find('div').find('a');
            let monoOutputSelect = $(`#mono${typeMode}-output-select`);
            if (monoOutputSelectListOption.eq(FIND_ATTR_EQ.eq2).attr('checked')) {
                monoOutputSelectListOption.removeAttr('checked');
                monoOutputSelectListOption.eq(FIND_ATTR_EQ.eq1).attr('checked', 'checked');
                let s = monoOutputSelectListOption.eq(FIND_ATTR_EQ.eq1).text();
                v = 1;
                setTimeout(function () {
                    monoOutputSelect.find('p').text(s);
                    monoOutputSelect.trigger('elf-change', v);
                }, 10);
            }
        });

        $('#mono-output-select, #mono-bass-output-select').on('elf-changed', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            if (v === 2) {
                $(`#tuner${typeMode}-mode-btn`).addClass('disabled');
            } else {
                $(`#tuner${typeMode}-mode-btn`).removeClass('disabled');
            }
        });
    };

    window.tunerMIDIController = {
        receiveMonoPitch: function (rawPitch, note, isJustTune) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let pitch = this._convertRawPitchValue(rawPitch);
            tunerDOMController.updateMonoPitch(pitch, note, isJustTune, typeMode);
        },
        receivePolyPitch: function (rawPitch, note, str, isJustTune) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let pitch = this._convertRawPitchValue(rawPitch);
            tunerDOMController.updatePolyPitch(pitch, note, str, isJustTune, typeMode);
        },
        _convertRawPitchValue: function (x) {
            if (x === null) {
                return null;
            }
            return (
                ((x & 0x0f000000) >> 12) |
                ((x & 0x000f0000) >> 8) |
                ((x & 0x00000f00) >> 4) |
                ((x & 0x0000000f))
            );
        },
        receiveTabTuner: function (value) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let tunerModeBtnDOM = $(`#tuner${typeMode}-mode-btn`);
            tunerModeBtnDOM.trigger('elf-update', value);
            tunerModeBtnDOM.trigger('elf-change', value);
        }
    };
})();
