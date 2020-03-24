// Cải tiến hơn

arr = [1, 2, 3];

function bubbleSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let check = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        check = false;
      }
    }

    // Nếu check = false ko đc chạy tới; tức dãy đó đã đc sắp xếp đúng rồi => dừng
    if (check) {
      break;
    }
  }
}

bubbleSort(arr);
console.log(arr);
