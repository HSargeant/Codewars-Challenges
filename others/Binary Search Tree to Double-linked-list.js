// No. 01 - Binary Search Tree and Double-linked List
class ListNode{
    constructor(val,next,prev){
        this.val=val||0
        this.next =next|null
        this.prev=prev||null
    }
}
class TreeNode{
    constructor(val,left,right){
        this.val=val||0
        this.left = left||null
        this.right=right||null
    }
}

const bintoList=(root)=>{
    let res=[]
    let dfs=(node)=>{
        if(!node) return
        dfs(node.left)
        res.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    let n = new ListNode(root.val)
    let temp = n
    let prev= null
    for(i=1; i< res.length; i++){
        temp.next = new ListNode(res[i])
        temp.prev=prev
        prev=temp
        temp=temp.next
    }
    return n
}