// "use strict";

// Chúng ta có 2 đối tượng, 1 đối tượng có hàm computeAvg() và 1 đối tượng thì không
// Chúng ta sẽ thực hiện mượn hàm này
var gameController = {
  scores: [10, 15, 20],
  avgScore: null,
  players: [
    { name: "Tommy", playerID: 987, age: 23 },
    { name: "Pau", playerID: 87, age: 33 }
  ]
};

var appController = {
  scores: [30, 40, 50],
  avgScore: null,
  computeAvg: function () {
    console.log(this) // gameController nếu apply gameController 
    console.log(this.valueOf() === gameController) // true nếu apply gameController
    var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
  }
};

console.log('**************Borrow Method***********')
// appController.computeAvg.bind(gameController)(); // bind tạo hàm mới
console.log('Apply gameController')
appController.computeAvg.apply(gameController); // call, apply gọi hàm trực tiếp
console.log(gameController.avgScore); // 15

console.log('Dont apply')
appController.computeAvg();
console.log(appController.avgScore); // 40
