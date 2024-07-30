/**
 * @param {string} s
 * @return {number}
 */
function minimumDeletions (s) {
    let b=0,del=0
    for(let char of s){
        if(char=="a"){
            del++
            del = Math.min(del,b)
        }else{
            b++
        }
    }
    return del
};
// 1653. Minimum Deletions to Make String Balanced