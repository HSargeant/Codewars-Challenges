var findSecondMinimumValue = function(root) {
    if(!root) return -1
    let res=new Set()
    const dfs=(node)=>{
        if(!node) return 
        dfs(node.left)
        res.add(node.val)
        dfs(node.right)
    }
    dfs(root)
    return res.size >1? [...res].sort((a,b)=>a-b)[1] :-1
};