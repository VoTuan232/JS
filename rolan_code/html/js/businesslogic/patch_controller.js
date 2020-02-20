/* global patchModelController patchDOMController patchMIDIController
ADDRESS_CONST util
midiConnectController
processingController
midiConnectionController
ERROR_DIALOG_MAP
*/

(function () {
    // PRESET系のPATCH数
    var TOTAL_PRESET_PATCH = 200;
    // USER系のPATCH数
    var TOTAL_USER_PATCH = APP_MODE === MODE.GUITAR ? ProductSetting.librarian[0].config.rows : ProductSetting.librarianBass[0].config.rows;
    // PEDAL BOARD系のPATCH数
    // BANK数
    var TOTAL_BANK = 4;
    // PATCH名のデフォルト値
    var INITIAL_USER_PATCH_NAME = 'INIT PATCH';
    var INITIAL_PATCH_PRESET = APP_MODE === MODE.GUITAR ? 'INIT PATCH GTR' : 'INIT PATCH BASS';
    var presetPatchNames = ['DYNAMIC SAW LEAD', 'FAT GR LEAD', '12STR ORCH', 'FB SWEEPERS', 'SLOW AMBIENT', 'HYBRID LEAD', 'TRI-HIGH GAIN C', 'CTL->ALL SEQ', 'WABBLE SEQ CTL1', 'SEQ CTL1 RETRIG.', 'FTL SEQ SAMPLE', 'PITCH SEQ SAMPLE'];
    // 現在選択中のPATCH
    var currentPatchNum = 0;
    // 現在選択中のPATCHの名前
    var currentPatchName = 'INIT PATCH';
    // PRESET系のPATCH名 (NIU)
    // USER系のPATCH名
    var userPatchNames = [];
    // PEDAL BOARD系のPATCH名
    for (var i = 0; i < TOTAL_USER_PATCH; i++) {
        userPatchNames.push(INITIAL_USER_PATCH_NAME);
    }
    let presetlength = presetPatchNames.length;
    for (var i = 0; i < TOTAL_PRESET_PATCH - presetlength; i++) {
        presetPatchNames.push(INITIAL_PATCH_PRESET);
    }

    window.patchWrite = false;

    window.patchModelController = {
        /**
         * 上記クロージャ変数を取得、更新するメソッド群
         */
        // [使用箇所] midi_observe_controller.js
        updateCurrentPatch: function (num) {
            if (num >= 0 && num < TOTAL_PRESET_PATCH + TOTAL_USER_PATCH) {
                currentPatchNum = num;
            }
            controlTypeAndTabInst.setSelectedTypeAndTab(0, 0, null);
        },
        // [使用箇所] midi_observe_controller.js
        updateCurrentPatchName: function (name) {
            currentPatchName = name;
        },
        updateUserPatchNames: function (names) {
            if (names.length === TOTAL_USER_PATCH) {
                userPatchNames = names;
            }
        },
        updatePresetPatchNames: function (names) {
            if (names.length === TOTAL_PRESET_PATCH) {
                presetPatchNames = names;
            }
        },
        updateUserPatchName: function (name, index) {
            if (index < TOTAL_USER_PATCH) {
                userPatchNames[index] = name;
            }
        },
        updatePresetPatchName: function (name, index) {
            if (index < TOTAL_PRESET_PATCH) {
                presetPatchNames[index] = name;
            }
        },
        getPresetPatchNames: function () {
            return presetPatchNames;
        },
        getUserPatchNames: function () {
            return userPatchNames;
        },
        getPatchName: function (i) {
            if (i < TOTAL_USER_PATCH) {
                return userPatchNames[i];
            } else if (i < TOTAL_USER_PATCH + TOTAL_PRESET_PATCH) {
                return presetPatchNames[i - TOTAL_USER_PATCH];
            }
        },
        getCurrentPatchNum: function () {
            return currentPatchNum;
        },
        getCurrentPatchName: function () {
            return currentPatchName;
        },

        // [01-01]などのPATCH名の前に付く表示をPATCH番号から算出
        getPrefix: function (num) {
            var prefixChar = '';
            if (num < TOTAL_USER_PATCH) {
                prefixChar = 'U';
            } else if (num < TOTAL_PRESET_PATCH + TOTAL_USER_PATCH) {
                prefixChar = 'P';
                num -= TOTAL_USER_PATCH;
            } else {
                return '';
            }
            var prevNum = Math.floor(num / TOTAL_BANK) + 1;
            if (prevNum < 10) {
                prevNum = '0' + prevNum;
            }
            var postNum = num % TOTAL_BANK + 1;
            return prefixChar + prevNum + '-' + postNum;
        },
        getCurrentPatchPrefix: function () {
            return this.getPrefix(currentPatchNum);
        },
        numOfUserPatchTotal: function () {
            return TOTAL_USER_PATCH;
        },
    };

    /**
     * 初期表示
     * [使用箇所] index.jsで呼び出し
     */
    window.initializePatch = function () {
        patchDOMController.updatePatchSelectPage();
        patchDOMController.updateCurrentPatchDOM();
    };

    /**
     * イベントリスナーを登録
     * [使用箇所] index.jsで呼び出し
     */
    window.assignPatchEvents = function () {
        window.isClick = false;

        // PRESET系PATCHの変更
        $('#preset-patch-select-menu').on('elf-changed', function (e, v) {
            patchModelController.updateCurrentPatch(TOTAL_USER_PATCH + v);
            patchDOMController.updateCurrentPatchDOM();
            patchMIDIController.updateCurrentPatch(TOTAL_USER_PATCH + v);
        });
        // USER系PATCHの変更
        $('#user-patch-select-menu').on('click', function (e) {
            isClick = true;
        });

        $('#user-patch-select-menu').on('elf-changed', function (e, v) {
            if (isClick) {
                patchMIDIController.updateCurrentPatch(v);
                isClick = false;
            }
            patchModelController.updateCurrentPatch(v);
            patchDOMController.updateCurrentPatchDOM();
        });

        // WRITEボタンMENUの選択でWRITE or CLEARダイアログを開く
        $('#write-select-box-1, #write-select-box-2').on('elf-changed', function (e, v) {
            if (v === 0) {
                patchDOMController.updateWriteDialog();
                popup_open('write-dialog');
            } else if (v === 1) {
                popup_open('write-clear-dialog');
            }
        });
        // WRITEダイアログ内のWRITEボタン押下
        $('#write-btn').on(pointer.click, function (e) {
            e.preventDefault();
            let newName = $('#write-dialog-patch-name').find('input').val();
            let selectedNum = null;
            $('#write-dialog-patch-select-list').find('div').find('a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    selectedNum = index;
                }
            });
            // currentの名前更新のMIDIメッセージ送信
            patchMIDIController.sendPatchName(newName);
            patchMIDIController.requestCurrentPatchName();
            // WRITEコマンド送信
            patchMIDIController.writePatch(selectedNum);
        });
        // CLEARダイアログ内のCLEARボタン押下
        $('#write-clear-btn').on(pointer.click, function (e) {
            e.preventDefault();
            patchMIDIController.clearPatch();
        });
    };

    /**
     * DOM操作に関係する関数を定義
     */
    window.patchDOMController = {
        // PATCH選択画面のPATCH名の更新
        updatePatchSelectPage: function () {
            var presetPatchHTML = '';
            var userPatchHTML = '';
            for (var i = 0; i < TOTAL_PRESET_PATCH; i++) {
                presetPatchHTML += updateEachPatchNameHTML('preset', i + TOTAL_USER_PATCH);
            }
            for (var j = 0; j < TOTAL_USER_PATCH; j++) {
                userPatchHTML += updateEachPatchNameHTML('user', j);
            }
            $('#preset-patch-select-menu').empty().append(presetPatchHTML);
            $('#user-patch-select-menu').empty().append(userPatchHTML);
            function updateEachPatchNameHTML(type, index) {
                var html = '<input type="radio" id="' + type + '-patch-select-menu-' + (index % 250) + '" name="' + type + '-patch-select-menu" value="' + (index % 250) + '">';
                html += '<label for="' + type + '-patch-select-menu-' + (index % 250) + '" class="elf-radio-button-item" msg style="width: 100%; height: 0.4%; line-height: 48px;">';
                html += '<div class="patch-prefix">' + patchModelController.getPrefix(index) + '</div>';
                html += '<div class="patch-name">' + patchModelController.getPatchName(index) + '</div>';
                html += '</label>';
                return html;
            }
            var isLibrarianDisplayed = $('#librarian').css('display') === 'block';
            if (isLibrarianDisplayed) {
                // LIBRARIAN画面以外で処理を走らせないため
                librarianDynamicDOMController.assignUserPatchTableEvent(true);
                // librarianDynamicDOMController.assignPedalBoardPatchTableEvent(true);
            }
        },
        // PATCH選択画面のチェックの更新
        updatePatchSelectPageCheck: function () {
            if (patchModelController.getCurrentPatchNum() < TOTAL_USER_PATCH) {
                $('#user-patch-select-menu').find('input').eq(patchModelController.getCurrentPatchNum()).prop('checked', true);
                $('#preset-patch-select-menu').find('input').prop('checked', false);
            } else if (patchModelController.getCurrentPatchNum() < TOTAL_USER_PATCH + TOTAL_PRESET_PATCH) {
                $('#preset-patch-select-menu').find('input').eq(patchModelController.getCurrentPatchNum() - TOTAL_USER_PATCH).prop('checked', true);
                $('#user-patch-select-menu').find('input').prop('checked', false);
            } else {
                $('#preset-patch-select-menu').find('input').prop('checked', false);
                $('#user-patch-select-menu').find('input').prop('checked', false);
            }
        },
        // EDITORトップ画面のPATCH名の更新
        updateTopPageText: function () {
            var patchSelectBtn = $('#patch-select-btn').find('p');
            var prefixHtml = '';
            if (patchModelController.getCurrentPatchPrefix() != '') {
                prefixHtml = '<div class="prefix"><span>[</span>' + patchModelController.getCurrentPatchPrefix() + '<span>]</span></div>';
            }
            var patchNameDOM = $('<div>').addClass('patch-name').text(patchModelController.getCurrentPatchName());
            patchSelectBtn.html(prefixHtml);
            patchSelectBtn.append(patchNameDOM);
        },
        // WRITEダイアログ内のPATCH名、CURRENT PATCHの更新
        updateWriteDialog: function () {
            var writeDialogInput = $('#write-dialog-patch-name').find('input');
            var writeDialogSelectRows = $('#write-dialog-patch-select-list').find('div').find('a');
            var writeDialogSelector = $('#write-dialog-patch-select');
            var index = currentPatchNum % TOTAL_USER_PATCH;
            writeDialogInput.val(patchModelController.getCurrentPatchName().trim());
            writeDialogSelectRows.attr('checked', false);
            writeDialogSelectRows.eq(index).attr('checked', true);
            var s = writeDialogSelectRows.eq(index).text();
            var v = index;
            setTimeout(function () {
                writeDialogSelector.find('p').text(s);
                writeDialogSelector.trigger('elf-change', v);
            }, 0);
        },
        // CurrentPatchNumber変更時のDOMの更新
        // [使用箇所] midi_observe_controller.js
        updateCurrentPatchDOM: function () {
            this.updatePatchSelectPageCheck();
            this.updateTopPageText();
            this.updateWriteDialog();
        },
        // CurrentPatchName変更時のDOMの更新
        // [使用箇所] midi_observe_controller.js
        updateCurrentPatchNameDOM: function () {
            this.updateTopPageText();
            this.updateWriteDialog();
        },

        changePatchTab: function () {
            let patchSelectTab = $('#patch-list-tab');
            if (patchModelController.getCurrentPatchNum() < TOTAL_USER_PATCH) {
                patchSelectTab.trigger('elf-update', 1);
                patchSelectTab.trigger('elf-change', 1);
            } else if (patchModelController.getCurrentPatchNum() < TOTAL_USER_PATCH + TOTAL_PRESET_PATCH) {
                patchSelectTab.trigger('elf-update', 0);
                patchSelectTab.trigger('elf-change', 0);
            }
        }
    };
    /**
     * MIDI送受信に関係する関数を定義
     */
    window.patchMIDIController = {
        /**
         * PATCH名の取得処理
         * @param successFunc 成功時に呼び出されるコールバック関数
         * @param errorFunc エラー時に呼び出されるコールバック関数
         * @returns {Function} Cancel時の呼び出すべき関数をreturn
         */
        fetchPatchNames: function (successFunc, errorFunc) {
            var userPatchNames = [];
            var presetPatchNames = [];
            let observer = {
                notify: function (bid, start, end) {
                    let targetBid = APP_MODE === MODE.BASS ? ADDRESS_CONST.BID.PATCH_NAME_BASS : ADDRESS_CONST.BID.PATCH_NAME;
                    for (i = 0; i < TOTAL_USER_PATCH + TOTAL_PRESET_PATCH; i++) {
                        let addr = i * 16;
                        let pid = targetBid + '%' + addr;
                        let value = Parameter.value(pid, 16, 0);
                        let size = value.length;
                        let sum = 0;

                        for (let j = 0; j < size; j++) {
                            let position = value.charCodeAt(j);
                            if (position >= 31 && position <= 127) {
                                sum += position;
                            }
                        }
                        if (sum == 0) {
                            value = '';
                        }
                        if (i >= TOTAL_USER_PATCH) {
                            presetPatchNames[i - TOTAL_USER_PATCH] = value ? value.trim() : INITIAL_PATCH_PRESET;
                        } else {
                            if (value) {
                                userPatchNames[i] = value.trim();
                            } else {
                                userPatchNames[i] = INITIAL_USER_PATCH_NAME;
                            }
                        }
                    }
                }
            };
            Parameter.addObserver(observer);

            let clearFunc = midiConnectionController.readEditor([3], function () {
                patchModelController.updateUserPatchNames(userPatchNames);
                patchModelController.updatePresetPatchNames(presetPatchNames);

                patchDOMController.updatePatchSelectPage();
                patchDOMController.updateCurrentPatchDOM();

                Parameter.removeObserver(observer);

                if (successFunc !== undefined && typeof successFunc === 'function') {
                    successFunc(patchModelController.getUserPatchNames());
                }
            }, function () {
                patchModelController.updateUserPatchNames(userPatchNames);
                patchModelController.updatePresetPatchNames(presetPatchNames);

                patchDOMController.updatePatchSelectPage();
                patchDOMController.updateCurrentPatchDOM();

                Parameter.removeObserver(observer);
                if (errorFunc !== undefined && typeof errorFunc === 'function') {
                    errorFunc(patchModelController.getUserPatchNames());
                }
            });

            return function () {
                clearFunc();
                Parameter.removeObserver(observer);
            };
        },

        // CurrentPatchNumberの更新(直後にRQ1で取得)
        updateCurrentPatch: function (v) {
            let address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS;
            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.SELECT_CURRENT_PATCH), this._convert2RawCurrentPatchNum(v));
            MIDIController.rq1(nibble(address), nibble(4));
        },

        // CurrentPatchNameに対するRQ1送信
        requestCurrentPatchName: function () {
            let address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.CURRENT_PATCH_NAME : ADDRESS_CONST.ADDRESS.CURRENT_PATCH_NAME_BASS;
            MIDIController.rq1(nibble(address), nibble(16));
        },

        // CurrentPatchNumber(0 ~ 499)=>INTEGER2x7
        _convert2RawCurrentPatchNum: function (v) {
            let v1 = hex2((v & 0x3f80) >> 7);
            let v2 = hex2((v & 0x007f));
            return v1 + v2;
        },

        // CurrentPatchNameに対するDT1送信
        sendPatchName: function (name) {
            name = util.convert2AsciiOnlyStr(name).slice(0, 16);
            let nameHex = util.convert2NameHex(name);
            let address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.CURRENT_PATCH_NAME : ADDRESS_CONST.ADDRESS.CURRENT_PATCH_NAME_BASS;
            MIDIController.dt1(nibble(address), nameHex);
        },

        writePatch: function (patchNum) {
            patchWrite = true;
            let errorFunc = function () {
                ERROR_DIALOG_MAP.communicationError.open(
                    function () { // CANCEL
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        // }, function () { RETRY
                        patchMIDIController.writePatch(patchNum);
                    });
            };
            let val = this._convert2RawCurrentPatchNum(patchNum);
            processingController.start(function (index) {
                let clearFunc = util.waitForDT1Reply(ADDRESS_CONST.COMMAND.PATCH_WRITE, hex2(val), {
                    isSucceeded: function (msg) {
                        return msg.indexOf(util.convert2AddrStr(ADDRESS_CONST.COMMAND.PATCH_WRITE)) >= 0;
                    },
                    success: function (msg) {
                        processingController.finish(index);
                    },
                    error: function () {
                        processingController.finish(index);
                        errorFunc();
                    }
                });

                return clearFunc;
            });
            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.PATCH_WRITE), val);
        },

        clearPatch: function () {
            let errorFunc = function () {
                ERROR_DIALOG_MAP.communicationError.open(
                    function () { //CANCEL
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                    },
                    function () { //RETRY
                        patchMIDIController.clearPatch();
                    });
            };
            processingController.start(function (index) {
                let clearFunc = util.waitForDT1Reply(ADDRESS_CONST.COMMAND.PATCH_TEMP_CLEAR, hex2(0), {
                    isSucceeded: function (msg) {
                        return msg.indexOf(util.convert2AddrStr(ADDRESS_CONST.COMMAND.PATCH_TEMP_CLEAR)) >= 0;
                    },
                    success: function (msg) {
                        clearFunc = midiConnectionController.readEditor([1, 0], function () {
                            processingController.finish(index);
                        }, function () {
                            processingController.finish(index);
                            errorFunc();
                        });
                    },
                    error: function () {
                        processingController.finish(index);
                        errorFunc();
                    }
                });

                return clearFunc;
            });
        }
    };
})();