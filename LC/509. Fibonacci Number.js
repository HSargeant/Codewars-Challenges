function fib(n, o = {}) {
    if (n == 0) return 0
    if (n < 3) return 1
    if (o[n]) return o[n]
    o[n] = fib(n - 1, o) + fib(n - 2, o)
    return o[n]
};
// 509. Fibonacci Number