(function () {
    const AUDIO_ROUTING = {
        STANDARD: 0,
        MIX: 1,
        RE_SYNTH1: 2,
        RE_SYNTH2: 3,
        DIRECTOFF: 4,
    };

    const POSITION = {
        INST1: 0,
        INST2: 1,
        INST3: 2,
        NORMAL_IN: 3,
        BALANCER1: 4,
        BALANCER2: 5,
        BALANCER3: 6,
        MAIN_OUT: 7,
        SUB_OUT: 8,
        MAIN_SUB: 9,
    };

    const CONFIG_ENABLE_IN = [
        { key: AUDIO_ROUTING.STANDARD, enable: [POSITION.MAIN_OUT, POSITION.SUB_OUT, POSITION.MAIN_SUB] },
        { key: AUDIO_ROUTING.MIX, enable: [POSITION.MAIN_OUT, POSITION.SUB_OUT, POSITION.MAIN_SUB] },
        { key: AUDIO_ROUTING.RE_SYNTH1, enable: [POSITION.INST1, POSITION.INST2, POSITION.INST3, POSITION.NORMAL_IN, POSITION.BALANCER1, POSITION.BALANCER2, POSITION.BALANCER3] },
        { key: AUDIO_ROUTING.RE_SYNTH2, enable: [POSITION.MAIN_OUT, POSITION.SUB_OUT, POSITION.MAIN_SUB] },
        { key: AUDIO_ROUTING.DIRECTOFF, enable: [POSITION.MAIN_OUT, POSITION.SUB_OUT, POSITION.MAIN_SUB] },
    ];

    const CONFIG_ENABLE_OUT = [
        { key: AUDIO_ROUTING.STANDARD, enable: [POSITION.INST1, POSITION.INST2, POSITION.INST3, POSITION.NORMAL_IN, POSITION.BALANCER1, POSITION.BALANCER2, POSITION.BALANCER3, POSITION.MAIN_OUT, POSITION.SUB_OUT] },
        { key: AUDIO_ROUTING.MIX, enable: [POSITION.MAIN_OUT, POSITION.SUB_OUT] },
        { key: AUDIO_ROUTING.RE_SYNTH1, enable: [POSITION.INST1, POSITION.INST2, POSITION.INST3, POSITION.BALANCER1, POSITION.BALANCER2, POSITION.BALANCER3, POSITION.MAIN_OUT, POSITION.SUB_OUT] },
        { key: AUDIO_ROUTING.RE_SYNTH2, enable: [POSITION.INST1, POSITION.INST2, POSITION.INST3, POSITION.BALANCER1, POSITION.BALANCER2, POSITION.BALANCER3, POSITION.MAIN_OUT, POSITION.SUB_OUT] },
        { key: AUDIO_ROUTING.DIRECTOFF, enable: [POSITION.INST1, POSITION.INST2, POSITION.INST3, POSITION.NORMAL_IN, POSITION.BALANCER1, POSITION.BALANCER2, POSITION.BALANCER3, POSITION.MAIN_OUT, POSITION.SUB_OUT] },
    ];

    const KEY_MODE_BASS = '-bass';

    window.menuUsbSettingController = {
        offlineModeUsbSetting() {
            menuUsbSettingDOM.changeDataInPosition(AUDIO_ROUTING.STANDARD);
            menuUsbSettingDOM.changeDataOutPosition(AUDIO_ROUTING.STANDARD);
            changeActiveDialInputLevel(AUDIO_ROUTING.STANDARD);
            changeActiveDialMainSubMixLevel(POSITION.MAIN_OUT);
        },
        
        usbSettingEvents() {
            $('#usb-setting-audio-routing-select, #usb-setting-bass-audio-routing-select').on('elf-changed', function (e, v) {
                menuUsbSettingDOM.changeDataInPosition(v);
                menuUsbSettingDOM.changeDataOutPosition(v);
                changeActiveDialInputLevel(v);
            });
    
            $('#usb-setting-in-position-select, #usb-setting-bass-in-position-select').on('elf-changed', function (e, v) {
                menuUsbModeController.setSelectedInPos(v);
                changeActiveDialMainSubMixLevel(v);
            });
    
            $('#usb-setting-out-position-select, #usb-setting-bass-out-position-select').on('elf-changed', function (e, v) {
                menuUsbModeController.setSelectedOutPos(v);
            });
        }
    };

    window.

    window.menuUsbSettingMidi = {
        receiveAudio(value) {
            changeActiveDialInputLevel(value);
        },
        receiveInPosition(value) {
            changeActiveDialMainSubMixLevel(value);
            menuUsbModeController.setSelectedInPos(value);
        },
        receiveOutPosition(value) {
            menuUsbModeController.setSelectedOutPos(value);
        }
    };

    let menuUsbModeController = {
        inPos: 7,
        outPos: 7,
        setSelectedInPos(inPos) {
            this.inPos = inPos;
        },
        getSelectedInPos() {
            return this.inPos;
        },
        setSelectedOutPos(outPos) {
            this.outPos = outPos;
        },
        getSelectedOutPos() {
            return this.outPos;
        },
    }

    let menuUsbSettingDOM = {
        changeDataInPosition(typeAudio) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let dataIn = CONFIG_ENABLE_IN.find(x => x.key === typeAudio);
            let listDOM = $(`#usb-setting${mode}-in-position-select-list`);
            listDOM.find('a').toArray().forEach((element, index) => {
                if (dataIn.enable.includes(index)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
            this.triggerInPosition(dataIn.enable, mode);
        },

        changeDataOutPosition(typeAudio) {
            let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
            let dataIn = CONFIG_ENABLE_OUT.find(x => x.key === typeAudio);
            let listDOM = $(`#usb-setting${mode}-out-position-select-list`);
            listDOM.find('a').toArray().forEach((element, index) => {
                if (dataIn.enable.includes(index)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });

            this.triggerOutPosition(dataIn.enable, typeAudio, mode);
        },

        triggerInPosition(dataEnable, mode) {
            let prevSelectedInPos = menuUsbModeController.getSelectedInPos();
            let maxKey = dataEnable[dataEnable.length - 1];
            let minKey = dataEnable[0];
            let index;
            if (dataEnable.includes(prevSelectedInPos)) {
                index = prevSelectedInPos;
            } else if (maxKey < prevSelectedInPos) {
                index = maxKey;
            } else if (maxKey > prevSelectedInPos) {
                index = minKey;
            }
            $(`#usb-setting${mode}-in-position-select`).trigger('elf-change', index);
            $(`#usb-setting${mode}-in-position-select`).trigger('elf-update', index);
        },

        triggerOutPosition(dataEnable, typeAudio, mode) {
            let prevSelectedOutPos = menuUsbModeController.getSelectedOutPos();
            let maxKey = dataEnable[dataEnable.length - 1];
            let minKey = dataEnable[0];
            let index;
            if (dataEnable.includes(prevSelectedOutPos)) {
                index = prevSelectedOutPos;
            } else if (maxKey < prevSelectedOutPos) {
                index = maxKey;
            } else if (maxKey > prevSelectedOutPos) {
                if (typeAudio === AUDIO_ROUTING.RE_SYNTH1 || typeAudio === AUDIO_ROUTING.RE_SYNTH2) {
                    index = POSITION.INST3;
                } else {
                    index = minKey;
                }
            }
            $(`#usb-setting${mode}-out-position-select`).trigger('elf-change', index);
            $(`#usb-setting${mode}-out-position-select`).trigger('elf-update', index);
        },
    };

    function changeActiveDialInputLevel(typeAudio) {
        let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
        let idInput = `usb-setting${mode}-input-level`;
        updateActiveDial(idInput, typeAudio === AUDIO_ROUTING.RE_SYNTH1);
    };

    function changeActiveDialMainSubMixLevel(typeInPos) {
        let mode = APP_MODE === MODE.GUITAR ? '' : KEY_MODE_BASS;
        let idMainMix = `usb-setting${mode}-main-mix-level`;
        let idSubMix = `usb-setting${mode}-sub-mix-level`;
        updateActiveDial(idMainMix, typeInPos === POSITION.MAIN_OUT || typeInPos === POSITION.MAIN_SUB);
        updateActiveDial(idSubMix, typeInPos === POSITION.SUB_OUT || typeInPos === POSITION.MAIN_SUB);
    };

    /** 
     * status active/deactive dial
     * private function
     * @param {string} id 
     * @param {boolean} isActive [true||false]
    */
    function updateActiveDial(id, isActive) {
        $(`#${id}-label, #${id}-dial`).css('display', isActive ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isActive ? '0' : '-1');
    };
})();