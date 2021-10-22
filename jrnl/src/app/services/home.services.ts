import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Noticia } from '../models/noticia.model';


@Injectable()
export class HomeService  {

    public noticias: Noticia[]

    constructor(private http: HttpClient) {  }


public async getNoticias(): Promise<Noticia[]> {

    await this.http.get<Noticia[]>("../assets/db/noticias.json")
            .subscribe(noticias => this.noticias = noticias)

    return new Promise((resolve, reject) => {
      let deu_certo = true

      if(deu_certo) {
        setTimeout(() => resolve(this.noticias ), 1000)
      } else {
        reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
      }
    })
    .then(( noticias: Noticia[]) => {
      // pode executar tratativas antes de retornar o resolve
      //console.log('Primeiro then')
      return noticias
    })
    .then((noticias: Noticia[]) => {
      //console.log('segundo then')
      return new Promise((resolve2, reject2) => {
        setTimeout(() => { resolve2( noticias )}, 2000)
      })
    })
    .then((noticias: Noticia[]) => {

      //console.log('Terceiro then')
      return noticias
    });
  }


}
