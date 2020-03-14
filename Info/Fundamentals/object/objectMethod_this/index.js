let user = {
    name: "John",
    age: 30,
    sayHi3() {
        console.log('Hello3')
    },
    sayHi4: function () {
        console.log('Hello4')
    }
};

function sayHi2() {
    console.log(this.name)
}

user.sayHi = function () {
    console.log("Hello!");
};

user.sayHi2 = sayHi2;
user.sayHi2();

user.sayHi(); // Hello!
console.log(user)
