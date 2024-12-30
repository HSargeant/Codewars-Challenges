/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
function countGoodStrings(low, high, zero, one) {
    let mod = Math.pow(10, 9) + 7, res = 0
    let o = {}
    const create = (t = 0) => {
        if (t > high) return 0
        if (o[t] != undefined) return o[t]
        let current = t >= low ? 1 : 0
        o[t] = (create(t + zero) + create(t + one) + current) % mod
        return o[t]
    }

    return create()
};
// 2466. Count Ways To Build Good Strings