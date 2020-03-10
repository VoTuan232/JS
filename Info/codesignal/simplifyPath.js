"use strict";

let simplifyPath = path => {};

// console.log(simplifyPath("/../")); //      "/"
// console.log(simplifyPath("//a//b//./././c")); //   /a/b/c
// console.log(simplifyPath("a/../../b/")); //   /b
console.log(simplifyPath("a/b/../c/d/../../e/../../")); //   /"/"
