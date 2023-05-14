import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Grid from './grid';

@customElement('pixi-grid')
export class PixiGrid extends LitElement {
  @property()
  grid: any = new Grid();

  render() {
    return html`${this.grid.appView}`;
  }
}
