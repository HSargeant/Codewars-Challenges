// DESCRIPTION:
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){
  x=x.toLowerCase().split("").filter(e=>e.charCodeAt()==101|| e.charCodeAt()==117 ||e.charCodeAt()==97||e.charCodeAt()==105||e.charCodeAt()==111
 ).sort()
  
  let arr = [...new Set(x)]
  if(arr[0]!=="a") return 0
  if(arr[1]!=="e") return 1
  if(arr[2]!=="i") return 2
  if(arr[3]!=="o") return 3
  if(arr[4]!=="u") return 4
  
}