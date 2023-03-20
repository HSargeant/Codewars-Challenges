const intersect=(a,b)=>{
    let obj={},res=[]
    a.forEach(x=>obj[x]=obj[x]+1||1)
    for(x of b){
        if(obj[x]>0) {
            res.push(x)
            obj[x]--
        }
    }
   return res
};