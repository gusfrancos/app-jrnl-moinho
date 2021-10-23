import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor() { }

  list() {
    return {_id: '1', categoria: 'Hydrogen', titulo: 'Com Dona Flor', descricao_noticia: 'descricao_noticia'};
  }


}
