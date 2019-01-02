var lengthOfLongestSubstring = function(s) {
var arr = s.split("");

  if (s.length === 0 || s.length === 1) {
    return s.length;
  }

  var head = 0,
    tail = 1;
  var str = arr[head];
  var maxL = 0;
  while (tail < arr.length) {
    if (str.indexOf(arr[tail]) == -1) {
      str += arr[tail];
      maxL = Math.max(maxL, str.length);
      tail++;
    } else {
      maxL = Math.max(maxL, str.length);
      head = head + str.indexOf(arr[tail]) + 1;
      str = arr[head];
      tail = head + 1;
    }
  }
  return maxL;
};
console.log(lengthOfLongestSubstring("aaabbcccabc"));