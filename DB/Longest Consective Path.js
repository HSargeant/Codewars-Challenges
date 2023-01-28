const conseqSeq=(root)=>{
    let max= 0
    let dfs=(node,count=1)=>{
        if(!node) return
        max=Math.max(max,count)
        if(node.left){
            if(node.left.val ==node.val+1) dfs(node.left,count+1)
        }
        if(node.right){
            if(node.right.val ==node.val+1) dfs(node.right,count+1)
        }
    }
    dfs(root)
    return max
}

// Today's Byte

// Given the reference to a binary tree, return the length of the longest path in the tree that contains consecutive values.
// Note: The path must move downward in the tree.
// Ex: Given the following binary tree…

// 1
//  \
//   2
//    \
//     3
// return 3.
// Ex: Given the following binary tree…

//        1
//       / \
//      2   2
//     / \ / \
//    4  3 5  8
//      /
//     4
// return 4.
