function validateSudoku(board) {
  //sum 1+2...+9=45
  //   //use the sum to check columns for non solutions
  for (let i = 0; i < 9; i++) {
    let sum = 0, set = new Set()

    for (let j = 0; j < 9; j++) {

      set.add(board[j][i])
      sum += board[j][i]
    }
    if (sum !== 45 || set.size != 9) {

      return false
    }
  }




  // check rows for non solutions
  for (i = 0; i < 9; i++) {
    let set = new Set()
    let sum = board[i].reduce((a, b) => {
      set.add(b)
      return a + b
    }, 0)

    if (sum !== 45 || set.size != 9) {

      return false
    }
  }

  //check 3x3 boxes for non solutions
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j]
      if (!validBox(board, i, j, value)) return false

    }
  }
  return true
}

function validBox(board, row, col, value) {
  const startRow = row - (row % 3), startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col) {
        if (board[i][j] === value) {
          return false;
        }
      }
    }
  }
  return true;
}