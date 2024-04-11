var removeKdigits = function(num, k) {
    if(num.length==k) return "0" 
    let res=[]
    for(curr of num){
        while(res.length>0 && k>0 && res[res.length-1]>curr){
            res.pop()
            k--
        }
        res.push(curr)
    }
    while(k>0){
        res.pop()
        k--
    }
    res=res.join("").replace(/^0+/, '')
    return res===""? "0": res+""
};
// 402. Remove K Digits