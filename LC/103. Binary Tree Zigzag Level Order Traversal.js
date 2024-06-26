var zigzagLevelOrder = function(root) {
    if(!root) return []
    let res=[]
    let q=[root]
    let  count=1
    let subtree
    while(q.length){
        let temp=[]
        let currLength = q.length
            for (let i = 0; i < currLength; i++) {
                subtree = q.shift();
                if (subtree.left) q.push(subtree.left);
                if (subtree.right) q.push(subtree.right);
                temp.push(subtree.val);
            }
          if(count%2==0) {
            res.push( temp.reverse())
            count++
            }else{
                res.push(temp);
                count++
            }
    }
    return res;
}
// 103. Binary Tree Zigzag Level Order Traversal


// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []