import { countNeighborCells } from './countNeighbors';

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

const isCellAlive = (
  grid: number[][],
  rowIndex: number,
  columnIndex: number
) => {
      const neighborsQuantity = countNeighborCells(grid, rowIndex, columnIndex);
  if (neighborsQuantity < 2 || neighborsQuantity > 3) {
    return true;
      }

  return false;
};

export const makeNewGeneration = (grid: number[][]) =>
  grid.reduce((gridAccum, row, rowIndex) => {
    const updatedRow = row.reduce((rowAccum, _, columnIndex) => {
      const sellState = Number(isCellAlive(grid, rowIndex, columnIndex));
      return [...rowAccum, sellState];
    }, [] as number[]);

    return [...gridAccum, updatedRow];
  }, [] as number[][]);
