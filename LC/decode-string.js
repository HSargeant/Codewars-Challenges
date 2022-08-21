/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
        let temp=[]
    for(i=0; i<s.length; i++){
        if(s[i]!="]"){
            temp.push(s[i])
        }else {
            console.log(temp)
            let res=""
            while(temp[temp.length-1] !="["){
                res=temp.pop() + res
                // console.log(temp)
            }
            temp.pop()
            num=""
            while(temp && Number.isInteger(+temp[temp.length-1])){
                num = temp.pop()+num
            }
            console.log(num)
            temp.push(res.repeat(num))
            
            console.log(temp)
        }
    }
    return temp.join("")
    
};


// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
 

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].