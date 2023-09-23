function marsExploration(s) {
   
const sosNums = s.length/3;
const origMessage = "SOS".repeat(sosNums);



let differences = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] !== origMessage[i]) {
        differences++;
    }
   
}
return differences;
}




function numberSOSs(s) {
    const sosNums = s.length/3;
    return sosNums;
}

function origMesg(n) {
    return "SOS".repeat(n);
   
}

function compare(s, origMesg) {
   if(s.length === origMesg.length) {
         return true;
    }
    return false;
}

function findDifferences(s, origMesg) {
    let differences = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== origMesg[i]) {
            differences++;
        }
    }
    return differences;
}







module.exports = {numberSOSs, origMesg, compare,findDifferences, marsExploration};