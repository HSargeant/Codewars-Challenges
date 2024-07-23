function numberOfPairs(nums) {
    let o = {}, pairs = 0, left = 0
    for (let num of nums) {
        o[num] = o[num] + 1 || 1
        if (o[num] == 2) {
            pairs++
            o[num] = 0
        }
    }
    for (let key in o) {
        if (o[key]) left++
    }
    return [pairs, left]
};
// 2341. Maximum Number of Pairs in Array