/**
 * [概要]
 * LIBRARIAN画面の動的に生成するDOMの操作及びイベントの紐づけ
 *
 * [使用箇所]
 * LIBRARIAN画面
 *
 * [改善ポイント]
 * ・IDやCLASSを指定する際にLIBRARIANという接頭辞をつけているため、変数名が長くなり、可読性が低くなっている。
 * 
 */

(function () {
    window.assignLibrarianDynamicDOMController = function () {
        let obj = {
            /**
             *  LiveSetテーブルの生成
             */
            createLivesetTable: function () {
                let table = "<div id='librarian-liveset-table' class='librarian-liveset-table-pc'>";
                for (let row = 0, length = librarianCommonInfo.livesetList.length; row < length; row++) {
                    let livesetName = librarianCommonInfo.livesetList[row].name;
                    livesetName = util.convert2AsciiOnlyStr(livesetName).slice(0, 64);
                    table += "<div class='librarian-liveset-table-cell-pc' value=" + row + ">";
                    table += "<div class='librarian-liveset-info-block-pc'>";
                    table += "<div class='librarian-liveset-info-pc'>";
                    if (librarianCommonInfo.livesetList[row].name.length < 22) {
                        table += "<div class='librarian-liveset-name-pc'>";
                    } else {
                        table += "<div class='librarian-liveset-name-two-line-pc'>";
                    }
                    table += livesetName + "</div>";
                    table += "<div class='librarian-patch-num-pc'>" + librarianCommonInfo.livesetList[row].rows(librarianCommonInfo.settingMode) + "</div>";
                    table += "</div>";
                    table += '<input name="rename-liveset-text" class="rename-liveset-input-text" maxlength="64" style="display:none;" type="text" value="' + livesetName + '">';
                    table += '<div class="librarian-rename-liveset-check-btn-pc" style="display:none;" ></div>';
                    table += '<div class="librarian-delete-liveset-btn-pc" style="display:none;" ></div>';
                    table += "<div class='librarian-edit-liveset-btn-pc' title='Edit'></div>";
                    table += "</div>";
                    table += "<div class='patch-table'></div>";
                    table += "</div>";
                    table += "</div>";
                }
                table += "</div>";
                $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame).empty();
                $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame).append(table);
                librarianEventHandler();
            },
            /**
             *  LiveSetテーブルの更新処理
             */
            updateLivesetTableCell: function () {
                let table = "<div id='librarian-liveset-table' class='librarian-liveset-table-pc'>";
                for (let row = 0, length = librarianCommonInfo.livesetList.length; row < length; row++) {
                    let livesetName = librarianCommonInfo.livesetList[row].name;
                    livesetName = util.convert2AsciiOnlyStr(livesetName).slice(0, 64);
                    table += "<div class='librarian-liveset-table-cell-pc' value=" + row + ">";
                    table += "<div class='librarian-liveset-info-block-pc'>";
                    table += "<div class='librarian-liveset-info-pc'>";
                    if (librarianCommonInfo.livesetList[row].name.length < 22) {
                        table += "<div class='librarian-liveset-name-pc'>";
                    } else {
                        table += "<div class='librarian-liveset-name-two-line-pc'>";
                    }
                    table += livesetName + "</div>";
                    table += "<div class='librarian-patch-num-pc'>" + librarianCommonInfo.livesetList[row].rows(librarianCommonInfo.settingMode) + "</div>";
                    table += "</div>";
                    table += '<input name="rename-liveset-text" class="rename-liveset-input-text" maxlength="64" style="display:none;" type="text" value="' + livesetName + '">';
                    table += '<div class="librarian-rename-liveset-check-btn-pc" style="display:none;" ></div>';
                    table += '<div class="librarian-delete-liveset-btn-pc" style="display:none;" ></div>';
                    table += "<div class='librarian-edit-liveset-btn-pc' title='Edit'></div>";
                    table += "</div>";
                    table += "<div class='librarian-patch-table-pc'>";
                    for (let i = 0, livesetLength = librarianCommonInfo.livesetList[row].rows(librarianCommonInfo.settingMode); i < livesetLength; i++) {
                        let patchName = librarianCommonInfo.livesetList[row].value(librarianCommonInfo.settingMode, i, 0);
                        patchName = util.convert2AsciiOnlyStr(patchName).slice(0, 16);
                        let num = (i + 1 > 9) ? i + 1 : "0" + (i + 1);
                        table += "<div class='librarian-patch-cell-pc' value=" + i + ">";
                        table += "<div class='librarian-serial-num-pc'>" + num + "</div>";
                        table += "<div class='librarian-patch-name-pc'>" + patchName + "</div>";
                        table += "<div class='librarian-edit-patch-btn-pc' title='Edit'></div>";
                        table += '<input name="librarian-rename-patch-text-pc" class="rename-patch-input-text" maxlength="16" style="display:none;" type="text" value="' + patchName + '">';
                        table += '<div class="librarian-rename-patch-check-btn-pc" style="display:none;" ></div>';
                        table += '<div class="librarian-delete-patch-btn-pc" style="display:none;" ></div>';
                        table += "</div>";
                    }
                    table += "</div>";
                    table += "</div>";
                }
                $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame).empty();
                $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame).append(table);
                librarianEventHandler();
            },
            /**
             *  Patchテーブルの更新処理
             *  @param livesetCell 更新するLivesetのDOM
             */
            updatePatchTableCell: function (livesetCell) {
                let currentLiveset = librarianCommonInfo.livesetList[livesetCell.index()];
                let cells = [];
                if (currentLiveset) {
                    cells = livesetCell.children(LIBRARIAN_ELEMENT_CLASSES.patchTable).children();
                }
                if (cells !== 0) {
                    for (let i = 0, length = cells.length; i < length; i++) {
                        $(cells[i]).find('.librarian-patch-name-pc').text(currentLiveset.value(librarianCommonInfo.settingMode, i, 0));
                    }
                }
            },
            /**
             *  LiveSetのセレクトリスト更新
             */
            updateSelectLivesetList: function () {
                $(LIBRARIAN_ELEMENT_CLASSES.livesetSelectorOption).empty();
                let livesetList = librarianCommonInfo.livesetList;
                let html = '';
                for (let i = 0, length = livesetList.length; i < length; i++) {
                    html += ("<a href='#' class='elf-select-list-option-control' msg='' value=" + i + '>' + livesetList[i].title() + '</a>');
                }
                $(LIBRARIAN_ELEMENT_CLASSES.livesetSelectorOption).html(html);
            },
            /**
             *  LiveSet番号の更新
             */
            sortableLivesetTableCell: function () {
                let livesetListLength = 0;
                if (librarianCommonInfo.livesetList) {
                    livesetListLength = librarianCommonInfo.livesetList.length;
                }
                if (livesetListLength !== 0) {
                    let livesetList = $(LIBRARIAN_ELEMENT_IDS.livesetTable).children();
                    for (let i = 0; i < livesetList.length; i++) {
                        $(livesetList[i]).attr('value', i);
                    }
                }
            },
            /**
             *  Patch番号の更新
             *  @param livesetCell 更新するLivesetのDOM
             */
            sortablePatchTableCell: function (livesetCell) {
                let currentLiveset = librarianCommonInfo.livesetList[livesetCell.index()];
                let cells = [];
                if (currentLiveset) {
                    cells = livesetCell.children(LIBRARIAN_ELEMENT_CLASSES.patchTable).children();
                }
                if (cells !== 0) {
                    for (let i = 0, length = cells.length; i < length; i++) {
                        $(cells[i]).attr('value', i);
                        let patchNum = i + 1;
                        if (patchNum < 10) {
                            patchNum = "0" + patchNum;
                        } else {
                            patchNum = patchNum + "";
                        }
                        $(cells[i]).find('.librarian-serial-num-pc').text(patchNum);
                    }
                }
            },
            /**
             *  userpatchへのイベント着脱
             *  @param isAssigned イベント着脱のフラグ
             */
            assignUserPatchTableEvent: function (isAssigned) {
                let userPatchSelectMenu = $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu);
                let userPatchSelectMenuCells = $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu + '> label');
                if (isAssigned) {
                    $(document).on('keydown.librarian', function (e) {
                        _librarianKeyDownEventHandler(e);
                    });
                    $(document).on('keyup.librarian', function (e) {
                        _librarianKeyUpEventHandler(e);
                    });
                    userPatchSelectMenuCells.on('mousedown.librarian', function (e) {
                        _librarianSelectUserPatchEvent(e, $(this));
                    });
                    if (userPatchSelectMenu.hasClass('ui-sortable')) {
                        userPatchSelectMenu.sortable('enable');
                    }
                    $('#librarian-create-liveset-text-input input').on('input', function () {
                        let text = $('#librarian-create-liveset-text-input input').val();
                        if (text.trim() != '') {
                            $('#librarian-create-liveset-btn').removeClass("disabled-blue");
                            $(CREATE_LIVESET_DIALOG.mask).css('display', 'none');
                            CREATE_LIVESET_DIALOG.status = false;
                        } else {
                            $('#librarian-create-liveset-btn').addClass("disabled-blue");
                            $(CREATE_LIVESET_DIALOG.mask).css('display', 'block');
                            CREATE_LIVESET_DIALOG.status = true;
                        }
                    });
                } else {
                    $(document).off('keydown.librarian');
                    $(document).off('keyup.librarian');
                    userPatchSelectMenuCells.off('mousedown.librarian');
                    if (userPatchSelectMenu.hasClass('ui-sortable')) {
                        userPatchSelectMenu.sortable('disable');
                    }
                    userPatchSelectMenu.removeClass(LIBRARIAN_ELEMENT_CLASSES.librarianUserPatchTable.slice(1));
                    userPatchSelectMenuCells.removeClass(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch.slice(1));
                }
            }
        }
        window.librarianDynamicDOMController = obj;
    }
}());

