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
