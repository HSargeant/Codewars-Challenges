var isPalindrome = function(head) {
    let res=[]
    while(head){
        res.push(head.val)
        head=head.next
    }
    let l=0,r=res.length-1
    while(l<=r){
        if(res[l]!==res[r]) return false

        l++
        r--
    }
    return true
};