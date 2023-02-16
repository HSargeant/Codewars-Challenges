// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

var plusOne = function(digits) {
    if(digits.at(-1)+1<10){
        digits[digits.length-1]+=1
        return digits
    }
    let carry=0
    let curr = carry +digits[digits.length-1]+1
    carry= Math.floor(curr/10)
    digits[digits.length-1]=(curr%10)

    for(i=digits.length-2; i>-1; i--){ 
         curr = carry +digits[i]
        carry= Math.floor(curr/10)
        digits[i]=(curr%10)
    }
    if(carry>0) digits.unshift(carry)
    return digits
};

// or using BigInt return (BigInt(digits.join("")) +1n).toString().split("")