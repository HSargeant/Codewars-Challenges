var mergeSimilarItems = function(items1, items2) {
    let res={}
    for(let x of items1){
        let [val,weight]  =x
        res[val] = (res[val]||0)+weight
    }
    for(let x of items2){
        let [val,weight]  =x
        res[val] = (res[val]||0)+weight
    }
    let a=[]
    for(let key in res){
        a.push([+key,res[key]])
    }
    return a
};
// 2363. Merge Similar Items