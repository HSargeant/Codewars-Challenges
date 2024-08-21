/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false
    if (n <=6) return true
    while (n % 5 == 0) {
        n /= 5
    }
    while (n % 3 == 0) {
        n /= 3
    }
    while (n > 1) {
        n /= 2
    }
    return n==1
};
// 263. Ugly Numbe