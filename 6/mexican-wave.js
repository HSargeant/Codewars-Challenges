function wave(str){
let res=[]
for(i=0; i<str.length; i++){
  if(str[i]==" ") continue
  let strArr=str.split("")
  strArr[i]=strArr[i].toUpperCase()
  res.push(strArr.join(""))
}
  return res
}
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat