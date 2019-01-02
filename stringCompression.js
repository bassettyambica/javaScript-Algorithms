/***

FIX MINOR BUGS

****/
function compressString(str){
	var count=1;
  var results =[];
  var char = str[0];
  for(var i=1; i<str.length-1;i++){
  if(str[i] === char){
  	count++;
  }
  else{
  	results.push(char,count);
    char =str[i];
    count=1;
  }
  	
  }
  console.log(...results);
}
compressString("aaaabbcccaaddddddd");