/**
 *  LIBRARIANのLiveSetテーブル内のイベント紐づけ
 */
function librarianEventHandler() {
    let original = null; // 移動元にあるSortable要素のPATCH
    let before = null; // 移動元にあるSortable要素の前にあるPATCH
    let parent = null; // 移動元にあるSortable要素のPATCHのPATCH TABLE
    let fromLivesetIndex = 0; // PATCHの移動元のLIVESETのIndex
    let toLivesetIndex = 0; // PATCHの移動先のLIVESETのIndex
    let placeholderIndex = 0; // placeholderのindex patchのinsert時に使用する
    let selectCellIndexes = []; // 移動元で選択されたPATCHのIndex番号が格納された配列
    let updateCellIndexes = []; // 移動先で上書き対象のPATCHのIndex番号が格納された配列(空の場合あり)
    let UPDATE_PATCH_OVERLAP_HEIGHT = 10;

    /**
     *  LiveSetのsortable
     */
    $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable({
        opacity: 0.8,
        axis: 'x',
        containment: "parent",
        delay: 1,
        scroll: true,
        scrollSensitivity: 100,
        over: function (e, ui) {
            if (ui.sender) {
                $(ui.sender).sortable('instance').scrollParent = $(e.target);
            }
        },
        helper: function (event, ui) {
            return ui.clone().addClass('librarian-select-liveset-pc');
        },
        placeholder: 'sortable-placeholder-pc',
        cancel: LIBRARIAN_ELEMENT_CLASSES.patchCell,
        start: function (event, ui) {
            if (!ui.item.hasClass('librarian-select-liveset-pc')) {
                $(LIBRARIAN_ELEMENT_IDS.livesetTable).children().removeClass('librarian-select-liveset-pc');
                ui.item.addClass('librarian-select-liveset-pc');
            }
            ui.item.show();
        },
        sort: function (event, ui) {
            let livesetTable = ui.placeholder.parents(LIBRARIAN_ELEMENT_IDS.livesetTableFrame);
            let livesetList = librarianCommonInfo.livesetList;
            if (ui.position.left >= livesetTable.width() - 208 && ui.placeholder.index() === livesetList.length - 1) {
                livesetTable.css('padding-right', '210px');
            } else if (ui.placeholder.index() === 0) {
                livesetTable.css('padding-left', '210px');
            }
            let scrollWidth = 208 * (librarianCommonInfo.livesetList.length - 1);
            if (ui.position.left + 208 >= window.innerWidth) {
                ui.item.css('left', 208 * (librarianCommonInfo.livesetList.length));
            }
        },
        stop: function (event, ui) {
            ui.item.removeAttr('style');
            ui.item.removeClass('librarian-select-liveset-pc');
            let indexArray = $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable('toArray', { attribute: 'value' });
            let newLivesetList = [];
            for (let i = 0, length = indexArray.length; i < length; i++) {
                let index = indexArray[i];
                newLivesetList.push(librarianCommonInfo.livesetList[index]);
            }
            librarianCommonInfo.livesetList = newLivesetList;
            librarianServices.saveIdList();
            librarianDynamicDOMController.sortableLivesetTableCell();
            $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame).css('padding', '0px');
        },
        appendTo: LIBRARIAN_ELEMENT_IDS.librarianPage
    });

    /** 
     *  LiveSetのPatchのsortable
     */
    $(LIBRARIAN_ELEMENT_CLASSES.patchTable).sortable({
        opacity: 0.8,
        containment: LIBRARIAN_ELEMENT_IDS.subPage,
        delay: 1,
        scroll: true,
        scrollSensitivity: 0,
        scrollSpeed: 100,
        over: function (e, ui) {
            if (ui.placeholder) {
                ui.item.data('sortableItem').scrollParent = ui.placeholder.parent();
                ui.item.data('sortableItem').overflowOffset = ui.placeholder.parent().offset();
            }
        },
        connectWith: [LIBRARIAN_ELEMENT_CLASSES.patchTable, LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu],
        tolerance: 'pointer',
        helper: function (event, ui) {
            let selectPatches = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).clone();
            return $('<div>').append(selectPatches);
        },
        placeholder: 'sortable-placeholder-pc',
        cancel: LIBRARIAN_ELEMENT_CLASSES.livesetInfoBlock,
        start: function (event, ui) {
            fromLivesetIndex = ui.item.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
            selectCellIndexes = [];
            let patchCells = ui.item.parent().children().not('.sortable-placeholder-pc');
            for (let i = 0, len = patchCells.length; i < len; i++) {
                if ($(patchCells[i]).hasClass(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell.slice(1))) {
                    selectCellIndexes.push(i);
                }
            }
            ui.item.css('display', 'block');
            ui.item.multiple = ui.helper.children().removeClass('librarian-select-patch-cell-pc');
            original = ui.item.clone();
            before = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).first().prev();
            parent = ui.item.parent();
        },
        sort: function (event, ui) {
            let patchTable = ui.placeholder.parents(LIBRARIAN_ELEMENT_CLASSES.patchTable);
            if (ui.position.top >= patchTable.height() - 40) {
                patchTable.css('padding-bottom', '38px');
            }
            updateCellIndexes = [];
            placeholderIndex = ui.placeholder.index();
            let beforeCell = ui.placeholder.prev();
            let afterCell = ui.placeholder.next();
            let helper = ui.helper;
            let updatePatchCell = null;
            let index = 0;
            let isUserPatch = false;
            let overlapHeight = UPDATE_PATCH_OVERLAP_HEIGHT;
            if (ui.placeholder.parent().attr('id') === 'user-patch-select-menu') {
                isUserPatch = true;
                overlapHeight = UPDATE_PATCH_OVERLAP_HEIGHT + 20;
                beforeCell = ui.placeholder.prev('label');
                afterCell = ui.placeholder.next('label');
            }
            let overlapResult = _overlapPatchCell(beforeCell, afterCell, helper, overlapHeight);
            $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell).removeClass('librarian-update-patch-cell-pc');
            updatePatchCell = overlapResult.updatePatchCell;
            index = overlapResult.index;
            let updateTop = null;
            let helperTop = null;
            if (updatePatchCell !== null) {
                updateTop = updatePatchCell.offset().top;
                helperTop = helper.offset().top;
            }
            let overlapValid = Math.abs(updateTop - helperTop) < overlapHeight && Math.abs(updateTop - helperTop) > 2;
            if (overlapValid && updateTop && helperTop) {
                let table = updatePatchCell.parent();
                $('.sortable-placeholder-pc').attr('style', 'border-bottom:0.1px solid #000000;');
                let helperLength = ui.helper.children().length;
                let len, increment;
                if (isUserPatch) {
                    len = helperLength * 2;
                    increment = 2;
                } else {
                    len = helperLength;
                    increment = 1;
                }
                for (let i = index, length = index + len; i < length; i += increment) {
                    updateCellIndexes.push(i);
                    table.children().not('.sortable-placeholder-pc').eq(i).addClass('librarian-update-patch-cell-pc');
                }
            }
            if (updatePatchCell === null || !overlapValid) {
                $('.sortable-placeholder-pc').removeAttr('style');
            }
            updatePatchCell = null;
        },
        stop: function (event, ui) {
            toLivesetIndex = ui.item.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
            let updateCell = $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell);
            let selectCell = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell);
            let assignEventPatches = [];
            let patches = ui.item.multiple;
            let isExport = false;
            let toLivesetCell = null;
            let fromLivesetCell = null;
            let toCell = null;
            let selectKeyPressed = librarianCommonInfo.selectKeyPressed;
            function domControl(isOriginAdd, isItemRem, isUpdateRem) {
                if (isOriginAdd) {
                    if (before.length) {
                        $(before).after(original);
                    } else {
                        $(parent).prepend(original);
                    }
                }
                if (isItemRem) {
                    ui.item.remove();
                }
                if (isUpdateRem) {
                    updateCell.remove();
                }
            }
            if (ui.item.parent().attr('id') === LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu.slice(1)) {
                if (updateCell.length) {
                    parent.sortable('cancel');
                    assignEventPatches = [original];
                    isExport = true;
                } else {
                    parent.sortable('cancel');
                    return;
                }
            } else if (event.altKey) {
                //TODO
            } else if (updateCell.length && updateCell.parent().is(parent)) { // 同一LIVESET内のPATCH上書き
                parent.sortable('cancel');
            } else if (ui.item.parent().is(parent)) { // 同一LIVESET内のPATCH並び替え
                ui.item.after(patches);
                ui.item.remove();
                $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).remove();
            } else if (updateCell.length && !updateCell.parent().is(parent)) { // 別のLIVESETに対してのPATCH上書き
                parent.sortable('cancel');
            } else if (!ui.item.parent().is(parent)) { // 別のLIVSETに対してのPATCH挿入
                toLivesetIndex = ui.item.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
                updateCellIndexes = [];
                ui.item.after(patches);
                domControl(true, true, false);
            } else {
                ui.item.parent().sortable('cancel');
                return;
            }
            for (let i = 0; i < assignEventPatches.length; i++) {
                _patchCellEventHandler($(assignEventPatches[i]), librarianCommonInfo.patchEditing);
            }
            toLivesetCell = librarianCommonInfo.livesetList[toLivesetIndex];
            if (toLivesetCell) {
                toCell = APP_MODE === MODE.GUITAR ? toLivesetCell.cells : toLivesetCell.cellsBass;
            }
            fromLivesetCell = librarianCommonInfo.livesetList[fromLivesetIndex];
            function removePatch() {
                if (selectKeyPressed) {
                    for (let i = fromLivesetCell.rows(librarianCommonInfo.settingMode) - 1; 0 <= i; i--) {
                        for (let j = 0, length = selectCellIndexes.length; j < length; j++) {
                            if (i === selectCellIndexes[j]) {
                                librarianServices.deletePatch(fromLivesetCell, i);
                                selectCellIndexes.slice(j, 1);
                                continue;
                            }
                        }
                    }
                }
            }
            function completeFunc() {
                let indexScroll = $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame + ' div').scrollLeft();
                $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell).removeClass(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell.slice(1));
                librarianServices.saveToStorage2(toLivesetCell);
                if (selectKeyPressed) {
                    librarianServices.saveToStorage2(fromLivesetCell);
                }
                librarianDynamicDOMController.updateLivesetTableCell();
                $(LIBRARIAN_ELEMENT_IDS.livesetTableFrame + ' div').scrollLeft(indexScroll);
                $('.librarian-patch-table-pc').scrollLeft(0);
            }
            if (isExport) { // Export
                let currentLiveset = librarianCommonInfo.livesetList[fromLivesetIndex];
                let targetPatches = [];
                for (let i = 0, length = selectCellIndexes.length; i < length; i++) {
                    targetPatches.push(currentLiveset.cell(librarianCommonInfo.settingMode, selectCellIndexes[i]));
                }
                librarianCommonInfo.export.targetPatches = targetPatches;
                let instPatchIndex = Math.floor($(updateCell[0]).index() / 2); // Labelがある分ずれてしまうため、2で割った値をindexとする
                librarianCommonInfo.export.instPatchIndex = instPatchIndex;
                librarianCommonInfo.librarians[librarianCommonInfo.settingMode].cancel();
                librarianCommonInfo.librarians[librarianCommonInfo.settingMode].observers = [];

                librarianCommonInfo.librariansBass[librarianCommonInfo.settingMode].cancel();
                librarianCommonInfo.librariansBass[librarianCommonInfo.settingMode].observers = [];

                librarianServices.exportInst(
                    function () {
                        for (let i = 0; i < updateCell.length; i++) {
                            let userPatch = $(updateCell[i]);
                            let patch = $(patches[i]);
                            userPatch.children('.patch-name').text(patch.children('.librarian-patch-name-pc').text());
                        }
                        $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu).children('div').remove();
                        $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu + '> label').on('mousedown.librarian', function (e) {
                            _librarianSelectUserPatchEvent(e, $(this));
                        });
                    },
                    function () {
                        $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu + ' .librarian-update-patch-cell-pc').removeClass('librarian-update-patch-cell-pc');
                    }
                );
            } else if (updateCellIndexes.length && toLivesetIndex === fromLivesetIndex && updateCell[0] !== selectCell[0]) { // 同一LIVESET内のPATCH上書き
                OVERWRITE_PATCH_DIALOG.open(
                    function () {
                        if (updateCellIndexes[selectCellIndexes.length - 1] >= librarianCommonInfo.maxPatchNum) {
                            $('.librarian-patch-table-pc').scrollLeft(0);
                            ERROR_DIALOG_MAP.libraryFull.open();
                            updateCell.removeClass('librarian-update-patch-cell-pc');
                            return;
                        }
                        let copyLiveset = librarianServices.copyLiveset(fromLivesetCell);
                        for (let i = 0, len = selectCellIndexes.length; i < len; i++) {
                            let currentPatchIndex = updateCellIndexes[i];
                            let copiedSelectPatch = librarianServices.copyPatch(copyLiveset.cell(librarianCommonInfo.settingMode, selectCellIndexes[i]));
                            if (currentPatchIndex > -1) {
                                toCell[librarianCommonInfo.settingMode][currentPatchIndex] = copiedSelectPatch;
                            } else {
                                toCell[librarianCommonInfo.settingMode].push(copiedSelectPatch);
                            }
                        }
                        completeFunc();
                    },
                    function () {
                        updateCell.removeClass('librarian-update-patch-cell-pc');
                    },
                    librarianCommonInfo.confirmOverwrite
                );
            } else if (placeholderIndex !== undefined && toLivesetIndex === fromLivesetIndex) { // 同一LIVESET内のPATCH並び替え
                let copyLiveset = librarianServices.copyLiveset(fromLivesetCell);
                let indexArray = $(this).sortable("toArray", { attribute: "value" });
                for (let i = 0, len = indexArray.length; i < len; i++) {
                    let copyPatch = librarianServices.copyPatch(copyLiveset.cell(librarianCommonInfo.settingMode, indexArray[i]));
                    toCell[librarianCommonInfo.settingMode][i] = copyPatch;
                }
                completeFunc();
            } else if (updateCellIndexes.length && toLivesetIndex !== fromLivesetIndex) { // 別のLIVESETに対してのPATCH上書き
                OVERWRITE_PATCH_DIALOG.open(
                    function () {
                        if (updateCellIndexes[selectCellIndexes.length - 1] >= librarianCommonInfo.maxPatchNum) {
                            $('.librarian-patch-table-pc').scrollLeft(0);
                            ERROR_DIALOG_MAP.libraryFull.open();
                            updateCell.removeClass('librarian-update-patch-cell-pc');
                            return;
                        }
                        for (let i = 0, len = selectCellIndexes.length; i < len; i++) {
                            let currentPatchIndex = updateCellIndexes[i];
                            let copiedSelectPatch = librarianServices.copyPatch(fromLivesetCell.cell(librarianCommonInfo.settingMode, selectCellIndexes[i]));
                            if (currentPatchIndex > -1) {
                                toCell[librarianCommonInfo.settingMode][currentPatchIndex] = copiedSelectPatch;
                            } else {
                                toCell[librarianCommonInfo.settingMode].push(copiedSelectPatch);
                            }
                        }
                        if (selectKeyPressed) {
                            removePatch();
                        }
                        completeFunc();
                    },
                    function () {
                        updateCell.removeClass('librarian-update-patch-cell-pc');
                    },
                    librarianCommonInfo.confirmOverwrite
                );
            } else if (placeholderIndex !== undefined && toLivesetIndex !== fromLivesetIndex) { // 別のLIVSETに対してのPATCH挿入
                if ((toLivesetCell.rows(librarianCommonInfo.settingMode) + selectCellIndexes.length) <= librarianCommonInfo.maxPatchNum) {
                    let patchArray = [];
                    for (let i = placeholderIndex, len = toCell[librarianCommonInfo.settingMode].length; i < len; i++) {
                        let copiedPatch = librarianServices.copyPatch(toLivesetCell.cell(librarianCommonInfo.settingMode, i));
                        patchArray.push(copiedPatch);
                    }
                    for (let k = placeholderIndex, len = placeholderIndex + selectCellIndexes.length; k < len; k++) {
                        let copiedSelectPatch = librarianServices.copyPatch(
                            fromLivesetCell.cell(librarianCommonInfo.settingMode, selectCellIndexes[k - placeholderIndex])
                        );
                        toCell[librarianCommonInfo.settingMode][k] = copiedSelectPatch;
                    }
                    for (let j = 0, len = patchArray.length; j < len; j++) {
                        let patch = patchArray[j];
                        toCell[librarianCommonInfo.settingMode][j + placeholderIndex + selectCellIndexes.length] = patch;
                    }
                    if (selectKeyPressed) {
                        removePatch();
                    }

                } else {
                    $('.librarian-patch-table-pc').scrollLeft(0);
                    ERROR_DIALOG_MAP.libraryFull.open();
                }
                completeFunc();
            }
            $(LIBRARIAN_ELEMENT_CLASSES.patchTable).css('padding', '0px');
        },
        appendTo: LIBRARIAN_ELEMENT_IDS.subPage,
    });
    /** 
     *  User Patchのsortable
     */
    $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu).sortable({
        opacity: 0.8,
        containment: LIBRARIAN_ELEMENT_IDS.subPage,
        delay: 1,
        scroll: true,
        scrollSensitivity: 0,
        connectWith: [LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu, LIBRARIAN_ELEMENT_CLASSES.patchTable],
        tolerance: 'pointer',
        cancel: LIBRARIAN_ELEMENT_CLASSES.livesetInfoBlock,
        over: function (e, ui) {
            if (ui.placeholder) {
                ui.item.data('sortableItem').scrollParent = $(e.target).parent();
                ui.item.data('sortableItem').overflowOffset = $(e.target).parent().offset();
            }
        },
        helper: function (event, ui) {
            let selectPatches = $(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch).not('input').clone();
            let helperChildren = '';
            for (let i = 0, length = selectPatches.length; i < length; i++) {
                let label = $(selectPatches[i]);
                helperChildren += '<div class="librarian-user-patch-helper-child">';
                helperChildren += '<div class="user-patch-helper-num">';
                helperChildren += label.children('.patch-prefix').html()
                helperChildren += '</div>';
                helperChildren += '<div class="user-patch-helper-title">';
                helperChildren += label.children('.patch-name').html();
                helperChildren += '</div>';
                helperChildren += '</div>';
            }
            return $('<div class="librarian-user-patch-helper">').removeAttr('style').append(helperChildren);
        },
        placeholder: {
            element: function () {
                return $('<div>').attr('class', 'ui-sortable-placeholder sortable-placeholder-pc');
            },
            update: function () {
                return;
            }
        },
        start: function (event, ui) {
            ui.item.css('display', 'block');
            ui.item.multiple = $(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch).not('input');
            let patchCells = ui.item.parent().children().not('.sortable-placeholder-pc').not('input');
            selectCellIndexes = [];
            for (let i = 0, len = patchCells.length; i < len; i++) {
                if ($(patchCells[i]).hasClass(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch.slice(1))) {
                    selectCellIndexes.push(i);
                }
            }
            original = ui.item.clone();
            before = $(ui.item).prev('input');
            parent = $(ui.item).parent();
        },
        sort: function (event, ui) {
            let patchTable = ui.placeholder.parents(LIBRARIAN_ELEMENT_CLASSES.patchTable);
            if (ui.position.top >= patchTable.height() - 40) {
                patchTable.css('padding-bottom', '38px');
            }
            updateCellIndexes = [];
            placeholderIndex = ui.placeholder.index();
            let beforeCell = ui.placeholder.prev();
            let afterCell = ui.placeholder.next();
            let helper = ui.helper;
            let updatePatchCell = null;
            let index = 0;
            let overlapHeight = UPDATE_PATCH_OVERLAP_HEIGHT;
            let overlapResult = _overlapPatchCell(beforeCell, afterCell, helper, overlapHeight);
            updatePatchCell = overlapResult.updatePatchCell;
            index = overlapResult.index;
            $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell).removeClass('librarian-update-patch-cell-pc');
            if (updatePatchCell !== null && helper.offset() !== undefined) {
                let overlapUpdatePatch = Math.abs(updatePatchCell.offset().top - helper.offset().top);
                let parentId = updatePatchCell.parent().attr('id');
                if (overlapUpdatePatch < overlapHeight && overlapUpdatePatch > 2 && parentId !== 'user-patch-select-menu') {
                    let cell = updatePatchCell.parent();
                    $('.sortable-placeholder-pc').attr('style', 'border-bottom:0.1px solid #000000;');
                    for (let i = index, length = index + ui.helper.children().length; i < length; i++) {
                        updateCellIndexes.push(i);
                        cell.children().not('.sortable-placeholder-pc').eq(i).addClass('librarian-update-patch-cell-pc');
                    }
                } else {
                    $('.sortable-placeholder-pc').removeAttr('style');
                }
            } else {
                $('.sortable-placeholder-pc').removeAttr('style');
            }
            updatePatchCell = null;
        },
        stop: function (event, ui) {
            toLivesetIndex = ui.item.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
            let assignEventPatches = [];
            let patches = ui.item.multiple;
            let updateCell = $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell);
            $(LIBRARIAN_ELEMENT_CLASSES.updatePatchCell).removeClass('librarian-update-patch-cell-pc');
            if ('#' + ui.item.parent().attr('id') === LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu) {
                ui.item.parent().sortable('cancel');
                return;
            }
            if (updateCell.length) {
                $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu).sortable('cancel');
                OVERWRITE_PATCH_DIALOG.open(
                    function () {
                        let targetLiveset = librarianCommonInfo.livesetList[toLivesetIndex];
                        if ((updateCellIndexes[0] + selectCellIndexes.length) > librarianCommonInfo.maxPatchNum) {
                            selectCellIndexes = selectCellIndexes.slice(0, librarianCommonInfo.maxPatchNum - updateCellIndexes[0]);
                            ERROR_DIALOG_MAP.libraryFull.open();
                            return;
                        }
                        let startIndex = updateCellIndexes[0];
                        let overwrite = targetLiveset.rows(librarianCommonInfo.settingMode) - startIndex;
                        let selectedCellNum = selectCellIndexes.length;
                        librarianServices.importInst(targetLiveset, selectCellIndexes, startIndex, 0,
                            function () { // success func
                                if (overwrite < selectedCellNum) {
                                    let patchArray = [];
                                    for (let i = 0; i < selectedCellNum - overwrite; i++) {
                                        if ((updateCellIndexes[i] + 1) == librarianCommonInfo.maxPatchNum) {
                                            $('.librarian-patch-table-pc').scrollLeft(0);
                                            break;
                                        } else {
                                            let cell = $('<div>');
                                            cell.attr('class', 'librarian-patch-cell-pc ui-sortable-handle');
                                            let userPatchName = $(patches[i]).children('.patch-name').html();
                                            let patchCell = "<div class='librarian-patch-cell-pc ui-sortable-handle'>";
                                            patchCell += "<div class='librarian-serial-num-pc'></div>";
                                            patchCell += "<div class='librarian-patch-name-pc'></div>";
                                            patchCell += "<div class='librarian-edit-patch-btn-pc' title='Edit'></div>";
                                            patchCell += "<input name='librarian-rename-patch-text-pc' ";
                                            patchCell += "class='rename-patch-input-text' maxlength='16' type='text' ";
                                            patchCell += "value='' style='display:none'/>";
                                            patchCell += "<div class='librarian-rename-patch-check-btn-pc' ";
                                            patchCell += "style='display:none'></div>";
                                            patchCell += "<div class='librarian-delete-patch-btn-pc' ";
                                            patchCell += "style='display:none'></div>";
                                            cell.append(patchCell);
                                            patchArray.push($(patchCell));
                                        }
                                    }
                                    let patchElements = $(LIBRARIAN_ELEMENT_IDS.livesetTable).children().eq(toLivesetIndex).find('.librarian-patch-table-pc').children();
                                    let prevElem = patchElements[patchElements.length - 1];
                                    for (let i = 0; i < patchArray.length; i++) {
                                        let patch = $(patchArray[i]);
                                        $(prevElem).after(patch);
                                        _patchCellEventHandler(patch, librarianCommonInfo.patchEditing);
                                    }
                                }
                                let currentLivesetCell = $(LIBRARIAN_ELEMENT_IDS.livesetTable).children().eq(toLivesetIndex);
                                currentLivesetCell.find('.librarian-patch-num-pc').text(targetLiveset.rows(librarianCommonInfo.settingMode));
                                librarianDynamicDOMController.updatePatchTableCell(currentLivesetCell);
                                librarianDynamicDOMController.sortablePatchTableCell(currentLivesetCell);
                            },
                            function () { // error func
                                return;
                            });
                    },
                    function () { },
                    librarianCommonInfo.confirmOverwrite
                );
            } else {
                let targetLiveset = librarianCommonInfo.livesetList[toLivesetIndex];
                let startIndex = placeholderIndex;
                if (targetLiveset.rows(librarianCommonInfo.settingMode) + selectCellIndexes.length <= librarianCommonInfo.maxPatchNum) {
                    librarianServices.importInst(targetLiveset, selectCellIndexes, startIndex, 1,
                        function () {
                            let patchArray = [];
                            for (let i = 0; i < patches.length; i++) {
                                let cell = $('<div>');
                                cell.attr('class', 'librarian-patch-cell-pc ui-sortable-handle');
                                let patchCell = "<div class='librarian-patch-cell-pc ui-sortable-handle'>";
                                patchCell += "<div class='librarian-serial-num-pc'></div>";
                                patchCell += "<div class='librarian-patch-name-pc'></div>";
                                patchCell += "<div class='librarian-edit-patch-btn-pc' title='Edit'></div>";
                                patchCell += "<input name='librarian-rename-patch-text-pc' ";
                                patchCell += "class='rename-patch-input-text'maxlength='16' type='text' ";
                                patchCell += "value='' style='display:none'/>";
                                patchCell += "<div class='librarian-rename-patch-check-btn-pc' ";
                                patchCell += "style='display:none'></div>";
                                patchCell += "<div class='librarian-delete-patch-btn-pc' ";
                                patchCell += "style='display:none'></div>";
                                cell.append(patchCell);
                                patchArray.push($(patchCell));
                            }
                            patchArray.reverse();
                            let patchTable = $(LIBRARIAN_ELEMENT_IDS.livesetTable).children().eq(toLivesetIndex).find(LIBRARIAN_ELEMENT_CLASSES.patchTable);
                            let patchElements = patchTable.children();
                            let insertIndex = startIndex - 1;
                            if (insertIndex > 0) {
                                let prevElem = patchElements[insertIndex];
                                for (let i = 0; i < patchArray.length; i++) {
                                    let patch = $(patchArray[i]);
                                    $(prevElem).after(patch);
                                    _patchCellEventHandler(patch, librarianCommonInfo.patchEditing);
                                }
                            } else {
                                let nextElem = patchElements[0];
                                for (let i = 0; i < patchArray.length; i++) {
                                    let patch = $(patchArray[i]);
                                    if (nextElem !== undefined) {
                                        $(nextElem).before(patch);
                                    } else {
                                        $(patchTable).append(patch);
                                    }
                                    _patchCellEventHandler(patch, librarianCommonInfo.patchEditing);
                                }
                            }
                            let currentLivesetCell = $(LIBRARIAN_ELEMENT_IDS.livesetTable).children().eq(toLivesetIndex);
                            currentLivesetCell.find('.librarian-patch-num-pc').text(targetLiveset.rows(librarianCommonInfo.settingMode));
                            librarianDynamicDOMController.updatePatchTableCell(currentLivesetCell);
                            librarianDynamicDOMController.sortablePatchTableCell(currentLivesetCell);
                        },
                        function () {
                            return;
                        }
                    );
                } else {
                    $('.librarian-patch-table-pc').scrollLeft(0);
                    ERROR_DIALOG_MAP.libraryFull.open();
                }
                $(LIBRARIAN_ELEMENT_IDS.userPatchSelectMenu).sortable('cancel');
                $(original).on('mousedown.librarian', function (e) {
                    _librarianSelectUserPatchEvent(e, $(this));
                });
            }
            $(LIBRARIAN_ELEMENT_CLASSES.patchTable).css('padding', '0px');
        },
        appendTo: LIBRARIAN_ELEMENT_IDS.subPage
    });

    /**
     *  LiveSetのEditボタンhover時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.livesetInfoBlock + ',' + LIBRARIAN_ELEMENT_CLASSES.patchTable).tooltip({
        tooltipClass: "edit-hover"
    });

    /**
     *  LiveSetの名前・Patch数表示エリアを押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.livesetInfoBlock).on(pointer.click, function (e) {
        let className = {
            livesetCell: LIBRARIAN_ELEMENT_CLASSES.livesetTableCell,
            selectCell: LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect
        }
        $(className.selectCell).removeClass(className.selectCell.slice(1));
        $(this).parents(className.livesetCell).addClass(className.selectCell.slice(1));
    });

    /**
     *  LiveSetのEditボタン押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.editLivesetBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        let selectClassName = LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect;
        $(selectClassName).removeClass(selectClassName.slice(1));
        $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).addClass(selectClassName.slice(1));
        let cell = $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
        _changeLivesetCellMode(1, cell);
    });

    /**
     *  LiveSetのRenameボタン押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetCheckBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        let cell = $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
        _changeLivesetCellMode(0, cell);
    });

    /**
     *  LiveSetのDeleteボタン押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.deleteLivesetBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(LIBRARIAN_ELEMENT_CLASSES.patchTable).sortable('enable');
        $(LIBRARIAN_ELEMENT_CLASSES.userPatchTable).sortable('enable');
        $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable('enable');
        popup_open(LIBRARIAN_ELEMENT_IDS.deleteLivesetDialog.slice(1));
        $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).addClass('librarian-target-delete-liveset-pc');
    });

    /**
     *   LiveSetのRename InputTextにフォーカスを当てた時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetInputText).on(pointer.down, function (e) {
        e.stopPropagation();
    });

    /**
     *  LiveSetのRename InputTextにフォーカスを当てた状態でEnterを押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.renameLivesetInputText).on('keydown', function (e) {
        /** Enterキー押下で変更を確定 */
        if (e.keyCode === 13) {
            let cell = $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
            _changeLivesetCellMode(0, cell);
        }
    });

    /**
     *  Patchテーブル内を押下時の処理
     */
    $(LIBRARIAN_ELEMENT_CLASSES.patchTable).on(pointer.click, function () {
        $(LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect).removeClass('librarian-select-liveset-pc');
        let livesetCell = $(this).parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
        livesetCell.addClass('librarian-select-liveset-pc');
    });

    _patchCellEventHandler($(LIBRARIAN_ELEMENT_CLASSES.patchCell), librarianCommonInfo.patchEditing);

    _enabledSortable();
}

