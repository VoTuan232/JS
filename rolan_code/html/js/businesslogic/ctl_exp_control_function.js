(function () {
    const NUM_LIST = ['1', '2', '3', '4'];
    const INDEX_STAR = 1;
    const PREFERENCE_START = 0;
    const FUNCTION_LIST = ['num1', 'num2', 'num3', 'num4', 'curnum', 'bankdown', 'bankup', 'ctl1', 'ctl2', 'gk-sw1', 'gk-sw2', 'gk-vol', 'ctl3', 'ctl4', 'ctl5', 'ctl6', 'exp1', 'exp2', 'num1-manual', 'num2-manual', 'num3-manual', 'num4-manual'];

    const IS_DISABLE_MODE = ['OFF', 'BANK DOWN', 'BANK UP', '1', '2', '3', '4', 'PATCH +1', 'PATCH -1',
        'LEVEL +10', 'LEVEL +20', 'LEVEL -10', 'LEVEL -20', 'BPM TAP', 'DLY1 TAP',
        'DLY2 TAP', 'MST DLY TAP', 'FX1 DLY TAP', 'FX2 DLY TAP', 'FX3 DLY TAP',
        'MANUAL', 'MANUAL/TUNER', 'TUNER/MANUAL', '1:SEQ1 TRIG', '1:SEQ2 TRIG',
        '1:SEQ1&2 TRIG', '2:SEQ1 TRIG', '2:SEQ2 TRIG', '2:SEQ1&2 TRIG', '3:SEQ1 TRIG',
        '3:SEQ2 TRIG', '3:SEQ1&2 TRIG', 'ALL:SEQ TRIG', 'SYNC RETRIG', '1:PU SEL UP',
        '2:PU SEL UP', '3:PU SEL UP', '1:PU SEL DOWN', '2:PU SEL DOWN', '3:PU SEL DOWN'];

    const PREFERENCE = {
        PATCH: 'patch',
        SYSTEM: 'system',
    };

    const BANK_KEY = {
        UP: 'up',
        DOWN: 'down',
    };

    const KEY_MODE_BASS = '-bass';

    // global function
    window.ctlControlFunctionController = {
        /** 
         * begin load
         * public function
        */
        ctlExpControlFunction() {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            //======================================
            // adjust function select list contents 
            //======================================
            // NUM1-4
            for (let i = 0; i < NUM_LIST.length; i++) {
                updateCtlFunctionListForNum(NUM_LIST[i], mode, PREFERENCE.PATCH);
                updateCtlFunctionListForNum(NUM_LIST[i], mode, PREFERENCE.SYSTEM);
            }
            // update select list function bank-up, bank-down
            updateCtlFunctionListForBank(BANK_KEY.UP, mode, PREFERENCE.PATCH);
            updateCtlFunctionListForBank(BANK_KEY.UP, mode, PREFERENCE.SYSTEM);
            updateCtlFunctionListForBank(BANK_KEY.DOWN, mode, PREFERENCE.PATCH);
            updateCtlFunctionListForBank(BANK_KEY.DOWN, mode, PREFERENCE.SYSTEM);

            FUNCTION_LIST.forEach(element => {
                if (element === 'num1-manual' || element === 'num2-manual' || element === 'num3-manual' || element === 'num4-manual') {
                    showToggleMode(element, mode, PREFERENCE.PATCH);
                } else if (element !== 'gk-vol' && element !== 'exp1' && element !== 'exp2') {
                    eventShowToggleMode(element, mode, PREFERENCE.PATCH)
                } else {
                    disableToggleMode(element, mode, PREFERENCE.PATCH);
                    disableToggleMode(element, mode, PREFERENCE.SYSTEM);
                }
            });

            // event chane mode show
            // addListenerEventChangedShowMode(mode);
        },

        /** 
         * add event show mode toggle-moment when begin load
         * private function
         * @param {string} mode [''||-bass]
        */
        addListenerEventChangedShowMode() {
            let self = this;
            FUNCTION_LIST.forEach(element => {
                $(`#ctl-exp-${element}-preference-toggle, #ctl-exp-${element}-bass-preference-toggle`).on('elf-changed', (e, v) => {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    self.changePreferenceFunction(v, element, mode);
                });

                if (element !== 'gk-vol' && element !== 'exp1' && element !== 'exp2') {
                    $(`#ctl-function-${element}-patch-function-select-list, 
                        #ctl-function-${element}-bass-patch-function-select-list`).on('elf-changed', (e, v) => {
                        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                        eventShowToggleMode(element, mode, PREFERENCE.PATCH);
                    });

                    $(`#ctl-function-${element}-system-function-select-list, 
                        #ctl-function-${element}-bass-system-function-select-list`).on('elf-changed', (e, v) => {
                        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                        eventShowToggleMode(element, mode, PREFERENCE.SYSTEM);
                    });
                }
            });
        },

        /** 
         * change preference function
         * public function
         * @param {interger} v [map with resoucre.js]
         * @param {interger} element [FUNCTION_LIST]
         * @param {string} mode [''||-bass]
        */
        changePreferenceFunction(v, element, mode) {
            if (v === PREFERENCE_START) {
                $(`#ctl-function-${element}${mode}-patch-page`).show();
                $(`#ctl-function-${element}${mode}-system-page`).hide();
            } else {
                eventShowToggleMode(element, mode, PREFERENCE.SYSTEM);
                $(`#ctl-function-${element}${mode}-patch-page`).hide();
                $(`#ctl-function-${element}${mode}-system-page`).show();
            }
            if (element === 'gk-vol' || element === 'exp1' || element === 'exp2') {
                disableToggleMode(element, mode, PREFERENCE.PATCH);
                disableToggleMode(element, mode, PREFERENCE.SYSTEM);
            }
        }
    };

    /** 
     * update ctl control function: select list with num1-4
     * private function
     * @param {interger} id [NUM_LIST]
     * @param {string} mode [''||-bass]
     * @param {string} preference [patch||system]
    */
    function updateCtlFunctionListForNum(id, mode, preference) {
        let elementId = `ctl-function-num${id}${mode}-${preference}-function-select-list`;
        $(`#${elementId}`).find('p').text(id);
        $('#' + elementId + '-list').find('div').find('a').eq(INDEX_STAR).text(id);
    };

    /** 
     * update ctl control function: select list with bankup-bankdown
     * private function
     * @param {interger} id [NUM_LIST]
     * @param {string} mode [''||-bass]
     * @param {string} preference [patch||system]
    */
    function updateCtlFunctionListForBank(id, mode, preference) {
        let elementId = `ctl-function-bank${id}${mode}-${preference}-function-select-list`;
        if (id === BANK_KEY.UP) {
            $(`#${elementId}`).find('p').text('BANK UP');
            $(`#${elementId}-list`).find('div').find('a').eq(INDEX_STAR).text('BANK UP');
        }

        if (id === BANK_KEY.DOWN) {
            $(`#${elementId}`).find('p').text('BANK DOWN');
            $(`#${elementId}-list`).find('div').find('a').eq(INDEX_STAR).text('BANK DOWN');
        }
    };

    /** 
     * event changed show mode toggle-moment
     * private function
     * @param {string} element [FUNCTION_LIST]
     * @param {string} mode [''||-bass]
     * @param {string} preference [patch||system]
    */
    function eventShowToggleMode(element, mode, preference) {
        let valueFunction = $(`#ctl-function-${element}${mode}-${preference}-function-select-list`).find('p').text();
        if (IS_DISABLE_MODE.indexOf(valueFunction) !== -1) {
            disableToggleMode(element, mode, preference);
        } else {
            showToggleMode(element, mode, preference);
        }
    };

    /** 
     * disable toggle-moment
     * private function
     * @param {string} element [FUNCTION_LIST]
     * @param {string} mode [''||-bass]
     * @param {string} preference [patch||system]
    */
    function disableToggleMode(element, mode, preference) {
        $(`#ctl-function-${element}${mode}-${preference}-mode-toggle`).css({ 'opacity': '0.4', 'pointer-events': 'none' });
    };

    /** 
     * show toggle-moment
     * private function
     * @param {string} element [FUNCTION_LIST]
     * @param {string} mode [''||-bass]
     * @param {string} preference [patch||system]
    */
    function showToggleMode(element, mode, preference) {
        $(`#ctl-function-${element}${mode}-${preference}-mode-toggle`).css({ 'opacity': '1', 'pointer-events': 'auto' });
    };
})();