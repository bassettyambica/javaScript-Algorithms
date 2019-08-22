/*// Create a function convertToString. This converts a given array to its string representation.
// The array can be deeply nested. We should be able to directly call this function on the array object itself.
// For e.g.
// [6,7].convertToString(); // outputs "[6,7]"
// [6,7,[8,9]].convertToString() // outputs "[6,7,[8,9]]"
*/

Array.prototype.convertToString = function(){
	return JSON.stringify(this)
}
console.log([6,7,[8,9]].convertToString() );

===============
//Imp ==> Run it in jsfiddle(Linked in interview // QUESTION: )

var Foo = function (a) {
    this.a = a;

    function bar() {
        return a;
    }
    this.baz = function () {
        // return this.a = 7
       return a;
    };
};

Foo.prototype = {
    biz: function () {
        return this.a;
    }
};

Foo.prototype.NewFunction = function(){
	return this.a;
}
var f = new Foo(7);
console.log(f)
console.log(f.__proto__)
console.log(f.bar()); //f.bar is not defined
console.log('baz ', f.baz()); // result =  7
console.log(' biz ',f.biz()); // result = 7
console.log(' new function ',f.NewFunction()); // result = 7

console.log(f.bar());

==========================
//JS BINDINGS

//Implicit Binding
let EnrollNewStudent = function(student) {
  this.name = student.name;
  this.printBio = function() {
    console.log(this)
    return `My name is ${this.name} and my bio is ${student.bio}`
  }
}

let myDetails = {
  name: 'Ambica',
  bio: "I am from India, I am a new student"
}

let rollNumber1202 = new EnrollNewStudent(myDetails);

console.log(rollNumber1202.printBio());
//=====

//Eg 2
let me = {
  name: 'Ambica Bassetty',
  sayName: function() {
    console.log(`this.name == ${this.name} && me.name == ${me.name}`)
  }
}

me.sayName();

=======================
//EXPLICIT Binding
let printName = function(...args) {
		let params = args.reduce((str, subject) => str + ' '+ subject , '');
    console.log('Args ', params)
  	return `Student ${this.name} with roll number ${this.rollNumber} : Subjects taken ${params}`
  }

let Ambica = {
	name : 'Ambica',
  rollNumber : 45
}

let semisterSubjects = ['MM1', 'BEE', 'Drafts']

//Call Eg
console.log('Eg With call: ',printName.call(Ambica, semisterSubjects[0], semisterSubjects[1], semisterSubjects[2]))

//Bind Eg : Bind returns a fucntion unlike call and apply which can be excdeuted at any given time
let bindEg = printName.bind(Ambica, 'a', 'b');
console.log('Eg With bind: ',bindEg())
//Apply
console.log('Eg With Apply: ',printName.apply(Ambica, [...semisterSubjects, 'MM2']));

==============
//JavaScript classes
class User {
	constructor(name, email, dob){
  	this.name = name;
    this.email = email;
    this.dob = dob;
  }

  printUserDetails(city){
  	console.log(`User's name : ${this.name} , email : ${this.email} , dob : ${this.dob} is from ${city}`)
  }
}

const user1 = new User('Ambica', 'email@dsad.com', '10/15');

console.log("user1 ", user1);

user1.printUserDetails('Hyd');
