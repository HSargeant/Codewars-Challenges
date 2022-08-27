// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str.split(" ").map(x=>{
    if((x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90)  || (x.charCodeAt(0)>=97 &&x.charCodeAt(0) <=122)    ){
      return x.slice(1)+x[0] +"ay"
    }else return x
    
  }).join(" ")
}