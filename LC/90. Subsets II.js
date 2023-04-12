// 90. Subsets II

var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    let res=[]
    const dfs=(i=0,temp=[])=>{
        if(i==nums.length){
            res.push([...temp])
            return
        }
        temp.push(nums[i])
        dfs(i+1,temp)
        temp.pop()
        dfs(i+1, temp)

    }
    dfs()

    let answ =res.map(x=>JSON.stringify(x))
    return  [...new Set(answ)].map(x=>JSON.parse(x))
};