"use strict";

/*
Tìm số lớn thứ k từ 1 dãy []

[7, 6, 4, 3, 2, 1] , k= 2 => kthLargestElement(nums, k) = 6
*/

let kthLargestElement = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

let nums = [7, 6, 4, 3, 2, 1];

console.log(kthLargestElement(nums, 2));
