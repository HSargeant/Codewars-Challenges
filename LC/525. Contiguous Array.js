var findMaxLength = function(nums) {
  let map = new Map();
  let sum = 0;
  let res = 0;
  map.set(0,-1);

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? sum-- : sum++;

    if (map.has(sum)) {
      res = Math.max(res, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return res;
};