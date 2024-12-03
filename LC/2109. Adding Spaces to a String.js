function addSpaces (s, spaces) {
    let res="",j=0,i=0
    while(i<s.length &&j<spaces.length){
        if(i==spaces[j]){
            res+=" "
            j++
        }
        res+=s[i]
        i++
    }
    return res+s.substring(i)
};
// 2109. Adding Spaces to a String