import { Routes } from '@angular/router';
import { counterComponent } from './pages/counter/counter.component';
import { heroComponent } from './pages/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: counterComponent
  },

  {
    path: 'hero',
    component: heroComponent
  }
];
