import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly API = '../../assets/noticias/noticias.json'
  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Noticia[]>(this.API)
    .pipe(
      first(),
      //delay(15000),
      tap(not => console.log(not)))
  }


}
