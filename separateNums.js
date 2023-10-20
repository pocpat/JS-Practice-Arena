function separateNumbers(s) {
    let len = s.length;

    for(let i=1; i<=len/2; i++) {
        let firstNum = s.slice(0, i);
        let remainingStr = s.slice(i);
        let isValid = true;
        while(remainingStr.length > 0) {
            let nextNum = (BigInt(firstNum) + BigInt(1)).toString();
            if(!remainingStr.startsWith(nextNum)) {
                isValid = false;
                break;
            }
            remainingStr = remainingStr.slice(nextNum.length);
            firstNum = nextNum;
        }
        if(isValid) {
            console.log("YES " + s.slice(0, i));
            return;
        }
    }
    console.log("NO");
}

separateNumbers("99100"); // YES 99
// separateNumbers("1234"); // YES 1
// separateNumbers("91011"); // YES 9
// separateNumbers("99100"); // YES 99
// separateNumbers("101103"); // NO
// separateNumbers("010203"); // NO
// separateNumbers("13"); // NO
// separateNumbers("1"); // NO

// a[i]-a[i-1] <= 1
// a[i]!==0

module.exports = { separateNumbers };