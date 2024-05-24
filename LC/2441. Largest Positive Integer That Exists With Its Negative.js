/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
    let max=-1,o={}
    for(i of nums){
        o[i]=true
    }
    for(i of nums){
        if(o[-i]){
            max=Math.max(i,max)
        }
    }
    return max
    
};
// 2441. Largest Positive Integer That Exists With Its Negative