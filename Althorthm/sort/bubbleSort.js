// Lặp liên tục từ phần tử i, nếu a[i] > a[i+1] -> swap() => luôn tìm đc a[i] là nhỏ nhất sau mỗi lần lặp
// O(n2)

arr = [3, 4, 12, 234, 34, 1, 0, -1, 2323];

function bubbleSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);
