import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from '../side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../side-menu-options/side-menu-options.component';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  env = environment
}
