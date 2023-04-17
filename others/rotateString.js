// rotate string
// write a function that would reorder a word N number of times, passing through a word and number of rotations as parameters. If the input was “abcdef” and the number of rotations was 2, then the output should be “efabcd”

const rotateString=(s,k)=>{
    // k == 2  s = abcd -----cdab
    k%=s.length
    return s.slice(-k)+s.slice(0,-k)
}


console.log(rotateString("abcd",2)) //==cdab
console.log(rotateString("a3456bcd",5)) //==cdab