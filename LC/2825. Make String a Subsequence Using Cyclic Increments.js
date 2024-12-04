/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function canMakeSubsequence(str1, str2) {
    if (str2.length > str1.length) return false
    let i = 0, j = 0, found = 0
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j] || (str1[i].charCodeAt() - 97 + 1) % 26 === str2[j].charCodeAt() - 97) {
            j++
            found++
        }
        if (found === str2.length) return true
        i++
    }
    return false
};
// 2825. Make String a Subsequence Using Cyclic Increments