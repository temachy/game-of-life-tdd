const getCellWithRightLeftColumnCells = (
  columnIndex: number,
  row: number[]
) => {
  const isTheFirstInTheRow = columnIndex === 0;
  const isTheLastInTheRow = columnIndex === row.length - 1;

  // [*, 0, 0]
  if (isTheFirstInTheRow) {
    return [row[row.length - 1], row[columnIndex], row[columnIndex + 1]];
  }

  // [0, 0, *]
  if (isTheLastInTheRow) {
    return [row[0], row[columnIndex], row[columnIndex - 1]];
  }

  // [0, *, 0]
  return [row[columnIndex - 1], row[columnIndex], row[columnIndex + 1]];
};

const getNeighborRows = (rowIndex: number, grid: number[][]) => ({
  topRow: grid[rowIndex === 0 ? grid.length - 1 : rowIndex - 1],
  bottomRow: grid[rowIndex === grid.length - 1 ? 0 : rowIndex + 1],
});

const removeMiddleCell = (row: number[]) => [row[0], row[row.length - 1]];

export const countNeighborCells = (
  grid: number[][],
  rowIndex: number,
  columnIndex: number
) => {
  const { topRow, bottomRow } = getNeighborRows(rowIndex, grid);
  const topNeighborCells = getCellWithRightLeftColumnCells(columnIndex, topRow);
  const bottomNeighborCells = getCellWithRightLeftColumnCells(
    columnIndex,
    bottomRow
  );
  const sidesNeighborCells = removeMiddleCell(
    getCellWithRightLeftColumnCells(columnIndex, grid[rowIndex])
  );

  return [
    ...topNeighborCells,
    ...bottomNeighborCells,
    ...sidesNeighborCells,
  ].reduce((accum, cell) => accum + cell, 0);
};
