var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a)
    return nums[k-1]
    
};

// return the kth largest element in the array

// using priority queue

// function findKthLargest  (nums, k) {
//     let q = new MinPriorityQueue()
//     for (num of nums) {
//         if (q.size() < k) {
//             q.enqueue(num)
//         } else {
//             if (num > q.front().element) {
//                 q.dequeue()
//                 q.enqueue(num)
//             }
//         }
//     }
//     return q.front().element
// };