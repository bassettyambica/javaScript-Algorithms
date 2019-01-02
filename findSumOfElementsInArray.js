function sumPairInArray(a, target){
	var i=0,
	    j=a.length-1,
	    sum =0,
	    start,
	    end;
	var result = [];    
	var sort_a = a.sort(function(a,b){return a-b;});
	while(i !== j){
		start = sort_a[i];
		end = sort_a[j];
		sum = start + end;
		if( sum === target){
			result.push([start,end]);
			i++;
			j--;
		}
		else if(sum > target){
			j--;
			}  
			else {
				i++;
			}  
		}
		return result;

}
console.log(sumPairInArray([3,4,1,6,8,2], 9));
