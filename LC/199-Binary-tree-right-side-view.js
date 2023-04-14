// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
var rightSideView = function(root) {
    if(!root) return []
    let res=[]
    let q=[root]
    while(q.length){
        let temp=[]
        let currLength = q.length
        for (let i = 0; i < currLength; i++) {
            const subtree = q.shift()
            temp.push(subtree.val)
            if (subtree.right) q.push(subtree.right)
            if (subtree.left) q.push(subtree.left)
        }
        res.push(temp)
    }
    return res.map(x=>x[0])
};