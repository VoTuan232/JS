/* global
   util addPatchesLogManager patchMIDIController ERROR_DIALOG_MAP processingController
   fileManager PROGRESS_DIALOG_MAP COMPLETE_DIALOG_MAP
   LIBRARIAN_ELEMENT_IDS LIBRARIAN_ELEMENT_CLASSES
   librarianDynamicDOMController
   LibrarianModel PatchInfo
   librarianCommonInfo
*/

let librarianObserver = {
    temporaryWrite: function (completeFunc, errorFunc) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let observer = {
            notify: function (msg, arg) {
                if (msg === 'librarian_cancel') {
                    lib[librarianCommonInfo.settingMode].removeObserver(this);
                }
                if (msg === 'librarian_temporaryWrite') {
                    if (arg === 'timeout' || arg === 'end') {
                        if (arg === 'timeout') {
                            lib[librarianCommonInfo.settingMode].removeObserver(this);
                            if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                                errorFunc();
                            }
                        } else {
                            if (typeof completeFunc === 'function' && completeFunc !== undefined) {
                                completeFunc();
                            }
                        }
                    }
                }
            }
        };
        return observer;
    },
    /** 
     * [改善ポイント]
     * まず、readで実機のすべてのUSER PATCH DATAをinstLivesetに読み込んでから、
     * instLivesetを選択されたPatchで更新し、writeを行っている。
     * readは行わず、必要な分だけwriteを行うように処理を変更すれば、処理時間を短縮できる。
     */
    export: function (completeFunc, errorFunc) {
        let observer = {
            notify: function (msg, arg) {
                let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
                if (msg === 'librarian_cancel') {
                    lib[librarianCommonInfo.settingMode].removeObserver(this);
                } else if (msg === 'librarian_read') {
                    if (arg === 'end') {
                        librarianCommonInfo.instLiveset.replace(librarianCommonInfo.settingMode, librarianCommonInfo.export.instPatchIndex, librarianCommonInfo.export.targetPatches);
                        let row = [];
                        let start = librarianCommonInfo.export.instPatchIndex;
                        let end = start + librarianCommonInfo.export.targetPatches.length;
                        let len = patchModelController.numOfUserPatchTotal();
                        if (end > len) {
                            end = len;
                        }
                        for (start; start < end; start++) {
                            row.push(start);
                        }
                        lib[librarianCommonInfo.settingMode].write(row);
                    } else if (arg === 'timeout') {
                        if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                            errorFunc(this);
                        }
                    } else {
                        let readArg = (arg + 0) / 2;
                        PROGRESS_DIALOG_MAP.export.update(readArg);
                    }
                } else if (msg === 'librarian_write') {
                    if (arg === 'end') {
                        if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                            completeFunc(this);
                        }
                    } else if (arg === 'timeout') {
                        if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                            errorFunc(this);
                        }
                    } else {
                        let writeArg = ((arg + 0) / 2) + 50;
                        PROGRESS_DIALOG_MAP.export.update(writeArg);
                    }
                }
            }
        };
        return observer;
    },
    import: function (completeFunc, errorFunc) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let observer = {
            notify: function (msg, arg) {
                if (msg === 'librarian_cancel') {
                    lib[librarianCommonInfo.settingMode].removeObserver(this);
                } else if (msg === 'librarian_read') {
                    if (arg === 'end') {
                        if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                            completeFunc(this);
                        }
                    } else if (arg === 'timeout') {
                        if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                            errorFunc(this);
                        }
                    } else {
                        PROGRESS_DIALOG_MAP.import.update(arg);
                    }
                }
            }
        };
        return observer;
    }
};

