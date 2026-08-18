import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
})
export default class SearchComponent {

  gifsService = inject(GifsService)

  onSearch(query: string){
    this.gifsService.requestForSearchGifs(query)
  }
}
