/* global
btsDOMController
util ADDRESS_CONST ERROR_DIALOG_MAP
processingController
midiConnectionController midiDOMController
patchMIDIController
stompboxMIDIController
runningModeModelController runningModeDOMController
closeNumpad closeNumpadList
toneCentralController
librarianForceTransition
*/

(function () {
    let MIDI_ELEMENT_IDS = Object.freeze({
        midiConnectDialog: '#device-connect-select-dialog',
        midiConnectRefreshBtn: '#device-connect-select-dialog-refresh-btn',
        midiConnectSelector: '#device-connect-select-dialog-menu-btn',
        midiConnectCancelBtn: '#device-connect-select-dialog-cancel-btn',
        midiConnectOkBtn: '#device-connect-select-dialog-ok-btn',
        disconnectedMidiConnectDialog: '#disconnected-midi-connect-dialog',
        disconnectedMidiConnectRefreshBtn: '#disconnected-midi-connect-dialog-refresh-btn',
        disconnectedMidiConnectSelector: '#disconnected-midi-connect-dialog-selector',
        disconnectedMidiConnectCancelBtn: '#disconnected-midi-connect-dialog-cancel-btn',
        disconnectedMidiConnectOkBtn: '#disconnected-midi-connect-dialog-ok-btn',
        deviceErrMidiConnectDialog: '#device-err-midi-connect-dialog',
        deviceErrMidiConnectRefreshBtn: '#device-err-midi-connect-dialog-refresh',
        deviceErrMidiInputSelector: '#device-err-midi-connect-dialog-midi-in-selector',
        deviceErrMidiOutputSelector: '#device-err-midi-connect-dialog-midi-out-selector',
        deviceErrMidiConnectCancelBtn: '#device-err-midi-connect-dialog-cancel-btn',
        deviceErrMidiConnectOkBtn: '#device-err-midi-connect-dialog-ok-btn',
        connectionErrMidiConnectDialog: '#connection-err-midi-connect-dialog',
        connectionErrMidiConnectRefreshBtn: '#connection-err-midi-connect-dialog-refresh-btn',
        connectionErrMidiConnectSelector: '#connection-err-midi-connect-dialog-selector',
        connectionErrMidiConnectCancelBtn: '#connection-err-midi-connect-dialog-cancel-btn',
        connectionErrMidiConnectOkBtn: '#connection-err-midi-connect-dialog-ok-btn',
        menuMidiRefreshBtn: '#menu-device-setting-device-refresh-btn',
        menuMidiDeviceSelector: '#menu-device-setting-device-select',
        menuMidiInputSelector: '#menu-device-setting-midi-in-select',
        menuMidiOutputSelector: '#menu-device-setting-midi-out-select',
        menuMidiOkBtn: '#menu-device-setting-ok-btn',
        menuMidiRefreshBtnBass: '#menu-device-setting-bass-device-refresh-btn',
        menuMidiDeviceSelectorBass: '#menu-device-setting-bass-device-select',
        menuMidiInputSelectorBass: '#menu-device-setting-bass-midi-in-select',
        menuMidiOutputSelectorBass: '#menu-device-setting-bass-midi-out-select',
        menuMidiOkBtnBass: '#menu-device-setting-bass-ok-btn',
        deviceNotFoundDialog: '#device-not-found-dialog',
        deviceNotFoundDialogRefreshBtn: '#device-not-found-dialog-refresh-btn',
        deviceNotFoundDialogOfflineModeBtn: '#device-not-found-dialog-offline-mode-btn',
        writeSelectBox1: '#write-select-box-1',
        writeSelectBox2: '#write-select-box-2'
    });
    let MIDI_ELEMENT_CLASS_NAMES = Object.freeze({
        midiConnectSelectorOption: '.bts-small-select-list-small-font-style-option'
    });

    let currentMIDI = null;
    let inputs = [];
    let outputs = [];
    let hasInitialized = false;

    window.midiConnectionController = {
        setCurrentMIDI: function (val) {
            currentMIDI = val;
        },
        getCurrentMIDI: function () {
            return currentMIDI;
        },
        setInputs: function (val) {
            inputs = val;
        },
        getInput: function (num) {
            return inputs[num] ? inputs[num] : null;
        },
        getInputs: function () {
            return inputs;
        },
        setOutputs: function (val) {
            outputs = val;
        },
        getOutput: function (num) {
            return outputs[num] ? outputs[num] : null;
        },
        getOutputs: function () {
            return outputs;
        },
        updateHasInitialized: function () {
            hasInitialized = true;
        },
        getHasInitialized: function () {
            return hasInitialized;
        },
        connectMIDI: function (input, output) {
            btsDOMController.openLoading();
            reloadConnectApp();
            let matchedOutput = output;
            if (matchedOutput === undefined) {
                matchedOutput = this._getMatchedOutput(input);
                if (matchedOutput === null) {
                    btsDOMController.closeLoading();
                    return;
                }
            }
            $native.midi.input.connect(input);
            $native.midi.output.connect(matchedOutput);

            util.writeStorage('input', input);
            util.writeStorage('output', matchedOutput);
            // MIDI通信処理START
            this.startCommunication(function () {
                midiConnectionController.setCurrentMIDI(input);
                midiDOMController.updateCurrentMIDI();
                if (ProductSetting.communicationLevel < COM_LEV_04H) {
                    if (APP_MODE === MODE.GUITAR) {
                        MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR), nibble(4));
                    } else {
                        MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS), nibble(4));
                    }
                } else {
                    util.waitForRQ1Reply(ADDRESS_CONST.COMMAND.MODE_SETTING, nibble(4), { // get control mode status
                        success: function (msg) {
                            let value = parseInt(msg.slice(0, 2));
                            window.lastControlMode = value;
                            if (APP_MODE === MODE.GUITAR) {
                                MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR), nibble(4));
                            } else {
                                MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS), nibble(4));
                            }
                        },
                        error: function () {
                            if (APP_MODE === MODE.GUITAR) {
                                MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR), nibble(4));
                            } else {
                                MIDIController.rq1(nibble(ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS), nibble(4));
                            }
                        }
                    });
                }
            });
        },

        disconnectMIDI: function () {
            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
            setTimeout(() => {
                $native.midi.input.disconnect();
                $native.midi.output.disconnect();
                this.setCurrentMIDI(null);

                util.writeStorage('input', null);
                util.writeStorage('output', null);

                midiDOMController.updateCurrentMIDI();
            }, 100);
        },
        startCommunication: function (finishFunc) {
            let runningModeObserver = {
                success: function (msg) {
                    btsDOMController.closeLoading();
                    finishFunc();
                    runningModeModelController.setCurrentRunningMode(parseInt(msg, 16));
                    runningModeDOMController.transitPageByRunningMode(parseInt(msg, 16));
                },
                error: function () {
                    MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                    communicationErrorFunc();
                }
            };
            let editorCommunicationRevisionObserver = {
                success: function (msg) {
                    if (parseInt(msg) < ProductSetting.communicationRevision) {
                        // アプリのリビジョンが上の場合
                        /**
                         * コンバート処理
                         */
                    }
                    patchMIDIController.fetchPatchNames(function () {
                        midiConnectionController.readEditor([2], function () {
                            util.waitForRQ1Reply(ADDRESS_CONST.COMMAND.RUNNING_MODE, ADDRESS_CONST.SIZE.RUNNING_MODE, runningModeObserver);
                        }, function () {
                            MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                            communicationErrorFunc();
                        });
                    }, function () {
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                        communicationErrorFunc();
                    });
                },
                error: function () {
                    MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                    communicationErrorFunc();
                }
            };

            let getModeSetting = {
                success: function (msg) {
                    let value = parseInt(msg);
                    editorCommonController.editorLoad(value);
                    util.waitForRQ1Reply(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_REVISION, ADDRESS_CONST.SIZE.EDITOR_COMMUNICATION_REVISION, editorCommunicationRevisionObserver);
                },
                error: function () {
                    MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                    communicationErrorFunc();
                }
            };

            let editorCommunicationLevelObserver = {
                success: function (msg) {
                    // Update application version display
                    window.offLineModeFlg = false;
                    appVersionUpdateLabel();
                    if (parseInt(msg) === ProductSetting.communicationLevel) {
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.ON));
                        util.waitForRQ1Reply(ADDRESS_CONST.COMMAND.MODE_SETTING, ADDRESS_CONST.SIZE.MODE_SETTING, getModeSetting);
                    } else if (parseInt(msg) < ProductSetting.communicationLevel) {
                        midiConnectionController.disconnectMIDI();
                        ERROR_DIALOG_MAP.oldVersionOfInstrument.open(function () {
                            ERROR_DIALOG_MAP.offLineMode.open(function () {
                                editorCommonController.offLineMode();
                                window.offLineModeFlg = true;
                                appVersionUpdateLabel();
                            });
                        });
                        btsDOMController.closeLoading();
                    } else if (parseInt(msg) > ProductSetting.communicationLevel) {
                        midiConnectionController.disconnectMIDI();
                        ERROR_DIALOG_MAP.oldVersionOfBTS.open(function () {
                            ERROR_DIALOG_MAP.offLineMode.open(function () {
                                editorCommonController.offLineMode();
                                window.offLineModeFlg = true;
                                appVersionUpdateLabel();
                            });
                        });
                        btsDOMController.closeLoading();
                    }
                },
                error: function () {
                    MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                    communicationErrorFunc();
                }
            };

            let identityRequestObserver = {
                isSucceeded: function (msg) {
                    let partOfIdentityReply = ADDRESS_CONST.PART_OF_IDENTITY_REPLY;
                    return (
                        msg.slice(0, 4) === partOfIdentityReply.slice(0, 4) &&
                        msg.slice(6, 16) === partOfIdentityReply.slice(6, 16)
                    );
                },
                success: function (msg) {
                    ProductSetting.deviceId = msg.slice(4, 6);
                    util.waitForRQ1Reply(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_LEVEL, ADDRESS_CONST.SIZE.EDITOR_COMMUNICATION_LEVEL, editorCommunicationLevelObserver);
                },
                error: function () {
                    midiConnectionController.disconnectMIDI();
                    ERROR_DIALOG_MAP.wrongDeviceError.open(function () {
                        ERROR_DIALOG_MAP.offLineMode.open(function () {
                            editorCommonController.offLineMode();
                            window.offLineModeFlg = true;
                            appVersionUpdateLabel();
                        });
                    }, function () {
                        midiConnectionController.connectCheckedEndpoint(MIDI_ELEMENT_IDS.deviceErrMidiInputSelector, MIDI_ELEMENT_IDS.deviceErrMidiConnectDialog, MIDI_ELEMENT_IDS.deviceErrMidiOutputSelector);
                    });
                    btsDOMController.closeLoading();
                }
            };

            let communicationErrorFunc = function () {
                ERROR_DIALOG_MAP.communicationError.open(
                    function () { //CANCEL
                        midiConnectionController.disconnectMIDI();
                        editorCommonController.offLineMode();
                        window.offLineModeFlg = true;
                        appVersionUpdateLabel();
                    }, function () { //RETRY
                        btsDOMController.openLoading();
                        util.waitForMIDIMsgReply(ADDRESS_CONST.IDENTITY_REQUEST, identityRequestObserver);
                    });
                btsDOMController.closeLoading();
            };

            btsDOMController.openLoading();
            util.waitForMIDIMsgReply(ADDRESS_CONST.IDENTITY_REQUEST, identityRequestObserver);

        },

        readEditor: function (indexes, completeFunc, errorFunc, delayTime) {
            let editors = [];
            let observers = [];
            let completedNum = 0;
            let errorNum = 0;

            for (let i = 0; i < indexes.length; i++) {
                let editor = APP_MODE === MODE.GUITAR ? new Editor(ProductSetting.editor[indexes[i]].config) : new Editor(ProductSetting.editorBass[indexes[i]].config)
                editors.push(editor);
            }
            for (let j = 0; j < indexes.length; j++) {
                observers.push({
                    index: j,
                    notify: function (msg, arg) {
                        if (arg === 'end') {
                            completedNum += 1;
                            editors[this.index].removeObserver(observers[this.index]);
                            if (this.index + 1 < indexes.length) {
                                editors[this.index + 1].read();
                                editors[this.index + 1].addObserver(observers[this.index + 1]);
                            }
                            if (completedNum === indexes.length) {
                                if (completeFunc !== undefined && typeof completeFunc === 'function') {
                                    completeFunc();
                                }
                            } else if (completedNum + errorNum === indexes.length) {
                                if (errorFunc !== undefined && typeof errorFunc === 'function') {
                                    errorFunc();
                                }
                            }
                        } else if (msg === 'editor_cancel' || arg === 'timeout') {
                            errorNum += 1;
                            editors[this.index].removeObserver(observers[this.index]);
                            if (this.index + 1 < indexes.length) {
                                editors[this.index + 1].read();
                                editors[this.index + 1].addObserver(observers[this.index + 1]);
                            }
                            if (completedNum + errorNum === indexes.length) {
                                if (errorFunc !== undefined && typeof errorFunc === 'function') {
                                    errorFunc();
                                }
                            }
                        } else {
                            // debug log
                            // console.log(this.index, msg, arg);
                        }
                    }
                });
            }
            if (delayTime !== undefined) {
                setTimeout(function () {
                    editors[0].read();
                    editors[0].addObserver(observers[0]);
                }, delayTime);
            } else {
                editors[0].read();
                editors[0].addObserver(observers[0]);
            }
            return function () {
                editors.forEach(function (editor, i) {
                    editor.removeObserver(observers[i]);
                });
            };
        },

        startInitSetting: function () {
            midiConnectionController.setInputs($native.midi.input.endpoints());
            midiConnectionController.setOutputs($native.midi.output.endpoints());

            midiDOMController.updateMIDISelector();

            if (midiConnectionController.getInputs().length === 0 || midiConnectionController.getOutputs().length === 0) {
                popup_open(MIDI_ELEMENT_IDS.deviceNotFoundDialog.slice(1));
                return true;
            }

            /**
             * ストレージに保存されているMIDI情報を取得(ない場合はnull)
             */
            let storedInput = null;
            let storedOutput = null;
            let storage = util.readStorage();
            if (storage.input !== undefined && storage.output !== undefined) {
                storedInput = storage.input;
                storedOutput = storage.output;
            }

            /**
             * ストレージに保存されたMIDIと一致するEndpointsがある場合は接続
             * 見つからない場合、ストレージに保存されていない場合はダイアログを開く
             */
            if (storedInput !== null && storedOutput !== null) {
                let inputs = midiConnectionController.getInputs();
                let outputs = midiConnectionController.getOutputs();
                let matchedInput = null;
                let matchedOutput = null;
                for (let i = 0, l = inputs.length; i < l; i++) {
                    if (inputs[i].MIDIEndpointUIDKey === storedInput.MIDIEndpointUIDKey) {
                        matchedInput = inputs[i];
                        break;
                    }
                }
                for (let i = 0, l = outputs.length; i < l; i++) {
                    if (outputs[i].MIDIEndpointUIDKey === storedOutput.MIDIEndpointUIDKey) {
                        matchedOutput = outputs[i];
                        break;
                    }
                }
                if (matchedInput !== null && matchedOutput !== null) {
                    // Input, Outputどちらも合致するものが見つかった場合
                    btsDOMController.closeConnectingPage();
                    this.connectMIDI(matchedInput, matchedOutput);
                    midiConnectionController.updateHasInitialized();
                } else {
                    // 一致するEndpointsが見当たらない場合
                    midiDOMController.openInitialMIDIConnect();
                }
            } else {
                // ストレージに保存されていない場合
                midiDOMController.openInitialMIDIConnect();
            }
        },

        connectCheckedEndpoint: function (inputSelectorId, dialogId, outputSelectorId) {
            var inputCheckedNum = null;
            var outputCheckedNum = null;
            $(inputSelectorId + ' div a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    inputCheckedNum = index;
                }
            });
            if (outputSelectorId !== undefined) {
                $(outputSelectorId + ' div a').each(function (index, elm) {
                    if ($(elm).attr('checked') === 'checked') {
                        outputCheckedNum = index;
                    }
                });
                if (inputCheckedNum !== null && outputCheckedNum !== null) {
                    var input = midiConnectionController.getInput(inputCheckedNum);
                    var output = midiConnectionController.getOutput(outputCheckedNum);
                    if (input !== null && output !== null) {
                        popup_close(dialogId.slice(1));
                        midiConnectionController.connectMIDI(input, output);
                    }
                }
            } else {
                if (inputCheckedNum !== null) {
                    var input = midiConnectionController.getInput(inputCheckedNum);
                    if (input !== null) {
                        popup_close(dialogId.slice(1));
                        midiConnectionController.connectMIDI(input);
                    }
                }
            }
        },

        refresh: function () {
            /**
             * Endpointを更新
             */
            midiConnectionController.setInputs($native.midi.input.endpoints());
            midiConnectionController.setOutputs($native.midi.output.endpoints());

            midiDOMController.updateMIDISelector();

            /**
             * 初期画面の場合は終了
             */
            if (!midiConnectionController.getHasInitialized()) {
                return;
            }

            /**
             * currentMIDIがnullではなく(接続中と認識している)、一致するNameKeyがない場合はdisconnectedと判断
             */
            let currentMIDI = midiConnectionController.getCurrentMIDI();
            let hasConnected = midiConnectionController.getInputs().some(function (value) {
                return currentMIDI !== null && value.MIDIEntityNameKey === currentMIDI.MIDIEntityNameKey;
            });
            if (currentMIDI !== null && !hasConnected) {
                midiConnectionController.disconnectMIDI();
                midiDOMController.openDisconnectedDialog();
            }

        },

        _getMatchedOutput: function (input) {
            let replacedInputName = input.MIDIEntityNameKey.replace(/^\([\d]+\)$/g, '');
            let outputArray = this.getOutputs();
            for (let i = 0, l = outputArray.length; i < l; i++) {
                if (replacedInputName === outputArray[i].MIDIEntityNameKey) {
                    return outputArray[i];
                }
            }
            return null;
        }
    };

    window.midiDOMController = {
        inputSelectorIds: [
            MIDI_ELEMENT_IDS.midiConnectSelector,
            MIDI_ELEMENT_IDS.disconnectedMidiConnectSelector,
            MIDI_ELEMENT_IDS.deviceErrMidiInputSelector,
            MIDI_ELEMENT_IDS.connectionErrMidiConnectSelector,
            MIDI_ELEMENT_IDS.menuMidiDeviceSelector,
            MIDI_ELEMENT_IDS.menuMidiInputSelector,
            MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass,
            MIDI_ELEMENT_IDS.menuMidiInputSelectorBass
        ],
        outputSelectorIds: [
            MIDI_ELEMENT_IDS.menuMidiOutputSelector,
            MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass,
            MIDI_ELEMENT_IDS.deviceErrMidiOutputSelector
        ],
        okBtnIds: [
            MIDI_ELEMENT_IDS.midiConnectOkBtn,
            MIDI_ELEMENT_IDS.disconnectedMidiConnectOkBtn,
            MIDI_ELEMENT_IDS.deviceErrMidiConnectOkBtn,
            MIDI_ELEMENT_IDS.connectionErrMidiConnectOkBtn
        ],

        openInitialMIDIConnect: function () {
            popup_open(MIDI_ELEMENT_IDS.midiConnectDialog.slice(1));
        },

        updateMIDISelector: function () {
            let inputs = midiConnectionController.getInputs();
            let outputs = midiConnectionController.getOutputs();
            let inputHtml = '';
            inputs.forEach(function (input) {
                inputHtml += ('<a href="#" class="' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption.slice(1) + ' elf-select-list-option-control" msg="">' + input.MIDIEntityNameKey + '</a>');
            });
            let outputHtml = '';
            outputs.forEach(function (output) {
                outputHtml += ('<a href="#" class="' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption.slice(1) + ' elf-select-list-option-control" msg="">' + output.MIDIEntityNameKey + '</a>');
            });
            this.inputSelectorIds.forEach(function (value) {
                $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption).html(inputHtml);
                if (inputs.length > 0) {
                    $(value).removeClass('disabled');
                    if (value !== MIDI_ELEMENT_IDS.menuMidiDeviceSelector && value !== MIDI_ELEMENT_IDS.menuMidiInputSelector) {
                        $(value + ' p').text(inputs[0].MIDIEntityNameKey);
                        $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(0).attr('checked', 'checked');
                    }

                    if (value !== MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass && value !== MIDI_ELEMENT_IDS.menuMidiInputSelectorBass) {
                        $(value + ' p').text(inputs[0].MIDIEntityNameKey);
                        $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(0).attr('checked', 'checked');
                    }
                } else {
                    $(value).addClass('disabled');
                    $(value + ' p').empty();
                }
            });
            this.outputSelectorIds.forEach(function (value) {
                $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption).html(outputHtml);
                if (outputs.length > 0) {
                    $(value).removeClass('disabled');
                    if (value !== MIDI_ELEMENT_IDS.menuMidiOutputSelector) {
                        $(value + ' p').text(outputs[0].MIDIEntityNameKey);
                        $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(0).attr('checked', 'checked');
                    }

                    if (value !== MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass) {
                        $(value + ' p').text(outputs[0].MIDIEntityNameKey);
                        $(value + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(0).attr('checked', 'checked');
                    }
                } else {
                    $(value).addClass('disabled');
                    $(value + ' p').empty();
                }
            });
            this.okBtnIds.forEach(function (value) {
                if (inputs.length > 0) {
                    $(value).removeClass('disabled-blue');
                } else {
                    $(value).addClass('disabled-blue');
                }
            });
            this.updateInitialDialogSelector();
            this.updateMenuPageSelector();
        },

        updateInitialDialogSelector: function () {
            let inputs = midiConnectionController.getInputs();
            let inputHtml = '';
            inputs.forEach(function (input, index) {
                inputHtml += '<input type="radio" name="device-connect-select-dialog-menu-btn" id="device-connect-select-dialog-menu-btn-' + index + '">'
                inputHtml += '<label class="elf-radio-button-item" for="device-connect-select-dialog-menu-btn-' + index + '" style="width: 100%; height: 10%; line-height: 33.6px;">' + input.MIDIEntityNameKey + '</label>';
            });
            $(MIDI_ELEMENT_IDS.midiConnectSelector).html(inputHtml);
            if (inputs.length > 0) {
                $(MIDI_ELEMENT_IDS.midiConnectSelector + ' input').eq(0).prop('checked', true);
            }
        },

        updateMenuPageSelector: function () {
            let currentMIDI = midiConnectionController.getCurrentMIDI();
            let matchedInputIndex = midiConnectionController.getInputs().findIndex(function (input) {
                return currentMIDI !== null && input.MIDIEntityNameKey === currentMIDI.MIDIEntityNameKey;
            });
            if (matchedInputIndex !== -1) {
                let inputName = midiConnectionController.getInput(matchedInputIndex).MIDIEntityNameKey;
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedInputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelector + ' p').text(inputName);

                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedInputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass + ' p').text(inputName);

                $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedInputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ' p').text(inputName);

                $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedInputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ' p').text(inputName);
            } else {
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelector + ' p').text('');

                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass + ' p').text('');

                $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ' p').text('');

                $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ' p').text('');
            }
            let matchedOutputIndex = midiConnectionController.getOutputs().findIndex(function (output) {
                return currentMIDI !== null && output.MIDIEntityNameKey === currentMIDI.MIDIEntityNameKey;
            });
            if (matchedOutputIndex !== -1) {
                let outputName = midiConnectionController.getOutput(matchedOutputIndex).MIDIEntityNameKey;
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedOutputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelector + ' p').text(outputName);

                $(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').eq(matchedOutputIndex).attr('checked', 'checked');
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass + ' p').text(outputName);
            } else {
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelector + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelector + ' p').text('');

                $(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
                $(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass + ' p').text('');
            }

            if (matchedInputIndex === -1 || matchedOutputIndex === -1) {
                $(MIDI_ELEMENT_IDS.menuMidiOkBtn).addClass('disabled-blue');
                $(MIDI_ELEMENT_IDS.menuMidiOkBtnBass).addClass('disabled-blue');
            } else {
                $(MIDI_ELEMENT_IDS.menuMidiOkBtn).removeClass('disabled-blue');
                $(MIDI_ELEMENT_IDS.menuMidiOkBtnBass).removeClass('disabled-blue');
            }
        },

        updateCurrentMIDI: function () {
            let addCheck = function (id, nameKey) {
                $(id + ' p').text(nameKey);
                let selectOptions = $(id + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a');
                for (let i = 0; i < selectOptions.length; i++) {
                    if ($(selectOptions[i]).text() === nameKey) {
                        $(selectOptions[i]).attr('checked', 'checked');
                        break;
                    }
                }
            };
            let removeCheck = function (id) {
                $(id + ' p').text('');
                $(id + ' ' + MIDI_ELEMENT_CLASS_NAMES.midiConnectSelectorOption + ' a').removeAttr('checked');
            };
            let current = midiConnectionController.getCurrentMIDI();
            if (current !== null) {
                addCheck(MIDI_ELEMENT_IDS.menuMidiDeviceSelector, current.MIDIEntityNameKey);
                addCheck(MIDI_ELEMENT_IDS.menuMidiInputSelector, current.MIDIEntityNameKey);
                addCheck(MIDI_ELEMENT_IDS.menuMidiOutputSelector, current.MIDIEntityNameKey);

                addCheck(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass, current.MIDIEntityNameKey);
                addCheck(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass, current.MIDIEntityNameKey);
                addCheck(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass, current.MIDIEntityNameKey);
                // Writeボタンの活性化
                $(MIDI_ELEMENT_IDS.writeSelectBox1 + ', ' + MIDI_ELEMENT_IDS.writeSelectBox2).removeClass('disabled');
            } else {
                removeCheck(MIDI_ELEMENT_IDS.menuMidiDeviceSelector);
                removeCheck(MIDI_ELEMENT_IDS.menuMidiInputSelector);
                removeCheck(MIDI_ELEMENT_IDS.menuMidiOutputSelector);

                removeCheck(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass);
                removeCheck(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass);
                removeCheck(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass);
                // Writeボタンの非活性化
                $(MIDI_ELEMENT_IDS.writeSelectBox1 + ', ' + MIDI_ELEMENT_IDS.writeSelectBox2).addClass('disabled');
            }
        },

        openDisconnectedDialog: function () {
            processingController.allClear();
            closeNumpad();
            closeNumpadList();
            popup_close('write-dialog');
            popup_close('write-clear-dialog');
            popup_close('main-output-setting-dialog');
            popup_close('sub-output-setting-dialog');
            popup_close('stompbox-select');
            popup_close('write-to-stompbox');
            popup_close('ctl-exp');
            popup_close('menu');
            popup_close('menu-bass');
            popup_close('assign');
            popup_close('assign-bass');

            $('#write-select-box-1, #write-select-box-2').addClass('disabled');
            $('.stompbox-select-box-style').addClass('disabled');
            $('#inst-trigger, #inst-bass-trigger').addClass('disabled');

            btsDOMController.closeWritePopupMenu();
            btsDOMController.closeStompBoxPopupMenu();
            toneCentralController.stopYoutubeVideo();
            toneCentralController.stopScMusicPlayer();
            librarianForceTransition();

            ERROR_DIALOG_MAP.disconnectedError.open(function () {
                ERROR_DIALOG_MAP.offLineMode.open(function () {
                    window.offLineModeFlg = true;
                    appVersionUpdateLabel();
                });
            }, function () {
                midiConnectionController.connectCheckedEndpoint(MIDI_ELEMENT_IDS.disconnectedMidiConnectSelector, MIDI_ELEMENT_IDS.disconnectedMidiConnectDialog);
            });
        }
    };

    window.assignMIDIEvent = function () {
        $native.midi.event.changed = function () {
            midiConnectionController.refresh();
        };
        $native.midi.event.error = function () {
            midiConnectionController.disconnectMIDI();
            midiDOMController.openDisconnectedDialog();
        };
        $native.midi.event.connectfailed = function () {
            midiConnectionController.disconnectMIDI();
            ERROR_DIALOG_MAP.midiDeviceConnectionError.open(function () {
                ERROR_DIALOG_MAP.offLineMode.open(function () {
                    editorCommonController.offLineMode();
                    window.offLineModeFlg = true;
                    appVersionUpdateLabel();
                });
            }, function () {
                midiConnectionController.connectCheckedEndpoint(MIDI_ELEMENT_IDS.connectionErrMidiConnectSelector, MIDI_ELEMENT_IDS.connectionErrMidiConnectDialog);
            });
        };
        $native.app.event.command = function (param1, param2) {
            if (param1 === 'exit') {
                MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.EDITOR_COMMUNICATION_MODE), hex2(ADDRESS_CONST.EDITOR_COMMUNICATION_MODE.OFF));
                setTimeout(function () {
                    $native.app.exit();
                }, 500);
            } else if (param1 === 'wakeup') {
                if (currentMIDI !== null) {
                    midiConnectionController.disconnectMIDI();
                    midiDOMController.openDisconnectedDialog();
                }
            }
        };

        /**
         * MIDI RefreshBtns
         */
        var refreshBtns = [
            MIDI_ELEMENT_IDS.midiConnectRefreshBtn,
            MIDI_ELEMENT_IDS.menuMidiRefreshBtn,
            MIDI_ELEMENT_IDS.menuMidiRefreshBtnBass,
            MIDI_ELEMENT_IDS.disconnectedMidiConnectRefreshBtn,
            MIDI_ELEMENT_IDS.deviceErrMidiConnectRefreshBtn,
            MIDI_ELEMENT_IDS.connectionErrMidiConnectRefreshBtn
        ];
        $(refreshBtns.join(',')).on(pointer.click, function (e) {
            e.preventDefault();
            midiConnectionController.refresh();
        });
        /**
         * 初期接続画面
         */
        $(MIDI_ELEMENT_IDS.midiConnectOkBtn).on(pointer.click, function (e) {
            e.preventDefault();
            var selectedNum = null;
            $(MIDI_ELEMENT_IDS.midiConnectSelector + ' input').each(function (index, elm) {
                if ($(elm).prop('checked') === true) {
                    selectedNum = index;
                }
            });
            if (selectedNum !== null) {
                midiConnectionController.disconnectMIDI();
                setTimeout(() => {
                    popup_close(MIDI_ELEMENT_IDS.midiConnectDialog.slice(1));
                    btsDOMController.closeConnectingPage();
                    midiConnectionController.updateHasInitialized();
                    midiConnectionController.connectMIDI(midiConnectionController.getInput(selectedNum));
                }, 100);
            }
        });

        $(MIDI_ELEMENT_IDS.menuMidiDeviceSelector).on('elf-changed', function (e, v) {
            midiConnectionController.disconnectMIDI();
            setTimeout(() => {
                midiConnectionController.connectMIDI(midiConnectionController.getInput(v));
            }, 100);
        });

        $(MIDI_ELEMENT_IDS.menuMidiDeviceSelectorBass).on('elf-changed', function (e, v) {
            midiConnectionController.disconnectMIDI();
            setTimeout(() => {
                midiConnectionController.connectMIDI(midiConnectionController.getInput(v));
            }, 100);
        });

        $(MIDI_ELEMENT_IDS.menuMidiOkBtn).on('click', function (e, v) {
            midiConnectionController.connectCheckedEndpoint(MIDI_ELEMENT_IDS.menuMidiInputSelector, '', MIDI_ELEMENT_IDS.menuMidiOutputSelector);
        });

        $(MIDI_ELEMENT_IDS.menuMidiOkBtnBass).on('click', function (e, v) {
            midiConnectionController.connectCheckedEndpoint(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass, '', MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass);
        });

        $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ', ' + MIDI_ELEMENT_IDS.menuMidiOutputSelector).on('elf-changed', function (e, v) {
            let isInputSelected = false;
            let isOutputSelected = false;
            $(MIDI_ELEMENT_IDS.menuMidiInputSelector + ' a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    isInputSelected = true;
                }
            });
            $(MIDI_ELEMENT_IDS.menuMidiOutputSelector + ' a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    isOutputSelected = true;
                }
            });
            if (isInputSelected && isOutputSelected) {
                $(MIDI_ELEMENT_IDS.menuMidiOkBtn).removeClass('disabled-blue');
            }
        });


        $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ', ' + MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass).on('elf-changed', function (e, v) {
            let isInputSelected = false;
            let isOutputSelected = false;
            $(MIDI_ELEMENT_IDS.menuMidiInputSelectorBass + ' a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    isInputSelected = true;
                }
            });
            $(MIDI_ELEMENT_IDS.menuMidiOutputSelectorBass + ' a').each(function (index, elm) {
                if ($(elm).attr('checked') === 'checked') {
                    isOutputSelected = true;
                }
            });
            if (isInputSelected && isOutputSelected) {
                $(MIDI_ELEMENT_IDS.menuMidiOkBtnBass).removeClass('disabled-blue');
            }
        });

        $(MIDI_ELEMENT_IDS.deviceNotFoundDialogRefreshBtn).on(pointer.click, function (e) {
            midiConnectionController.refresh();
            popup_close(MIDI_ELEMENT_IDS.deviceNotFoundDialog.slice(1));
            midiConnectionController.startInitSetting();
        });

        $(MIDI_ELEMENT_IDS.midiConnectCancelBtn).on(pointer.click, function (e) {
            e.preventDefault();
            popup_close(MIDI_ELEMENT_IDS.midiConnectDialog.slice(1));
            btsDOMController.closeConnectingPage();
            midiConnectionController.updateHasInitialized();
            ERROR_DIALOG_MAP.offLineMode.open(function () {
                editorCommonController.offLineMode();
                window.offLineModeFlg = true;
                appVersionUpdateLabel();
            });
        });
        $(MIDI_ELEMENT_IDS.deviceNotFoundDialogOfflineModeBtn).on(pointer.click, function (e) {
            e.preventDefault();
            popup_close(MIDI_ELEMENT_IDS.deviceNotFoundDialog.slice(1));
            btsDOMController.closeConnectingPage();
            midiConnectionController.updateHasInitialized();
            ERROR_DIALOG_MAP.offLineMode.open(function () {
                window.offLineModeFlg = true;
                appVersionUpdateLabel();
            });
        });
    };
})();
