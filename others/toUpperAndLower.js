// Implement to lower case and to uppercase funcions 
// do not use build in methods
const toUp=(s)=>{
    return s.split("").map(x=>{
        if(x.charCodeAt()>=97 && x.charCodeAt()<=122){
            return String.fromCharCode(x.charCodeAt()-32)
        }
        return x
    }).join("")
}
const toLow=(s)=>{
    return s.split("").map(x=>{
        if(x.charCodeAt()>=65 && x.charCodeAt()<=90){
            return String.fromCharCode(x.charCodeAt()+32)
        }
        return x
    }).join("")
}
