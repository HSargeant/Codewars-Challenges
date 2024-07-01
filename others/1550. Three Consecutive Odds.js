function threeConsecutiveOdds (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) return true
    }
    return false
};
// 1550. Three Consecutive Odds