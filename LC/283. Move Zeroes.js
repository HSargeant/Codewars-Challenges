var moveZeroes = function(nums) {
    // brute
    // nums.forEach((x)=>{
    //     if(x==0){
    //         nums.splice(nums.indexOf(x),1)
    //         nums.push(0)
    //     }
    // })
    // return nums


    // 
    let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};