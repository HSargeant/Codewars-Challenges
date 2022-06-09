/*Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.*/

//steps--
// enter a power
// enter number
// change string to array to separate digits
//raise digit to a power
// add them ex 1234, k=4
// 1** + 2**(k+1) + 3**(k+2) etc.......
// use % to test if sum is a power of the number, return the quotient

function digPow(n, p){
  let digits = n.toString().split('');
  let sum = 0

for(let i=1; i<=digits.length; i++ ){
        
     sum = sum + digits[i-1]**(p+(i-1));
}

if(sum % n ==0){
  return sum/n
  } else return -1
}