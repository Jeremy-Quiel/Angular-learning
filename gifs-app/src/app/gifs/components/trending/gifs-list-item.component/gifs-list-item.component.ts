import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/giphy/Gif.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
})
export class GifsListItemComponent {
  gif = input.required<Gif>()
}
