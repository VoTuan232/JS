class User {
  name = "Anonymous";

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    console.log("Come SETTER");
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();
console.log(User);
console.log(typeof User); // function
console.log(User.prototype); // constructor and all function
console.log("****GETTER vs SETTER*******");
console.log(user.name);
console.log(User.prototype.name); // undefined

// rewriting class User in pure functions

console.log("****************Cách 2 tạo Class*********************");

// 1. Create constructor function
function User2(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it

// 2. Add the method to prototype
User2.prototype.sayHi = function() {
  console.log(this.name);
};

// Usage:
let user2 = new User2("John");
user2.sayHi();
console.log(User2);
console.log(typeof User2);
console.log(User2.prototype);

console.log("*********Class expression****************");
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User3 = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User3().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class
