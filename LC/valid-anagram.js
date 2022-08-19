var isAnagram = function(s, t) {
    if(s.length!=t.length) return false
    for(i=0; i<Math.max(s.length,t.length); i++ ){
        if(!s.includes(t[i])) {
            return false
        }
        s=s.replace(t[i],"")
    }
    return true
    
};

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