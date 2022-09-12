function encrypt(s, n) {
  if(n<=0 ||!s) return s
  let odd=""
  let even =""
    for(i=0;i<s.length; i++){
      if(i%2==0) {
        even+=s[i]
      }else odd+=s[i]
    }
    s = odd+even
return encrypt(s, n-1)
}

function decrypt(s, n) {
  if(n<=0 ||!s) return s
  const ans = new Array(s.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = s[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = s[j++];
    }
    s = ans.join('');
  }
  return s;

}

// DESCRIPTION:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"