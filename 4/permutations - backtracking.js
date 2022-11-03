// DESCRIPTION:
// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  let res=[]
  let x= new Set()
  
  const back=(i=0,temp=[])=>{
    if(x.size==string.length) {
      let p=""
      for (let idx of x) {
        p+=string[idx]
      }
      res.push(p)
      return
    }
    for(i=0; i<string.length; i++){
      if(string[i] === string[i-1] && x.has(i-1)) continue
      if(x.has(i)) continue
      x.add(i)
      back(i,x)
      x.delete(i)
    }
  }
  back()
  return res;
}