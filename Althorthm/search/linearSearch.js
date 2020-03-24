// O(n)

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
for (let i = 0; i < 10000000; i++) {
  arr.push(i);
}

let x = new timer("binary search");

function binarySearch(arr = [], key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }

  return -1;
}

console.log(binarySearch(arr, 99999999));

x.stop();
