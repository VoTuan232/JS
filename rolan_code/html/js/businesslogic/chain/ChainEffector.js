/* global
ChainBlock
*/

var ChainEffector = function (blockModelMap, id, canTurnOn, canSelectStompbox) {
    ChainBlock.call(this, blockModelMap, id, canTurnOn, true, true, true);
    this.canSelectStompbox = canSelectStompbox;
    this.isStompboxSelected = false;
};

ChainEffector.prototype = Object.create(ChainBlock.prototype);
ChainEffector.prototype.constructor = ChainEffector;

// constants
ChainBlock.prototype.STOMPBOX_IMAGE_SUFFIX = '_SB' + ChainBlock.prototype.IMAGE_SUFFIX;
ChainBlock.prototype.STOMPBOX_SELECTED_IMAGE_SUFFIX = '_SB_selected' + ChainBlock.prototype.IMAGE_SUFFIX;
ChainBlock.prototype.STOMPBOX_HOVER_IMAGE_SUFFIX = '_SB_hover' + ChainBlock.prototype.IMAGE_SUFFIX;

ChainEffector.prototype.getImageSuffix = function () {
    if (this.canHover && this.isHovered) {
        if (this.canTurnOn && !this.isTurnedOn) {
            return this.OFF_HOVER_IMAGE_SUFFIX;
        } else if (this.canSelectStompbox && this.isStompboxSelected) {
            return this.STOMPBOX_HOVER_IMAGE_SUFFIX;
        } else {
            return this.HOVER_IMAGE_SUFFIX;
        }
    } else if (this.canSelect && this.isSelected) {
        if (this.canTurnOn && !this.isTurnedOn) {
            return this.OFF_SELECTED_IMAGE_SUFFIX;
        } else if (this.canSelectStompbox && this.isStompboxSelected) {
            return this.STOMPBOX_SELECTED_IMAGE_SUFFIX;
        } else {
            return this.SELECTED_IMAGE_SUFFIX;
        }
    } else {
        if (this.canTurnOn && !this.isTurnedOn) {
            return this.OFF_IMAGE_SUFFIX;
        } else if (this.canSelectStompbox && this.isStompboxSelected) {
            return this.STOMPBOX_IMAGE_SUFFIX;
        } else {
            return this.IMAGE_SUFFIX;
        }
    }
};

ChainEffector.prototype.getNewBlockIdArray = function (currentBlockIdArray, targetId) {
    var selfIndex = currentBlockIdArray.indexOf(this.id);
    var resultArray = currentBlockIdArray.slice(0, selfIndex)
        .concat(currentBlockIdArray.slice(selfIndex + 1));
    var targetIndex = resultArray.indexOf(targetId);
    return resultArray.slice(0, targetIndex + 1)
        .concat(this.id, resultArray.slice(targetIndex + 1));
};

ChainEffector.prototype.getMovablePositions = function (currentBlockIdArray) {
    var selfId = this.id;

    return currentBlockIdArray.filter(function (blockId, index, array) {
        if (blockId === selfId) {
            return false;
        }
        if (array[index + 1] === selfId) {
            return false;
        }
        if (index === currentBlockIdArray.length - 1) {
            return false;
        }
        return true;
    });
};

ChainEffector.prototype.getMovablePositionsForAirdPreamp = function (selfId, currentBlockIdArray) {
    var keyList = Object.keys(CHAIN_SIMULATOR_OUT_PAIR);
    var unmovablePos = [];
    var resultArray = currentBlockIdArray;

    var simulatorId;
    var simulatorOutIndex;
    var simulatorIndex;
    for (var j = 0; j < keyList.length; j++) {
        simulatorId = CHAIN_SIMULATOR_OUT_PAIR[keyList[j]];
        simulatorOutIndex = currentBlockIdArray.indexOf(keyList[j]);
        simulatorIndex = currentBlockIdArray.indexOf(simulatorId);
        if (simulatorOutIndex === -1 || simulatorIndex === -1) {
            continue;
        }

        for (var k = simulatorIndex; k < simulatorOutIndex; k++) {
            unmovablePos = unmovablePos.concat(k);
        }
    }
    unmovablePos = unmovablePos.concat(currentBlockIdArray.indexOf(selfId));
    unmovablePos = unmovablePos.concat(currentBlockIdArray.indexOf(selfId) - 1);
    unmovablePos = unmovablePos.concat(currentBlockIdArray.length - 1);
    resultArray = resultArray.filter(function (chainName, index, array) {
        return unmovablePos.indexOf(index) === -1
    });

    return resultArray;
};
ChainEffector.prototype.selectStompbox = function (isStompboxSelected) {
    if (!this.canSelectStompbox) {
        return;
    }
    this.isStompboxSelected = isStompboxSelected;
    this.reDrawImage();
    this.reDrawTinyImage();
};
