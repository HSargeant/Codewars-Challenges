/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let check = new Set(nums1)
    for( x of nums2){
        if(check.has(x)) return x
    }
    return -1
        
    };
    // 2540. Minimum Common Value