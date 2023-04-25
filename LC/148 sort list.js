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
var sortList = function(head) {
    if(!head) return null
    let arr=[]
    let temp=head
    while(temp){
        arr.push(temp.val)
        temp=temp.next
    }

    arr.sort((a,b)=>b-a)
    // console.log(arr)
    let res = new ListNode()
    let r = res
    while(arr.length){
        temp = arr.pop()
        r.val=temp
        r.next= new ListNode(null)
        if(arr.length){
            r=r.next
        }else r.next=null
  
    }
    return res
    
};
// Sort Linked List
// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
 

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?