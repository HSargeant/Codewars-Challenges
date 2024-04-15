/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) return '1'
    let str = '1'
    for (let i = 1; i < n; i++) {
        str = createString(str)
    }
    return str
};

function createString(str) {
    let count = 1, string = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            string += count + str[i]
            count = 1
        } else {
            count++
        }
    }
    return string
}
// 38. Count and Say