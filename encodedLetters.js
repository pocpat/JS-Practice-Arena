// 1 receive string of digits of ASCII code
// 2 pick valid values
// 3 convert array of digits to array of ASCII codes

// value range of a-z: 97-122
// value range of A-Z: 65-90
// value range of space: 32

// params: string encoded
// return string decoded
// constrains: 1<= |S| <=100
// s[i] an ascii code of a valid character (a-z, A-Z, space)
// sttic alocation or dinamic allocation

//convert string into array of ASCII digits
//convert array of ASCII digits into array of digits

 
function decode(encoded) {
    let digits = [];
    let decoded = [];
    encoded = encoded.split("").reverse().join("");
    for (let i=0; i<=encoded.length; i++) {
        let curentChar = encoded[i];
        if (curentChar === "1") {
            curentChar += encoded[i+1];
            curentChar += encoded[i+2];
            i += 2;
            let intVal = parseInt(curentChar);
            digits.push(intVal);
        }
        else if ( encoded[i] === "3" && encoded[i+1] === "2" ) {
            digits.push(32);
            i++;
        }
        else if ( encoded[i] === "3" ||encoded[i] === "2" || encoded[i] === "4" || 
        encoded[i] === "5") {
            continue;
        }
        else  {
            curentChar += encoded[i+1];
            i++;
            let intVal = parseInt(curentChar);
            digits.push(intVal);
        }
        
    }

    for (let i=0; i<=digits.length; i++) {

        decoded.push(String.fromCharCode(digits[i]));
    }
    return decoded.join("");
}

