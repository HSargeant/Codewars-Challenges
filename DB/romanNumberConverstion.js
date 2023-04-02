// Given a string, s, that represents a Roman numeral, return its associated integer value.
// Note: You may assume that each string represents a valid Roman numeral and its value will not exceed one thousand.
// Ex: Given the following string s...

// s = "DCLII", return 652.
// Ex: Given the following string s...

// s = "VIII", return 8.

const romanToBaseTen=(s)=>{
    const obj={
        M:  1000,
        D:  500,
        C:  100,
        L:  50,
        X:  10,
        V:  5,
        I:  1,
      }

    let res=0
    for(i=s.length-1; i>-1; i--){
        if(obj[s[i]]){
            if(obj[s[i]] < obj[s[i+1]]){
                res-=obj[s[i]]

            } else{
                res+=obj[s[i]]
            }
            
            
        }else{
            return "Not a valid input"
        }
    }
    return res

}