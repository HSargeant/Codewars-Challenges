// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
// Hard

var findMedianSortedArrays = function(nums1, nums2) {
    let median
    let arr = nums1.concat(nums2)
    arr.sort((a,b)=>a-b)
    
    let len = arr.length
    
    if(len%2==0){
        let x=len/2-1
        median=(arr[x]+arr[x+1])/2
    }else{
        let x = Math.floor(len/2)
        median = arr[x]
    }   
    return  median  
};