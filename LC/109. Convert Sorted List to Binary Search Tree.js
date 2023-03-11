var sortedListToBST = function(head) {
    let arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }
    const generateNodes=(a)=>{
        if(!a.length) return null
        let mid = Math.floor(a.length/2)
        console.log(a[mid])
        let root = new TreeNode(a[mid])
        root.left = generateNodes(a.slice(0,mid))
        root.right = generateNodes(a.slice(mid+1,a.length))
        return root
    }
    return generateNodes(arr)
    
};