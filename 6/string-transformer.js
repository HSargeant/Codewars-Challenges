// DESCRIPTION:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


function stringTransformer(str) {
    str=str.split(" ")  
    let res=""
    for(i=str.length-1; i>-1; i--){
        res+= i>0? str[i]+ " " : str[i]       
    }
    let ans=""
    for(i=0; i<res.length; i++){
        ans+= res[i].toUpperCase()==res[i] ? res[i].toLowerCase(): res[i].toUpperCase()
    }
    return ans
}