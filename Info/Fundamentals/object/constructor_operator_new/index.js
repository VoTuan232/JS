function User(name) {
    // this = {};  (implicitly)

    // CHECK OBJECT CREATED BY NEW OPERATOR OR NOT
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    // PROPERTIES
    this.name = name;
    this.isAdmin = false;

    // OBJECT METHOD
    this.sayHi = function () {
        alert("My name is: " + this.name);
    };

    // RETURN
    // return { name: "Godzilla" };  // <-- returns object { name: "Godzilla" }
    // return; // <-- returns this

    // return this;  (implicitly)
} // Hàm constructor

let user = new User("Jack");

console.log(user)
console.log(user.name); // Jack
console.log(user.isAdmin); // false