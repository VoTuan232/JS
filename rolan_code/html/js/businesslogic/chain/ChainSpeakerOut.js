/* global
ChainEffector
*/

var ChainSpeakerOut = function (blockModelMap, id, canTurnOn, canTurnStereoOn) {
    ChainEffector.call(this, blockModelMap, id, canTurnOn, false);
    this.canTurnStereoOn = canTurnStereoOn;
    this.isStereoOn = false;
    this.outputLeftRight = null;
    this.outputLeft = null;
    this.outputRight = null;
    this.speakerLeftRight = null;
    this.speakerLeft = null;
    this.speakerRight = null;
    this.relatedChains = null;
    this.maxY = 24;
};

ChainSpeakerOut.prototype = Object.create(ChainEffector.prototype);
ChainSpeakerOut.prototype.constructor = ChainSpeakerOut;

ChainSpeakerOut.prototype.relate = function (chainArray) {
    if (chainArray.length != 3) {
        console.log("Wrong input value.");
        return;
    }
    this.outputLeftRight = chainArray[0];
    this.outputLeft = chainArray[1];
    this.outputRight = chainArray[2];
    this.relatedChains = chainArray;
};

ChainSpeakerOut.prototype.getNewBlockIdArray = function (currentBlockIdArray, targetId) {
    let selfIndex = currentBlockIdArray.indexOf(this.id);
    if (selfIndex > 0) {
        let resultArray = currentBlockIdArray.slice(0, selfIndex)
            .concat(currentBlockIdArray.slice(selfIndex + 1));
        let targetIndex = resultArray.indexOf(targetId);
        return resultArray.slice(0, targetIndex + 1)
            .concat(this.id, resultArray.slice(targetIndex + 1));
    } else {
        return currentBlockIdArray;
    }
};

