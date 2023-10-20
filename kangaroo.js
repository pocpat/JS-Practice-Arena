function kangaroo(x1, v1, x2, v2) {
    // Write your code here
let x1New= 0;
let x2New= 0;

for(let i=0; i<10000; i++){
    x1New= x1 + v1*i;
    x2New= x2 + v2*i;
    if(x1New===x2New){
        return "YES"
    }else{"NO"}
}
    
}

kangaroo(0,3,4,2) // YES