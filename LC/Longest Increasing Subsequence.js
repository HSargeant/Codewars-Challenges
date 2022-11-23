var lengthOfLIS = function(a) {

  const res = [a[0]]; 
for(let i = 1; i < a.length; i++){
  if(a[i] > res[res.length - 1]) res.push(a[i])
  else res[binarySearch(res, a[i])] = a[i]
}
return res.length
}

const binarySearch = (arr, num) => {
let l = 0, r = arr.length - 1; 
while (l <= r) {
  let mid = Math.floor((r + l) / 2)
  if(arr[mid] < num) l = mid + 1
  else r = mid - 1
}
return l
}


// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1