var preorder = function(root,res=[]) {
    if(!root) return []
    let child = root.children
    res.push(root.val)

    child.forEach(x=>{

        preorder(x,res)
    })
    return res
};

// \Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)