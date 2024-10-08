function minSwaps(s) {
    let brackets=0,count=0
    for(let char of s){
        if(char=="["){
            brackets++
        }else brackets--

        if(brackets<0){
            brackets+=2
            count++
        }
    }
    return count
};
// 1963. Minimum Number of Swaps to Make the String Balanced