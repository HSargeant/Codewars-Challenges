const largestUniqueNum=(a)=>{
    // brute
    // a.sort((a,b)=>b-a)
    // let res=-1,i=0
    // while(i<a.length-1){
    //     let curr=a[i]
    //     if(curr==a[i+1]){
    //         while(curr==a[i]){
    //             i++
    //         }
    //     }else{
    //         return curr
    //     }
    // }
    // return -1

    // using a map and no sort

    let o = {}
    a.forEach(x=>{
        o[x] ? o[x] = false : o[x]=true
    })
    let arr = Object.keys(o)
    let max= -1
    for(let key of arr)
        if(o[key]==true){
            max = Math.max(max,key)
        }
    return max
}

console.log(largestUniqueNum([4, 9, 2, 9])) //4
console.log(largestUniqueNum([8, 1, 10, 1, 4, 8, 4, 10])) //-1