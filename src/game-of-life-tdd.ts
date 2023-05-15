import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/DOMGridImplementation/dom-grid-implementation';
@customElement('game-of-life-tdd')
export class GameOfLifeTdd extends LitElement {
  static styles = css`
    main {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }
  `;

  render() {
    return html`<main>
      <dom-grid-implementation></dom-grid-implementation>
    </main> `;
  }
}
