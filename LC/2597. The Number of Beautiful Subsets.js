// 2597. The Number of Beautiful Subsets
// You are given an array nums of positive integers and a positive integer k.

// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.

// Return the number of non-empty beautiful subsets of the array nums.

// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

// Example 1:

// Input: nums = [2,4,6], k = 2
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

function beautifulSubsets(nums, k) {
    let res = 0
    const back = (i = 0, temp = []) => {
        if (i == nums.length) {
            if (temp.length) {
                res++
            }
            return
        }
        let curr = nums[i]
        if (!temp.some(x => Math.abs(x - curr) == k)) {
            temp.push(curr)
            back(i + 1, temp)
            temp.pop()
            back(i + 1, temp)
        } else {
            back(i + 1, temp)
        }
    }
    back()
    return res
};
