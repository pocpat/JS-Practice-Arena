function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o"];
    let string = "javascriptloops";
    let arrayOfChar = Array.from(s);
 
const filterVowels = arrayOfChar.filter(letter=> letter === "a" || letter === "e"|| letter === "i"|| letter === "o");
 //console.log(filterVowels);
const filterConsonants =  arrayOfChar.filter(letter=> letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o");
 //console.log(filterConsonants);
 let allLetersPrints= [...filterVowels, ...filterConsonants]

 for (const allLetersPrint of allLetersPrints) // prints in column
 console.log(allLetersPrint);
}
vowelsAndConsonants();

function main() {
    const s = readLine("javascriptloops");
    
    vowelsAndConsonants(s);
}


// ==================================> another example <========================================//
function vowelsAndConsonants(s) {
    const vowels = {a: 1, e: 1, i: 1, o: 1, u: 1};   // for O(1) lookup
    const consonents = [];    // why use 2 arrays when you only need 1
    s.split("").map(char => {
      if(vowels[char]){
        console.log(char);    // directly printinting vowels as we process them 
      }else{
        consonents.push(char); 
      }
    });
    for(let char of consonents) console.log(char);   
}