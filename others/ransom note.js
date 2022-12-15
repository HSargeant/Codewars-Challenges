// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

let magazine ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

const ransomNote = (magazine,s)=>{
    let magOb ={}
    magazine= magazine.split(" ")
    s=s.split(" ")
    for(i=0; i<magazine.length; i++){
        magOb[magazine[i]]=  magOb[magazine[i]] + 1|| 1
    }
    for(i=0; i<s.length; i++){
        if(!magOb[s[i]]) return false
        magOb[s[i]]-=1
    }
    return true
}

 console.log(ransomNote(magazine,"cupidatatjjj sunt"))
 console.log(ransomNote(magazine,"sit ad est love"))