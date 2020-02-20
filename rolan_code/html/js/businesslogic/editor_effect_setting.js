(function () {
    const OUTPUT_TYPE = {
        main: 'main',
        sub: 'sub'
    };
    const OUTPUT_TYPE_LR = [OUTPUT_TYPE.main, OUTPUT_TYPE.sub];

    const LIST_DIAL_EQ_SL = ['low-cut', 'low-gain', 'low-mid-freq', 'low-mid-q', 'low-mid-gain', 'high-mid-freq', 'high-mid-q', 'high-mid-gain', 'high-gain', 'high-cut'];

    const LIST_OUTPUT_EQ_LABEL = [
        {
            key: 'low-cut',
            text: {
                on: 'LOW CUT',
                off: 'L: LOW CUT'
            }
        },
        {
            key: 'low-gain',
            text: {
                on: 'LOW GAIN',
                off: 'L: LOW GAIN'
            }
        },
        {
            key: 'low-mid-freq',
            text: {
                on: 'LOW-MID FREQ',
                off: 'L: LOW-MID FREQ'
            }
        },
        {
            key: 'low-mid-q',
            text: {
                on: 'LOW-MID Q',
                off: 'L: LOW-MID Q'
            }
        },
        {
            key: 'low-mid-gain',
            text: {
                on: 'LOW-MID GAIN',
                off: 'L: LOW-MID GAIN'
            }
        },
        {
            key: 'high-mid-freq',
            text: {
                on: 'HIGH-MID FREQ',
                off: 'L: HI-MID FREQ'
            }
        },
        {
            key: 'high-mid-q',
            text: {
                on: 'HIGH-MID Q',
                off: 'L: HI-MID Q'
            }
        },
        {
            key: 'high-mid-gain',
            text: {
                on: 'HIGH-MID GAIN',
                off: 'L: HI-MID GAIN'
            }
        },
        {
            key: 'high-gain',
            text: {
                on: 'HIGH GAIN',
                off: 'L: HIGH GAIN'
            }
        },
        {
            key: 'high-cut',
            text: {
                on: 'HIGH CUT',
                off: 'L: HIGH CUT'
            }
        }
    ]

    const KEY_MODE_BASS = '-bass';

    const FIRST_ITEM_LABEL_P = 0;

    window.mainSubFunctionController = {
        initLREffector() {
            effectMainSubController.changeOutputParameterLabel(OUTPUT_TYPE.main, true);
            effectMainSubController.changeOutputParameterLabel(OUTPUT_TYPE.sub, true);
            effectMainSubController.changeOutputEqParameterLabel(OUTPUT_TYPE.main, true);
            effectMainSubController.changeOutputEqParameterLabel(OUTPUT_TYPE.sub, true);
            //defaul dial 
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            OUTPUT_TYPE_LR.forEach(outputType => {
                updateActiveDial(`effect-setting-${outputType}-out${typeMode}-phase-r`, false);
                LIST_DIAL_EQ_SL.forEach(element => {
                    updateDialStatus(`${outputType}-out${typeMode}-global-eq-dialog-r-${element}`, true);
                    updateDialStatus(`menu-${outputType}-out${typeMode}-global-eq-dialog-r-${element}`, true);
                });
                updateDialStatus(`${outputType}-out${typeMode}-select-dialog-r-select-list`, true);
                updateDialStatus(`${outputType}-out${typeMode}-select-dialog-r-level-output`, true);

                updateDialStatus(`menu-${outputType}-out${typeMode}-select-dialog-r-select-list`, true);
                updateDialStatus(`menu-${outputType}-out${typeMode}-select-dialog-r-level-output`, true);

                // default label
                $(`#effect-setting-${outputType}-out${typeMode}-phase-l-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('PHASE');

                LIST_OUTPUT_EQ_LABEL.forEach(element => {
                    $(`#${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.on}`);
                    $(`#menu-${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.on}`);
                });

                $(`#${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT SELECT');
                $(`#${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT LEVEL');

                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT SELECT');
                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT LEVEL');
            });
        },

        mainSubLREffectEvents () {
            $('#main-out-stereo-link-btn, #main-out-bass-stereo-link-btn').on('elf-changed', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnStereoOn(CHAIN_BLOCK_ID_MAP.outMainLR, v !== 0);
                chainModelController.turnStereoOn(CHAIN_BLOCK_ID_MAP.outMainLR, v !== 0);
                effectMainSubController.changeOutputParameterLabel(OUTPUT_TYPE.main, v !== 0, typeMode);
                effectMainSubController.disableOutPutDial(OUTPUT_TYPE.main, v, typeMode);
            });
            
            $('#sub-out-stereo-link-btn, #sub-out-bass-stereo-link-btn').on('elf-changed', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnStereoOn(CHAIN_BLOCK_ID_MAP.outSubLR, v !== 0);
                chainModelController.turnStereoOn(CHAIN_BLOCK_ID_MAP.outSubLR, v !== 0);
                effectMainSubController.changeOutputParameterLabel(OUTPUT_TYPE.sub, v !== 0, typeMode);
                effectMainSubController.disableOutPutDial(OUTPUT_TYPE.sub, v, typeMode);
            });

            $('#main-out-eq-switch, #main-out-bass-eq-switch, #menu-main-out-eq-switch, #menu-main-out-bass-eq-switch').on('elf-changed', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnEQStereoOn(OUTPUT_TYPE.main, v !== 0);
                effectMainSubController.changeOutputEqParameterLabel(OUTPUT_TYPE.main, v !== 0, typeMode);
                effectMainSubController.disableOutPutEqDial(OUTPUT_TYPE.main, v, typeMode);
            });
            
            $('#sub-out-eq-switch, #sub-out-bass-eq-switch, #menu-sub-out-eq-switch, #menu-sub-out-bass-eq-switch').on('elf-changed', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnEQStereoOn(OUTPUT_TYPE.sub, v !== 0);
                effectMainSubController.changeOutputEqParameterLabel(OUTPUT_TYPE.sub, v !== 0, typeMode);
                effectMainSubController.disableOutPutEqDial(OUTPUT_TYPE.sub, v, typeMode);
            });

            $('#main-out-select-dialog-stereo-link-output-dial, #main-out-bass-select-dialog-stereo-link-output-dial, #menu-main-out-select-dialog-stereo-link-output-dial, #menu-main-out-bass-select-dialog-stereo-link-output-dial').on('elf-change', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnSelectStereoOn(OUTPUT_TYPE.main, v !== 0);
                effectMainSubController.changeOutputSelectParameterLabel(OUTPUT_TYPE.main, v !== 0, typeMode);
                effectMainSubController.disableOutPutSelectDial(OUTPUT_TYPE.main, v, typeMode);
            });

            $('#sub-out-select-dialog-stereo-link-output-dial, #sub-out-bass-select-dialog-stereo-link-output-dial, #menu-sub-out-select-dialog-stereo-link-output-dial, #menu-sub-out-bass-select-dialog-stereo-link-output-dial').on('elf-change', function (e, v) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                effectMainSubController.turnSelectStereoOn(OUTPUT_TYPE.sub, v !== 0);
                effectMainSubController.changeOutputSelectParameterLabel(OUTPUT_TYPE.sub, v !== 0, typeMode);
                effectMainSubController.disableOutPutSelectDial(OUTPUT_TYPE.sub, v, typeMode);
            });
        },

        showHideDialPhase(id) {
            const LIST_MAIN_SUB_SPLIT = [CHAIN_BLOCK_ID_MAP.outSubL, CHAIN_BLOCK_ID_MAP.outSubR, CHAIN_BLOCK_ID_MAP.outMainL, CHAIN_BLOCK_ID_MAP.outMainR];
            if (!LIST_MAIN_SUB_SPLIT.includes(id)){
               return;
            }
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            if (id === CHAIN_BLOCK_ID_MAP.outSubL){
                updateActiveDial(`effect-setting-sub-out${typeMode}-phase-r`, false);
                updateActiveDial(`effect-setting-sub-out${typeMode}-phase-l`, true);
            } else if (id === CHAIN_BLOCK_ID_MAP.outSubR){
                updateActiveDial(`effect-setting-sub-out${typeMode}-phase-r`, true);
                updateActiveDial(`effect-setting-sub-out${typeMode}-phase-l`, false);
            } else if (id === CHAIN_BLOCK_ID_MAP.outMainL){
                updateActiveDial(`effect-setting-main-out${typeMode}-phase-r`, false);    
                updateActiveDial(`effect-setting-main-out${typeMode}-phase-l`, true);             
            } else if(id === CHAIN_BLOCK_ID_MAP.outMainR){
                updateActiveDial(`effect-setting-main-out${typeMode}-phase-r`, true);
                updateActiveDial(`effect-setting-main-out${typeMode}-phase-l`, false);
            }
        }
    },

    window.effectMainSubController = {
        turnStereoOn: function (id, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let btnId = null;
            switch (id) {
                case CHAIN_BLOCK_ID_MAP.outMainLR:
                case CHAIN_BLOCK_ID_MAP.outMainL:
                case CHAIN_BLOCK_ID_MAP.outMainR:
                    btnId = null;
                    $(`#main-out${typeMode}-stereo-link-btn`).find('p').text('STEREO LINK: ' + (v ? 'ON' : 'OFF'));
                    break;
                case CHAIN_BLOCK_ID_MAP.outSubLR:
                case CHAIN_BLOCK_ID_MAP.outSubL:
                case CHAIN_BLOCK_ID_MAP.outSubR:
                    btnId = null;
                    $(`#sub-out${typeMode}-stereo-link-btn`).find('p').text('STEREO LINK: ' + (v ? 'ON' : 'OFF'));
                    break;
    
            }
            if (btnId !== null) {
                $(btnId).find('p').text('STEREO LINK: ' + (v ? 'ON' : 'OFF'));
            }
        },

        turnEQStereoOn: function (type, isStereoOn) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            if (type === OUTPUT_TYPE.main) {
                $(`#main-out${typeMode}-eq-switch`+','+`#menu-main-out${typeMode}-eq-switch`).find('p').text('STEREO LINK: ' + (isStereoOn ? 'ON' : 'OFF'));
            } else if (type === OUTPUT_TYPE.sub) {
                $(`#sub-out${typeMode}-eq-switch`+','+`#menu-sub-out${typeMode}-eq-switch`).find('p').text('STEREO LINK: ' + (isStereoOn ? 'ON' : 'OFF'));
            }
        },

        turnSelectStereoOn: function (type, isStereoOn) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            if (type === OUTPUT_TYPE.main) {
                $(`#main-out${typeMode}-select-dialog-stereo-link-output-dial, #menu-main-out${typeMode}-select-dialog-stereo-link-output-dial`).find('p').text('MAIN: STEREO LINK: ' + (isStereoOn ? 'ON' : 'OFF'));
            } else if (type === OUTPUT_TYPE.sub) {
                $(`#sub-out${typeMode}-select-dialog-stereo-link-output-dial, #menu-sub-out${typeMode}-select-dialog-stereo-link-output-dial`).find('p').text('SUB: STEREO LINK: ' + (isStereoOn ? 'ON' : 'OFF'));
            }
        },

        changeOutputParameterLabel: function (outputType, isOn, typeMode) {
            if (isOn) {
                $(`#effect-setting-${outputType}-out${typeMode}-phase-l-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('PHASE');
            } else {
                $(`#effect-setting-${outputType}-out${typeMode}-phase-l-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('L:PHASE');
            }
        },

        changeOutputEqParameterLabel: function (outputType, isOn, typeMode) {
            LIST_OUTPUT_EQ_LABEL.forEach(element => {
                if (isOn) {
                    $(`#${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.on}`);
                    $(`#menu-${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.on}`);
                } else {
                    $(`#${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.off}`);
                    $(`#menu-${outputType}-out${typeMode}-global-eq-dialog-l-${element.key}-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text(`${element.text.off}`);
                }
            });
        },

        changeOutputSelectParameterLabel: function (outputType, isOn, typeMode) {
            if (isOn) {
                $(`#${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT SELECT');
                $(`#${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT LEVEL');

                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT SELECT');
                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('OUTPUT LEVEL');
            } else {
                $(`#${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('L:OUTPUT SELECT');
                $(`#${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('L:OUTPUT LEVEL');
            
                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-select-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('L:OUTPUT SELECT');
                $(`#menu-${outputType}-out${typeMode}-select-dialog-l-level-output-label`).find('p').eq(`${FIRST_ITEM_LABEL_P}`).text('L:OUTPUT LEVEL');
            }
        },

        /// disable dial 
        disableOutPutDial: function (outputType, value, typeMode) {
            updateActiveDial(`effect-setting-${outputType}-out${typeMode}-phase-r`, false);
            updateActiveDial(`effect-setting-${outputType}-out${typeMode}-phase-l`, true);
        },

        disableOutPutEqDial: function (outputType, value, typeMode) {
            LIST_DIAL_EQ_SL.forEach(element => {
                updateDialStatus(`${outputType}-out${typeMode}-global-eq-dialog-r-${element}`, value === 0 ? false : true);
                updateDialStatus(`menu-${outputType}-out${typeMode}-global-eq-dialog-r-${element}`, value === 0 ? false : true);
            });
        },

        disableOutPutSelectDial: function (outputType, value, typeMode) {
            updateDialStatus(`${outputType}-out${typeMode}-select-dialog-r-select-list`, value === 0 ? false : true);
            updateDialStatus(`${outputType}-out${typeMode}-select-dialog-r-level-output`, value === 0 ? false : true);

            updateDialStatus(`menu-${outputType}-out${typeMode}-select-dialog-r-select-list`, value === 0 ? false : true);
            updateDialStatus(`menu-${outputType}-out${typeMode}-select-dialog-r-level-output`, value === 0 ? false : true);
        }
    };

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
})();