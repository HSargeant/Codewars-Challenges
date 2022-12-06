

// https://adventofcode.com/2022/day/5

// In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

// Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

// [D]        
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
// In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

//         [Z]
//         [N]
//     [C] [D]
//     [M] [P]
//  1   2   3
// Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

//         [Z]
//         [N]
// [M]     [D]
// [C]     [P]
//  1   2   3
// Finally, one crate is moved from stack 1 to stack 2:

//         [Z]
//         [N]
//         [D]
// [C] [M] [P]
//  1   2   3
// The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

// -----------------------------input-------------//
// [B]                     [N]     [H]
// [V]         [P] [T]     [V]     [P]
// [W]     [C] [T] [S]     [H]     [N]
// [T]     [J] [Z] [M] [N] [F]     [L]
// [Q]     [W] [N] [J] [T] [Q] [R] [B]
// [N] [B] [Q] [R] [V] [F] [D] [F] [M]
// [H] [W] [S] [J] [P] [W] [L] [P] [S]
// [D] [D] [T] [F] [G] [B] [B] [H] [Z]
//  1   2   3   4   5   6   7   8   9 


//add stack input to an object
 let stacks = { 
    "1": ["D","h",'N','Q','T','W','V','B'],
    "2": ['D','W','B'],
    '3': ['T','S','Q','W','J','C'],
    '4':['F','J','R','N','Z','T','P'],
    '5':['G','P','V','J','M','S','T'],
    '6':['B','W','F','T','N'],
    '7':['B','L','D','Q','F','H','V','N'],
    '8':['H','P','F','R'],
    '9':['Z','S','M','B','L','N','P','H']
 }
