/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
    let res = []
    const dfs = (i = 1, temp = [], sum = 0) => {
        if (sum == n && temp.length == k) {
            res.push([...temp])
            return
        }
        if (sum > n || i > 9 || temp.length > k) return
        temp.push(i)
        dfs(i + 1, temp, sum + i)
        temp.pop()
        dfs(i + 1, temp, sum)
    }
    dfs()
    return res
};
// 216. Combination Sum III