class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

Car.prototype.summarize = () => {
    console.log(this) // window global
    return `This car is a ${this.make} in the colour ${this.colour}`;
};

// Car.prototype.summarize = function () {
//     return `This car is a ${this.make} in the colour ${this.colour}`;
// };

console.log('***************Prototype Method******************')
var car = new Car('123', 'black');
console.log(car.summarize());
console.log(car)
console.log(Car)
console.log(car.__proto__) // prototype của Car
console.log(car.__proto__.__proto__);
console.log(typeof car) // object
console.log(car.valueOf() === car)