/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b)
    let a,b
    for(let i=0; i<nums.length; i++){
        if(nums[i]==nums[i+1]){
            a=nums[i]
        }
          if(a!=undefined) break
    }
    if (nums[0] !== 1){
        return [a, 1];
    }
    if (nums[nums.length-1] !== nums.length){
        return [a, nums.length];
    }
    for(let i=0; i<nums.length; i++){
      if(nums[i+1]-nums[i]==2){
            b=nums[i+1]-1
            break
        }
    }


    return [a,b]
    
};


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