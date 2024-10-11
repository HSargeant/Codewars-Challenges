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
function goodNodes(root) {
    let count = 0
    const dfs = (node, max = -Infinity) => {
        if (!node) return
        if (node.val >= max) {
            count++
            max = node.val
        }
        dfs(node.left, max)
        dfs(node.right, max)
    }
    dfs(root)
    return count
};
// 1448. Count Good Nodes in Binary Tree