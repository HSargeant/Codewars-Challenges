/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count1 = null
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                if(!count1){
                    count1 = test(nums[i].toString(2))
                } 
                let count2 = test(nums[j].toString(2))
                if (count1 !== count2) return false;
            }
        }
    }
    return true;
};


function test(str){
    let count=0
    for(let char of str){
        if(char=="1") count++
    }

    return count
}
// 3011. Find if Array Can Be Sorted