// dfs
function maxLevelSum (root) {
    let obj={},res,max=-Infinity
    const dfs=(node,level=1)=>{
        if(!node) return
        obj[level] ? obj[level]+=node.val : obj[level]=node.val
        dfs(node.left,level+1)
        dfs(node.right,level+1)
    }
    dfs(root)
    for(let x in obj){
        let curr = obj[x]
        if(curr > max) {

            res=x
            max=curr
        }
    }
    return +res
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

// bfs 10/12/24
// function maxLevelSum(root) {
//     if (!root) return 0
//     let level = 1, res = 1
//     let q = [root], max = -Infinity
//     while (q.length) {
//         let len = q.length, sum = 0
//         for (let i = 0; i < len; i++) {
//             let curr = q.shift()
//             sum += curr.val
//             if (curr.left) q.push(curr.left)
//             if (curr.right) q.push(curr.right)
//         }
//         if (sum > max) {
//             res = level
//             max = sum
//         }
//         level++
//     }
//     return res
// };