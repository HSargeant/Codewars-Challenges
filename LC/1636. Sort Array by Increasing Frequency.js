function frequencySort(nums) {
    let o = {}
    for (num of nums) {
        o[num] = o[num] + 1 || 1
    }
    return nums.sort((a, b) => {
        if (o[a] == o[b]) {
            return b - a
        }
        return o[a] - o[b]
    })
};
// 1636. Sort Array by Increasing Frequency