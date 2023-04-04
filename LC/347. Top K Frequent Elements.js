var topKFrequent = function(nums, k) {
    let obj={}
    let res=[]
    for(x of nums){
        obj[x]=obj[x]+1 || 1
    }
    let arr=Object.keys(obj).sort((a,b)=>obj[b]-obj[a])
    for(i=0;i<k;i++){
        res.push(arr[i])
    }
    return res
};

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]