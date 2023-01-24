var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a)
    return nums[k-1]
    
};

// return the kth largest element in the array