const groupAnagrams = (strs)=> {
    let obj={}
    for(i=0; i<strs.length; i++){
        let curr = strs[i].split("").sort().join("")
        obj[curr]? obj[curr].push(strs[i]) : obj[curr]=[strs[i]]
    }
    return Object.values(obj)
}

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]