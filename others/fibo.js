// fibonacci
// const fibo=(n)=>{
//     if(n==0) return 0
//     if (n<2) return 1
//     return fibo(n-1)+fibo(n-2)
// }

// console.log(fibo(3))

// loop
function fiboLoop(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
      [a, b] = [b, a+b];
    }
    return a;
  }

console.log(fiboLoop(30))


// fibo memo
