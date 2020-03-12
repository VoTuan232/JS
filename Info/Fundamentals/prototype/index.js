"use strict";

//Tạo ra 1 mẫu khởi tạo, cũng là tạo ra 1 prototype object
function Person(_age, _name) {
  this.age = _age;
  this.name = _name;
}
console.log(Person.prototype)

//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
Person.prototype.height = 0;
console.log(Person.prototype)

//Tạo ra 1 instance của Person
//Có cả 3 thuộc tính của mẫu khởi tạo Person
var john_person = new Person(10, "John");
console.log(john_person)
for (var att in john_person) {
  console.log(att);
}

//Xem đối tượng prototype của instance vừa tạo
console.log(john_person.__proto__); // trỏ tới prototype của Person
console.log(john_person.prototype); // 1 instance ko có prototype
console.log(Person.__proto__); // trỏ tới prototype của function
console.log(Person.prototype); // equals john_person.__proto__