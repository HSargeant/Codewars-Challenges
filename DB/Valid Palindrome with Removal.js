// This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

const validPal=(str)=>{
    let str1=str.split("").reverse().join("")
    if(str1==str) return true
    for(let i=0; i<str.length; i++){
        let x = str.split("")
        x.splice(i,1)
        if(x.join("")==x.reverse().join("")) return true
    }
    return false
}