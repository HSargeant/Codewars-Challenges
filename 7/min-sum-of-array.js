// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
function minSum(arr) {
  let pairs = arr.length/2
arr.sort((a,b)=>a-b)
  let minSum=0
  for(i=0; i<pairs; i++){
    minSum += (arr[i] * arr[arr.length-(i+1)])
  }
  return minSum
}