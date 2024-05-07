/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function doubleIt (head) {
    if(head && !head.next){
        let double = head.val*2
        if(double<10) {
            head.val=double
            return head
        }

        let x = new ListNode(1,new ListNode(double%10))
        return x
    }
    let rev = null, temp = head
    while (temp) {
        let cur = temp.next
        temp.next = rev
        rev = temp
        temp = cur
    }
    temp = rev, carry = 0
    while (temp) {
        let ones = (temp.val * 2 + carry) % 10
        carry = temp.val > 4 ? 1 : 0
        temp.val = ones
        temp = temp.next
    }
    if (carry) {
        temp = rev
        while (temp.next) {
            temp = temp.next
        }
        temp.next = new ListNode(carry, null)
    }
    temp = rev, res = null
    while (temp) {
        let cur = temp.next
        temp.next = res
        res = temp
        temp = cur
    }
    return res
};
// 2816. Double a Number Represented as a Linked List