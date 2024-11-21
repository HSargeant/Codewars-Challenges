/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
    let grid = Array(m).fill().map(x => Array(n).fill(0))
    let set = new Set()
    for (const [r, c] of walls) {
        grid[r][c] = 2
        set.add(`${r},${c}`)
    }
    for (const [r, c] of guards) {
        set.add(`${r},${c}`)
        grid[r][c] = 2
    }
    for (const [r, c] of guards) {
        for([dx,dy] of [[-1,0],[0,1],[1,0],[0,-1]] ){
            let x=r
            let y=c
            while(true){
                x+=dx
                y+=dy
                if(x>=m||y>=n||x<0||y<0||grid[x][y]==2) break
                grid[x][y]=1
            set.add(`${x},${y}`)
            }
        }
    }
    return m*n-set.size
};
// 2257. Count Unguarded Cells in the Grid