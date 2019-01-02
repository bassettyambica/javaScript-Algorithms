//prototype.js

function Person(first, last){
	this.first= first;
  this.last= last;
}

Person.prototype.addPerson = function(){
	return this.first + ' ' + this.last;
};

Person.prototype.reversePerson = function(){
	return this.last + ', ' + this.first;
};

Person.prototype.firstToUpper = function(){
	return this.first.toUpperCase();
};

var s = "Samuel";
String.prototype.reverse = function(){
	var v = "";
  for(var i=this.length-1; i>=0; i--){
  	v += this[i];
  }
  return v;
}
p = new Person("Ambica", "Bassetty");
console.log(p.addPerson());
console.log(p.reversePerson());
console.log(p.firstToUpper());
console.log(s.reverse());
