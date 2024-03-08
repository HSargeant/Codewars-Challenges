/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let count={},max=0
    for(x of nums){
        count[x] = count[x]+1 ||1
        max=Math.max(max,count[x])
    }
    let res=0
    for(x of nums){
        if(count[x]==max) res++

    }
    return res

    
};
// 3005. Count Elements With Maximum Frequency
