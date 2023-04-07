// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    let o={}
    nums.forEach(x=>{
        o[x]=o[x]+1||1
    })
    for(let i in o){
        if(o[i]==1) return i
    }
    
};