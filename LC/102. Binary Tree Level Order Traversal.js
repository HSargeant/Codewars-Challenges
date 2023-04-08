var levelOrder = function(root) {
    if(!root) return []
    let res=[]
    let q=[root]

    while(q.length){
        let temp=[]
        let currLength = q.length
        for (let i = 0; i < currLength; i++) {
            const subtree = q.shift();
            temp.push(subtree.val);
            if (subtree.left) q.push(subtree.left);
            if (subtree.right) q.push(subtree.right);
        }
        res.push(temp);
    }
    return res;
}