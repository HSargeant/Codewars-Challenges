/**
 * @param {string} s
 * @return {number}
 */
function minAddToMakeValid(s) {
    let count = 0, noMatch = 0
    for (let char of s) {
        if (char == "(") count++
        else {
            if (count > 0) count--
            else noMatch++
        }
    }
    return count + noMatch

};
// 921. Minimum Add to Make Parentheses Valid