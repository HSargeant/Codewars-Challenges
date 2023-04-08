var longestPalindrome = function(s) {
    if (s.length <= 1 || isPalindrome(s)) return s
    let max = -1
    let result = ''
    
    for (let i = 0; i < s.length; i++) {
        let index = i+1, str = s.charAt(i)
        for(j=i+1; j<=s.length; j++){
            if (isPalindrome(str) && str.length > max) {
                max = str.length
                result = str
            }
            str += s.charAt(index)
            index++
        }
    }
    return result
};

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if(str.charAt(i) !== str.charAt((str.length - i) - 1)) return false
    }
    return true
}