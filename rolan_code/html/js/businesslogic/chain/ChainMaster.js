/* global
ChainBlock
*/

var ChainMaster = function(chainModelMap) {
  ChainBlock.call(this, chainModelMap, this.BLOCK_ID_MAP.master, false, false, true, true);
};

ChainMaster.prototype = Object.create(ChainBlock.prototype);
ChainMaster.prototype.constructor = ChainMaster;

ChainMaster.prototype.updateLines = function() {
  this.lines = [];
};
