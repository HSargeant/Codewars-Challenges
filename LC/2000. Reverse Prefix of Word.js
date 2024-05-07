function reversePrefix(word, ch) {
    let index = word.indexOf(ch)
    if(index == -1) return word
    let start = word.slice(0,index+1),end=word.slice(index+1)  
    return start.split("").reverse().join("") + end
};
// 2000. Reverse Prefix of Word