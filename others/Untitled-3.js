// 
// write a javascript function that returns number of subarrays of length 3 that contains two equal elements

const longest=(n)=>{
    let count=0
    for(let i=0; i<n.length-2; i++){
        let l=n[i],m=n[i+1],r=n[i+2]
        if(l==m||l==r || (r==l||r==m) || (m==l || m==r)) count++
    }
    return count
}

// input = [1, 2, 3, 2, 1]  output = 1.... [2, 3, 2]
// input = [1, 2, 3, 2, 1, 1] output = 2..... [2, 3, 2] and [2, 1, 1]
// input = [3, 1, 2, 3, 2, 4 ,4, 1, 1, 3] output=5