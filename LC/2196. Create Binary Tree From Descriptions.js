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