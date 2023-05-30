var subtractProductAndSum = function(n) {
    let arr=(n+"").split("")
    return arr.reduce((a,c)=>a* +c,1)-arr.reduce((a,c)=>a+ +c,0)
};

// 1281. Subtract the Product and Sum of Digits of an Integer
