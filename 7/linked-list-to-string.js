// DESCRIPTION:
// Convert a linked list to a string

function stringify(list) {
    let res=""
    while(list){
      res+=list.data+" "
      list=list.next
      
    }
    res+=""+list
    res=res.split(" ").join(" -> ")
    return res?res:"null";
  }