function getTotalX(a,b){
const maxA=Math.max(...a);
const minB=Math.min(...b);
let count = 0;
for (let i=maxA; i<=minB; i++){
    if( a.every(val => i % val === 0)){
        if(b.every(val => val % i === 0)){
            count++;
        }
    }

    }
    console.log(count);
}

getTotalX([2,4],[16,32,96]);











// function getTotalX(a, b) {
// let maxA = Math.max(...a);
// let minB = Math.min(...b);
// let count = 0;
// for(let i = maxA; i <= minB; i++) {
//     if(a.every(val => i % val === 0)) {
//         if(b.every(val => val % i === 0)) {
//             count++;
//         }
//     }
// }
// console.log(count);
// return count;
// }

// getTotalX([2, 4], [16, 32, 96]); // 3