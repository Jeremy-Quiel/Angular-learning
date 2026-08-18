import { Component } from '@angular/core';
import { GifsListComponent } from '../../components/gifs/gifs-list.component/gifs-list.component';

@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending.component.html',
})
export default class TrendingComponent {}
