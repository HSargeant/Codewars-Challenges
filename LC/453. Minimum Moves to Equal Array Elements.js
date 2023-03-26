var minMoves = function(nums) {

    let res=0,min=Math.min(...nums)
    nums.forEach(x=>{
        res+=x-min
    })
    return res
};


// loop/recursion will not work with extreme cases i.e --- [ 1,2,100000]
// var minMoves = function(nums,count=0) {
//     if(nums.length==2) return nums.sort((a,b)=>b-a)[0]-nums[1]
//    if( nums.every(num=>num==nums[0])) return count
//    let index= nums.indexOf(Math.max(...nums))
//    nums=nums.map((a,i)=>{
//        if(i!=index) return a+1
//        return a
//    })
//    return minMoves(nums,count+1)
// };