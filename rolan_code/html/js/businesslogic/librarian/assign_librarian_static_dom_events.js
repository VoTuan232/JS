/**
 * [概要]
 * LIBRARIAN画面の静的なDOMへのイベント紐づけ
 *
 * [使用箇所]
 * LIBRARIAN画面
 * 
 * [改善ポイント]
 * ・IDやCLASSを指定する際にLIBRARIANという接頭辞をつけているため、変数名が長くなり、可読性が低くなっている。
 * 
 */

(function () {
    window.assignLibrarianStaticDOMEvents = function () {
        /** 
         *  headerボタン切り替え時のイベント
         */
        $('#header-group-btn').on('elf-changed', function (e, v) {
            let userPatchSelectMenu = $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu);
            let userPatchSelectMenuCells = $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu + '> label');
            let isLibrarianDisplayed = v === 1;
            if (isLibrarianDisplayed) {
                window.currentPatchNumEditor = patchModelController.getCurrentPatchNum();
            } else {
                if (patchModelController.getCurrentPatchNum() == 500) {
                    patchMIDIController.updateCurrentPatch(window.currentPatchNumEditor);
                }
            }

            /**
             *  LIBRARIAN画面を表示しているときのみUSER PATCHへイベントを紐づける
             */
            librarianDynamicDOMController.assignUserPatchTableEvent(isLibrarianDisplayed);
            // LIBRARIANの情報をload
            if (isLibrarianDisplayed) {
                librarianServices.loadLivesetList();
                librarianServices.loadConfirmationKey();
                librarianDynamicDOMController.updateLivesetTableCell();
            }
        });
        /**
         *  CREATE LIVESETボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.createLivesetDialogBtn).on(pointer.click, function (e) {
            e.preventDefault();
            // フォームを初期化
            $(LIBRARIAN_ELEMENT_IDS.createLivesetTextInput + ' input[type=text]').val("");
            popup_open(LIBRARIAN_ELEMENT_IDS.createLivesetDialog.slice(1));
        });
        /**
         *  CREATE LIVESETダイアログでOKボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.createLivesetDialogBtn).on(pointer.click, function (e) {
            e.preventDefault();
            $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).removeClass('librarian-select-patch-cell-pc');
            CREATE_LIVESET_DIALOG.open(function (text) {
                librarianServices.createLiveset(text);
                librarianDynamicDOMController.updateLivesetTableCell();
            });
        });
        /**
         *  IMPORTボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.importDialogBtn).on(pointer.click, function (e) {
            $(LIBRARIAN_ELEMENT_IDS.importFromInstBtn).addClass("disabled");
            if (midiConnectionController.getCurrentMIDI() !== null) {
                $(LIBRARIAN_ELEMENT_IDS.importFromInstBtn).removeClass("disabled");
            }
            popup_open(LIBRARIAN_ELEMENT_IDS.importFromDialog.slice(1));
        });
        /**
         *  IMPORT FROMダイアログでSY-1000押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.importFromInstBtn).on(pointer.click, function (e) {
            popup_close(LIBRARIAN_ELEMENT_IDS.importFromDialog.slice(1));
            if (librarianCommonInfo.livesetList.length + 1 <= librarianCommonInfo.maxLivesetNum) {
                CREATE_LIVESET_DIALOG.open(function (text) {
                    let liveset = new LibrarianModel(librarianCommonInfo.settingMode, false);
                    liveset.setTitle(text);
                    liveset.id = librarianServices.createLivesetId();
                    let row = [];
                    let len = patchModelController.numOfUserPatchTotal();
                    // len += patchModelController.numOfPedalBoardPatchTotal();  // includes PEDALBOARD patch
                    for (let i = 0; i < len; i++) {
                        row.push(i);
                    }
                    librarianServices.importInst(liveset, row, 0, 1,
                        function () {
                            // 左側にLiveSetを追加してくため、unshiftを用いる
                            librarianCommonInfo.livesetList.unshift(liveset);
                            librarianServices.saveIdList();
                            librarianDynamicDOMController.updateLivesetTableCell();
                        },
                        function () { }
                    );
                });
            } else {
                ERROR_DIALOG_MAP.libraryFull.open();
            }
        });
        /**
         *  IMPORT FROMダイアログでFILE押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.importFromFileBtn).on(pointer.click, function (e) {
            librarianServices.importFile(
                function (json) {
                    popup_close(LIBRARIAN_ELEMENT_IDS.importFromDialog.slice(1));
                    let liveset = new LibrarianModel(librarianCommonInfo.settingMode, false);
                    liveset.load(json);
                    liveset.id = librarianServices.createLivesetId();
                    // 左側にLiveSetを追加してくため、unshiftを用いる
                    if (liveset.rows(0) <= librarianCommonInfo.maxPatchNum) {
                        librarianCommonInfo.livesetList.unshift(liveset);
                        librarianServices.saveToStorage2(liveset);
                        librarianServices.saveIdList();
                        librarianDynamicDOMController.updateLivesetTableCell();
                    } else {
                        ERROR_DIALOG_MAP.libraryFull.open();
                    }
                },
                function () {
                    popup_close(LIBRARIAN_ELEMENT_IDS.importFromDialog.slice(1));
                }
            );
        });
        /**
         *  EXPORTボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.exportDialogBtn).on(pointer.click, function (e) {
            popup_open(LIBRARIAN_ELEMENT_IDS.exportToDialog.slice(1));
            $(LIBRARIAN_ELEMENT_IDS.exportToInstBtn).addClass("disabled");
            $(LIBRARIAN_ELEMENT_IDS.exportToFileBtn).addClass("disabled");
            $(LIBRARIAN_ELEMENT_IDS.exportLivesetSelectList + " p").text("");
            if (librarianCommonInfo.livesetList.length > 0) {
                $(LIBRARIAN_ELEMENT_IDS.exportLivesetSelectList).removeClass("disabled");
                librarianDynamicDOMController.updateSelectLivesetList();
            } else {
                $(LIBRARIAN_ELEMENT_IDS.exportLivesetSelectList).addClass("disabled");
            }
        });
        /**
         *  EXPORT TOダイアログでLIVESETセレクトリスト更新時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.exportLivesetSelectList).on('elf-changed', function (e, v) {
            librarianCommonInfo.export.targetLiveset = librarianCommonInfo.livesetList[v];
            if (midiConnectionController.getCurrentMIDI() != null) {
                $(LIBRARIAN_ELEMENT_IDS.exportToInstBtn).removeClass("disabled");
            }
            $(LIBRARIAN_ELEMENT_IDS.exportToFileBtn).removeClass("disabled");
        });
        /**
         *  EXPORT TOダイアログでSY-1000を押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.exportToInstBtn).on(pointer.click, function (e) {
            popup_close(LIBRARIAN_ELEMENT_IDS.exportToDialog.slice(1));
            librarianCommonInfo.export.instPatchIndex = 0;
            let cellsMode = APP_MODE === MODE.GUITAR ? librarianCommonInfo.export.targetLiveset.cells : librarianCommonInfo.export.targetLiveset.cellsBass;
            // librarianCommonInfo.export.targetPatches = cellsMode[librarianCommonInfo.settingMode];
            let targetPatches = [];
            let cells = cellsMode[librarianCommonInfo.settingMode];
            let len = patchModelController.numOfUserPatchTotal();
            if (len > cells.length) {
                len = cells.length;
            }
            for (let i = 0; i < len; i++) {
                targetPatches.push(cells[i]);
            }
            librarianCommonInfo.export.targetPatches = targetPatches;
            librarianServices.exportInst(
                function () {
                    $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu + '> label').on('mousedown.librarian', function (e) {
                        _librarianSelectUserPatchEvent(e, $(this));
                    });
                },
                function () { }
            );
        });
        /**
         *  EXPORT TOダイアログでFILEを押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.exportToFileBtn).on(pointer.click, function (e) {
            librarianServices.exportFile(librarianCommonInfo.export.targetLiveset,
                function () {
                    popup_close(LIBRARIAN_ELEMENT_IDS.exportToDialog.slice(1));
                },
                function () {
                    popup_close(LIBRARIAN_ELEMENT_IDS.exportToDialog.slice(1));
                }
            );
        });
        /**
         *  LiveSetのEditボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_CLASSES.editLivesetBtn).on(pointer.down, function (e) {
            e.preventDefault();
            e.stopPropagation();
            let cell = $(this).parent();
            _changeLivesetCellMode(1, cell);
        });
        /**
         *  LiveSetのRenameボタン押下時の処理
         */
        $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetCheckBtn).on(pointer.down, function (e) {
            e.preventDefault();
            e.stopPropagation();
            let cell = $(this).parent();
            _changeLivesetCellMode(0, cell);
        });
        /**
         *  LiveSetのRename InputTextにフォーカスを当てた時の処理
         */
        $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetInputText).on(pointer.down, function (e) {
            e.stopPropagation();
        });
        /**
         *  LiveSetのRename InputTextにフォーカスを当てた状態でEnterを押下時の処理
         */
        $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetInputText).on('keydown', function (e) {
            if (e.keyCode === 13) {
                let cell = $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
                _changeLivesetCellMode(0, cell);
            }
        });
        /**
         *  LiveSetの削除確認ダイアログでOKボタンを押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.deleteLivesetBtn).on(pointer.click, function (e) {
            let cell = $(LIBRARIAN_ELEMENT_CLASSES.targetDeleteLiveset);
            let index = cell.index();
            cell.remove();
            librarianDynamicDOMController.sortableLivesetTableCell();
            $native.app.storage2(`${librarianCommonInfo.livesetList[index].id}_${APP_MODE}`, '');
            librarianServices.deleteLiveset(index);
            librarianServices.saveIdList();
            popup_close(LIBRARIAN_ELEMENT_IDS.deleteLivesetDialog.slice(1));
        });
        /**
         *  Patchの削除確認ダイアログでOKボタンを押下時の処理
         */
        $(LIBRARIAN_ELEMENT_IDS.deletePatchBtn).on(pointer.click, function () {
            $(LIBRARIAN_ELEMENT_CLASSES.patchTable).sortable('enable');
            $(LIBRARIAN_ELEMENT_CLASSES.userPatchTable).sortable('enable');
            $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable('enable');
            let currentLivesetCell = librarianCommonInfo.editedPatchCell[0].parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
            let livesetIndex = librarianCommonInfo.editedPatchCell[0].parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
            let currentLiveset = librarianCommonInfo.livesetList[livesetIndex];
            librarianCommonInfo.editedPatchCell.forEach(function (patch, index) {
                let patchIndex = patch.index();
                librarianServices.deletePatch(currentLiveset, patchIndex);
                patch.remove(); // Patch Tableから削除
            });
            $(currentLivesetCell).find('.librarian-patch-num-pc').text(currentLiveset.rows(librarianCommonInfo.settingMode));
            librarianDynamicDOMController.sortablePatchTableCell(currentLivesetCell);
            $native.app.control('indicator start');
            librarianServices.saveToStorage2(currentLiveset);
            $native.app.control('indicator stop');
            popup_close(LIBRARIAN_ELEMENT_IDS.deletePatchDialog.slice(1));
        });
        /**
         *  LIBRARIAN画面内を押下時の処理(Editモードの解除)
         */
        $(LIBRARIAN_ELEMENT_IDS.librarianPage).on(pointer.down, function () {
            let editPatchBtnHidden = $(LIBRARIAN_ELEMENT_CLASSES.editPatchBtn + ':hidden');
            let editingPatch = editPatchBtnHidden.parents(LIBRARIAN_ELEMENT_CLASSES.patchCell);
            if (editingPatch.length) {
                _changePatchCellMode(0, editingPatch);
            }
            let editLivesetBtnHidden = $(LIBRARIAN_ELEMENT_CLASSES.editLivesetBtn + ':hidden');
            let editingLiveset = editLivesetBtnHidden.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
            if (editingLiveset.length) {
                _changeLivesetCellMode(0, editingLiveset);
            }
        });
    }

}());