// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, NASM, C, C++, Go and Rust: 13 282 ) Hamming numbers without timing out.
function hamming (n) {

  let arr = [1]

  let e = 0, j = 0, k = 0
  for (i = 1; i < n; i++) {
        let x = Math.min(2 * arr[e], 3 * arr[j], 5 * arr[k])
        
        arr.push(x)
        
        if(2 * arr[e] === x) {
        e++
        }
        
        if (3 * arr[j] === x) {
        j++
        }
        
        if (5 * arr[k] === x) {
        k++
        }
    }
  return arr[n-1]
}