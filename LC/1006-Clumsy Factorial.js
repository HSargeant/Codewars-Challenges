// The factorial of a positive integer n is the product of all positive integers less than or equal to n.

// For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
// We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', and subtract '-' in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.

// Given an integer n, return the clumsy factorial of n.

 

// Example 1:

// Input: n = 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1
// Example 2:

// Input: n = 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

// brute force   
var clumsy = function(n) {
    let ops=["*","/","+","-"],j=0,res=[],currOpp
     for(i=n; i>0; i--){
         currOpp=ops[j%4]
         res.push(i)
         if(i==1) break
         res.push(currOpp) 
         j++
     }
     let temp=[res[0]]
     
     for(let i=1; i<res.length; i+=2){
         if(res[i]!=="*" &&res[i]!=="/"){
             temp.push(res[i])
             temp.push(res[i+1])
         }else{
             let a =temp[temp.length-1],b=res[i+1]
             if(res[i]=="*"){
                temp[temp.length-1]=+a *+b
             }else{
                 temp[temp.length-1]=Math.floor(+a/+b)
             }
         }
     }
     return eval(temp.join(""))
 }
//  1006. Clumsy Factorial