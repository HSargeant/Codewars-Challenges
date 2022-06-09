// Remove spaces from a sting

function noSpace(x){
  
  
  let arr=x.split(" ")

  for(i=0; i<=x.length; i++){
    
    if(arr[0]==" "){x.splice(i,1)}
    
  }
    
return   arr.join("")
  
}