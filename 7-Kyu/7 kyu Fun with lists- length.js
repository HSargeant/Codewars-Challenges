// Implement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

function length(head) {
  let number=0
if(head=="none"){
  return 0
}else if(head){
  number = 1
  while(head.next){
    head=head.next
    number++
  }
}
 
return number
}