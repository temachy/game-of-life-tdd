import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

@customElement('grid-cell')
export class GridCell extends LitElement {
  static styles = css`
    .cell {
      width: 10px;
      height: 10px;
      border: 1px solid rgba(86, 91, 0, 0.12);
    }

    .active {
      background-color: purple;
    }
  `;

  @property()
  isActive = 0;

  render() {
    return html`<div
      class=${classMap({ cell: true, active: !!this.isActive })}
    ></div>`;
  }
}
