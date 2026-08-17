import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SideMenuHeaderComponent } from '../../components/dashboard/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/dashboard/side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
