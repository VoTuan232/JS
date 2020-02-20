(function () {
    const KEY_MODE_BASS = '-bass';
    const SPRING = 5;

    window.initControllerEditorReverb = function () {
        updateDialStatus(`reverb-spring-sens`, true);
        updateDialStatus(`reverb-bass-spring-sens`, true);
        eventReverbType();
    };

    // Handle reverb type 
    function eventReverbType() {
        // Value map with resource-id : 179
        $('#reverb-type-select, #reverb-bass-type-select').on('elf-change', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            updateDialStatus(`reverb${typeMode}-spring-sens`, v !== SPRING);
        });
    };

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };
})();