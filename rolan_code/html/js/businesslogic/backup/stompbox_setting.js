/** 
 * VARIATION(STOMPBOX) DATA BACKUP
*/

let stompBoxSettingController = (function () {
    // Observers
    let observer = {
        forBackupToFile: {
            fileName: '',
            notify: function (msg, arg) {
                if (msg !== 'stompbox_read') {
                    return;
                }
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        if (this.fileName !== '' && this.fileName !== undefined) {
                            let stompBoxData = new StompBoxModel();
                            try {
                                $native.fs.writeString(this.fileName, stompBoxData.toJSON());
                                PROGRESS_DIALOG_MAP.export.close(function () {
                                    COMPLETE_DIALOG_MAP.export.open();
                                });
                            } catch (e) {
                                PROGRESS_DIALOG_MAP.export.close(function () {
                                    ERROR_DIALOG_MAP.fileError.open();
                                });
                            }
                        }
                    } else {
                        let self = this;
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.export.close();
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        ERROR_DIALOG_MAP.communicationError.open(
                            function () { // CANCEL
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                            },
                            function () { // RETRY
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                                PROGRESS_DIALOG_MAP.export.init();
                                // openするときにcancell時の処理を登録しておく
                                PROGRESS_DIALOG_MAP.export.open(function () {
                                    // cancelメソッドの実行とobserverの破棄
                                    stompBoxSettingController.stompBox.cancel();
                                    stompBoxSettingController.stompBox.removeObserver(self);
                                });
                                stompBoxSettingController.stompBox.addObserver(self);
                                stompBoxSettingController.stompBox.read();
                            }
                        );
                    }
                } else {
                    PROGRESS_DIALOG_MAP.export.update(arg);
                }
            }
        },
        forBackupToCloud: {
            notify: function (msg, arg) {
                if (msg !== 'stompbox_read') {
                    return;
                }
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.export.close(function () {
                            fileManager.exportCloud(
                                function (name) {
                                    var stompBoxData = new StompBoxModel();
                                    $native.fs.writeString(name, stompBoxData.toJSON());
                                },
                                function () { },
                                ProductSetting.name,
                                stompBoxSettingController.extension
                            );
                        });
                    } else {
                        let self = this;
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.export.close();
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        ERROR_DIALOG_MAP.communicationError.open(
                            function () { // CANCEL
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                            },
                            function () { // RETRY
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                                PROGRESS_DIALOG_MAP.export.init();
                                // openするときにcancell時の処理を登録しておく
                                PROGRESS_DIALOG_MAP.export.open(function () {
                                    // cancelメソッドの実行とobserverの破棄
                                    stompBoxSettingController.stompBox.cancel();
                                    stompBoxSettingController.stompBox.removeObserver(self);
                                });
                                stompBoxSettingController.stompBox.addObserver(self);
                                stompBoxSettingController.stompBox.read();
                            }
                        );
                    }
                } else {
                    PROGRESS_DIALOG_MAP.export.update(arg);
                }
            }
        },
        forRestore: {
            notify: function (msg, arg) {
                if (msg !== 'stompbox_write') {
                    return;
                }
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.import.close(function () {
                            COMPLETE_DIALOG_MAP.import.open();
                        });
                    } else {
                        let self = this;
                        stompBoxSettingController.stompBox.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.import.close();
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        ERROR_DIALOG_MAP.communicationError.open(
                            function () { // CANCEL
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                            },
                            function () { // RETRY
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                                stompBoxSettingController.stompBox.init();
                                // openするときにcancell時の処理を登録しておく
                                PROGRESS_DIALOG_MAP.import.open(function () {
                                    // cancelメソッドの実行とobserverの破棄
                                    stompBoxSettingController.stompBox.cancel();
                                    stompBoxSettingController.stompBox.removeObserver(self);
                                });
                                stompBoxSettingController.stompBox.addObserver(self);
                                stompBoxSettingController.stompBox.write();
                            }
                        );
                    }
                } else {
                    PROGRESS_DIALOG_MAP.import.update(arg);
                }
            }
        }
    };
    let obj = {
        stompBox: new StompBox(),
        extension: 'vrb',
        formatRev: window.librarianFormatRev,
        // Methods
        backupToFile: function () {
            let self = this;
            fileManager.exportFile(
                function (name) {
                    PROGRESS_DIALOG_MAP.export.init();
                    // openするときにcancell時の処理を登録しておく
                    PROGRESS_DIALOG_MAP.export.open(function () {
                        // cancelメソッドの実行とobserverの破棄
                        self.stompBox.cancel();
                        self.stompBox.removeObserver(observer.forBackupToFile);
                    });
                    observer.forBackupToFile.fileName = name;
                    self.stompBox.addObserver(observer.forBackupToFile);
                    self.stompBox.read();
                },
                function () { 
                    PROGRESS_DIALOG_MAP.export.close();
                },
                `${ProductSetting.name}_${APP_MODE === MODE.GUITAR ? 'G' : 'B'}`,
                this.extension
            );
        },
        backupToCloud: function () {
            let self = this;
            PROGRESS_DIALOG_MAP.export.init();
            // openするときにcancell時の処理を登録しておく
            PROGRESS_DIALOG_MAP.export.open(function () {
                // cancelメソッドの実行とobserverの破棄
                self.stompBox.cancel();
                self.stompBox.removeObserver(observer.forBackupToCloud);
            });
            this.stompBox.addObserver(observer.forBackupToCloud);
            this.stompBox.read();
        },
        restoreFromFile: function () {
            let self = this;
            fileManager.importFile(
                function (backupData) {
                    let model = new StompBoxModel();
                    model.load(backupData);
                    PROGRESS_DIALOG_MAP.import.init();
                    // openするときにcancell時の処理を登録しておく
                    PROGRESS_DIALOG_MAP.import.open(function () {
                        // cancelメソッドの実行とobserverの破棄
                        self.stompBox.cancel();
                        self.stompBox.removeObserver(observer.forRestore);
                    });
                    self.stompBox.addObserver(observer.forRestore);
                    self.stompBox.write();
                },
                function () { 
                    PROGRESS_DIALOG_MAP.import.close();
                },
                this.extension
            );
        },
        restoreFromCloud: function () {
            let self = this;
            let filter = {
                uti: ['jp.co.roland.boss-gt-1000-editor.data.stx']
            };
            fileManager.importCloud(
                function (backupData) {
                    let model = new StompBoxModel();
                    model.load(backupData);
                    PROGRESS_DIALOG_MAP.import.init();
                    // openするときにcancell時の処理を登録しておく
                    PROGRESS_DIALOG_MAP.import.open(function () {
                        // cancelメソッドの実行とobserverの破棄
                        self.stompBox.cancel();
                        self.stompBox.removeObserver(observer.forRestore);
                    });
                    self.stompBox.addObserver(observer.forRestore);
                    self.stompBox.write();
                },
                function () { 
                    PROGRESS_DIALOG_MAP.import.close();
                },
                this.extension,
                filter
            );
        },
        /**
         *  Disable時の処理
         *  PROGRESS BARを閉じるかつ行っていた処理のCancell処理
         */
        forceTermination: function () {
            PROGRESS_DIALOG_MAP.import.close();
            PROGRESS_DIALOG_MAP.export.close();
            // cancelメソッドの実行とobserverの破棄
            this.stompBox.cancel();
            this.stompBox.observers = []; // observerの破棄
        }
    };
    return obj;
}());
