import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Autenticacao } from '../../services/autenticacao.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {


displayedColumns: string[] = ['id', 'categoria', 'titulo', 'descricao_noticia'];
  dataSource = ELEMENT_DATA;

  constructor(private autenticacao: Autenticacao, private router: Router) { }

  ngOnInit(): void {
    if(!this.autenticacao.autenticado){
      console.log(' NÃO AUTENTICADO')
      this.router.navigate(['acesso'])

    }
  }
}






export interface NoticiaElement {
  _id: string
  categoria: string
  titulo: string
  descricao_noticia: string

}

const ELEMENT_DATA: NoticiaElement[] = [
  {_id: '1', categoria: 'Hydrogen', titulo: 'Com Dona Flor', descricao_noticia: 'descricao_noticia'},

];


