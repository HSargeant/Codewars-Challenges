function rangeSum(nums, n, left, right) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            arr.push(sum)
        }
    }
    arr.sort((a, b) => a - b)
    return arr.slice(left - 1, right).reduce((a, c) => a % (1e9 + 7) + c, 0)
};
// 1508. Range Sum of Sorted Subarray Sums