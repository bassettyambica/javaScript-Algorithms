function uniqueElements(arr){
	var results =[];
  for(var i=0;i<arr.length;i++){
  	if(results.indexOf(arr[i]) == -1)
    	results.push(arr[i]);   
  }
  console.log(results);
}
uniqueElements([1,2,1,3,1,2,4,5,2,6,5,'a','b','a']);

////////****Second Code

function DuplicatesInArray(){
	var arr = [1,3,4,5,6,7,8,3,11,3,6];
	var results = [];
	var sorted_arr = arr.slice().sort();
	for(var i=0; i<sorted_arr.length-1; i++){
		if(sorted_arr[i] == sorted_arr[i+1]){
			results.push(sorted_arr[i]);
		}
	}
	console.log(results);

}

//////// Third Code

Using Sets ES6
var a = ['a','a','b','c','c',1,2,3,3,2,4,1,4];
var mySet = new Set(a);
console.log(mySet);

