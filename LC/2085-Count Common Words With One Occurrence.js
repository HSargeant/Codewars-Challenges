var countWords = function(s1, s2) {
    let obj1={},obj2={},count=0
    for(x of s1){
        obj1[x]=obj1[x]+1||1
    }
    for(x of s2){
        obj2[x]=obj2[x]+1||1
    }
    let check = s1.length>s2.length ? s1 : s2
    for(x of check){
        if(obj2[x]==1 && obj1[x]==1) count++
    }
    return count
};