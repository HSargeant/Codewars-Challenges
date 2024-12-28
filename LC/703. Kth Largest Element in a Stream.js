/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.nums = nums
        this.heap = new MinPriorityQueue()
        this.init()
    }
    init(){
        for(let num of this.nums){
            this.add(num)
        }
    }
    add(val) {
        if (this.heap.size() < this.k) {
            this.heap.enqueue(val)
        } else if (val > this.heap.front().element) {
            this.heap.dequeue();
            this.heap.enqueue(val);
        }
        return this.heap.front().element
    }
};
// 703. Kth Largest Element in a Stream