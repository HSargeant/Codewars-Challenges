var checkValidString = function(s) {
    let low = 0, high = 0;

    for (const c of s) {
        if (c === '(') {
            low++;
            high++;
        } else if (c === ')') {
            low = Math.max(0, low - 1);
            high--;
        } else if (c === '*') {
            low = Math.max(0, low - 1);
            high++;
        }
        if (high < 0) {
            return false;
        }
    }

    return low === 0;
};
// 678. Valid Parenthesis String