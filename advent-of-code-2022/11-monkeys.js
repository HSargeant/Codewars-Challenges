// in part 1 the input method has a math.floor(operations )/3
// in part two this changes to the following input is the updated calculations using the prime lcm

const input=[
    {
        "id":0,
        "items": [50, 70, 54, 83, 52, 78],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]*3) % 9699690
        },
        test(){
            if( this.items[0]%11==0){
                input[2].items.push(this.items.shift())
            }else {
                input[7].items.push(this.items.shift())
            }
        }
    },
    {
        "id":1,
        "items": [71, 52, 58, 60, 71],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]**2) % 9699690
        },
        test(){
            if( this.items[0]%7==0){
                input[0].items.push(this.items.shift())
            }else {
                
                input[2].items.push(this.items.shift())
            }
        }
    },
    {
        "id":2,
        "items": [66, 56, 56, 94, 60, 86, 73],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]+1) % 9699690
        },
        test(){
            if( this.items[0]%3==0){
                input[7].items.push(this.items.shift())
            }else {
                input[5].items.push(this.items.shift())
            }
        }
    },
    {
        "id":3,
        "items": [83,99],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]+8) % 9699690

        },
        test(){
            if( this.items[0]%5==0){
                input[6].items.push(this.items.shift())
            }else {
                input[4].items.push(this.items.shift())
            }
        }
    },
    {
        "id":4,
        "items": [98,98,79],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]+3) % 9699690
        },
        test(){
            if( this.items[0]%17==0){
                input[1].items.push(this.items.shift())
            }else {input[0].items.push(this.items.shift())
            }
        }
    },
    {
        "id":5,
        "items": [76],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]+4)% 9699690
        },
        test(){
            if( this.items[0]%13==0){
                input[6].items.push(this.items.shift())
            }else {
                input[3].items.push(this.items.shift())
            }
        }
    },
    {
        "id":6,
        "items": [52, 51, 84, 54],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]*17)% 9699690
        },
        test(){
            if( this.items[0]%19==0){
                input[4].items.push(this.items.shift())
            }else {
                input[1].items.push(this.items.shift())
            }
        }
    },
    {
        "id":7,
        "items": [82, 86, 91, 79, 94, 92, 59, 94],
        "count": 0,
        operation(){
             this.items[0]=(this.items[0]+7) % 9699690
        },
        test(){
            if( this.items[0]%2==0){
                input[5].items.push(this.items.shift())
            }else {
                input[3].items.push(this.items.shift())
            }
        }
    }

] 

// const inputPrimes=[2,3,5,7,11,13,17,19].reduce((a,c)=>a*c,1)
// console.log(inputPrimes) // 9699690



for(i=0; i<80000; i++){
    let x = i%8
    if(input[x].items.length) {
        input[x].count+=input[x].items.length
        while(input[x].items.length){
            input[x].operation()
            input[x].test()
        }
        
    }
    
} 
console.log(input)
// Part 1: Top 2 with the most inspections after 20 rounds  321 * 319 -- 102399
// part 2: Top 2 with the most inspections after 10000 rounds 145361 * 162641-- 23641658401



// const testInput=[
//     {
//         "id":0,
//         "items": [79, 98],
//         "count": 0,
//         operation(){
//             return this.items[0]=(this.items[0] * BigInt(19)) % BigInt(96577)
//         },
//         test(){
//             if( this.items[0]%BigInt(23)==BigInt(0)){
//                 testInput[2].items.push(this.items.shift())
//             }else {
//                 testInput[3].items.push(this.items.shift())
//             }
//         }
//     },
//     {
//         "id":1,
//         "items": [54, 65, 75, 74],
//         "count": 0,
//         operation(){
//             return this.items[0]=(this.items[0]+BigInt(6)) % BigInt(96577)
//         },
//         test(){
//             if( this.items[0]%BigInt(19)==BigInt(0)){
//                 testInput[2].items.push(this.items.shift())
//             }else {
//                 testInput[0].items.push(this.items.shift())
//             }
//         }
//     },
//     {
//         "id":2,
//         "items": [79, 60, 97],
//         "count": 0,
//         operation(){
//             return this.items[0]=(this.items[0]**BigInt(2)) % BigInt(96577)
//         },
//         test(){
//             if( this.items[0]%BigInt(13)==BigInt(0)){
//                 testInput[1].items.push(this.items.shift())
//             }else {
//                 testInput[3].items.push(this.items.shift())
//             }
//         }
//     },
//     {
//         "id":3,
//         "items": [74],
//         "count": 0,
//         operation(){
//             return this.items[0]=(this.items[0]+BigInt(3))% BigInt(96577)
//         },
//         test(){
//             if( this.items[0]%BigInt(17)==BigInt(0)){
//                 testInput[0].items.push(this.items.shift())
//             }else {
//                 testInput[1].items.push(this.items.shift())
//             }
//         }
//     },
// ]

// for(i=0; i<testInput.length; i++){
//     for(j=0; j<testInput[i].items.length; j++){
//         testInput[i].items[j] = BigInt(testInput[i].items[j])
// }}

// test
// for(i=0; i<40000; i++){
//     let x = i%4
//     if(testInput[x].items.length){
//         testInput[x].count+=testInput[x].items.length
//         while(testInput[x].items.length){
//             testInput[x].operation()
//             testInput[x].test()
//         }
//     }
// }
// console.log(testInput)