ChainSpeakerOut.prototype.getMovablePositions = function (currentBlockIdArray) {
    var simulatorId = CHAIN_SIMULATOR_OUT_PAIR[this.id];
    var simulatorOutIndex = currentBlockIdArray.indexOf(this.id);
    var simulatorIndex = currentBlockIdArray.indexOf(simulatorId);
    var keyList = Object.keys(CHAIN_SIMULATOR_OUT_PAIR);

    var resultArray = currentBlockIdArray;

    var unmovablePos = [];
    for (var i = simulatorIndex - 1; i <= simulatorOutIndex; i++) {
        unmovablePos = unmovablePos.concat(i);
    }

    for (var j = 0; j < keyList.length; j++) {
        if (keyList[j] === this.id) {
            continue;
        }

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
    unmovablePos = unmovablePos.concat(currentBlockIdArray.length - 1);
    resultArray = resultArray.filter(function (chainName, index, array) {
        return unmovablePos.indexOf(index) === -1
    });

    return resultArray;
};

ChainSpeakerOut.prototype.getStereoLinkedNewBlockIdArray = function (currentBlockIdArray) {
    let rightIndex = currentBlockIdArray.indexOf(this.outputRight.id);
    let leftIndex = currentBlockIdArray.indexOf(this.outputLeft.id);
    let leftRightIndex = currentBlockIdArray.indexOf(this.outputLeftRight.id);

    if (this.isStereoOn) {
        if (leftIndex !== -1) {
            currentBlockIdArray.splice(leftIndex, 1, this.outputLeftRight.id);
        }
        if (rightIndex !== -1) {
            currentBlockIdArray.splice(rightIndex, 1);
        }
    } else {
        if (leftRightIndex !== -1) {
            currentBlockIdArray.splice(leftRightIndex, 1, this.outputLeft.id, this.outputRight.id);
        }
    }

    return currentBlockIdArray;
};
ChainSpeakerOut.prototype.turnOn = function (isTurnedOn) {
    if (!this.canTurnOn) {
        return;
    }
    for (var i = 0; i < this.relatedChains.length; i++) {
        if (this.relatedChains[i].id !== this.id) {
            this.relatedChains[i].isTurnedOn = isTurnedOn;
            this.relatedChains[i].reDrawImage();
            this.relatedChains[i].reDrawTinyImage();
        }
    }
    this.isTurnedOn = isTurnedOn;
    this.reDrawImage();
    this.reDrawTinyImage();
};
ChainSpeakerOut.prototype.turnStereoOn = function (isStereoOn) {
    if (!this.canTurnStereoOn) {
        return;
    }
    for (var i = 0; i < this.relatedChains.length; i++) {
        this.relatedChains[i].isStereoOn = isStereoOn;
    }
};
ChainSpeakerOut.prototype.toggleStereoOn = function () {
    if (!this.canTurnStereoOn) {
        return;
    }
    var isStereoOn = !this.isStereoOn;
    this.turnStereoOn(isStereoOn);
};

ChainSpeakerOut.prototype.A_CORNER = 'corner4';
ChainSpeakerOut.prototype.B_CORNER = 'corner3';
ChainSpeakerOut.prototype.C_CORNER = 'corner1';
ChainSpeakerOut.prototype.D_CORNER = 'corner2';
ChainSpeakerOut.prototype.VERTICAL_LINE = 'line2';
ChainSpeakerOut.prototype.updateLines = function (blockIdArray) {
    this.lines = [].concat(
        this.getBBranchLine(blockIdArray)
    );
    this.lines.forEach(function (line, index) {
        line.updateId(index);
    });
};

ChainSpeakerOut.prototype.getSelfLine = function () {
    return new ChainBranchPointLine(this.blockModelMap, this.id, 0, this.x, this.y, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal);
};

ChainSpeakerOut.prototype.getBBranchLine = function (blockIdArray) {
    let indexEndPlus = chainModelController.getIndexNextVisibleChain(blockIdArray, this.id);
    let result = [];
    let indexCurrent = blockIdArray.indexOf(this.id);
    let lengthId = blockIdArray.length;
    let prevId = blockIdArray[indexCurrent - 1];

    let next1Id;
    let next2Id;
    let next3Id;

    if (indexCurrent < lengthId - 1) {
        next1Id = blockIdArray[indexCurrent + 1];
    }
    if (indexCurrent < lengthId - 2) {
        next2Id = blockIdArray[indexCurrent + 2];
    }
    if (indexCurrent < lengthId - 3) {
        next3Id = blockIdArray[indexCurrent + 3];
    }

    let isSpeakerNext1Id = CHAIN_OUTSIDE_SPEAKER_SIMULATOR.indexOf(next1Id) !== -1;
    let isSpeakerNext2Id = CHAIN_OUTSIDE_SPEAKER_SIMULATOR.indexOf(next2Id) !== -1;
    let isSpeakerNex3Id = CHAIN_OUTSIDE_SPEAKER_SIMULATOR.indexOf(next3Id) !== -1;
    let isSpeakerPrevId = CHAIN_OUTSIDE_SPEAKER_SIMULATOR.indexOf(prevId) !== -1;

    if (isSpeakerNex3Id && isSpeakerNext2Id && isSpeakerNext1Id) {
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 0, this.x - BLOCK_WIDTH / 2, this.y, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 1, this.x, this.y + this.maxY, this.A_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 2, this.x + BLOCK_WIDTH / 2, this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 3, this.x + BLOCK_WIDTH * 1.5 , this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 4, this.x + BLOCK_WIDTH * 2.5 , this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 5, this.x + BLOCK_WIDTH, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 6, this.x + BLOCK_WIDTH * 2, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        if (this.isNextToMaster(blockIdArray, indexCurrent + 4)) {
            return result;
        }
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 7, this.x + BLOCK_WIDTH * 3 - 2, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 8, this.x + BLOCK_WIDTH * 3.5, this.y + this.maxY, this.B_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
    } else if (isSpeakerNext2Id && isSpeakerNext1Id && !isSpeakerPrevId) {
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 0, this.x - BLOCK_WIDTH / 2, this.y, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal))
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 1, this.x, this.y + this.maxY, this.A_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 2, this.x + BLOCK_WIDTH / 2 , this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 3, this.x + BLOCK_WIDTH * 1.5 , this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 4, this.x + BLOCK_WIDTH, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        if (this.isNextToMaster(blockIdArray, indexCurrent + 3)) {
            return result;
        }
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 5, this.x + BLOCK_WIDTH * 2 - 2, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 6, this.x + BLOCK_WIDTH * 2.5, this.y + this.maxY, this.B_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
    } else if (isSpeakerNext1Id && !isSpeakerPrevId) {
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 0, this.x - BLOCK_WIDTH / 2, this.y, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 1, this.x, this.y + this.maxY, this.A_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 2, this.x + BLOCK_WIDTH / 2 , this.y, this.C_CORNER, BRANCH_POINT_LINE_TYPE.horizontal));
        if (this.isNextToMaster(blockIdArray, indexCurrent + 2)) {
            return result;
        }
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 3, this.x + BLOCK_WIDTH - 2, this.y + this.maxY, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 4, this.x + BLOCK_WIDTH * 1.5, this.y + this.maxY, this.B_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
    } else if (!isSpeakerPrevId) {
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 0, this.x - BLOCK_WIDTH / 2 + 2, this.y, this.HORIZONTAL_LINE, BRANCH_POINT_LINE_TYPE.horizontal));
        if (this.isNextToMaster(blockIdArray, indexEndPlus)) {
            return result;
        }
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 1, this.x - 2, this.y + this.maxY, this.A_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
        result.push(new ChainBranchPointLine(this.blockModelMap, this.id, 2, this.x + BLOCK_WIDTH / 2, this.y + this.maxY, this.B_CORNER, BRANCH_POINT_LINE_TYPE.bBranch));
    }

    return result;
};

ChainSpeakerOut.prototype.isNextToMaster = function (blockIdArray, indexEndPlus) {
    if (indexEndPlus > blockIdArray.length) {
        return false;
    }
    var nextModel = this.blockModelMap[blockIdArray[indexEndPlus]];
    return nextModel && nextModel.isMaster()
};