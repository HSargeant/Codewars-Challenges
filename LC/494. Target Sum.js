function findTargetSumWays (nums, target) {
  const memo = {};

  const dfs = (i=0, sum=0) => {
    const key = `${i},${sum}`
    if(i>=nums.length){
        return sum==target ? 1 : 0
    }
    if (key in memo) {
      return memo[key];
    }
    
    memo[key] = dfs(i+1,sum+nums[i])+dfs(i+1,sum-nums[i]);
    return memo[key];
  };
  return dfs();
}
// 494. Target Sum