var minSubArrayLen = function (target, nums) {
    if(nums.some(x=>x==target)) return 1
    let res = Infinity,l=0,curr=0
    for (let i = 0; i < nums.length; i++) {
        curr+=nums[i]
        while (curr>=target) {
            res = Math.min(res,i-l+1)
            curr-=nums[l]
            l++
        }
    }
    return res < Infinity ? res : 0
};
// 209. Minimum Size Subarray Sum