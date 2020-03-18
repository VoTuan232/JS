function main(n, arr) {
  let d = 0;
  let set = new Set();
  for (let item of arr) {
    console.log("item " + item);
    if (set.has(item)) {
      d += 1;
      set.delete(item);
      console.log("set");
      console.log(set);
    } else {
      set.add(item);
    }
  }

  return d;
}

const n = 9;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(main(n, arr));
