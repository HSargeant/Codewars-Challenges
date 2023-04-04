var longestPalindrome = function(s) {
    let set = new Set()
    
        for (let i = 0; i < s.length; i++) {
            if(set.has(s[i])){
                set.delete(s[i])
            }else set.add(s[i])
        }
    
        if (set.size <= 1) return s.length;
        return s.length - set.size + 1;
        
    };