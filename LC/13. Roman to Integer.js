// 13. Roman to Integer
// roman number to an integer
const romanToInt = (s)=> {
    const obj = {
        M:  1000,
        D:  500,
        C:  100,
        L:  50,
        X:  10,
        V:  5,
        I:  1,
    };

    let res=0, i=0
    while(i <s.length){
        if(obj[s[i]]<obj[s[i+1]]){
            res = res - obj[s[i]] +obj[s[i+1]]
            i+=2
            continue
        }
        res+=obj[s[i]]
        i++
    }
    return res
}