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

export const makeNewGeneration = (grid: number[][]) =>
  grid.map((row, rowIndex) =>
    row.map((cell, columnIndex) => {
      const neighborsQuantity = countNeighborCells(grid, rowIndex, columnIndex);

      if (neighborsQuantity < 2) {
        return 0;
      }

      return cell;
    })
  );
