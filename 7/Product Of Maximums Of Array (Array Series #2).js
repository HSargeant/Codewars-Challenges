function maxProduct(num, x){
    return num.sort((a,b)=>b-a).slice(0,x).reduce((a,c)=>a*c,1)
  }

//   Given an array/list [] of integers , Find the product of the k maximal numbers.

