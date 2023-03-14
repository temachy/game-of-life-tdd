import { expect } from '@open-wc/testing';
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
});
