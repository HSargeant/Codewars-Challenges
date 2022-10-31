// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

 

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]
 var letterCasePermutation = function(s) {
    let res=[]
    
    const back=(str, i, arr = [],temp="")=>{
        if(i===str.length || temp.length===str.length){
            arr.push(temp);
            return
        }
        
        if(str[i].charCodeAt(0)>47 && str[i].charCodeAt(0)<58){
            back(str, i+1, arr,temp + str[i]);

        }else{
           back(str, i+1, arr,temp + str[i].toUpperCase());
            back(str, i+1, arr,temp + str[i].toLowerCase());
        }
    }
    back(s,0,res)
    return res
    
    
};