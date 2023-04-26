function intersection(nums) {
    return [...nums.reduce(sameElements)].sort((a,b)=>a-b)     
};
    
function sameElements(a,b){
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