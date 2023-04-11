var findLengthOfLCIS = function(nums) {
    let check = -Infinity,count=0,res=0
    for(x of nums){
        if(check>=x){
            res= Math.max(res,count)
            count=1
            check=x
        }else{
            count++
            check=x

        }

    }
    return Math.max(res,count)
    
};