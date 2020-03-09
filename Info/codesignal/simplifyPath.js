"use strict";

let simplifyPath = path => {
  path = path.split("//").join("/");
  // console.log(path);
  path = path.split("/./").join("/");
  const x = path.split("..");
  if (x.length > 1) {
    for (let [key, value] of x.entries()) {
      if (key % 2 === 0) {
        let i = value.split("/");
        i.splice(value.split("/").length - 2, 1);
        i = i.filter(x => x !== "");
        x[key] = i.join("/");
      }
      x[key] = value
        .split("/")
        .filter(x => x !== "")
        .join("/");
    }
  }
  console.log(x);
  return `/${x.join("/")}`;
};

// console.log(simplifyPath('/home/a/./x/../b//c/')) => /home/a/b/c
// console.log(simplifyPath('/home/a/./x/../b//c/'));
/* //: remove, ..,    */
let str = "abc";
let patt1 = "/w/g";
// console.log(str.replace(patt1));

console.log(simplifyPath("/home/a/./x/../b//c/"));
// /home/a/x/../b/c/