/**
 *  PatchCellへのイベント紐づけ
 *  @param {*} patchCell 
 *  @param {*} isPatchEditing 
 */
function _patchCellEventHandler(patchCell, isPatchEditing) {
    patchCell.on(pointer.down, function (e) {
        librarianCommonInfo.lastSelectPatch = $(this).index();
        _selectPatchCell(e, $(this), isPatchEditing);
    });
    patchCell.on(pointer.click, function (e) {
        let targetPatchCell = $(this);
        if (!targetPatchCell.hasClass('editedPatch')) {
            let livesetIndex = targetPatchCell.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
            let currentLiveset = librarianCommonInfo.livesetList[livesetIndex];
            let patchIndex = targetPatchCell.index();
            let currentPatch = currentLiveset.cell(librarianCommonInfo.settingMode, patchIndex);
            let librariansMode = APP_MODE === MODE.GUITAR ? librarianCommonInfo.librarians : librarianCommonInfo.librariansBass;
            let observer = librarianObserver.temporaryWrite(
                function (o) {
                    let targetLibrarian = librariansMode[librarianCommonInfo.settingMode];
                    if (targetLibrarian.config.hasOwnProperty('getPatchStompBoxSet')) {
                        let stompBoxeSet = targetLibrarian.config.getPatchStompBoxSet();
                        for (let n = 0, num = stompBoxeSet.length; n < num; n++) {
                            let prop = stompBoxeSet[n];
                            // 下記は、Temp_patch%stompBoxの各パラメータは 1 byte であることを前提として
                            // コーディングしたため汎用性はないことに注意 
                            let b = Parameter.getblock(targetLibrarian.config.temporarySet[prop]);
                            for (let i = 0, len = currentPatch.paramSet[prop].length; i < len; i++) {
                                let d = currentPatch.paramSet[prop][i];
                                if (d === '00') continue;
                                MIDIController.dt1(b.addr + i, d);
                            }
                        }
                    }
                    util.waitForRQ1Reply(APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS, 4, {
                        error: function () { },
                        success: function () { }
                    });
                },
                function (o) {
                    util.waitForRQ1Reply(APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS, 4, {
                        error: function () { },
                        success: function () { }
                    });
                });
            librariansMode[librarianCommonInfo.settingMode].cancel();
            librariansMode[librarianCommonInfo.settingMode].observers = [];
            librariansMode[librarianCommonInfo.settingMode].addObserver(observer);
            librariansMode[librarianCommonInfo.settingMode].temporaryWrite(currentPatch, 0);
        }
    });
    patchCell.children(LIBRARIAN_ELEMENT_CLASSES.editPatchBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        let cell = $(this).parent();
        _changePatchCellMode(1, cell);
    });
    patchCell.children(LIBRARIAN_ELEMENT_CLASSES.renamePatchCheckBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        let cell = $(this).parent();
        _changePatchCellMode(0, cell);
    });
    patchCell.find(LIBRARIAN_ELEMENT_CLASSES.renamePatchInputText).on(pointer.down, function (e) {
        librarianCommonInfo.patchEditing = false;
        e.stopPropagation();
    });
    patchCell.find(LIBRARIAN_ELEMENT_CLASSES.renamePatchInputText).on('keydown', function (e) {
        if (e.keyCode === 13) {
            let cell = $(this).parent();
            _changePatchCellMode(0, cell);
        }
    });
    patchCell.find(LIBRARIAN_ELEMENT_CLASSES.deletePatchBtn).on(pointer.down, function (e) {
        e.preventDefault();
        e.stopPropagation();
        librarianCommonInfo.editedPatchCell = [$(this).parent()];
        librarianCommonInfo.patchEditing = false;
        popup_open(LIBRARIAN_ELEMENT_IDS.deletePatchDialog.slice(1));
    });
}

