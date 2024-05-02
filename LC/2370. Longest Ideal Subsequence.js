/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
    arr = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) { 
        char_code = s.charCodeAt(i) - 97       
        subarray = arr.slice(Math.max(char_code - k, 0), Math.min(char_code + k + 1, 26))
        count = Math.max(...subarray), count ++        
        arr[char_code] = count
    }
    
    return Math.max(...arr)
}
// 2370. Longest Ideal Subsequence