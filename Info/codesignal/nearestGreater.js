/*
  For a = [1, 4, 2, 1, 7, 6], the output should be
  nearestGreater(a) = [1, 4, 1, 2, -1, 4].

  for a[0], the nearest larger element is 4 at index a[1] -> b[0] contains the value 1.
  for a[1], the nearest larger element is 7 at a[4] -> b[1] contains the value 4.
  for a[2], the nearest larger element is 4 at a[1] (7 is also larger, but 4 has the minimal position) -> b[2] contains the value 1.
  for a[3], the nearest larger element is 2 at a[2] (7 is also larger, but 2 has the minimal position) -> b[3] contains the value 2.
  for a[4], there is no element larger than 7 -> b[4] contains the value -1.
  for a[5], the nearest larger element is 7 at a[4] -> b[5] contains the value 4.
*/

let nearestGreater = array => {
  let lA = array.length;
  let newArray = array.map((item, index) => {
    let pos = -1;
    for (let i = index - 1; i >= 0; i--) {
      if (array[i] > item) {
        pos = i;
        break;
      }
    }

    for (let i = index + 1; i < lA; i++) {
      if (array[i] > item) {
        if (pos === -1 || index - pos > i - index) pos = i;
        break;
      }
    }
    return pos;
  });

  return newArray;
};

let array = [7, 4, 7, 2, 7, 6];
nearestGreater(array);
