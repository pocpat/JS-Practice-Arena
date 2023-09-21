function diagonalDifference(arr) {
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }
  let diffference = Math.abs(sum1 - sum2);
  return diffference;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);


