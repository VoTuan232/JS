/* global
runningModeModelController runningModeDOMController runningModeMIDIController
ADDRESS_CONST
*/

(function () {
    const KEY_MODE_BASS = '-bass';
    const TUNER_MODE_BTN = {
        MONO: 1,
        POLY: 0
    };
    const TAB = {
        GK: 0,
        NORMAL: 1,
    };

    window.runningModeModelController = {
        currentRunningMode: ADDRESS_CONST.RUNNING_MODE.PLAY,
        setCurrentRunningMode: function (runningMode) {
            this.currentRunningMode = runningMode;
        }
    };

    window.runningModeDOMController = {
        transitPageByRunningMode: function (value) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let tunerModeBtnDOM = $(`#tuner${typeMode}-mode-btn`);
            switch (value) {
                case ADDRESS_CONST.RUNNING_MODE.PLAY: {
                    popup_close(`tuner${typeMode}`);
                    if (!isClickChangeTabInputSetting && (isClickSystemBtnClose || SELECT_PAGE_SYSTEM === SYSTEM.INPUT_SETTING)) {
                        popup_close(`menu${typeMode}`);
                    }
                    isClickChangeTabInputSetting = false;
                    isClickSystemBtnClose = false;
                    break;
                }
                case ADDRESS_CONST.RUNNING_MODE.MONO_TUNER: {
                    popup_open(`tuner${typeMode}`);
                    tunerModeBtnDOM.trigger('elf-change', [TUNER_MODE_BTN.MONO, true]);
                    tunerModeBtnDOM.trigger('elf-update', TUNER_MODE_BTN.MONO);
                    break;
                }
                case ADDRESS_CONST.RUNNING_MODE.POLY_TUNER: {
                    popup_open(`tuner${typeMode}`);
                    tunerModeBtnDOM.trigger('elf-change', [TUNER_MODE_BTN.POLY, true]);
                    tunerModeBtnDOM.trigger('elf-update', TUNER_MODE_BTN.POLY);
                    break;
                }
                case ADDRESS_CONST.RUNNING_MODE.GK_SENS: {
                    popup_open(`menu${typeMode}`);
                    $(`#menu${typeMode}-page-select`).trigger('elf-change', [SYSTEM.INPUT_SETTING, true]);
                    $(`#menu${typeMode}-page-select`).trigger('elf-update', SYSTEM.INPUT_SETTING);
                    $(`#menu-input-setting${typeMode}-tab`).trigger('elf-change', [TAB.GK, true]);
                    $(`#menu-input-setting${typeMode}-tab`).trigger('elf-update', TAB.GK);
                    break;
                }
                case ADDRESS_CONST.RUNNING_MODE.NORMAL_SENS: {
                    popup_open(`menu${typeMode}`);
                    $(`#menu${typeMode}-page-select`).trigger('elf-change', [SYSTEM.INPUT_SETTING, true]);
                    $(`#menu${typeMode}-page-select`).trigger('elf-update', SYSTEM.INPUT_SETTING);
                    $(`#menu-input-setting${typeMode}-tab`).trigger('elf-change', [TAB.NORMAL, true]);
                    $(`#menu-input-setting${typeMode}-tab`).trigger('elf-update', TAB.NORMAL);
                    break;
                }
            }
        }
    };
    
    window.assignRunningModeEvents = function () {
        $('#top-header-tuner-btn, #top-header-tuner-bass-btn').on(pointer.click, function (e) {
            let mode = CURRENT_TAB_TUNER === 0 ? ADDRESS_CONST.RUNNING_MODE.POLY_TUNER : ADDRESS_CONST.RUNNING_MODE.MONO_TUNER;
            runningModeModelController.setCurrentRunningMode(mode);
            runningModeMIDIController.updateRunningMode(mode);
        });
        $('#tuner-close-btn, #tuner-bass-close-btn').on(pointer.click, function (e) {
            let mode = ADDRESS_CONST.RUNNING_MODE.PLAY;
            runningModeModelController.setCurrentRunningMode(mode);
            runningModeMIDIController.updateRunningMode(mode);
        });
    };

    window.runningModeMIDIController = {
        receiveRunningMode: function (runningMode) {
            runningModeModelController.setCurrentRunningMode(runningMode);
            runningModeDOMController.transitPageByRunningMode(runningMode);
        },
        updateRunningMode: function (runningMode) {
            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.RUNNING_MODE), hex2(runningMode));
        }
    };
})();
