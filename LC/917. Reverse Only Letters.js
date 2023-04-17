// 917. Reverse Only Letters

var reverseOnlyLetters = function(s) {
    
    let res = []
    for(i=0; i<s.length; i++){
        if(isLetter(s[i])) res.push(s[i])
    }
    let str=""
    for(i=0; i<s.length; i++){
        if(isLetter(s[i])){
            str+=res.pop()
        }else{
            str+=s[i]
        }
    }
    return str

    
};

function isLetter(char){
    let check =char.charCodeAt()
    return (check>=97&&check<=122) || (check>=65 && check <=90)
}