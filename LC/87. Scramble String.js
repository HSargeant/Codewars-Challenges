var isScramble = function(s1, s2,o={}) {
    if (s1 === s2) return true;
    
    if(o[s1+s2]) return o[s1+s2]
    
      let obj={},obj1={}
    for(i=0;i<s1.length; i++){
      obj[s1[i]]=obj[s1[i]]+1||1
      obj1[s2[i]]=obj1[s2[i]]+1||1
    }
    for(i in obj){
      if(obj[i]!==obj1[i]) {
        o[s1+s2]=false
        return false
        }
    }
  
    for (let i = 1; i < s1.length; i++) {
      if (isScramble(s1.substring(0, i), s2.substring(0, i),o) && isScramble(s1.substring(i), s2.substring(i),o)){
        o[s1+s2]=true
        return true
        }
      if (
          isScramble(s1.substring(0, i), s2.substring(s1.length - i),o) &&
          isScramble(s1.substring(i), s2.substring(0, s1.length - i),o)
        ){
          o[s1+s2]=true;
          return true
        }
      }
      o[s1+s2]=false
      return false
  };