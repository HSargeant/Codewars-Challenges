class TreeNode{
    constructor(val,left,right){
        this.val=val
        this.left=left||null
        this.right=right||null
    }
}

let tree = new TreeNode(6,new TreeNode(4,new TreeNode(5)))
let tree2 = new TreeNode(6,new TreeNode(8,null,new TreeNode(22)),new TreeNode(7,new TreeNode(77)))

const findOnlyChildNodes=(root,res=[])=>{
    if(!root) return res
    if(root.left) findOnlyChildNodes(root.left,res)
    if(root.right) findOnlyChildNodes(root.right,res)
    if((!root.left&&root.right)){
        res.push(root.right.val)
    }
    if((root.left&&!root.right)){
        res.push(root.left.val)
    }
    return res



}

console.log(findOnlyChildNodes(tree))
console.log(findOnlyChildNodes(tree2))