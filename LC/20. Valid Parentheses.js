/**
 * @param {string} s
 * @return {boolean}
 */ 
var isValid = function(s) {
    let last=[]
    for(let i of s){
        if(i=="{"||i=="("||i=="["){
            last.push(i)
        }else {
            if(!last.length) return false
            let check=last[last.length-1]
            if((i=="]"&& check =="[") ||(i=="}"&& check =="{") || (i==")"&& check =="(") ){
                last.pop()
            }else break
        }   
    }
return !last.length
};