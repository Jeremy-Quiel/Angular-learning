import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy/Giphy.interface';
import { GifMapper } from '../mappers/gif.mapper';
import { Gif } from '../interfaces/giphy/Gif.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
  
  private http = inject(HttpClient) // objeto http para crear request (POST, GET, DELETE, etc...)

  trendingGifs = signal<Gif[]>([])
  searchGifs = signal<Gif[]>([])

  constructor(){
    this.requestForTrendingGifs()
  }

  requestForTrendingGifs(){
    // Hacer peticion http que regresa un GiphyResponse
    // Peticion GET el URL + parametros
    this.http.get<GiphyResponse>('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    }).subscribe(
      (r) => {
        this.setGifs(r)
      },
    );

  }

  requestForSearchGifs(query: string) {
    this.http.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: 20,
      }
    }).subscribe(
      (r) => {
        this.setGifs(r, "search")
      },
    );

  }

  private setGifs(response: GiphyResponse, gifs_type: string = "trending"){
    // item.data es el json del response
    const gifs = GifMapper.giphyListToGifList(response.data)

    if (gifs_type == "trending"){
      this.trendingGifs.set(gifs)
    }

    if (gifs_type == "search"){
      this.searchGifs.set(gifs)
    }

    console.log(gifs)
  }
  
}