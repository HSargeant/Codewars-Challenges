function primeFactorizer(n){
    let obj={}
    while(n%2==0){
      obj["2"] =obj["2"] +1 || 1
      n/=2
    }

    for(i=3; i<=n; i++){
      // console.log(i,n)
      let count=0
        while(n%i==0){
          count++
          n/=i
      }
      if(count) obj[i]= count
    } 
    return {"factor":obj}
  }

//   The prime factorization of a positive integer is a list of the integer's prime factors, together with their multiplicities; the process of determining these factors is called integer factorization. The fundamental theorem of arithmetic says that every positive integer has a single unique prime factorization.

// The prime factorization of 24, for instance, is (2^3) * (3^1).

// Write a class called PrimeFactorizer whose constructor accepts exactly 1 number (a positive integer) and has a property factor containing an object where the keys are prime numbers as strings and the values are the multiplicities.

// new PrimeFactorizer(24).factor //should return { '2': 3, '3': 1 }
let x = primeFactorizer(858687)
console.log(x)