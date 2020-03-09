"use strict";
//https://stackoverflow.com/questions/8301400/how-do-you-easily-create-empty-matrices-javascript

/*
ARRAY: n x n
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

     ==>

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

let timer = function(name) {
  let start = new Date();
  return {
    stop: function() {
      let end = new Date();
      let time = end.getTime() - start.getTime();
      console.log("Timer:", name, "finished in", time, "ms");
    }
  };
};

let t = timer("sss");

let rotateImage = array => {
  let l = array.length - 1;
  let a = new Array();
  for (let i = 0; i < l + 1; i++) {
    a[i] = new Array();
  }
  for (let [key, value] of array.entries()) {
    for (let [k, v] of value.entries()) {
      a[k][l - key] = v;
    }
  }

  return a;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let x = [];
for (let i = 0; i < 100; i++) {
  x.push([0]);
  for (let j = 0; j < 100; j++) {
    x[i][j] = getRandomInt(10);
  }
}
// console.log(x);

let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(rotateImage(data));
t.stop();
