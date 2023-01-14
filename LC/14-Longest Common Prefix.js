var longestCommonPrefix = function(arr) {
  arr.sort();
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] !== arr[arr.length - 1][i]) return arr[0].slice(0, i);
  }
  return arr[0];

    
};