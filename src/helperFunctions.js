
/* The folliwing functions will generate an array of arrays representing each horizontal, vertical and diagonal combination of 
squares of n length in a n x n board. */

const generateWinningPaths = (n) => {
  const board = [];
  let counter = 0;

  for (let i = 0; i < n; i++) {
    const row = [];
    const column = [];
    
    for (let i2 = 0; i2 < n; i2++) {
      row.push(counter);
      column.push(i2 === 0 ? i : i2 * n + i);
      counter++;
    }
    board.push(row, column);
  }

  const winningPaths = [...board];
  
  return winningPaths;
}

console.log(generateWinningPaths(4));