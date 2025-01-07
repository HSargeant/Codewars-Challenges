function stringMatching (words) {
    let res=new Set()
    for(let word1 of words){
        for(let word of words){
            if (word==word1 ||word1.length>word.length) continue
            if(word.indexOf(word1)>=0){
                res.add(word1)
                continue
            }
        }
    }
    return [...res]
};
// 1408. String Matching in an Array