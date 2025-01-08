/**
 * @param {string[]} words
 * @return {number}
 */
function countPrefixSuffixPairs(words) {
    let res = 0
    for (let i = 0; i < words.length; i++) {
        let x = words[i]
        for (let j = i + 1; j < words.length; j++) {
            let y = words[j]
            if (isPrefixAndSuffix(x, y)) res++
        }
    }
    return res
};

function isPrefixAndSuffix(x, y) {
    return y.startsWith(x) && y.endsWith(x)
}
// 3042. Count Prefix and Suffix Pairs I