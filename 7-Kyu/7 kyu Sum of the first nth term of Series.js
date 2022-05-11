// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

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