/**
 *  LiveSetに含まれるCell選択時の処理
 *  @param {*} event 
 *  @param {*} patchCell 
 *  @param {*} isPatchEditing 
 */
function _selectPatchCell(event, patchCell, isPatchEditing) {
    $(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch).removeClass('librarian-select-user-patch-cell');
    let selectPatchCell = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell);
    if (patchCell.parent().children(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).length !== selectPatchCell.length) {
        _resetSelectPatchCell();
        patchCell.addClass('librarian-select-patch-cell-pc');
    }
    if (event[librarianCommonInfo.disContinuitySelectKey()] && patchCell.parent().hasClass('librarian-patch-table-pc')) {
        if (patchCell.hasClass('librarian-select-patch-cell-pc')) {
            patchCell.removeClass('librarian-select-patch-cell-pc');
        } else {
            patchCell.addClass('librarian-select-patch-cell-pc');
        }
    } else if (event.shiftKey && patchCell.parent().hasClass('librarian-patch-table-pc')) {
        let firstElmIndex = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).first().index() > 0 ? $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).first().index() : 0;
        let lastElmIndex = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).last().index() > 0 ? $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).last().index() : 0;
        let startIndex = 0;
        let endIndex = 0;
        if (firstElmIndex < patchCell.index()) {
            startIndex = firstElmIndex;
            endIndex = patchCell.index() + 1;
        } else {
            startIndex = patchCell.index() < lastElmIndex ? patchCell.index() : 0;
            endIndex = lastElmIndex + 1;
        }
        let table = patchCell.parent();
        $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).removeClass('librarian-select-patch-cell-pc');
        for (let index = startIndex, length = endIndex; index < length; index++) {
            table.children().eq(index).addClass('librarian-select-patch-cell-pc');
        }
    } else if (patchCell.hasClass('librarian-select-patch-cell-pc')) {
        patchCell.on(pointer.up, function (e) {
            let className = LIBRARIAN_ELEMENT_CLASSES.selectPatchCell;
            $(className).removeClass(className.slice(1));
            $(this).addClass(className.slice(1));
            $(this).off(pointer.up);
        });
    } else if (patchCell.parent().hasClass('librarian-patch-table-pc')) {
        _resetSelectPatchCell();
        patchCell.addClass('librarian-select-patch-cell-pc');
    } else if (isPatchEditing) {
        _resetSelectPatchCell();
    }
    $(LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect).removeClass('librarian-select-liveset-pc');
    let livesetCell = patchCell.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell);
    livesetCell.addClass('librarian-select-liveset-pc');
}

