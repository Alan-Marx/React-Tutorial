
/* The folliwing function will generate an array of arrays representing each horizontal, vertical and diagonal combination of 
squares of n length in a n x n board. */

const generateWinningPaths = (n) => {
  const board = [];
  let counter = 0;

  for (let i = 0; i < n; i++) {
    const row      = [],
          column   = [],
          diagonal = [];
  
    for (let i2 = 0; i2 < n; i2++) {
      row.push(counter);
      column.push(i2 === 0 ? i : i2 * n + i);
      
      if (i === 0) {
        diagonal.push(i2 === 0 ? 0 : i2 * n + i2)
      } else if (i === n - 1) {
        diagonal.push(i2 === 0 ? n - 1 : (n - 1) * (i2 + 1))
      }
      counter++;
    }
    board.push(row, column);
    if (diagonal.length > 1) {
      board.push(diagonal);
    }
  }
  return board;
}

export default generateWinningPaths;

console.log(generateWinningPaths(3));