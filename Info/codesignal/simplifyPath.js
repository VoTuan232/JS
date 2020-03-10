"use strict";

/*
  // => /
  ./ => remove
  .. => parent
*/

let simplifyPath = path => {
  path = removeSpecial(path, [
    { o: "//", d: "/", reg: new RegExp(/\/\//g, "g") },
    { o: "/.", d: "", reg: new RegExp(/\/\./g, "g") }
  ]);

  console.log(path);
  return path;
};

let removeSpecial = (string, characters = []) => {
  for (let character of characters) {
    // console.log(new RegExp(character.o, "g"));
    let text = "";
    for (let i = Math.floor(string.length - 1); i > 0; i--) {
      text = text + character.o;
      // console.log("text");
      // console.log(text);
      // console.log("before");
      // console.log(string);
      string = string.replace(character.reg, character.d);
      // console.log("after");
      // console.log(string);
    }
  }

  return string;
};

// console.log(simplifyPath("/../")); //      "/"
// console.log(simplifyPath("//a//b//./././c")); //   /a/b/c
// console.log(simplifyPath("a/../../b/")); //   /b
// console.log(simplifyPath("a/b/../c/d/../../e/../../")); //   /"/"

simplifyPath("//a//b//./././c");
// console.log("/./a".replace("/.", ""));
// console.log("/a/b/./././c".replace(/\/\./g, "1"));
// console.log("/a/b/./././c".replace(new RegExp(/\/\./g, "g"), "1"));
// console.log(new RegExp("//", "g"));
