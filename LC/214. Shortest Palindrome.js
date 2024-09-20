var shortestPalindrome = function (s) {
    let check = s.split("").reverse().join("")
    if (check == s) return s

    for (let i = 0; i < s.length; i++) {
        if (s.substring(0, s.length - i) === check.substring(i)) {
            return check.substring(0, i) + s;
        }
    }

};
// 214. Shortest Palindrome