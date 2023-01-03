// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.
const reorganizeString =(s)=> {
    const map = new Map()
    let max=0;
    let maxChar=''
    for(let c of s){
        map.set(c,map.get(c)+1||1)
		
        if(map.get(c)>max){
            max=map.get(c)
            maxChar=c
        }
    }
    if(max>Math.ceil(s.length/2))return ''
    
    let ind=0
    const res=[]
        while(max--){
            res[ind]=maxChar
            ind+=2
            map.set(maxChar,max)
        }
		
    for(let [key,val] of map){
        while(val--){
            if(ind>=s.length)ind=1
            res[ind]=key
            ind+=2
        }
    }
    return res.join('')
}
