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
var sumNumbers = function (root) {
    if (!root) return 0
    let res = 0
    const dfs = (node, temp = "") => {
        if (!node.left && !node.right) {
            res += Number(temp + node.val)
            return
        }
        if (node.right) dfs(node.right, temp + node.val)
        if (node.left) dfs(node.left, temp + node.val)
    }
    dfs(root)
    return res
};
// 129. Sum Root to Leaf Numbers