function dfs(board, r, c, word,check,i) {
    if (word === check) return true;
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length)
        return false;
    if (board[r][c] !== word[i]) return false;

    let temp = board[r][c];
    board[r][c] = '#';
    let result =
        dfs(board, r - 1, c, word,check+temp,i+1) ||
        dfs(board, r + 1, c, word,check+temp,i+1) ||
        dfs(board, r, c - 1, word,check+temp,i+1) ||
        dfs(board, r, c + 1, word,check+temp,i+1);

    board[r][c] = temp;
    return result;
}

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word,"",0)) {
                return true;
            }
        }
    }
    return false;
};
// 79. Word Search