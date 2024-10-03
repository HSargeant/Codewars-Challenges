function arrayRankTransform(arr) {
    let o = {}
    let s = [...arr].sort((a, b) => a - b)
    let place = 1
    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        if (o[curr] == undefined) {
            o[curr] = place++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = o[arr[i]]
    }
    return arr
};
// 1331. Rank Transform of an Array