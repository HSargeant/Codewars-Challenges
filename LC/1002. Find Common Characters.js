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