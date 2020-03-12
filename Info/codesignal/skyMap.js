"use strict";

/*
  skyMap = [['0', '1', '1', '0', '1'],
          ['0', '1', '1', '1', '1'],
          ['0', '0', '0', '0', '1'],
          ['1', '0', '0', '1', '1']]

  countClouds(skyMap) = 2;
*/
let d = 0;

let countClouds = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // console.log("**********************old matrix");
      // console.log(matrix);
      if (+matrix[i][j] === 1) {
        // console.log(`-------Duyet 1 tai i = ${i} j = ${j}`);
        matrix = dfs(matrix, i, j);
        d++;
      }
    }
  }

  console.log(d);
};

let dfs = (matrix, i, j) => {
  matrix[i][j] = 0;
  if (matrix[i - 1] && matrix[i - 1][j] && +matrix[i - 1][j] === 1) {
    // console.log("Trên");
    matrix = dfs(matrix, i - 1, j);
  }
  if (matrix[i + 1] && matrix[i + 1][j] && +matrix[i + 1][j] === 1) {
    // console.log("Dưới");
    matrix = dfs(matrix, i + 1, j);
  }
  if (matrix[i] && matrix[i][j - 1] && +matrix[i][j - 1] === 1) {
    // console.log("Trái");
    matrix = dfs(matrix, i, j - 1);
  }
  if (matrix[i] && matrix[i][j + 1] && +matrix[i][j + 1] === 1) {
    // console.log("Phải");
    matrix = dfs(matrix, i, j + 1);
  }

  return matrix;
};

let matrix = [["1", "1", "1", "1", "1", "1", "1"]];

countClouds(matrix);
