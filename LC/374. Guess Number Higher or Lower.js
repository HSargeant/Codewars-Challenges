function guessNumber(n) {
    let l = 1, r = n
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        let check = guess(mid)
        if (check == 0) return mid

        if (check == -1) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
};
// 374. Guess Number Higher or Lower