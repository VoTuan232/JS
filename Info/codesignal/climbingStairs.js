"use strict";

/*
  Lên cầu thang 1 hoặc 2 bước

*/

let climbingStairs = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbingStairs(n - 1) + climbingStairs(n - 2);
};

console.log(climbingStairs(5));
