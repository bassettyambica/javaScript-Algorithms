function factorial(n){
	var n = n;
	if(n <= 0){
		return;
	}
	else {
		return ( n * factorial(n-1));
	}
}