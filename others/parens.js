const balancedParentheses=(str)=>{
    if(str.length%2!==0) return false
    let count=0
    for(let char of str){
        if(char=="("){
             count++
        }else count--

        if(count<0) return false
    }
    return count==0
}

const closedParenthesis=(str)=>{
    if(str.length%2!==0) return false
    let start=str[0]
    let end=str[str.length-1]
    if(start!=="("||end!=")") return false

    let check = str.slice(1,str.length-1)
    let count=0
    for(let char of check){
        if(char=="("){
             count++
        }else count--

        if(count<0) return false
    }
    return count==0
}

console.log( closedParenthesis("(()())") ) //true
console.log( balancedParentheses("(()())") ) //true
console.log( closedParenthesis("()()") ) //false
console.log( balancedParentheses("()()") ) //true
