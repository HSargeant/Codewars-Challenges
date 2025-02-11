/**
 * @param {number[][]} grid
 * @return {number}
 */
function findMaxFish(grid) {
    const dfs = (r, c, set = new Set()) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == 0 || set.has(`${r},${c}`)) return 0
        set.add(`${r},${c}`)
        return grid[r][c] + dfs(r + 1, c, set) + dfs(r, c + 1, set) + dfs(r - 1, c, set) + dfs(r, c - 1, set)
    }
    let max = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                max = Math.max(max, dfs(i, j))
            }
        }
    }
    return max
};
// 2658. Maximum Number of Fish in a Grid