// 1137. N-th Tribonacci Number

function tribonacci(n, o = {}) {
    if (n == 0) return 0
    if (n == 1 || n == 2) return 1
    if (o[n]) return o[n]
    o[n] = tribonacci(n - 3, o) + tribonacci(n - 2, o) + tribonacci(n - 1, o)
    return o[n]
};
// 1137. N-th Tribonacci Number