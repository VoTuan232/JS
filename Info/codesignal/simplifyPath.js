"use strict";

let simplifyPath = path => {
  for (let i = Math.ceil(path.split("/").length - 1); i > 0; i--) {
    let dot = "//";
    for (let j = 1; j < i; j++) {
      dot = dot + "//";
    }
    path = path.split(dot).join("/");
  }
  for (let i = Math.ceil(path.split("/").length - 1); i > 0; i--) {
    let dot = "/./";
    for (let j = 1; j < i; j++) {
      dot = dot + "./";
    }
    path = path.split(dot).join("/");
  }
  // console.log(path);
  for (let i = Math.ceil(path.split("/").length / 2); i > 0; i--) {
    if (i === 2) {
      let dot = "..";
      for (let j = 1; j < i; j++) {
        dot = dot + "/..";
      }
      path = splice(path.split(dot), i);
    }
    // console.log(i);
    // console.log(path);
  }

  return `/${path}`.split("//").join("/");
};

let splice = (x, number) => {
  console.log("x");
  console.log(x);
  console.log("number");
  console.log(number);
  for (let [key, value] of x.entries()) {
    if (x.length > 1) {
      if (key % 2 === 0) {
        let i = value.split("/").filter(x => x !== "");
        if (i.length <= number) {
          i = i.splice(0, i.length - 1);
        } else {
          i.splice(value.split("/").length - 1 - number, number);
        }
        i = i.filter(x => x !== "");
        x[key] = i.join("/");
      } else {
        x[key] = value
          .split("/")
          .filter(x => x !== "")
          .join("/");
      }
    } else {
      x[key] = value
        .split("/")
        .filter(x => x !== "")
        .join("/");
    }
  }

  return x.join("/");
};

// console.log(simplifyPath("/../")); //      "/"
// console.log(simplifyPath("//a//b//./././c")); //   /a/b/c
// console.log(simplifyPath("a/../../b/")); //   /b
console.log(simplifyPath("a/b/../c/d/../../e/../../")); //   /"/"
