//Find the hightest and lowest total sum from an array.
const minMaxArray = arr => {
	let total = arr.reduce((a,b) => a+b, 0);
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  console.log(total - min , total - max);
}

console.log(minMaxArray([45, 61,1,3,5,6,8,10]));

//Find the lenth of the number
const lengthOfNumber = num => {
	/* return JSON.stringify(num).length */
  let count = 1;
  let mod ;
  while(num > 9){
    num = Math.floor(num/10);
    count ++;
  }
  return count;
}

console.log(lengthOfNumber(12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890));

//Sol 2
function integerLength(nr){
  return Math.floor(Math.log10(nr))+1
}

/////
