function construct2DArray (original, m, n) {
    if(m*n !=original.length) return []
    let res=[],temp=[]
    for(let x of original){
        temp.push(x)
        if(temp.length==n){
            res.push(temp)
            temp=[]
        }
    }
    return res
};
// 2022. Convert 1D Array Into 2D Array