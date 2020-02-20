(function () {
    const KEY_MODE_BASS = '-bass';

    const DIVIDER = {
        SINGLE: 0,
        DUAL: 1
    };

    const DIVIDER_TYPE_SINGLE = 'SINGLE';

    const SINGLE = {
        singleA: 0,
        singleB: 1,
    };

    window.editorDividerMixerController = {
        eventDividerSelectListMode () {
            updateDialStatus(`mixer-ab-balance`, true);
            updateDialStatus(`mixer-bass-ab-balance`, true);
            $('#divider-type, #divider-bass-type').on('elf-changed', function (e, v) {
                let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                updateDialStatus(`divider${mode}-ch-select`, v !== DIVIDER.SINGLE);
                updateDialStatus(`mixer${mode}-ab-balance`, v === DIVIDER.SINGLE);
                updateModeChainDivMix(v, mode);
            });
            updateDialStatus(`divider-ch-select`, false);
            updateDialStatus(`divider-bass-ch-select`, false);
            $('#divider-ch-select-dial, #divider-bass-ch-select-dial').on('elf-changed', function (e, v) {
                chainModelController.updateMode(CHAIN_BLOCK_ID_MAP.divider, v === SINGLE.singleA ? DIVIDER_MODE_ENUM.singleA : DIVIDER_MODE_ENUM.singleB);
            });
        },
        
        changeSingleDiv() {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            if ($(`#divider${mode}-type`).find('p').text() === DIVIDER_TYPE_SINGLE) {
                let single = parseInt($(`#divider${mode}-ch-select-dial`).find('p').text());
                let val = single === SINGLE.singleA ? SINGLE.singleB : SINGLE.singleA;
                $(`#divider${mode}-ch-select-dial`).trigger('elf-change', val);
                $(`#divider${mode}-ch-select-dial`).trigger('elf-update', val);
            }
        },

        updateModeChainDivMixAfterWrite() {
            let mode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
            let item = _items[`divider${mode}-type`];
            let data = Parameter.value(item.pid, item.size, item.vofs);
            updateModeChainDivMix(data, mode);
        }
    };

    function updateModeChainDivMix(v, mode) {
        if (v === DIVIDER.SINGLE) {
            let single = parseInt($(`#divider${mode}-ch-select-dial`).find('p').text());
            chainModelController.updateMode(CHAIN_BLOCK_ID_MAP.divider, single === SINGLE.singleA ? DIVIDER_MODE_ENUM.singleA : DIVIDER_MODE_ENUM.singleB);
        } else {
            chainModelController.updateMode(CHAIN_BLOCK_ID_MAP.divider, DIVIDER_MODE_ENUM.dual);
        }
    }

    // common
    function updateDialStatus(id, disabled) {
        $('#' + id + '-dial').attr('disabled', disabled ? true : false);
        $('#' + id + '-dial').attr('tabindex', disabled ? '-1' : '0');
        $('#' + id + '-label').css('color', disabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)');
        $('#' + id + '-mask').css('display', disabled ? '' : 'none');
    };
})();
