/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr=[]
    let dfs=(root)=>{
        if(!root) return 
            dfs(root.left)
            arr.push(root.val)
            dfs(root.right)
    }
    dfs(root)
    let min = 2**32
    
    for(i=0;i<arr.length; i++){
        if(arr[i+1]){
            let curr = Math.abs(arr[i+1]-arr[i])
            min = Math.min(min,curr)
        }  
    }
    return min
};


// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105