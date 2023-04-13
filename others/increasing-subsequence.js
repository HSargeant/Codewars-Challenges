// Given an integer array, nums, return a list containing all subsets of nums that contain at least two elements and have an increasing sequence.

const increasingSubsequence=(nums)=>{
    let res=[]
    const dfs=(i=0,temp=[])=>{
        if(i==nums.length &&temp.length>1){
            res.push([...temp])
            return
        }
        if(i>=nums.length) return
        if(temp.length>0&&nums[i]<temp[temp.length-1]){                
                dfs(i+1,temp)
        }else{
            temp.push(nums[i])
            dfs(i+1,temp)
            temp.pop()
            dfs(i+1,temp)
        }
    }
    dfs()
    console.log(res)
    return res

}
increasingSubsequence([1, 2, 3])
increasingSubsequence([2, 4, 1,8,0,1.5])