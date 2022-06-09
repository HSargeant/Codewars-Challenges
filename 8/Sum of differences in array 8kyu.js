// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).


function sumOfDifferences(arr) {
  
  arr.sort((a,b)=>a-b)

  let sum1=arr[0]

  if(arr.length==0 || arr.length==1){
    return 0
  }else {
  for(i=1; i<arr.length; i++){
    sum1-=arr[i]
  }
  
  arr.sort((a,b)=>b-a)
    let sum2=arr[0]
  
    for(i=1; i<arr.length; i++){
    sum2-=arr[i]
  }
    
  return (sum2+-sum1)/2
    }
  
  //could also just do max -min -- middle cancel out to zero
}