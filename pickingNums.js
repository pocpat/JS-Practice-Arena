
function pickingNumbers(a) {
const sortedA = a.sort((a, b) => a - b);
let currentSubarrayLength = 1;
let longestSubarrayLength = 0;

for (let i=0; i<sortedA.length; i++) {
    for(let j=i+1; j<sortedA.length; j++) {
        if(sortedA[j] - sortedA[i] <= 1) {
            currentSubarrayLength++;
        } else {
            break;
        }
    }   

if(currentSubarrayLength > longestSubarrayLength) {
    longestSubarrayLength = currentSubarrayLength;
}
currentSubarrayLength = 1;
// console.log('currentSubarrayLength',currentSubarrayLength);
 console.log('longestSubarrayLength',longestSubarrayLength);

}
return longestSubarrayLength;
}



function minusOne(a) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    // console.log('sortedA[i]',sortedA[i]);
    if (a[i+1] - a[i] <= 1) {
      arr1.push(a[i]);
      console.log("arr1", arr1);
    } else {
      arr2.push(a[i]);
      // console.log(arr2);
    }
  }
}

//  pickingNumbers([1,2,2,3,1,2]) // 5

 pickingNumbers([4, 6, 5, 3, 3, 1]); // 3
// pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
module.exports = {pickingNumbers, minusOne};
