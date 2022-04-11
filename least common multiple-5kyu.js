/*
Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.
*/

//solution
const lcm = function (...arr){
   const gcd2 = (a, b) => {
      if(!b) return b===0 ? a : NaN;
         return gcd2(b, a%b);
   }
   const lcm2 = (a, b) => {
      return a * b / gcd2(a, b);
   }
   let n = 1;
   for(let i = 0; i < arr.length; ++i){
      n = lcm2(arr[i], n);
   }
   return n;
}