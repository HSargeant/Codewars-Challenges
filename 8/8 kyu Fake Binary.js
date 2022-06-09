// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


//solution

function fakeBin(x){
  
  let result = x.split("")
  
  result = result.map(function(x){
    if(x>=5){
      x=1
    }else x=0
    return x
  })
  
  return result.join('')
  

}