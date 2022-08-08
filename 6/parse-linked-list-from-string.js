function parse(str) {
  if(str=="null") return null
  let arr=str.split("->")
  arr.pop()
    let node
    let curr
    for(let i=arr.length-1; i >= 0; i--){
        if(!node)
            node =  new Node(+arr[i]);
        else {
            curr = new Node(+arr[i]);
            curr.next = node;
            node = curr;
        }
    }
    return node;

  
  }

//   DESCRIPTION:
// Parse a linked list from a string
// Related Kata
// Although this Kata is not part of an official Series, you may want to complete this Kata before attempting this one as these two Kata are deeply related.

// Preloaded
// Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }