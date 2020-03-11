function Apple(type) {
  this.type = type;
  this.color = "red";
  this.getInfo = getAppleInfo;
}

// anti-pattern! keep reading...
function getAppleInfo() {
  return this.color + " " + this.type + " apple";
}

var apple = new Apple("macintosh");
apple.color = "reddish";
console.log(apple.getInfo());

console.log("***********Methods defined internally*******************");
function Apple2(type) {
  this.type = type;
  this.color = "red";
  this.getInfo = function() {
    return this.color + " " + this.type + " apple";
  };
}

var apple2 = new Apple2("macintosh");
apple2.color = "reddish";
console.log(apple2.getInfo());

console.log("***********Methods added to the prototype*******************");

function Apple3(type) {
  this.type = type;
  this.color = "red";
}

Apple3.prototype.getInfo = function() {
  return this.color + " " + this.type + " apple";
};
var apple3 = new Apple2("macintosh");
apple3.color = "reddish";
console.log(apple3.getInfo());
