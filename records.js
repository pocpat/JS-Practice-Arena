function breakingRecords(scores) {
 
    const initScore = scores[0];

    let min =[initScore];
    let max = [initScore];
    for (let n=1; n<scores.length; n++) {
        if (scores[n] < min[min.length-1]) {
            min.push(scores[n]);
        } else if (scores[n] > max[max.length-1]) {
            max.push(scores[n]);
        }
    }

return [max.length-1, min.length-1];

};

breakingRecords('10 5 20 20 4 5 2 25 1');