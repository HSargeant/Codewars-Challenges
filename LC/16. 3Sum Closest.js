var threeSumClosest = function(nums, target) {
    if(nums.length==3) return nums.reduce((a,c)=>a+c,0)
    let min=Infinity,res,count=0
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length-1; i++){
        let l=i+1,r=nums.length-1
        while(l<r){
            let curr = nums[i]+nums[l]+nums[r]
            if(curr==target) return curr
            let check = Math.abs(curr-target)
            if(check<min){
                min=check
                res=curr
            }
            if(curr<target){
                l++
            }else{r--}
            

        }
    }
    return res 
};