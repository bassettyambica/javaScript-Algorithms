function NestedArraySummation(arr){
                var sum=0;
                for(var i=0;i<arr.length;i++)
                {
                    if(typeof arr[i]=="number")
                    sum +=arr[i];
                    else  if(arr[i] instanceof Array)
                        sum  +=NestedArraySummation(arr[i]);
                }
                    return sum;
            }

         console.log(NestedArraySummation([1,[2,3],4,10,[1,2]]));