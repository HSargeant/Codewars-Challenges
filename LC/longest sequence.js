// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 
// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    nums.sort((a,b)=>a-b)
    let check = [...new Set(nums)]
    let count=1,max=0
    for(i=0; i<check.length; i++){
        if(check[i]==check[i+1]-1){
            count++
        }else{
            max = Math.max(count,max)
            count=1

        }

    }
    return max

};
