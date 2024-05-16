var evaluateTree = function(root) {
    if(!root) return false
    const dfs=(node)=>{
        if(!node) return false
        if(node.val == 1) return true
        if(node.val == 0) return false
        if(node.val == 3) return dfs(node.left) && dfs(node.right)
        if(node.val == 2) return dfs(node.left) || dfs(node.right)
    }
    return dfs(root)
};
// 2331. Evaluate Boolean Binary Tree