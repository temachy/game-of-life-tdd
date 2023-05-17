import { Router } from '@vaadin/router';
import './game-of-life-tdd';
import './components/PixiGrid/pixi-grid';
import './components/DOMGrid/dom-grid';

const routes = [
  {
    path: '/',
    component: 'game-of-life-tdd',
    children: [
      {
        path: 'dom-grid',
        component: 'dom-grid',
      },
      {
        path: 'pixi-grid',
        component: 'pixi-grid',
      },
    ],
  },
];

const root = document.getElementById('root');
export const router = new Router(root);
router.setRoutes(routes);
