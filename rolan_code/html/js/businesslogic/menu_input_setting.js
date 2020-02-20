(function () {
    const STATUS_DIAL_GUITAR = [
        { id: 'scale', key: [0, 1, 3, 4, 5, 6, 7] },
        { id: 'pu-direction', key: [0, 1, 3, 4, 5, 6, 7] },
        { id: 'sw-position', key: [0, 1, 3, 4, 5, 6, 7] },

        { id: 'piezo-tone-l', key: [3, 4, 5, 6, 7] },
        { id: 'piezo-tone-h', key: [3, 4, 5, 6, 7] },

        { id: 'distance-6', key: [0, 1] },
        { id: 'distance-5', key: [0, 1] },
        { id: 'distance-4', key: [0, 1] },
        { id: 'distance-3', key: [0, 1] },
        { id: 'distance-2', key: [0, 1] },
        { id: 'distance-1', key: [0, 1] },

    ];

    const STATUS_DIAL_BASS = [
        { id: 'piezo-tone-l', key: [2, 3, 4] },
        { id: 'piezo-tone-h', key: [2, 3, 4] },

        { id: 'distance-lowb', key: [0, 1] },
        { id: 'distance-5', key: [0, 1] },
        { id: 'distance-4', key: [0, 1] },
        { id: 'distance-3', key: [0, 1] },
        { id: 'distance-2', key: [0, 1] },
        { id: 'distance-hic', key: [0, 1] },
    ];

    const IDS = {
        WRITE_SELECT: '#write-input-setting-num-select',
        WRITE_INPT: '#write-input-setting-name-input',
        WRITE_BTN_OK: '#write-input-setting-ok',
    }

    const TAB = {
        GK: 0,
        NORMAL: 1,
    };

    let STATUS_DIAL = [];

    const VALUE_DIAL_GK_TYPE = 0;

    const KEY_MODE_BASS = '-bass';
    const STR_GK = 'gk';
    const STR_NORMAL = 'normal';
    const VALUE_GK_SENS = {
        NO_INPUT: 0,
        TRIANGLE_MIN: 12,
        MAX_INPUT: 14,
    };

    window.CURRENT_SELECT_TAB_INPUT = 0;
    window.isClickChangeTabInputSetting = false;
    window.isClickSystemBtnClose = false;
    let inputModeController = {
        type: '',
        index: 0,
        setTypeSelected(type) {
            this.type = type;
        },
        getTypeSelected() {
            return this.type;
        },
        setIndexSelected(index) {
            this.index = index;
        },
        getIndexSelected() {
            return this.index;
        }
    };

    window.menuInputSettingController = function () {
        let type = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        STATUS_DIAL = APP_MODE === MODE.BASS ? STATUS_DIAL_BASS : STATUS_DIAL_GUITAR;
        changeDialGKType(type, VALUE_DIAL_GK_TYPE);
    };

    let peakHoldData = {
        sens1: 0,
        sens2: 0,
        sens3: 0,
        sens4: 0,
        sens5: 0,
        sens6: 0,
    }

    let setTimeoutS = {
        sens1: [],
        sens2: [],
        sens3: [],
        sens4: [],
        sens5: [],
        sens6: [],
    };
    window.menuInputSettingMidi = {
        receiveValueSetting(value, index, indexSetting, type) {
            const INDEX_FIRST = 0;
            const INDEX_END = 7;
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let id = `menu-input-setting${mode}-${type}-setting-select`;
            let selectList = $(`#${id}`);
            let tagA = selectList.find('a').eq(indexSetting - 1);
            let name = tagA.text().replace(`[ ${indexSetting} ] `, '');
            if (index === INDEX_FIRST) {
                name = '';
            }
            let strValue = String.fromCharCode(value);
            name = [name, strValue].join('');
            if (index === INDEX_END) {
                name = name.trim();
            }
            tagA.text(`[ ${indexSetting} ] ${name}`);
            let indexChecked = Parameter.value(_items[id].pid, _items[id].size, _items[id].vofs);

            if (indexSetting - 1 === indexChecked) {
                selectList.find('p').text(`[ ${indexSetting} ] ${name.trim()}`);
            }
        },

        sendValueSetting(name) {
            let typeSelected = inputModeController.getTypeSelected();
            let indexChecked = inputModeController.getIndexSelected();
            let typeMode = APP_MODE === MODE.BASS ? 'Bass' : '';
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let address = _7bitize(Parameter.getblock(`System${typeMode}_${typeSelected}Setting(${indexChecked + 1})`).addr);
            let strClone = name;
            for (let i = 0; i < 8 - strClone.length; i++) {
                name += ' ';
            }

            for (let index = 0; index < name.length; index++) {
                let code = name.charCodeAt(index).toString(16).toUpperCase();
                if (code.length < 2) {
                    code = '0' + code;
                }
                MIDIController.dt1(nibble(address + index), code);
            }

            let typeSetting = inputModeController.getTypeSelected();
            $(`#menu-input-setting${mode}-${typeSetting}-setting-select`).find('p').text(`[ ${indexChecked + 1} ] ${name.trim()}`);
            $(`#menu-input-setting${mode}-${typeSetting}-setting-select`).find('a').eq(indexChecked).text(`[ ${indexChecked + 1} ] ${name.trim()}`);
        },

        showGKandNormal() {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let runningMode;
            if ($(`#menu-input-setting${mode}-tab`).find('label').eq(TAB.GK).attr('checked') === 'checked') {
                runningMode = ADDRESS_CONST.RUNNING_MODE.GK_SENS;
            } else {
                runningMode = ADDRESS_CONST.RUNNING_MODE.NORMAL_SENS;
            }
            runningModeModelController.setCurrentRunningMode(runningMode);
            runningModeMIDIController.updateRunningMode(runningMode);
        },

        receiveIndicatorGKSens(index, value) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;

            let peak = peakHoldData[`sens${index}`];
            if (value > peak) {
                peakHoldData[`sens${index}`] = value;

                setTimeoutS[`sens${index}`].forEach((time) => {
                    clearTimeout(time);
                });
                setTimeoutS[`sens${index}`] = [];

                let timeOut = setTimeout(() => {
                    $(`#menu-input-setting${mode}-sens${index}-indicator-${peakHoldData[`sens${index}`]}`).css({
                        'background': 'transparent',
                        'border': '1px solid #ffffff',
                    });
                    peakHoldData[`sens${index}`] = VALUE_GK_SENS.NO_INPUT;
                }, 1506);

                setTimeoutS[`sens${index}`].push(timeOut);
            }
            if (value === VALUE_GK_SENS.NO_INPUT) {
                for (let i = 1; i <= VALUE_GK_SENS.MAX_INPUT; i++) {
                    if (i !== peakHoldData[`sens${index}`]) {
                        $(`#menu-input-setting${mode}-sens${index}-indicator-${i}`).css({
                            'background': 'transparent',
                            'border': '1px solid #ffffff',
                        });
                    } else {
                        $(`#menu-input-setting${mode}-sens${index}-indicator-${i}`).css({
                            'background': '#33D6FF',
                            'border': '1px solid #33D6FF',
                        });
                    }
                }

                $(`#menu-input-setting${mode}-sens${index}-arrow-right`).css('background-image', 'url("images/ico_triangle_left.png")');
                $(`#menu-input-setting${mode}-sens${index}-arrow-left`).css('background-image', 'url("images/ico_triangle_right.png")');

                return;
            }

            for (let i = 1; i <= VALUE_GK_SENS.MAX_INPUT; i++) {
                if (i <= value) {
                    $(`#menu-input-setting${mode}-sens${index}-indicator-${i}`).css({
                        'background': '#33D6FF',
                        'border': '1px solid #33D6FF',
                    });
                } else {
                    if (i !== peakHoldData[`sens${index}`]) {
                        $(`#menu-input-setting${mode}-sens${index}-indicator-${i}`).css({
                            'background': 'transparent',
                            'border': '1px solid #ffffff',
                        });
                    } else {
                        $(`#menu-input-setting${mode}-sens${index}-indicator-${i}`).css({
                            'background': '#33D6FF',
                            'border': '1px solid #33D6FF',
                        });
                    }
                }
            }

            if (value >= VALUE_GK_SENS.TRIANGLE_MIN) {
                $(`#menu-input-setting${mode}-sens${index}-arrow-right`).css('background-image', 'url("images/ico_triangle_left_active.png")');
                $(`#menu-input-setting${mode}-sens${index}-arrow-left`).css('background-image', 'url("images/ico_triangle_right_active.png")');
            } else {
                $(`#menu-input-setting${mode}-sens${index}-arrow-right`).css('background-image', 'url("images/ico_triangle_left.png")');
                $(`#menu-input-setting${mode}-sens${index}-arrow-left`).css('background-image', 'url("images/ico_triangle_right.png")');
            }
        },

        receiveIndicatorNormalSens(index, value) {
            const MAX_OFFSET_NORMAL_SENS = 60;
            const MAX_VALUE = 64;
            const MIN_VALUE = 44;

            const MAX_TOP = 360;
            const MIN_TOP = 270;
            const MIN_DB_NORMAL = 16;

            const MAX_TOP_INVERTED = 270;
            const MIN_TOP_INTERTED = 240;
            const MAX_DB_NORMAL_INVERTED = 4;

            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let dataConvert = value - MAX_OFFSET_NORMAL_SENS;

            if (value < MIN_VALUE || value > MAX_VALUE) {
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-${index}`).css({
                    'top': `${MAX_TOP}px`
                });
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-inverted-${index}`).css({
                    'top': `${MAX_TOP_INVERTED}px`
                });
                return;
            }

            // INDICATOR shows from -16dB to +4dB.			
            if (dataConvert < 0) {
                let heightScale = (MAX_TOP - MIN_TOP) / (MIN_DB_NORMAL - 1);
                let absData = Math.abs(dataConvert);
                let extendHeightScale = MIN_DB_NORMAL - absData;
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-${index}`).css({
                    'top': `${MAX_TOP - heightScale * extendHeightScale}px`
                });
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-inverted-${index}`).css({
                    'top': `${MAX_TOP_INVERTED}px`
                });
            } else {
                let heightScaleInveted = (MAX_TOP_INVERTED - MIN_TOP_INTERTED) / (MAX_DB_NORMAL_INVERTED + 1);
                let extendHeightScaleInverted = dataConvert + 1;
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-${index}`).css({
                    'top': `${MIN_TOP}px`
                });
                $(`#menu-input-setting${mode}-normal-indicator-lo-hi-meter-inverted-${index}`).css({
                    'top': `${MAX_TOP_INVERTED - heightScaleInveted * extendHeightScaleInverted}px`
                });
            }
        },
    };

    window.menuInputSetting = {
        // change select list
        menuInputSettingEvents() {
            $('#menu-input-setting-gk-type-dial, #menu-input-setting-bass-gk-type-dial').on('elf-change', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                changeDialGKType(mode, v);
            });

            $('#menu-input-setting-gk-write-btn, #menu-input-setting-bass-gk-write-btn').on(pointer.click, (e) => {
                e.preventDefault();
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                changeSelctListWriteDialog(`menu-input-setting${mode}-gk-setting-select`);
                inputModeController.setTypeSelected(STR_GK);
            });

            $('#menu-input-setting-normal-write-btn, #menu-input-setting-bass-normal-write-btn').on(pointer.click, (e) => {
                e.preventDefault();
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                changeSelctListWriteDialog(`menu-input-setting${mode}-normal-setting-select`);
                inputModeController.setTypeSelected(STR_NORMAL);
            });

            $(IDS.WRITE_SELECT).on('elf-changed', (e, v) => {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                let value = $(IDS.WRITE_SELECT).find('a').eq(v).text().replace(`[ ${v + 1} ] `, '');
                $(IDS.WRITE_INPT).find('input').val(value);
                inputModeController.setIndexSelected(v);
                let typeSetting = inputModeController.getTypeSelected();
                $(`#menu-input-setting${mode}-${typeSetting}-setting-select`).trigger('elf-change', v);
                $(`#menu-input-setting${mode}-${typeSetting}-setting-select`).trigger('elf-update', v);
            });

            $(IDS.WRITE_BTN_OK).on(pointer.click, (e) => {
                e.preventDefault();
                let name = $(IDS.WRITE_INPT).find('input').val().trim();
                menuInputSettingMidi.sendValueSetting(name);
            });

            $('#menu-input-setting-tab, #menu-input-setting-bass-tab').on('elf-changed', function (e, v, updateOnly) {
                if (updateOnly) {
                    return;
                }
                if (CURRENT_SELECT_TAB_INPUT === v) {
                    return;
                }
                let runningMode = v === TAB.GK ? ADDRESS_CONST.RUNNING_MODE.GK_SENS : ADDRESS_CONST.RUNNING_MODE.NORMAL_SENS;
                runningModeModelController.setCurrentRunningMode(runningMode);
                runningModeMIDIController.updateRunningMode(runningMode);

                CURRENT_SELECT_TAB_INPUT = v;
                isClickChangeTabInputSetting = true;
            });

            $('#menu-bass-input-setting-close, #menu-bass-input-setting-close-bass').on(pointer.click, (e) => {
                isClickSystemBtnClose = true;
                runningModeModelController.setCurrentRunningMode(ADDRESS_CONST.RUNNING_MODE.PLAY);
                runningModeMIDIController.updateRunningMode(ADDRESS_CONST.RUNNING_MODE.PLAY);
            });
        },

    };

    function changeSelctListWriteDialog(id) {
        let selectList = $(`#${id}`);
        let indexChecked = Parameter.value(_items[id].pid, _items[id].size, _items[id].vofs);
        $(IDS.WRITE_SELECT).find('a').toArray().forEach((element, index) => {
            $(element).text(selectList.find('a').eq(index).text());
        });

        $(IDS.WRITE_SELECT).trigger('elf-change', indexChecked);
        $(IDS.WRITE_SELECT).trigger('elf-update', indexChecked);
    }

    function changeDialGKType(typeMode, valueDialGKType) {
        STATUS_DIAL.forEach(element => {
            updateDialStatus(`menu-input-setting${typeMode}-${element.id}`, !element.key.includes(valueDialGKType));
        });
    }

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };
})();