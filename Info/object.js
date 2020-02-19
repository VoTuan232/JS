"use strict";
const alert = require("alert-node");
const _ = require("lodash");

let x = [1, 2, 3, 4, 5];

x.forEach((element, index) => {});

let check = x => {
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i + 1] <= x[i]) {
      return false;
    }
  }

  return true;
};

let almostIncreasingSequence = sequence => {
  if (check(sequence)) {
    return true;
  } else {
    let temp = [];
    for (let index = 0; index < sequence.length; index++) {
      temp.push(sequence[index]);
    }
    for (let index = 0; index < sequence.length - 1; index++) {
      sequence.splice(index, 1);
      if (check(sequence)) {
        return true;
      } else {
        sequence = temp;
      }
    }
    return false;
  }
};

console.log(almostIncreasingSequence([1, 2, 3, 1, 2, 5]));
