import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/Counter.component';
import { HeroComponent } from './pages/hero/Hero.component';
import { _404Component } from './pages/404/404.component';
import { DragonballComponent } from './pages/dragonball/Dragonball.component';
import { DragonballSuperComponent } from './pages/dragonball-super/Dragonball-Super.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },

  {
    path: 'hero',
    component: HeroComponent
  },

  {
    path: "dragonball",
    component: DragonballComponent
  },

  {
    path: 'dragonballsuper',
    component: DragonballSuperComponent
  },

  {
    path: '**',
    component: _404Component
  }
];
