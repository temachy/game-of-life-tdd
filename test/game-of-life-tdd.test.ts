import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { GameOfLifeTdd } from '../src/game-of-life-tdd.js';
import '../src/game-of-life-tdd.js';

describe.skip('GameOfLifeTdd', () => {
  let element: GameOfLifeTdd;
  beforeEach(async () => {
    element = await fixture(html`<game-of-life-tdd></game-of-life-tdd>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
