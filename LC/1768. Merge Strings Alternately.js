const mergeAlternately = (word1, word2)=> {
    
    let count=0,len1=word1.length,len2=word2.length,res=""
    while(count <len1 && count<len2){
        res+=word1[count]
        res+=word2[count]
        count++
    }
    if(count<len1){
        res+=word1.slice(count)
    }else res+=word2.slice(count)

    return res
};
// 1768. Merge Strings Alternately
