function convertS(s) {
    // Write your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
let sl = s.toLowerCase();
let result =  sl;
return result;

}
convertS('The quick');

function noSpaces(s) {
 const noSpaces = s.replace(/\s/g, '');
    return noSpaces;
}   

function    pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sl = s.toLowerCase();
    const newSrting = sl.replace(/\s/g, '');

const uniquCharsFromNewString = new Set(newSrting);
const numberOfUniqueChars = uniquCharsFromNewString.size;
if (numberOfUniqueChars === alphabet.length) {
    return 'pangram';
} else {
    return 'not pangram';
}
}




module.exports = {convertS, noSpaces, pangrams};