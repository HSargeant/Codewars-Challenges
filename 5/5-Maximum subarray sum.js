var maxSequence = function(arr){
  if(arr.length==0) return 0
  if(arr.filter(x=>x>0).length==arr.length) return arr.reduce((a,c)=>a+c,0)
  if(arr.filter(x=>x<0).length==arr.length) return 0
  
  let sum=arr[0],max=arr[0]
  for(i=1; i<arr.length;i++){
    sum=Math.max(sum+arr[i],arr[i])
    max=Math.max(max,sum)
    
  }
  return max
}


// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.