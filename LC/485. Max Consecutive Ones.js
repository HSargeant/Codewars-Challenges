// 485. Max Consecutive Ones

const findMaxConsecutiveOnes = (nums) =>{
    let count=0,res=0
    nums.forEach(num=>{
        if(num==0){
            res=Math.max(count,res)
            count=0
        } else count++
    })
    return Math.max(count,res)
};