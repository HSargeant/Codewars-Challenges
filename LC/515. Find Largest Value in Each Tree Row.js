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
 * @return {number[]}
 */
var largestValues = function(root) {
    let res=[]
    const dfs=(node,level=0)=>{
        if(!node) return
        if(res[level]==undefined){
            res.push(node.val)
        }else{
            res[level]=Math.max(res[level],node.val)
        }
        dfs(node.left,level+1)
        dfs(node.right,level+1)
    }
    dfs(root)
    return res
};
// 515. Find Largest Value in Each Tree Row