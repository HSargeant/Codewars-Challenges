// 709. To Lower Case
const toLowerCase=(s)=>s.toLowerCase()
// no built in methods
let res = '';
function toLowerCaseNoBuitinMethods(s){
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            output += String.fromCharCode(char + 32);
        } else {
            output += s[i];
        }
    }
    return output;
}
