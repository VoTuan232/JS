"use strict";

/*
Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
*/

const points = {
  strength: 9,
  skill: 7,
  intelligence: 5
};

const pointsDoubled = Object.entries(points).map(([attribute, score]) => {
  return [attribute, score * 2];
});

console.log(pointsDoubled);
console.log(Object.fromEntries(pointsDoubled)); // Browser support??
