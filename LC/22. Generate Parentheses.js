var generateParenthesis = function(n) {
    let res = [];
    if (n < 1) return res;
    const generate =  (str, open, close)=> {
        if(open==0 && close==0) {
          res.push(str)
          return
        }
        if(open) generate(str+"(",open-1,close)
        if (close > open) generate(str + ')', open, close - 1);
     
    };
  generate( '', n, n);
  return res;
};