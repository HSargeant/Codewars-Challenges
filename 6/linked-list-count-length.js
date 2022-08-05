function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count=0
  while(head){
    count++
    head=head.next
  }
  return count
}

function count(head, data) {
  let res=[]
  let obj={}
  while(head){
    res.push(head.data)
    head=head.next
  }
  res.forEach(x=>{
    obj[x] = obj[x]? obj[x]+=1 : 1
  })
  return obj[data] ||0
}

// DESCRIPTION:
// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4