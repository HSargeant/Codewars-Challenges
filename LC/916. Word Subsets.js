/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

function wordSubsets(words1, words2) {
    let needs = Array(26).fill(0)
    for (let word of words2) {
        let curr = Array(26).fill(0)
        for (let char of word) {
            let i = char.charCodeAt() -97
            curr[i]++
            needs[i] = Math.max(curr[i],needs[i])
        }
    }
    function isSubset(str) {
        let curr = Array(26).fill(0)
        for (let char of str) {
            let i = char.charCodeAt()-97
            curr[i]++
        }
        for (let i in needs) {
            if (curr[i] < needs[i]) return false
        }
        return true
    }
    return words1.filter(isSubset)
};

// 916. Word Subsets