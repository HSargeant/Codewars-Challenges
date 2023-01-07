var isSymmetric = function(root) {
return reflection(root,root)
    
};

function reflection(r1, r2) {
    if (!r1 && !r2) return true;
    if (!r1 || !r2) return false;
    if (r1.val !== r2.val) return false;
    return reflection(r1.left, r2.right) && reflection(r1.right, r2.left);
}


// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 
// Follow up: Could you solve it both recursively and iteratively?