// 965. Univalued Binary Tree

// A binary tree is uni-valued if every node in the tree has the same value.

// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

var isUnivalTree = function(root,prev=root.val) {
    // 1st attempt recursion
    if(!root) return true
    if(prev!=root.val) return false
    let left = isUnivalTree(root.left,root.val)
    let right= isUnivalTree(root.right,root.val)
    return left&&right

    // 2nd bfs
    // let q=[root]
    // while(q.length){
    //     let curr=q.pop()
    //     if(curr.val!=root.val) return false
    //     if(curr.left) q.push(curr.left)
    //     if(curr.right) q.push(curr.right)
    // }
    // return true

    
};

