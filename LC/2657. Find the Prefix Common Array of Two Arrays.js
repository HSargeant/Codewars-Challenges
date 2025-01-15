var findThePrefixCommonArray = function(a, b) {
    let res=[]
    if(a[0]==b[0]){
        res.push(1)
    }else{
        res.push(0)
    }
    let l=new Set([a[0]]),r=new Set([b[0]])
    let count=res[0]
    for(let i=1; i<a.length; i++){
        let acurr= a[i],bcurr=b[i]
        l.add(acurr)
        r.add(bcurr)
        if(acurr==bcurr){
            res.push(++count)
        }else{
            if(r.has(acurr)) count++
            if(l.has(bcurr)) count++
            res.push(count)
        }
    }
    return res
    
};
// 2657. Find the Prefix Common Array of Two Arrays