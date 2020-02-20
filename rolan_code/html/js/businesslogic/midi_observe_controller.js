/* global
ADDRESS_CONST
chainModelController chainMIDIController chainDOMController
tunerMIDIController
runningModeMIDIController
patchModelController patchDOMController patchMIDIController
knobMIDIController
stompboxMIDIController
programMapMIDIController
processingController
midiConnectionController
patchModelController patchDOMController
assignPageDOMController
btsDOMController
closeNumpad closeNumpadList
util
*/

(function () {
    window.startMIDIObservation = function () {
        /**
         * AddressMapに存在しないアドレスの監視(commandなど)
         */
        let temporaryReadCount = 0;
        let temporaryReadCancelFunc = function () { };
        MIDIController.addReceiver({
            receive: function (msg) {
                if (checkAndUpdateParameter(msg, APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.CHAIN : ADDRESS_CONST.ADDRESS.CHAIN_BASS,
                    ADDRESS_CONST.SIZE.CHAIN, function (value) {
                        chainMIDIController.receiveOrderChange(value, RECEIVE_INPUT_CHAIN.CHAIN);
                        chainModelController.turnEditModeOn(false);
                    })) {
                    return;
                };

                if (checkAndUpdateParameter(msg, APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.INPUT_BOX : ADDRESS_CONST.ADDRESS.INPUT_BOX_BASS,
                    ADDRESS_CONST.SIZE.INPUT, function (value) {
                        chainMIDIController.receiveOrderChange(value, RECEIVE_INPUT_CHAIN.INPUT);
                        chainModelController.turnEditModeOn(false);
                    })) {
                    return;
                };

                if (checkAndUpdateParameter(msg, APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.GK_NORMAL_SETTING : ADDRESS_CONST.ADDRESS.GK_NORMAL_SETTING_BASS,
                    ADDRESS_CONST.SIZE.GK_NORMAL_SETTING, function (value) {
                        instControllerMst.receiveSettingGkNormal(value);
                    })) {
                    return;
                }

                if (midiConnectionController.getCurrentMIDI() === null) {
                    return;
                }

                // MIDI 接続処理中は無視するイベント
                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.SELECT_CURRENT_PATCH, ADDRESS_CONST.SIZE.SELECT_CURRENT_PATCH, function (rawVal) {
                    let v1 = (parseInt(rawVal.slice(0, 2), 16) << 7);
                    let v0 = (parseInt(rawVal.slice(2, 4), 16));
                    let v = (v1 | v0);
                    getParamCurrentPatch(v);
                })) {
                    return;
                }

                // MIDI 接続処理中は無視するイベント
                // CurrentPatchNumberコマンド
                if (checkAndUpdateParameter(msg, APP_MODE === MODE.GUITAR ? ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_GUITAR : ADDRESS_CONST.COMMAND.CURRENT_PATCH_NUMBER_BASS, 4, function (rawVal) {
                    let v3 = (parseInt(rawVal.slice(0, 2), 16) << 12);
                    let v2 = (parseInt(rawVal.slice(2, 4), 16) << 8);
                    let v1 = (parseInt(rawVal.slice(4, 6), 16) << 4);
                    let v0 = (parseInt(rawVal.slice(6, 8), 16) << 0);
                    let v = (v3 | v2 | v1 | v0);
                    getParamCurrentPatch(v);
                })) {
                    return;
                }

                // PatchWrite
                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.PATCH_WRITE, ADDRESS_CONST.SIZE.PATCH_WRITE, function () {
                    patchWrite = true;
                    _fetchPatchName();
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.PATCH_INITIALIZE, ADDRESS_CONST.SIZE.PATCH_INITIALIZE, function () {
                    _fetchPatchName();
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.PATCH_INSERT, ADDRESS_CONST.SIZE.PATCH_INSERT, function () {
                    _fetchPatchName();
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.PATCH_EXCHANGE, ADDRESS_CONST.SIZE.PATCH_EXCHANGE, function () {
                    _fetchPatchName();
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.FACTORY_RESET, ADDRESS_CONST.SIZE.FACTORY_RESET, function () {
                    // System, PatchNames
                    processingController.start(function (index) {
                        let clearFunc = midiConnectionController.readEditor([0, 1, 2, 3], function () {
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
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.PRE_DEVICE_ID_CHANGE, ADDRESS_CONST.SIZE.PRE_DEVICE_ID_CHANGE, function (value) {
                    ProductSetting.deviceId = value;
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.RUNNING_MODE, ADDRESS_CONST.SIZE.RUNNING_MODE, function (value) {
                    runningModeMIDIController.receiveRunningMode(parseInt(value, 16));
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.TUNER, ADDRESS_CONST.SIZE.TUNER, function (value) {
                    for (let i = 0; i < 7; i++) {
                        let note = parseInt(value.slice((i * 12), (12 * i) + 2), 16);
                        let pitch = parseInt(value.slice((i * 12) + 2, (12 * i) + 10), 16);
                        let isJustTune = parseInt(value.slice((i * 12) + 10, (12 * i) + 12), 16);
                        if (i === 6) {
                            tunerMIDIController.receiveMonoPitch(pitch, note, isJustTune === 1);
                        } else {
                            tunerMIDIController.receivePolyPitch(pitch, note, i + 1, isJustTune === 1);
                        }
                    }
                })) {
                    return;
                }

                for (let i = 0; i < TOTAL_SELECT_STOMP; i++) {
                    let data = i >= MAX_HEX ? i + MAX_HEX : i;
                    let addr = ADDRESS_CONST.COMMAND.STOMP_BOX_SELECT + data;
                    if (checkAndUpdateParameter(msg, addr, ADDRESS_CONST.SIZE.STOMP_BOX_SELECT, function (value) {
                        stompboxMIDIController.receiveSelectStompbox(i, value);
                    })) {
                        return;
                    }
                }

                if (checkAndUpdateParameter(msg, APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.PATCH_EFCT : ADDRESS_CONST.ADDRESS.PATCH_EFCT_BASS,
                    ADDRESS_CONST.SIZE.PATCH_EFCT, function (value) {
                        updateParameterPatchEfct(value);
                    })) {
                    return;
                }

                // WRITE-VARIATION
                for (let i = 0; i < COMMAND_VARIATION_LIST.length; i++) {
                    if (checkAndUpdateParameter(msg, COMMAND_VARIATION_LIST[i], ADDRESS_CONST.SIZE.VARIATION, function (value) {
                        stompboxMIDIController.receiveWriteToStompbox(i, value);
                    })) {
                        return;
                    }
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.GK_SENS, ADDRESS_CONST.SIZE.GK_SENS, function (value) {
                    for (let i = 0; i < 6; i++) {
                        let sens = parseInt(value.slice(i * 2, i * 2 + 2), 16);
                        menuInputSettingMidi.receiveIndicatorGKSens(i + 1, sens);
                    }
                })) {
                    return;
                }

                if (checkAndUpdateParameter(msg, ADDRESS_CONST.COMMAND.NORMAL_SENS, ADDRESS_CONST.SIZE.NORMAL_SENS, function (value) {
                    for (let i = 0; i < 56; i++) {
                        let sens = parseInt(value.slice(i * 2, i * 2 + 2), 16);
                        menuInputSettingMidi.receiveIndicatorNormalSens(i + 1, sens);
                    }
                })) {
                    return;
                }
            }
        });
        /**
         * AddressMapに存在するアドレスの監視
         */
        Parameter.addObserver({
            notify: function (bid, start, end) {
                let addr;
                let targetBid;
                let pid;
                let value;
                let i = 0;
                let systemCommon = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.SYSTEM_COMMON : ADDRESS_CONST.BID.SYSTEM_COMMON_BASS;
                if (bid === systemCommon) {
                    targetBid = systemCommon;
                    addr = nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MIN);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        $('#bank-extent-min').trigger('elf-update', value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.BANK_EXTENT_MAX);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        $('#bank-extent-max').trigger('elf-update', value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_1);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(0, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_2);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(1, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_3);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(2, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_4);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(3, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_5);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(4, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.KNOB_SETTING_6);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER4x4, 0);
                        knobMIDIController.receiveParameter(5, value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.TUNER_TYPE);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        tunerMIDIController.receiveTabTuner(value);
                    }
                }

                let systemInOut = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.SYSTEM_IN_OUT : ADDRESS_CONST.BID.SYSTEM_IN_OUT_BASS;
                if (bid === systemInOut) {
                    targetBid = systemInOut;
                    addr = nibble(ADDRESS_CONST.ADDRESS.AUDIO_ROUTING);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        menuUsbSettingMidi.receiveAudio(value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.IN_POSITION);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        menuUsbSettingMidi.receiveInPosition(value);
                    }
                    addr = nibble(ADDRESS_CONST.ADDRESS.OUT_POSITION);
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, INTEGER1x7, 0);
                        menuUsbSettingMidi.receiveOutPosition(value);
                    }
                }

                const STR_GK = 'gk';
                const STR_NORMAL = 'normal';
                let systemGKSetting = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.SYSTEM_GK_SETTING : ADDRESS_CONST.BID.SYSTEM_GK_SETTING_BASS;
                for (i = 1; i <= 10; i++) {
                    if (bid === systemGKSetting + '(' + i + ')') {
                        targetBid = systemGKSetting + '(' + i + ')';
                        for (let index = 0; index < 8; index++) {
                            if (start <= index && index < end) {
                                pid = targetBid + '%' + index;
                                value = Parameter.value(pid, INTEGER1x7, 0);
                                menuInputSettingMidi.receiveValueSetting(value, index, i, STR_GK);
                            }
                        }
                    }
                }

                let systemNormalSetting = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.SYSTEM_NORMAL_SETTING : ADDRESS_CONST.BID.SYSTEM_NORMAL_SETTING_BASS;
                for (i = 1; i <= 10; i++) {
                    if (bid === systemNormalSetting + '(' + i + ')') {
                        targetBid = systemNormalSetting + '(' + i + ')';
                        for (let index = 0; index < 8; index++) {
                            if (start <= index && index < end) {
                                pid = targetBid + '%' + index;
                                value = Parameter.value(pid, INTEGER1x7, 0);
                                menuInputSettingMidi.receiveValueSetting(value, index, i, STR_NORMAL);
                            }
                        }
                    }
                }

                let temporary_common = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_COMMON : ADDRESS_CONST.BID.TEMPORARY_COMMON_BASS;

                if (bid === temporary_common) {
                    targetBid = temporary_common;
                    addr = 0;
                    if (start <= addr && addr < end) {
                        pid = targetBid + '%' + addr;
                        value = Parameter.value(pid, 16, 0);
                        let size = value.length;
                        let sum = 0;
                        for (let j = 0; j < size; j++) {
                            let position = value.charCodeAt(j);
                            if (position >= 31 && position <= 127) {
                                sum += position;
                            }
                        }
                        if (sum == 0) {
                            value = 'INIT PATCH';
                        }
                        patchModelController.updateCurrentPatchName(value);
                        patchDOMController.updateCurrentPatchNameDOM();
                    }
                }
                const MENU_MIDI_ADDRESS = {
                    guitar: [ADDRESS_CONST.BID.PCMAP_BANK_1, ADDRESS_CONST.BID.PCMAP_BANK_2, ADDRESS_CONST.BID.PCMAP_BANK_3, ADDRESS_CONST.BID.PCMAP_BANK_4],
                    bass: [ADDRESS_CONST.BID.PCMAP_BASS_BANK_1, ADDRESS_CONST.BID.PCMAP_BASS_BANK_2, ADDRESS_CONST.BID.PCMAP_BASS_BANK_3, ADDRESS_CONST.BID.PCMAP_BASS_BANK_4]
                }
                for (let j = 0; j < 4; j++) {
                    let checkBig = (APP_MODE === MODE.GUITAR) ? bid === MENU_MIDI_ADDRESS.guitar[j] : bid === MENU_MIDI_ADDRESS.bass[j];
                    if (checkBig) {
                        targetBid = (APP_MODE === MODE.GUITAR) ? MENU_MIDI_ADDRESS.guitar[j] : MENU_MIDI_ADDRESS.bass[j];
                        for (i = 0; i < 128; i++) {
                            addr = i * 4;
                            if (start <= addr && addr < end) {
                                pid = targetBid + '%' + addr;
                                value = Parameter.value(pid, INTEGER4x4, 0);
                                programMapMIDIController.receivePatchNum(j, i, value);
                            }
                        }
                    }
                }

                const KEY_MODE_BASS = '-bass';
                let temmpAssign = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_ASSIGN : ADDRESS_CONST.BID.TEMPORARY_ASSIGN_BASS;
                let valMode = APP_MODE === MODE.BASS ? KEY_MODE_BASS : '';
                for (i = 1; i <= 16; i++) {
                    if (bid === temmpAssign + '(' + i + ')') {
                        targetBid = temmpAssign + '(' + i + ')';
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_TARGET);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER4x4, 0);
                            assignPageDOMController.updateTopTargetLabel(i - 1, value, valMode);
                        }
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_TARGET_MIN);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER4x4, 0);
                            assignPageDOMController.updateTopTargetMinMax(i - 1, value, 'min', valMode);
                        }
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_TARGET_MAX);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER4x4, 0);
                            assignPageDOMController.updateTopTargetMinMax(i - 1, value, 'max', valMode);
                        }
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_SOURCE);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER1x7, 0);
                            valueSrcAndMode.setValueSource(value);
                        }
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_MODE);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER1x7, 0);
                            valueSrcAndMode.setToggleMode(value);
                            ctlExpAssignController.updateLabelSource(valMode, i - 1);
                        }
                        addr = nibble(ADDRESS_CONST.ADDRESS.ASSIGN_BANK_MSB);
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER2x4, 0);
                            isAssignTargetMidi.setIsBankMsbOff(value === 0);
                            ctlExpAssignController.updateLabelMidi(valMode, false, i - 1);
                        }
                        if (window.isLoadPatch) {
                            $(`#assign-list-assign${valMode}-${i}-edit-button`).trigger('click');
                            $(`#assign-btn-close${valMode}`).trigger('click');
                        }
                    }
                }

                let temporary_fx = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_FX : ADDRESS_CONST.BID.TEMPORARY_FX_BASS;
                let temporary_inst = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_INST : ADDRESS_CONST.BID.TEMPORARY_INST_BASS;
                let temporary_eq = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.BID.TEMPORARY_EQ : ADDRESS_CONST.BID.TEMPORARY_EQ_BASS;

                for (let h = 1; h <= 3; h++) {
                    if (bid === `${temporary_fx}(${h})%fx`) {
                        targetBid = `${temporary_fx}(${h})%fx`;
                        addr = 0;
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER1x7, 0);
                            effectChainController.receiveSwitch('fx', h, value);
                        }
                    }

                    if (bid === `${temporary_inst}(${h})%inst`) {
                        targetBid = `${temporary_inst}(${h})%inst`;
                        addr = 0;
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER1x7, 0);
                            effectChainController.receiveSwitch('inst', h, value);
                        }
                    }

                    if (bid === `${temporary_eq}(${h})`) {
                        targetBid = `${temporary_eq}(${h})`;
                        addr = 0;
                        if (start <= addr && addr < end) {
                            pid = targetBid + '%' + addr;
                            value = Parameter.value(pid, INTEGER1x7, 0);
                            effectChainController.receiveSwitch('eq', h, value);
                        }
                    }
                }
            }
        });

        // Local Functions
        function checkAndUpdateParameter(msg, address, size, updateFunc) {
            let addressHead = STX + ROLAND + ProductSetting.deviceId + ProductSetting.modelId + DT1 + util.convert2AddrStr(address);
            if (msg.lastIndexOf(addressHead, 0) === 0) {
                let hexString = msg.substr(addressHead.length, size * 2);
                if (addressHead.length + hexString.length + chksum(util.convert2AddrStr(address) + hexString).length + EOX.length === msg.length) {
                    updateFunc(hexString);
                    return true;
                }
            } else {
                return false;
            }
        };

        function chksum(msg) {
            let sum = 0;
            for (let i = 0, len = msg.length; i < len; i += 2) {
                sum += parseInt(msg.substr(i, 2), 16);
            }
            sum = (128 - (sum % 128)) & 0x7f;

            return hex2(sum);
        };

        function _fetchPatchName() {
            processingController.start(function (index) {
                let tempCnt = null;
                let MAX_TEMP_CNT = 40;
                let hasCanceled = false;
                let dt1ClearFunc = null;

                let loop = function () {
                    if (hasCanceled) {
                        return;
                    }
                    if (tempCnt === null) {
                        tempCnt = 0;
                    } else if (tempCnt >= 0) {
                        tempCnt += 1;
                    }

                    dt1ClearFunc = util.waitForDT1Reply(ADDRESS_CONST.COMMAND.IS_RQ1_ACCEPT, hex2(0), {
                        isSucceeded: function (msg) {
                            return msg.indexOf(util.convert2AddrStr(ADDRESS_CONST.COMMAND.IS_RQ1_ACCEPT)) >= 0;
                        },
                        success: function (msg) {
                            if (parseInt(msg.slice(24, 26), 16) === ADDRESS_CONST.IS_RQ1_ACCEPT.FORBID) {
                                if (tempCnt >= MAX_TEMP_CNT) {
                                    return;
                                }
                                setTimeout(function () {
                                    loop();
                                }, 250);
                            } else {
                                patchMIDIController.fetchPatchNames(function () {
                                    processingController.finish(index);
                                }, function () {
                                    processingController.finish(index);
                                });
                            }
                        },
                        error: function () {
                            processingController.finish(index);
                        }
                    });
                };
                let clearFunc = function () {
                    hasCanceled = true;
                    if (typeof dt1ClearFunc === 'function') {
                        dt1ClearFunc();
                    }
                };
                loop();
                return function () {
                    clearFunc();
                };
            });
        };

        function readTemporary(compFunc) {
            let cancelFunc = function () { };
            let hasCanceled = false;
            let tempCnt = null;
            let MAX_TEMP_CNT = 40;
            let loop = function () {
                if (hasCanceled) {
                    return;
                }

                if (tempCnt === null) {
                    tempCnt = 0;
                } else if (tempCnt >= 0) {
                    tempCnt += 1;
                }

                cancelFunc = util.waitForDT1Reply(ADDRESS_CONST.COMMAND.IS_RQ1_ACCEPT, hex2(0), {
                    isSucceeded: function (msg) {
                        return msg.indexOf(util.convert2AddrStr(ADDRESS_CONST.COMMAND.IS_RQ1_ACCEPT)) >= 0;
                    },
                    success: function (msg) {
                        if (parseInt(msg.slice(24, 26), 16) === ADDRESS_CONST.IS_RQ1_ACCEPT.FORBID) {
                            if (tempCnt >= MAX_TEMP_CNT) {
                                return;
                            }
                            setTimeout(function () {
                                loop();
                            }, 250);
                        } else {
                            cancelFunc = midiConnectionController.readEditor([1, 0], function () {
                                if (typeof compFunc === 'function') {
                                    compFunc();
                                }
                            }, function () {
                                if (typeof compFunc === 'function') {
                                    compFunc();
                                }
                            });
                        }
                    },
                    error: function () {
                        if (typeof compFunc === 'function') {
                            compFunc();
                        }
                    }
                });
            };
            loop();
            return function () {
                hasCanceled = true;
                cancelFunc();
            };
        };

        function updateParameterPatchEfct(string) {
            let msgPatchType = string.substr(parseInt(ADDRESS_CONST.ADDRESS.GK_NORMAL_SETTING - ADDRESS_CONST.ADDRESS.PATCH_EFCT) * 2, ADDRESS_CONST.SIZE.GK_NORMAL_SETTING * 2);
            let msgInputBox = string.substr(parseInt(ADDRESS_CONST.ADDRESS.INPUT_BOX - ADDRESS_CONST.ADDRESS.PATCH_EFCT) * 2, ADDRESS_CONST.SIZE.INPUT * 2);
            let msgChainBlock = string.substr(parseInt(ADDRESS_CONST.ADDRESS.CHAIN - ADDRESS_CONST.ADDRESS.PATCH_EFCT) * 2, ADDRESS_CONST.SIZE.CHAIN * 2);

            instControllerMst.receiveSettingGkNormal(msgPatchType);
            chainMIDIController.receiveOrderChange(msgInputBox, RECEIVE_INPUT_CHAIN.INPUT);
            chainMIDIController.receiveOrderChange(msgChainBlock, RECEIVE_INPUT_CHAIN.CHAIN);
        };

        function getParamCurrentPatch(v) {
            window.isLoadPatch = true;
            patchModelController.updateCurrentPatch(parseInt(v));
            patchDOMController.changePatchTab();
            patchDOMController.updateCurrentPatchDOM();
            librarianServices.changeInstPatch(parseInt(v));

            chainModelController.turnEditModeOn(false);
            chainDOMController.resetChainScroll();

            if (v !== window.currentPatchIndex) {
                controlSeqInst.resetTab();
                controlSeqInst.setBlockId('inst1');
                instGuitarController.resetTab();
                instBassController.resetTab();
            }
            window.currentPatchIndex = v;

            closeNumpad();
            closeNumpadList();
            popup_close('write-dialog');
            popup_close('write-clear-dialog');
            popup_close('stompbox-select');
            popup_close('write-to-stompbox');

            btsDOMController.closeWritePopupMenu();
            btsDOMController.closeStompBoxPopupMenu();
            btsDOMController.disableBtnByTemporaryDT1(true);

            patchMIDIController.requestCurrentPatchName();
            if (temporaryReadCount === 0) {
                temporaryReadCount += 1;
            } else {
                temporaryReadCancelFunc();
            }

            let timer = setTimeout(function () {
                temporaryReadCancelFunc = readTemporary(function () {
                    temporaryReadCount -= 1;
                    window.isLoadPatch = false;
                    btsDOMController.disableBtnByTemporaryDT1(false);
                    ctlExpController.controllerFunction();
                    const HEADER_TAB_EDITOR = 0;
                    if (HEADER_TAB !== HEADER_TAB_EDITOR) {
                        MIDIController.dt1(nibble(ADDRESS_CONST.COMMAND.POST_TEMP_PATCH_CHANGE), hex2(0));
                    }
                });
            }, 500);
            temporaryReadCancelFunc = function () {
                clearTimeout(timer);
            }
        }

    };
})();
