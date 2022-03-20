// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

//solution

function reverseNumber(n) {
  
  let str=n.toString().split("").reverse().join().replace(/,/g,"")
  
  if(str[str.length-1] == "-"){
    str = str.replace(/-/g,"")
    str = "-"+str
    return Number(str)
  
  } else return Number(str)

}