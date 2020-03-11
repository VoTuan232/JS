"use strict";

let f = data => {
  let arr1 = [];
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("push")) {
      arr1.push(data[i].split(" ")[1]);
    } else if (data[i].includes("pop")) {
      arr1.pop();
    } else if (data[i].includes("min")) {
      res.push(Math.min(...arr1));
    }
  }

  return res;
};

let data = ["push 10", "min", "pop", "min"];
