var findTarget = function(root, k) {
    const dfs=(root,o={})=>{
        if(!root) return false
        if(o[root.val]!==undefined) return true
        o[k-root.val]=root.val
        return dfs(root.left,o)||dfs(root.right,o)
    }
   return dfs(root) 
};


// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
 