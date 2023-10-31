function migratoryBirds(arr) {
    // Write your code here
    let sortedArr = arr.sort((a, b) => a - b);
    // console.log("sortedArr : " + sortedArr);
    
    const result = [];
    let subarray = [];

    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            // Start a new subarray when a new element is encountered
            if (subarray.length > 0) {
                result.push(subarray);
            }
            subarray = [arr[i]];
        } else {
            // Add the element to the current subarray
            subarray.push(arr[i]);
        }
    }
    
    // Push the last subarray if it's not empty
    if (subarray.length > 0) {
        result.push(subarray);
    }

    // console.log("result : " + JSON.stringify(result));

    let longestSubarray = result[0]; // Initialize with the first subarray
    for (let i = 1; i < result.length; i++) {
        if (result[i].length > longestSubarray.length) {
            longestSubarray = result[i];
        }
    }

    // console.log("Longest Subarray: " + JSON.stringify(longestSubarray));
    
    // Find the numbers that were the longest duplication
    const longestNumbers = [...new Set(longestSubarray)]; // Use a Set to remove duplicates
    // console.log("Longest Numbers: " + JSON.stringify(longestNumbers));
    return longestNumbers;
}

// const longestDuplication = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
// console.log("Longest Duplication: " + JSON.stringify(longestDuplication));




 migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

// migratoryBirds([4, 2, 5, 1, 6, 4, 3, 5,2]);
// let arr = [4, 2, 8, 1, 6, 9, 3, 5, 7];
// let arr = [1, 2, 3, 3, 4, 5, 5];
