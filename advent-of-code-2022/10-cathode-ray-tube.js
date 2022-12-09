const input='addx 2\naddx 3\naddx 1\nnoop\naddx 4\nnoop\nnoop\nnoop\naddx 5\nnoop\naddx 1\naddx 4\naddx -2\naddx 3\naddx 5\naddx -1\naddx 5\naddx 3\naddx -2\naddx 4\nnoop\nnoop\nnoop\naddx -27\naddx -5\naddx 2\naddx -7\naddx 3\naddx 7\naddx 5\naddx 2\naddx 5\nnoop\nnoop\naddx -2\nnoop\naddx 3\naddx 2\naddx 5\naddx 2\naddx 3\nnoop\naddx 2\naddx -29\naddx 30\naddx -26\naddx -10\nnoop\naddx 5\nnoop\naddx 18\naddx -13\nnoop\nnoop\naddx 5\nnoop\nnoop\naddx 5\nnoop\nnoop\nnoop\naddx 1\naddx 2\naddx 7\nnoop\nnoop\naddx 3\nnoop\naddx 2\naddx 3\nnoop\naddx -37\nnoop\naddx 16\naddx -12\naddx 29\naddx -16\naddx -10\naddx 5\naddx 2\naddx -11\naddx 11\naddx 3\naddx 5\naddx 2\naddx 2\naddx -1\naddx 2\naddx 5\naddx 2\nnoop\nnoop\nnoop\naddx -37\nnoop\naddx 17\naddx -10\naddx -2\nnoop\naddx 7\naddx 3\nnoop\naddx 2\naddx -10\naddx 22\naddx -9\naddx 5\naddx 2\naddx -5\naddx 6\naddx 2\naddx 5\naddx 2\naddx -28\naddx -7\nnoop\nnoop\naddx 1\naddx 4\naddx 17\naddx -12\nnoop\nnoop\nnoop\nnoop\naddx 5\naddx 6\nnoop\naddx -1\naddx -17\naddx 18\nnoop\naddx 5\nnoop\nnoop\nnoop\naddx 5\naddx 4\naddx -2\nnoop\nnoop\nnoop\nnoop\nnoop'.split("\n").map(x=>x.split(" ")).map(x=>{
    if(x.length==2){
        x[1] = Number(x[1])
    }
    return x
})

let cycleVals={

}

// console.log(input)
function signalStrngth(arr){
    let value=1
    let cycle=1
    let strength = 0
    const check = new Set([20,60,100,140,180,220])
    arr.forEach(elem=>{
        if(elem[1]){
            cycleVals[cycle]=value //add to map
            if (check.has(cycle)){
                strength+= (cycle * value)
            }
            cycle++
            cycleVals[cycle]=value //ad to map

            if (check.has(cycle)){
                strength+= (cycle * value)

            }
            cycle++
            value+=elem[1]
        }else{
            cycleVals[cycle]=value
            if (check.has(cycle)){
                strength+= (cycle * value)
            }
            cycle++
        }
        // console.log(cycle,"end --------",value,elem)
        
    })
   return strength
}

const testInput=`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`.split("\n").map(x=>x.split(" ")).map(x=>{
    if(x.length==2){
        x[1] = Number(x[1])
    }
    return x
})

console.log(signalStrngth(input)) //15680

// part 2

let screen = new Array(6).fill(new Array(40).fill("."))
// console.log(cycleVals)


let str = "";

for ( i = 1; i <= 240; i++) {
    const test = (i % 40 ? i % 40 : 40) - cycleVals[i] <=2 && (i % 40 ? i % 40 : 40) - cycleVals[i]>=0
    test ? str+="#" : str+="."
    if(i%40==0) str += "\n"
}

console.log(str) //ZFBFHGUP