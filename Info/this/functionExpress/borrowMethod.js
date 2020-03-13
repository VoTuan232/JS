"use strict";

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
  computeAvg: function() {
    var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
  }
};

appController.computeAvg.apply(gameController);
console.log(gameController.avgScore); // 15

appController.computeAvg.apply(appController);
console.log(appController.avgScore); // 40
