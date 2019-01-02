function checkPrime(num){
var i = 3;
	if(num % 2 == 0){
  	return false;
  }
  else{
  	for(;i<num;i++){
    	if( num % 3 == 0){
      	return false
      }
    }
  }
  return true;
}

console.log(checkPrime(193));




/****
*/
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}

> isPrime(137);
  = true
> isPrime(237);
  = false
        