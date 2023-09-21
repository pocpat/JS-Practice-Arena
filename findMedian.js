function findMedian(arr) {
const sortedArr = arr.sort((a,b)=>a-b);
const medianIndex = (arr.length-1)/2;
const median = sortedArr[medianIndex];
return median;
}

// findMedian([0,1,2,4,6,5,3]) // 3




function sortArr(arr)  {
const sortedArr = arr.sort((a,b)=>a-b);
return sortedArr;
}


function medianIndex(arr){
    const sortedArr = arr.sort((a, b) => a - b);
    const medIndex = Math.floor((sortedArr.length-1)/2);
    const median = sortedArr[medIndex];
    return median;
}
module.exports = { findMedian, sortArr, medianIndex};