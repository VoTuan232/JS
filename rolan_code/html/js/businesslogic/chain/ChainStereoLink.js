/* global
ChainEffector
*/

var ChainStereoLink = function(blockModelMap, id, canTurnOn, canTurnStereoOn) {
  ChainEffector.call(this, blockModelMap, id, canTurnOn, false);
  this.canTurnStereoOn = canTurnStereoOn;
  this.isStereoOn = false;
  this.leftRight = null;
  this.left = null;
  this.right = null;
};

ChainStereoLink.prototype = Object.create(ChainEffector.prototype);
ChainStereoLink.prototype.constructor = ChainStereoLink;

ChainStereoLink.prototype.relate = function(leftRight, left, right) {
  this.leftRight = leftRight;
  this.left = left;
  this.right = right;
};
ChainStereoLink.prototype.getStereoLinkedNewBlockIdArray = function(currentBlockIdArray) {
  var rightIndex = currentBlockIdArray.indexOf(this.right.id);
  if (this.isStereoOn && rightIndex > 0) {
    var result = currentBlockIdArray.slice(0, rightIndex).concat(
        currentBlockIdArray.slice(rightIndex + 1)
    );
    var leftIndex = result.indexOf(this.left.id);
    return result.slice(0, leftIndex).concat(this.right.id, result.slice(leftIndex));
  } else {
    return currentBlockIdArray;
  }
};
ChainStereoLink.prototype.turnOn = function(isTurnedOn) {
  if (!this.canTurnOn) {
    return;
  }
  if (this.id === this.leftRight.id) {
    this.left.isTurnedOn = isTurnedOn;
    this.left.reDrawImage();
    this.left.reDrawTinyImage();
  } else if (this.id === this.left.id) {
    this.leftRight.isTurnedOn = isTurnedOn;
    this.leftRight.reDrawImage();
    this.leftRight.reDrawTinyImage();
  }
  this.isTurnedOn = isTurnedOn;
  this.reDrawImage();
  this.reDrawTinyImage();
};
ChainStereoLink.prototype.turnStereoOn = function(isStereoOn) {
  if (!this.canTurnStereoOn) {
 return;
}
  this.leftRight.isStereoOn = isStereoOn;
  this.left.isStereoOn = isStereoOn;
  this.right.isStereoOn = isStereoOn;
};
ChainStereoLink.prototype.toggleStereoOn = function() {
  if (!this.canTurnStereoOn) {
 return;
}
  var isStereoOn = !this.isStereoOn;
  this.turnStereoOn(isStereoOn);
};
