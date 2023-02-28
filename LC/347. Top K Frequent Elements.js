var topKFrequent = function(nums, k) {
    let obj={}
    let res=[]
    for(x of nums){
        !obj[x]? obj[x] = [x] : obj[x].push(x) 
    }
    let arr=Object.values(obj).sort((a,b)=>b.length-a.length)
    for(i=0;i<k;i++){
        res.push(arr[i][0])
    }
    return res
};