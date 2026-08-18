import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsListComponent } from '../../components/gifs/gifs-list.component/gifs-list.component';

@Component({
  selector: 'app-search',
  imports: [GifsListComponent],
  templateUrl: './search.component.html',
})
export default class SearchComponent {

  gifsService = inject(GifsService)

  onSearch(query: string){
    this.gifsService.requestForSearchGifs(query)
  }
}
