function isPrime (n){

    if ( n%2===0){
      console.log("Not prime, divisible by 2");
    }else{
      let prime =true;
     for (let i=3; i*i<=n; i+=2){
    if (  n%i===0){
      prime=false;
      break;
    }}
    
    if(prime === true){console.log("prime")}
    else{console.log ("not prime")}}}
    isPrime(10);

    // =============> other version <====================//
    function isPrime2 (num){
      if (num <=1) return false;
      for (let i=2; i< num; i++){
        if (num%i===0) return false;
      }
      return true;
    }
    console.log(isPrime2(10));