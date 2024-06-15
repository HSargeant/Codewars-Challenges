function getRow(rowIndex) {
    if(rowIndex ==0) return [1]
    if(rowIndex == 1) return [1,1]
    if(rowIndex == 2) return [1,2,1]
    if(rowIndex == 3 ) return [1,3,3,1]
    let res=[1],k=rowIndex-3,temp=[1,3,3,1]
    while(k){
        for(let i =0; i<temp.length-1; i++){
            res.push(temp[i]+temp[i+1])
        }
        res.push(1)
        temp=res
        k--
        if(k) res=[1]
    }
    return res
};
// 119. Pascal's Triangle II