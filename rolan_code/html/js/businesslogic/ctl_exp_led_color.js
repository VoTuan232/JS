(function () {

    const PREFERENCE = {
        PATCH_KEY: 0,
        SYSTEM_KEY: 1,
        PATCH: 'patch',
        SYSTEM: 'system',
    }

    const INDEX_LED_COLOR = 8;

    const KEY_MODE_BASS = '-bass';

    const FUNCTION_LIST = ['num1', 'num2', 'num3', 'num4', 'bankdown', 'bankup', 'ctl1', 'ctl2', 'curnum'];

    // global function
    window.ctlExpLedColorController = {
        /** 
         * begin load
         * public function
        */
        ctlExpLedColor() {
            FUNCTION_LIST.forEach(element => {
                $(`#ctl-led-color-${element}-off-patch-select-list, #ctl-led-color-bass-${element}-off-patch-select-list, #ctl-led-color-${element}-off-system-select-list, #ctl-led-color-bass-${element}-off-system-select-list`).addClass('disabled');
            });
            // disable function off
            $(`#ctl-led-color .elf-select-list-control:even, #ctl-led-color-bass .elf-select-list-control:even`).append($('<div>').addClass('hyphen').text('---'));
        },

        eventCtlExpColor() {
            let self = this;
            FUNCTION_LIST.forEach(element => {
                $(`#ctl-led-color-${element}-preference-toggle, #ctl-led-color-bass-${element}-preference-toggle`).on('elf-changed', (e, v) => {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    self.changePreferenceFunction(v, element, mode);
                });

                $(`#ctl-led-color-${element}-on-patch-select-list, #ctl-led-color-bass-${element}-on-patch-select-list`).on('elf-changed', function (e, v) {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    changeStatusLedColor(v, element, PREFERENCE.PATCH, mode);
                });

                $(`#ctl-led-color-${element}-on-system-select-list, #ctl-led-color-bass-${element}-on-system-select-list`).on('elf-changed', function (e, v) {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    changeStatusLedColor(v, element, PREFERENCE.SYSTEM, mode);
                });
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
            if (v === PREFERENCE.PATCH_KEY) {
                $(`#ctl-led-color${mode}-${element}-patch-page`).show();
                $(`#ctl-led-color${mode}-${element}-system-page`).hide();
            } else {
                $(`#ctl-led-color${mode}-${element}-patch-page`).hide();
                $(`#ctl-led-color${mode}-${element}-system-page`).show();
            }
        }
    };

    /** 
     * change status led color
     * private function
     * @param {interger} v 
     * @param {string} element [FUNCTION_LIST]
     * @param {string} preference [patch||system]
     * @param {string} mode [''||-bass]
    */
    function changeStatusLedColor(v, element, preference, mode) {
        let selectList = $(`#ctl-led-color${mode}-${element}-off-${preference}-select-list`);
        if (v >= INDEX_LED_COLOR) {
            selectList.addClass('disabled');
            selectList.find('.hyphen').show();
            $(`#ctl-led-color${mode}-${element}-off-${preference}-label`).addClass('disabled');
        } else {
            selectList.removeClass('disabled');
            let selectedColor = selectList.find('a[checked="checked"]').text();
            selectList.children('p').text(selectedColor);
            selectList.find('.hyphen').hide();
            $(`#ctl-led-color${mode}-${element}-off-${preference}-label`).removeClass('disabled');
        }
    };
})();