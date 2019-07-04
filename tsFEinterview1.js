///sum of perimeter in a matrix

let mat1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

let mat2 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]

let mat = [
  [1, 2],
  [1, 1]
]

const sumOfMatrixEdges = mat => {
  let sum = 0;
  mat.forEach((row, i) => {
    if (i === 0 || i === mat.length - 1) {
      sum += row.reduce((count, el) => count + el, 0);
    } else {
      sum += row[0] + row[row.length - 1];
    }
  });
  return sum;
}

console.log(sumOfMatrixEdges(mat))
==================
//Q2 implement myReduce
======
//Q3 implement myPromise
=====
//f(1)(2)(3) == 9
//f(2)(2)(1) == 4
//f(2,2,1) == 4
//f() == 0

let f = function(a,b,c) {
	if(a && b && c){
  	return (a+b)*c;
  }
  else if( a && b){
  	return function(c){
    	return (a+b)*c;
    }
  }
  else if(a) {
  	return function(b){
    	return function(c){
      	return (a+b)*c;
      }
    }
  }

  else return 0;
}

console.log(f(1)(2)(3))
console.log(f(2)(2)(1))
console.log(f(2,2,1))
console.log(f())
console.log(f(1,4)(3))
