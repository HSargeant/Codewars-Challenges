function frequencySort(s) {
    const o = {}
    let arr = s.split("")
    for (char of arr) {
        o[char] = o[char] + 1 || 1
    }
    arr.sort((a, b) => o[b] - o[a] || b.charCodeAt()-a.charCodeAt())
    return arr.join("")
};
// 451. Sort Characters By Frequency