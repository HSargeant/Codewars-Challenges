/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // if(!s.length) return [[]]
    let res=[]
    const back = (i=0, temp=[]) => {
        if (i === s.length) {
            res.push([...temp]);
            return;
        }
        
        for (let j = i + 1; j <= s.length; j++) {
            const curr = s.substring(i, j)
            if (isPal(curr)) {
                temp.push(curr)
                back(j, temp)
                temp.pop()
            }
        }
    };
    back()
    return res
};

function isPal(str){
    let l=0,r=str.length-1
    while(l<=r){
        if(str[l]!=str[r]) return false
        l++
        r--
    }
    return true

}
// 131. Palindrome Partitioning