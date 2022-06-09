// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function charCount(str, x) {
  return (str.split(x)).length - 1;
}

function count (str) { 
    let result = {}
  for(i=0; i<str.length; i++){
      let x = str[i]
      charCount(str,str[i])
        result[x]=charCount(str,str[i])
  }

 return result
  
}