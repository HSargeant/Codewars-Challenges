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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (depth == 1) {
        root = new TreeNode(val,root)
        return root
    }
    dfs = (node, d = 1) => {
        if (!node) return
        if (d == depth - 1) {
            let ltemp = node.left
            let rtemp = node.right
            node.left = new TreeNode(val,ltemp)
            node.right = new TreeNode(val,null,rtemp)
            return
        }
        dfs(node.right, d + 1)
        dfs(node.left, d + 1)
    }
    dfs(root)
    return root
};
// 623. Add One Row to Tree