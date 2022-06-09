// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.



function solve(str){
 
  let u=0, l=0, n=0,s=0
  
  str=str.split("")
str.forEach(x=>{
  if(x.match(/^[A-Z]\w*/)){
    u++
  }else if(x.match(/^[a-z]\w*/)){
    l++
  }else if((x.match(/^[0-9]\w*/))){
    n++
  }else s++
})  
  
  return [u,l,n,s]
  }