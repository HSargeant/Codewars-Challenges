/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let curr = 0
    let sum=0,target=0
    let set= new Set(nums)
    for(let i=0; i<nums.length; i++){
        curr+=nums[i]
        if(set.has(nums[i])) {
            sum+=nums[i]
            set.delete(nums[i])
        }
        target+=i+1
    }
    let a = curr-sum
    let b = target - sum
    return [a,b]
};
// 645. Set Mismatch

// Set mismatch
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104