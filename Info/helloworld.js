"use strict";
const alert = require('alert-node');
const _ = require('lodash');

const data = [{
    "id": 52,
    "carBodyKindId": 11,
    "carMakerCarKindId": 238,
    "name": "Ｊ１００トラック　１．５ｔ　２ＷＤ",
  },
  {
    "id": 52,
    "carBodyKindId": 11,
    "carMakerCarKindId": 238,
    "name": "Ｊ１００トラック　１．５ｔ　２ＷＤ",
  }
]

console.log(_.map(data, x => {
  return _.assign(x, {
    parent: 1
  });
}));