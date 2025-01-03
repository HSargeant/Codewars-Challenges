/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let total = nums.reduce((a,c)=>a+c,0)
    let p=Array(nums.length).fill(0),res=0
    for(let i=0; i<nums.length-1; i++){
        p[i]+=nums[i] +(p[i-1]||0)
        let curr= total-p[i]
        if(p[i]>=curr) res++
    }
    return res
};
// 2270. Number of Ways to Split Array