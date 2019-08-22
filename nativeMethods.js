//Native forEach Method
Array.prototype.myEach = function (callback) {
    for(var i=0; i< this.length; i++){
      callback(this[i], i, this)
    }
}

eg:
arr.myEach((el, i) => {
	console.log('EL ', el , i)
})

=================
/*****************NATIVE MAP*************************/

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};
//tests
var arrs = ['dic tanin', 'boo radley', 'hans gruber'];
var numbers2 = [1, 4, 9];
var goodT = arrs.myMap(function(n) {
    return n;
});
var squareRoot = numbers2.myMap(function(num) {
    return Math.sqrt(num);
});
console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
===================

//Native myFilter method
Array.prototype.myFilter = function(callback, context){
	arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
}

let arr = [3,5,7,9];

console.log(arr.myFilter((el, i) => {
	return el > 5
}))

===============
//native myReduce

Array.prototype.myReduce = function(fn, intitialValue){
	let acc = intitialValue ? intitialValue : undefined;
  for( var i=0; i< this.length; i++){
  	acc = acc ? fn.call(undefined, acc, this[i], i, this) : this[i]
  }
  return acc;
}

let arr = 'hello';
console.log(arr.split('').myReduce((acc, el) => el + acc, ''))

==========
//Sol2 :
Array.prototype.myReduce = function (callback, initValue) {
  for(var i=0; i<this.length; i++){
      if(initValue !== undefined){
          initValue = callback(initValue, this[i], i, this)
      }
      else {
        initValue = this[i]
      }
  }

  return initValue;
}

console.log([1,2,3,4].myReduce((cal, val) => cal + val));
console.log([1,2,3,4].myReduce((cal, val) => cal + val, 3));
===============
//Native bind method on functions - video polyfill for bind method(akshai sainai video)

Function
