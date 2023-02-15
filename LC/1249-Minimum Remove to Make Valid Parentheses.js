// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
 
// Constraints:

// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.
const minRemoveToMakeValid = (s)=> {
    let open=0,res=[]
    for(i=0; i<s.length; i++){
        if(s[i]=="("){
             open++
        }else if(s[i]==")") open--
        if(open>=0){ 
            res.push(s[i])
        }else open=0
    }
    while(open){
        let curr= res.lastIndexOf("(")
        res.splice(curr,1)
        open--
    }
    return res.join("")
    
};