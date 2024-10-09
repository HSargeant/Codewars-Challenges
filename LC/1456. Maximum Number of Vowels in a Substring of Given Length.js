function maxVowels(s, k) {
    let set = new Set(["a", "e", "i", "o", "u"])
    let l = 0, max = 0, count = 0
    if (set.has(s[l])) {
        count++
        max = count
    }

    for (let r = 1; r < s.length; r++) {
        if (r - l == k) {
            if (set.has(s[l])) count--
            l++
        }
        if (set.has(s[r])) count++
        max = Math.max(count, max)
    }
    return max
};
// 1456. Maximum Number of Vowels in a Substring of Given Length