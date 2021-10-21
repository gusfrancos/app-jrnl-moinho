import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Autenticacao } from '../services/autenticacao.service';


@Component({
  selector: 'app-gestao-funcionalidades',
  templateUrl: './gestao-funcionalidades.component.html',
  styleUrls: ['./gestao-funcionalidades.component.scss']
})
export class GestaoFuncionalidadesComponent implements OnInit {

  constructor(private autenticacao: Autenticacao, private router: Router) { }

  public verNoticia: boolean = false;

  ngOnInit(): void {
  }

  public sair() : void {
    console.log('SAIR')
    this.autenticacao.sair();
    this.router.navigate(['acesso'])
  }

  public irPara(menu: string) : void {
    console.log('VER_NOTICIA: TRUE' )
    this.verNoticia = true;
  }

}
