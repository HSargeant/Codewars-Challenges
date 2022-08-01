// DESCRIPTION:
// Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

// The function must return a falsy value for invalid input values, like an out of range index.

// So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

// Other examples:

// getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
// getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2

// Predefined object for list nodes

function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  
  
  function getKthLastElement(head, k) {
    // head is the first Node in the list.
    // k is the 0-based index as counted from the end of the list.
    
    // return the list element corresponding to the index k
    // e.g. 
    //   if k === 0 return the last element
    //   if k === 1 return the penultimate element
    
    let arr = [];
    while(head){
      arr.push(head); // Collect the node, not the value
      head = head.next;
    }
  
    if (k < 0 || k >= arr.length) return null; // Out of range
    let result = arr.splice(-(k+1), 1); // Always add 1 to k 
    return result[0]; // Return the node.
    
  }



