/*
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  false 
is_prime(2)   true  
is_prime(-1)  false */



function isPrime(num) {
  
 let factorMustBeLess=Math.sqrt(num) // if a number is not prime then it has a factor that is less than its square root
 let result = true
  
  if(num<=1){ // handles 1 0 and negatives #s
      return false
    }
  for(i=2; i<=factorMustBeLess; i++){  //  testing for factors up till square root of number

      if(num%i==0){ 
      return false
    }}

  return result
}