/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max=0,count=0
    for(i of s){
        if(i =="(") {count++
        }else{ if(i==")") count--}
        max=Math.max(count,max)
    }
    return max
    
};
// 1614. Maximum Nesting Depth of the Parentheses