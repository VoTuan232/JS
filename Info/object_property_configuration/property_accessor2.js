// Link : https://javascript.info/property-accessors

'use strict';

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new User("John", 25);

// image: age => birthday
// sử dụng nếu tham số truyền vào hàm thay đổi, và tham số đó đc dùng ở nhiều nơi
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age