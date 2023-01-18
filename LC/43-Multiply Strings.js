var multiply = function(num1, num2) {
    let two =[],one=[],pow=BigInt(1),res=BigInt(0)
    for(i=num2.length-1; i>-1; i--){
        two.push(pow* BigInt(num2[i]))
        pow*=BigInt(10)

    }
    power=BigInt(1)
    for(j=num1.length-1; j>-1; j--){
        let curr = BigInt(num1[j]) * power
        for(i=0; i<two.length; i++){
            res+= curr*two[i]
        }
        power*=10n
    }
    return res.toString()
};


// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.