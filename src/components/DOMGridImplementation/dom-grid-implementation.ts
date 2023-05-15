import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../Cell/grid-cell';
import { generateGrid, makeNewGeneration } from '../../utils/grid';

@customElement('dom-grid-implementation')
export class DOMGridImplementation extends LitElement {
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
    .row {
      display: flex;
      box-sizing: border-box;
    }
  `;

  render() {
    return html` <div>
      ${this.grid.map(
        row =>
          html`<div class="row">
            ${row.map(cell => html`<grid-cell .isActive=${cell}></grid-cell>`)}
          </div>`
      )}
    </div>`;
  }
}