let dir=`move 2 from 8 to 1
move 4 from 9 to 8
move 2 from 1 to 6
move 7 from 4 to 2
move 10 from 2 to 7
move 2 from 1 to 6
move 1 from 9 to 4
move 1 from 4 to 1
move 8 from 6 to 4
move 7 from 1 to 8
move 6 from 8 to 1
move 1 from 4 to 1
move 8 from 7 to 3
move 2 from 5 to 2
move 5 from 3 to 2
move 5 from 2 to 1
move 1 from 6 to 5
move 2 from 2 to 6
move 5 from 8 to 7
move 12 from 7 to 4
move 3 from 5 to 4
move 2 from 6 to 4
move 9 from 1 to 7
move 4 from 3 to 7
move 4 from 3 to 4
move 3 from 1 to 7
move 1 from 9 to 1
move 1 from 1 to 4
move 2 from 5 to 2
move 1 from 3 to 7
move 15 from 7 to 2
move 4 from 7 to 9
move 6 from 9 to 2
move 2 from 8 to 3
move 3 from 2 to 8
move 1 from 7 to 6
move 8 from 2 to 5
move 2 from 8 to 4
move 2 from 3 to 8
move 9 from 5 to 9
move 7 from 4 to 2
move 1 from 8 to 6
move 6 from 9 to 2
move 3 from 9 to 7
move 2 from 8 to 4
move 7 from 2 to 6
move 7 from 4 to 1
move 3 from 1 to 8
move 2 from 1 to 8
move 4 from 8 to 2
move 2 from 1 to 5
move 19 from 2 to 7
move 8 from 4 to 7
move 18 from 7 to 1
move 11 from 7 to 4
move 15 from 1 to 7
move 9 from 4 to 3
move 2 from 3 to 1
move 9 from 4 to 5
move 1 from 8 to 1
move 8 from 6 to 5
move 3 from 2 to 5
move 1 from 6 to 7
move 4 from 4 to 3
move 8 from 5 to 1
move 13 from 1 to 6
move 12 from 7 to 1
move 12 from 6 to 3
move 1 from 7 to 6
move 1 from 7 to 5
move 1 from 1 to 9
move 1 from 3 to 1
move 3 from 1 to 9
move 12 from 3 to 8
move 1 from 9 to 3
move 1 from 6 to 8
move 5 from 5 to 1
move 1 from 6 to 2
move 10 from 8 to 9
move 13 from 9 to 2
move 10 from 3 to 4
move 1 from 8 to 9
move 2 from 8 to 7
move 1 from 3 to 1
move 1 from 5 to 6
move 13 from 2 to 5
move 1 from 9 to 2
move 7 from 1 to 4
move 2 from 2 to 5
move 2 from 7 to 8
move 1 from 6 to 8
move 10 from 5 to 8
move 3 from 7 to 2
move 4 from 1 to 4
move 12 from 4 to 2
move 10 from 5 to 3
move 6 from 2 to 1
move 2 from 4 to 8
move 3 from 4 to 8
move 6 from 1 to 7
move 1 from 7 to 5
move 12 from 8 to 2
move 3 from 4 to 9
move 1 from 4 to 3
move 2 from 9 to 6
move 2 from 6 to 8
move 1 from 1 to 3
move 8 from 2 to 6
move 4 from 1 to 8
move 12 from 2 to 3
move 4 from 6 to 8
move 10 from 8 to 3
move 14 from 3 to 8
move 5 from 5 to 8
move 1 from 7 to 8
move 5 from 3 to 5
move 4 from 7 to 2
move 2 from 6 to 1
move 4 from 3 to 7
move 4 from 5 to 1
move 21 from 8 to 6
move 7 from 3 to 2
move 1 from 5 to 1
move 4 from 8 to 9
move 16 from 6 to 1
move 1 from 8 to 4
move 5 from 9 to 2
move 7 from 1 to 7
move 10 from 1 to 3
move 1 from 4 to 2
move 6 from 6 to 5
move 6 from 1 to 4
move 4 from 7 to 9
move 1 from 6 to 5
move 5 from 7 to 6
move 3 from 6 to 8
move 1 from 7 to 6
move 6 from 4 to 8
move 4 from 8 to 3
move 4 from 8 to 4
move 17 from 2 to 1
move 8 from 3 to 4
move 5 from 4 to 3
move 10 from 1 to 5
move 11 from 3 to 5
move 1 from 7 to 9
move 3 from 6 to 4
move 9 from 4 to 9
move 7 from 1 to 3
move 1 from 4 to 8
move 7 from 5 to 4
move 18 from 5 to 1
move 13 from 1 to 6
move 1 from 1 to 5
move 1 from 1 to 6
move 2 from 3 to 1
move 1 from 3 to 1
move 5 from 1 to 6
move 4 from 5 to 8
move 2 from 4 to 9
move 1 from 1 to 9
move 6 from 3 to 8
move 1 from 4 to 5
move 10 from 8 to 7
move 16 from 6 to 7
move 1 from 5 to 4
move 1 from 7 to 2
move 2 from 2 to 6
move 2 from 8 to 5
move 5 from 4 to 9
move 2 from 5 to 9
move 7 from 9 to 8
move 2 from 6 to 9
move 4 from 8 to 9
move 7 from 9 to 7
move 13 from 9 to 5
move 10 from 5 to 1
move 3 from 8 to 4
move 5 from 1 to 3
move 3 from 5 to 6
move 3 from 9 to 7
move 1 from 1 to 7
move 2 from 1 to 3
move 1 from 6 to 1
move 4 from 3 to 8
move 1 from 8 to 9
move 1 from 8 to 7
move 1 from 8 to 4
move 1 from 9 to 7
move 1 from 8 to 5
move 2 from 4 to 3
move 4 from 6 to 3
move 1 from 5 to 1
move 1 from 6 to 4
move 2 from 4 to 5
move 1 from 4 to 6
move 1 from 6 to 4
move 30 from 7 to 3
move 1 from 5 to 1
move 6 from 7 to 3
move 2 from 1 to 7
move 2 from 1 to 2
move 2 from 2 to 1
move 1 from 4 to 9
move 3 from 1 to 2
move 1 from 9 to 5
move 2 from 7 to 1
move 1 from 7 to 3
move 1 from 1 to 9
move 1 from 5 to 8
move 1 from 1 to 2
move 1 from 7 to 3
move 1 from 9 to 4
move 18 from 3 to 4
move 1 from 5 to 9
move 1 from 9 to 6
move 1 from 2 to 7
move 1 from 8 to 7
move 1 from 6 to 3
move 1 from 7 to 2
move 14 from 4 to 6
move 1 from 7 to 6
move 15 from 6 to 4
move 20 from 3 to 1
move 5 from 4 to 9
move 5 from 4 to 2
move 15 from 1 to 7
move 11 from 7 to 9
move 2 from 7 to 6
move 1 from 6 to 4
move 1 from 6 to 3
move 2 from 7 to 8
move 10 from 4 to 3
move 15 from 9 to 3
move 1 from 9 to 7
move 29 from 3 to 6
move 3 from 1 to 6
move 1 from 8 to 4
move 2 from 4 to 3
move 1 from 8 to 9
move 4 from 6 to 1
move 20 from 6 to 2
move 5 from 1 to 9
move 3 from 6 to 2
move 4 from 6 to 3
move 4 from 3 to 1
move 4 from 1 to 4
move 3 from 4 to 8
move 6 from 3 to 4
move 6 from 2 to 6
move 1 from 7 to 1
move 3 from 6 to 8
move 6 from 9 to 3
move 1 from 1 to 4
move 1 from 1 to 7
move 3 from 4 to 5
move 2 from 6 to 4
move 2 from 5 to 6
move 4 from 8 to 7
move 1 from 5 to 6
move 1 from 8 to 4
move 1 from 8 to 4
move 2 from 4 to 9
move 4 from 7 to 8
move 4 from 4 to 3
move 1 from 7 to 9
move 4 from 8 to 6
move 1 from 3 to 4
move 1 from 3 to 5
move 2 from 4 to 7
move 4 from 6 to 3
move 2 from 9 to 1
move 2 from 7 to 4
move 1 from 5 to 1
move 1 from 3 to 4
move 1 from 9 to 3
move 4 from 4 to 5
move 2 from 5 to 3
move 1 from 5 to 7
move 1 from 5 to 8
move 2 from 6 to 4
move 3 from 1 to 3
move 21 from 3 to 5
move 3 from 6 to 1
move 1 from 7 to 1
move 4 from 2 to 6
move 1 from 8 to 2
move 10 from 2 to 4
move 4 from 1 to 2
move 1 from 6 to 5
move 2 from 6 to 9
move 7 from 4 to 9
move 1 from 6 to 5
move 3 from 9 to 4
move 6 from 2 to 8
move 3 from 9 to 1
move 8 from 4 to 3
move 1 from 9 to 4
move 21 from 5 to 7
move 1 from 1 to 3
move 2 from 9 to 6
move 14 from 7 to 1
move 2 from 4 to 1
move 2 from 8 to 7
move 1 from 8 to 2
move 11 from 2 to 9
move 8 from 9 to 6
move 4 from 7 to 1
move 1 from 7 to 4
move 2 from 3 to 5
move 1 from 1 to 6
move 1 from 8 to 2
move 3 from 7 to 5
move 6 from 1 to 7
move 1 from 8 to 7
move 1 from 4 to 5
move 4 from 6 to 5
move 6 from 7 to 6
move 3 from 9 to 1
move 1 from 7 to 3
move 11 from 5 to 1
move 1 from 5 to 2
move 9 from 6 to 4
move 1 from 7 to 3
move 2 from 6 to 1
move 1 from 2 to 1
move 1 from 2 to 6
move 14 from 1 to 5
move 1 from 8 to 4
move 10 from 1 to 5
move 3 from 5 to 1
move 8 from 3 to 8
move 16 from 5 to 7
move 2 from 1 to 9
move 3 from 8 to 1
move 1 from 2 to 4
move 6 from 7 to 4
move 3 from 5 to 8
move 2 from 3 to 6
move 7 from 1 to 7
move 14 from 4 to 3
move 9 from 7 to 8
move 2 from 4 to 1
move 9 from 8 to 4
move 7 from 8 to 2
move 6 from 1 to 8
move 1 from 9 to 7
move 1 from 1 to 6
move 1 from 9 to 6
move 1 from 5 to 9
move 1 from 5 to 3
move 9 from 4 to 9
move 3 from 3 to 6
move 8 from 6 to 3
move 1 from 2 to 9
move 8 from 9 to 8
move 6 from 2 to 9
move 2 from 6 to 1
move 7 from 8 to 6
move 2 from 9 to 6
move 8 from 7 to 8
move 1 from 4 to 5
move 9 from 3 to 5
move 2 from 1 to 4
move 1 from 7 to 4
move 2 from 4 to 3
move 11 from 8 to 1
move 1 from 4 to 7
move 1 from 7 to 8
move 5 from 1 to 3
move 4 from 6 to 4
move 2 from 4 to 8
move 1 from 4 to 8
move 7 from 8 to 9
move 1 from 8 to 9
move 1 from 8 to 5
move 18 from 3 to 2
move 17 from 2 to 7
move 6 from 5 to 4
move 1 from 2 to 5
move 4 from 4 to 6
move 4 from 6 to 9
move 15 from 7 to 9
move 2 from 1 to 6
move 2 from 7 to 9
move 28 from 9 to 2
move 1 from 6 to 7
move 4 from 6 to 9
move 3 from 1 to 7
move 2 from 6 to 3
move 1 from 4 to 7
move 8 from 9 to 5
move 13 from 5 to 3
move 1 from 5 to 7
move 3 from 9 to 4
move 8 from 3 to 7
move 28 from 2 to 5
move 1 from 9 to 8
move 4 from 3 to 4
move 4 from 7 to 5
move 2 from 3 to 9
move 21 from 5 to 4
move 1 from 5 to 7
move 1 from 3 to 5
move 3 from 5 to 7
move 1 from 1 to 3
move 3 from 7 to 3
move 5 from 7 to 6
move 10 from 4 to 8
move 6 from 5 to 4
move 1 from 9 to 3
move 15 from 4 to 5
move 10 from 4 to 7
move 3 from 3 to 7
move 1 from 3 to 4
move 1 from 3 to 4
move 7 from 5 to 1
move 2 from 4 to 7
move 1 from 9 to 2
move 2 from 6 to 9
move 1 from 5 to 3
move 1 from 3 to 8
move 10 from 7 to 9
move 2 from 8 to 1
move 9 from 9 to 2
move 1 from 4 to 3
move 9 from 8 to 7
move 1 from 2 to 8
move 5 from 5 to 4
move 1 from 3 to 2
move 5 from 4 to 3
move 3 from 5 to 9
move 6 from 7 to 3
move 1 from 6 to 5
move 5 from 9 to 7
move 2 from 5 to 6
move 3 from 6 to 7
move 4 from 1 to 4
move 6 from 2 to 7
move 17 from 7 to 5
move 1 from 6 to 1
move 5 from 3 to 6
move 10 from 7 to 2
move 1 from 8 to 4
move 1 from 9 to 8
move 3 from 4 to 1
move 1 from 7 to 4
move 5 from 5 to 9
move 2 from 8 to 7
move 3 from 3 to 7
move 4 from 2 to 3
move 3 from 4 to 6
move 7 from 5 to 8
move 7 from 2 to 8
move 4 from 9 to 8
move 12 from 8 to 3
move 17 from 3 to 2
move 1 from 7 to 9
move 1 from 3 to 9
move 3 from 9 to 1
move 2 from 5 to 1
move 1 from 3 to 5
move 4 from 5 to 8
move 6 from 8 to 1
move 17 from 2 to 3
move 13 from 3 to 2
move 1 from 3 to 9
move 1 from 8 to 4
move 1 from 4 to 8
move 1 from 9 to 1
move 2 from 7 to 2
move 8 from 6 to 2
move 2 from 7 to 5
move 9 from 1 to 3
move 13 from 2 to 9
move 6 from 1 to 4
move 6 from 4 to 5
move 3 from 8 to 1
move 2 from 1 to 8
move 8 from 5 to 7
move 2 from 3 to 1
move 9 from 3 to 1
move 3 from 8 to 2
move 1 from 1 to 9
move 1 from 3 to 9
move 6 from 7 to 3
move 4 from 2 to 7
move 14 from 1 to 6
move 2 from 3 to 9
move 3 from 3 to 7
move 6 from 2 to 1
move 2 from 1 to 2
move 9 from 6 to 3
move 11 from 9 to 5
move 9 from 7 to 6
move 6 from 6 to 2
move 1 from 1 to 8
move 5 from 9 to 4
move 1 from 8 to 5
move 9 from 2 to 7
move 10 from 5 to 8`
// -----------end of input-----------------------------------

// --- Part One ---
 dir =  dir = dir.split("\n").map(x=>x.split(" "))
 let dirNums = dir.map(x=>x.filter(y=>/^[0-9]/.test(y))) // arrays of only numbers 1st number: how many to move. 2nd: from which stack. 3rd: destination.

 for(i=0; i<dirNums.length; i++){
    let count = +dirNums[i][0]
    let from = dirNums[i][1]
    let dest = dirNums[i][2]

    while(count){
        let curr = stacks[from].pop()
        stacks[dest].push(curr)
        count--
    }
 }
 let res=""
 for (i in stacks){
    res+=stacks[i][stacks[i].length-1]
}
  //Answer: PSNRGBTFT


//   --- Part Two ---
// As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.

// Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a CrateMover 9001.

// The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

// Again considering the example above, the crates begin in the same configuration:

for(i=0; i<dirNums.length; i++){
    let curr=[]
    let count = +dirNums[i][0]
    let from = dirNums[i][1]
    let dest = dirNums[i][2]
    while(count){
        curr = [stacks[from].pop(),...curr]
        count--
    }
    stacks[dest].push(...curr)
 }

 for (i in stacks){
    res+=stacks[i][stacks[i].length-1]}
//  Answer: BNTZFPMMW

