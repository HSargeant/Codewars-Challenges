// Given the root of a binary tree, return the leftmost value in the last row of the tree.

// Example 1:

// Input: root = [2,1,3]
// Output: 1
// Example 2:

// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
 
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

function findBottomLeftValue(root){
    //use level order traversal-- if theres a left node assign that to the answer if not assign the right
    let arr=[root]
    let res=root.val
    while(arr.length){
        let curr = arr.shift()
        if(curr.right){
            arr.push(curr.right)
            res=curr.right.val
        }
        if(curr.left){
            arr.push(curr.left)
            res=curr.left.val
        }
    }
    return res
};