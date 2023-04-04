// write a function that would reorder a word N number of times, passing through a word and number of rotations as parameters. If the input was “abcdef” and the number of rotations was 2, then the output should be “efabcd”

const rotateString=(s,k)=>{
    // k == 2  s = abcd -----cdab
    k%=x.length
    return x.slice(-k)+x.slice(0,-k)
}




rotateString("abcd",2) //==cdab