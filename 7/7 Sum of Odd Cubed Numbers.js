
// DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
let filteredArr = arr.filter(x=>x%2!==0)
let SumofCubes = filteredArr.reduce((a,x)=>a+x**3,0)
return arr.every(x=>typeof x == "number") ? SumofCubes : undefined
}