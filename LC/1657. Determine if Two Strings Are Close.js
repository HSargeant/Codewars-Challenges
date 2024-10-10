var closeStrings = function(word1, word2) {
    if(word1.length!=word2.length) return false
    let o={}
    for(let char of word1){
        o[char]=o[char]+1||1
    }
    let o1={}
    for(let char of word2){
        if(!o[char]) return false
        o1[char]=o1[char]+1||1
    }
    let a=Object.values(o).sort((a,b)=>a-b),b=Object.values(o1).sort((a,b)=>a-b)
    for(let i in a){
        if(a[i]!=b[i]) return false
    }
    return true
};
// 1657. Determine if Two Strings Are Close