// Write a program that will take a numeric input (y) and return the
// highest ordinal position (n) within the Fibonacci sequence that the
// input will fit inside.  For example:
//     n  0  1  2  3  4  5  6   7   8   9  ...
//     x  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// FibCeil( y) -> n
// FibCeil(20) -> 8 (hint: look at x in the example)
// FibCeil(21) -> 8
// FibCeil(22) -> 9

function FibCeil(y) {
    let a = 0
    let b = 1
    let n = 1
    while (b < y) {
        let temp = a + b
        a = b
        b = temp
        n++
    }
    return n
}