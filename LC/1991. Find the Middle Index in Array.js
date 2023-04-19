var findMiddleIndex = function(nums) {
    let sum=0,ltotals={},rtotals={}
for(i=nums.length-1; i>-1; i--){
    rtotals[i]=sum
    sum+=nums[i]
}
sum=0
for(i=0; i<nums.length; i++){
    ltotals[i]=sum
    sum+=nums[i]
    if(ltotals[i]==rtotals[i]) return i 

}
return -1
};
// 1991. Find the Middle Index in Array
