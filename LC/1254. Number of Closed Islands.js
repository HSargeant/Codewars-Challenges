// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Example 1:

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
// Example 2:

// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1
// Example 3:

// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2
 

// Constraints:

// 1 <= grid.length, grid[0].length <= 100
// 0 <= grid[i][j] <=1

var closedIsland = function(grid) {

    let islands=0
    let m=grid.length;
    let n=grid[0].length;
    const dfs=(row,col)=>{
        if(row<0||col<0||row>grid.length-1|| col>grid[0].length-1||grid[row][col]=="1") return
        grid[row][col]=1
        if(row <grid.length-1) dfs(row+1,col)
        if(col<grid[0].length-1) dfs(row,col+1)
        if(row>0) dfs(row-1,col)
       if(col>0) dfs(row,col-1)
    }

// This problem is same as count islands but we have to remove corner islands and islands on the edge
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
           if(grid[i][j]==0 &&(i==0 || i==m-1 || j==0 || j==n-1)){
               dfs(i,j);
           }
        }
    }

    for(r=0; r<grid.length; r++){
        for(c=0; c<grid[0].length; c++){
            if(grid[r][c]=="0"){
                islands++
                dfs(r,c)
            }
        }
    }
    return islands
}