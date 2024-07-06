/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let count=0,res=[],prev=null,min=Infinity
    while(head&&head.next){
        count++
        if(prev!=null&&head.val<prev && head.val <head.next.val){
            res.push(count)
        }
        if(prev!=null && head.val > prev && head.val > head.next.val){
            res.push(count)
        }
        if(res.length>=2){
            min=Math.min(count-res[res.length-2],min)
        }
        prev=head.val
        head=head.next
    }
    if(!res.length) return [-1,-1]
    if(res.length==1) return [-1,-1]
    let max=res[res.length-1]-res[0]
    return [min,max]
};
// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points