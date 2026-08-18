import { Gif } from "../interfaces/giphy/Gif.interface";
import { GiphyItem } from "../interfaces/giphy/Giphy.interface";

export class GifMapper{
  static giphyToGifMapper(item: GiphyItem ): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }

  static giphyListToGifList(list: GiphyItem[]): Gif[] {
    return list.map(this.giphyToGifMapper)
  }

}