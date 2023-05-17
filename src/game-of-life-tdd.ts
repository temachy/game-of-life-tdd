import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/DOMGrid/dom-grid';

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
    return html` <header>
        <a href="/dom-grid">Dom grid</a>
        <a href="/pixi-grid">Canvas/WebGL grid</a>
      </header>
      <main>
        <slot></slot>
      </main>`;
  }
}
