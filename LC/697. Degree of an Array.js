/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let o={},seen={},max=0
    for(let i in nums){
        let num=nums[i]
        o[num]=o[num]+1||1
        if(!seen[num]){
            seen[num]=i
        }
        if(o[num]>max) max= o[num]
    }
    let min= nums.length
    for(let i=nums.length-1; i>-1; i--){
        if(o[nums[i]]==max){
            o[nums[i]]--
            if(i-seen[nums[i]]+1<min) min=i-seen[nums[i]]+1
        }
    }
    return min
};