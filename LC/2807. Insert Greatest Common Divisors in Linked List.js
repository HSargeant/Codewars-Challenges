function insertGreatestCommonDivisors (head) {
    let temp=head
    while(temp &&temp.next){
        let a=temp.val
        let b=temp.next.val
        let x = temp.next
        temp.next = new ListNode(gcd(a,b),x)
        temp=temp.next.next
    }
    return head
};

function gcd(a,b){
    if(b<a){
        [a,b]= [b,a]
    }
    if(b%a == 0) return a
    let x = a
    while(true ){
        x--
        if(b%x==0 && a % x ==0) return x
    }
}
// 2807. Insert Greatest Common Divisors in Linked List