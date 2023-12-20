const solveSudoku = (arr) => {
  const isValid = (row, col, num) => {
    // Check if 'num' is not present in the current row, column, and 3x3 grid
    for (let i = 0; i < 9; i++) {
      if (
        arr[row][i] === num ||
        arr[i][col] === num ||
        arr[row - (row % 3) + Math.floor(i / 3)][col - (col % 3) + (i % 3)] ===
          num
      ) {
        return false;
      }
    }
    return true;
  };

  const solve = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (arr[row][col] === "") {
          for (let num = 1; num <= 9; num++) {
            const numString = num.toString();
            if (isValid(row, col, numString)) {
              arr[row][col] = numString;
              if (solve()) {
                return true; // If the current state leads to a solution, return true
              }
              arr[row][col] = ""; // Backtrack if the current state is invalid
            }
          }
          return false; // If no valid number is found for the current cell, backtrack
        }
      }
    }
    return true; // If all cells are filled, the puzzle is solved
  };

  solve();
  return arr;
};

export { solveSudoku };
