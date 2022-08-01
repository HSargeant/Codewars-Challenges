function getLengthOfMissingArray(arrs) {
if(!arrs) return 0
for(i=0; i<arrs.length; i++){
  if(!arrs[i]) return 0
}
  
  arrs = arrs.map(x=>{
    if(x.length)
      return x.length
  }) 
  
  arrs.sort((a,b)=>a-b)
      let result = arrs.filter((elem,i)=>elem+1!==arrs[i+1])
for(i=0; i<result.length; i++){function findMissing(arr1, arr2) {
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    let res=[]
    arr1.forEach((x,i)=>{
      if(x!==arr2[i]) res.push(x)
    })
    return res[0]
  }
  if(!result[i]) return 0
}
  return result[0] ? result[0]+1: 0
}

// refactor
function getLengthOfMissingArray(arrs) {
    const lengths = (arrs || [])
      .map(a => a ? a.length : 0)
      .sort((a, b) => a - b)
    
    if (lengths.includes(0)) {
      return 0
    }
  
    for (let i = 0; i < lengths.length - 1; i++) {
      if (lengths[i] + 1 !== lengths[i + 1]) {
        return lengths[i] + 1
      }
    }
  
    return 0
  }

// DESCRIPTION:
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.