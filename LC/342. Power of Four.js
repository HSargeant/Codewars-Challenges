var isPowerOfFour = function(n) {
    if(n<=0) return false
    if(n==1) return true
    if(n%4!==0) return false
    let res = Math.log(n)/Math.log(4)
    return Number.isInteger(res)
};