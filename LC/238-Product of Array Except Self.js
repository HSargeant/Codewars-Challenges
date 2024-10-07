/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left=1
    res=[]
    for(i=0; i<nums.length; i++){
        res[i]=1
        res[i]*=left
        left*=nums[i]
    }
    let right=1
    for(i=nums.length-1;i>-1;i--){
        console.log(res[i],right,i)
                res[i]*=right

        right*=nums[i]
    }
    return res
}
// 238. Product of Array Except Self
