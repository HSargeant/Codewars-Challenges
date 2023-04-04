/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //brute force
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
    let result=[],o={}
    var twoSum = function(arr, target) {
        let result=[],o={}
        for(let i=0;i<arr.length;i++){
            if(o[arr[i]]) return [o[arr[i]],i]
                o[target-arr[i]]=i
        }
        for(i=0;i<arr.length;i++){
            if(o[arr[i]]) return [o[arr[i]],i]
        }
    };
    
};