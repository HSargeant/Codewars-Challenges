/**
 * @param {string} sentence
 * @return {boolean}
 */
function isCircularSentence(sentence) {
    let first = sentence[0]
    let last = sentence[sentence.length-1]
    if (last != first) return false
    let check = sentence.split(" ")
    for (let i = 0; i < check.length - 1; i++) {
        let curr = check[i]
        l = curr[curr.length - 1]
        let next = check[i + 1][0]
        if (l != next) return false
    }
    return true
};
// 2490. Circular Sentence