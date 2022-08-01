function solution(str) {
  let res=""
  for(i=0; i<str.length; i++){
    if(str[i].charCodeAt()>64 && str[i].charCodeAt()<91 ){
      res+=" "+str[i]
    }else res+=str[i]
  }
    return res
}
// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""