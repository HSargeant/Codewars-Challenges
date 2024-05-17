function removeLeafNodes(root, target) {
    if(!root) return null
    root.left = removeLeafNodes(root.left,target)
    root.right = removeLeafNodes(root.right,target)
    if(root.val == target && root.left ==null && root.right == null) return null
    return root
};
// 1325. Delete Leaves With a Given Value