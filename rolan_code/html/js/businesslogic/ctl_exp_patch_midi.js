(function () {
    const PATCH_MIDI_OFF = 0;

    const MIDI = ['midi1', 'midi2', 'midi3', 'midi4'];
    const KEY_MODE_BASS = '-bass';
    // global function
    window.ctlExpPatchToMidiController = {
        /** 
         * begin load
         * public function
        */
        ctlExpPatchToMidi(valuePC, valueMsb, element, mode) {
            changeStatusDialMsbAndLsb(valuePC, element, mode);
            if (valuePC !== PATCH_MIDI_OFF) {
                updateDialStatus(`patch-${element}${mode}-setting-bank_lsb`, valueMsb === PATCH_MIDI_OFF);
            }
        },

        eventPatchToMidi() {
            MIDI.forEach((element) => {
                $(`#patch-${element}-setting-midi_pc_sharp-dial, #patch-${element}-bass-setting-midi_pc_sharp-dial`).on('elf-change', function (e, v) {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    changeStatusDialMsbAndLsb(v, element, mode);
                });

                $(`#patch-${element}-setting-bank_msb-dial, #patch-${element}-bass-setting-bank_msb-dial`).on('elf-change', function (e, v) {
                    let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                    updateDialStatus(`patch-${element}${mode}-setting-bank_lsb`, v === PATCH_MIDI_OFF);
                });
            });
        }
    };

    /** 
     * status dial bank msb-lsb
     * private function
     * @param {integer} value 
     * @param {string} element [MIDI]
     * @param {string} mode [''||-bass]
    */
    function changeStatusDialMsbAndLsb(value, element, mode) {
        if (value === PATCH_MIDI_OFF) {
            updateDialStatus(`patch-${element}${mode}-setting-bank_msb`, true);
            updateDialStatus(`patch-${element}${mode}-setting-bank_lsb`, true);
        } else {
            updateDialStatus(`patch-${element}${mode}-setting-bank_msb`, false);
            if (parseInt($(`#patch-${element}${mode}-setting-bank_msb-dial`).text()) !== PATCH_MIDI_OFF) {
                updateDialStatus(`patch-${element}${mode}-setting-bank_lsb`, false);
            }
        }
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
})();