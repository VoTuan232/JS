"use strict";

let firstNotRepeatingCharacter = data => {
  let x = new Set();
  let y = new Set();
  for (let i of data) {
    if (x.has(i)) {
      y.add(i);
      x.delete(i);
    } else {
      x.add(i);
    }
  }
  for (let i of y) {
    x.delete(i);
  }
  return x.values().next().value;
};

let data = "abcdfdfdfxdsd";
console.log(firstNotRepeatingCharacter(data));
