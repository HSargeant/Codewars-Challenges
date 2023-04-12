// 5. Longest Palindromic Substring

// 4/11
var longestPalindrome = function(s) {
    let max=0,res=""

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if(Math.abs(r-l)+1>max){
                res=s.slice(l,r+1)
                max = Math.abs(l-r)+1
            }
            l--
            r++
        }

        l = i;
        r = i + 1;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if(Math.abs(r-l)+1>max){
                res=s.slice(l,r+1)
                max = Math.abs(l-r)+1
            }
            l-- 
            r++
        }
    }
    return res 
};


// var longestPalindrome = function(s) {
//     if (s.length <= 1 || isPalindrome(s)) return s
//     let max = -1
//     let result = ''
    
//     for (let i = 0; i < s.length; i++) {
//         let index = i+1, str = s.charAt(i)
//         for(j=i+1; j<=s.length; j++){
//             if (isPalindrome(str) && str.length > max) {
//                 max = str.length
//                 result = str
//             }
//             str += s.charAt(index)
//             index++
//         }
//     }
//     return result
// };

// const isPalindrome = (str) => {
//     for (let i = 0; i < str.length / 2; i++) {
//         if(str.charAt(i) !== str.charAt((str.length - i) - 1)) return false
//     }
//     return true
// }