import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/Giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
  
  private http = inject(HttpClient) // objeto http para crear request (POST, GET, DELETE, etc...)

  constructor(){
    this.requestForTrendingGifs()
  }

  requestForTrendingGifs(){
    // Hacer peticion http que regresa un GiphyResponse
    this.http.get<GiphyResponse>('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    })

  }
  
}