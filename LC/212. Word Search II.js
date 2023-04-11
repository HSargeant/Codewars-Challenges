// 212. Word Search II

var findWords = function(board, words) {
    let res = [];
    
    if (!board || !words || board.length < 1) return [];
    
    for(const word of words) {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === word.charAt(0)) {
                    if(dfs(board, i, j , 0, word) && !res.includes(word)) {
                        res.push(word);
                    }
                }
            }
        }
    }
    
    return res;
};

var dfs = (board, i, j, count, word) => {
    if(!board || board.length === 0) return false;
    
    if(count === word.length) return true;
    
    if(i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1 || board[i][j] !== word.charAt(count)) {
        return false;
    }
    
    let temp = board[i][j];
    board[i][j] = '';
    
    let found = dfs(board, i + 1, j, count + 1, word) || dfs(board, i - 1, j, count + 1, word) ||
                dfs(board, i, j + 1, count + 1, word) || dfs(board, i, j - 1, count + 1, word);
    
    board[i][j] = temp;
    
    return found;
}