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
