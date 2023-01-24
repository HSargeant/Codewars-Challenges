// You are given the head of a linked list.

// Remove every node which has a node with a strictly greater value anywhere to the right side of it.

// Return the head of the modified linked list.

// Example 1:

// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.
// Example 2:

// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.
 
// Constraints:

// The number of the nodes in the given list is in the range [1, 105].
// 1 <= Node.val <= 105

function removeNodes(head) {
    let temp=head
    let arr=[]
    let prev=temp.val
    while(temp){
        if(prev>=temp.val) {
            arr.push(temp)
            prev=temp.val
            temp=temp.next
        }else{
            while(arr.length>0 && arr[arr.length-1].val<temp.val){
                arr.pop()
                
            }
            arr.push(temp)
            prev=temp.val
            temp=temp.next

        }
    }
 temp=arr[0]
for(i=1; i<arr.length; i++){
    temp.next = arr[i]
    temp=temp.next
}
        return arr[0]
};