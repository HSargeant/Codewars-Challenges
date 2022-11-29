const goneMissing=(a)=>{
    // o(n)

    for(i=0;i<a.length; i++){
        if(i!==a[i]) return i
    }
    return a.length

    // math

    // let aSum=0,sum=a.length
    // for(i=0;i<a.length; i++){
    //     a+=a[i]
    //     sum+=i
    // }
    // return sum-aSum

    // // or
    // let sum=a.length*(a.length+1) / 2
    // let aSum=0
    // for(i=0; i<a.length;i++){
    //     aSum+=a[i]
    // }
    // return sum-aSum

}