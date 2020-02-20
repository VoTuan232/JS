(function () {
    const KEY_MODE_BASS = '-bass';
    const KEY_MODE_GUITAR = '-guitar';

    const CONFIG_TEXT = {
        GK: 'CHANGE TO NORMAL PATCH',
        NORMAL: 'CHANGE TO GK PATCH',
    };

    const IDS = {
        BTN_CHANGE_PATCH: '#master-change-patch-btn',
        FRAME_IMG: '#editor-master-gk-img',
        TITLE_DIALOG_BAR: '#master-change-tittle-bar',
    };

    const TUNER_MODE_MONO = 1;

    const VALUE_DETECT = {
        GK_INPUT: 0,
        NORMAL_INPUT: 1
    }
    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };

    function updateActiveDial(id, isActive) {
        $(`#${id}-mask`).css('display', 'none');
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('display', isActive ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isActive ? '0' : '-1');
    };

    const INST_KEY = [
        'inst-1',
        'inst-2',
        'inst-3',
    ];

    const DISABLED_TEXT_WAVEFORM = {
        FEEDBACK_OSC: 7,
        SUPER_SAW: 8
    }

    // event change GK NORMAL PATCH
    window.instControllerMst = {
        settingGKNormalMaster(value) {
            APP_MST_PATCH_TYPE = (value === 0) ? MST_PATCH_TYPE.GK : MST_PATCH_TYPE.NORMAL;
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let instMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : KEY_MODE_GUITAR;
            mainMasterFunctionController.disabledSelectMst();
            mainMasterFunctionController.setStatusInputBox(typeMode, value, instMode);
        },

        receiveSettingGkNormal(msgPatchType) {
            this.settingGKNormalMaster(parseInt(msgPatchType.slice(0, 2)));
            instController.disabledCommonString(parseInt(msgPatchType.slice(0, 2)), APP_MODE === MODE.BASS ? KEY_MODE_BASS : KEY_MODE_GUITAR);
        }
    };

    window.mainMasterFunctionController = {
        disabledSelectMst() {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let modeTuner = $(`#tuner${typeMode}-mode-btn`);
            if (APP_MST_PATCH_TYPE === MST_PATCH_TYPE.GK) {
                $(IDS.TITLE_DIALOG_BAR).find('p').text(CONFIG_TEXT.GK);
                $(IDS.FRAME_IMG).show();
                $(`#tuner${typeMode}-mode-btn`).removeClass('disabled-tuner');
            } else {
                $(IDS.TITLE_DIALOG_BAR).find('p').text(CONFIG_TEXT.NORMAL);
                $(IDS.FRAME_IMG).hide();
                modeTuner.addClass('disabled-tuner');
                modeTuner.trigger('elf-update', TUNER_MODE_MONO);
                modeTuner.trigger('elf-change', TUNER_MODE_MONO);
            }

            updateDialStatus(`master${typeMode}-gk-set-select-list`, APP_MST_PATCH_TYPE !== MST_PATCH_TYPE.GK);
            updateDialStatus(`master${typeMode}-normal-set-select-list`, APP_MST_PATCH_TYPE === MST_PATCH_TYPE.GK);

            $(`#menu-input-setting${typeMode}-gk-indicator-mask, #menu-input-setting${typeMode}-gk-indicator-mode-normal-label`).css('display', APP_MST_PATCH_TYPE === MST_PATCH_TYPE.GK ? 'none' : '');
            $(`#menu-input-setting${typeMode}-normal-indicator-mask, #menu-input-setting${typeMode}-normal-indicator-mode-gk-label`).css('display', APP_MST_PATCH_TYPE !== MST_PATCH_TYPE.GK ? 'none' : '');

            //disable poly tuner 
            updateDialStatus(`tuner${typeMode}-mode-btn`, APP_MST_PATCH_TYPE !== MST_PATCH_TYPE.GK);

            updateActiveDial(`noise-sp${typeMode}-detect-normal`, APP_MST_PATCH_TYPE !== MST_PATCH_TYPE.GK);
            updateActiveDial(`noise-sp${typeMode}-detect`, APP_MST_PATCH_TYPE === MST_PATCH_TYPE.GK);

            $(`#noise-sp${typeMode}-detect-normal-stringer`).find('p').eq(0).hide();
        },

        setStatusInputBox(typeMode, value, instMode) {
            if (value === MST_PATCH_TYPE.NORMAL) {
                $(`#inst${typeMode}-type`).addClass('disabled');
                $(`#inst${typeMode}-type`).find('p').css('opacity', '0.4');
                $(`#inst${typeMode}-type`).trigger('elf-change', INST_CONTROL.TYPE.DYNAMIC);
                $(`#inst${typeMode}-type`).trigger('elf-update', INST_CONTROL.TYPE.DYNAMIC);
                $(`#inst${instMode}-osc-dynamic-waveform-select`).find('a').eq(DISABLED_TEXT_WAVEFORM.FEEDBACK_OSC).hide();
                $(`#inst${instMode}-osc-dynamic-waveform-select`).find('a').eq(DISABLED_TEXT_WAVEFORM.SUPER_SAW).hide();
                $(`#inst${instMode}-osc-dynamic-waveform-select`).trigger('elf-change', 0);
                $(`#inst${instMode}-osc-dynamic-waveform-select`).trigger('elf-update', 0);
                $(`#noise-sp${typeMode}-detect-normal-dial`).trigger('elf-change', VALUE_DETECT.NORMAL_INPUT, true);
                $(`#noise-sp${typeMode}-detect-normal-dial`).trigger('elf-update', VALUE_DETECT.NORMAL_INPUT);
            } else {
                $(`#inst${typeMode}-type`).removeClass('disabled');
                $(`#inst${typeMode}-type`).find('p').css('opacity', '1');
                $(`#inst${instMode}-osc-dynamic-waveform-select`).find('a').eq(DISABLED_TEXT_WAVEFORM.FEEDBACK_OSC).show();
                $(`#inst${instMode}-osc-dynamic-waveform-select`).find('a').eq(DISABLED_TEXT_WAVEFORM.SUPER_SAW).show();
            }
        },

        eventMaster() {
            $(IDS.BTN_CHANGE_PATCH).on(pointer.click, function (e) {
                let address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.GK_NORMAL_SETTING : ADDRESS_CONST.ADDRESS.GK_NORMAL_SETTING_BASS;
                let dataSetting = APP_MST_PATCH_TYPE === MST_PATCH_TYPE.GK ? MST_PATCH_TYPE.NORMAL : MST_PATCH_TYPE.GK;
                MIDIController.dt1(nibble(address), hex2(dataSetting));
                instControllerMst.settingGKNormalMaster(dataSetting);
                instController.disabledCommonString(dataSetting, APP_MODE === MODE.BASS ? KEY_MODE_BASS : KEY_MODE_GUITAR);
            });

            $(`#noise-sp-detect-normal-dial , #noise-sp-bass-detect-normal-dial`).on('elf-changed', (e, v, only) => {
                if (v === VALUE_DETECT.GK_INPUT && !only) {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    $(`#noise-sp${mode}-detect-normal-dial`).trigger('elf-change', VALUE_DETECT.NORMAL_INPUT, true);
                    $(`#noise-sp${mode}-detect-normal-dial`).trigger('elf-update', VALUE_DETECT.NORMAL_INPUT);
                }
            });
        }
    }
})();