/**
 *  LiveSetセルの選択状態の解除
 */
function _resetSelectLivesetCell() {
    $(LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect).removeClass('librarian-select-liveset-pc');
}

/**
 *  Patchセルの選択状態の解除
 */
function _resetSelectPatchCell() {
    $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell).removeClass('librarian-select-patch-cell-pc');
}

/**
 *  Sortableの無効化
 */
function _disabledSortable() {
    $(LIBRARIAN_ELEMENT_CLASSES.patchTable).sortable('disable');
    $(LIBRARIAN_ELEMENT_CLASSES.userPatchTable).sortable('disable');
    $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable('disable');
}

/**
 *  Sortableの有効化
 */
function _enabledSortable() {
    $(LIBRARIAN_ELEMENT_CLASSES.patchTable).sortable('enable');
    $(LIBRARIAN_ELEMENT_CLASSES.userPatchTable).sortable('enable');
    $(LIBRARIAN_ELEMENT_IDS.livesetTable).sortable('enable');
}

/**
 *  Liveset Cell の通常モード、編集モード切替
 *  @param {int} mode 0: normal, 1: edit
 *  @param {*} cell モード切り替える要素
 */
function _changeLivesetCellMode(mode, cell) {
    _resetSelectPatchCell();
    _disabledSortable();
    let cellName = LIBRARIAN_ELEMENT_CLASSES.livesetName;
    let editBtn = LIBRARIAN_ELEMENT_CLASSES.editLivesetBtn;
    let renameInputText = LIBRARIAN_ELEMENT_CLASSES.renameLivesetInputText;
    let checkBtn = LIBRARIAN_ELEMENT_CLASSES.renameLivesetCheckBtn;
    let deleteBtn = LIBRARIAN_ELEMENT_CLASSES.deleteLivesetBtn;
    let livesetIndex = cell.index();
    let currentLiveset = librarianCommonInfo.livesetList[livesetIndex];
    if (mode === 0) {
        let inputText = cell.find(renameInputText).val();
        inputText = util.convert2AsciiOnlyStr(inputText).slice(0, 64);
        if (inputText.trim() == '') {
            return;
        }
        currentLiveset.setTitle(inputText.trim());
        librarianServices.saveToStorage2(currentLiveset);
        cell.find(cellName).text(inputText);
        cell.removeClass('editedLiveset');
        _enabledSortable();
        cell.children(LIBRARIAN_ELEMENT_CLASSES.livesetInfo).show();
        _changeCellStatus(cell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, mode);
        librarianDynamicDOMController.updateLivesetTableCell();
    } else {
        let editedPatchCell = cell.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTable).find('.editedLiveset');
        if (editedPatchCell !== undefined) {
            editedPatchCell.removeClass('editedLiveset');
            editedPatchCell.find(LIBRARIAN_ELEMENT_CLASSES.livesetInfo).show();
            _changeCellStatus(editedPatchCell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, 0);
        }
        cell.addClass('editedLiveset');
        cell.find(LIBRARIAN_ELEMENT_CLASSES.livesetInfo).hide();
        cell.find(renameInputText).val(currentLiveset.title());
        _changeCellStatus(cell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, mode);
    }
}

