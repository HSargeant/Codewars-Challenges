/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let x =  new MinPriorityQueue({
        compare: (a, b) => {
            if(a[0]==b[0]) return a[1]-b[1]
            return a[0] - b[0]}
    });
    for(let i=0; i<nums.length; i++){
        x.enqueue([nums[i],i])
    }

    for(let i=0; i<k; i++){
        let [num,idx]=x.dequeue()
        num*=multiplier
        nums[idx]=num
        x.enqueue([num,idx])
    }
    return nums
};
// 3264. Final Array State After K Multiplication Operations I