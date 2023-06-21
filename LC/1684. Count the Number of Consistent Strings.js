// 1684. Count the Number of Consistent Strings

const countConsistentStrings=(allowed, words)=> {
    let count=0,obj={}
    for(let word of allowed){
        obj[word]=true

    }
    for(let word of words){
        if(valid(word,obj)) count++
    }
    return count    
};


function valid(str,obj){
    for(let char of str){
        if(!obj[char]) return false
    }
    return true
}

