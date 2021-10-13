import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../../services/autenticacao.service';
import * as firebaseAuth from "firebase/auth";


@Component({
  selector: 'app-gestao-funcionalidades',
  templateUrl: './gestao-funcionalidades.component.html',
  styleUrls: ['./gestao-funcionalidades.component.css']
})
export class GestaoFuncionalidadesComponent implements OnInit {

  public  email: string | undefined;
  closeResult: string | undefined;


  constructor(private autenticacao: Autenticacao) { }

  ngOnInit(): void {
    firebaseAuth.getAuth().onAuthStateChanged((user) => {

      this.email = user?.email === null ? '' : user?.email;
    })
  }

  public sair() : void {
    this.autenticacao.sair();
  }

}
