// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });


function twoSum(num,target){
    let o={},res=[],curr
    num.forEach(x=>{
        if(o[x]) res.push([x,o[x]])
         curr = target-x
        o[curr]=x
        
    })
return res
}
// console.log(twoSum([1, 2, 2, 3, 4], 4))
console.log(twoSum([1, 2, 2,8,9,6,2,5, 4], 10))