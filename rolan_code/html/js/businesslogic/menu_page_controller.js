/*
menuPageModelController
*/

(function () {
    const REVISION = 'e9b6276'; // TODO 開発用(最後に取り除く)
    const MENU_IDS = {
        bankExtentMin: '#bank-extent-min',
        bankExtentMinList: '#bank-extent-min-list',
        bankExtentMax: '#bank-extent-max',
        bankExtentMaxList: '#bank-extent-max-list',
        versionLicenseLink: '.version-license-link',
        stompboxSettingRestoreBtn: '#stompbox-setting-restore-from-file-btn',
        stompboxSettingRestoreBtnBass: '#stompbox-setting-bass-restore-from-file-btn',
        stompboxSettingBackupBtn: '#stompbox-setting-backup-to-file-btn',
        stompboxSettingBackupBtnBass: '#stompbox-setting-bass-backup-to-file-btn',
        ownersManualBtn: '#owners-manual-btn',
        ownersManualBtnBass: '#owners-manual-bass-btn',
        systemDataBackupBtn: '#system-data-backup-backup-btn',
        systemDataBackupBtnBass: '#system-data-backup-bass-backup-btn',
        systemDataRestoreBtn: '#system-data-backup-restore-btn',
        systemDataRestoreBtnBass: '#system-data-backup-bass-restore-btn',
        menuPageSelect: '#menu-page-select',
        menuPageSelectBass: '#menu-bass-page-select',
        menuVersion: '#app-version',
        menuVersionBass: '#app-version-bass',
    };

    window.menuPageModelController = {
        openManualPage: function () {
            var lang = (navigator.userLanguage || navigator.language).substr(0, 2);
            if (lang !== 'ja') { lang = 'en'; }
            if (ProductSetting.manual[lang] === '') {
                processingController.start(function (index) {
                    var hasCanceled = false;
                    urlDefinition.fetchUrlDefinition(function () {
                        if (hasCanceled) {
                            return;
                        }
                        processingController.finish(index);
                        window.readme();
                    });
                    return function () {
                        hasCanceled = true;
                    };
                });
            } else {
                window.readme();
            }
        },

        openDriverDownloadPage: function () {
            var lang = (navigator.userLanguage || navigator.language).substr(0, 2);
            function getURL() {
                if (lang === 'ja') {
                    return urlDefinition.UPDATES_DRIVERS_JA;
                } else {
                    return urlDefinition.UPDATES_DRIVERS_EN;
                }
            }
            if (getURL() === '') {
                processingController.start(function (index) {
                    var hasCanceled = false;
                    urlDefinition.fetchUrlDefinition(function () {
                        if (hasCanceled) {
                            return;
                        }
                        processingController.finish(index);
                        $native.fs.exec(getURL());
                    });
                    return function () {
                        hasCanceled = true;
                    };
                });
            } else {
                $native.fs.exec(getURL());
            }
        },

        getRevision: function () {
            return REVISION;
        },
    };

    window.initializeMenuPage = function () {
        $('#app-version, #app-version-bass').text('Ver.' + ProductSetting.version);
        $('#app-build, #app-build-bass').text('Build: ' + ProductSetting.build);
        $('#dev-revision').text(menuPageModelController.getRevision()); // TODO 開発用(最後に取り除く)
    };

    window.assignMenuPageEvents = function () {
        $(MENU_IDS.bankExtentMin).on('elf-changed', function (e, v, updateOnly) {
            if (updateOnly) {
                return;
            }
            let max;
            $(MENU_IDS.bankExtentMaxList).find('div').find('a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    max = index;
                }
            });
            if (max === undefined) {
                return;
            }
            MIDIController.dt1(nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN), hex2(v));
            MIDIController.dt1(nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MAX), hex2(max < v ? v : max));
            if (max < v) {
                $(MENU_IDS.bankExtentMax).trigger('elf-update', v);
            }
        });

        $(MENU_IDS.bankExtentMax).on('elf-changed', function (e, v, updateOnly) {
            if (updateOnly) {
                return;
            }
            let min;
            $(MENU_IDS.bankExtentMinList).find('div').find('a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    min = index;
                }
            });
            if (min === undefined) {
                return;
            }
            MIDIController.dt1(nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN), hex2(min > v ? v : min));
            MIDIController.dt1(nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MAX), hex2(v));
            if (min > v) {
                $(MENU_IDS.bankExtentMin).trigger('elf-update', v);
            }
        });

        $(MENU_IDS.versionLicenseLink).on(pointer.click, function (e) {
            e.preventDefault();
            let url = $(this).attr('href');
            if (url !== undefined) {
                $native.fs.exec(url);
            }
        });

        $(`${MENU_IDS.stompboxSettingRestoreBtn}, ${MENU_IDS.stompboxSettingRestoreBtnBass}`).on(pointer.click, function (e) {
            e.preventDefault();
            stompBoxSettingController.restoreFromFile();
        });

        $(`${MENU_IDS.stompboxSettingBackupBtn}, ${MENU_IDS.stompboxSettingBackupBtnBass}`).on(pointer.click, function (e) {
            e.preventDefault();
            stompBoxSettingController.backupToFile();
        });

        $(`${MENU_IDS.ownersManualBtn}, ${MENU_IDS.ownersManualBtnBass}`).on(pointer.click, function (e) {
            e.preventDefault();
            menuPageModelController.openManualPage();
        });

        $(`${MENU_IDS.systemDataBackupBtn}, ${MENU_IDS.systemDataBackupBtnBass}`).on(pointer.click, function (e) {
            e.preventDefault();
            systemDataSettingController.backupToFile();
        });

        $(`${MENU_IDS.systemDataRestoreBtn}, ${MENU_IDS.systemDataRestoreBtnBass}`).on(pointer.click, function (e) {
            e.preventDefault();
            systemDataSettingController.restoreFromFile();
        });


        $(`${MENU_IDS.menuPageSelect}, ${MENU_IDS.menuPageSelectBass}`).on('elf-changed', function (e, v, updateOnly) {
            if (v === SYSTEM.PAGE_DEVICE) {
                midiDOMController.updateMenuPageSelector();
            }

            if (SELECT_PAGE_SYSTEM === v) {
                return;
            }
            SELECT_PAGE_SYSTEM = v;

            if (updateOnly) {
                return;
            }

            if (v === SYSTEM.INPUT_SETTING) {
                menuInputSettingMidi.showGKandNormal();
            } else {
                runningModeModelController.setCurrentRunningMode(ADDRESS_CONST.RUNNING_MODE.PLAY);
                runningModeMIDIController.updateRunningMode(ADDRESS_CONST.RUNNING_MODE.PLAY);
            }

        });

        $(`${MENU_IDS.menuVersion}, ${MENU_IDS.menuVersionBass}`).on(pointer.click, function (e) { // MEMO_switch DEV/RELEASE
            if (e.ctrlKey) {
                e.preventDefault();
                var v = ProductSetting.releaseMode;
                ProductSetting.releaseMode = (v == 1 ? 0 : 1);
                appVersionUpdateLabel();
                urlDefinition.fetchUrlDefinition(function() {
                });
            }
        });

    };
    // Function use update display app version label
    window.appVersionUpdateLabel = function () {
        if (ProductSetting.releaseMode) {
            $('#sy-1000-version, #sy-1000-version-bass').text('');
            return;
        }
        if (window.offLineModeFlg) {
            $('#sy-1000-version, #sy-1000-version-bass').text('DEV:OFFLINE MODE');
            return;
        }
        let appVersion = null;
        switch (ProductSetting.communicationLevel) {
            case 1:
                appVersion = '(DEV:SY-1000 Ver.1.00-)';
                break;
            default:
                appVersion = '(DEV:SY-1000 Ver.1.00-)';
                break;
        }
        $('#sy-1000-version, #sy-1000-version-bass').text(appVersion);
    };
})();
