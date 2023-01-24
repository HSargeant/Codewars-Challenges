// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
 
// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

var uncommonFromSentences = function(s1, s2) {
    s1=s1.split(" ")
    s2=s2.split(" ")
    let obj1={},obj2={},res=[]
    for(x of s1){
        obj1[x]=obj1[x]+1||1
    }
    for(x of s2){
        obj2[x]=obj2[x]+1||1
    }
    for(x of s2){
        if(obj2[x]==1 && obj1[x]==undefined) res.push(x)
    }
    for(x of s1){
        if(obj1[x]==1 && obj2[x]==undefined) res.push(x)
    }
    return res
};