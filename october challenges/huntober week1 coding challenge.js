const fix = (s) =>{
    let res=""

    const decode ={
        '0': 'O',
        'O': '0',
              '5': 'S',
              'S': '5',

        '1': 'I',
        'I': '1',
              '6': 'G',
              'G': '6',

        '2': 'Z',
        'Z': '2',
              '7': 'L',
              'L': '7',

        '3': 'E', 
        'E': '3', 
             '8': 'B',
             'B': '8',

        '4': 'h' ,
        'h': '4' ,
             '9': 'q',
             'q': '9',
    }
    for(let i=0; i<s.length; i++){
       
            res+= decode[s[i]] ||s[i]
        
    }
    return res

    
}
function replaceWKey(s){
    let key = "Space"
    let res=""
    for(i=0; i<s.length;i++){
        if(!key.includes(s[i])){ 
            res+=s[i]
        }else{
            res+=" "
        }
    }

    return res
}
function removeNth(s,num=3){
    let increase = num
    num-=1
s=s.split("")

let len=s.length
let res=""
// using splice
for(i=num; i<len; i+=num){
    s.splice(i,1)
}

// create new string
// for(i=0; i<len; i++){
//     console.log(num)
//     if(i==0){
//         res+=s[i]
//     }else if(i!=num) {
//         res+=s[i]
//     }else{
//         num+=increase

//     }
// }
// return res
return s.join("")
}
const opp=(s)=>{
    const lettOpp={
        "A": "z",
        "a": "Z",
        "B": "y",
        "b": "Y",
        "c": "X",
        "C": "x",
        "d": "W",
        "D": "w",
        "e": "V",
        "E": "v",
        "f": "U",
        "F": "u",
        "g": "T",
        "G": "t",
        "h": "S",
        "H": "s",
        "i": "R",
        "I": "r",
        "j": "Q",
        "J": "q",
        "k": "P",
        "K": "p",
        "l": "O",
        "L": "o",
        "m": "N",
        "M": "n",
        "n": "M",
        "N": "m",
        "o": "L",
        "O": "l",
        "p": "K",
        "P": "k",
        "q": "J",
        "Q": "j",
        "r": "I",
        "R": "i",
        "s": "H",
        "S": "h",
        "t": "G",
        "T": "g",
        "u": "F",
        "U": "f",
        "v": "E",
        "V": "e",
        "w": "D",
        "W": "d",
        "x": "C",
        "X": "c",
        "y": "B",
        "Y": "b",
        "z": "A",
        "Z": "a",
    }
    s=s.split("")
    for(i=0;i<s.length; i++){
        
            s[i]=lettOpp[s[i]] ||s[i]

        
    }

    return s.join("")
}

function rev(s){
    return s.split("").reverse().join("")
}

let msg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

opp(removeNth(rev(replaceWKey(fix(msg)))))