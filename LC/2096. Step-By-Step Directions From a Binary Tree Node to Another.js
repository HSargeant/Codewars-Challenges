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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    let lca = getLCA(root, startValue, destValue)
    let depth = getUs(lca, startValue)
    let path = getPath(lca, destValue)
    return depth + path
};


function getLCA(root, s, d) {
    if (!root) return null
    if (root.val === s || root.val === d) return root
    const left = getLCA(root.left, s, d)
    const right = getLCA(root.right, s, d)
    if (left && right)
        return root
    return left || right
}

function getPath(root, val, str = '') {
    if (!root) return ''
    if (root.val === val) return str
    return getPath(root.left, val, str + 'L') || getPath(root.right, val, str + 'R')
}

function getUs(root, val, str = "") {
    if (!root) return
    if (root.val === val) return str
    return getUs(root.left, val, str + "U") || getUs(root.right, val, str + "U")
}

// 2096. Step-By-Step Directions From a Binary Tree Node to Another