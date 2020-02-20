/* global
chainModelController chainDOMController chainMIDIController
effectDOMController
ChainEffector ChainDivider ChainMixer ChainSplitter ChainInput ChainMaster ChainStereoLink
CHAIN_BLOCK_ID_MAP CHAIN_BLOCK_NUM_RELATION CHAIN_DETAIL_PAGE_IDS INITIAL_BLOCK_NUM_ORDER CHAIN_HTML_ID CHAIN_HTML_CLASSNAME
ADDRESS_CONST
*/

(function () {
    let blockModelMap = getInitialBlockModelMap();

    let isEditMode = false;
    let selectedBlock = null;
    let longPressTimer = null;
    let LONG_PRESS_TIME = 500;
    let selectedBlockId = null;
    let hoveredBlockId = null;

    let maxWidth = 0;
    let maxHeight = 0;

    let canDragBlock = true;

    const MAX_INDEX_INPUT = 3;

    const INDEX_IN_BLOCK = {
        splitter1: 28,
        splitter2: 30,
        splitter3: 32,
        divTemp3: 39,
        divTemp2: 38,
        divTemp1: 37,
        master: 36,
        divider: 21,
        mixer: 23,
    };

    const MAX_MIN_INDEX_CHAIN = {
        max: 33,
        min: 4,
    };

    const VALUE_SPLIT_IN_BLOCK = 24;
    const DIFFERENCE_INDEX = 4;

    window.listBlockNumOrder = {
        listOrder: [],
        setListOrder(listOrder) {
            this.listOrder = listOrder;
        },
        getListOrder() {
            return this.listOrder;
        }
    };

    let inputBoxWithValueAndIndex = {
        index: [3, 6, 11, 19],  // default index inital
        value: [0, 1, 2, 3],  // default value inital
        setListIndex(index) {
            this.index = index;
        },
        getListIndex() {
            return this.index;
        },
        setValueListInputBox(value) {
            this.value = value;
        },
        getValueListInputBox() {
            return this.value;
        },
    };

    const INPUT_BOX = [CHAIN_BLOCK_ID_MAP.inst1, CHAIN_BLOCK_ID_MAP.inst2, CHAIN_BLOCK_ID_MAP.inst3, CHAIN_BLOCK_ID_MAP.normal];
    const SPLITTER_CHAIN = [CHAIN_BLOCK_ID_MAP.splitter1, CHAIN_BLOCK_ID_MAP.splitter2, CHAIN_BLOCK_ID_MAP.splitter3, CHAIN_BLOCK_ID_MAP.splitter4];

    window.chainModelController = {
        disableDraggingBlock: function (disabled) {
            canDragBlock = !disabled;
        },

        updateChainBlockNumOrder: function (listNumberOrder) {
            listBlockNumOrder.setListOrder(listNumberOrder);

            let listIndexInputBox = [];
            listNumberOrder.forEach((e) => {
                if (e <= MAX_INDEX_INPUT) {
                    listIndexInputBox.push(listNumberOrder.indexOf(e));
                }
            });

            inputBoxWithValueAndIndex.setListIndex(listIndexInputBox);
            let blockIdOrder = this.convert2ChainBlockIdOrder(listNumberOrder);

            this._resetBlockLine(blockIdOrder);
            let offsetY = this._updateDividerBlock(blockIdOrder);
            this._updateBlockPosition(blockIdOrder, offsetY);
            chainDOMController.updateChain(blockIdOrder);
            this._fixOffsetLeftLineBlockInst();
        },

        _fixOffsetLeftLineBlockInst() {
            $('#line-inst1-1, #line-inst2-1, #line-inst3-1, #line-normal-1').css('left', '270px');
            $('#main-chain-frame-1').css({ left: '-192px' });
        },

        _resetBlockLine: function (blockIdOrder) {
            blockIdOrder.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                blockModel.isLineOn = true;
            });
        },

        _updateDividerBlock: function (blockIdOrder) {
            let dividerIdArray = blockIdOrder.filter(function (blockId) {
                return blockModelMap[blockId].isDivider();
            });
            dividerIdArray.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                blockModel.updateABranchChildIds(blockIdOrder);
                blockModel.updateBBranchChildIds(blockIdOrder);
                blockModel.updateIsNested(blockIdOrder);
                blockModel.updateABranchChildDividerIds();
                blockModel.updateBBranchChildDividerIds();
            });
            dividerIdArray.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                blockModel.updateBranchHeight();
            });
            dividerIdArray.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                blockModel.updateOffsetY();
            });
            dividerIdArray.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                blockModel.resetChildLine();
            });
            return dividerIdArray.reduce(function (acc, current) {
                return Math.max(acc, blockModelMap[current].offsetY);
            }, 0);
        },

        _updateBlockPosition: function (blockIdOrder, offsetY) {
            let currentX = 68;
            let currentY = offsetY;
            let lastDividerX = [];
            let lastSplitterX = [];
            blockIdOrder.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                if (blockModel.isSplitter()) {
                    lastSplitterX.push(currentX);
                    blockModel.x = currentX;
                    blockModel.y = currentY;
                    currentX = lastDividerX[lastDividerX.length - 1] + BLOCK_WIDTH;
                    currentY += (blockModel.divider.aBranchHeight + blockModel.divider.bBranchHeight);
                    if (blockId === CHAIN_BLOCK_ID_MAP.splitter4) {
                        lastDividerX.splice(lastDividerX.length - 1);
                    }

                    if (blockModelMap[CHAIN_BLOCK_ID_MAP.divTemp1].aBranchChildDividerIds.length === 0 &&
                        blockModelMap[CHAIN_BLOCK_ID_MAP.divTemp1].bBranchChildDividerIds.length > 0 && blockId === CHAIN_BLOCK_ID_MAP.splitter3) {
                        currentY += BLOCK_WIDTH;
                    }
                } else if (blockModel.isDivider()) {
                    lastDividerX.push(currentX);
                    blockModel.x = currentX;
                    blockModel.y = currentY;
                    blockModel.updateLines(blockIdOrder);
                    currentX += BLOCK_WIDTH;
                    currentY -= blockModel.aBranchHeight;
                } else if (blockModel.isMixer()) {
                    let splitterX = lastSplitterX.pop();
                    let mixerX = Math.max(splitterX, currentX);
                    blockModel.x = mixerX;
                    blockModel.y = currentY - blockModel.divider.bBranchHeight;
                    blockModel.updateLines(currentX, splitterX, blockIdOrder);
                    currentX = mixerX + BLOCK_WIDTH;
                    currentY -= blockModel.divider.bBranchHeight;
                } else {
                    blockModel.x = currentX;
                    blockModel.y = currentY;
                    if (INPUT_BOX.includes(blockId)) {
                        currentX += BLOCK_WIDTH;
                    }

                    blockModel.updateLines(blockIdOrder);
                    currentX += BLOCK_WIDTH;
                }
            });
        },

        turnEditModeOn: function (isOn) {
            if (isOn === isEditMode) {
                return;
            }
            isEditMode = isOn;
            chainDOMController.turnEditModeOn(isOn);
            if (isOn) {
                let ids = chainDOMController.findLeftEndBlockId();
                if (ids[0] !== undefined) {
                    this.flash(ids[0]);
                }
            } else {
                this.clearFlash();
            }
        },

        move: function (targetId, destinationId) {
            let newBlockNumArray;
            let blockNumOrder = listBlockNumOrder.getListOrder();
            let listIdOrder = this.convert2ChainBlockIdOrder(blockNumOrder);
            let newBlockId;
            let mode;
            if (INPUT_BOX.includes(targetId) && !INPUT_BOX.includes(destinationId)) {
                return;
            } else if (INPUT_BOX.includes(targetId) && INPUT_BOX.includes(destinationId)) {
                let indexTarget = listIdOrder.indexOf(targetId);
                let indexDestination = listIdOrder.indexOf(destinationId);
                let temp = listIdOrder[indexTarget];
                listIdOrder[indexTarget] = listIdOrder[indexDestination];
                listIdOrder[indexDestination] = temp;
                mode = RECEIVE_INPUT_CHAIN.INPUT;

                newBlockId = [...listIdOrder];
            } else {
                newBlockId = blockModelMap[targetId].getNewBlockIdArray(listIdOrder, destinationId);
                mode = RECEIVE_INPUT_CHAIN.CHAIN;
            }
            newBlockNumArray = this.convert2ChainBlockNumOrder(newBlockId);
            this.updateChainBlockNumOrder(newBlockNumArray);
            chainMIDIController.sendOrderChange(newBlockNumArray, mode);
        },

        turnOn: function (id, isTurnedOn) {
            blockModelMap[id].turnOn(isTurnedOn);
        },

        turnStereoOn: function (id, isStereoOn) {
            blockModelMap[id].turnStereoOn(isStereoOn);
            let blockNumOrder = listBlockNumOrder.getListOrder();
            let newBlockIdArray = blockModelMap[id].getStereoLinkedNewBlockIdArray(this.convert2ChainBlockIdOrder(blockNumOrder));
            let newBlockNumArray = this.convert2ChainBlockNumOrder(newBlockIdArray);
            this.updateChainBlockNumOrder(newBlockNumArray);
        },

        selectStompBox: function (id, isStompboxSelected) {
            if (blockModelMap[id].selectStompbox !== undefined) {
                blockModelMap[id].selectStompbox(isStompboxSelected);
            }
        },

        updateMode: function (id, mode) {
            blockModelMap[id].updateMode(mode);
        },

        clearFlash: function () {
            if (selectedBlock !== null) {
                blockModelMap[selectedBlock].toggleIsMoveSource();
                selectedBlock = null;
                chainDOMController.removeFlash();
            }
        },

        flash: function (id) {
            if (!blockModelMap[id].canMove) {
                return;
            }
            blockModelMap[id].toggleIsMoveSource();
            selectedBlock = id;
            chainDOMController.startFlash(id);
        },

        convert2ChainBlockIdOrder: function (blockNumOrder) {
            let tempArray = blockNumOrder.map(function (blockNum) {
                return CHAIN_BLOCK_NUM_RELATION[blockNum];
            })

            return tempArray;
        },

        convert2ChainBlockNumOrder: function (chainBlockIdOrder) {
            let tempArray = chainBlockIdOrder.flatMap(function (blockId) {
                return [CHAIN_BLOCK_NUM_RELATION.indexOf(blockId)];
            });

            return tempArray;
        },

        getIndexNextVisibleChain: function (blockIdArray, currentId) {
            let curIndex = blockIdArray.indexOf(currentId);
            if (curIndex == -1) {
                return curIndex;
            }
            curIndex++;

            return curIndex;
        },

        getIndexPrevVisibleChain: function (blockIdArray, currentId) {
            let curIndex = blockIdArray.indexOf(currentId);
            if (curIndex == -1) {
                return curIndex;
            }
            curIndex--;

            return curIndex;
        },

        getNumberBlockStereOn(blockNum, outModel, outLR, outL, outR, blockNumOrder) {
            let listChainNumber = [...blockNum];
            if (outModel.isStereoOn) {
                let insertPoint = CHAIN_BLOCK_NUM_RELATION.indexOf(outLR);
                let indexStart = blockNumOrder.indexOf(CHAIN_BLOCK_NUM_RELATION.indexOf(outL));
                let indexEnd = blockNumOrder.indexOf(CHAIN_BLOCK_NUM_RELATION.indexOf(outR));
                if (indexStart !== -1) {
                    listChainNumber.splice(indexStart, 1, insertPoint);
                }
                if (indexEnd !== -1) {
                    listChainNumber.splice(indexEnd, 1);
                }
            }

            return listChainNumber;
        },

        controlCursorStart() {
            if ((!initStartUp || !window.offLineModeFlg) && !patchWrite) {
                let topInput = inputBoxWithValueAndIndex.getValueListInputBox()[0];
                let idTop = CHAIN_BLOCK_NUM_RELATION[topInput];
                if (selectedBlockId !== idTop) {
                    $(`#${idTop}`).trigger('click');
                }

                $(CHAIN_HTML_ID.effectSettingPageEffectWrapperFrame).children().hide();
                $(CHAIN_HTML_ID.effectSettingPage).show();
                CHAIN_DETAIL_PAGE_IDS[selectedBlockId].show();
                window.initStartUp = true;
            }
        }
    };

    window.chainDOMController = {
        updateChain: function (blockIdOrder) {
            $(CHAIN_HTML_ID.chain).empty();
            $(CHAIN_HTML_ID.tinyChain).empty();
            blockIdOrder.forEach(function (blockId) {
                let blockModel = blockModelMap[blockId];
                if (chainDOMController.checkCreatDom(blockId)) {
                    $(CHAIN_HTML_ID.chain).append(blockModel.createDOM());
                }
                blockModel.lines.forEach(function (line) {
                    if (chainDOMController.checkCreatDom(blockId)) {
                        $(CHAIN_HTML_ID.chain).append(line.createDOM());
                        $(CHAIN_HTML_ID.tinyChain).append(line.createTinyDOM());
                    }
                });
                if (chainDOMController.checkCreatDom(blockId)) {
                    $(CHAIN_HTML_ID.tinyChain).append(blockModel.createTinyDOM());
                }
            });

            chainDOMController.updateWrapperSize(blockIdOrder);
            chainDOMController.assignBlockClickEvent();
        },
        checkCreatDom(blockId) {
            if (blockId !== CHAIN_BLOCK_ID_MAP.divTemp1 && blockId !== CHAIN_BLOCK_ID_MAP.divTemp2 && blockId !== CHAIN_BLOCK_ID_MAP.divTemp3) {
                return true;
            }
            return false;
        },
        assignBlockClickEvent: function () {
            $(CHAIN_HTML_CLASSNAME.chainBlock).on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                let id = $(this).attr('id');
                if (SPLITTER_CHAIN.includes(id)) return;
                instGuitarController.setCurrentInst(id);
                instBassController.setCurrentInst(id);
                // check mode div single-dual
                if (id === CHAIN_BLOCK_ID_MAP.divider && selectedBlockId === CHAIN_BLOCK_ID_MAP.divider) {
                    let blockNumOrder = listBlockNumOrder.getListOrder();
                    let indexDiv = blockNumOrder.indexOf(INDEX_IN_BLOCK.divider);
                    let indexMix = blockNumOrder.indexOf(INDEX_IN_BLOCK.mixer);
                    let length = indexMix - indexDiv;
                    if (length > 2) {
                        editorDividerMixerController.changeSingleDiv(id);
                    }
                }
                if (selectedBlockId !== id) {
                    blockModelMap[id].select(true);
                    if (selectedBlockId !== null) {
                        blockModelMap[selectedBlockId].select(false);
                    }
                    $(CHAIN_HTML_ID.effectSettingPageEffectWrapperFrame).children().hide();
                    $(CHAIN_HTML_ID.effectSettingPage).show();
                    CHAIN_DETAIL_PAGE_IDS[id].show();
                    selectedBlockId = id;
                } else {
                    blockModelMap[id].toggleOnOff();
                    effectDOMController.turnOn(id, blockModelMap[id].isTurnedOn);
                }
                mainSubFunctionController.showHideDialPhase(id);
                controlSeqInst.setBlockId(id);
            });
            $(CHAIN_HTML_CLASSNAME.chainBlock).on('mouseenter', function () {
                if (hoveredBlockId === null) {
                    hoveredBlockId = $(this).attr('id');
                    blockModelMap[hoveredBlockId].hover(true);
                }
            });
            $(CHAIN_HTML_CLASSNAME.chainBlock).on('mouseleave', function () {
                if (hoveredBlockId !== null) {
                    blockModelMap[hoveredBlockId].hover(false);
                    hoveredBlockId = null;
                }
            });
            $(CHAIN_HTML_CLASSNAME.chainBlock).draggable({
                helper: 'clone',
                opacity: 0.8,
                revert: true,
                scroll: true,
                start: function (event, ui) {
                    let id = $(this).attr('id');
                    chainDOMController.startFlash(id);
                },
                drag: function (event, ui) {
                    let left = ui.position.left;
                    if (left > maxWidth - 48) {
                        ui.position.left = maxWidth - 48;
                    } else if (left < 0) {
                        ui.position.left = 0;
                    }
                    let top = ui.position.top;
                    if (top > maxHeight - 48) {
                        ui.position.top = maxHeight - 48;
                    } else if (top < -2) {
                        ui.position.top = -2;
                    }
                },
                stop: function (event, ui) {
                    chainDOMController.removeFlash();
                }
            });
            $(CHAIN_HTML_CLASSNAME.chainBlock).droppable({
                over: function (event, ui) {
                    let id = $(this).attr('id');
                    if (chainDOMController.hasAlreadyHovered()) {
                        $(CHAIN_HTML_CLASSNAME.flashing).hide();
                    }
                    $('#' + id + '_flash').show();
                },
                out: function (event, ui) {
                    let id = $(this).attr('id');
                    $('#' + id + '_flash').hide();
                    if (hoveredABranchId !== null) {
                        $('#' + hoveredABranchId + '_flash').show();
                    }
                },
                drop: function (event, ui) {
                    let id = $(this).attr('id');
                    if ($('#' + id + '_flash').css('display') === 'block') {
                        chainModelController.move($(ui.draggable).attr('id'), id);
                    }
                }
            });
            let hoveredABranchId = null;
            $('.a-branch-line').droppable({
                over: function (event, ui) {
                    let id = $(this).attr('id').slice(5, 8);
                    if (chainDOMController.hasAlreadyHovered()) {
                        hoveredABranchId = id;
                        return;
                    }
                    $('#' + id + '_flash').show();
                },
                out: function (event, ui) {
                    let id = $(this).attr('id').slice(5, 8);
                    if (hoveredABranchId === id) {
                        hoveredABranchId = null;
                    }
                    $('#' + id + '_flash').hide();
                },
                drop: function (event, ui) {
                    let id = $(this).attr('id').slice(5, 8);
                    if ($('#' + id + '_flash').css('display') === 'block') {
                        chainModelController.move($(ui.draggable).attr('id'), id);
                    }
                }
            });

            $('.b-branch-line, .junction-branch-line').droppable({
                over: function (event, ui) {
                    let id = CHAIN_BLOCK_ID_MAP.splitter4;  // default with div-mix
                    let idDiv = CHAIN_BLOCK_ID_MAP.divider;
                    $('#' + id + '_flash').show();
                    $('#' + idDiv + '_flash').hide();
                },
                out: function (event, ui) {
                    let id = CHAIN_BLOCK_ID_MAP.splitter4;  // default with div-mix
                    $('#' + id + '_flash').hide();
                },
                drop: function (event, ui) {
                    let id = CHAIN_BLOCK_ID_MAP.splitter4;  // default with div-mix
                    if ($('#' + id + '_flash').css('display') === 'block') {
                        chainModelController.move($(ui.draggable).attr('id'), id);
                    }
                }
            });
            $('#' + CHAIN_BLOCK_ID_MAP.divTemp1).droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.divTemp2).droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.divTemp3).droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.master).draggable('disable').droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.splitter1).draggable('disable').droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.splitter2).draggable('disable').droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.splitter3).draggable('disable').droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.splitter4).draggable('disable').droppable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.balancer1).draggable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.balancer2).draggable('disable');
            $('#' + CHAIN_BLOCK_ID_MAP.balancer3).draggable('disable');

            if (!canDragBlock) {
                setTimeout(function () {
                    chainDOMController.disableDraggingBlock(true);
                });
            }
        },
        disableDraggingBlock: function (disabled) {
            $(CHAIN_HTML_CLASSNAME.chainBlock).draggable(disabled ? 'disable' : 'enable');
            if (!disabled) {
                $('#' + CHAIN_BLOCK_ID_MAP.master).draggable('disable');
            }
        },
        startFlash: function (id) {
            let blockNumOrder = listBlockNumOrder.getListOrder();
            let idOrder = chainModelController.convert2ChainBlockIdOrder(blockNumOrder);
            blockModelMap[id].getMovablePositions(idOrder).forEach(function (blockId) {
                let target = $('#' + blockId);
                if (!target.is(':visible')) {
                    return;
                }
                let x = target.css('left').slice(0, -2);
                let y = target.css('top').slice(0, -2);
                let index = idOrder.findIndex(function (value) {
                    return value === blockId;
                });
                if (blockModelMap[blockId].isDivider()) {
                    if (!(idOrder[index + 1] === blockModelMap[blockId].splitter.id && idOrder[index + 2] === blockModelMap[blockId].mixer.id)) {
                        y = parseInt(y) - blockModelMap[blockId].aBranchHeight;
                    }
                }
                if (blockModelMap[blockId].isSplitter()) {
                    x = blockModelMap[blockId].divider.x;
                    y = blockModelMap[blockId].divider.y + blockModelMap[blockId].divider.bBranchHeight;
                }

                if (INPUT_BOX.includes(blockId) && INPUT_BOX.includes(id)) {
                    $(CHAIN_HTML_ID.chain).append(
                        $('<div>')
                            .css('left', parseInt(x) + 24 + 'px')
                            .css('top', y + 'px')
                            .addClass(CHAIN_HTML_CLASSNAME.flashing.slice(1))
                            .attr('id', blockId + '_flash')
                            .css('display', 'none')
                    );
                } else {
                    if (!INPUT_BOX.includes(id)) {
                        $(CHAIN_HTML_ID.chain).append(
                            $('<div>')
                                .css('left', parseInt(x) + (INPUT_BOX.includes(blockId) ? 69 : 24) + 'px')
                                .css('top', y + 'px')
                                .addClass(CHAIN_HTML_CLASSNAME.flashing.slice(1))
                                .attr('id', blockId + '_flash')
                                .css('display', 'none')
                        );
                    }
                }
            });
            $(CHAIN_HTML_CLASSNAME.flashing).on('click', function (e) {
                chainModelController.clearFlash();
                let targetId = $(this).attr('id').slice(0, -6);
                chainModelController.move(id, targetId);
            });
            $(CHAIN_HTML_CLASSNAME.overlay + ', ' + CHAIN_HTML_CLASSNAME.overlayFV + ', ' + CHAIN_HTML_CLASSNAME.overlayDiv).on('touchstart', function (e) {
                chainModelController.clearFlash();
            });
        },
        removeFlash: function () {
            $(CHAIN_HTML_CLASSNAME.flashing).remove();
        },
        findLeftEndBlockId: function () {
            let x = $(CHAIN_HTML_ID.chainParent).scrollLeft();
            return $.makeArray($(CHAIN_HTML_ID.chain + ' ' + CHAIN_HTML_CLASSNAME.chainBlock)).filter(function (dom) {
                return $(dom).hasClass(CHAIN_HTML_CLASSNAME.chainBlock.slice(1)) &&
                    parseInt($(dom).css('left').slice(0, -2)) > x && blockModelMap[$(dom).attr('id')].canMove;
            }).map(function (dom) {
                return $(dom).attr('id');
            });
        },
        updateWrapperSize: function (blockIdOrder) {
            let masterLeft = blockModelMap[CHAIN_BLOCK_ID_MAP.master].x;
            let maxY = blockIdOrder.reduce(function (acc, current) {
                return Math.max(acc, blockModelMap[current].y);
            }, 0);
            $(CHAIN_HTML_ID.chain).css({
                'margin-top': (248 - (maxY + 48)) / 2 + 'px',
                'overflow': 'hidden'
            });
            maxWidth = masterLeft + 48 + 8;
            maxHeight = maxY + 48 + 24;
        },
        turnEditModeOn: function (isOn) {
            if (isOn) {
                $(CHAIN_HTML_ID.editModeBtn).css('background-color', '#33D6FF');
                $(CHAIN_HTML_ID.editModeBtn).css('border', '#33D6FF 1px solid');
            } else {
                $(CHAIN_HTML_ID.editModeBtn).css('background-color', 'transparent');
                $(CHAIN_HTML_ID.editModeBtn).css('border', 'rgba(255, 255, 255, 0.64) 1px solid');
            }
        },
        resetChainScroll: function () {
            $(CHAIN_HTML_ID.chainParent).scrollLeft(0);
        },
        hasAlreadyHovered: function () {
            let hasAlreadyHovered = false;
            $(CHAIN_HTML_CLASSNAME.flashing).each(function (index, element) {
                if ($(element).css('display') === 'block') {
                    hasAlreadyHovered = true;
                }
            });
            return hasAlreadyHovered;
        }
    };

    window.chainMIDIController = {
        convertFromRawOrderValue: function (value, mode) {
            let newBlockIdOrder;
            switch (mode) {
                case RECEIVE_INPUT_CHAIN.CHAIN:
                    let listChain = [];

                    for (let i = 0; i < ADDRESS_CONST.SIZE.CHAIN; i++) {
                        listChain.push(parseInt(value.slice(i * 2, (i + 1) * 2), 16));
                    }

                    newBlockIdOrder = this._changeChainWhenReceiveMsgDevice(listChain);

                    break;
                case RECEIVE_INPUT_CHAIN.INPUT:
                    let listInput = [];

                    for (let i = 0; i < ADDRESS_CONST.SIZE.INPUT; i++) {
                        listInput.push(parseInt(value.slice(i * 2, (i + 1) * 2), 16));
                    }

                    newBlockIdOrder = this._changeInputWhenReceiveMsgDevice(listInput);

                    break;
                default:
                    break;
            }

            return newBlockIdOrder;
        },

        _changeChainWhenReceiveMsgDevice(listChain) {
            let countSplit = 0;

            let listInput = inputBoxWithValueAndIndex.getValueListInputBox();
            let newChain = [];
            listChain.forEach(value => {
                if (value === VALUE_SPLIT_IN_BLOCK) {
                    newChain.push(value + DIFFERENCE_INDEX + countSplit);
                    countSplit++;
                } else {
                    newChain.push(value + DIFFERENCE_INDEX);
                }
            });

            let indexSPL1 = newChain.indexOf(INDEX_IN_BLOCK.splitter1);
            newChain.splice(indexSPL1 + 1, 0, listInput[1]);
            let indexSPL2 = newChain.indexOf(INDEX_IN_BLOCK.splitter2);
            newChain.splice(indexSPL2 + 1, 0, listInput[2]);
            let indexSPL3 = newChain.indexOf(INDEX_IN_BLOCK.splitter3);
            newChain.splice(indexSPL3 + 1, 0, listInput[3]);

            let listFirst = [INDEX_IN_BLOCK.divTemp3, INDEX_IN_BLOCK.divTemp2, INDEX_IN_BLOCK.divTemp1, listInput[0]];
            let listLast = [INDEX_IN_BLOCK.master];

            let blockNum = listFirst.concat(newChain, listLast);
            
            editorDividerMixerController.updateModeChainDivMixAfterWrite();

            return blockNum;
        },

        _changeInputWhenReceiveMsgDevice(listInput) {
            let blockNumOrder = listBlockNumOrder.getListOrder();
            let listIndexInputBox = inputBoxWithValueAndIndex.getListIndex();

            inputBoxWithValueAndIndex.setValueListInputBox(listInput);

            listInput.forEach((value, index) => {
                blockNumOrder[listIndexInputBox[index]] = value;
            });

            chainModelController.controlCursorStart();
            patchWrite = false;
            return blockNumOrder;
        },

        convert2RawOrderValue: function (blockNum, mode) {
            let listChainNumber = [...blockNum]
            let str;
            switch (mode) {
                case RECEIVE_INPUT_CHAIN.CHAIN:
                    let mainOutIndex = listChainNumber.indexOf(CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outMainLR));
                    let subOutIndex = listChainNumber.indexOf(CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outSubLR));
                    if (mainOutIndex !== -1) {
                        listChainNumber.splice(mainOutIndex, 1, CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outMainL), CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outMainR));
                    }
                    if (subOutIndex !== -1) {
                        listChainNumber.splice(subOutIndex, 1, CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outSubL), CHAIN_BLOCK_NUM_RELATION.indexOf(CHAIN_BLOCK_ID_MAP.outSubR));
                    }

                    str = listChainNumber.map(function (num) {
                        if (num >= MAX_MIN_INDEX_CHAIN.min && num <= MAX_MIN_INDEX_CHAIN.max) {
                            if (num >= VALUE_SPLIT_IN_BLOCK + DIFFERENCE_INDEX) {
                                num = VALUE_SPLIT_IN_BLOCK + DIFFERENCE_INDEX;
                            }
                            return hex2(num - DIFFERENCE_INDEX);
                        }
                    }).join('');

                    break;
                case RECEIVE_INPUT_CHAIN.INPUT:
                    str = listChainNumber.map(function (num) {
                        if (num <= MAX_INDEX_INPUT) {
                            return hex2(num);
                        }
                    }).join('');
                    break;
                default:
                    break;
            }

            return str;
        },

        sendOrderChange: function (order, mode) {
            let address;
            switch (mode) {
                case RECEIVE_INPUT_CHAIN.CHAIN:
                    address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.CHAIN : ADDRESS_CONST.ADDRESS.CHAIN_BASS;
                    break;
                case RECEIVE_INPUT_CHAIN.INPUT:
                    address = APP_MODE === MODE.GUITAR ? ADDRESS_CONST.ADDRESS.INPUT_BOX : ADDRESS_CONST.ADDRESS.INPUT_BOX_BASS;
                    break;
                default:
                    break;
            }
            let value = this.convert2RawOrderValue(order, mode);
            MIDIController.dt1(nibble(address), value);
        },

        receiveOrderChange: function (value, mode) {
            let blockNumOrder = this.convertFromRawOrderValue(value, mode);
            let typeMode = APP_MODE === MODE.BASS ? '-bass' : '';
            let msgSubOut = Parameter.value(_items[`sub-out${typeMode}-stereo-link-btn`].pid, INTEGER1x7, 0);
            let msgMainOut = Parameter.value(_items[`main-out${typeMode}-stereo-link-btn`].pid, INTEGER1x7, 0);
            chainModelController.updateChainBlockNumOrder(blockNumOrder);
            $(`#sub-out${typeMode}-stereo-link-btn`).trigger('elf-change', parseInt(msgSubOut));
            $(`#sub-out${typeMode}-stereo-link-btn`).trigger('elf-update', parseInt(msgSubOut));
            $(`#main-out${typeMode}-stereo-link-btn`).trigger('elf-change', parseInt(msgMainOut));
            $(`#main-out${typeMode}-stereo-link-btn`).trigger('elf-update', parseInt(msgMainOut));
        }
    };

    window.initializeChain = function () {
        let tempArray = [...INITIAL_BLOCK_NUM_ORDER];
        let outMainModel = blockModelMap[CHAIN_BLOCK_ID_MAP.outMainLR];
        let outSubModel = blockModelMap[CHAIN_BLOCK_ID_MAP.outSubLR];
        let tempArraySettingOne = chainModelController.getNumberBlockStereOn(tempArray, outMainModel, CHAIN_BLOCK_ID_MAP.outMainLR, CHAIN_BLOCK_ID_MAP.outMainL, CHAIN_BLOCK_ID_MAP.outMainR, INITIAL_BLOCK_NUM_ORDER);
        let tempArraySettingTwo = chainModelController.getNumberBlockStereOn(tempArraySettingOne, outSubModel, CHAIN_BLOCK_ID_MAP.outSubLR, CHAIN_BLOCK_ID_MAP.outSubL, CHAIN_BLOCK_ID_MAP.outSubR, INITIAL_BLOCK_NUM_ORDER);

        chainModelController.updateChainBlockNumOrder(tempArraySettingTwo);
        chainModelController.updateMode(CHAIN_BLOCK_ID_MAP.divider, DIVIDER_MODE_ENUM.singleA);
    };

    window.assignChainEvent = function () {
        $(CHAIN_HTML_ID.effectSettingPageBackBtn).on(pointer.click, function (e) {
            e.preventDefault();
            $(CHAIN_HTML_ID.effectSettingPage).hide();
            $(CHAIN_HTML_ID.effectSettingPageEffectWrapperFrame).children().hide();
        });

        $(CHAIN_HTML_ID.editModeBtn).on(pointer.click, function (e) {
            e.preventDefault();
            chainModelController.turnEditModeOn(!isEditMode);
        });

        let SQUARE_WIDTH = 80;
        let isSquareDragged = false;
        let diff = 0;

        $(CHAIN_HTML_ID.chainSquare).on('touchstart', function (e) {
            let currentSquareX = parseInt($(CHAIN_HTML_ID.chainSquare).css('left').slice(0, -2));
            let parentX = $(CHAIN_HTML_ID.tinyChainParent).scrollLeft();
            let offsetX = e.originalEvent.touches[0].clientX - (window.innerWidth - 320) / 2;
            diff = offsetX + parentX - currentSquareX;
            isSquareDragged = true;
        });

        $(CHAIN_HTML_ID.chainSquare).on('touchmove', function (e) {
            if (isSquareDragged) {
                let parentX = $(CHAIN_HTML_ID.tinyChainParent).scrollLeft();
                let offsetX = e.originalEvent.touches[0].clientX - (window.innerWidth - 320) / 2;
                let squareX = parentX + offsetX - diff;
                if (squareX < 0) {
                    squareX = 0;
                }
                $(CHAIN_HTML_ID.chainParent).scrollLeft(squareX * 4);
            }
        });

        $(CHAIN_HTML_ID.chainSquare).on('touchend', function (e) {
            if (isSquareDragged) {
                isSquareDragged = false;
            }
        });

        $(CHAIN_HTML_ID.tinyChainParent).on('touchstart', function (e) {
            e.preventDefault();
        });

        $(CHAIN_HTML_ID.chainParent).on('touchmove', function (e) {
            if (longPressTimer !== null) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
            }
        });

        $(CHAIN_HTML_ID.chainParent).scroll(function () {
            let diff = ($(this).scrollLeft() / 4 + SQUARE_WIDTH) - ($(CHAIN_HTML_ID.tinyChainParent).scrollLeft() + 320);
            if (diff >= 0) {
                $(CHAIN_HTML_ID.tinyChainParent).scrollLeft(diff + $(CHAIN_HTML_ID.tinyChainParent).scrollLeft());
            } else {
                diff = ($(CHAIN_HTML_ID.tinyChainParent).scrollLeft()) - ($(this).scrollLeft() / 4);
                if (diff >= 0) {
                    $(CHAIN_HTML_ID.tinyChainParent).scrollLeft($(CHAIN_HTML_ID.tinyChainParent).scrollLeft() - diff);
                }
            }
            $(CHAIN_HTML_ID.chainSquare).css('left', $(this).scrollLeft() / 4 + 'px');
        });
    };

    function getInitialBlockModelMap() {
        let result = {};
        result[CHAIN_BLOCK_ID_MAP.inst1] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.inst1, true, true);
        result[CHAIN_BLOCK_ID_MAP.inst2] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.inst2, true, true);
        result[CHAIN_BLOCK_ID_MAP.inst3] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.inst3, true, true);
        result[CHAIN_BLOCK_ID_MAP.normal] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.normal, true, true);
        result[CHAIN_BLOCK_ID_MAP.sendReturn] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.sendReturn, true, true);
        result[CHAIN_BLOCK_ID_MAP.compressor] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.compressor, true, true);
        result[CHAIN_BLOCK_ID_MAP.distortion] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.distortion, true, true);
        result[CHAIN_BLOCK_ID_MAP.airdPreamp] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.airdPreamp, true, true);
        result[CHAIN_BLOCK_ID_MAP.noiseSuppressor] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.noiseSuppressor, true, true);
        result[CHAIN_BLOCK_ID_MAP.fx1] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.fx1, true, true);
        result[CHAIN_BLOCK_ID_MAP.fx2] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.fx2, true, true);
        result[CHAIN_BLOCK_ID_MAP.fx3] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.fx3, true, true);
        result[CHAIN_BLOCK_ID_MAP.equalizer1] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.equalizer1, true, true);
        result[CHAIN_BLOCK_ID_MAP.equalizer2] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.equalizer2, true, true);
        result[CHAIN_BLOCK_ID_MAP.delay1] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.delay1, true, true);
        result[CHAIN_BLOCK_ID_MAP.delay2] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.delay2, true, true);
        result[CHAIN_BLOCK_ID_MAP.masterDelay] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.masterDelay, true, true);
        result[CHAIN_BLOCK_ID_MAP.chorus] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.chorus, true, true);
        result[CHAIN_BLOCK_ID_MAP.reverb] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.reverb, true, true);
        result[CHAIN_BLOCK_ID_MAP.footVolume2] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.footVolume2, false, false);
        result[CHAIN_BLOCK_ID_MAP.footVolume1] = new ChainEffector(result, CHAIN_BLOCK_ID_MAP.footVolume1, false, false);

        result[CHAIN_BLOCK_ID_MAP.divTemp1] = new ChainDivider(result, CHAIN_BLOCK_ID_MAP.divTemp1);
        result[CHAIN_BLOCK_ID_MAP.divTemp2] = new ChainDivider(result, CHAIN_BLOCK_ID_MAP.divTemp2);
        result[CHAIN_BLOCK_ID_MAP.divTemp3] = new ChainDivider(result, CHAIN_BLOCK_ID_MAP.divTemp3);
        result[CHAIN_BLOCK_ID_MAP.divider] = new ChainDivider(result, CHAIN_BLOCK_ID_MAP.divider);

        result[CHAIN_BLOCK_ID_MAP.balancer1] = new ChainMixer(result, CHAIN_BLOCK_ID_MAP.balancer1);
        result[CHAIN_BLOCK_ID_MAP.balancer2] = new ChainMixer(result, CHAIN_BLOCK_ID_MAP.balancer2);
        result[CHAIN_BLOCK_ID_MAP.balancer3] = new ChainMixer(result, CHAIN_BLOCK_ID_MAP.balancer3);
        result[CHAIN_BLOCK_ID_MAP.mixer] = new ChainMixer(result, CHAIN_BLOCK_ID_MAP.mixer);

        result[CHAIN_BLOCK_ID_MAP.splitter1] = new ChainSplitter(result, CHAIN_BLOCK_ID_MAP.splitter1);
        result[CHAIN_BLOCK_ID_MAP.splitter2] = new ChainSplitter(result, CHAIN_BLOCK_ID_MAP.splitter2);
        result[CHAIN_BLOCK_ID_MAP.splitter3] = new ChainSplitter(result, CHAIN_BLOCK_ID_MAP.splitter3);
        result[CHAIN_BLOCK_ID_MAP.splitter4] = new ChainSplitter(result, CHAIN_BLOCK_ID_MAP.splitter4);

        result[CHAIN_BLOCK_ID_MAP.master] = new ChainMaster(result);

        result[CHAIN_BLOCK_ID_MAP.outMainLR] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outMainLR, false, true);
        result[CHAIN_BLOCK_ID_MAP.outMainL] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outMainL, false, true);
        result[CHAIN_BLOCK_ID_MAP.outMainR] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outMainR, false, true);
        result[CHAIN_BLOCK_ID_MAP.outSubLR] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outSubLR, false, true);
        result[CHAIN_BLOCK_ID_MAP.outSubL] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outSubL, false, true);
        result[CHAIN_BLOCK_ID_MAP.outSubR] = new ChainSpeakerOut(result, CHAIN_BLOCK_ID_MAP.outSubR, false, true);

        result[CHAIN_BLOCK_ID_MAP.divTemp1].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp1],
            result[CHAIN_BLOCK_ID_MAP.balancer1],
            result[CHAIN_BLOCK_ID_MAP.splitter1]
        );
        result[CHAIN_BLOCK_ID_MAP.divTemp2].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp2],
            result[CHAIN_BLOCK_ID_MAP.balancer2],
            result[CHAIN_BLOCK_ID_MAP.splitter2]
        );
        result[CHAIN_BLOCK_ID_MAP.divTemp3].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp3],
            result[CHAIN_BLOCK_ID_MAP.balancer3],
            result[CHAIN_BLOCK_ID_MAP.splitter3]
        );
        result[CHAIN_BLOCK_ID_MAP.divider].relate(
            result[CHAIN_BLOCK_ID_MAP.divider],
            result[CHAIN_BLOCK_ID_MAP.mixer],
            result[CHAIN_BLOCK_ID_MAP.splitter4]
        );

        result[CHAIN_BLOCK_ID_MAP.balancer1].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp1],
            result[CHAIN_BLOCK_ID_MAP.balancer1],
            result[CHAIN_BLOCK_ID_MAP.splitter1]
        );
        result[CHAIN_BLOCK_ID_MAP.balancer2].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp2],
            result[CHAIN_BLOCK_ID_MAP.balancer2],
            result[CHAIN_BLOCK_ID_MAP.splitter2]
        );
        result[CHAIN_BLOCK_ID_MAP.balancer3].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp3],
            result[CHAIN_BLOCK_ID_MAP.balancer3],
            result[CHAIN_BLOCK_ID_MAP.splitter3]
        );
        result[CHAIN_BLOCK_ID_MAP.mixer].relate(
            result[CHAIN_BLOCK_ID_MAP.divider],
            result[CHAIN_BLOCK_ID_MAP.mixer],
            result[CHAIN_BLOCK_ID_MAP.splitter4]
        );

        result[CHAIN_BLOCK_ID_MAP.splitter1].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp1],
            result[CHAIN_BLOCK_ID_MAP.balancer1],
            result[CHAIN_BLOCK_ID_MAP.splitter1]
        );
        result[CHAIN_BLOCK_ID_MAP.splitter2].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp2],
            result[CHAIN_BLOCK_ID_MAP.balancer2],
            result[CHAIN_BLOCK_ID_MAP.splitter2]
        );
        result[CHAIN_BLOCK_ID_MAP.splitter3].relate(
            result[CHAIN_BLOCK_ID_MAP.divTemp3],
            result[CHAIN_BLOCK_ID_MAP.balancer3],
            result[CHAIN_BLOCK_ID_MAP.splitter3]
        );
        result[CHAIN_BLOCK_ID_MAP.splitter4].relate(
            result[CHAIN_BLOCK_ID_MAP.divider],
            result[CHAIN_BLOCK_ID_MAP.mixer],
            result[CHAIN_BLOCK_ID_MAP.splitter4]
        );

        let mainSpeakerChains = [
            result[CHAIN_BLOCK_ID_MAP.outMainLR],
            result[CHAIN_BLOCK_ID_MAP.outMainL],
            result[CHAIN_BLOCK_ID_MAP.outMainR],
        ];

        let subSpeakerChains = [
            result[CHAIN_BLOCK_ID_MAP.outSubLR],
            result[CHAIN_BLOCK_ID_MAP.outSubL],
            result[CHAIN_BLOCK_ID_MAP.outSubR],
        ]

        result[CHAIN_BLOCK_ID_MAP.outMainLR].relate(mainSpeakerChains);
        result[CHAIN_BLOCK_ID_MAP.outMainL].relate(mainSpeakerChains);
        result[CHAIN_BLOCK_ID_MAP.outMainR].relate(mainSpeakerChains);

        result[CHAIN_BLOCK_ID_MAP.outSubLR].relate(subSpeakerChains);
        result[CHAIN_BLOCK_ID_MAP.outSubL].relate(subSpeakerChains);
        result[CHAIN_BLOCK_ID_MAP.outSubR].relate(subSpeakerChains);

        result[CHAIN_BLOCK_ID_MAP.outMainLR].turnStereoOn(true);
        result[CHAIN_BLOCK_ID_MAP.outSubLR].turnStereoOn(true);

        return result;
    };
})();