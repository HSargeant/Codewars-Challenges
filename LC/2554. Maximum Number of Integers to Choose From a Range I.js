/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    let ban = new Set(banned), count=0
    for (let num = 1; num<= n; num++) {
        if (!ban.has(num) &&maxSum-num>=0) {
            maxSum-=num
            count++
        }
        if(maxSum<=num) break
    }
    return count
};
// 2554. Maximum Number of Integers to Choose From a Range I