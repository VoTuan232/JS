"use strict";

/*
Set cho phép lưu trữ giá trị duy nhất(ko trùng lặp) thuộc bất kì loại nào

Array có thứ tự => truy xuất theo giá trị tham chiếu   myArray[3]
Set ko có thứ tự => ko thể truy xuất theo giá trị tham chiếu

****************Khi nào dùng*********
Đầu tiên, Set khác Array, nó được tạo ra không phải là để thay thế cho Array mà để bổ sung các kiểu hỗ trợ để giúp Array tiện dùng hơn.
Vì Set chỉ chứa các phần tử duy nhất, nó giúp chúng ta dễ dàng hơn trong việc tránh lưu các giá trị trùng lặp vào cấu trúc dữ liệu của chúng ta.
*/

const myArray = [1, 2, 3, 4, 5, 1];
const mySet = new Set(myArray);
console.log(mySet); // Set { 1, 2, 3, 4, 5 }
console.log(typeof mySet); // Object
console.log(Array.isArray(mySet)); // FALSE
const uniqueArray = [...mySet];
console.log(uniqueArray); // [ 1, 2, 3, 4, 5 ]

// loop
for (let value of mySet.values()) {
  console.log(value);
}
