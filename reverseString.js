//Reverse a String
const reverseStringMethod = str => {
	return str.split('').reduce((char, el) =>  char + el , '')
}

/*---------------------------------------*/

function reverseString(str){

	var myString = str;
	var v = '';
	for( var i=myString.length-1; i>=0; i--){
		v += myString[i];
	}
	return v;
}

console.log(reverseString("Ambica"));

/*---------------------------------------*/

function reverseStr(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
