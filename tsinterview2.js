//Sum of the array
const sumOfAry = a => {
	return a.reduce((sum, el) => sum + el, 0);
}
==========
const add = (a, b) => {
  return b ? a+b : b => a+b;
}

console.log(sumOfAry([2,5,7,9,10]))

--------------
//find the missing number from array;

const missing = arr => {
	let arySum  = arr.reduce((sum, el) => sum+el);
  let d = arr.length + 1;
  let total = (d*(d+1))/2;

  return total - arySum;
}

console.log(missing([1,2,4,6,5,9,7,8]));

--------------
//Difference between
function x(){} //function statement

let x = function(){} //varibale expression

x is hosited to undefined.

--------------

cacheRegister algoritm // QUESTION:

------------
