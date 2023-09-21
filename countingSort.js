function countingSort(arr) {
  let finalArray = Array(5).fill(0);
//   console.log(finalArray);
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
// console.log(finalArray[num]);

    finalArray[num]++;
    }
 return finalArray;
}
 


countingSort([1, 1, 3, 2, 1]);

// ===========================> test  <===================================================================

function arrayZirrows(arr) {
  let zirrows = Array(arr.length).fill(0);
  return zirrows;
}
function countPlace(arr) {
  const finalArr = arrayZirrows(arr);
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    finalArr[num]++;
    }
  return finalArr;
}

module.exports = { arrayZirrows,countPlace };