const groupAnagrams = (strs)=> {
    let obj={}
    for(i=0; i<strs.length; i++){
        let curr = strs[i].split("").sort().join("")
        obj[curr]? obj[curr].push(strs[i]) : obj[curr]=[strs[i]]
    }
    return Object.values(obj)
}
// group anagrams
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

// var groupAnagrams = function(strs) {
//     const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
//     const map = new Map();

//     for(let str of strs) {
//         let count = 1;
//         for(let ch of str) {
//             let code = ch.charCodeAt(0) - 97;
//             count *= primes[code];
//         }

//         if(map.has(count)) {
//             const list = map.get(count);
//             list.push(str);
//             map.set(count, list);
//         }
//         else {
//             map.set(count, [str]);
//         }
//     }

//     return Array.from(map.values());
// };