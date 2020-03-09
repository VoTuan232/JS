var arr = [];
var rows = 11;
var columns = 12;

fill2DimensionsArray(arr, rows, columns);

function fill2DimensionsArray(arr, rows, columns) {
  for (var i = 0; i < rows; i++) {
    arr.push([0]);
    for (var j = 0; j < columns; j++) {
      arr[i][j] = 0;
    }
  }
}

console.log(arr);
