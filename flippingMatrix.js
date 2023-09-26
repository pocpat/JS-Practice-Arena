// THERE IS NO MY SOLUTION .    DOESN'T WORK PROPERLY





// function flippingMatrix(matrix) {
//     const reversedMatrix = matrix.map(row => row.reverse()).reverse();
//     const sum = reversedMatrix.flat().reduce((acc, curr) => acc + curr, 0);
//     return { reversedMatrix, sum };
//   }
  
//   const matrix = [
//     [112, 42, 83, 119],
//     [56, 125, 56, 49],
//     [15, 78, 101, 43],
//     [62, 98, 114, 108]
//   ];
  
//   const { reversedMatrix, sum } = flippingMatrix(matrix);
  
//   console.log('Reversed Matrix:', reversedMatrix);
//   console.log('Sum:', sum);
// ======================================================================
//   input 
// 1
// 2
// 112 42 83 119
// 56 125 56 49
// 15 78 101 43
// 62 98 114 108


// expected output 
// reversed matrix 
// [
//     [119, 114, 42, 112],
//     [56, 125, 101, 49],
//     [15, 78, 56, 43],
//     [62, 98, 83, 108]
//   ] 
//   the sum 414
// ========================================================================      
    //   module.exports = { };


    //  ==========================> from GPT <==========================

    function rotateLeft(d, arr) {
        for (var i = 0; i < d; i++) {
          arr.unshift(arr.pop());
        }
        return arr;
      }
      
      function sumUpperLeftQuadrant(matrix) {
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        // const middleRow = Math.floor(numRows / 2);
        // const middleCol = Math.floor(numCols / 2);
        let sum = 0;
      
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            sum += matrix[i][j];
          }
        }
      
        return sum;
      }
      
      function maximizeUpperLeftSum(matrix) {
        const originalSum = sumUpperLeftQuadrant(matrix);
        let maxSum = originalSum;
        const numRows = matrix.length;
        const numCols = matrix[0].length;
      
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            const rotatedMatrix = rotateLeft(1, matrix); // Rotate the matrix left by one step
            const currentSum = sumUpperLeftQuadrant(rotatedMatrix);
      
            if (currentSum > maxSum) {
              maxSum = currentSum;
              matrix = rotatedMatrix; // Update the matrix if the currentSum is greater
            }
          }
        }
      
        return matrix;
      }
      
      const matrix = [
        [112, 42, 83, 119],
        [56, 125, 56, 49],
        [15, 78, 101, 43],
        [62, 98, 114, 108]
      ];
      
      const rotatedMatrix = maximizeUpperLeftSum(matrix);
      console.log(rotatedMatrix);
      