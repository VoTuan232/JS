(function () {
    const STATUS_MST_DELAY_DIAL_IS_DISABLE = [
        { id: 'd1-time', key: [3, 4, 5] },
        { id: 'time', key: [0, 1, 2, 6, 7, 8, 9, 10] },
        { id: 'feed-back', key: [0, 1, 2, 6, 7, 8, 9] },
        { id: 'd1-feed-back', key: [3, 4, 5] },
        { id: 'trigger', key: [10, 11] },
        { id: 'high-cut', key: [0, 1, 2, 6, 7, 8, 9] },
        { id: 'd1-high-cut', key: [3, 4, 5] },
        { id: 'rise-time', key: [11] },
        { id: 'tap-time', key: [2] },
        { id: 'mode-rate', key: [9] },
        { id: 'd1-effect-level', key: [3, 4, 5] },
        { id: 'd2-time', key: [3, 4, 5] },
        { id: 'mode-depth', key: [9] },
        { id: 'd2-feed-back', key: [3, 4, 5] },
        { id: 'd2-high-cut', key: [3, 4, 5] },
        { id: 'd2-effect-level', key: [3, 4, 5] },
        { id: 'effect-level', key: [0, 1, 2, 6, 7, 8, 9, 10, 11] },
        { id: 'direct-level', key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { id: 'bpm-mst', key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    ];

    const VALUE_SELECT = {
        type: 1,
        mode: 0
    };

    const STEREO2_TYPE = 1;

    let valueSelectList = {
        typeSelectList: VALUE_SELECT.type,
        modeSelectList: VALUE_SELECT.mode,

        setType(typeSelectList) {
            this.typeSelectList = typeSelectList;
        },
        setMode(modeSelectList) {
            this.modeSelectList = modeSelectList;
        },
        getType() {
            return this.typeSelectList;
        },
        getMode() {
            return this.modeSelectList;
        },
    };

    const KEY_MODE_BASS = '-bass';

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };

    window.initControllerEditorMstDelay = function () {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        STATUS_MST_DELAY_DIAL_IS_DISABLE.forEach(element => {
            updateDialStatus(`master-delay${typeMode}-${element.id}`, !element.key.includes(STEREO2_TYPE));
        });
        updateTwistModeStatus();
        updateDialStatus(`master-delay${typeMode}-time`, false);
        updateDialStatus(`master-delay${typeMode}-fall-time`, true);
        updateDialStatus(`master-delay${typeMode}-fade-time`, true);
    }

    window.eventMstDelay = function () {
        $('#master-delay-twist-mode-select-list, #master-delay-bass-twist-mode-select-list').on('elf-change', function (e, v) {
            valueSelectList.setMode(v);
            updateRiseFallTimeDialStatus();
        });

        $('#master-delay-type-select-list, #master-delay-bass-type-select-list').on('elf-change', function (e, v) {
            valueSelectList.setType(v);
            changeModeType();
        });
    }

    function changeModeType() {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        let vType = valueSelectList.getType();

        STATUS_MST_DELAY_DIAL_IS_DISABLE.forEach(element => {
            if (element.key.includes(vType)) {
                updateDialStatus(`master-delay${typeMode}-${element.id}`, false);
            } else {
                updateDialStatus(`master-delay${typeMode}-${element.id}`, true);
            }
        });

        updateTwistModeStatus();
        updateRiseFallTimeDialStatus();
    }

    function updateTwistModeStatus() {
        const TWIST_TYPE = 11;
        let vType = valueSelectList.getType();
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';

        if (vType === TWIST_TYPE) {
            updateDialStatus(`master-delay${typeMode}-twist-mode-select-list`, false);
        } else {
            updateDialStatus(`master-delay${typeMode}-twist-mode-select-list`, true);
        }
    }

    // Update dial mode
    function updateRiseFallTimeDialStatus() {
        const TWIST_TYPE = 11;
        const SELECT_LIST_MODE = {
            riseFall: 0,
            riseFade: 1,
        }
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        let vType = valueSelectList.getType();
        let vMode = valueSelectList.getMode();

        if (vType === TWIST_TYPE) {
            if (vMode === SELECT_LIST_MODE.riseFall) {
                updateDialStatus(`master-delay${typeMode}-fall-time`, false);
                updateDialStatus(`master-delay${typeMode}-fade-time`, true);
            } else {
                updateDialStatus(`master-delay${typeMode}-fall-time`, true);
                updateDialStatus(`master-delay${typeMode}-fade-time`, false);
            }
        } else {
            updateDialStatus(`master-delay${typeMode}-fall-time`, true);
            updateDialStatus(`master-delay${typeMode}-fade-time`, true);
        }
    }

})();