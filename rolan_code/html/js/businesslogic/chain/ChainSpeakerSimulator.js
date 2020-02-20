/* global
ChainEffector
*/

var ChainSpeakerSimulator = function(blockModelMap, id, canTurnOn, canTurnStereoOn) {
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
};

ChainSpeakerSimulator.prototype = Object.create(ChainEffector.prototype);
ChainSpeakerSimulator.prototype.constructor = ChainSpeakerSimulator;

ChainSpeakerSimulator.prototype.relate = function(chainArray) {
  if (chainArray.length != 6) {
    console.log("Wrong input value.");
    return;
  }
  this.outputLeftRight = chainArray[0];
  this.outputLeft = chainArray[1];
  this.outputRight = chainArray[2];
  this.speakerLeftRight = chainArray[3];
  this.speakerLeft = chainArray[4];
  this.speakerRight = chainArray[5];
  this.relatedChains = chainArray;
};

ChainSpeakerSimulator.prototype.getNewBlockIdArray = function(currentBlockIdArray, targetId) {
    var simulatorIndex = currentBlockIdArray.indexOf(this.id);
    var simulatorOutId =  CHAIN_SIMULATOR_IN_PAIR[this.id]
    var simulatorOutIndex = currentBlockIdArray.indexOf(simulatorOutId);
    var resultArray = currentBlockIdArray.slice(0, simulatorIndex)
        .concat(currentBlockIdArray.slice(simulatorOutIndex + 1));
    var simulatorArray = currentBlockIdArray.slice(simulatorIndex, simulatorOutIndex + 1);
    var targetIndex = resultArray.indexOf(targetId);
    return resultArray.slice(0, targetIndex + 1)
        .concat(simulatorArray, resultArray.slice(targetIndex + 1));
};

ChainSpeakerSimulator.prototype.getMovablePositions = function(currentBlockIdArray) {
    var simulatorIndex = currentBlockIdArray.indexOf(this.id);
    var simulatorOutId =  CHAIN_SIMULATOR_IN_PAIR[this.id]
    var simulatorOutIndex = currentBlockIdArray.indexOf(simulatorOutId);

    var keyList = Object.keys(CHAIN_SIMULATOR_IN_PAIR);

    var resultArray = currentBlockIdArray;

    var unmovablePos = [];
    for (var i = simulatorIndex - 1; i <= simulatorOutIndex; i++) {
        unmovablePos = unmovablePos.concat(i);
    }

    for (var j = 0; j < keyList.length; j++) {
        if (keyList[j] === this.id) {
            continue;
        }

        simulatorIndex = currentBlockIdArray.indexOf(keyList[j]);
        simulatorOutId =  CHAIN_SIMULATOR_IN_PAIR[keyList[j]];
        simulatorOutIndex = currentBlockIdArray.indexOf(simulatorOutId);
        if (simulatorOutIndex === -1 || simulatorIndex === -1) {
            continue;
        }

        for (var k = simulatorIndex; k < simulatorOutIndex; k++) {
            unmovablePos = unmovablePos.concat(k);
        }
    }

    unmovablePos = unmovablePos.concat(currentBlockIdArray.length - 1);
    resultArray = resultArray.filter(function(chainName, index, array) {
        return unmovablePos.indexOf(index) === -1
    });



    return resultArray;

};

ChainSpeakerSimulator.prototype.getStereoLinkedNewBlockIdArray = function(currentBlockIdArray) {
  // var rightIndex = currentBlockIdArray.indexOf(this.right.id);
  // if (this.isStereoOn && rightIndex > 0) {
  //   var result = currentBlockIdArray.slice(0, rightIndex).concat(
  //       currentBlockIdArray.slice(rightIndex + 1)
  //   );
  //   var leftIndex = result.indexOf(this.left.id);
  //   return result.slice(0, leftIndex).concat(this.right.id, result.slice(leftIndex));
  // } else {
  //   return currentBlockIdArray;
  // }
  /* Look like we don't need to handle this
  var simulatorModel = this;
  var idOutL = CHAIN_BLOCK_ID_MAP.outMainL;
  var idSpeakerR = CHAIN_BLOCK_ID_MAP.simulatorMainR;
  var idOutR = CHAIN_BLOCK_ID_MAP.outMainR
  if (simulatorModel.id == CHAIN_BLOCK_ID_MAP.simulatorSub
  || simulatorModel.id == CHAIN_BLOCK_ID_MAP.simulatorSubL
  || simulatorModel.id == CHAIN_BLOCK_ID_MAP.simulatorSubR) {
    idOutL = CHAIN_BLOCK_ID_MAP.outSubL;
    idSpeakerR = CHAIN_BLOCK_ID_MAP.simulatorSubR;
    idOutR = CHAIN_BLOCK_ID_MAP.outSubR
  }
  if (simulatorModel.isStereoOn) {
    console.log("simulatorModel.isStereoOn");
    console.log(currentBlockIdArray);
    var insertPoint = currentBlockIdArray.indexOf(idOutL);
    var indexStart = currentBlockIdArray.indexOf(idSpeakerR);
    var indexEnd =  currentBlockIdArray.indexOf(idOutR);
    var copyArray = currentBlockIdArray.slice(indexStart - 1, indexEnd + 1);
    console.log(copyArray);
    console.log(insertPoint + " " + indexStart + " " + indexEnd);
    currentBlockIdArray.splice(indexStart, copyArray.length);
    console.log(currentBlockIdArray);
    var tempArray = currentBlockIdArray.slice(0, insertPoint).concat().concat(currentBlockIdArray.slice(insertPoint+1, currentBlockIdArray.length));
    console.log(tempArray);
    return tempArray;
  }

  console.log(currentBlockIdArray);
  */
  return currentBlockIdArray;
};
ChainSpeakerSimulator.prototype.turnOn = function(isTurnedOn) {
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
ChainSpeakerSimulator.prototype.turnStereoOn = function(isStereoOn) {
  if (!this.canTurnStereoOn) {
   return;
  }
  for (var i = 0; i < this.relatedChains.length; i++) {
    this.relatedChains[i].isStereoOn = isStereoOn;
  }
};
ChainSpeakerSimulator.prototype.toggleStereoOn = function() {
  if (!this.canTurnStereoOn) {
   return;
  }
  var isStereoOn = !this.isStereoOn;
  this.turnStereoOn(isStereoOn);
};

ChainSpeakerSimulator.prototype.A_CORNER = 'corner4';
ChainSpeakerSimulator.prototype.B_CORNER = 'corner3';
ChainSpeakerSimulator.prototype.updateLines = function(blockIdArray) {
  ChainEffector.prototype.updateLines.call(this, blockIdArray);

  // Add lines
  //var line = new ChainBranchPointLine(this.blockModelMap, this.id, this.lines.length, this.x, this.y + 24 / 48 * BLOCK_WIDTH, this.A_CORNER, BRANCH_POINT_LINE_TYPE.aBranch);
  //this.lines.push(line);
};
