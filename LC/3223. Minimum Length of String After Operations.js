/**
 * @param {string} s
 * @return {number}
 */
function minimumLength (s) {
    let map=new Map()
    for(let i=0; i<s.length; i++){
        let char= s[i]
        if(!map.get(char)){
            map.set(char,1)
        }else{
            map.set(char,map.get(char)+1)
        }
    }
    let res=0
    for([_,value] of map){
        res+=(value%2==0 ? 2 : 1)
    }
    return res
};
// 3223. Minimum Length of String After Operations