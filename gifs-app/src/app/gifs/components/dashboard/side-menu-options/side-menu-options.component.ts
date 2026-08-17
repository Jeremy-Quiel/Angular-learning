import { Component } from '@angular/core';
import { MenuOptions } from '../../../interfaces/dashboard/MenuOptions.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOptions[] = [
    {
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-trophy'
    },

    {
      label: 'Search',
      sublabel: 'Search Gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ]
}