/**
 *  Patch Cell の通常モード、編集モード切替
 *  @param {int} mode 0: normal, 1: edit
 *  @param {*} cell モード切り替える要素
 */
function _changePatchCellMode(mode, cell) {
    _resetSelectPatchCell();
    _disabledSortable();
    let cellName = LIBRARIAN_ELEMENT_CLASSES.patchName;
    let editBtn = LIBRARIAN_ELEMENT_CLASSES.editPatchBtn;
    let renameInputText = LIBRARIAN_ELEMENT_CLASSES.renamePatchInputText;
    let checkBtn = LIBRARIAN_ELEMENT_CLASSES.renamePatchCheckBtn;
    let deleteBtn = LIBRARIAN_ELEMENT_CLASSES.deletePatchBtn;
    let livesetIndex = cell.parents(LIBRARIAN_ELEMENT_CLASSES.livesetTableCell).index();
    let currentLiveset = librarianCommonInfo.livesetList[livesetIndex];
    let patchIndex = cell.index();
    if (mode === 0) {
        let inputText = cell.children(renameInputText).val();
        inputText = util.convert2AsciiOnlyStr(inputText).slice(0, 16);
        currentLiveset.setValue(librarianCommonInfo.settingMode, patchIndex, 0, inputText);
        librarianServices.saveToStorage2(currentLiveset);
        cell.find(cellName).text(inputText);
        cell.removeClass('editedPatch');
        librarianCommonInfo.patchEditing = false;
        _enabledSortable();
        _changeCellStatus(cell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, mode);
    } else {
        librarianCommonInfo.patchEditing = true;
        let editedLivesetCell = cell.parents(LIBRARIAN_ELEMENT_IDS.livesetTable).find('.editedPatch');
        if (editedLivesetCell.length) {
            _changeCellStatus(editedLivesetCell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, 0);
        }
        cell.addClass('editedPatch');
        cell.children(renameInputText).val(currentLiveset.value(librarianCommonInfo.settingMode, patchIndex, 0).trim());
        _changeCellStatus(cell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, mode);
    }
}

