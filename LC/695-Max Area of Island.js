// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

var maxAreaOfIsland = function(grid) {
    const dfs=(row,col)=>{
        if(row<0||col<0||row>grid.length-1|| col>grid[0].length-1||grid[row][col]!="1") return 0
        grid[row][col]=""
        return 1 + dfs(row+1,col)+dfs(row,col+1)+dfs(row-1,col)+dfs(row,col-1)
    }
    let max=0
    for(r=0; r<grid.length; r++){
        for(c=0; c<grid[0].length; c++){
            if(grid[r][c]==1){
            max = Math.max(max,dfs(r,c))
            }
        }
    }
    return max
    
};