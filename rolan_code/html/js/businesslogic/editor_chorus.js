(function () {

    const LIST_DIAL_DISABLE_DUAL = ['rate-2', 'depth-2', 'pre-delay-2', 'effect-level-2', 'low-cut-2', 'high-cut-2',
        'rate-1', 'depth-1', 'pre-delay-1', 'effect-level-1', 'low-cut-1', 'high-cut-1', 'wave-form-1', 'wave-form-2', 'output-mode'
    ];

    const LIST_DIAL_DISABLE_DIF_DUAL = ['rate', 'depth', 'pre-delay', 'effect-level', 'low-cut', 'high-cut', 'wave-form'];

    const KEY_MODE_BASS = '-bass';

    const DUAL = 3;

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? false : true);
        $('#' + id + '-dial').attr('tabindex', disabled ? '0' : '-1');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)');
        $('#' + id + '-mask').css('display', disabled ? 'none' : '');
    };

    window.editorChorusController = function () {
        updateDialEqualDual(false);
        updateDialDifDual(true);
        updateSelectListStatus(false);
    };

    window.eventChorus = function() {
        $('#chorus-mode-select-list, #chorus-bass-mode-select-list').on('elf-change', function (e, v) {
            updateDialEqualDual(v === DUAL);
            updateDialDifDual(v !== DUAL);
            updateSelectListStatus(v === DUAL);
        });
    };

    function updateSelectListStatus(disabled) {
        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        updateDialStatus(`chorus${mode}-waveform-1-select-list`, !disabled);
        updateDialStatus(`chorus${mode}-output-mode-select-list`, !disabled);
        updateDialStatus(`chorus${mode}-waveform-select-list`, disabled);
    };

    // Update dial-mask type different DUAL
    function updateDialEqualDual(disabled) {
        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        updateDialStatus(`chorus${mode}-rate-1`, disabled);
        updateDialStatus(`chorus${mode}-rate-2`, disabled);
        updateDialStatus(`chorus${mode}-low-cut-1`, disabled);

        LIST_DIAL_DISABLE_DUAL.forEach(element => {
            updateDialStatus(`chorus${mode}-${element}`, disabled);
        });
    };

    // Update dial-mask type different DUAL
    function updateDialDifDual(disabled) {
        let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
        updateDialStatus(`chorus${mode}-rate`, disabled);
        LIST_DIAL_DISABLE_DIF_DUAL.forEach(element => {
            updateDialStatus(`chorus${mode}-${element}`, disabled);
        });
    };
})();
