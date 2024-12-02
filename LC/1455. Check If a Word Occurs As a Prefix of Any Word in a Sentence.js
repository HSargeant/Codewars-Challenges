var isPrefixOfWord = function(sentence, searchWord) {
    let arr=sentence.split(" "),res
    for(let i in arr){
        let w = arr[i]
        if(w.startsWith(searchWord)){
            res=+i
            break
        }
    }
    return res > -1 ? res+1 :-1
    
};  

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence