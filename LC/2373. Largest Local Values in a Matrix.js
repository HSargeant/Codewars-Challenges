function largestLocal(grid) {
    const n = grid.length
    const arr = Array.from({length: n-2}, ()=> Array(n-2).fill(0))

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            arr[i][j] = getMax(grid, i, j)
        }
    }

    return arr
};

function getMax(grid, row, col){
    let max = -Infinity
    for(let i = row; i <= row+2; i++){
        for(let j = col; j <= col+2; j++){
            max = Math.max(max, grid[i][j])
        }
    }

    return max
}
// # 2373. Largest Local Values in a Matrix