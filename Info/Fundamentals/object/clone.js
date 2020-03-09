'use strict';
const _ = require('lodash');

let objects = {
  id: 1,
}

let deep = _.cloneDeep(objects);
console.log(objects);
console.log(deep);
console.log(deep === objects);
// => false

let deep2 = Object.assign(objects, {});
console.log(deep2 === objects); // true