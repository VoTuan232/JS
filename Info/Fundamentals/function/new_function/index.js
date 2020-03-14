let sum = new Function('a', 'b', 'return a + b');

console.log(sum)
console.log(sum(1, 2)); // 3

// Closure
// let value = ...
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined