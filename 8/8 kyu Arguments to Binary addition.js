// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

function arr2bin(arr){
  if(arr.includes(NaN)){
    return 'NaN'
  }
  
  
  let sum = arr.reduce((acc,x)=>{
    if(isNaN(x)|| typeof x=='boolean'|| Array.isArray(x)
){
      return acc+0
    }else {return acc+x}
  },0)
  
      let sign=""
  if(sum<0){
     sign="-"
  }

  sum=Math.abs(sum)
  
  let binary=`${sum%2}`
  while(sum>1){
    sum=Math.floor(sum/2)
    binary += `${sum%2}`
  }
   binary = binary.split("").reverse().join("")
  return  sign+binary

  
}