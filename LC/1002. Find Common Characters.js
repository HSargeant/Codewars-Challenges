function commonChars(words) {
    let res=words[0]
    for(i=1; i<words.length;i++){
        res=same(res,words[i])
    }
    return [...res]
    
};

function same(a,b){
    let obj={},res=""
    for(let x of a){
        obj[x]=obj[x]+1||1
    }
    for(let x of b){
        if(obj[x]&&obj[x]>0){
            res+=x
            obj[x]--
        }
    }
    return res
}

// 1002. Find Common Characters
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.