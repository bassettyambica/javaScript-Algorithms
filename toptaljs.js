(function(){
	baz = 5;
  var bar = 10;
})();

console.log(baz); //Op = 5 since global scope
console.log(bar); //Opb= undefined, coz local variable can't be accessed outside.

================
//Scope Eg
(function(){
		var foo =  1;
    function bar() {
      console.log(foo); //undefined
    	var foo = 2;
      console.log(foo); // 2
    }
    bar();
    console.log(foo); //O/p = 1

    if(true){
    	var foo =3 ; //redeclare foo
    }
    console.log(foo) //O/p = 3
})();

//Imp Eg : 2
var my = {
	foo : 'hello',
  moo : function(){
  	var self = this;
    console.log(this.foo); //hello
    console.log(self.foo); //hello
    (function(){
    	console.log(this.foo); //undefined
     console.log(self.foo); //hello
    })();
  }
}
my.moo();

=================
//hoisting : fun and variable declarations as moved up whereas the assigment still stays at same place
(function() {
  console.log(bar);
  foo();

  function foo() {
    console.log('aloha'); //
  }
  let b = 1; //varibale declaration moves up but value assignment stayes here.

  baz = 2; //Global scope
})();

==========
//Imp :Clousers ***
function foo(x){
  	var baz = 3;
    return function(y) {
    	console.log(x + y + (++baz))
    }
  }
  var moo = foo(2); //x = 2
moo(1) ; //y = 1 //op = 7
moo(1)// op = 8

//Eg-2
var r = function(x) {
	return function(y) {
  	x++;
    console.log(x + y) ;
  }
}

var z = r(1);
z(2); //op/ 4 => x = 1, y = 2
z(3); //op/ 6  => x= 2 , y = 3

================
//Imp :Prototypel Inheritance ( see video askshay sainin for proto Inheritance)

(function(){
	var getObj = {
  	bar : "Hello World",
    get_bar : function() {
    	return this.bar;
    }
  }

  var cusObject = Object.create(getObj);
  cusObject.bar = 'Aloha';
  console.log(cusObject.get_bar()); //Prints aloha
  delete cusObject.bar;

  console.log(cusObject.get_bar()); //Hello world
})();

//Imp Eg -2 :
var classX = function(){

}

classX.prototype = {
	arr : []
}

var insX1 = new classX();
var insX2 = new classX();

insX1.arr[0] = 3;

console.log(classX.__proto__)
console.log(insX2.arr[0]); //ops 3
console.log(insX1.arr[0]); //ops 3

insX2.arr[0] = 4;
console.log(insX2.arr[0]); //ops 4
console.log(insX1.arr[0]); //ops 4

==============

/** Strict Mode in JS : W3 schools eg
"use strict"; Defines that JavaScript code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.

eg : "use strict";
x = 3.14;
Strict mode makes it easier to write "secure" JavaScript.Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
"use strict";
x = 3.14;                // This will cause an error
**/

============
/*
  Significance of enclosing whole js code into fucntion block is to create private name space and helps avoiding
  name clashes between differnet js modules and libraries
*/

===========
//// QUESTION:
function foo1 () {
	return {
  	bar : 'hello'
  }
}

function foo2 () {
	return
  {
  	bar : 'world'
  }
}

console.log(foo1()); // prints object
console.log(foo2()); //undefined
// O/p:{bar: "hello"}
// (index):47 undefined

==============
//JS Events and Timings
(function(){
	console.log(1);
  setTimeout(() => console.log(2), 100);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})(); // o/p order 1, 4, 3, 2

==============

//Confusing stuff : [Object object ]eg
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = 'foo'; // ---> this is being saved as map["[object Object]"] = 'foo'
map[bar] = 'bar'; // ---> renamed to map["[object Object]"] = 'bar'

console.log(map) //{[object Object]: "bar"}
console.log(map[foo]) //O/p : "bar"
console.log(map["[object Object]"]) // O/p bar
============

let sum = (a, b) => {
 /*  if (b) {
    return a + b;
  }
  return function(b) {
    return a + b
  } */
  return b ? a + b : b => a + b;
}

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

================

//imp*** var has function scope(same value for all after all iretations) where as let has block scope(new value for each iteration)
// links : https://stackoverflow.com/questions/31285911/why-let-and-var-bindings-behave-differently-using-settimeout-function
(function timer() {
  for (var i=0; i<=5; i++) {
    setTimeout(function clog() {console.log(i)}, i*1000);
  }
})(); //console logs 6 5 times

(function timer() {
  for (let i=0; i<=5; i++) {
    setTimeout(function clog() {console.log(i)}, i*1000);
  }
})(); // 0,1,2,3,4,5

=========================
//Arrays reference eg
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);

// console.log(arr1);/["n", "h", "o", "j", Array(5)] arr1 and arr2 are same
console.log(arr2);//["n", "h", "o", "j", Array(5)]
console.log(arr3);//["j", "o", "n", "e", "s"]

========================
//Read toptal js questions
let a = [1,2,3,4]
let b = a;

a = [];
console.log(a, b); [], [1,2,3,4]

a.length = 0;
console.log(a, b); [], []
