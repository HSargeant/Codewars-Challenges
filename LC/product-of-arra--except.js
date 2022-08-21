/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res= new Array(nums.length).fill(1);

    let left=1
    for(i=0; i<nums.length; i++){
        res[i]*=left
        left*=nums[i]
    }
    let right=1
    for(i=nums.length-1;i>-1;i--){
                res[i]*=right

        right*=nums[i]
    }
    return res
}


// / Better solution above
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var productExceptSelf = function(nums) {
//     let res=[]
//     for(i=0; i<nums.length; i++){
//        let left  = nums.slice(0,i)
//        let right = nums.slice(i+1,nums.length)
//        l = left.reduce((a,c)=>a*c,1)
//        r=right.reduce((a,c)=>a*c,1)
       
//        res.push(l*r)
       
//     }
//     return res
// }