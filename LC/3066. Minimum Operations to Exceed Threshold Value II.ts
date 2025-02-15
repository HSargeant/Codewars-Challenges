function minOperations(nums: number[], k: number): number {
    let q = new MinPriorityQueue()
    for (let num of nums) {
        q.enqueue(num)
    }
    let res = 0
    while (q.front().element < k) {
        res++
        let a = q.dequeue().element
        let b = q.dequeue().element
        q.enqueue(Math.min(a, b) * 2 + Math.max(a, b))
    }
    return res
};
// 3066. Minimum Operations to Exceed Threshold Value II