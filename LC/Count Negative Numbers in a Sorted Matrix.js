/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    grid=grid.flat().sort((a,b)=>a-b)
    return grid.filter(x=>x<0).length

};

// 1351. Count Negative Numbers in a Sorted Matrix
// Easy

// 2764

// 83

// Add to List

// Share
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0