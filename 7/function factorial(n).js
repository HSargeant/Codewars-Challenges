function factorial(n)
{if(n==0) return 1
 if(n<0 || n>12) throw RangeError
 let res=1
  for(i=1; i<=n;i++){
    res*=i
  }
 return res
}

// write a function to calculate facotorial
// recursion 
// const factorial=(n)=>{
//   if(n<0 || n>12) throw RangeError
//   if(n==0) return 1
//   return n*factorial(n-1)
// }