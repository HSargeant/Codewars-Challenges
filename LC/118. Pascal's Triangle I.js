function generate(numRows) {
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]
    if (numRows == 3) return [[1], [1, 1], [1, 2, 1]]
    if (numRows == 4) return [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
    let res = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]], k = numRows - 4, temp = [1]
    while (k) {
        let arr = res[res.length - 1]
        for (let i = 0; i < arr.length - 1; i++) {
            temp.push(arr[i] + arr[i + 1])
        }
        temp.push(1)
        res.push(temp)
        temp = [1]
        k--
    }
    return res
};
// 118. Pascal's Triangle I