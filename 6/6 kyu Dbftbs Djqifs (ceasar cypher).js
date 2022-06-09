// Dbftbs Djqifs

// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task
// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

// Examples
// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

function encryptor (key, message) {
    const upper = Array.from(Array(26)).map((e, i) => i + 65); //make an array of numbers both cap and lowercase
    const lower = Array.from(Array(26)).map((e, i) => i + 97);
    const cap= upper.map((x) => String.fromCharCode(x));
    const low = lower.map((x) => String.fromCharCode(x));
  //   (low.indexOf("")+key)%26 // decode
    let Ucode
    let Lcode
    
    if(!message) {
      return ""
    }
    
    message=message.split("") //turn into an array 
    
    let str=""
                  
   message.forEach((letter)=>{
     if(letter==" "){
       return str += " "
     }
     if(!cap.includes(letter) && !low.includes(letter)){
       return str += letter
     }
       
     if(cap.includes(letter)){
       if(cap.indexOf(letter)+key<0){ //handle negative index case
         let k = cap.indexOf(letter)+key
         while(k<0){
           k+=26
         }
         
         Ucode = k %26
         return str+=cap[Ucode]
       } else{
         Ucode = (cap.indexOf(letter)+key)%26
         return str+=cap[Ucode]
       }
     }
     
     if(low.includes(letter)){
       if(low.indexOf(letter)+key<0){
         let k=low.indexOf(letter)+key
         while(k<0){
           k+=26
         }
        
         Lcode = k%26
         
         return str+=low[Lcode]
       } else{
         Lcode = (low.indexOf(letter)+key)%26
          return str += low[Lcode]
       }
     }
     
   })
    
    return str
    }
                            