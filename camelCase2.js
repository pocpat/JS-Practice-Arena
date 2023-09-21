// ============> works on manual testing, not in the HackerRank tests <===============================
function processData(input) {
  const str = input.substring(4);
  if (input[0] === "S") {
    if (input[2] === "M") {
      let sm1 = str.replace(
        /([a-z])([A-Z])/g,
        (match, lower, upper) => lower + " " + upper.toLowerCase()
      );

      let sm2 = sm1.slice(0, -2);

      return sm2;
    }
    if (input[2] === "C") {
      let sc1 = str.replace(
        /([a-z])([A-Z])/g,
        (match, lower, upper) => lower + " " + upper.toLowerCase()
      );
      let sc2 = sc1[0].toLowerCase() + sc1.slice(1);
      return sc2;
    }
    if (input[2] === "V") {
      let sv1 = str.replace(
        /([a-z])([A-Z])/g,
        (match, lower, upper) => lower + " " + upper.toLowerCase()
      );
      return sv1;
    }
  }

  if (input[0] === "C") {
    if (input[2] === "M") {
      let cm1 = str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      console.log(cm1);
      let cm2 = cm1.concat("()");
      console.log(cm2);
      let cm3 = cm2.replace(/ /g, "");
      console.log(cm3);
      let cm4 = cm3[0].toLowerCase() + cm3.slice(1);
      return cm4;
    }
    if (input[2] === "C") {
      let cc1 = str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
      return cc1;
    }
    if (input[2] === "V") {
        let cv1 = str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      console.log(cv1);
      let cv2 = cv1.replace(/ /g, "");
      console.log(cv2);
      let cv3 = cv2[0].toLowerCase() + cv2.slice(1);
      return cv3;
    }
  }
}

module.exports = processData;
// processData("S;M;plasticCup()"); // plastic cup
//processData("S;C;LargeSoftwareBook"); // large software book
//processData("S;V;pictureFrame"); // picture frame
//processData("C;M;white sheet of paper"); // whiteSheetOfPaper()
//processData("C;C;coffee machine"); // CoffeeMachine
processData("C;V;mobile phone"); // mobilePhone

// ====================================================================================================
// ===========================> working solution <=====================================================
// function processData(input) {
//     let lines = input.split('\r\n');
//     for (let line of lines) {
//         let entry = line.split(';');
//         let wordSet;
//         if (entry[0] == 'S') {
//             wordSet = [];
//             let wordStart = 0;
//             let name = entry[2];
//             for (let index = 0; index < name.length; index++) {
//                 if (name[index] != name[index].toLowerCase()) {
//                     wordSet.push(name.substring(wordStart, index));
//                     wordStart = index;
//                 }
//             }
//             wordSet.push(name.substring(wordStart));
//             console.log(wordSet.filter(word => word).join(' ').toLowerCase().replace('()', ''));
//         }
//         else if (entry[0] == 'C') {
//             wordSet = entry[2].split(' ');
//             for (let index = 0; index < wordSet.length; index++) {
//                 if ((entry[1] == 'C' && index == 0) || index >= 1) {
//                     wordSet[index] = wordSet[index].charAt(0).toUpperCase() + wordSet[index].substring(1);
//                 }
//             }
//             if (entry[1] == 'M') {
//                 wordSet[wordSet.length - 1] += '()';
//             }
//             console.log(wordSet.join(''));
//         }
//     }
// } 