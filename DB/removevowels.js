function removeVowels(s){
    let vowels ="aeiouAEIOU",vow={}
    for(x of vowels){
        vow[x]=true
    }
    let res=""
    for(x of s){
        if(!vow[x]) res+=x
    }
    return res
}

console.log(removeVowels("yippie")==="ypp") //true
console.log(removeVowels("aeio")==="e") //false
console.log(removeVowels("BOStonCEltics")==="BStnCltcs") //true