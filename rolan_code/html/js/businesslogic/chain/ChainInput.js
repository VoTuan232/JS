/* global
ChainBlock ChainLine
BLOCK_WIDTH
*/

var ChainInput = function(chainModelMap) {
  ChainBlock.call(this, chainModelMap, this.BLOCK_ID_MAP.input, false, false, false, false);
};

ChainInput.prototype = Object.create(ChainBlock.prototype);
ChainInput.prototype.constructor = ChainInput;

ChainInput.prototype.updateLines = function() {
  this.lines = [
    new ChainLine(this.blockModelMap, this.id, 0, this.x + BLOCK_WIDTH / 3, this.y)
  ];
};
