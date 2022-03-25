// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//SLN

function digitize(n) {
    let reverse=0
    let digit
    let result=[]
    
    if(n==0){
      return [0]
    }else{
    while(n>=1){
      digit=n%10
      reverse+=reverse*10+digit
      n=Math.floor(n/10)
      result.push(digit)
    }
    return result
    }
  }