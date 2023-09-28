// correct solution, but doesn't pass Hackerrank test. 
// probably can't get two inputs 



// let k = 5;
// let A = [1, 2, 2, 1];
// let B = [3, 3, 3, 4];

let k=10
let A=[2,1,3]
let B=[7,8,9]

function twoArrays(k, A, B) {
  // Write your code here
  function sortA(A) {
    return A.sort((a, b) => a - b);
  }
  function sortB(B) {
    return B.sort((a, b) => b - a);
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
    return "YES";
  }
}

function sortA(A) {
  return A.sort((a, b) => a - b);
}
function sortB(B) {
  return B.sort((a, b) => b - a);
}
console.log(sortA(A));
console.log(sortB(B));
function yesno(k, A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
    return "YES";
  }
}

// let k=5
// let A=[1,2,2,1]
// let B=[3,3,3,4]
// NO

// k=10
// A=[2,1,3]
// B=[7,8,9]
// YES

console.log(twoArrays(k, A, B));



//============================> works , not mine <=========================================================
function twoArrays(k, A, B) {
  return A.sort((a, b) => +a - +b).every(
    (element, index) => element + B.sort((a, b) => +b - +a)[index] >= k
  )
    ? "YES"
    : "NO";
}

// =================================================================================================
