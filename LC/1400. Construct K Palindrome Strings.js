function canConstruct(s, k) {
    if(k>s.length) return false
    let o = {}
    for (let char of s) {
        o[char] = o[char] + 1 || 1
    }

    let odd = 0
    for (let key in o) {
        if (o[key] % 2 !== 0) odd++
    }
    return odd <= k

};
// 1400. Construct K Palindrome Strings