function accum(s) {
  let res=""
 let arr= s.split("")
 for(i=0; i<arr.length; i++){
   res+=arr[i].toUpperCase()
   
   res+=arr[i].toLowerCase().repeat(i)
   if(arr[i+1]){
     res+="-"
   }
 }
  return res
}
// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.