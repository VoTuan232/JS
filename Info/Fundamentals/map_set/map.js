/*
Lưu trữ dạng key value (và là duy nhất)
key, value: là bất cứ loại dữ liệu nào 
key: duy nhất ( lấy phần tử thêm vào sau cùng)
Kế thừa: Map là một instance of Object Nhưng Object chắc chắn không phải là một instance of Map

***********Khi nào sử dụng
JSON hỗ trợ object còn map thì ko
Map duy trì thứ tự các khóa
Map hoạt động tốt hơn trong việc lưu trữ tập lớn
*/

"use strict";

const fun = function() {};
const set = new Set();
const map = new Map();
map
  .set(NaN, 1)
  .set(1, 2)
  .set("a", 3)
  .set([2], 4)
  .set({ x: 3 }, 5)
  .set(fun, 6)
  .set(1, 3) // trùng key => loại phần tử đầu tiên 1 => 2
  .set(set, 7);

console.log(map);
console.log(map instanceof Object); // TRUE
console.log(Array.isArray(map)); // FALSE

const obj = new Object();
console.log(obj instanceof Map); // FALSE

// duyệt các phần tử
for (const key of map.keys()) {
  console.log(key);
}
