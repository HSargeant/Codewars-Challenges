// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
   n=n.toString()
  // 011235813.....
  //fn=fn-1+fn-2
  let res
 let fibo={ 
            1:0,
            2:1,
            3:1, 
            4:2,
            5:3
          }
 
 if(Object.keys(fibo).includes(n)){
   return fibo[n]
 }
    

    let first = fibo[n-1] || nthFibo(n-1)
  
    let second = fibo[n-2] || nthFibo(n-2)
    
    return second + first
  
}