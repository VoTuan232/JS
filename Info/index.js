'use strict'

var imgs = {
  a: function () {
    this.b();
  },
  b: function () {
    console.log("b");
  },
  c: function () {
    console.log("c");
  }
};

let user = {
  firstName: "Ilya",
  sayHi: () => {
    console.log(this)
    // let arrow = () => console.log(this.firstName);
    // arrow();
  }
};

user.sayHi(); // Ilya
