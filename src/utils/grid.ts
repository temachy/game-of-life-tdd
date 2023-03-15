export const generateGrid = (columns: number, rows: number) => {
  const grid = Array(columns)
    .fill(null)
    .map(() =>
      Array(rows)
        .fill(null)
        .map(() => Math.round(Math.random()))
    );

  return grid;
};

export const countNeighborCells = (
  grid: number[][],
  rowIndex: number,
  columnIndex: number
) => {
  const topNeighbors = grid[rowIndex - 1]
    .slice(columnIndex - 1, columnIndex + 1)
    .reduce((accum, cell) => accum + cell, 0);
  const bottomNeighbors = grid[rowIndex + 1]
    .slice(columnIndex - 1, columnIndex + 1)
    .reduce((accum, cell) => accum + cell, 0);
  const sidesNeighbors =
    grid[rowIndex][columnIndex + 1] + grid[rowIndex][columnIndex - 1];
  return topNeighbors + bottomNeighbors + sidesNeighbors;
};
