var combinationSum2 = function(nums, target) {
    let res=[]
    nums.sort((a,b)=>a-b)
    const dfs=(i=0,sum=0,temp=[])=>{
        if(sum==target){
            res.push([...temp])
            return
        }
        if(sum>target||i==nums.length) return
        temp.push(nums[i])
        dfs(i+1,sum+nums[i],temp)
        temp.pop()
        while(nums[i] === nums[i + 1]){
            i++
        }
        dfs(i+1,sum,temp)

    }
    dfs()
    return res
    
};