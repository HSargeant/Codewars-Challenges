


// use array 
var reorderList = function(head) {
  if (!head || !head.next) return head;

  let res=[]
  let temp=[]
  let p=head
  while(p){
    res.push(p.val)
    p=p.next
  }
  let idx=0
  for(i=0; i <Math.ceil(res.length/2); i++){
    if(res.length%2==1&&i==Math.ceil(res.length/2)-1) {
      temp.push(res[i])
      break
    }
    let a= res[idx],b=res[res.length-idx-1]
    temp.push(a,b)
    idx++

  }
   p = head
  for(i=0; i<temp.length; i++){
    p.val=temp[i]
    p=p.next
  }
return head
  
}


// copy list
var reorderList = function(head) {
    if (!head || !head.next) return head;

    let x = JSON.stringify(head)
    x = JSON.parse(x)
    let xx= null
    let count=0
  while(x){
    let tt=x.next
    x.next=xx
    xx=x
    x=tt
    count++

  }
  let l1=head
  let l2=xx

  while(l2){
    if(count==1){
      l1.next=null
      break
    }
      let r=l1.next
      l1.next=l2
      l1=l2
      l2=r
      count--
  }  


  return head
    
}