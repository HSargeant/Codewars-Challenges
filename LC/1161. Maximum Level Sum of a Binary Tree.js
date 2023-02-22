var maxLevelSum = function(root) {
    let obj={},res,max=-Infinity
    const dfs=(node,level=1)=>{
        if(!node) return
        obj[level] ? obj[level].push(node.val) : obj[level]=[node.val]
        dfs(node.left,level+1)
        dfs(node.right,level+1)
    }
    dfs(root)
    for(x in obj){
        let curr = obj[x].reduce((a,c)=>a+c,0)
        if(curr > max) {

            res=x
            max=curr
        }
    }
    return res
};  

// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2