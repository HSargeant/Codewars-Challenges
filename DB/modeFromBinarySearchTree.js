const findMode=(root)=>{
let obj={}
    if(!root)return -1

    const dfs=(root)=>{
        if(!root)return
        obj[root.val] =obj[root.val]+1 ||1
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let mode=0
    for(x in obj){
        mode = Math.max(obj[x],mode)
    }
    return mode

}

// Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

// Ex: Given the following tree...

//         2
//        / \
//       1   2
// return 2.

// Ex: Given the following tree...

//          7
//         / \
//       4     9
//      / \   / \
//     1   4 8   9
//                \
//                 9  
// return 9.