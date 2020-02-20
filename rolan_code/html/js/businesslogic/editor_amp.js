(function () {
    const KEY_MODE_BASS = '-bass';
    const OFF = 0;
    // Value map with resource-id : 135
    const LIST_TYPE_SELECT = [1, 2, 6, 9, 10, 12, 20, 22, 24, 26];

    window.initControllerEditorAmp = function () {
        disabledSpType(false);
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        updateDialStatus(`aird-preamp${typeMode}-brights`, false);
    };

    function getListDial() {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        return [`aird-preamp${typeMode}-mic-position`, `aird-preamp${typeMode}-mic-level`, `aird-preamp${typeMode}-direct-level`];
    }

    // Handle disable element of Sp type
    function disabledSpType(isDisable) {
        let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        let listDial = getListDial();
        listDial.forEach(element => {
            updateDialStatus(element, isDisable);
        });
        updateDialStatus(`aird-preamp${typeMode}-mic-distance-select-list`, isDisable);
    };

    // Handle Amp type
    window.eventAmpController = function() {
        $(`#apm-type, #apm-bass-type`).on('elf-change', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            for (const element of LIST_TYPE_SELECT) {
                if (v === element) {
                    updateDialStatus(`aird-preamp${typeMode}-brights`, false);
                    break;
                } else {
                    updateDialStatus(`aird-preamp${typeMode}-brights`, true);
                }
            }
        });

        $('#aird-preamp-sp-type-select-list, #aird-preamp-bass-sp-type-select-list').on('elf-change', function (e, v) {
            disabledSpType(v === OFF);
        });
    };

    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };
})();