// 3/4
function isAnagram(s, t) {
    if (s.length != t.length) return false
    let o = {}
    for (let i in s) {
        o[s[i]] != undefined ? o[s[i]]++ : o[s[i]] = 1
        o[t[i]] != undefined ? o[t[i]]-- : o[t[i]] = -1
    }
    for (let key in o) {
        if (o[key] != 0) return false
    }
    return true
};
// 242. Valid Anagram
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