/**
 *  Cellの状態の変更
 *  @param {*} cell 対象のDOM
 *  @param {string} cellName 対象セルの名前要素のid
 *  @param {string} editBtn 対象セルのeditボタンのid
 *  @param {string} renameInputText 対象セルのrename input textのid
 *  @param {string} checkBtn 対象セルのチェックボタンのid
 *  @param {string} deleteBtn 対象セルのdeleteボタンのid
 *  @param {int} mode 0: normal, 1: edit
 */
function _changeCellStatus(cell, cellName, editBtn, renameInputText, checkBtn, deleteBtn, mode) {
    if (mode === 0) {
        cell.find(cellName).show();
        cell.find(editBtn).show();
        cell.find(renameInputText).hide();
        cell.find(checkBtn).hide();
        cell.find(deleteBtn).hide();
    } else {
        cell.find(cellName).hide();
        cell.find(editBtn).hide();
        cell.find(renameInputText).show();
        cell.find(checkBtn).show();
        cell.find(deleteBtn).show();
    }
}

/**
 *  Librarian キーボード押下時のイベント
 *  @param {*} event
 */
function _librarianKeyDownEventHandler(event) {
    event.stopPropagation();
    let selectPatches = $(LIBRARIAN_ELEMENT_CLASSES.selectPatchCell);
    let selectClassName = LIBRARIAN_ELEMENT_CLASSES.selectPatchCell.slice(1);
    let num = 1;
    if (!selectPatches.length) {
        selectPatches = $(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch).not('input');
        selectClassName = LIBRARIAN_ELEMENT_CLASSES.selectUserPatch.slice(1);
        num = 2
    }
    let editMode = librarianCommonInfo.patchEditing;
    if (event.shiftKey) {
        let patchTable = selectPatches.parent();
        let index = librarianCommonInfo.lastSelectPatch ? librarianCommonInfo.lastSelectPatch : null;
        let valid = false;
        let targetIndex = null;
        let prevPatchIndex = null;
        let nextSelectIndex = null;
        let remSelectIndex = index;
        if (event.keyCode === 38 && selectPatches.length > 0) { //↑押下時
            targetIndex = index - num;
            valid = index > -1;
            nextSelectIndex = index - num;
            prevPatchIndex = index + num;
            event.keyCode = 0;
        } else if (event.keyCode === 40 && selectPatches.length > 0) { //↓押下時
            targetIndex = index + num;
            valid = index < (patchTable.children().length);
            nextSelectIndex = index + num;
            prevPatchIndex = index - num;
            event.keyCode = 0;
        }
        if (valid && nextSelectIndex > -1 && nextSelectIndex < patchTable.children().length) {
            librarianCommonInfo.lastSelectPatch = targetIndex;
            let targetPatch = patchTable.children().eq(targetIndex);
            let prevPatch = patchTable.children().eq(prevPatchIndex);
            let nextSelectPatch = null;
            let remSelectPatch = null;
            if (nextSelectIndex !== null && remSelectIndex > -1) {
                nextSelectPatch = patchTable.children().eq(nextSelectIndex);
                remSelectPatch = patchTable.children().eq(remSelectIndex);
            }
            if (nextSelectPatch !== null && nextSelectPatch.hasClass(selectClassName) && !prevPatch.hasClass(selectClassName)) {
                remSelectPatch.removeClass(selectClassName);
            }
            if (targetIndex !== null && !targetPatch.hasClass(selectClassName)) {
                targetPatch.addClass(selectClassName);
            }
        }
    } else if (!editMode && (event.keyCode === 8 || event.keyCode === 46) && selectPatches.length > 0) {
        if (!$(LIBRARIAN_ELEMENT_CLASSES.selectUserPatch).length) {
            let patchArray = [];
            for (let i = 0; i < selectPatches.length; i++) {
                patchArray.push($(selectPatches[i]));
            }
            librarianCommonInfo.editedPatchCell = patchArray;
            popup_open(LIBRARIAN_ELEMENT_IDS.deletePatchDialog.slice(1));
        }
    } else if (event['altKey']) {
        librarianCommonInfo.selectKeyPressed = true;
    }
    return false;
}


