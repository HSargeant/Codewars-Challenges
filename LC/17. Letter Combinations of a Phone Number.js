function letterCombinations(digits) {
  if (!digits) return []
  let obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let res = []

  const dfs = (i, str) => {
    if (str.length === digits.length) {
      res.push(str);
      str = ""
      return;
    }

    for (x of obj[digits[i]]) {
      dfs(i + 1, str + x);
    }

  };

  dfs(0, '');
  return res;
};
// 17. Letter Combinations of a Phone Number
