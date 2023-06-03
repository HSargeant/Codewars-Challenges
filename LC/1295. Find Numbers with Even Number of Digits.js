var findNumbers = function(nums) {

    let res=0
    nums.forEach(x=>{
        
     if((x+"").length%2==0) res++
    })
    return res
    
};

// 1295. Find Numbers with Even Number of Digits
