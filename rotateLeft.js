function rotateLeft(d, arr) {
    for(let i = 0; i < d; i++) {
        arr.push(arr.shift());
    }
   console.log(arr);
    return arr;
}

rotateLeft(4,[1,2,3,4,5]);