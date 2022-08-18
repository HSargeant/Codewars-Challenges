/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //old reliable for loop
    // let result=[]
    // for(i=0; i<nums.length; i++){
    //     let x = nums[i]
    //     for(j=0; j<nums.length; j++){
    //         if((x+nums[j])==target && i!==j){
    //             result.push(i,j) 
    //             return result
    //         } 
    //     }  
    // }  
//  2nd solution: wanted to complete it without nested for loops
     for(i=0; i<nums.length; i++){
        
        let y = nums.slice(i+1)
        if(y.includes(target - nums[i]))
            return [i,(y.indexOf(target-nums[i]))+i+1]
    }
    
};