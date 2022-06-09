// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let arr = x.split(" ")
  //   console.log(arr[0].split("")[0].charCodeAt())
    let result = arr.map(x=>{
      x = x.split("")
        let sum=0
        for(i=0; i<x.length; i++){
          console.log(x[i], x[i].charCodeAt())
          sum+=x[i].charCodeAt()-96
        }
      return sum
    })
    
    return arr[result.indexOf(Math.max(...result))]
  }