/**
 *  LIBRARIAN画面 キーボードから手を離した時のイベント
 *  @param {*} event 
 */
function _librarianKeyUpEventHandler(event) {
    event.stopPropagation();
    if (!event['altKey']) {
        librarianCommonInfo.selectKeyPressed = false;
    }
}

/**
 *  Patchの上書き判定
 *  @param {*} before palceholderの前のcell
 *  @param {*} after palceholderの後のcell
 *  @param {*} helper helper要素
 *  @param {int} overlapHeight overlap判定の高さ
 *  @return {object} updatePatchCell: update対象のcell, index: update対象のcellのindex
 */
function _overlapPatchCell(before, after, helper, overlapHeight) {
    let result = { updatePatchCell: null, index: null };

    if (before.offset() !== undefined && after.offset() !== undefined) {
        let beforeTop = before.offset().top;
        let afterTop = after.offset().top;
        let helperTop = helper.offset().top;

        let beforeCellOverlap = Math.abs(beforeTop - helperTop);
        let afterCellOverlap = Math.abs(afterTop - helperTop);

        if (beforeCellOverlap < afterCellOverlap) {
            result.updatePatchCell = before;
            result.index = before.index();
        } else {
            result.updatePatchCell = after;
            result.index = after.index() - 1;
        }
    } else if (before.offset() !== undefined) {
        result.updatePatchCell = before;
        result.index = before.index();
    } else if (after.offset() !== undefined) {
        result.updatePatchCell = after;
        result.index = after.index() - 1;
    }
    return result;
}

/**
 *  選択されたUSER PATCHに関するイベント
 *  @param {*} userPatchCell 選択されたUserPatch
 *  @return {*}
 */
function _librarianSelectUserPatch(e, userPatchCell) {
    let selectClassName = {
        userPatch: LIBRARIAN_ELEMENT_CLASSES.selectUserPatch,
        patch: LIBRARIAN_ELEMENT_CLASSES.selectPatchCell,
        liveset: LIBRARIAN_ELEMENT_CLASSES.livesetTableCellSelect
    };
    $(selectClassName.patch).removeClass(selectClassName.patch.slice(1));
    $(selectClassName.liveset).removeClass(selectClassName.liveset.slice(1));
    if (event[librarianCommonInfo.disContinuitySelectKey()]) {
        if (userPatchCell.hasClass(selectClassName.userPatch.slice(1))) {
            userPatchCell.removeClass(selectClassName.userPatch.slice(1));
        } else {
            userPatchCell.addClass(selectClassName.userPatch.slice(1));
        }
    } else if (e.shiftKey) {
        userPatchCell.addClass(selectClassName.userPatch.slice(1));
        let firstElmIndex = $(selectClassName.userPatch).first().index() > 0 ? $(selectClassName.userPatch).first().index() : 0;
        let lastElmIndex = $(selectClassName.userPatch).last().index() > 0 ? $(selectClassName.userPatch).last().index() : 0;
        let startIndex = 0;
        let endIndex = 0;
        if (firstElmIndex < userPatchCell.index()) {
            startIndex = firstElmIndex;
            endIndex = userPatchCell.index() + 1;
        } else {
            startIndex = userPatchCell.index() < lastElmIndex ? userPatchCell.index() : 0;
            endIndex = lastElmIndex + 1;
        }
        let table = userPatchCell.parent();
        $(selectClassName.userPatch).removeClass(selectClassName.userPatch.slice(1));
        for (let index = startIndex, length = endIndex; index < length; index++) {
            table.children().eq(index).addClass(selectClassName.userPatch.slice(1));
        }
    } else if (userPatchCell.hasClass(selectClassName.userPatch.slice(1))) {
        userPatchCell.on(pointer.up, function (e) {
            $(selectClassName.userPatch).removeClass(selectClassName.userPatch.slice(1));
            $(this).addClass(selectClassName.userPatch.slice(1));
            $(this).off(pointer.up);
        });
    } else {
        $(selectClassName.userPatch).removeClass(selectClassName.userPatch.slice(1));
        userPatchCell.addClass(selectClassName.userPatch.slice(1));
    }
}

/**
 *  選択されたUSER PATCHに対する処理
 *  @param {*} userPatch 
 */
function _librarianSelectUserPatchEvent(e, userPatch) {
    librarianCommonInfo.lastSelectPatch = userPatch.index();
    _librarianSelectUserPatch(e, userPatch);
}