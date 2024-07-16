function createBinaryTree(des) {
    let o = {}, children = new Set(), parents = new Set()
    for (let elem of des) {
        let parent = elem[0]
        let child = elem[1]
        let left = elem[2] == 1
        children.add(child)
        parents.add(parent)
        if (o[parent]) {
            o[parent].push({ node: child, left: left })
        } else {
            o[parent] = [{ node: child, left: left }]
        }
    }
    let root = null
    for (let elem of des) {
        if (!children.has(+elem[0])) {
            root = elem[0]
            break
        }
    }

    let res = build(root, o, parents)
    return res
};

function build(key, o, set) {
    if (!set.has(key)) {
        let root = new TreeNode(key)
        return root
    }
    let root = new TreeNode(key)
    let arr = o[key]
    if (arr[0] != undefined) {
        if (arr[0].left) {
            root.left = build(arr[0].node, o, set)
        } else {
            root.right = build(arr[0].node, o, set)
        }
    }
    if (arr[1] != undefined) {
        if (arr[1].left) {
            root.left = build(arr[1].node, o, set)

        } else {
            root.right = build(arr[1].node, o, set)
        }
    }
    return root
}
// 2196. Create Binary Tree From Descriptions

// You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

// If isLefti == 1, then childi is the left child of parenti.
// If isLefti == 0, then childi is the right child of parenti.
// Construct the binary tree described by descriptions and return its root.

// The test cases will be generated such that the binary tree is valid.

 
// Example 1:
// Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// Output: [50,20,80,15,17,19]
// Explanation: The root node is the node with value 50 since it has no parent.
// The resulting binary tree is shown in the diagram.
// Example 2:


// Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
// Output: [1,2,null,null,3,4]
// Explanation: The root node is the node with value 1 since it has no parent.
// The resulting binary tree is shown in the diagram.


// v2 - no recursion
function createBinaryTreeNoRecursion(des) {
    let o = {}, children = new Set()
    for (let elem of des) {
        let parent = elem[0]
        let child = elem[1]
        let left = elem[2] == 1
        children.add(child)
        if(!o[parent]){
            o[parent] = new TreeNode(parent)
        }
        if(!o[child]){
            o[child] = new TreeNode(child)
        }
        if(left){
            o[parent].left = o[child]
        }else{
            o[parent].right = o[child]
        }
    }
    let root = null
    for (let elem of des) {
        if (!children.has(elem[0])) {
            root = elem[0]
            break
        }
    }
    return o[root]
};