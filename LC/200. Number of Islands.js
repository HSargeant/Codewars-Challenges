// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands=0
    const dfs=(row,col)=>{
        if(row<0||col<0||row>grid.length-1|| col>grid[0].length-1||grid[row][col]!="1") return
        grid[row][col]=""
        if(row <grid.length-1) dfs(row+1,col)
        if(col<grid[0].length-1) dfs(row,col+1)
        if(row>0) dfs(row-1,col)
       if(col>0) dfs(row,col-1)
    }
    for(r=0; r<grid.length; r++){
        for(c=0; c<grid[0].length; c++){
            if(grid[r][c]=="1"){
                islands++
                dfs(r,c)
            }
        }
    }
    return islands
}