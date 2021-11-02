import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Noticia } from 'src/app/models/noticia.model';
import { NoticiasService } from 'src/app/services/noticias.service';

import { Autenticacao } from '../../services/autenticacao.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

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
              private noticiaService: NoticiasService,
              public dialog: MatDialog) {

                this.dataSource$ =  this.noticiaService.listAll()
                  .pipe(
                    catchError(error => {
                      this.onError('Não foi possível carregar a lista de notícias')
                      //Este of cria um observable
                      return of ([])
                    })
                  );
              }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
        }
      );
    }

  ngOnInit(): void {
    if(!this.autenticacao.autenticado){
      console.log(' NÃO AUTENTICADO')
      this.router.navigate(['acesso'])

    }
  }
}
