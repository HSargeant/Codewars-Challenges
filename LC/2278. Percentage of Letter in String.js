/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
function percentageLetter(s, letter) {
    let count = 0
    for (char of s) {
        if (char == letter) count++
    }
    return Math.floor(count * 100 / s.length)
};
// 2278. Percentage of Letter in String