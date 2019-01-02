//rempve duplicates from an array

const removeDuplicates = arr => {

	let result = [];

  arr.forEach(el => {
  	if(!result.includes(el)){
    	result.push(el);
    }
  });
  return result;
}
