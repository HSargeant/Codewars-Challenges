//  383. Ransom Note
const canConstruct = (ransomNote, magazine) =>{
    let magObj={}
    for(letter of magazine){
        magObj[letter] = magObj[letter]+1 ||1
    }
    for(letter of ransomNote){
        if(!magObj[letter]) return false
        magObj[letter]--
    }
    return true
    
};