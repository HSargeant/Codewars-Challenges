function gap(g, m, n) {
  let start=null,end
    for(let i =m; i<=n; i++){
      if(!isPrime(i)){
        continue
      }
      if(start!=null&&isPrime(i)){
        if(Math.abs(i-start)==g) return [start,i]
      }
      start=i  
    }
  return null
}

function isPrime(num) {
  
 let factorMustBeLess=Math.sqrt(num)
 let result = true
  
  if(num<=1){ 
      return false
    }
  for(i=2; i<=factorMustBeLess; i++){  

      if(num%i==0){ 
      return false
    }}

  return result
}


// 5-Gap in Primes
