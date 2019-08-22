//convert obj to array
let arr = {
a:1,
b:2
} //o/p [1,2]

const convertToArray = arr => {
 let result = [];
	Object.keys(arr).forEach(el => {
  	result.push(arr[el])
  });

  return result;

}

Solution2 : Object.values(obj);
--------------------
//Reverse a string
const reverseString = str => {
  return str.split('').reverse().join('');
}

console.log(reverseString('hi'));
--------------------

let arr = {
  a: 1,
  b: 2,
  getA() {
    console.log("a");
    return this //add this if you are calling a method again
  },
  getB() {
    console.log("b")
  }
}
console.log(arr.getA().getB());

----------------
//Print array in format 1,2,3,4

const printArrayElement = arr => {
	let result = '';
  arr.forEach((el, i)=> {
  	result += i === arr.length-1 ? el : el + ','
  })
  return result
}

Solution2 : console.log([1,2,3,4,5,6].join(','))

--------------------

const a = function(x) {
  this.x = x;
}

const b = function(x, y) {
  this.y = y;
  //this.x = a.call(x);
  a.call(this,x);
  getX () {
  	return this.x
  }
  getY(){
  	return this.y
  }
}

const newB = new b('a', 'b');

console.log(newB.getX());
console.log(newB.getY());

------------------
const obj = {
	x : 1,
  getX(){
  	const inner = function() {
    	console.log(this.x)
    }
    inner();
  }
}

obj.getX(); //undefined
//Soln 1 replace function to =>
//Soln 2 this = that caching reference
//soln 3 bind(this)
