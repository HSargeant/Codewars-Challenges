/**
 * @param {string} s
 * @return {number}
 */
function minLength (s) {
    let a=[]
    for(let char of s){
        let check=a[a.length-1]+char
        if(check=="AB"||check=="CD"){
            a.pop()
        }else a.push(char)
    }
    return a.length
};
// 2696. Minimum String Length After Removing Substrings