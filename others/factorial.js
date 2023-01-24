const factorial=(n,obj={})=>{
    if(n<=1) return 1
    if(obj[n]) return obj[n]
    obj[n]= n <=1 ? 1 : n*factorial(n-1)
    console.log(obj)
    return obj[n]
}

console.log(factorial(11))