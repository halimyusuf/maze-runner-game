function genGrid(rows, cols) {
  return Array(rows)
    .fill(null)
    .map((cell) => Array(cols).fill(false));
}

function genHorGrid(rows, cols) {
  console.log(rows);

  return Array(rows - 1)
    .fill(null)
    .map(() => Array(cols).fill(false));
}

function genVerGrid(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols - 1).fill(false));
}

const shuffle = (arr) => {
  length = arr.length;
  for (let i = 0; i < length; i++) {
    let randInd = Math.floor(Math.random() * length);
    let temp = arr[i];
    arr[i] = arr[randInd];
    arr[randInd] = temp;
  }
  return arr;
};

function move(x, y, rows, cols) {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    return true;
  }
  return false;
}

const moveThroughCells = (row, col, grid, horizontals, verticals) => {
  if (grid[row][col]) {
    return;
  }
  const [rows, cols] = [grid.length, grid[0].length];

  grid[row][col] = true;
  const neighbours = shuffle([
    [row - 1, col, "up"],
    [row + 1, col, "down"],
    [row, col - 1, "left"],
    [row, col + 1, "right"],
  ]);

  for (let neighbour of neighbours) {
    const [nextRow, nextCol, direction] = neighbour;
    if (!move(nextRow, nextCol, rows, cols) || grid[nextRow][nextCol]) {
      continue;
    }
    switch (direction) {
      case "up":
        horizontals[row - 1][col] = true;
        break;
      case "down":
        horizontals[row][col] = true;
        break;
      case "left":
        verticals[row][col - 1] = true;
        break;
      case "right":
        verticals[row][col] = true;
        break;
    }
    moveThroughCells(nextRow, nextCol, grid, horizontals, verticals);
  }
};
