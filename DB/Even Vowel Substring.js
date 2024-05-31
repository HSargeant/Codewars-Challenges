const evenVowelSubstring=(s)=>{
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let curr=s[i]
        let obj={
            "a":0,
            "e":0,
            "i":0,
            "o":0,
            "u":0
        }
        if(obj[curr[0]]!=undefined){
            obj[curr[0]]++
        }
        if(allEven(obj)){
            result = Math.max(result,curr.length)
        }
        r=i+1
        while(r<s.length){
            if(obj[s[r]]!=undefined){
                obj[s[r]]++
            }
            curr+=(s[r])
            if(allEven(obj)){
                result = Math.max(result,curr.length)
            }
            r++
        }
    }
    return result
}

function allEven(obj){
    for(key in obj){
        if(obj[key]%2!=0) return false
    }
    return true
}
// test cases
console.log(evenVowelSubstring("aeiouaeioua")) // 10
console.log(evenVowelSubstring("bbb")) // 3
