// function oddNumbers(l, r) {

// for (let i=l; i<=r; i++){
//     if (i%2!==0){
//         console.log(i)
//     }
// }}

// l=3;
// r=9;
// oddNumbers(l,r)

function findNumber(arr, k) {

  const searchedArr = arr.slice(0, 2);
  if (searchedArr.includes(k)) {
    return "YES";
  } else {
    return "NO";
  }
}

// Complete the 'oddNumbers' function below.
// *
// * The function is expected to return an INTEGER_ARRAY.
// * The function accepts following parameters:
// *  1. INTEGER l
// *  2. INTEGER r
// */

function oddNumbers(l, r) {
  // Write your code here
  const oddArr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  return oddArr;
}


