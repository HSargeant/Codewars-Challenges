/**
 * @param {string} s
 * @return {number}
 */
function countPalindromicSubsequence(s) {
    let index = {}
    for (let i = 0; i < s.length; i++) {
        if (index[s[i]] == undefined) {
            index[s[i]] = [i, undefined]
        }else{
            index[s[i]][1]=i
        }
    }
    let count = 0
    for (let key in index) {
        let [first, last] = index[key]
        if (last === undefined) continue
        let check = new Set()
        for (let i = first + 1; i < last; i++) {
            if (!check.has(s[i])) {
                count++
                check.add(s[i])
            }
        }
    }
    return count
};
// 1930. Unique Length-3 Palindromic Subsequences