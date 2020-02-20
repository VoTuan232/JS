"use strict";

let check = x => {
  // console.log("vào check");
  // console.log(x);
  for (let i = 0; i < x.length - 1; i++) {
    // console.log(x[i]);
    // console.log(x[i + 1]);
    if (x[i + 1] <= x[i]) {
      console.log("not increment");
      return false;
    }
  }

  return true;
};

let almostIncreasingSequence = sequence => {
  if (check(sequence)) {
    console.log("true now");
    return true;
  } else {
    let length = sequence.length;
    let temp = [];

    for (let index = 0; index < sequence.length; index++) {
      temp.push(sequence[index]);
    }

    for (let index = 0; index < length; index++) {
      const rm = sequence.splice(index, 1);
      // console.log(rm.toString());
      if (check(sequence)) {
        console.log(" vào true");
        return true;
      }
      // sequence.splice(index, 0, rm.toString());
      console.log("not vào true");
      sequence = [];
      for (let i = 0; i < temp.length; i++) {
        sequence.push(temp[i]);
      }
    }
    return false;
  }
};

console.log(almostIncreasingSequence());
