// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

var titleToNumber = function(s) {
    
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res= res* 26 + (s[i].charCodeAt() - 64);
    }
    return res
};