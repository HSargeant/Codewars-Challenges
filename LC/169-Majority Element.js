

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// solution 1
let majorityElement = nums=> nums.sort((a,b)=>a-b)[Math.floor(nums.length/2)]
console.log(majorityElement([3,2,3])== 3)

// majority element will be the middle of the sorted array

// solution 2
majorityElement =(nums)=> {
    let o={}
   for(i=0; i<nums.length; i++){
        o[nums[i]]=o[nums[i]]+1||1
        if(o[nums[i]]>Math.floor(nums.length/2)) return nums[i]
    }
};
console.log(majorityElement([1,2,3,5,4,3,3,3,3,3,3,3,3,4,3,3,3]) ==3)