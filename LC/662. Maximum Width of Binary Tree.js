// 662. Maximum Width of Binary Tree

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
var widthOfBinaryTree = function(root) {
    const minPos = [0];
    let max = 0;
    function dfs(node=root, idx=0, pos=0) {
        if(!node) return;
        if(minPos[idx] === undefined) minPos.push(pos);
        const diff = pos - minPos[idx];
        max = Math.max(max, diff+1);
        dfs(node.left, idx+1, diff*2);
        dfs(node.right, idx+1, diff*2+1);
    }
    dfs(root, 0, 0);
    return max;

};
