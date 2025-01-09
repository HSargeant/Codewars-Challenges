/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length
// 2185. Counting Words With a Given Prefix

