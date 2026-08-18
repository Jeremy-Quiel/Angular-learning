import { Component, inject } from '@angular/core';
import { GifsListComponent } from '../../components/trending/gifs-list.component/gifs-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending.component.html',
})
export default class TrendingComponent {
  gifsService = inject(GifsService)
}
