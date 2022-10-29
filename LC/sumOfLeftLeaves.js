var sumOfLeftLeaves = function(root,left=false) {
        if(!root) return 0
    let res=0
    const dfs=(node)=>{
        if(!node) return
        if(node.left && !node.left.left&&!node.left.right) res+=node.left.val
        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)
    return res
    
//     summing the functions returns
//     if(!root) return 0
//     if(left) return root.val
//     return sumOfLeftLeaves(root.left,true)+sumOfLeftLeaves(root.right,false)


};

// 404. Sum of Left Leaves - easy https://leetcode.com/problems/sum-of-left-leaves/
// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0