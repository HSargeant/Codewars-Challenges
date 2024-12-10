var maximumLength = function(s) {
    let o={}
    for(let i=0; i<s.length; i++){
        let sub=s[i]
        o[sub]=o[sub]+1||1
        for(let j=i+1; j<s.length; j++){
            if(s[j]!==s[i]) break
            sub+=s[j]
            o[sub]=o[sub]+1||1
        }
    }
    let res= Object.keys(o).filter(x=>o[x]>=3).sort((a,b)=>b.length-a.length)[0]
    return res!==undefined ? res.length : -1 
};
// 2981. Find Longest Special Substring That Occurs Thrice I