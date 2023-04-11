/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


// 109 Convert Sorted List to Binary Search Tree
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []
 
// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

var sortedListToBST = function(head) {
    let arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }
    const generateNodes=(a)=>{
        if(!a.length) return null
        let mid = Math.floor(a.length/2)
        let root = new TreeNode(a[mid])
        root.left = generateNodes(a.slice(0,mid))
        root.right = generateNodes(a.slice(mid+1,a.length))
        return root
    }
    return generateNodes(arr)

};