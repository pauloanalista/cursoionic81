import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'visual',
    pathMatch: 'full',
  },
  {
    path: 'visual',
    loadComponent: () => import('./pages/visual/visual.page').then( m => m.VisualPage)
  },
  {
    path: 'comportamental',
    loadComponent: () => import('./pages/comportamental/comportamental.page').then( m => m.ComportamentalPage)
  },
  {
    path: 'nativo',
    loadComponent: () => import('./pages/nativo/nativo.page').then( m => m.NativoPage)
  },
];
