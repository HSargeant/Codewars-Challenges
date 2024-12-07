function rotateRight (head, k) {
    if(!head) return null
    let a=[]
    let temp=head
    while(temp){
        a.push(temp.val)
        temp=temp.next
    }
    k%=a.length
    a.unshift(...a.splice(-k))
    let res= new ListNode(a[0])
    temp=res
    for(let i = 1 ; i<a.length; i++){
        temp.next = new ListNode(a[i])
        temp=temp.next
    }
    return res
};
// 61. Rotate List