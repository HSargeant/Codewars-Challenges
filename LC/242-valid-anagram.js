// 3/4
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false
    let obj={},obj1={}
    for(i=0;i<s.length; i++){
        obj[s[i]]=obj[s[i]]+1||1
        obj1[t[i]]=obj1[t[i]]+1||1
    }
    for(i in obj){
        if(obj[i]!==obj1[i]) return false
    }
    return true
};

// // sort
// const isAnagram = (s, t)=> {
//     if(s.length!=t.length) return false
//     return [...s].sort().join("")==[...t].sort().join("")
// };

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?