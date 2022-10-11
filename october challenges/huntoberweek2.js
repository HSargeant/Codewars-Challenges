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
    if(!a[index+1]) return a
    let temp = a[index]
    a[index] = a[index+1]
    a[index+1] = temp
    return a
}
const moveLeft=(a,e)=>{
    let index = a.indexOf(e)
    if(!a[index-1]) return a
    let temp = a[index]
    a[index] = a[index-1]
    a[index-1] = temp
    return a
}