function rot13(message){
    let res=""
    for(i=0; i<message.length; i++){
      if(message.charCodeAt(i)>64 && message.charCodeAt(i)<91){
         let change = (message[i].charCodeAt(0)-52)%26+65
        console.log(change)
        res+=String.fromCharCode(change)
      }else if(message.charCodeAt(i)>96 && message.charCodeAt(i)<123){
        let change = (message[i].charCodeAt(0)-84)%26+97
            console.log(change)
        res+=String.fromCharCode(change)
      }else res+=message[i]
    }
    return res
  }

//   ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".