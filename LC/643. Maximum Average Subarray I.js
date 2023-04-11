/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max= -Infinity
    let sum = nums.slice(0,k).reduce((a,c)=>a+c,0)
    let average = sum/k
    max = Math.max(max,average)
    let index=0
    for(i=k;i<nums.length;i++){
        sum=sum-nums[index]+nums[i]
        average = sum/k
        max = Math.max(max,average)
        index++
    }
    return max
};

// 643 Maximum Average Subarray
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000