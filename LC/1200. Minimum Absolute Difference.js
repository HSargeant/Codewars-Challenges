function minimumAbsDifference(arr) {
    let res=[]
    arr.sort((a,b)=>a-b)
    let minAbs=Infinity
    for(let i=0; i<arr.length-1; i++){
        let l=arr[i],r=arr[i+1]
        minAbs=Math.min(minAbs,Math.abs(r-l))
    }
    for(let i=0; i<arr.length-1; i++){
        let l=arr[i],r=arr[i+1]
        if(r-l==minAbs) res.push([l,r])


    }
    return res  
};
// 1200. Minimum Absolute Difference

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]