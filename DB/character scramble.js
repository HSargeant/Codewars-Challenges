// Good morning,

// Need help with yesterday's problem? Start getting solutions.

// Today's Byte

// This question is asked by Amazon. Given two strings, passage and text return whether or not the characters in text can be used to form the given passage.
// Note: Each character in text may only be used once and passage and text will only contain lowercase alphabetical characters.

// Ex: Given the following passage and text…

// passage = "bat", text = "cat", return false.
// Ex: Given the following passage and text…

// passage = "dog" text = "didnotgo", return true.

const charScramble =(passage,text)=>{
    let key={}
    for(e of text){
        key[e]=key[e]+1||1
    }

    for(e of passage){
        if(!key[e]) return false
        key[e]-=1

    }
    return true

}

charScramble("bat","cat")
charScramble("dog","didnotgo")