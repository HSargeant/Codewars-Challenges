var reverseVowels = function(s) {
    let vow={'a':true,'e':true,'i':true,'o':true,'u':true}
    let ch=[]
    for(i=0; i<s.length; i++){
        if(vow[s[i].toLowerCase()]) {
            ch.push(s[i])}
    }
    let res=""
    for(i=0; i<s.length; i++){
        if(vow[s[i].toLowerCase()]) {
            res+=ch.pop()
        }else res+=s[i]
    }
return res
};


// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"