// Task
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

const letters = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97) )

function encode(str,  n){
  let arr=[]
  let j=0
  n=(n+"").split("")
  for(i=0; i<str.length; i++){
    if(j>n.length-1){
      j=0
    }
    arr.push(+n[j] + (letters.indexOf(str[i]) +1) )
    j++
  }
  return arr;
}