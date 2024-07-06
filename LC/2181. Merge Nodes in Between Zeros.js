var mergeNodes = function(head) {
    let res = new ListNode()
    let temp = res,prev=0
    while(head){
        if(head.val==0){
            temp.next=new ListNode(prev)
            prev=0
            temp=temp.next
        }else{
            prev+=head.val
        }
        head=head.next
    }
    return res.next.next
};
// 2181. Merge Nodes in Between Zeros