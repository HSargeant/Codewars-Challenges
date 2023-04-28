var reverse = function(x) {    
    if(x>2147483647) return 0
    if(x<-2147483648) return 0
    
    let ones
    let res=0
    let y = Math.abs(x)

    while(y>0){
        ones = y%10
        y = (y-ones)/10
        res=res*10+ones 
    }
    if(x<0) res*=-1
    return res<=2147483647 && res >=-2147483648? res: 0
};

// 7. Reverse Integer

// reverse array method
    
//     let y = Math.abs(x)
//     y+=""
//     y = y.split("").reverse().join("")
//     console.log(y)
//         if(x<0) y= +y*-1
    
// return +y<=2147483647 && +y >=-2147483648? +y: 0