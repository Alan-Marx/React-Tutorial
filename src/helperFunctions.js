
/* The folliwing functions will generate an array of arrays representing each horizontal, vertical and diagonal combination of 
squares of n length in a n x n board. */

const generateWinningPaths = (n) => {
  const board = [];
  let counter = 0;

  for (let row = 0; row < n; row++) {
    board.push([]);
    for (let i = 0; i < n; i++) {
      board[row].push(counter);
      counter++;
    }
  }

  const winningPaths = [...board];
  
  for (let i = 0; i < n; i++) {
    const column = [];
    for (let row of board) {
      column.push(row[i]);
    }
    winningPaths.push(column);
  }



  return winningPaths;
}

console.log(generateWinningPaths(3));