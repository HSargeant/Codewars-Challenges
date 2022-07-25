// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let pairs = arr.length/2
arr.sort((a,b)=>a-b)
  let minSum=0
  while(arr.length){
    minSum += arr.shift()*arr.pop()
  }
  return minSum
}

or
for(i=0; i<pairs; i++){
    minSum += (arr[i] * arr[arr.length-(i+1)])
  }
