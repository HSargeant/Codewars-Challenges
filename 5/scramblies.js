// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let obj1={}, obj2={}  
  
  for(i=0; i<str2.length; i++){
    
    obj2[str2[i]] =  obj2[str2[i]] +1 || 1
    
  }
  for(i=0; i<str1.length; i++){
    
    obj1[str1[i]]=  obj1[str1[i]] +1 || 1
    
  }
  for(e of str2){
    if(!obj1[e] || obj1[e]<obj2[e]) return false
  }
  
return true
}