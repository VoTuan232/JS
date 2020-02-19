"use strict";

function almostIncreasingSequence(sequence) {
  let removedOne = false;
  for (var i = 0; i < (sequence.length - 1); i++) {
    if (sequence[i] >= sequence[i + 1])
      if (removedOne)
        return false;
      else {
        removedOne = true;
        if (i != 0 && i < sequence.length - 2) {
          if ((sequence[i - 1] < sequence[i + 1]) || (sequence[i] < sequence[i + 2]))
            continue;
          else
            return false;
        }
      }
  }
  return true;
}
console.log(almostIncreasingSequence([1, 3, 2, 1, 4]))