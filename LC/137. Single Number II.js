var singleNumber = function(nums) {
    let o={}
    nums.forEach(x=>{
        o[x]=o[x]+1||1
    })
    for(let i in o){
        if(o[i]==1) return i
    }
    
};