function canBeEqual(target, arr) {
    let o={}
    for(let e of arr){
        o[e]=o[e]+1||1
    }
    for(let e of target){
        if(!o[e]) return false
        o[e]--
    }
    return true
};
// 1460. Make Two Arrays Equal by Reversing Subarrays