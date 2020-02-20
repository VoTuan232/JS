(function () {
    const MIDI_MODE = {
        MONO: 0,
        POLY: 1,
    };

    const DIAL_STR = ['str5-bank-msb', 'str4-bank-msb', 'str3-bank-msb', 'str2-bank-msb', 'str1-bank-msb',
        'str5-bank-lsb', 'str4-bank-lsb', 'str3-bank-lsb', 'str2-bank-lsb', 'str1-bank-lsb',
        'str6-pc', 'str5-pc', 'str4-pc', 'str3-pc', 'str2-pc', 'str1-pc'];

    const KEY_MODE = {
        GUITAR: 'guitar',
        BASS: 'bass',
    }

    // global function
    window.ctlExpGuitarBassMidiController = {
        /** 
         * begin load
         * public function
        */
        ctlExpGuitarBass() {
            // switch MONO - POLY
            let self = this;
            $(`#ctl-guitar-to-midi-mode-toggle, #ctl-bass-to-midi-mode-toggle`).on('elf-changed', (e, v) => {
                let mode = APP_MODE === MODE.GUITAR ? KEY_MODE.GUITAR: KEY_MODE.BASS;
                self.checkStatusDial(v, mode);
            });
        },

        checkStatusDial(value, mode) {
            changeStatusDialBank(value === MIDI_MODE.MONO, mode);
            changeStatusDial(value !== MIDI_MODE.MONO, mode);
            changeStatusPcSelectList(value === MIDI_MODE.MONO, mode);
        }
    };

    /** 
     * change status dial DIAL_STR
     * private function
     * @param {boolean} isDisable [true||false]
     * @param {string} mode [guitar||bass]
    */
    function changeStatusDial(isDisable, mode) {
        DIAL_STR.forEach((element) => {
            updateDialStatus(`ctl-${mode}-to-midi-${element}`, isDisable);
        });
    };

    /** 
     * change status select list pc
     * private function
     * @param {boolean} isDisable [true||false]
     * @param {string} mode [guitar||bass]
    */
    function changeStatusPcSelectList(isDisable, mode) {
        if (isDisable) {
            $(`#ctl-${mode}-to-midi-pc-select-list`).addClass('disabled');
        } else {
            $(`#ctl-${mode}-to-midi-pc-select-list`).removeClass('disabled');
        }
        $(`#ctl-${mode}-to-midi-pc-select-list`).attr('tabindex', isDisable ? '-1' : '0');
        $(`#ctl-${mode}-to-midi-pc-label`).css('opacity', isDisable ? '0.5' : '1');
        $(`#ctl-${mode}-to-midi-pc-select-list`).find('p').css('opacity', isDisable ? '0.5' : '1');
    }

    /** 
     * change status dial banklsb, msb
     * private function
     * @param {boolean} isActive [true||false]
     * @param {string} mode [guitar||bass]
    */
    function changeStatusDialBank(isActive, mode) {
        updateActiveDial(`ctl-${mode}-to-midi-bank-lsb`, !isActive);
        updateActiveDial(`ctl-${mode}-to-midi-bank-msb`, !isActive);
        updateActiveDial(`ctl-${mode}-to-midi-str6-bank-msb`, isActive);
        updateActiveDial(`ctl-${mode}-to-midi-str6-bank-lsb`, isActive);
    };

    /** 
     * status disable/enable dial
     * private function
     * @param {string} id 
     * @param {boolean} isDisable [true||false]
    */
    function updateDialStatus(id, isDisable) {
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('opacity', isDisable ? '0.4' : '1');
        $(`#${id}-mask`).css('display', isDisable ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isDisable ? '-1' : '0');
    };

    /** 
     * status active/deactive dial
     * private function
     * @param {string} id 
     * @param {boolean} isActive [true||false]
    */
    function updateActiveDial(id, isActive) {
        $(`#${id}-mask`).css('display', 'none');
        $(`#${id}-stringer, #${id}-label, #${id}-dial`).css('display', isActive ? '' : 'none');
        $(`#${id}-dial`).attr('tabindex', isActive ? '0' : '-1');
    };

})();