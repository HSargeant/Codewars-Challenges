// 29. Divide Two Integers
// w/o using divide or multiply

var divide = function(dividend, divisor) {
    if(dividend==-2147483648 && divisor==-1) return 2147483647
    if( Math.abs(dividend)==Math.abs(divisor)) {
        if((dividend >0 && divisor>0) || (dividend <0 && divisor<0) ){
            return 1
        }else return -1
    }

    if(divisor==1||divisor==-1) {
        if((dividend >0 && divisor>0) || (dividend <0 && divisor<0) ){
            return Math.abs(dividend)
        }else return -Math.abs(dividend)
    }    
    let abDiv=Math.abs(dividend),abds=Math.abs(divisor)
    if((dividend >0 && divisor>0) || (dividend <0 && divisor<0) ){
       return parseInt(Math.exp(Math.log(abDiv)-Math.log(abds)))
    }else return -parseInt(Math.exp(Math.log(abDiv)-Math.log(abds)))
};