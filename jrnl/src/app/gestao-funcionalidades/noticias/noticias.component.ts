import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Autenticacao } from '../../services/autenticacao.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {


displayedColumns: string[] = ['id', 'categoria', 'titulo', 'descricao_noticia'];
  dataSource = ELEMENT_DATA;

  constructor(private autenticacao: Autenticacao,
              private router: Router,
              private noticiaService: NoticiasService) { }

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


];


