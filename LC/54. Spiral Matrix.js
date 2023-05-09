// 54. Spiral Matrix

var spiralOrder = function(arr) {
      let res=[]
  while (arr.length) {
    res.push(...arr.shift())
    for(const a of arr){
      if(a.length) res.push(a.pop())
        
        a.reverse()   
    }
      arr.reverse()

  }
  return res;
    
};