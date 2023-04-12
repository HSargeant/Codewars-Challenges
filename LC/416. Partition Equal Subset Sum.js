var canPartition = function(nums) {
    let total = nums.reduce((a,c)=>a+c,0)
    if(total%2!=0) return false
    let target= total/2
    const set = new Set([0])

    for (let number of nums) {
        let sumArr = Array.from(set);
        for (let sum of sumArr) {
            set.add(sum + number);
        }
    }
    return set.has(target);
};

// 416. Partition Equal Subset Sum
