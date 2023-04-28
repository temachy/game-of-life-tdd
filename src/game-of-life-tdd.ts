import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/Cell/grid-cell';
import { generateGrid, makeNewGeneration } from './utils/grid';

@customElement('game-of-life-tdd')
export class GameOfLifeTdd extends LitElement {
  @property()
  grid: number[][] = generateGrid(80, 100);
  updateInterval: NodeJS.Timer | undefined;

  updateGridToNextGeneration() {
    this.grid = makeNewGeneration(this.grid);
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateInterval = setInterval(
      () => this.updateGridToNextGeneration(),
      100
    );
  }

  disconnectedCallback() {
    super.connectedCallback();
    clearInterval(this.updateInterval);
  }

  static styles = css`
    main {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }

    .row {
      display: flex;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`<main>
      <div class="container">
        ${this.grid.map(
          row =>
            html`<div class="row">
              ${row.map(
                cell => html`<grid-cell .isActive=${cell}></grid-cell>`
              )}
            </div>`
        )}
      </div>
    </main> `;
  }
}
