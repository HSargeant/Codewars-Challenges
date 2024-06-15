function sortColors(nums) {
    let o = { "0": 0, "1": 0, "2": 0 }
    for (elem of nums) {
        o[elem] = o[elem] + 1 || 1
    }
    for (let i in nums) {
        if (i < o["0"]) {
            nums[i] = 0
        } else if (i < o["1"] + o["0"]) {
            nums[i] = 1
        } else {
            nums[i] = 2
        }
    }
};