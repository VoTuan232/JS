"use strict";

/*
  Mặc định, 1 đối tượng có 2 hàm:
    Phương thức toString trả về một chuỗi "[Object Object]".
    Phương thức valueOf trả về chính đối tượng.

  Trong trường hợp không có Symbol.toPrimitive và valueOf, toString sẽ xử lý tất cả các chuyển đổi nguyên thủy.
*/

let user = { name: "John" };

console.log(user); // { name: 'John' }
console.log(user.valueOf() === user); // true
console.log(user.valueOf()); // { name: 'John' }
console.log(user.toString()); // [object Object]

console.log("**************DEMO2**************");
let user2 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    console.log("toString");
    console.log(this);
    return `{name: "${this.name}"}`;
  }

  // for hint="number" or "default"
  // valueOf() {
  //   return this.money;
  // }
};

console.log(user2); // toString -> {name: "John"} // working on browser
console.log(+user2); // valueOf -> 1000
console.log(user2 + 500); // valueOf -> 1500

console.log("***********DEMO3*******");
let user3 = {
  name: "John",

  toString() {
    console.log("toString");
    return this.name;
  }
};

console.log(user3); // toString -> John
console.log(user3 + 500); // toString -> John500
