/*Given a string and array of colors print the each letter in the string and map to every other color in the array.
Skip the spaces in between.*/

const colorPrinter = (str, colorsArray) => {
	let i = 0;
	str.split('').forEach((ch, ind) => {
  	if(ch !== ' '){
    		i = (i === colorsArray.length) ? 0 : i;
      	console.log(`Character ${ch} : ${colorsArray[i]}`);
        i++;
    }
  });
}

colorPrinter('Lorem ipsum in the world', ['red', 'blue', 'green', 'yellow', 'white']);

===========
/*
How would you implement jQuery' s addClass and removeClass functions using vanilla JS? What other variations you can use? Can you pass multiple parameters for classnames ? How will you make these vanilla JS functions asynchronous? Make this component re-usable.

The implementation must respond to something like this:


$('#container')
.addClass('blue')
.addClass('bg-lime')
.addClass('bold')
.addClass('font-medium-italic')
.addClass('border-solid-pink');
*/


JSfiddle Link : https://jsfiddle.net/t05mrf2v/1/

<div id="sample">Sample</div>
function addClass(id) {
  var elt = document.getElementById(id);
  for (let i = 1; i < arguments.length; i++) {
    elt.classList.add(arguments[i]);
  }
}
addClass('sample', 'sample', 'sample_1', 'x');

==============

/*you are on a biz trip and travelling from one city to another. you have a stack of unsorted flight boarding passes.
only departure city and destination city are on the boarding pass.
 how do you find the first departure city and your final destination city, write the solution in javascript.

*/

let passes = [
	{
  	departure : 'DBX',
    arrival : 'Delhi'
  },
	{
  	departure : 'SFO',
    arrival : 'LAX'
  },
  {
  	departure : 'Delhi',
    arrival : 'Hyd'
  },
	{
  	departure : 'SFO',
    arrival : 'DBA'
  }
];
//Cases to consider both the departure and arrival city will be appread only once on any boarding passes.
//Create a sepearte objects for arrivasl and departures and it's count as key. Pull our the ones with one entries each from arraivals and departures. Those are the answers.

//Questions that can be considered : Is it a round trip? or can we consider the departure city is know(or current location)?

Link : https://www.careercup.com/question?id=5722316476514304

================

//Delete a specific char from string,,,,char is 'f' in string= "YOUSUF".the resultant string will be "YOUSU".

const deleteChar = (str, ch) => {
  /* str = str.split('')
  str.forEach((el, i) => {
    if (el === ch) {
      str.splice(i, 1)
    }
  }) */
  return str.replace(/F/gi, '');
}

console.log(deleteChar('YOFUSUF', 'F'))

==========

//Find and replace
function popString(string, findCh, replaceCh){
	return string.replace(findCh, replaceCh);
}
popString('STUN','TU','KO');
console.log(popString('YOFUSUF', 'FU', 'K'))

===========

//Implementing a hexdec counter.
//Assumption: Max value is FFFFFFFFF The counter will reset when it reaches this max value.
Proposed Solun in career caup
Number(parseInt("AB0CD1010",16)+1).toString(16);

console.log((parseInt("AB0CD1011",16)+1).toString(16));
===========
