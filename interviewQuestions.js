// Fn : sum(1)(2)(3)(4)(5)...()
let sum = function(a){
  return function(b) {
    if(b) {
      return sum(a+b)
    }
    return a;
  }
}

let sum = a => b => b ? sum(a+b) : a;

console.log(sum(1)(3)(9)(5)());
==============
/* console.log('hello'.repeatify(3));
 hellohellohello */

String.prototype.repeatify = function(n) {
let result = ''
for(let i=0; i<n; i++){
  result = result + this
}
return result;
}
console.log('hello'.repeatify(3))

===============
let a = 'Hello'.split('');
let b = a.reverse();
let c = 'World'.split('');

a.push(c);

console.log(a, b, c)

===========

let a = [1,2,3,4]
let b = a;

a = [];
console.log(a, b); [], [1,2,3,4]

a.length = 0;
console.log(a, b); [], []

===========