let librarianServices = {
    /**
     *  @return {Int} livesetに振り分けるID
     *  livesetが一つもない状態のときは0, livesetが上限に達している場合は-1を返す
     */
    createLivesetId: function () {
        function livesetId() {
            let livesetIds = [];
            for (let i = 0; i < librarianCommonInfo.livesetList.length; i++) {
                livesetIds.push(librarianCommonInfo.livesetList[i].id);
            }
            for (let id = 0; id < librarianCommonInfo.maxLivesetNum; id++) {
                if (livesetIds.indexOf(id) < 0) {
                    return id;
                }
            }
            return -1;
        }
        let length = librarianCommonInfo.livesetList.length;
        if (length !== 0) {
            return livesetId();
        } else {
            return 0;
        }
    },
    /**
     *  livesetの新規作成、livesetListへの追加、ストレージへの登録
     *  @param {string} name: required
     *  @param {[LibrarianCell]} patches
     */
    createLiveset: function (name, patches) {
        let newLiveset = new LibrarianModel(name, false);
        if (patches !== undefined) {
            let length = patches.length;
            for (let i = 0; i < length; i++) {
                newLiveset.append(librarianCommonInfo.settingMode);
            }
            newLiveset.replace(librarianCommonInfo.settingMode, 0, patches);
            for (let i = 0; i < length; i++) {
                let patchInfo = new PatchInfo('', false);
                newLiveset.memo(librarianCommonInfo.settingMode, i, JSON.stringify(patchInfo));
            }
        }
        let id = librarianServices.createLivesetId();
        if (id !== -1) {
            $native.app.control('indicator start');
            newLiveset.id = id;
            librarianCommonInfo.livesetList.unshift(newLiveset);
            librarianServices.saveToStorage2(newLiveset);
            librarianServices.saveIdList();
            $native.app.control('indicator stop');
        } else {
            ERROR_DIALOG_MAP.libraryFull.open();
            return;
        }
    },
    /**
     *  lievsetの名前を更新
     *  @param {string} name
     *  @param {LibrarianModel} liveset
     */
    renameLiveset: function (name, liveset) {
        let convertedName = util.convert2AsciiOnlyStr(name).slice(0, 64);
        liveset.name = convertedName;
    },
    /**
     *  patchの名前を更新
     *  @param {string} name
     *  @param {LibrarianCell} patch
     */
    renamePatch: function (name, patch) {
        let convertedName = util.convert2AsciiOnlyStr(name).slice(0, 16);
        patch.setValue(0, convertedName);
    },
    /**
     *  livesetのコピーを生成
     *  @param {LibrarianModel} liveset
     *  @return {LibrarianModel}
     */
    copyLiveset: function (liveset) {
        let newLiveset = new LibrarianModel('', false);
        newLiveset.setTitle(liveset.title());
        newLiveset.duplicate(liveset);
        return newLiveset; // idはそのまま
    },
    /**
     *  patchのコピーを生成
     *  @param {LibrarianCell} patch
     *  @return {LibrarianCell}
     */
    copyPatch: function (patch) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let newPatch = lib[librarianCommonInfo.settingMode].factory();
        newPatch.copy(patch);
        return newPatch;
    },
    /**
     *  livesetの削除(ストレージからも削除)
     *  @param {int} index livesetListのindex
     */
    deleteLiveset: function (index) {
        librarianCommonInfo.livesetList.splice(index, 1);
    },
    /**
     *  patchの削除
     *  @param {int} index patchのindex
     */
    deletePatch: function (liveset, index) {
        liveset.remove(librarianCommonInfo.settingMode, index);
    },
    /**
     * Importの選択に用いる各値の初期化
     */
    initImportInfo: function () {
        librarianCommonInfo.import.mode = 0;
        librarianCommonInfo.import.startIndex = 0;
    },
    /**
     * Exportの選択に用いる各値の初期化
     */
    initExportInfo: function () {
        librarianCommonInfo.export.mode = 0;
        librarianCommonInfo.export.targetLiveset = null;
        librarianCommonInfo.export.instPatchIndex = 0;
        librarianCommonInfo.export.targetPatches = [];
    },
    /**
     * @param {LibrarianModel} targetLiveset import対象のliveset
     * @param {[int]} instPatchIndexes importする実機のpatchのindex
     * @param {int} startIndex  // patchを上書き、挿入する際の開始位置
     * @param {int} mode 0: update, 1:insert
     * @param {function} successFunc 成功時に実行される関数
     * @param {function} errorFunc エラー時に実行される関数
     */
    importInst: function (targetLiveset, instPatchIndexes, startIndex, mode, successFunc, errorFunc) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let observer = librarianObserver.import(
            function (o) { // Success Function
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                let instPatches = librarianCommonInfo.instLiveset.copy(librarianCommonInfo.settingMode, instPatchIndexes);
                if (mode === 0) { // 上書き
                    targetLiveset.replace(librarianCommonInfo.settingMode, startIndex, instPatches);
                } else { // 挿入
                    let cells = APP_MODE === MODE.GUITAR ? targetLiveset.cells : targetLiveset.cellsBass;
                    let head = cells[librarianCommonInfo.settingMode].slice(0, startIndex);
                    let tail = cells[librarianCommonInfo.settingMode].slice(startIndex, targetLiveset.rows(librarianCommonInfo.settingMode));
                    head = head.concat(instPatches);
                    cells[librarianCommonInfo.settingMode] = head.concat(tail);
                }
                librarianServices.saveToStorage2(targetLiveset);
                if (typeof successFunc === 'function') {
                    successFunc();
                }
                $native.app.control('indicator stop');
                PROGRESS_DIALOG_MAP.import.close(function () {
                    COMPLETE_DIALOG_MAP.import.open(function () { });
                });
            },
            function (o) { // Error function
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                PROGRESS_DIALOG_MAP.import.close(function () { });
                if (typeof errorFunc === 'function') {
                    errorFunc();
                }
                let self = o;
                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                ERROR_DIALOG_MAP.communicationError.open(
                    function () { //CANCEL
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                    },
                    function () { //RETRY
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                        PROGRESS_DIALOG_MAP.import.init();
                        PROGRESS_DIALOG_MAP.import.open(function () {
                            lib[librarianCommonInfo.settingMode].cancel();
                            lib[librarianCommonInfo.settingMode].removeObserver(self);
                        });
                        let tempIndexes = [];
                        for (let i = 0, length = instPatchIndexes.length; i < length; i++) {
                            tempIndexes.push(instPatchIndexes[i]);
                        }
                        lib[librarianCommonInfo.settingMode].addObserver(self);
                        lib[librarianCommonInfo.settingMode].read(tempIndexes);
                    }
                );
            }
        );
        let tempIndexes = []; // read処理の時に空の配列になってしまうため、copyしたものを使う
        for (let i = 0, length = instPatchIndexes.length; i < length; i++) {
            tempIndexes.push(instPatchIndexes[i]);
        }
        PROGRESS_DIALOG_MAP.import.init();
        PROGRESS_DIALOG_MAP.import.open(function () {
            lib[librarianCommonInfo.settingMode].cancel();
            lib[librarianCommonInfo.settingMode].removeObserver(observer);
            if (typeof errorFunc === 'function') {
                errorFunc();
            }
        });
        lib[librarianCommonInfo.settingMode].addObserver(observer);
        lib[librarianCommonInfo.settingMode].read(tempIndexes);
    },
    /**
     * @param {function} successFunc 成功時に実行される関数
     * @param {function} errorFunc // エラー時に実行する関数
     */
    exportInst: function (successFunc, errorFunc) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let observer = librarianObserver.export(
            function (o) { // Success Function
                for (i in librarianCommonInfo.export.targetPatches) {
                    if (librarianCommonInfo.export.targetPatches.hasOwnProperty(i)) {
                        let patchInfo = null;
                        if (librarianCommonInfo.export.targetPatches[i].memo !== '') {
                            patchInfo = JSON.parse(librarianCommonInfo.export.targetPatches[i].memo);
                            if (patchInfo.isToneCentralPatch === true) {
                                addPatchesLogManager.post(librarianCommonInfo.export.targetPatches[i].value(0)); // ログの送信
                            }
                        }
                    }
                }
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                PROGRESS_DIALOG_MAP.export.close(function () {
                    COMPLETE_DIALOG_MAP.export.open(function () { });
                });

                patchMIDIController.fetchPatchNames(function () {
                    if (typeof successFunc === 'function') {
                        successFunc();
                    }
                }, function () {
                });
            },
            function (o) { // Error Function
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                PROGRESS_DIALOG_MAP.export.close(function () { });
                if (typeof errorFunc === 'function') {
                    errorFunc();
                }
                let self = o;
                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                ERROR_DIALOG_MAP.communicationError.open(
                    function () { //CANCEL
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                    },
                    function () { //RETRY
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                        PROGRESS_DIALOG_MAP.export.init();
                        PROGRESS_DIALOG_MAP.export.open(function () {
                            lib[librarianCommonInfo.settingMode].cancel();
                            lib[librarianCommonInfo.settingMode].removeObserver(self);
                        });
                        let row = [];
                        let start = librarianCommonInfo.export.instPatchIndex;
                        let end = start + librarianCommonInfo.export.targetPatches.length;
                        let len = patchModelController.numOfUserPatchTotal();
                        if (end > len) {
                            end = len;
                        }
                        for (start; start < end; start++) {
                            row.push(start);
                        }
                        lib[librarianCommonInfo.settingMode].addObserver(self);
                        lib[librarianCommonInfo.settingMode].read(row);
                    }
                );
            }
        );
        let row = [];
        let start = librarianCommonInfo.export.instPatchIndex;
        let end = start + librarianCommonInfo.export.targetPatches.length;
        let len = patchModelController.numOfUserPatchTotal();
        if (end > len) {
            end = len;
        }
        for (start; start < end; start++) {
            row.push(start);
        }
        PROGRESS_DIALOG_MAP.export.init();
        PROGRESS_DIALOG_MAP.export.open(function () {
            lib[librarianCommonInfo.settingMode].cancel();
            lib[librarianCommonInfo.settingMode].removeObserver(observer);
            errorFunc();
        });
        lib[librarianCommonInfo.settingMode].addObserver(observer);
        lib[librarianCommonInfo.settingMode].read(row);
    },
    // Import, Export File
    importFile: function (successFunc, errorFunc) {
        fileManager.importFile(
            function (json) {
                if (librarianCommonInfo.livesetList.length === librarianCommonInfo.maxLivesetNum) {
                    ERROR_DIALOG_MAP.libraryFull.open();
                    if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                        errorFunc();
                    }
                } else {
                    if (typeof successFunc === 'function' && successFunc !== undefined) {
                        successFunc(json);
                    }
                }
            },
            function () {
                if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                    errorFunc();
                }
            },
            ProductSetting.extension
        );
    },
    exportFile: function (liveset, successFunc, errorFunc) {
        let fs = $native.fs;
        let pattern = /[!@#$%^&*{}()|;:'",<.>/?\\+=\-`~[\]]+/g;
        let nameFile = liveset.name.replace(pattern, "_");
        fileManager.exportFile(
            function (name) {
                if (typeof successFunc === 'function' && successFunc !== undefined) {
                    successFunc();
                }
                fs.writeString(name, liveset.toJSON());
            },
            function () {
                if (typeof errorFunc === 'function' && errorFunc !== undefined) {
                    errorFunc();
                }
            },
            `${nameFile}_${APP_MODE === MODE.GUITAR ? 'G' : 'B'}`,
            ProductSetting.extension
        );
    },
    // Import, Export Cloud
    importCloud: function () {
        fileManager.importCloud(
            function (json) {
                popup_close(LIBRARIAN_ELEMENT_IDS.selectImportFromDialog.slice(1));
                let liveset = new LibrarianModel('', librarianCommonInfo.settingMode);
                liveset.load(json);
                librarianCommonInfo.livesetList.push(liveset);
                librarianServices.saveToStorage2(liveset);
                librarianServices.saveIdList();
            },
            function () {
                popup_close(LIBRARIAN_ELEMENT_IDS.selectImportFromDialog.slice(1));
            },
            ProductSetting.extension
        );
    },
    exportCloud: function (liveset) {
        let fs = $native.fs;
        fileManager.exportCloud(
            function (name) {
                try {
                    fs.writeString(name, liveset.toJSON());
                    popup_close(LIBRARIAN_ELEMENT_IDS.exportToCloudDialog.slice(1));
                } catch (e) {
                    ERROR_DIALOG_MAP.fileError.open();
                    popup_close(LIBRARIAN_ELEMENT_IDS.exportToCloudDialog.slice(1));
                    return;
                }
            },
            function () {

            },
            ProductSetting.name,
            ProductSetting.extension
        );
    },
    /**
     *  @param {[LibrarianModel]} liveset
     */
    saveToStorage2: function (liveset) {
        let patchData = JSON.stringify(liveset);
        $native.app.storage2(`${liveset.id}_${APP_MODE}`, patchData);
    },
    /**
     * LivesetのIdListをstorage2へ保存
     */
    saveIdList: function () {
        let idList = {
            list: []
        };
        for (let i = 0, length = librarianCommonInfo.livesetList.length; i < length; i++) {
            idList.list.push(librarianCommonInfo.livesetList[i].id);
        }
        $native.app.storage2(`${librarianCommonInfo.idListKey}_${APP_MODE}`, JSON.stringify(idList));
    },
    /**
     * 上書き確認ダイアログの表示フラグをstorage2へ保存
     */
    saveConfirmationFrag: function () {
        let confirmationFrag = librarianCommonInfo.confirmOverwrite;
        $native.app.storage2(`${librarianCommonInfo.confirmationFragKey}_${APP_MODE}`, JSON.stringify(confirmationFrag));
    },
    /**
     *  @param {string} id
     *  @return {Object} read object
     */
    readStorage2: function (id) {
        let storageString = $native.app.storage2(`${id}_${APP_MODE}`);
        if (typeof storageString === 'string' && storageString.length > 0) {
            try {
                let obj = JSON.parse(storageString);
                return obj;
            } catch (e) {
                return {};
            }
        } else {
            return null;
        }
    },
    /**
     *  Debug用storage2の初期化
     */
    initStorage2: function () {
        $native.app.storage2(`${librarianCommonInfo.idListKey}_${APP_MODE}`, '');
        for (let i = 0, max = librarianCommonInfo.maxLivesetNum; i < max; i++) {
            $native.app.storage2(`${i}_${APP_MODE}`, '');
        }
    },
    /**
     *  アプリ側で保持しているLivesetリストをストレージからロード
     */
    loadLivesetList: function () {
        let storage = librarianServices.readStorage2(librarianCommonInfo.idListKey);
        let idList = [];
        if (storage !== null) {
            if (storage.list instanceof Array) {
                idList = storage.list;
            }
        } else {
            librarianServices.createLiveset('LIVESET 1'); // ID_LIST key が存在しないときにLIVESET 1を追加
            return;
        }
        let livesetList = [];
        $native.app.control('indicator start');
        for (let i = 0, length = idList.length; i < length; i++) {
            let liveset = new LibrarianModel('', false);
            let readData = librarianServices.readStorage2(idList[i]);
            if (readData !== null) {
                liveset.load(readData);
                liveset.id = idList[i];
                livesetList.push(liveset);
            }
        }
        $native.app.control('indicator stop');
        librarianCommonInfo.livesetList = livesetList;
    },
    /**
     * 上書き確認ダイアログの表示フラグをstorage2からロード
     */
    loadConfirmationKey: function () {
        let storage = librarianServices.readStorage2(librarianCommonInfo.confirmationFragKey);
        if (storage !== null) {
            if (typeof storage === 'boolean') {
                librarianCommonInfo.confirmOverwrite = storage;
            }
        } else {
            librarianCommonInfo.confirmOverwrite = true;
        }
    },
    /**
     * ToneCentral preview
     * @param {[{}]} patch
     */
    previewPatch: function (patch) {
        let lib = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
        let livesetForPrev = new LibrarianModel('', false);
        livesetForPrev.append(librarianCommonInfo.settingMode);
        livesetForPrev.cell(librarianCommonInfo.settingMode, 0).paramSet = patch[librarianCommonInfo.settingMode].paramSet;
        librarianCommonInfo.currentPatch = livesetForPrev.cell(librarianCommonInfo.settingMode, 0);
        lib[librarianCommonInfo.settingMode].cancel();
        let observer = librarianObserver.temporaryWrite(
            function (o) {
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                util.waitForRQ1Reply(APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS, 4, {
                    error: function () { },
                    success: function () { }
                });
            },
            function (o) {
                lib[librarianCommonInfo.settingMode].removeObserver(o);
                util.waitForRQ1Reply(APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS, 4, {
                    error: function () { },
                    success: function () { }
                });
            }
        );
        lib[librarianCommonInfo.settingMode].addObserver(observer);
        lib[librarianCommonInfo.settingMode].temporaryWrite(livesetForPrev.cell(librarianCommonInfo.settingMode, 0), 0);
    },
    /**
     * ToneCentral import
     * @param {string} livesetName
     * @param {[Object]} patchData
     */
    importToneCentral: function (livesetName, patchData) {
        let patches = [];
        let lib = APP_MODE === MODE.GUITAR ? ProductSetting.librarian : ProductSetting.librarianBass
        for (let i = 0, length = patchData[librarianCommonInfo.settingMode].length; i < length; i++) {
            let patch = new LibrarianCell(lib[librarianCommonInfo.settingMode].config);
            let patchInfo = new PatchInfo('', true);
            patch.memo = JSON.stringify(patchInfo);
            patch.paramSet = patchData[librarianCommonInfo.settingMode][i].paramSet;
            patches.push(patch);
        }
        if (librarianCommonInfo.livesetList.length !== librarianCommonInfo.maxLivesetNum) {
            COMPLETE_DIALOG_MAP.addLiveset.open();
            librarianServices.createLiveset(livesetName, patches);
        } else {
            ERROR_DIALOG_MAP.libraryFull.open();
        }
    },
    /**
     * @param {int} patchNum
     */
    changeInstPatch: function (patchNum) {
        let isInst = librarianCommonInfo.currentLiveset.instrument;
        if (isInst) {
            librarianCommonInfo.currentPatch = librarianCommonInfo.instLiveset.cell(librarianCommonInfo.settingMode, patchNum);
            $(LIBRARIAN_ELEMENT_CLASSES.patchTableCell).removeClass('selected');
            let selectedRowNum = patchNum;
            $(LIBRARIAN_ELEMENT_CLASSES.patchTableCell).eq(selectedRowNum).addClass('selected');
        } else {
            librarianCommonInfo.currentPatch = librarianCommonInfo.instLiveset.cell(librarianCommonInfo.settingMode, patchNum);
            $(LIBRARIAN_ELEMENT_CLASSES.patchTableCell).removeClass('selected');
        }
    }
};