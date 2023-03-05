function intersection(nums) {
    return [...nums.reduce(same)].sort((a,b)=>a-b)
        
    };
    
    function same(a,b){
        let obj={},res=[]
        for(let x of a){
            obj[x]=true
        }
        for(let x of b){
            if(obj[x]){
                res.push(x)
            }
        }
        return res
    }