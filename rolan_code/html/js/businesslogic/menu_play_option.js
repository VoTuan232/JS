(function () {
    const KEY_MODE_BASS = '-bass';

    window.menuPlayOptionController = {
        minMaxBankEvent() {
            $('#menu-play-option-extent-min-select, #menu-play-option-bass-extent-min-select').on('elf-changed', function (e, v, updateOnly) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                if (updateOnly) {
                    return;
                }
                let max;
                $(`#menu-play-option${typeMode}-extent-max-select-list`).find('div').find('a').each(function (index, elm) {
                    if ($(elm).attr('checked') === 'checked') {
                        max = index;
                    }
                });
                if (max === undefined) {
                    return;
                }
                sendMessageMinBank(v, max);
                if (max < v) {
                    $(`#menu-play-option${typeMode}-extent-max-select`).trigger('elf-update', v);
                }
            });

            $('#menu-play-option-extent-max-select, #menu-play-option-bass-extent-max-select').on('elf-changed', function (e, v, updateOnly) {
                let typeMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                if (updateOnly) {
                    return;
                }
                let min;
                $(`#menu-play-option${typeMode}-extent-min-select-list`).find('div').find('a'
                ).each(function (index, elm) {
                    if ($(elm).attr('checked') === 'checked') {
                        min = index;
                    }
                });
                if (min === undefined) {
                    return;
                }
                sendMessageMaxBank(v, min);
                if (min > v) {
                    $(`#menu-play-option${typeMode}-extent-min-select`).trigger('elf-update', v);
                }
            });
        }
    };

    function sendMessageMinBank(v, max) {
        let addr = (APP_MODE === MODE.GUITAR) ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR + ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS + ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN;
        MIDIController.dt1(nibble(addr), hex2(v) + hex2(max < v ? v : max))
    };

    function sendMessageMaxBank(v, min) {
        let addr = (APP_MODE === MODE.GUITAR) ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR + ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS + ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN;
        MIDIController.dt1(nibble(addr), hex2(min > v ? v : min) + hex2(v))
    }
})();