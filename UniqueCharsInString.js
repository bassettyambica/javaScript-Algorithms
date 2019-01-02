function uniqueString(str){
	var hashtable = {};
	for(var i=0; i<str.length; i++){
		if(hashtable[str[i]] != null){
			hashtable[str[i]] = 1;
			return false;
		}
		else{
			hashtable[str[i]] = 0;
			
		}
	}
  return true;
	
}
console.log(uniqueString("kim"));