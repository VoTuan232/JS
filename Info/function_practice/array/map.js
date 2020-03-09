/*
The map() method is used to apply a function on every element in an array. A new array is then returned.
A new array is then returned.
*/
var oldArr = [1, 2, 3, 4];
let newArr = oldArr.map((val, index, arr) => {
  console.log(val);
  console.log(index);
  console.log(arr);
  return val + 5;
});

console.log(newArr);
