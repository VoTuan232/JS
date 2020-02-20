
/**
 *
 *  SYSTEM DATA BACKUP
 * 
 */

let systemDataSettingController = (function () {
    let observer = {
        forBackupToFile: {
            fileName: '',
            notify: function (msg, arg) {
                if (msg !== 'system_data_read') {
                    return;
                }
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        systemDataSettingController.systemData.removeObserver(this); // observerを破棄
                        if (this.fileName !== '' && this.fileName !== undefined) {
                            let systemDataModel = new SystemDataModel();
                            try {
                                $native.fs.writeString(this.fileName, systemDataModel.toJSON());
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
                        systemDataSettingController.systemData.removeObserver(this); // observerを破棄
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
                                    systemDataSettingController.systemData.cancel();
                                    systemDataSettingController.systemData.removeObserver(self);
                                });
                                systemDataSettingController.systemData.addObserver(self);
                                systemDataSettingController.systemData.read();
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
                if (msg !== 'system_data_read') {
                    return;
                }
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        systemDataSettingController.systemData.removeObserver(this); // observerを破棄
                        PROGRESS_DIALOG_MAP.export.close(function () {
                            fileManager.exportCloud(
                                function (name) {
                                    let systemData = new SystemDataModel();
                                    $native.fs.writeString(name, systemData.toJSON());
                                },
                                function () { },
                                ProductSetting.name,
                                systemDataSettingController.extension
                            );
                        });
                    } else {
                        let self = this;
                        systemDataSettingController.systemData.removeObserver(this); // observerを破棄
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
                                    systemDataSettingController.systemData.cancel();
                                    systemDataSettingController.systemData.removeObserver(self);
                                });
                                systemDataSettingController.systemData.addObserver(self);
                                systemDataSettingController.systemData.read();
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
                if (msg !== 'system_data_write') {
                    return;
                }
                let self = this;
                if (arg === 'timeout' || arg === 'end') {
                    if (arg === 'end') {
                        systemDataSettingController.systemData.removeObserver(self); // observerを破棄
                        PROGRESS_DIALOG_MAP.import.close(function () {
                            COMPLETE_DIALOG_MAP.import.open();
                        });
                        processingController.start(function (index) {
                            let clearFunc = midiConnectionController.readEditor([2], function () {
                                clearFunc = patchMIDIController.fetchPatchNames(function () {
                                    processingController.finish(index);
                                }, function () {
                                    processingController.finish(index);
                                });
                            }, function () {
                                processingController.finish(index);
                            });
                            return function () {
                                clearFunc();
                            };
                        });
                    } else {
                        systemDataSettingController.systemData.removeObserver(self); // observerを破棄
                        PROGRESS_DIALOG_MAP.import.close();
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        ERROR_DIALOG_MAP.communicationError.open(
                            function () { // CANCEL
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                            },
                            function () { // RETRY
                                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                                PROGRESS_DIALOG_MAP.import.init();
                                // openするときにcancell時の処理を登録しておく
                                PROGRESS_DIALOG_MAP.import.open(function () {
                                    // cancelメソッドの実行とobserverの破棄
                                    systemDataSettingController.systemData.cancel();
                                    systemDataSettingController.systemData.removeObserver(self);
                                });
                                systemDataSettingController.systemData.addObserver(self);
                                systemDataSettingController.systemData.write();
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
        systemData: new SystemData(),
        extension: 'sdb',
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
                        self.systemData.cancel();
                        self.systemData.removeObserver(observer.forBackupToFile);
                    });
                    observer.forBackupToFile.fileName = name;
                    self.systemData.addObserver(observer.forBackupToFile);
                    self.systemData.read();
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
                self.systemData.cancel();
                self.systemData.removeObserver(observer.forBackupToCloud);
            });
            this.systemData.addObserver(observer.forBackupToCloud);
            this.systemData.read();
        },
        restoreFromFile: function () {
            let self = this;
            fileManager.importFile(
                function (backupData) {
                    let model = new SystemDataModel();
                    model.load(backupData);
                    PROGRESS_DIALOG_MAP.import.init();
                    // openするときにcancell時の処理を登録しておく
                    PROGRESS_DIALOG_MAP.import.open(function () {
                        // cancelメソッドの実行とobserverの破棄
                        self.systemData.cancel();
                        self.systemData.removeObserver(observer.forRestore);
                    });
                    self.systemData.addObserver(observer.forRestore);
                    self.systemData.write();
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
                uti: ['jp.co.roland.boss-gt-1000-editor.data.alb']
            };
            fileManager.importCloud(
                function (backupData) {
                    let model = new SystemDataModel();
                    model.load(backupData);
                    PROGRESS_DIALOG_MAP.import.init();
                    // openするときにcancell時の処理を登録しておく
                    PROGRESS_DIALOG_MAP.import.open(function () {
                        // cancelメソッドの実行とobserverの破棄
                        self.systemData.cancel();
                        self.systemData.removeObserver(observer.forRestore);
                    });
                    self.systemData.addObserver(observer.forRestore);
                    self.systemData.write();
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
            if (this.systemData != null) {
                this.systemData.cancel();
                this.systemData.observers = []; // observerの破棄
            }
        }
    };
    return obj;
}());
