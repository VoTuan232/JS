// Chọn giá trị min là phần tử đầu, sau đó so sánh với tất cả => swap (i=0)
// Lặp tiếp với i = 1

// O(n2)

arr = [0, 3, 4, 12, 234, 34, 1, 0, -1, 2323, 7];

function selectionSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    // min là a[i]
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        // đổi chỗ a[min] và a[j]
        let temp = arr[min];
        arr[min] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

selectionSort(arr);
console.log(arr);
