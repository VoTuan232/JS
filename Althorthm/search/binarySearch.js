// O(logn)

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

let arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}
// console.log(arr);
// arr = [1, 2, 3, 4, 5];
let x = new timer("binary search");

function binarySearch(arr = [], key) {
  let lowerIndex = 0;
  let upperIndex = arr.length;

  while (lowerIndex < upperIndex) {
    let midIndex = lowerIndex + Math.floor((upperIndex - lowerIndex) / 2);
    // console.log("midIndex " + midIndex);
    // console.log("value " + arr[midIndex]);
    if (+arr[midIndex] === key) {
      return midIndex; // chính là số cần tìm
    } else if (+arr[midIndex] < key) {
      lowerIndex = midIndex + 1;
    } else {
      upperIndex = midIndex;
    }
  }

  return -1;
}

console.log(binarySearch(arr, 999999));

x.stop();
