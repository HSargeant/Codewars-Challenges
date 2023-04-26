/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  if(!s) return 0
  let arr=[1],j=0,curr=s[0]
  for(let i=1; i<s.length; i++){
    if(s[i]==curr){
      arr[j]++
    }else{
      arr.push(1)
      j++
      curr=s[i]
    }


  }
  let res=0
  for(let i = 0; i<arr.length-1; i++){
    let a=arr[i],b=arr[i+1]
    res+=Math.min(a,b)


  }
    return res
};

// 696. Count Binary Substrings
