import { Component, OnInit } from '@angular/core';

import { Autenticacao } from '../services/autenticacao.service';

@Component({
  selector: 'app-gestao-funcionalidades',
  templateUrl: './gestao-funcionalidades.component.html',
  styleUrls: ['./gestao-funcionalidades.component.scss']
})
export class GestaoFuncionalidadesComponent implements OnInit {

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit(): void {
  }

  public sair() : void {
    console.log('SAIR')
    this.autenticacao.sair();
  }

}
