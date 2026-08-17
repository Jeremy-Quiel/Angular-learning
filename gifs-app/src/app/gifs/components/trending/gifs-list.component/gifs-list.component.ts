import { Component, signal, WritableSignal } from '@angular/core';
import { GifsListItemComponent } from "../gifs-list-item.component/gifs-list-item.component";

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {

  srcs: WritableSignal<string[]> = signal<string[]>(['https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'])

  constructor(){
    for(let i = 1; i <= 11; i ++){
      let src: string = 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image' + '-' + i +'.jpg'
      this.srcs.update(c => [...c, src])
    }
  }


}
