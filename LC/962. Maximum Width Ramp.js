/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let stack = []

    for (let i = 0; i < nums.length; i += 1) {
        let last = stack[stack.length - 1]
        if (stack.length === 0 || nums[last] > nums[i]) {
            stack.push(i)
        }
    }
    let res = 0

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        let last = stack[stack.length - 1]

        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            const idx = stack.pop()
            res = Math.max(res, i - idx)
        }
    }

    return res
};
// 962. Maximum Width Ramp