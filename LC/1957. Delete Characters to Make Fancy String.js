var makeFancyString = function(s) {
    if(s.length<3) return s
    let count=1,str=s[0]
    for(let i=1; i<s.length; i++){
        if(s[i]==s[i-1]){
            count++
            if(count==3){
                count--
                continue
            }
        }else{
            count=1
        }
        str+=s[i]
    }
    return str
};
// 1957. Delete Characters to Make Fancy String