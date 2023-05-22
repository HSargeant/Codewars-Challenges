var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < nums.length / 2; i++) {
        res = Math.max(res, nums[i] + nums[nums.length - 1 - i]);
    }
    return res;
};

// 1877. Minimize Maximum Pair Sum in Array
