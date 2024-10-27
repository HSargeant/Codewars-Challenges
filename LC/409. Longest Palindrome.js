function longestPalindrome (s) {
    let o={},count=0
    for(let char of s){
        o[char]=o[char]+1||1
    }
    let odd = 0
    for(let key in o){
        if(o[key]%2==0) count+=o[key]
        else{
            if(o[key]>1) count+=(o[key]-1)
            odd++
        }
    }
    if(odd>=1) count+=1
    return count
};
// 409. Longest Palindrome