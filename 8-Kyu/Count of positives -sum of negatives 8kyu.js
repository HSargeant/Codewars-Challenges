// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(arr) {
    let sum=0
    let result=[]
    let count =0
        
    if(arr==null){
      return result
    }
  
    arr.forEach(x =>{
      if (x<0){
        sum+=x
      } else if(x>0){count++}
    })
  
  if(count==0 && sum==0){
    result=[]
  }else result.push(count, sum)
    return result
}