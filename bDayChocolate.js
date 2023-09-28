function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}

function sum1(arr) {
    for (let i = 0; i <= arr.length ; i++) {
        let sum = arr[i]+arr[i+1];
        return sum;
    }
}
function sum2(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  function length(s,m){
    return s.length - m;
  }

birthday([1, 2, 1, 3, 2], 3, 2) // 2
module.exports = {birthday, sum1, sum2, length};
