/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {

    let temp = list1,i=0
    let jumps = b-a + 2
    while(temp){
        let curr = temp
        if(i== a-1){
            while(jumps){
                curr=curr.next
                jumps--
            }
            temp.next = list2
            let temp2=list2
            while(temp2.next){
                temp2=temp2.next
            }
            temp2.next=curr
            break
        }
        temp= temp.next
        i++
    }
    return list1
};
// 1669. Merge In Between Linked Lists