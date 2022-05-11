// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  str=str.toLowerCase()
let x
let y
  
if(!str){return true}
  for(i=0; i<str.length; i++){
     x = str.slice(i,i+1)
     y=str.slice(i+1)
    if(y.includes(x)){
      return false
      break
    }
  }
  
  return true
  
}