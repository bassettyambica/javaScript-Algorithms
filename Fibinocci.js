const fib = n => {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
}


/*---------------------------------------*/

// Recursive solution : Downside is the complexity(exponential) ==> can be solved by using caching
// technique to store already calculated values.

function recuFib(n) {
  if (n < 2) {
    return n;
  }

  return recuFib(n - 1) + recuFib(n - 2);
}
