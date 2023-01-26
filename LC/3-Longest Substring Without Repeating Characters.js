// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s){
    let l=0,r=0,o= new Set(),max=0
    while(r<s.length){
        while(o.has(s[r])){
            o.delete(s[l])
            l++
        }
        o.add(s[r])
        max=Math.max(max,o.size)
        r++
    }
    return max
};