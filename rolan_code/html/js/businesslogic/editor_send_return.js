(function () {
    const KEY_MODE_BASS = '-bass';

    const SELECT_LIST_MODE = {
        normal: 0,
        mix: 1,
        out: 2
    }
    // init default page
    window.initControllerEditorSendReturn = function () {
        updateDialStatus(`send-return-return-level`, false);
        updateDialStatus(`send-return-adjust`, false);
        updateDialStatus(`send-return-bass-return-level`, false);
        updateDialStatus(`send-return-bass-adjust`, false);
        eventSendReturn();
    }

    function eventSendReturn() {
        $('#send-return-mode-select, #send-return-bass-mode-select').on('elf-change', function (e, v) {
            let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            updateDialStatus(`send-return${typeMode}-return-level`, !(v === SELECT_LIST_MODE.mix || v === SELECT_LIST_MODE.normal));
            updateDialStatus(`send-return${typeMode}-adjust`, !(v === SELECT_LIST_MODE.mix || v === SELECT_LIST_MODE.normal));
        });
    }

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };
})();
