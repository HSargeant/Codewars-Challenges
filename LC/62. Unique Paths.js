var uniquePaths = function(m, n) {
    // math
    let total = (m+n-2)
    let top=1
    for(i=1;i<m; i++){
        top*=total
        total--
    }
    let bottom=1
    for(let i=m-1; i>=1; i--){
        bottom*=i
    }
    return (top/bottom)   
};


//2d dynamic programming
// var uniquePaths = function(m, n,o={}) {
//     if(o[`${m},${n}`]) return o[`${m},${n}`]
//     if(m==0 ||n==0) return 0
//     if(m==1&&n==1) return 1
    
//     o[`${m},${n}`]= uniquePaths(m-1,n,o)+uniquePaths(m,n-1,o)
//     return o[`${m},${n}`]
    
// };

// Problem
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
 