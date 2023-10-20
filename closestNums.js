function closestNumbers(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);
    let minDifference = Number.MAX_SAFE_INTEGER;
    let paresWithMinDiff = [];
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        let difference = sortedArr[i + 1] - sortedArr[i];

        if (difference < minDifference) {
            minDifference = difference;
            paresWithMinDiff = [sortedArr[i], sortedArr[i + 1]];
        } else if (difference === minDifference) {
            paresWithMinDiff.push(sortedArr[i], sortedArr[i + 1]);
        }
    }
console.log(paresWithMinDiff);
    return paresWithMinDiff;
}


// let arr= [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854 ];
closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]); // -520 -470 -20 30