/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (check(i, j, grid)) count++
        }
    }
    return count
}

function check(r, c, grid) {
    let sum = 0
    let dr = 0
    dl = 0
    let set = new Set()
    if (grid[r + 2] != undefined && grid[r][c + 2] != undefined) {
        dr = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2]
        dl = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c]
        if (dl != dr) return false
        let c1 = grid[r][c] + grid[r + 1][c] + grid[r + 2][c]
        if (dl != c1) return false
        let c2 = grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1]
        if (dl != c2) return false
        let c3 = grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2]
        if (dl != c3) return false
        set = new Set(
            [grid[r][c], grid[r][c + 1], grid[r][c + 2], grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2], grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2]]
        )
        let r1 = grid[r][c] + grid[r][c + 1] + grid[r][c + 2]
        if (dl != r1) return false
        let r2 = grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2]
        if (dl != r2) return false
        let r3 = grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2]
        if (dl != r3) return false
    }
    for (let i = 1; i <= 9; i++) {
        if (!set.has(i)) return false
    }

    return true
}
// 840. Magic Squares In Grid