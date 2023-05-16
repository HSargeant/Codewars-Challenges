/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(arr) {
    let pairs = new Set(),sum=0
    let j=arr[0].length-1
    for(let i=0; i<arr.length; i++){
        // l-r 00 11 22
        //r-l 02 11 20
        pairs.add(`(${i},${i})`)
        sum+=arr[i][i]
        if(!pairs.has(`(${i},${j})`)){
            sum+=arr[i][j]
            pairs.add(`(${i},${j})`)

        }
        j--
    }
    return sum
};

// 1572. Matrix Diagonal Sum
// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5