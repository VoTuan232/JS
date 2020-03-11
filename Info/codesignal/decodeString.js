"use strict";

/*
  For s = "4[ab]", the output should be
  decodeString(s) = "abababab";

  For s = "2[b3[a]]", the output should be
  decodeString(s) = "baaabaaa";

  For s = "z1[y]zzz2[abc]", the output should be
  decodeString(s) = "zyzzzabcabc".
*/

function decodeString(s) {
  let res = getDecodeString(s);
  while (res.includes("[")) {
    res = decodeString(res);
  }
  return res;
}

function getDecodeString(s) {
  const arr = s
    .trim()
    .split(/(\d+\[\w+\])/)
    .filter(item => item !== "");
  let resArr = [];
  for (let item of arr) {
    if (item.match(/\d+\[\w+]/i)) {
      let temp = item.split(/\[/i);
      let numberPart = temp[0];
      let textPart = temp[1].match(/\w+/i);
      let textRes = "";
      for (let i = 0; i < numberPart; i++) {
        textRes += textPart;
      }
      resArr.push(textRes);
    } else {
      resArr.push(item);
    }
  }
  return resArr.join("");
}

let s = "2[bx2xx312[xxx2a]]";
console.log(s.split(/(\d+\[\w+\])/));
