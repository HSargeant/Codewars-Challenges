/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let res = []
    let rows = land.length, cols = land[0].length
    const dfs = (r, c, temp) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || land[r][c] != 1) return
        land[r][c] = "#"
        if (r < temp[0]) temp[0] = r
        if (c < temp[1]) temp[1] = c
        if (r > temp[2]) temp[2] = r
        if (c > temp[3]) temp[3] = c
        if (r < land.length - 1) dfs(r + 1, c, temp)
        if (c < land[0].length - 1) dfs(r, c + 1, temp)
        if (r > 0) dfs(r - 1, c, temp)
        if (c > 0) dfs(r, c - 1, temp)
    }

    for (r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
            if (land[r][c] == 1) {
                let temp = [r, c, r, c]
                dfs(r, c, temp)
                res.push(temp)
            }
        }
    }

    return res
};
// 1992. Find All Groups of Farmland