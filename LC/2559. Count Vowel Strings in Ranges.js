/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let pref=[],count=0
    const vowels = new Set(["a","e","i","o","u"])
    for(let word of words){
        if( vowels.has(word[0]) && vowels.has(word[word.length-1])  ) count++
        pref.push(count)
    }
    let res=[]
    for(let [start,end] of queries){
        let count = pref[end]
        if(pref[start-1]) res.push(count-pref[start-1])
        else res.push(pref[end])
    }
    return res
};
// 2559. Count Vowel Strings in Ranges