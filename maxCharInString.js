//return maxChar count and el in a string

//Max chars in a string
const maxChars = str => {
let  max =0, element='';

let charMap = str.split('').reduce((ob, el) => {
	ob[el] = ob[el] + 1 || 1;
	return ob
}, {})


Object.keys(charMap).forEach(el => {
	if(charMap[el] > max){
		max = charMap[el];
		element = el;
	}
})
return element + ' : ' + max
}

console.log(maxChars('hello '))


//=========
//Sol 2

const maxChar = str => {
	let charMap = {}, max = 0, maxCh;
  str.split('').forEach(el => {
  	charMap[el] = charMap[el] + 1 || 1;
  });

  Object.keys(charMap).forEach(el => {
  	if(charMap[el] > max){
    	max = charMap[el];
      maxCh = el;
    }
  })

  return max + ':' + maxCh;
}

console.log(maxChar("Hellooooo"));
