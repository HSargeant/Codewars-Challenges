function maxPalindromicSubstrings(s, k) {
    let count = 0;
    while (s.length >= k) {
        let found = false;
        for (let len = s.length; len >= k; len--) {
            for (let i = 0; i <= s.length - len; i++) {
                let j = i + len - 1;
                let substr = s.substring(i, j + 1);
                if (isPalindrome(substr)) {
                    s = s.substring(0, i) + s.substring(j + 1);
                    count++;
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (!found) break;
    }
    return count;
}

function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}