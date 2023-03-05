var findDifference = function(nums1, nums2) {
    nums1=[...new Set(nums1)]
    nums2=[...new Set(nums2)]
    let res=[]
    let temp=[],o={}
    nums2.forEach(x=>o[x]=true)
    nums1.forEach(x=>{
        if(!o[x]) {
            temp.push(x)
           
        }
    })
    res.push(temp)
    temp=[]
    o={}
    nums1.forEach(x=>o[x]=true)
    nums2.forEach(x=>{
        if(!o[x]) {
            temp.push(x)
           
        }
    })
    res.push(temp)
    return res

    
};