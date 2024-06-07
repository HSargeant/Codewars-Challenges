var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a,b)=>a.length-b.length)
    sentenceList=sentence.split(" ")
    for(let x=0; x<sentenceList.length; x++){
        for(i of dictionary){
            if(sentenceList[x].startsWith(i)){
                sentenceList[x]=i
                break
            }
        }
    }
    return sentenceList.join(" ")
};
// 648. Replace Words