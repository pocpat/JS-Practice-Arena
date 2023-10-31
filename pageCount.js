function pageCount(n, p) {
    if(p < n/2 ){
        const fromBegining = p / 2;
        return Math.floor(fromBegining);
    } else {
        const fromEnd = (n - p) / 2;
        return Math.floor(fromEnd);
    }
}

// console.log(pageCount(6, 2)); // 1
console.log(pageCount(5, 4)); // 0














// module.exports = { findMedian, sortArr, medianIndex};