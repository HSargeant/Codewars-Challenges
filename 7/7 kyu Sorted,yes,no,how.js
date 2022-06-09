// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
function isSortedAndHow(array) {
  console.log(array)
  let tester= [...array]
  let asc= array.sort((a,b)=>a-b)
  let dsc=array.sort((a,b)=>b-a)
  console.log(asc)
  console.log(dsc)

if(tester[0]==Math.min(...asc)){
  return "yes, ascending"
} else if(tester[0]==Math.max(...asc)){
  return "yes, descending"
} else return "no"
  
     
     
}