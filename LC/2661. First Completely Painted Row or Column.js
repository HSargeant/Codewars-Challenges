/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
function firstCompleteIndex(arr, mat) {
    const M = mat.length
    const N = mat[0].length
    const coords = Array(M * N).fill()
    const rows = Array(M).fill(0)
    const cols = Array(N).fill(0)
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            const val = mat[i][j]
            coords[val] = [i, j]
        }
    }
    for (let i = 0; i < arr.length; ++i) {
        const [row, col] = coords[arr[i]]
        rows[row] += 1
        cols[col] += 1
        if (cols[col] === M || rows[row] === N) return i
    }
};
// 2661. First Completely Painted Row or Column