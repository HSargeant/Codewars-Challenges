/**
 * @param {string} s
 * @return {number}
 */


//code if want the returned mutated string along with # of moves
 var minimumMoves = function(s) {
    s=s.split("")
    let count=0
    while(s.includes("X")){
        let i = s.indexOf("X")
        for(r=i; r<i+3; r++){
            if(!s[r]) break
            s[r]="O"
        }
        count++        
        
    }
    return count
}

// code if only want number of moves
var minimumMoves = function(s) {
    let res=0,i=0
    while(s[i]){
        if(s[i]=="X"){
            res++
            i+=3
        }else i++     
        
    }
    return res

};


// https://leetcode.com/problems/minimum-moves-to-convert-string/description/
// You are given a string s consisting of n characters which are either 'X' or 'O'.

// A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

// Return the minimum number of moves required so that all the characters of s are converted to 'O'.

 

// Example 1:

// Input: s = "XXX"
// Output: 1
// Explanation: XXX -> OOO
// We select all the 3 characters and convert them in one move.
// Example 2:

// Input: s = "XXOX"
// Output: 2
// Explanation: XXOX -> OOOX -> OOOO
// We select the first 3 characters in the first move, and convert them to 'O'.
// Then we select the last 3 characters and convert them so that the final string contains all 'O's.
// Example 3:

// Input: s = "OOOO"
// Output: 0
// Explanation: There are no 'X's in s to convert.