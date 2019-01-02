//return maxChar count and el in a string

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
