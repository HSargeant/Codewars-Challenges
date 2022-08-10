function solution(str){
if(!str) return []
  let x = str.length
 str= str.split("")
  
  for(i=2; i<=str.length; i+=3){
    str.splice(i,0,",")

  }
  str = str.join("").split(",")
    str=str.filter(x=>x)

   if(str[str.length-1].length==1) str[str.length-1]+="_"

  return str
}

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']