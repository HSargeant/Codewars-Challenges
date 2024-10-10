/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
    let rows = {}, cols = {}, count = 0
    for (let i = 0; i < grid.length; i++) {
        row = ""
        for (let j = 0; j < grid[0].length; j++) {
            row += grid[i][j] + ","
        }
        rows[row] = rows[row] + 1 || 1
    }
    for (let j = 0; j < grid[0].length; j++) {
        cols[j] = ""
        for (let i = 0; i < grid.length; i++) {
            cols[j] += grid[i][j] + ","
        }
        if (rows[cols[j]]) {
            count += rows[cols[j]]
        }

    }
    return count
};
// 2352. Equal Row and Column Pairs