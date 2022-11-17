// DESCRIPTION:
// The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:

// Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.

// The angel then vanishes in an explosion of white light.

// Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.

// He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.

// He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.

// Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.

function fib(n) {
  if (n == 0||n == 1) {
    return BigInt(n);
  } else if (n >= 2 && n % 2 == 0) {
    let k = n / 2;
    let fk = fib(k);
    return (2n * fib(k-1) + fk) * fk;
  } else if (n >= 2) {
    let k = (n + 1) / 2;
    let fk1 = fib(k - 1);
    let fk2 = fib(k);
    return fk2*fk2 + fk1*fk1;
  } else {
    a = 0n;
    b = 1n;
    for (let i = 0; i > n; i--) {
      let temp=a
      a=b-a
      b=temp
    }
    return a;
  }
}


//   if(n ==0) return 0n
//     if (n == 1 || n==2)  return 1n
//   let neg = (n < 1 && (n % 2) == 0)
  
//     return !neg? fib(  BigInt(n) - BigInt(1)  ) + fib( BigInt(n) - BigInt(2) ) :
//       -fib(  BigInt(Math.abs(n))  - BigInt(1)  ) + -fib(  BigInt(Math.abs(n))  - BigInt(2)  ) 
 
//   }



// recursive fibo
// function fib(n,res=[1,1] ) {
//     if (res[n]) {
//         return res[n];
//     }

//     res[n] = fib(n - 1, res) + fib(n - 2, res);
//     return res[n];