function divideArray(nums) {
    if(nums.length %2 == 1) return false
    const o = {}
    for (e of nums) {
        o[e] = o[e] + 1 || 1
    }
    for(key in o){
        if(o[key]%2==1) return false
    }
    return true
};
// 2206. Divide Array Into Equal Pairs