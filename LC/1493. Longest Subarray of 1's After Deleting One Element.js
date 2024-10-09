var longestSubarray = function(nums) {
    let leftPtr = 0;
    let result = 0;
    let zeroCount = 0;
    for(let rightPtr=0;rightPtr<nums.length;rightPtr++){
        
        if(nums[rightPtr]===0){
            zeroCount++
        }

        if(zeroCount>1){
            if(nums[leftPtr]===0){
                zeroCount--;
            }
            leftPtr++;
        }
        if(zeroCount<=1){
            result = Math.max(result,rightPtr-leftPtr);
        }
    }
    return result;
};
// 1493. Longest Subarray of 1's After Deleting One Element