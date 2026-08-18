import { Component, computed, inject, input} from '@angular/core';
import { GifsListItemComponent } from "../gifs-list-item.component/gifs-list-item.component";
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
 
  gifsService = inject(GifsService)
  gifs_type = input.required<string>()

}
