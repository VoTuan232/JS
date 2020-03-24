class Car {
  constructor() {
    // Default Cost
    this.cost = function() {
      return 20000;
    };
  }
}

// Decorator function
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  };
}

// Decorator function
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 2000;
  };
}

// Decorator function
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  };
}

const car = new Car();

// Prints 20000
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);

// Calculating total cost of the car
// Prints 23000
console.log(car.cost());
