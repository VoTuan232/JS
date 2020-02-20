/* global
parameter_load
util
chainModelController
*/

(function () {
    const IDS = {
        splash: '#splash',
        connection: '#connection',
        top: '#top',
        loading: '#loading'
    };
    const CROSS_FEED_MSEC = 200;
    const HEADER_BTN = {
        editor: 0,
        librian: 1,
        toneCentral: 2
    };
    
    window.SELECT_PAGE_SYSTEM = 0;
    window.btsDOMController = {
        closeSplashPage: function () {
            $(IDS.connection).fadeIn(CROSS_FEED_MSEC);
            $(IDS.splash).fadeOut(CROSS_FEED_MSEC);
        },
        closeConnectingPage: function () {
            $(IDS.top).fadeIn(CROSS_FEED_MSEC);
            $(IDS.connection).fadeOut(CROSS_FEED_MSEC);
        },
        openLoading: function () {
            popup_open(IDS.loading.slice(1));
        },
        closeLoading: function () {
            popup_close(IDS.loading.slice(1));
        },
        closeWritePopupMenu: function () {
            this._closePopupMenu(function (popupId) {
                return popupId === 'write-select-box-1-box' || popupId === 'write-select-box-2-box';
            });
        },
        closeStompBoxPopupMenu: function () {
            this._closePopupMenu(function (popupId) {
                return popupId.endsWith('stompbox-select-box-box');
            });
        },
        _closePopupMenu: function (matchFunc) {
            var selectPopup = $('.select-popup-wrapper');
            if (selectPopup.length > 0) {
                selectPopup.each(function () {
                    var popupId = $(this).children('div').attr('id');
                    if (matchFunc(popupId)) {
                        popup_close(popupId);
                    }
                });
            }
        },
        disableBtnByTemporaryDT1: function (disabled) {
            $('#ctl-exp-btn-mask').css('display', disabled ? 'block' : 'none');
            if (disabled) {
                $('#write-select-box-1, #write-select-box-2').addClass('disabled');
                $('.stompbox-select-box-style').addClass('disabled');
                $('#inst-trigger, #inst-bass-trigger').addClass('disabled');
                $('#ctl-exp-btn').addClass('disabled');
            } else {
                $('#write-select-box-1, #write-select-box-2').removeClass('disabled');
                $('.stompbox-select-box-style').removeClass('disabled');
                $('#ctl-exp-btn').removeClass('disabled');
                $('#inst-trigger, #inst-bass-trigger').removeClass('disabled');
            }
        }
    };

    window.customizeUIParts = function () {
        // Dialに影画像を追加
        let dialClassSelector = [
            '.item-dial-style',
            '.bts-dial-2ctrl-style',
            '.bts-dial-dialog-style'
        ].join(',');
        $(dialClassSelector).append($('<div>').addClass('item-dial-style__shadow-overlap'));
    };

    window.initializeOtherDOM = function () {
        $('#write-select-box-1, #write-select-box-2').addClass('disabled');
        $('.stompbox-select-box-style').addClass('disabled');
        $('#inst-trigger, #inst-bass-trigger').addClass('disabled');
        $('#ctl-exp-btn-mask').css('display', 'none');
        $('#ctl-exp-btn').removeClass('disabled');
    };

    /**
     * Send Editor Page Command.
     */
    function sendEditorPageCommand(value) {
        if (ProductSetting.communicationLevel >= COM_LEV_04H) {
            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_PAGE), hex2(value));
        }
    }

    window.assignOtherEvents = function () {
        $('#header-group-btn').on('elf-changed', function (e, v) {
            HEADER_TAB = v;
            switch (v) {
                // Show editor btn header
                case HEADER_BTN.editor: {
                    $('#tone-central').hide();
                    $('#sub').show();
                    $('#librarian').hide();
                    $('#editor').show();
                    $('#write-select-box-1, #write-select-box-2').removeClass('invalid'); // Writeボタンの無効化
                    sendEditorPageCommand(HEADER_BTN.editor);
                    break;
                }
                // Show librian btn header
                case HEADER_BTN.librian: {
                    $('#tone-central').hide();
                    $('#sub').show();
                    $('#editor').hide();
                    $('#librarian').show();
                    $('#write-select-box-1, #write-select-box-2').addClass('invalid'); // Writeボタンの無効化
                    sendEditorPageCommand(HEADER_BTN.librian);
                    break;
                }
                // Show tone central btn header
                case HEADER_BTN.toneCentral: {
                    $('#sub').hide();
                    $('#tone-central').show();
                    $('#write-select-box-1, #write-select-box-2').addClass('invalid'); // Writeボタンの無効化
                    sendEditorPageCommand(HEADER_BTN.toneCentral);
                    break;
                }
            }
        });
        $('#top-header-tuner-btn').on(pointer.click, function (e, v) {
            popup_open('tuner');
        });
        $('#top-header-tuner-bass-btn').on(pointer.click, function (e, v) {
            popup_open('tuner-bass');
        });
        $('#top-header-menu-btn').on(pointer.click, function (e, v) {
            sendEditorPageCommand(0);
            popup_open('menu');

            if (SELECT_PAGE_SYSTEM === SYSTEM.INPUT_SETTING) {
                menuInputSettingMidi.showGKandNormal();
            }
        });
        $('#top-header-menu-bass-btn').on(pointer.click, function (e, v) {
            sendEditorPageCommand(0);
            popup_open('menu-bass');

            if (SELECT_PAGE_SYSTEM === SYSTEM.INPUT_SETTING) {
                menuInputSettingMidi.showGKandNormal();
            }
        });
        $('#old-version-of-bts-dialog-download-btn').on(pointer.click, function (e, v) {
            menuPageModelController.openDriverDownloadPage();
        });
        $('#device-not-found-dialog-driver-download-btn').on(pointer.click, function (e, v) {
            menuPageModelController.openDriverDownloadPage();
        });
    }
})();
