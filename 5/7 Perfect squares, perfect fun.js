// DESCRIPTION:
// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

// 12
// 12 

// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

// 123
// 123
// 123

// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
JavaScript:
function squareIt(int) {
   let arr =int.toString().split("")
   
  let sq = Math.sqrt(arr.length)  

  let str=""
  if(Number.isInteger(sq)){
    
    for(i=0; i<arr.length; i++){
      if(i>0 && Number.isInteger(i/sq)){
      str+="\n"
      }
      str+=arr[i]
    }
    return str
  }
  return "Not a perfect square!"
  }