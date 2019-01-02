function mergeLists(arr1, arr2){
	var result = [];
  var i=0, j=0;

  while (arr1[i] || arr2[j]){

    if (arr1[i] && !arr2[j] || arr1[i] < arr2[j]){
    	 result.push(arr1[i]);
       i++;
    }
    else if	(!arr1[i] && arr2[j] || arr1[i] > arr2[j]){
    	 result.push(arr2[j]);
       j++;
    }
    else{//they are equal
    	result.push(arr1[i]);
      i++;j++;
    }


  }
  return result;
}

console.log(mergeLists([1,2,3,4,10], [3,4,5,6,9]));


//Merge 2 sorted Listes
function mergeLists(a, b){
  var i=0, j=0;
  var c =[];
  while(a[i] || b[j]){
    if(!b[j] || a[i] < b[j]){
      c.push(a[i]);
      i++;
    }
    else if(!a[i] || a[i] > b[j]){
      c.push(b[j]);
      j++;
    }
    else{
      c.push(a[i]);
      i++;
      j++;
    }
  }
  return c;
}
console.log(mergeLists([1,2,3,4,9], [1,2,4,5,6]));


///////
function intersect_safe(a, b)
{
  var i=0, j=0;
  var result = [];

  while( i < a.length && j < b.length )
  {
     if      (a[i] < b[j] ){ i++; }
     else if (a[i] > b[j] ){ j++; }
     else /* they're equal */
     {
       result.push(a[i]);
       i++;
       j++;
     }
  }

  console.log(result);
}

intersect_safe([10,20,30,40],[30,40,60]);
