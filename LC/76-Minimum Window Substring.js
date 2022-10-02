var minWindow = function(s, t) {
    if(!t||t.length>s.length) return ""
    
    let target={}
    for(let i of t){
        target[i]= target[i]+1 ||1
    }
    let found = false
    
    let min = s.length
    let l=0, r=s.length
    
    let count = Object.keys(target).length
    let i =0
    for(j=0;j< s.length; j++) {
    if(target[s[j]] !== undefined) {
        target[s[j]]--;
        if(target[s[j]] === 0) {
            count--;
        }   
    }
    if(count > 0) continue;
   
    while(count === 0) {
      if(target[s[i]] !== undefined) {
        target[s[i]]++
          if(target[s[i]] > 0) {
            count++;
          }
      }
        i++
    }
    if((j - i) < min) {
        min = j - i;
        l = i - 1;
        r = j;
        found = true
    } 
    
  }
    return !found ? "": s.slice(l,r+1)
};


// Hard
// https://leetcode.com/problems/minimum-window-substring/
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.