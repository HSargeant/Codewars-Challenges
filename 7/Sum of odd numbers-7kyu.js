/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  let start = n *(n-1)+1 // the odd number we will start at
  let sum=0 
  for(i=0; i<n; i++){  
    sum+=(start+(2*i))   // add n odd numbers starting with the beginning w/ value
  }
return sum
}