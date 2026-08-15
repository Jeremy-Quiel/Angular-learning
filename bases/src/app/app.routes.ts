import { Routes } from '@angular/router';
import { counterComponent } from './pages/counter/counter.component';
import { heroComponent } from './pages/hero/hero.component';
import { _404Component } from './pages/404/404.component';
import { dragonballComponent } from './pages/dragonball/dragonball.component';
import { dragonballSuperComponent } from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
  {
    path: '',
    component: counterComponent
  },

  {
    path: 'hero',
    component: heroComponent
  },

  {
    path: "dragonball",
    component: dragonballComponent
  },

  {
    path: 'dragonballsuper',
    component: dragonballSuperComponent
  },

  {
    path: '**',
    component: _404Component
  }
];
