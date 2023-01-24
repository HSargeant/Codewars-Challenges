// Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

// Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:

// find([3,6,9,12],12) = 5.
// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Array combinations

// Sum of prime-indexed elements

function find(arr, n){
    let res=[]
    const back=(i=0,temp=[],curr=0)=>{
      if(curr>n ||temp.length>arr.length||i>arr.length) return
      if(curr==n){
        res.push([...temp])
        return
      }
      temp.push(arr[i])
      back(i,temp,curr+arr[i])
      temp.pop()
      back(i+1,temp,curr)
    }
    back()
    return res.length
};
