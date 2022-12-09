// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxOccur(s){
    let o={}
    for(i=0; i<s.length; i++){
        o[s[i]]=o[s[i]]+1||1
    }
    let max=0
    let result
    for(i in o){
        if(o[i]>max) result=i
        max = Math.max(max,o[i])
    }
    return result
}
