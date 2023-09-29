function sockMerchant(n, ar) {
    // Write your code here
let sortedAr = ar.sort((a,b)=>a-b);

function friquancy(sortedAr){
    const frMap = {};
    for (const num of ar){
        if (frMap[num]){
            frMap[num] += 1;
        } else {
            frMap[num] = 1;
        }
    }
    // console.log(frMap);
    return frMap;
    
    }


    function devideToPairs(frMap){
        let pairs = [];
        let total = 0;
         for (const key in frMap){
         const value = frMap[key];
         const pair = Math.floor(value/2);
         pairs.push(pair);
         total += pair;
         }
        
         return total;
       
     }
return (devideToPairs(friquancy(sortedAr)));
}

sockMerchant(9,[10,20,20,10,10,30,50,10,20]);

function sort(ar){
    return ar.sort((a,b)=>a-b);
}
function friquancy(ar){
const frMap = {};
for (const num of ar){
    if (frMap[num]){
        frMap[num] += 1;
    } else {
        frMap[num] = 1;
    }
}
console.log(frMap);
return frMap;

}
friquancy([1,1,1,5,5]);


function findFrics(ar){
    const frics = [];
    for (let i = 0; i < ar.length-1; i++){
        if (ar[i] === ar[i+1]){
            frics.push([ar[i],ar[i+1]]);
        }
    }
    return frics;
}
function devideToPairs(frics){
   let pairs = [];
   let total = 0;
    for (const key in frics){
    const value = frics[key];
    const pair = Math.floor(value/2);
    pairs.push(pair);
    total += pair;
    }
   
    return total;
  
}
devideToPairs({ '1': 3, '5': 2 });





module.exports =  {sort,friquancy,devideToPairs,sockMerchant};