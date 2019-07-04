let input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

var transpose = function(A) {
    var temp = []
    var res = []
    for(var i = 0;i < A.length;i++){
      temp = []
      for(var j = 0;j < A.length;j++){
      console.log('A[b][a]', 'j = ',j,'i = ', i,  A[j][i])
        temp.push(A[j][i])
      }
         res.push(temp)
    }
  return res
};

console.log(transpose(input));

============
