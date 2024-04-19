/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let rows = grid.length, cols = grid[0].length, p = 0

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == 0) continue
            if (r == 0) p++
            else if (grid[r - 1][c] == 0) p++

            if (r == rows - 1) p++
            else if (grid[r + 1][c] == 0) p++

            if (c == 0) p++
            else if (grid[r][c - 1] == 0) p++

            if (c == cols - 1) p++
            else if (grid[r][c + 1] == 0) p++
        }
    }
    return p
};