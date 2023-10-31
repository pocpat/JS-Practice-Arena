function maximumPerimeterTriangle(sticks) {
    // Sort the sticks in ascending order
    sticks.sort((a, b) => a - b);
    let triangle = -1;
  
    // Check each consecutive triplet of sticks
    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
            // If a valid triangle is found, update it
            triangle = [sticks[i], sticks[i + 1], sticks[i + 2]];
        }
    }
  
    if (triangle === -1) {
        console.log(-1);
        return -1;
    } else {
        console.log(triangle);
        console.log(triangle);
        return triangle;
    }
  }






// function maximumPerimeterTriangle(sticks) {
//     // Sort the sticks in descending order
//     sticks.sort((a, b) => b - a);

//     for (let i = 0; i < sticks.length - 2; i++) {
//         if (sticks[i] + sticks[i + 1] > sticks[i + 2] &&
//             sticks[i] + sticks[i + 2] > sticks[i + 1] &&
//             sticks[i + 1] + sticks[i + 2] > sticks[i]) {
//             // If a valid triangle is found, return it
//             const bigestTriple = [sticks[i], sticks[i + 1], sticks[i + 2]];
//             console.log(bigestTriple);
//             return bigestTriple;
//         }
//     }

//     // No valid triangle found
//     return -1;
// }
















// function maximumPerimeterTriangle(sticks) {
//   // Sort the sticks in descending order
//   sticks.sort((a, b) => b - a);
//   const triplesArr = [];

//   // Check each consecutive triplet of sticks
//   for (let i = 0; i < sticks.length - 2; i++) {
//       if (sticks[i] + sticks[i + 1] > sticks[i + 2] &&
//           sticks[i] + sticks[i + 2] > sticks[i + 1] &&
//           sticks[i + 1] + sticks[i + 2] > sticks[i]) {
//           // If a valid triangle is found, add it to the array
//           const threeSticks = [sticks[i], sticks[i + 1], sticks[i + 2]];
//           triplesArr.push(threeSticks);
//       }
//   }

//   if (triplesArr.length === 0) {
//       return -1;
//   } else {
//     triplesArr.sort((a, b) => b[0] - a[0]);
//       console.log(triplesArr[0]);
//       return triplesArr[0];
//   }
// }





function ifTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

function possibleSticks(sticks) {
  sticks.sort((a, b) => b - a);
  for (let i = 0; i < sticks.length - 2; i++) {
    if (ifTriangle(sticks[i], sticks[i + 1], sticks[i + 2])) {
      const threeSticks = [sticks[i], sticks[i + 1], sticks[i + 2]];
      console.log(threeSticks);
      const sortedArr = threeSticks.sort((a, b) => a - b);
      return sortedArr;
    }
  }
  return -1;
}

// possibleSticks([1, 2, 3, 4, 5, 6]);
//   sticks = [1, 2, 3, 4, 5, 6]
//sticks = [1, 1, 1, 3, 3];
 sticks = [1,2,3]

maximumPerimeterTriangle(sticks);
module.exports = {
  ifTriangle,
  possibleSticks,
};
