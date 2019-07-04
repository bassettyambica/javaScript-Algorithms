const sumOfNestedArrays = arr => {
    let sum = 0;
  arr.forEach(el => {
     sum = el instanceof Array ? sum + sumOfNestedArrays(el) : sum + el
  });

  return sum;
}

console.log(sumOfNestedArrays([3,1,[5,1],[2]]));
