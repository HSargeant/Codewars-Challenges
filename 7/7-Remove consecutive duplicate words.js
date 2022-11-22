const removeConsecutiveDuplicates = s => {
  let res=""
  s = s.split(" ")
  res+=s[0]
   for(i=1; i<s.length; i++){
     if(s[i]=== s[i-1]) continue
     res+=" "
     res+=s[i] 
   }
  
  return res
}


// DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"