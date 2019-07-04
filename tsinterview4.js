//OOPS
const profile = {
	'name' : 'hello',
  getName : () => {
  	console.log(this.name)
  }
}

profile.getName()
Solution  ==>
  const profile = {
	'name' : 'hello',
  getName : function() {
  	console.log(this.name)
  }
}


/////Find the count of max numbers in an array
const maxCount = arr => {
	let count = 0;
	const max = Math.max(...arr);
  arr.forEach(el => {
  	count = el === max ? count + 1 : count;
  });
  return count;
}

console.log(maxCount([2,4,5,6,6,6]))

//simpler
const maxCount = arr => {
	const max = Math.max(...arr);
  let res = arr.filter((el) => el === max);
 	return res.length
}


///////Print order JS
const arr = [5,120,60,25];

for(let i=0; i< arr.length; i++){
	setTimeout(() => {
  	console.log(`Index : ${i} , Element : ${arr[i]}`)
  }, arr[i])
}

//////Convert to 24 hours military format

const timeConverter = val => {
	let time = val.split(':')
	let hours = parseInt(time[0]);
  let minutes = time[1].substring(0, time[1].length-2);
  if(val.endsWith('PM') ){
  	hours = hours + 12;
  }
  return hours + ':' + minutes
}

console.log(timeConverter('1:1AM'))
console.log(timeConverter('03:21PM'))

Eg :
function convertTimeToMilTime(time) {
    var hour = time.substr(0,2);
    if(time.substr(5,2) === 'PM') {
         hour = hour != 12 ? 12 + parseInt(hour) :  hour;
    } else {
         hour = hour === '12' ? '00' : hour;
    }
    return hour + ':' + time.substr(3,2);
}﻿

/////Method Chaining

let x = {
	a(){},
  b() {}
}
x.a().b().a().a().b();

//solution :
let x = {
	a(){
    return this;
  },
  b() {
    return this;
  }
}

/////Conver Number to Hex
let x = 2
hex = x.toString(16);

//Also : x = parseInt(hex, 16);
