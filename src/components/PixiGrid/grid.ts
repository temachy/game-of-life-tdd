import { generateGrid, makeNewGeneration } from '../../utils/grid';
import {
  GRID_COLUMNS,
  GRID_ROWS,
  UPDATE_TIME_IN_MS,
  LIGHT_BLUE_COLOR,
  RECT_HEIGHT,
  RECT_WIDTH,
  RECT_MARGIN,
} from './constants';
const { autoDetectRenderer, Graphics, Container, Ticker } = PIXI;

class Grid {
  grid: number[][];
  app: any;
  stage: any;
  graphics: any;
  milliseconds: number;

  constructor() {
    this.grid = generateGrid(GRID_COLUMNS, GRID_ROWS);
    this.app = new autoDetectRenderer({
      width: GRID_ROWS * (RECT_WIDTH + RECT_MARGIN),
      height: GRID_COLUMNS * (RECT_HEIGHT + RECT_MARGIN),
      backgroundAlpha: 0,
      antialias: true,
    });
    this.stage = new Container();
    this.graphics = new Graphics();
    this.milliseconds = 0;

    Ticker.shared.add(() => {
      this.milliseconds += Ticker.shared.deltaMS;

      if (this.milliseconds > UPDATE_TIME_IN_MS) {
        this.milliseconds = 0;
        this.animate();
      }
    });
  }

  animate() {
    this.grid = makeNewGeneration(this.grid);
    this.graphics.clear();
    this.stage.addChild(this.graphics);
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === 1) {
          this.graphics.beginFill(LIGHT_BLUE_COLOR);
          this.graphics.drawRect(
            cellIndex * RECT_WIDTH + RECT_MARGIN,
            rowIndex * RECT_HEIGHT + RECT_MARGIN,
            RECT_WIDTH,
            RECT_HEIGHT
          );
          this.graphics.endFill();
        }
      });
    });

    this.app.render(this.stage);
  }

  get appView(): any {
    return this.app.view;
  }
}

export default Grid;
