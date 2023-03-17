import { expect } from '@open-wc/testing';
import { countNeighborCells } from '../src/utils/countNeighbors';
import { generateGrid } from '../src/utils/grid';

describe('grid', () => {
  describe('generateGrid', () => {
    const result = generateGrid(10, 10);
    const flattenedResult = result.flat();

    it('should return 2d array 10 x 10', () => {
      expect(Array.isArray(result)).to.equal(true);
      expect(result.length).to.equal(10);
      expect(flattenedResult.length).to.equal(100);
    });
    console.log(flattenedResult);

    it('should fill 2d array with 0 or 1', () => {
      expect(flattenedResult.includes(1)).to.equal(true);
      expect(flattenedResult.includes(0)).to.equal(true);
    });
  });
  describe('countNeighborCells', () => {
    it('should return 3 for grid[1][1]', () => {
      const grid = [
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
      ];

      const result = countNeighborCells(grid, 1, 1);
      expect(result).to.equal(3);
    });

    it('should return 0 for grid[2][2]', () => {
      const grid = [
        [1, 0, 0, 1],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ];

      const result = countNeighborCells(grid, 2, 2);
      expect(result).to.equal(0);
    });

    it('should return 5 for grid[1][1]', () => {
      const grid = [
        [1, 1, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ];

      const result = countNeighborCells(grid, 1, 1);
      expect(result).to.equal(5);
    });

    it('should count neighbors across top edge, and return 4 for grid[0][2]', () => {
      const grid = [
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 1, 0],
      ];

      const result = countNeighborCells(grid, 0, 2);
      expect(result).to.equal(4);
    });

    it('should count neighbors across bottom edge, and return 4 for grid[3][2]', () => {
      const grid = [
        [1, 0, 1, 1],
        [0, 0, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
      ];

      const result = countNeighborCells(grid, 3, 2);
      expect(result).to.equal(4);
    });

    it('should count neighbors across left edge, and return 2 for grid[2][0]', () => {
      const grid = [
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
      ];

      const result = countNeighborCells(grid, 2, 0);
      expect(result).to.equal(2);
    });

    it('should count neighbors across right edge, and return 3 for grid[1][3]', () => {
      const grid = [
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
      ];

      const result = countNeighborCells(grid, 1, 3);
      expect(result).to.equal(3);
    });
  });
});
