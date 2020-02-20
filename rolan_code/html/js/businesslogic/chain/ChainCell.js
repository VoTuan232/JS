var ChainCell = function(blockModelMap, id) {
  this.blockModelMap = blockModelMap;
  this.id = id;
  this.x = 0;
  this.y = 0;
  this.tinyLineOffset = 0;
};

// constants
ChainCell.prototype.TINY_RATIO = 4;
ChainCell.prototype.TINY_ID_PREFIX = 'tiny-';
ChainCell.prototype.IMAGE_DIR_PATH = './images/';
ChainCell.prototype.IMAGE_SUFFIX = '@2x.png';
ChainCell.prototype.OFF_IMAGE_SUFFIX = '_off' + ChainCell.prototype.IMAGE_SUFFIX;
ChainCell.prototype.HORIZONTAL_LINE = 'line1';

// methods
ChainCell.prototype.getImage = function() {
  return null;
};
ChainCell.prototype.getTinyImage = function() {
  return null;
};
ChainCell.prototype.getClassName = function() {
  return '';
};
ChainCell.prototype.getTinyClassName = function() {
  return '';
};
ChainCell.prototype.createDOM = function() {
  var dom = $('<div>')
      .attr('id', this.id)
      .addClass(this.getClassName())
      .css({
        'left': this.x + 'px',
        'top': this.y + 'px'
      });

  var image = this.getImage();
  if (image !== null) {
    dom.css('background-image', 'url(' + image + ')');
  }
  return dom;
};
ChainCell.prototype.reDrawImage = function() {
  $('#' + this.id).css('background-image', 'url(' + this.getImage() + ')');
};
ChainCell.prototype.createTinyDOM = function() {
  var dom = $('<div>')
      .attr('id', this.TINY_ID_PREFIX + this.id)
      .addClass(this.getTinyClassName())
      .css({
        'left': this.x / this.TINY_RATIO + 'px',
        'top': this.y / this.TINY_RATIO + this.tinyLineOffset + 'px'
      });
  var tinyImage = this.getTinyImage();
  if (tinyImage !== null) {
    dom.css('background-image', 'url(' + tinyImage + ')');
  }
  return dom;
};
ChainCell.prototype.reDrawTinyImage = function() {
  $('#' + this.TINY_ID_PREFIX + this.id).css('background-image', 'url(' + this.getTinyImage() + ')');
};
