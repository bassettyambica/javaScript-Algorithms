function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

/*---------------------------------------*/

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

/*---------------------------------------*/

function palindromeOfString(str) {
	var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }

  }
  return true;
}
