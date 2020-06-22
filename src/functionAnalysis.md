# Analyzing the Calculate Winner Function

The calculateWinner function in index.js is called everytime a player marks the tic-tac-toe board in order to determine whether player X or O has managed to win the game. When a player has indeed won the game, the board displays the name of the winner and prevents further squares from being marked. 

The function accepts a parameter called "squares", which is meant to be an array of nine values representing the nine squares of a tic-tac-toe board, arranged from left-to-right and top-to-bottom. Each square or element in the array consists of the default value of "null" or one of "X" or "O". 

The function declares a local constant variable called "lines", consisting of an array of arrays representing each unique horizontal, vertical or diagonal combination of squares that a player would need to fill out to win the game. Given that a tic-tac-toe board is always 3 squares by 3 squares, this array represents all possible paths to victory at the beginning of the game and can therefore be hard-coded. 

The function proceeds to loop over the lines array to check whether the actual board matches any of the possible winning combinations. This is where things get interesting. Take the first winning combination, which represents the first three squares on the board:

```js script
  [0, 1, 2];
```

There is a conditional that begins by asking whether the square corresponding to the first element in the combination is truthy and has therefore been selected by either X or O. Given that a player need not fill out the squares corresponding to this combination in any one particular order, is there a particular reason why we should start by asking if squares[0] exists rather than squares[2] or squares[1]? The answer is no, it does not matter which one we choose as long as we choose one. Given that all three squares outlined in the combination need to have a positive value and that they need to all have a positive value, the conditional is properly structured given that it short-circuits if the first square is still null. 

If the actual board contains the same mark on the three squares specified by a winning combination, then the game is won and the function returns the value of any of the squares of the winning combination, either "X" or "O", which can then be used to identify the winner. If none of the winning combinations are met, then the function simply returns null given that there is still no winner. 

One apparent inneficiency is that the function loops over the same set of winning combinations each time, even though the board actually gives us information that we could use to rule out some of these combinations. Given that the set of winning combinations is rather small, this is not a huge problem, but it would be interesting to consider whether we could trim the lines array so that we only consider the winning combinations that are still in play.


```js script
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
```