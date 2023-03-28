// You are given a string S (that consists of only alphanumerical characters) and asked to reformat it into a gift card code. S has N dashes that separates the string into N + 1 groups of characters. Every gift card code needs to contain all uppercase characters and have exactly K characters in each group, except the first group (but the first group must have at least one character). Given S, reformat it into a gift card code and return the result.

// Ex: Given the following values of S and K...

// S = “49DkeDb39LXI”, K = 3, return "49D-KED-B39-LXI".

const cardCode=(s,k)=>{
    if(s.length%k!==0) return "Not a valid input"
    s=s.toUpperCase()
    let res=s[0]
    for(let i=1; i<s.length; i++){
        if(i%k==0) res+="-"
        res+=s[i]
    }
    return res
}
// test
console.log(cardCode("49DkeDb39LXI",3))
console.log(cardCode("49DkeDb39L6X",2))
console.log(cardCode("49Dkelpohygftghy",4))
console.log(cardCode("49Dkelpohygftghy",5))