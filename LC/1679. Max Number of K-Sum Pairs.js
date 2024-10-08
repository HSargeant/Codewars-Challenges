var maxOperations = function(nums, k) {
    let o={}
    for(let num of nums){
        o[num]=o[num]+1||1
    }
    let count=0
    for(let num of nums){
        let a=k-num
        if(num==a){
            if(o[num]>=2){
                o[num]--
                o[a]--
                count++
            }
        }else if(o[num]>0 && o[a]>0){
            o[num]--
            o[a]--
            count++
        }
    }
    return count
};
// 1679. Max Number of K-Sum Pairs