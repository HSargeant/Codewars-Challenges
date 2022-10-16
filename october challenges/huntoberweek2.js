// array week 

// day1------------------------------------------------------

// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]
function checkEquality(arr1,arr2){
    if (!arr1.length || !arr2.length) return false;
    if (arr1.length !== arr2.length) return false;
    for(i=0; i<arr1.length;i++){
      for(j=0;j<arr1.length;j++){
        if(arr1[i][j]!==arr2[i][j]) return false
      }
    }
    return true
}

checkEquality(arr1, arr2) /* true*/
checkEquality(arr1, arr3) /*false*/
checkEquality(arr1, arr4) /*false*/

// day2

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.
// myArray = ['abc', 'xyz', 1, 2, 'Hey!']

const moveRight=(a,e)=>{
    let index = a.indexOf(e)
    if(a[index+1]){ 
    let temp = a[index]
    a[index] = a[index+1]
    a[index+1] = temp
}
    return a
}
const moveLeft=(a,e)=>{
    let index = a.indexOf(e)
    if(a[index-1]){
    let temp = a[index]
    a[index] = a[index-1]
    a[index-1] = temp
}
    return a
}

// day3
// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:


// COPY
// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function moveItems(a){
  let front = a.filter(x=>x.includes("a"))
  let back = a.filter(x=>x.length>3 &&!x.includes("a"))
  a=a.filter(x=>!x.includes("a")&&x.length<3)
  return [...front,...a,...back]
}

// day4

// Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.


// COPY
// // for the less imaginative among us :) 
// [[0,1,2],[3,4,5],[6,7,8]]

// // as a grid
// [
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ]
// Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// Examples:

// COPY
// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

function moveUp(a,t){
  let j
  for(i=0; i<a.length;i++){
      if(a[i].includes(t)){
          j=a[i].indexOf(t)
          break
      }
  }  
  if(a[i-1]){
      let temp = a[i][j]
      a[i][j] = a[i-1][j]
      a[i-1][j]=temp
  }
  return a
  }
  
  function moveDown(a,t){
  let j
  for(i=0; i<a.length;i++){
      if(a[i].includes(t)){
          j=a[i].indexOf(t)
          break
      }
  }
  let index = [i,j]
  
  if(a[i+1]){
      let temp = a[i][j]
      a[i][j] = a[i+1][j]
      a[i+1][j]=temp
  }
  return a
  }

// //   day 5
// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.
// For example:


// COPY
// myArray = [[1,2,3],[4,5,6],[7,8,9]]
// // shuffle shuffle
// => [[8,3,5],[2,4,9],[6,7,1]]
const shuffleArr=(a,times=10)=>{
    let len=a.length
    while(times){
        let ch1=Math.floor(Math.random()*len),ch2=Math.floor(Math.random()*len)
        while(ch1==ch2){
            ch2=Math.floor(Math.random()*len)
        }
        let ch11 = Math.floor(Math.random()*a[ch1].length)
        let ch22 = Math.floor(Math.random()*a[ch2].length)
        let temp = a[ch1][ch11]
        a[ch1][ch11]=a[ch2][ch22]
        a[ch2][ch22]=temp
        times--
    }
   return a
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(shuffleArr(arr,5))