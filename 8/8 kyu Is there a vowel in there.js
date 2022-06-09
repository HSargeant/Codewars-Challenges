// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
function isVow(a){
  let vowels = ["a","e","i","o","u"] 
  
  for(i=0; i<a.length; i++){
    if(vowels.includes(String.fromCharCode(a[i]))){
        a[i]=String.fromCharCode(a[i])
       }
  }
    
    return a
}