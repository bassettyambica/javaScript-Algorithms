function fillStinrg(str){
	 var result = [];
   for(var i=0; i<str.length;i++){
   	if(str[i] === ' '){
    result.push("%20");
    }
    else{
    result.push(str[i]);
    }
   }
   console.log(...result);
}
fillStinrg("To the Hello World");