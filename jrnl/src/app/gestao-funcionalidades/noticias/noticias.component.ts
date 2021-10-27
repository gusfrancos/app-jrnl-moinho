import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/models/noticia.model';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Autenticacao } from '../../services/autenticacao.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {

dataSource$: Observable<Noticia[]>;
displayedColumns: string[] = ['id', 'categoria', 'titulo', 'descricao_noticia'];


  constructor(private autenticacao: Autenticacao,
              private router: Router,
              private noticiaService: NoticiasService) {

                this.dataSource$ =  this.noticiaService.listAll();
              }

  ngOnInit(): void {
    if(!this.autenticacao.autenticado){
      console.log(' NÃO AUTENTICADO')
      this.router.navigate(['acesso'])

    }
  }
}
